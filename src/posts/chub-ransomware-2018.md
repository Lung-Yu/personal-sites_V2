---
slug: chub-ransomware-2018
type: article
platform: Personal
date_en: "Jun 2026"
date_zh: "2026年6月"
tags: [Security, Incident Response, IoT, Ransomware, Malware]
featured: false
title_en: "Ransomware + Crypto Miner on the Same IoT Backend: A 2018 Incident Analysis"
title_zh: "勒索軟體 + 挖礦木馬同台：2018 年智慧校園伺服器入侵分析"
teaser_en: "In early 2018 I was asked to investigate a compromised NCKU smart campus server. It had been hit by both ransomware and a CPU miner. Here's what the analysis found."
teaser_zh: "2018 年初受邀協助調查 NCKU 智慧校園計畫的受駭伺服器，發現同時存在勒索軟體與 CPU 挖礦木馬。這篇記錄當時的分析結果。"
---

In early 2018 I was asked to help investigate a server used by the NCKU C-Hub smart campus project after it had already been compromised. The server aggregated environmental sensor data — temperature, humidity, CO₂, PM2.5 — from nodes deployed across campus, with WordPress as the front-end dashboard. By the time I was brought in, files had already been encrypted and a ransom note had been left.

What I found on that server was two separate infections running simultaneously.

## The two payloads

**byaki_buki ransomware**

byaki_buki is a file-encrypting ransomware active in 2017–2018, documented on Chinese- and Russian-language security communities (anquanke.com, itsecurity-ru.com). It encrypts target files, renames them with a custom extension, and drops a ransom note.

The note on this server — `README.txt` — instructed the recipient to contact `blackdragon43@yahoo.com` for decryption. The payload had already completed its encryption pass and exited by the time I started the investigation. It was no longer running; only the encrypted files and the note remained.

Affected: months of accumulated sensor data files, internal project documents. Without the decryption key, these were unrecoverable.

**XMRig CPU miner**

XMRig is open-source Monero mining software frequently repurposed as malware when silently deployed on compromised hosts. Unlike the ransomware, it was still actively running at investigation time — visible in process listings, with sustained elevated CPU usage and outbound connections to a remote mining pool.

## Why both on the same host

These two payloads were placed by different threat actors independently, which is normal for opportunistically compromised servers. Automated scanners probe large IP ranges for exposed ports and known vulnerabilities, deploy payloads without coordination, and move on. This server was found by two separate campaigns.

The payloads have non-overlapping resource requirements. The miner needs the host alive and connected indefinitely — it has strong incentive not to disrupt the system. The ransomware runs once, encrypts, leaves a note, and exits — no persistence needed. There's no conflict between them, which is why co-infection is possible.

A server showing two simultaneous independent infections has typically been exposed and exploitable for an extended window. One infection is bad luck; two is a measurement of how long the exposure lasted.

## Investigation

The investigation on 2018-01-16 produced a complete server inspection checklist. Reference materials: anquanke.com, easyremovemalware.com, itsecurity-ru.com.

**Process audit (`ps aux`)**: XMRig confirmed running, identifiable by process name and CPU profile.

**Persistence check (crontab, init scripts)**: Checked for mechanisms that would relaunch the miner after termination. Persistence entries were present and removed.

**File system review**: Identified the ransomware's encryption scope — which directories had been affected, the renamed file pattern, and where the ransom note was placed.

**Network connections (`netstat`)**: Confirmed active outbound connection from XMRig to the mining pool address. Miner killed, pool address noted.

**Log review**: Used system logs to narrow down the initial compromise window and assess what access the attacker had before the payloads were deployed.

The miner was terminated and removed. The encrypted files had no remediation path without the decryption key.

## Aftermath

System instability continued for months. Between 2018-02-05 and 2018-06-10, we logged 21 crash and service-termination incidents. Removing active malware doesn't restore a system to a clean state — the attacker had dwell time sufficient to alter the environment in ways that surface gradually. A full rebuild would have been the correct remediation; in practice, this was a research project without dedicated operations resources, so the response was monitoring and incremental patching.

## Notes on IoT backend exposure

The sensors themselves weren't the attack surface. The attack surface was the Linux server running a public-facing CMS that collected and displayed their data. This is consistent across IoT deployments: the embedded hardware is often network-isolated by design, but the backend aggregating its output is a conventional internet-facing server with a conventional vulnerability profile.

Treat any internet-accessible IoT data backend the same as any other internet-facing server: patch cadence, service minimisation, monitoring, restricted ingress. "It's just a sensor dashboard" is not a threat model.

<!-- zh -->

2018 年初，NCKU C-Hub 智慧校園計畫的伺服器遭到入侵，我受邀協助調查。這台伺服器以 WordPress 為前端，彙整校園各點位的環境感測資料（溫度、濕度、CO₂、PM2.5）。我進入調查時，檔案已被加密，勒索信已留下。

伺服器上同時存在兩個各自獨立的感染。

## 兩個 payload

**byaki_buki 勒索軟體**

byaki_buki 是 2017–2018 年間活躍的檔案加密型勒索軟體，中文與俄文資安社群均有記錄（anquanke.com、itsecurity-ru.com）。它加密目標檔案、重新命名並附加特定副檔名，留下勒索信。

伺服器上的勒索信（`README.txt`）要求聯絡 `blackdragon43@yahoo.com` 洽談解密。在我開始調查時，payload 已完成加密例程並退出，不在執行中；只剩被加密的檔案和勒索信。

受影響範圍：數個月累積的感測器資料檔、計畫內部文件。沒有解密金鑰，這些資料無法復原。

**XMRig CPU 挖礦木馬**

XMRig 是開源的 Monero 挖礦軟體，常被攻擊者無聲部署在受入侵的主機上當作惡意程式使用。和勒索軟體不同，它在調查時仍在執行中——從行程列表可見，CPU 持續高占用，並對外連線至遠端礦池。

## 為什麼同一台主機有兩個攻擊者

這兩個 payload 由不同的攻擊者各自獨立放置，這在機會主義攻擊的目標上很常見。自動化掃描器大範圍掃描 IP，找到暴露的連接埠與已知漏洞後部署 payload，彼此之間沒有協調。這台伺服器被兩個不同的掃描活動各自找到。

兩個 payload 的資源需求不重疊。挖礦木馬需要主機保持運作且長期連線，有強烈的動機不破壞系統。勒索軟體執行一次、加密、留下勒索信、退出，不需要持久性。兩者之間沒有衝突，這就是共存得以發生的原因。

同一台主機出現兩個獨立感染，通常代表它已在可被利用的狀態下暴露了相當長的時間。一個感染是運氣不好；兩個獨立感染，是對暴露時間長度的測量。

## 調查過程

2018-01-16 當天完成了完整的伺服器檢核表。參考資料：anquanke.com、easyremovemalware.com、itsecurity-ru.com。

**行程稽核（`ps aux`）**：確認 XMRig 正在執行，可由行程名稱與 CPU 占用特徵識別。

**持久性檢查（crontab、init scripts）**：確認是否有在挖礦程式被終止後重新啟動的機制，發現後移除。

**檔案系統審查**：確認勒索軟體的加密範圍——哪些目錄受影響、重新命名的檔案模式、勒索信的位置。

**網路連線（`netstat`）**：確認 XMRig 對外連線至礦池位址，終止行程並記錄位址。

**日誌審查**：利用系統日誌縮小最初入侵的時間窗口，評估 payload 部署前攻擊者的存取範圍。

挖礦程式已終止並移除。被加密的檔案在沒有解密金鑰的情況下沒有復原路徑。

## 後續影響

系統在之後數個月持續不穩定。從 2018-02-05 到 2018-06-10，記錄了 21 次崩潰與服務中止事件。移除惡意程式不等於系統回到乾淨狀態——攻擊者有足夠的駐留時間改變環境，這些影響會逐漸浮現。正確的修復方式是完整重建；實際上這是一個沒有專職維運資源的研究計畫，做到的是持續監控與逐步修補。

## IoT 後端暴露的幾點觀察

感測器本身不是攻擊面。攻擊面是那台跑著公開 CMS 的 Linux 伺服器，負責蒐集並呈現感測資料。這在 IoT 部署中是一致的模式：嵌入式硬體通常有設計上的網路隔離，但彙整其輸出的後端是一台標準的對外伺服器，有標準的弱點分佈。

任何對外可連線的 IoT 資料蒐集後端，都要用對待任何對外服務的伺服器的標準來處理：修補節奏、最小化服務暴露、監控、限制入站。「這只是個感測器儀表板」不是一個威脅模型。

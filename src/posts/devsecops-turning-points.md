---
slug: devsecops-turning-points
type: article
platform: Personal
date_en: "Mar 2026"
date_zh: "2026年3月"
tags: [DevSecOps, Security, Agile]
featured: true
title_en: "DevSecOps Turning Points: 3 Lessons from Integrating Security into Agile Teams"
title_zh: "DevSecOps 轉捩點：安全融入敏捷團隊的 3 個關鍵教訓"
teaser_en: "Security doesn't fail because of tools. It fails because of timing and framing. Three hard-won lessons from building DevSecOps at scale."
teaser_zh: "安全機制失敗不是因為工具不好，而是時機與框架的問題。從實戰中總結的三個關鍵轉捩點。"
---

After three years of building DevSecOps processes at a Gamania subsidiary, I've come to one conclusion: security doesn't fail because of tools. It fails because of timing and framing.

Here are three turning points that changed how I approach secure software development.

## 1. Security gates that block are security gates that get bypassed

The first CI/CD security pipeline I built was technically correct. SAST scanner runs on every PR, findings block the merge. Within two months, the team had mastered three bypass tactics:

- Suppress false positives by category — for entire rule classes, indefinitely
- Disable rules "for expediency" with a YAML comment
- Route around the gate with a manager `override` flag

The problem wasn't the scanner. The problem was that developers experienced security as an **adversary** — something that stopped their work. The fix: **change the feedback loop.** Move findings to warnings, explain why each category matters, let teams own their risk. Blocked pipelines teach avoidance. **Visible risk teaches judgment.**

## 2. The hardest sell isn't to developers — it's to product owners

I spent the first year convincing developers. The second year I realised the real audience was product owners and tech leads. A developer who understands an injection risk will still merge vulnerable code if the sprint deadline hits and no one above them has explicitly said "this risk is not acceptable."

DevSecOps requires security to be a product concern, not a delivery blocker. That meant producing two-page risk summaries instead of CVSS score spreadsheets, and framing conversations as "this is a business continuity question" rather than "this violates our policy." Security literacy at the business level is the actual force multiplier.

## 3. AI accelerates both attack surface and defence — and you need to be ready for both

Since 2024, every team I work with has GitHub Copilot or similar. AI code generation is orders of magnitude faster than human typing. It's also orders of magnitude faster at producing insecure patterns — hardcoded secrets, trusting user input, missing auth checks — because the training data contains a lot of old, vulnerable code.

The answer isn't to ban AI tooling. The answer is to run SAST rules specifically tuned to AI-generated pattern antipatterns, to build prompt libraries that include security requirements, and to treat AI output with the same review standards as junior developer output: thorough, not assumed correct.

The DevSecOps stack hasn't changed fundamentally. What's changed is the rate of production — and that means framing, tooling, and education all need to operate at the same velocity.

<!-- zh -->

在 Gamania 子公司建立 DevSecOps 流程三年後，我得出一個結論：安全機制失敗，不是因為工具不好，而是因為時機與框架的問題。

以下是三個改變我對安全軟體開發看法的轉捩點。

## 1. 阻擋開發的安全關卡，最終會被繞過

我第一條 CI/CD 安全流水線技術上是正確的：每個 PR 執行 SAST 掃描，有發現就阻擋合併。不到兩個月，團隊習得了三種繞過手法：

- 對整個規則類批次壓制誤報，無限期有效
- 在 YAML 裡加一行注釋，以「加速開發」為由停用規則
- 透過主管的 `override` 旗標直接跳過關卡

問題不在掃描器，而在開發者把安全當成**對手**——一個阻礙他們工作的東西。解法是：**改變回饋循環。** 先把發現改為警告，說明每個類別的重要性，讓團隊自己決定承擔哪些風險。被阻擋的流水線教會的是「如何繞過」，**可見的風險教會的是「如何判斷」。**

## 2. 最難說服的不是開發者，是產品負責人

第一年我花在說服開發者上。第二年我發現真正的對象是產品負責人和技術主管。一個懂注入風險的開發者，在 Sprint 截止日快到、上面沒人明確說「這個風險不可接受」的情況下，還是會把有漏洞的程式碼合進去。

DevSecOps 需要安全成為產品關注事項，而不是交付的阻礙。這代表要產出兩頁的風險摘要，而不是 CVSS 分數試算表；要把對話框架成「這是業務持續性問題」，而不是「這違反了我們的政策」。提升業務層面的資安素養，才是真正的槓桿點。

## 3. AI 同時加速攻擊面與防禦能力——你需要兩者都準備好

2024 年以來，我接觸的每個團隊都在用 GitHub Copilot 或類似工具。AI 生成程式碼的速度比人打字快好幾個數量級，但它生產不安全模式的速度也一樣快——硬編碼密鑰、信任使用者輸入、缺少驗證——因為訓練資料裡有大量舊的、有漏洞的程式碼。

答案不是禁用 AI 工具，而是跑針對 AI 生成反模式調校過的 SAST 規則、建立包含安全需求的 Prompt 文庫，並用對待初級開發者產出同等的審查標準來看待 AI 輸出：徹底審查，而非假設正確。

DevSecOps 工具鏈本質上沒有改變，改變的是生產速度——這代表框架、工具和教育都需要以同樣的速度運作。

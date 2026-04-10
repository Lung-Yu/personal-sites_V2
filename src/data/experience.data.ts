import type { ExperienceEntry, EducationEntry, Certification } from './types'

export const experience: ExperienceEntry[] = [
  {
    company: 'Cloudforce Co., Ltd. (雲力橘子)',
    companyZh: '雲力橘子數位股份有限公司',
    companyNote: {
      en: 'Gamania subsidiary · formerly 果核數位 (Digicentre)',
      zh: '遊戲橘子子公司 · 前身為果核數位',
    },
    teamContext: {
      en: 'Technical Manager of the Tech Development Division (team of 2–5), responsible for backend architecture, security engineering, and cloud infrastructure. Products: Polisana — an AI-native vulnerability management platform built in-house (microservices) — and an AI-powered security consultant system.',
      zh: '技術開發部門技術經理，帶領 2~5 人工程團隊，負責後端架構設計、安全工程及雲端基礎設施。主要產品：Polisana — 自行研發的 AI-native 弱點管理平台（微服務架構）— 及 AI 資安顧問系統。',
    },
    title: { en: 'Technical Manager', zh: '技術經理' },
    period: { en: 'Apr 2025 — Present', zh: '2025年4月 — 至今' },
    location: { en: 'New Taipei City, Taiwan', zh: '台灣，新北市' },
    highlights: {
      en: [
        'Lead product ownership and set secure development standards across engineering teams.',
        'Conduct architecture security assessments and drive technical leadership for product development.',
        'Built and operate Polisana, an AI-native vulnerability management platform developed entirely in-house using microservices architecture; evolved infrastructure from on-demand GKE to fully IaC-managed GCP deployment (Terraform), improving reliability and scalability.',
        'Delivered Phase 3 (Stage 2) of a multi-year black/white-box automated scanning engagement for a listed financial institution — final milestone of a 3-year continuous project — going live on schedule in September 2025.',
        'Led Japan API integration project to successful v1.0.0 production launch, enforcing architecture review and security code review standards.',
        'Built an AI-powered security consultant using RAG pipelines and LLM integration, enabling automated security Q&A and knowledge retrieval.',
        'Independently completed R&D tax incentive filing for the department, delivering additional corporate tax savings.',
        'Led cross-departmental coordination to revise the company\'s ISMS software acquisition, development, and maintenance policy, aligning secure development standards across engineering, security, and management teams.',
        'Hands-on: architected and developed backend microservices with Java Spring Boot, Hexagonal Architecture, CQRS, and Event Sourcing; independently built the AI security consultant end-to-end (Python, RAG, pgvector, Cloud Run); scaled Terraform IaC from 3 to 69 resources.',
      ],
      zh: [
        '主導產品規劃，制定跨工程團隊的安全開發標準。',
        '執行架構安全評估，推動產品開發的技術領導。',
        '自行開發並持續營運 Polisana AI-native 弱點管理平台（微服務架構）；基礎設施從 On-demand GKE 演進為完整 IaC 管理的 GCP 部署（Terraform），提升可靠性與可擴展性。',
        '完成金融上市公司黑白箱自動化掃描系統三年合作的最終里程碑（第三階段二期），2025 年 9 月如期上線交付。',
        '主導日本 API 串接專案順利完成 1.0.0 上線，建立架構審查與安全碼審標準。',
        '以 RAG 流水線與 LLM 整合，獨力打造 AI 驅動資安顧問系統，實現自動化資安問答與知識檢索。',
        '獨立完成部門研發投資抵減申報，為公司創造額外稅務節省效益。',
        '主導跨部門協調，推動公司 ISMS「資通系統獲取、開發及維護管理辦法」修訂，整合工程、資安與管理團隊的安全開發規範。',
        '親自動手：以 Java Spring Boot + Hexagonal Architecture + CQRS + Event Sourcing 設計並開發後端微服務；獨力完成 AI 資安顧問系統端對端（Python、RAG、pgvector、Cloud Run）；Terraform IaC 從 3 個資源擴展至 69 個。',
      ],
    },
    techStack: ['Java', 'Spring Boot', 'Hexagonal Architecture', 'CQRS', 'Event Sourcing', 'KrakenD', 'GKE', 'ArgoCD', 'Kafka', 'KEDA', 'Terraform', 'OpenTelemetry', 'Python', 'RAG', 'pgvector', 'Keycloak OAuth2', 'Sealed Secrets', 'GitHub Copilot', 'Claude'],
  },
  {
    company: 'AI Network (全智網科技)',
    companyZh: '全智網科技',
    companyNote: {
      en: 'Cybersecurity & AI course training institution',
      zh: '資安暨 AI 課程訓練機構',
    },
    title: { en: 'SSDLC Instructor', zh: '講師' },
    period: { en: 'Apr 2025 — Present', zh: '2025年4月 — 至今' },
    location: { en: 'Taiwan', zh: '台灣' },
    highlights: {
      en: [
        'Design and deliver DevSecOps courses and secure coding training programmes.',
        'Develop curriculum bridging AI integration with secure software development practices.',
        'Hands-on: developed course demo applications and lab environments using Java Spring Boot, React, and Docker.',
      ],
      zh: [
        '設計並講授 DevSecOps 課程及安全編碼訓練課程。',
        '開發結合 AI 整合與安全軟體開發實踐的教學課綱。',
        '親自動手：以 Java Spring Boot、React 及 Docker 開發課程示範應用程式與實驗環境。',
      ],
    },
    techStack: ['Java', 'Spring Boot', 'React', 'Docker', 'Burp Suite', 'NotebookLLM'],
  },
  {
    company: 'Gtalent Co., Ltd. (大數智能教育)',
    companyZh: '大數智能教育',
    companyNote: {
      en: 'Digital talent training & placement platform',
      zh: '數位人才培訓與媒合平台',
    },
    title: { en: 'Instructor', zh: '講師' },
    period: { en: 'Nov 2025 — Present', zh: '2025年11月 — 至今' },
    location: { en: 'Taiwan', zh: '台灣' },
    highlights: {
      en: [
        'Deliver AI application and intelligent education course modules.',
        'Develop special-topic course materials on AI integration in software development.',
        'Hands-on: developed AI-integrated demo applications and course materials using Java Spring Boot, React, and Docker.',
      ],
      zh: [
        '講授 AI 應用與智能教育相關課程模組。',
        '開發以 AI 融入軟體開發為主題的專題課程教材。',
        '親自動手：以 Java Spring Boot、React 及 Docker 開發 AI 整合示範應用與課程教材。',
      ],
    },
    techStack: ['Java', 'Spring Boot', 'React', 'Docker', 'NotebookLLM'],
  },
  {
    company: 'Digicentre Co., Ltd. (果核數位)',
    companyZh: '果核數位',
    companyNote: {
      en: 'now Cloudforce / 雲力橘子 · Gamania subsidiary',
      zh: '現更名為雲力橘子，遊戲橘子子公司',
    },
    teamContext: {
      en: 'Deputy Manager of the Tech Development Division, leading a team of 2–4 engineers; overseeing product development and DevSecOps practices. Products: Japan detection API integration service and a secure development workflow management platform (on-demand Kubernetes).',
      zh: '技術開發二部副理，帶領 2~4 人工程團隊（持續擴編期），負責產品開發與 DevSecOps 管理。主要產品：日本檢測 API 串接服務、安全開發流程輔助管理平台（On-demand k8s）。',
    },
    title: { en: 'Deputy Manager, Tech Development II', zh: '副理，技術開發二部' },
    period: { en: 'Aug 2024 — Mar 2025', zh: '2024年8月 — 2025年3月' },
    location: { en: 'Taiwan', zh: '台灣' },
    highlights: {
      en: [
        'Integrated security tooling into CI/CD pipelines to automate vulnerability scanning and compliance checks.',
        'Resolved a long-standing vendor dispute through technical clarification and compromise, saving millions in potential costs.',
        'Completed CSSLP certification and mentored interns, building a structured technical knowledge transfer process.',
        'Recipient of the 2023 Gama Star Award for project excellence.',
        'Hands-on: developed the secure development workflow management platform in C# .NET 8 with EF Core and Docker; led the Japan API project as the detection API provider, architecting and reviewing the App and source code scanning integration design.',
      ],
      zh: [
        '將安全工具整合至 CI/CD 流水線，自動化弱點掃描與合規檢查。',
        '以技術澄清與折衷方案解決長期懸而未決的廠商爭議，節省數百萬元潛在費用。',
        '取得 CSSLP 認證，指導實習生並建立結構化的技術傳承機制。',
        '榮獲 2023 年 Gama Star 專案卓越獎。',
        '親自動手：以 C# .NET 8 + EF Core 開發安全開發流程輔助管理平台（Docker 部署）；日本 API 專案中擔任檢測 API 提供方，主導 App 與原始碼檢測串接架構規劃與審查。',
      ],
    },
    techStack: ['C#', '.NET 8', 'EF Core', 'Docker', 'GitLab CI', 'DevSecOps'],
  },
  {
    company: 'Digicentre Co., Ltd. (果核數位)',
    companyZh: '果核數位',
    companyNote: {
      en: 'now Cloudforce / 雲力橘子 · Gamania subsidiary',
      zh: '現更名為雲力橘子，遊戲橘子子公司',
    },
    teamContext: {
      en: 'Software Development Security unit (2–3 person team), responsible for application security consulting, source code review services, and in-house security tooling R&D. Delivered two independent platforms: ScanPortal (one-stop web-based source code scanning platform, sold to 2 enterprise clients) and a black/white-box automated scanning platform sold to a listed financial institution — integrating WebInspect and Fortify SCA via Jenkins for distributed scanning and resource orchestration, with approval workflow integration.',
      zh: '軟體開發安全部門 2~3 人小組，負責應用程式安全顧問服務、原始碼檢測業務及內部安全工具研發。自主開發並交付兩套獨立平台：ScanPortal 一站式網頁原始碼檢測平台（已售出 2 家企業客戶）、以及售出 1 家金融上市櫃客戶的黑白箱自動化掃描平台 — 整合 WebInspect 與 Fortify SCA，透過 Jenkins 進行分散掃描與資源調控（Java Spring Boot、Flutter、自動化腳本），並整合客戶簽核流程。',
    },
    title: { en: 'Deputy Manager, Software Development Security', zh: '副理，軟體開發安全' },
    period: { en: 'Sep 2021 — Jul 2024', zh: '2021年9月 — 2024年7月' },
    location: { en: 'Taiwan', zh: '台灣' },
    highlights: {
      en: [
        'Designed enterprise-level DevSecOps processes, integrating security throughout the entire SDLC.',
        'Developed automation tools reducing team vulnerability-handling volume by 51%; built a self-service application security testing platform that eliminated 80% of repetitive manual operations, deployed to production for enterprise clients.',
        'Streamlined white-box security consulting SOP to achieve ~2× throughput improvement; led DevSecOps adoption engagements for 7+ enterprise clients across the financial and technology sectors.',
        'Served as the primary technical spokesperson within a Micro Focus MSSP Gold Partner team, representing the organisation at client-facing presentations and public tech sessions.',
        'Hands-on: personally built ScanPortal (full-stack web platform, sold to 2 enterprise clients); co-developed a financial-sector black/white-box automated scanning platform (Java Spring Boot, Flutter, Jenkins, WebInspect, Fortify SCA, automation scripts) with approval workflow and CI/CD integration, sold to a listed financial institution.',
      ],
      zh: [
        '設計企業級 DevSecOps 流程，將安全性整合至完整 SDLC 中。',
        '開發自動化工具，將團隊弱點處理量降低 51%；建立自助式應用程式安全檢測平台，消除 80% 的重複性人工作業，已正式供企業客戶使用。',
        '優化白箱安全顧問 SOP，效率提升約 2 倍；協助 7 家以上金融與科技產業企業客戶成功導入 DevSecOps。',
        '以 Micro Focus MSSP 金牌夥伴團隊主要技術代表身份，代表組織出席客戶簡報與公開技術分享活動。',
        '親自動手：建置 ScanPortal 全端平台（已售出 2 家企業客戶）；團隊共同開發金融業黑白箱自動化掃描平台（Java Spring Boot、Flutter、Jenkins、WebInspect、Fortify SCA、自動化腳本），整合客戶簽核流程與 CI/CD，售出 1 家金融上市櫃客戶。',
      ],
    },
    techStack: ['Java', 'Spring Boot', 'Flutter', 'Python', 'Jenkins', 'Fortify SCA', 'WebInspect', 'GitLab CI', 'Docker', 'GCP', 'Terraform'],
  },
  {
    company: 'PwC Taiwan',
    companyZh: '資誠聯合會計師事務所',
    teamContext: {
      en: 'Financial cybersecurity consulting team of 2–5, specialising in security assessments, penetration testing, and compliance audits for banking and insurance clients.',
      zh: '2~5 人金融資安顧問小組，專責銀行及保險業客戶的安全評估、滲透測試與合規稽核。',
    },
    title: { en: 'Security Consultant', zh: '資安顧問' },
    period: { en: 'Sep 2020 — Sep 2021', zh: '2020年9月 — 2021年9月' },
    location: { en: 'Taipei, Taiwan', zh: '台灣，台北市' },
    highlights: {
      en: [
        'Conducted financial sector security assessments including penetration testing, vulnerability analysis, and compliance audits.',
        'Performed malware analysis, packet capture analysis, and load/stress testing for banking institutions.',
        'Delivered risk assessment reports and remediation recommendations to enterprise clients.',
        'Hands-on: developed Python scripts for automated report generation and data parsing; built Linux CIS benchmark checking tools for configuration analysis and compliance validation.',
      ],
      zh: [
        '執行金融業資安評估，包含滲透測試、弱點分析與合規稽核。',
        '對銀行機構進行惡意程式分析、封包擷取分析及壓力測試。',
        '向企業客戶提交風險評估報告與改善建議。',
        '親自動手：以 Python 開發自動化報告產生與資料解析腳本；開發 Linux CIS 基準檢查工具，用於系統組態分析與合規驗證。',
      ],
    },
    techStack: ['Python', 'Bash', 'Burp Suite', 'Wireshark', 'testssl', 'Kali Linux'],
  },
]

export const education: EducationEntry[] = [
  {
    school: { en: 'National Yunlin University of Science and Technology', zh: '國立雲林科技大學' },
    degree: { en: "Master's — Computer Science & Information Engineering", zh: '碩士 — 資訊工程研究所' },
    period: '2016 — 2019',
    focus: {
      en: 'Image Processing · Audio Processing · Machine Learning · Deep Learning',
      zh: '影像處理 · 音訊處理 · 機器學習 · 深度學習',
    },
    projects: {
      en: [
        'Baby crying detection system using audio signal processing and deep learning classifiers',
        'License plate recognition application for Android using computer vision pipelines',
        'Text recognition system for handwritten paper forms (OCR research)',
      ],
      zh: [
        '以音訊訊號處理與深度學習分類器開發嬰兒哭聲偵測系統',
        '基於電腦視覺流水線的 Android 車牌辨識應用程式',
        '手寫紙本表單文字辨識系統（OCR 研究）',
      ],
    },
  },
  {
    school: { en: 'Kun Shan University', zh: '崑山科技大學' },
    degree: { en: "Bachelor's — Computer Science & Information Engineering", zh: '學士 — 資訊工程系' },
    period: '2012 — 2016',
    focus: {
      en: 'Software Development · System Programming · Network Engineering',
      zh: '軟體開發 · 系統程式設計 · 網路工程',
    },
    projects: {
      en: [
        'Excellence Award — National College Smart Electronics Integration Competition',
        'iWatchMan: Raspberry Pi-based network security monitoring system (DHCP snooping defense)',
        'Weather Seed: IoT environmental monitoring with Arduino sensor network',
      ],
      zh: [
        '榮獲全國大專院校智慧電子整合創作競賽優等獎',
        'iWatchMan：以 Raspberry Pi 為基礎的網路安全監控系統（DHCP 竊聽防禦）',
        'Weather Seed：以 Arduino 感測器網路打造的 IoT 環境監測系統',
      ],
    },
  },
]

export const certifications: Certification[] = [
  { name: 'CISSP',     issuer: 'ISC2',       year: '2022', expiryYear: '2028', credentialUrl: 'https://www.credly.com/badges/37b36bbe-cf5b-47fe-b697-71cca23bba6c', certificateUrl: '/personal-sites_V2/certificates/isc2/isc_cissp.pdf',          desc: { en: 'Certified Information Systems Security Professional', zh: '國際資訊系統安全認證師' }, resume: true },
  { name: 'CSSLP',     issuer: 'ISC2',       year: '2024', expiryYear: '2027', credentialUrl: 'https://www.credly.com/badges/4eab1fd1-b3ed-4989-b6e6-5189e00822ab', certificateUrl: '/personal-sites_V2/certificates/isc2/isc_csslp.pdf',          desc: { en: 'Certified Secure Software Lifecycle Professional', zh: '認證安全軟體生命週期專業人員' }, resume: true },
  { name: 'ISO 27001', issuer: 'BSI',        year: '2023', certificateUrl: '/personal-sites_V2/certificates/iso/ISO_27001_2022_LA.pdf',                                                                                                         desc: { en: 'ISO 27001:2022 Lead Auditor', zh: 'ISO 27001:2022 主導稽核員' }, resume: true },
  { name: 'CEH',       issuer: 'EC-Council', year: '2020', expiryYear: '2026', certificateUrl: '/personal-sites_V2/certificates/ec-council/ceh.pdf',                                                                                           desc: { en: 'Certified Ethical Hacker', zh: '認證道德駭客' }, resume: true },
  { name: 'iPAS',      issuer: 'iPAS',       year: '2021', certificateUrl: '/personal-sites_V2/certificates/ipas/ipas_engineer.pdf',                                                                                                               desc: { en: 'iPAS Cybersecurity Engineer — Junior', zh: 'iPAS 資安工程師-初級' } },
  { name: 'Google CCS', issuer: 'Google',    year: '2023',                                                                                                                                                                                           desc: { en: 'Google Cybersecurity Certification', zh: 'Google 網路安全認證' } },
{ name: 'MCSD',      issuer: 'Microsoft',  year: '2017', certificateUrl: '/personal-sites_V2/certificates/microsoft/mcsd-web-applications.pdf',                                                                                               desc: { en: 'Microsoft Certified Solutions Developer — Web Applications', zh: 'Microsoft 認證解決方案開發人員 — Web 應用程式' } },
  { name: 'OCPJWCD',   issuer: 'Oracle',     year: '2015', certificateUrl: '/personal-sites_V2/certificates/oracle/ocpjwcd.pdf',                                                                                                               desc: { en: 'Oracle Certified Professional Java Web Component Developer', zh: 'Oracle 認證 Java Web 元件開發專業人員' } },
  { name: 'OCJP',      issuer: 'Oracle',     year: '2015',                                                                                                                                                                                           desc: { en: 'Oracle Certified Java Programmer', zh: 'Oracle 認證 Java 程式設計師' } },
]


import type { ExperienceEntry, EducationEntry, Certification } from './types'

export const experience: ExperienceEntry[] = [
  {
    company: 'Cloudforce Co., Ltd. (雲力橘子)',
    companyZh: '雲力橘子數位股份有限公司',
    companyNote: {
      en: 'Gamania subsidiary · formerly 果核數位 (Digicentre)',
      zh: '遊戲橘子子公司 · 前身為果核數位',
    },
    title: { en: 'Technical Manager', zh: '技術經理' },
    period: { en: 'Apr 2025 — Present', zh: '2025年4月 — 至今' },
    location: { en: 'New Taipei City, Taiwan', zh: '台灣，新北市' },
    highlights: {
      en: [
        'Lead product ownership and set secure development standards across engineering teams.',
        'Conduct architecture security assessments and drive technical leadership for product development.',
        'Migrated Polisana vulnerability management platform to GCP with IaC (Terraform), improving deployment reliability and scalability.',
        'Led Japan API integration project to successful v1.0.0 production launch, enforcing architecture review and security code review standards.',
        'Built an AI-powered security consultant using RAG pipelines and LLM integration, enabling automated security Q&A and knowledge retrieval.',
        'Independently completed R&D tax incentive filing for the department, delivering additional corporate tax savings.',
        'Led cross-departmental coordination to revise the company\'s ISMS software acquisition, development, and maintenance policy, aligning secure development standards across engineering, security, and management teams.',
      ],
      zh: [
        '主導產品規劃，制定跨工程團隊的安全開發標準。',
        '執行架構安全評估，推動產品開發的技術領導。',
        '將 Polisana 弱點管理平台遷移至 GCP，採用 IaC（Terraform），提升部署可靠性與可擴展性。',
        '主導日本 API 串接專案順利完成 1.0.0 上線，建立架構審查與安全碼審標準。',
        '以 RAG 流水線與 LLM 整合，獨力打造 AI 驅動資安顧問系統，實現自動化資安問答與知識檢索。',
        '獨立完成部門研發投資抵減申報，為公司創造額外稅務節省效益。',
        '主導跨部門協調，推動公司 ISMS「資通系統獲取、開發及維護管理辦法」修訂，整合工程、資安與管理團隊的安全開發規範。',
      ],
    },
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
      ],
      zh: [
        '設計並講授 DevSecOps 課程及安全編碼訓練課程。',
        '開發結合 AI 整合與安全軟體開發實踐的教學課綱。',
      ],
    },
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
      ],
      zh: [
        '講授 AI 應用與智能教育相關課程模組。',
        '開發以 AI 融入軟體開發為主題的專題課程教材。',
      ],
    },
  },
  {
    company: 'Digicentre Co., Ltd. (果核數位)',
    companyZh: '果核數位',
    companyNote: {
      en: 'now Cloudforce / 雲力橘子 · Gamania subsidiary',
      zh: '現更名為雲力橘子，遊戲橘子子公司',
    },
    title: { en: 'Deputy Manager, Tech Development II', zh: '副理，技術開發二部' },
    period: { en: 'Aug 2024 — Mar 2025', zh: '2024年8月 — 2025年3月' },
    location: { en: 'Taiwan', zh: '台灣' },
    highlights: {
      en: [
        'Oversaw product management and DevSecOps optimisation across product lines.',
        'Integrated security tooling into CI/CD pipelines to automate vulnerability scanning and compliance checks.',
        'Resolved a long-standing vendor dispute through technical clarification and compromise, saving millions in potential costs.',
        'Completed CSSLP certification and mentored interns, building a structured technical knowledge transfer process.',
        'Recipient of the 2023 Gama Star Award for project excellence.',
      ],
      zh: [
        '監管各產品線的產品管理與 DevSecOps 優化。',
        '將安全工具整合至 CI/CD 流水線，自動化弱點掃描與合規檢查。',
        '以技術澄清與折衷方案解決長期懸而未決的廠商爭議，節省數百萬元潛在費用。',
        '取得 CSSLP 認證，指導實習生並建立結構化的技術傳承機制。',
        '榮獲 2023 年 Gama Star 專案卓越獎。',
      ],
    },
  },
  {
    company: 'Digicentre Co., Ltd. (果核數位)',
    companyZh: '果核數位',
    companyNote: {
      en: 'now Cloudforce / 雲力橘子 · Gamania subsidiary',
      zh: '現更名為雲力橘子，遊戲橘子子公司',
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
      ],
      zh: [
        '設計企業級 DevSecOps 流程，將安全性整合至完整 SDLC 中。',
        '開發自動化工具，將團隊弱點處理量降低 51%；建立自助式應用程式安全檢測平台，消除 80% 的重複性人工作業，已正式供企業客戶使用。',
        '優化白箱安全顧問 SOP，效率提升約 2 倍；協助 7 家以上金融與科技產業企業客戶成功導入 DevSecOps。',
        '以 Micro Focus MSSP 金牌夥伴團隊主要技術代表身份，代表組織出席客戶簡報與公開技術分享活動。',
      ],
    },
  },
  {
    company: 'PwC Taiwan',
    companyZh: '資誠聯合會計師事務所',
    title: { en: 'Security Consultant', zh: '資安顧問' },
    period: { en: 'Sep 2020 — Sep 2021', zh: '2020年9月 — 2021年9月' },
    location: { en: 'Taipei, Taiwan', zh: '台灣，台北市' },
    highlights: {
      en: [
        'Conducted financial sector security assessments including penetration testing, vulnerability analysis, and compliance audits.',
        'Performed malware analysis, packet capture analysis, and load/stress testing for banking institutions.',
        'Delivered risk assessment reports and remediation recommendations to enterprise clients.',
      ],
      zh: [
        '執行金融業資安評估，包含滲透測試、弱點分析與合規稽核。',
        '對銀行機構進行惡意程式分析、封包擷取分析及壓力測試。',
        '向企業客戶提交風險評估報告與改善建議。',
      ],
    },
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
  { name: 'CEH',       issuer: 'EC-Council', year: '2020', certificateUrl: '/personal-sites_V2/certificates/ec-council/ceh.pdf',                                                                                                                  desc: { en: 'Certified Ethical Hacker', zh: '認證道德駭客' }, resume: true },
  { name: 'iPAS',      issuer: 'iPAS',       year: '2021', certificateUrl: '/personal-sites_V2/certificates/ipas/ipas_engineer.pdf',                                                                                                               desc: { en: 'iPAS Cybersecurity Engineer — Junior', zh: 'iPAS 資安工程師-初級' } },
  { name: 'Google CCS', issuer: 'Google',    year: '2023',                                                                                                                                                                                           desc: { en: 'Google Cybersecurity Certification', zh: 'Google 網路安全認證' } },
  { name: 'RHCVA',     issuer: 'Red Hat',    year: '2018', certificateUrl: '/personal-sites_V2/certificates/red-hat/rhcva.pdf',                                                                                                                   desc: { en: 'Red Hat Certified Virtualization Administrator', zh: 'Red Hat 認證虛擬化管理員' } },
  { name: 'MCSD',      issuer: 'Microsoft',  year: '2017', certificateUrl: '/personal-sites_V2/certificates/microsoft/mcsd-web-applications.pdf',                                                                                               desc: { en: 'Microsoft Certified Solutions Developer — Web Applications', zh: 'Microsoft 認證解決方案開發人員 — Web 應用程式' } },
  { name: 'OCPJWCD',   issuer: 'Oracle',     year: '2015', certificateUrl: '/personal-sites_V2/certificates/oracle/ocpjwcd.pdf',                                                                                                               desc: { en: 'Oracle Certified Professional Java Web Component Developer', zh: 'Oracle 認證 Java Web 元件開發專業人員' } },
  { name: 'OCJP',      issuer: 'Oracle',     year: '2015',                                                                                                                                                                                           desc: { en: 'Oracle Certified Java Programmer', zh: 'Oracle 認證 Java 程式設計師' } },
]


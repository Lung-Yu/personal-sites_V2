export const profile = {
  name: {
    zh: '蔡龍佑',
    en: 'Lung-Yu Tsai',
    alias: 'tygrus',
  },
  title: {
    en: 'Technical Manager · Cybersecurity Expert & Full-Stack Developer',
    zh: '技術經理 · 資安專家與全端開發者',
  },
  subtitle: {
    en: 'Security Architecture · DevSecOps · AI/ML · Full-Stack Development',
    zh: '資安架構 · DevSecOps · AI/ML · 全端開發',
  },
  location: 'Taipei, Taiwan',
  email: 'workfile975@gmail.com',
  bio: {
    en: `Cybersecurity expert and full-stack developer with 10+ years of experience in information security and software development. Specialises in integrating security into the development process to create safer, more stable software systems.

Conference speaker at DevOpsDays Taipei, CyberRes, and CISA. Holds CISSP, CSSLP, OSCP, ISO 27001 Lead Auditor, and CEH certifications. Currently Technical Manager at Cloudforce and part-time instructor teaching DevSecOps.`,
    zh: `擁有 10 年以上資訊安全與軟體開發經驗的資安專家與全端開發者，專注於將安全性融入開發流程，打造更安全穩定的軟體系統。

曾於 DevOpsDays Taipei、CyberRes 及 CISA 等研討會演講。持有 CISSP、CSSLP、OSCP、ISO 27001 主導稽核員及 CEH 等國際認證。目前擔任 Cloudforce 技術經理，並兼任 DevSecOps 課程講師。`,
  },
  links: {
    github: 'https://github.com/Lung-Yu',
    linkedin: 'https://www.linkedin.com/in/lung-yu-tsai-633865100',
  },
}

export const skills = [
  {
    category: { en: 'Security', zh: '資訊安全' },
    color: '#dc2626',
    items: {
      en: [
        'Security Architecture & Governance',
        'Penetration Testing (OSCP / CEH)',
        'Vulnerability Assessment',
        'Incident Response & Risk Management',
        'ISO 27001 Lead Auditor',
        'Suricata IDS / Threat Detection',
        'Compliance Auditing',
      ],
      zh: [
        '資安架構與治理',
        '滲透測試（OSCP / CEH）',
        '弱點評估',
        '事件應變與風險管理',
        'ISO 27001 主導稽核員',
        'Suricata IDS / 威脅偵測',
        '合規稽核',
      ],
    },
  },
  {
    category: { en: 'AI / ML', zh: 'AI / 機器學習' },
    color: '#7c3aed',
    items: {
      en: [
        'RAG Systems & LLM Integration',
        'Google Gemini API',
        'Machine Learning & Deep Learning',
        'Image Processing & Computer Vision',
        'Audio Signal Processing',
        'AI-powered Security Tooling',
      ],
      zh: [
        'RAG 系統與 LLM 整合',
        'Google Gemini API',
        '機器學習與深度學習',
        '影像處理與電腦視覺',
        '音訊訊號處理',
        'AI 驅動資安工具開發',
      ],
    },
  },
  {
    category: { en: 'Development', zh: '開發' },
    color: '#0284c7',
    items: {
      en: [
        'Python · TypeScript · C# · Java · C++',
        'React · Node.js · FastAPI',
        'RESTful API Design',
        'Docker · Kubernetes · Nginx',
        'CI/CD Pipeline Implementation',
        'Blockchain / Smart Contracts',
      ],
      zh: [
        'Python · TypeScript · C# · Java · C++',
        'React · Node.js · FastAPI',
        'RESTful API 設計',
        'Docker · Kubernetes · Nginx',
        'CI/CD 流水線建置',
        '區塊鏈 / 智能合約',
      ],
    },
  },
  {
    category: { en: 'DevSecOps & Infra', zh: 'DevSecOps 與基礎設施' },
    color: '#059669',
    items: {
      en: [
        'DevSecOps Process Design',
        'Security Automation',
        'Container Management (Docker / K8s)',
        'Cloud & On-Premises Architecture',
        'GitHub Actions · SAST/DAST Integration',
        'Monitoring & Logging Management',
      ],
      zh: [
        'DevSecOps 流程設計',
        '安全自動化',
        '容器管理（Docker / K8s）',
        '雲端與地端架構',
        'GitHub Actions · SAST/DAST 整合',
        '監控與日誌管理',
      ],
    },
  },
]

export const skillChips = [
  { label: 'Python', cat: 'lang' },
  { label: 'TypeScript', cat: 'lang' },
  { label: 'C#', cat: 'lang' },
  { label: 'Java', cat: 'lang' },
  { label: 'C++', cat: 'lang' },
  { label: 'AI / ML', cat: 'ai' },
  { label: 'RAG', cat: 'ai' },
  { label: 'LLM', cat: 'ai' },
  { label: 'Cybersecurity', cat: 'sec' },
  { label: 'CISSP', cat: 'sec' },
  { label: 'CSSLP', cat: 'sec' },
  { label: 'OSCP', cat: 'sec' },
  { label: 'ISO 27001', cat: 'sec' },
  { label: 'Docker', cat: 'infra' },
  { label: 'DevSecOps', cat: 'infra' },
  { label: 'FastAPI', cat: 'infra' },
  { label: 'React', cat: 'infra' },
]

export const chipColors = {
  lang:  { bg: '#eff6ff', border: '#bfdbfe', text: '#1d4ed8' },
  ai:    { bg: '#faf5ff', border: '#e9d5ff', text: '#7c3aed' },
  sec:   { bg: '#fff1f2', border: '#fecdd3', text: '#be123c' },
  infra: { bg: '#f0fdf4', border: '#bbf7d0', text: '#15803d' },
}

export const experience = [
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
        'Built an AI-powered security consultant using RAG pipelines and LLM integration, enabling automated security Q&A and knowledge retrieval.',
      ],
      zh: [
        '主導產品規劃，制定跨工程團隊的安全開發標準。',
        '執行架構安全評估，推動產品開發的技術領導。',
        '以 RAG 流水線與 LLM 整合，獨力打造 AI 驅動資安顧問系統，實現自動化資安問答與知識檢索。',
      ],
    },
  },
  {
    company: 'AINetwork',
    companyZh: 'AINetwork（全智網）',
    title: { en: 'Consulting Instructor', zh: '配合講師顧問' },
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
    company: 'BigData Intelligence Education',
    companyZh: '大數智能',
    title: { en: 'Instructor (Part-time)', zh: '課程講師（兼職）' },
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
        'Recipient of the 2023 Gama Star Award for project excellence.',
      ],
      zh: [
        '監管各產品線的產品管理與 DevSecOps 優化。',
        '將安全工具整合至 CI/CD 流水線，自動化弱點掃描與合規檢查。',
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
        'Led security automation initiatives and infrastructure security optimisation.',
        'Established security architecture planning frameworks used across multiple product lines.',
      ],
      zh: [
        '設計企業級 DevSecOps 流程，將安全性整合至完整 SDLC 中。',
        '主導安全自動化計畫與基礎設施安全優化。',
        '建立跨多產品線使用的資安架構規劃框架。',
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

export const education = [
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

export const certifications = [
  { name: 'CISSP',      issuer: 'ISC2',               year: '2022', desc: { en: 'Certified Information Systems Security Professional', zh: '國際資訊系統安全認證師' } },
  { name: 'CSSLP',      issuer: 'ISC2',               year: '2024', desc: { en: 'Certified Secure Software Lifecycle Professional', zh: '認證安全軟體生命週期專業人員' } },
  { name: 'OSCP',       issuer: 'Offensive Security', year: '',     desc: { en: 'Offensive Security Certified Professional', zh: '進攻性安全認證專業人員' } },
  { name: 'ISO 27001',  issuer: 'BSI',                year: '2023', desc: { en: 'ISO 27001:2022 Lead Auditor', zh: 'ISO 27001:2022 主導稽核員' } },
  { name: 'CEH',        issuer: 'EC-Council',         year: '2020', desc: { en: 'Certified Ethical Hacker', zh: '認證道德駭客' } },
  { name: 'Google CCS', issuer: 'Google',             year: '2023', desc: { en: 'Google Cybersecurity Certification', zh: 'Google 網路安全認證' } },
  { name: 'RHCVA',      issuer: 'Red Hat',            year: '2018', desc: { en: 'Red Hat Certified Virtualization Administrator', zh: 'Red Hat 認證虛擬化管理員' } },
  { name: 'MCSD',       issuer: 'Microsoft',          year: '2017', desc: { en: 'Microsoft Certified Solutions Developer — Web Applications', zh: 'Microsoft 認證解決方案開發人員 — Web 應用程式' } },
  { name: 'OCPJWCD',    issuer: 'Oracle',             year: '2015', desc: { en: 'Oracle Certified Professional Java Web Component Developer', zh: 'Oracle 認證 Java Web 元件開發專業人員' } },
]

export const talks = [
  {
    title: {
      en: 'DevSecOps and Agile Integration of Automated Security Testing',
      zh: 'DevSecOps 與敏捷整合自動化安全測試',
    },
    event: 'CyberRes 2025',
    date: { en: 'April 2025', zh: '2025年4月' },
  },
  {
    title: {
      en: 'DevSecOps & AI: Opportunities and Challenges of a Double-Edged Sword',
      zh: 'DevSecOps & AI：雙面刃的機遇與挑戰',
    },
    event: 'CISA Conference',
    date: { en: 'August 2024', zh: '2024年8月' },
  },
  {
    title: {
      en: 'DevOps + Sec: Strong Support or Troublemakers?',
      zh: 'DevOps + Sec：強力後盾還是麻煩製造者？',
    },
    event: 'DevOpsDays Taipei',
    date: { en: 'July 2024', zh: '2024年7月' },
  },
  {
    title: {
      en: 'Enterprise Secure Development Process Upgrade Path',
      zh: '企業安全開發流程升級路徑',
    },
    event: 'CyberRes 2023',
    date: { en: 'May 2023', zh: '2023年5月' },
  },
]

export const projects = [
  {
    name: 'Gemini RAG Chat',
    description: {
      en: 'Full-stack RAG chat application powered by Google Gemini 2.5 Flash. Upload documents (.txt, .pdf, .docx), ask questions, get grounded answers. FastAPI backend + React frontend, fully containerised with Docker Compose.',
      zh: '以 Google Gemini 2.5 Flash 驅動的全端 RAG 聊天應用程式。上傳文件（.txt、.pdf、.docx）後即可提問並獲得基於文件的精確回答。FastAPI 後端 + React 前端，以 Docker Compose 完整容器化。',
    },
    language: 'TypeScript',
    stars: 0,
    url: 'https://github.com/Lung-Yu/gemini-rag',
    tags: ['AI', 'RAG', 'Gemini', 'FastAPI', 'React', 'Docker'],
    year: '2025–2026',
    highlight: true,
  },
  {
    name: 'AI Tab Organizer',
    description: {
      en: 'Published Chrome extension (v1.4.0) that uses AI to intelligently categorise, deduplicate, and organise browser tabs. Supports OpenAI, Anthropic Claude, and Google Gemini. Local-first, BYOK, Traditional Chinese & English.',
      zh: '已上架的 Chrome 擴充功能（v1.4.0），利用 AI 智慧分類、去重複及整理瀏覽器分頁。支援 OpenAI、Anthropic Claude 及 Google Gemini。本地優先、自帶金鑰，支援繁體中文與英文。',
    },
    language: 'JavaScript',
    stars: 0,
    url: 'https://github.com/Lung-Yu/ai-tab-organizer-docs',
    tags: ['Chrome Extension', 'OpenAI', 'Claude', 'Gemini', 'Privacy'],
    year: '2026',
    highlight: true,
  },
  {
    name: 'Engineer Aptitude Assessment',
    description: {
      en: 'Professional skill evaluation platform for software engineers. 30 questions across 6 dimensions (Algorithm, Full-Stack, System Design, Performance, Security, DevOps). Radar chart output and seniority scoring from Entry to Staff level.',
      zh: '軟體工程師專業技能評估平台。30 題涵蓋 6 大維度（演算法、全端開發、系統設計、效能、資安、DevOps）。輸出雷達圖並評定職級（Entry 至 Staff）。',
    },
    language: 'TypeScript',
    stars: 0,
    url: 'https://github.com/Lung-Yu/Aptitude-Test',
    tags: ['React', 'Vite', 'Tailwind', 'Recharts', 'Google Sheets'],
    year: '2025',
    highlight: true,
  },
  {
    name: 'Network Traffic Analyser',
    description: {
      en: 'Web platform for analysing PCAP network capture files. Automated threat detection via Suricata deep-packet inspection, AbuseIPDB threat intelligence integration, and interactive visualisation.',
      zh: '用於分析 PCAP 網路封包擷取檔案的網頁平台。透過 Suricata 深度封包檢測自動偵測威脅，整合 AbuseIPDB 威脅情資，並提供互動式視覺化呈現。',
    },
    language: 'JavaScript',
    stars: 0,
    url: 'https://github.com/Lung-Yu/network-analysis',
    tags: ['Security', 'Suricata', 'React', 'FastAPI', 'Docker'],
    year: '2025',
    highlight: false,
  },
  {
    name: 'Security Incident Response Platform',
    description: {
      en: 'Integrated platform for event tracking and threat analysis. Correlates security events from multiple sources, automates triage workflows, and provides dashboard visibility for incident response teams.',
      zh: '整合式事件追蹤與威脅分析平台。跨來源關聯資安事件、自動化分流工作流程，並為事件應變團隊提供儀表板可視性。',
    },
    language: 'Python',
    stars: 0,
    url: 'https://github.com/Lung-Yu',
    tags: ['Security', 'Incident Response', 'SIEM', 'Analytics'],
    year: '2023–2024',
    highlight: false,
  },
  {
    name: 'NYUST Image ToolBox',
    description: {
      en: 'Comprehensive image processing toolkit from graduate research at NYUST Media Intelligence and Processing Lab. Implements classical computer vision algorithms including filtering, edge detection, and segmentation.',
      zh: '源自雲科大媒體智慧與處理實驗室研究計畫的影像處理工具套件，實作多種經典電腦視覺演算法，包含濾波、邊緣偵測與影像分割。',
    },
    language: 'C#',
    stars: 7,
    url: 'https://github.com/Lung-Yu/NYUST_MIPL_ImageToolBox',
    tags: ['Image Processing', 'Computer Vision', 'Research'],
    year: '2016–2019',
    highlight: false,
  },
  {
    name: 'Blockchain Voting System',
    description: {
      en: 'Decentralised voting platform built on Ethereum with smart contracts to ensure transparent, tamper-proof elections.',
      zh: '基於以太坊智能合約的去中心化投票平台，確保選舉過程透明且不可竄改。',
    },
    language: 'JavaScript',
    stars: 0,
    url: 'https://github.com/Lung-Yu',
    tags: ['Blockchain', 'Ethereum', 'Smart Contracts', 'Web3'],
    year: '2022',
    highlight: false,
  },
  {
    name: 'auto-tools',
    description: {
      en: 'Python automation toolkit featuring a Taiwan Railways (台鐵) ticket seat availability checker. Polls routes across multiple dates, filters by seat quantity, and sends macOS native notifications.',
      zh: 'Python 自動化工具套件，內含台鐵座位查詢工具，可跨多日期查詢餘票、篩選座位數量，並透過 macOS 原生通知提醒。',
    },
    language: 'Python',
    stars: 0,
    url: 'https://github.com/Lung-Yu/auto-tools',
    tags: ['Automation', 'Python', 'Web Scraping', 'macOS'],
    year: '2026',
    highlight: false,
  },
]

export const languageColors = {
  'C#':               '#178600',
  'TypeScript':       '#3178c6',
  'Python':           '#3572A5',
  'HTML':             '#e34c26',
  'JavaScript':       '#e8c84a',
  'Jupyter Notebook': '#DA5B0B',
  'C++':              '#f34b7d',
  'Java':             '#b07219',
  'Astro':            '#ff5d01',
}

export const achievements = [
  { icon: '🧊', label: { en: 'Arctic Code Vault Contributor', zh: 'Arctic 程式碼保存庫貢獻者' } },
  { icon: '🦈', label: { en: 'Pull Shark', zh: 'Pull Shark' } },
  { icon: '👥', label: { en: 'Pair Extraordinaire', zh: 'Pair Extraordinaire' } },
  { icon: '🎯', label: { en: 'YOLO', zh: 'YOLO' } },
  { icon: '⚡', label: { en: 'Quickdraw', zh: 'Quickdraw' } },
]

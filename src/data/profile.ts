// ── Type helpers ──────────────────────────────────────────────────────────────

export type ChipCat = 'lang' | 'ai' | 'sec' | 'infra'
export type WritingType = 'article' | 'talk' | 'course' | 'thread'

/** Bilingual string value */
export interface BL { en: string; zh: string }
/** Bilingual string-array value */
export interface BLArr { en: string[]; zh: string[] }

export interface ProfileData {
  name: { zh: string; en: string; alias: string }
  title: BL
  subtitle: BL
  location: string
  email: string
  bio: BL
  links: { github: string; linkedin: string }
}

export interface SkillGroup {
  category: BL
  color: string
  items: BLArr
}

export interface SkillChip {
  label: string
  cat: ChipCat
}

export type ChipColors = Record<ChipCat, { bg: string; border: string; text: string }>

export interface ExperienceEntry {
  company: string
  companyZh: string
  companyNote?: BL
  title: BL
  period: BL
  location: BL
  highlights: BLArr
}

export interface EducationEntry {
  school: BL
  degree: BL
  period: string
  focus: BL
  projects: BLArr
}

export interface Certification {
  name: string
  issuer: string
  year: string
  expiryYear?: string
  credentialUrl?: string
  certificateUrl?: string
  desc: BL
}

export interface ConsultingService {
  icon: string
  title: BL
  desc: BL
  items: BLArr
}

export interface Talk {
  title: BL
  event: string
  date: BL
  location?: string
  slides: string
  video: string
}

export interface Project {
  name: string
  description: BL
  language: string
  stars: number
  url: string
  tags: string[]
  year: string
  highlight: boolean
}

export interface Writing {
  type: WritingType
  title: BL
  teaser: BL
  platform: string
  url: string
  date: BL
  lang: string
  tags: string[]
  featured: boolean
  /** Internal slug — if present, article is rendered inline at /blog/:slug */
  slug?: string
  /** Full article body. Paragraphs separated by \n\n; headings start with ## */
  content?: BL
}

export interface Achievement {
  icon: string
  label: BL
}

// ── Data ──────────────────────────────────────────────────────────────────────

export const profile: ProfileData = {
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

Conference speaker at DevOpsDays Taipei, CyberRes, and CISA. Holds CISSP, CSSLP, ISO 27001 Lead Auditor, and CEH certifications. Currently Technical Manager at Cloudforce and part-time instructor teaching DevSecOps.`,
    zh: `擁有 10 年以上資訊安全與軟體開發經驗的資安專家與全端開發者，專注於將安全性融入開發流程，打造更安全穩定的軟體系統。

曾於 DevOpsDays Taipei、CyberRes 及 CISA 等研討會演講。持有 CISSP、CSSLP、ISO 27001 主導稽核員及 CEH 等國際認證。目前擔任 Cloudforce 技術經理，並兼任 DevSecOps 課程講師。`,
  },
  links: {
    github: 'https://github.com/Lung-Yu',
    linkedin: 'https://www.linkedin.com/in/lung-yu-tsai-633865100',
  },
}

export const skills: SkillGroup[] = [
  {
    category: { en: 'Security', zh: '資訊安全' },
    color: '#dc2626',
    items: {
      en: [
        'Security Architecture & Governance',
        'Penetration Testing (CEH)',
        'Vulnerability Assessment',
        'Incident Response & Risk Management',
        'ISO 27001 Lead Auditor',
        'Suricata IDS / Threat Detection',
        'Compliance Auditing',
      ],
      zh: [
        '資安架構與治理',
        '滲透測試（CEH）',
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

export const skillChips: SkillChip[] = [
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
  { label: 'ISO 27001', cat: 'sec' },
  { label: 'Docker', cat: 'infra' },
  { label: 'DevSecOps', cat: 'infra' },
  { label: 'FastAPI', cat: 'infra' },
  { label: 'React', cat: 'infra' },
]

export const chipColors: ChipColors = {
  lang:  { bg: '#eff6ff', border: '#bfdbfe', text: '#1d4ed8' },
  ai:    { bg: '#faf5ff', border: '#e9d5ff', text: '#7c3aed' },
  sec:   { bg: '#fff1f2', border: '#fecdd3', text: '#be123c' },
  infra: { bg: '#f0fdf4', border: '#bbf7d0', text: '#15803d' },
}

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
    companyZh: 'AI全智網',
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
    company: 'Gtalent Co., Ltd.',
    companyZh: '大數智能教育',
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
  { name: 'CISSP',     issuer: 'ISC2',       year: '2022', expiryYear: '2028', credentialUrl: 'https://www.credly.com/badges/37b36bbe-cf5b-47fe-b697-71cca23bba6c', certificateUrl: '/personal-sites_V2/certificates/isc2/isc_cissp.pdf',          desc: { en: 'Certified Information Systems Security Professional', zh: '國際資訊系統安全認證師' } },
  { name: 'CSSLP',     issuer: 'ISC2',       year: '2024', expiryYear: '2027', credentialUrl: 'https://www.credly.com/badges/4eab1fd1-b3ed-4989-b6e6-5189e00822ab', certificateUrl: '/personal-sites_V2/certificates/isc2/isc_csslp.pdf',          desc: { en: 'Certified Secure Software Lifecycle Professional', zh: '認證安全軟體生命週期專業人員' } },
  { name: 'ISO 27001', issuer: 'BSI',        year: '2023', certificateUrl: '/personal-sites_V2/certificates/iso/ISO_27001_2022_LA.pdf',                                                                                                         desc: { en: 'ISO 27001:2022 Lead Auditor', zh: 'ISO 27001:2022 主導稽核員' } },
  { name: 'CEH',       issuer: 'EC-Council', year: '2020', certificateUrl: '/personal-sites_V2/certificates/ec-council/ceh.pdf',                                                                                                                  desc: { en: 'Certified Ethical Hacker', zh: '認證道德駭客' } },
  { name: 'iPAS',      issuer: 'iPAS',       year: '2021', certificateUrl: '/personal-sites_V2/certificates/ipas/ipas_engineer.pdf',                                                                                                               desc: { en: 'iPAS Cybersecurity Engineer — Junior', zh: 'iPAS 資安工程師-初級' } },
  { name: 'Google CCS', issuer: 'Google',    year: '2023',                                                                                                                                                                                           desc: { en: 'Google Cybersecurity Certification', zh: 'Google 網路安全認證' } },
  { name: 'RHCVA',     issuer: 'Red Hat',    year: '2018', certificateUrl: '/personal-sites_V2/certificates/red-hat/rhcva.pdf',                                                                                                                   desc: { en: 'Red Hat Certified Virtualization Administrator', zh: 'Red Hat 認證虛擬化管理員' } },
  { name: 'MCSD',      issuer: 'Microsoft',  year: '2017', certificateUrl: '/personal-sites_V2/certificates/microsoft/mcsd-web-applications.pdf',                                                                                               desc: { en: 'Microsoft Certified Solutions Developer — Web Applications', zh: 'Microsoft 認證解決方案開發人員 — Web 應用程式' } },
  { name: 'OCPJWCD',   issuer: 'Oracle',     year: '2015', certificateUrl: '/personal-sites_V2/certificates/oracle/ocpjwcd.pdf',                                                                                                               desc: { en: 'Oracle Certified Professional Java Web Component Developer', zh: 'Oracle 認證 Java Web 元件開發專業人員' } },
  { name: 'OCJP',      issuer: 'Oracle',     year: '2015',                                                                                                                                                                                           desc: { en: 'Oracle Certified Java Programmer', zh: 'Oracle 認證 Java 程式設計師' } },
]

export const consulting: ConsultingService[] = [
  {
    icon: '🔐',
    title: { en: 'Secure Development Process Planning', zh: '安全開發流程規劃' },
    desc: {
      en: 'Design and implement DevSecOps practices tailored for your team — integrating security gates into CI/CD, SAST/DAST tooling, and secure coding guidelines.',
      zh: '為您的開發團隊量身規劃 DevSecOps 實踐，整合 CI/CD 安全關卡、SAST/DAST 工具及安全編碼規範。',
    },
    items: {
      en: ['DevSecOps pipeline design', 'SAST/DAST integration', 'Security policy drafting', 'Developer security awareness'],
      zh: ['DevSecOps 流水線設計', 'SAST/DAST 工具整合', '資安政策制定', '開發人員資安意識培訓'],
    },
  },
  {
    icon: '🤖',
    title: { en: 'AI Coding Consulting', zh: 'AI Coding 顧問' },
    desc: {
      en: 'Hands-on guidance for building AI-powered applications — RAG pipelines, LLM integration, prompt engineering, and AI-assisted development workflows.',
      zh: '協助打造 AI 應用程式的實戰顧問——RAG 流水線建置、LLM 整合、Prompt 工程及 AI 輔助開發流程。',
    },
    items: {
      en: ['RAG system design', 'LLM selection & configuration', 'AI workflow automation', 'AI security considerations'],
      zh: ['RAG 系統設計', 'LLM 選型與設定', 'AI 工作流程自動化', 'AI 安全性考量'],
    },
  },
  {
    icon: '🏫',
    title: { en: 'Corporate Training & Workshops', zh: '企業內訓 / 工作坊' },
    desc: {
      en: 'Custom training programmes on DevSecOps, cybersecurity, and AI integration — delivered as workshops, lectures, or multi-session courses for engineering teams.',
      zh: '針對工程團隊量身設計 DevSecOps、資安及 AI 整合訓練課程，可依需求提供工作坊、演講或多堂系列課程。',
    },
    items: {
      en: ['DevSecOps fundamentals', 'Secure coding practices', 'AI in SDLC', 'Security awareness training'],
      zh: ['DevSecOps 基礎', '安全編碼實務', 'AI 融入 SDLC', '資安意識培訓'],
    },
  },
  {
    icon: '🔍',
    title: { en: 'Security-Focused Code Review', zh: 'Code Review（資安導向）' },
    desc: {
      en: 'In-depth code review identifying security vulnerabilities, injection risks, authentication flaws, and insecure dependencies — with actionable remediation recommendations.',
      zh: '深入檢視程式碼中的安全漏洞、注入風險、認證缺陷及不安全的相依套件，提供具體修補建議。',
    },
    items: {
      en: ['OWASP Top 10 review', 'Dependency audit', 'Authentication & authorisation checks', 'Written findings report'],
      zh: ['OWASP Top 10 檢查', '相依套件稽核', '認證與授權檢查', '書面發現報告'],
    },
  },
  {
    icon: '🩺',
    title: { en: 'Security Health Check', zh: '資安健診' },
    desc: {
      en: 'A lightweight security assessment for startups and SMBs — reviewing architecture, access controls, and key risks to give you a clear security posture snapshot.',
      zh: '適合新創與中小企業的輕量資安評估——審視架構、存取控管與主要風險，快速掌握資安現況。',
    },
    items: {
      en: ['Architecture review', 'Access control audit', 'Risk prioritisation', 'Remediation roadmap'],
      zh: ['架構審視', '存取控管稽核', '風險優先排序', '修補路線圖'],
    },
  },
  {
    icon: '🎤',
    title: { en: 'Tech Talks & Keynotes', zh: '技術演講 / 主題演說' },
    desc: {
      en: 'Available for conference keynotes, meetup talks, and panel discussions on DevSecOps, AI security, and secure software development.',
      zh: '歡迎邀約研討會主題演說、技術社群分享及座談，主題涵蓋 DevSecOps、AI 資安及安全軟體開發。',
    },
    items: {
      en: ['DevSecOps & Agile', 'AI × Security', 'Secure SDLC', 'Panel discussions'],
      zh: ['DevSecOps 與敏捷', 'AI × 資安', '安全 SDLC', '座談討論'],
    },
  },
]

export const talks: Talk[] = [
  {
    title: {
      en: 'AI Era Team Management Challenges and Strategies',
      zh: 'AI 時代團隊管理的挑戰與策略',
    },
    event: 'HWDC 2025',
    date: { en: 'October 2025', zh: '2025年10月' },
    location: 'Taipei',
    slides: 'https://hwdc.ithome.com.tw/2025/session-page/4017',
    video: '',
  },
  {
    title: {
      en: 'DevSecOps and Agile Integration of Automated Security Testing',
      zh: 'DevSecOps 與敏捷整合自動化安全測試',
    },
    event: 'CyberRes 2025',
    date: { en: 'April 2025', zh: '2025年4月' },
    location: 'Nangang Exhibition Center',
    slides: 'https://cybersec.ithome.com.tw/2025/session-page/3607',
    video: '',
  },
  {
    title: {
      en: 'Common Software and Enterprise Security Threat Analysis',
      zh: '常見軟體與企業安全威脅分析',
    },
    event: 'OpenText & Cloudforce Joint Tech Session',
    date: { en: 'September 2024', zh: '2024年9月' },
    location: 'Taiwan',
    slides: '',
    video: '',
  },
  {
    title: {
      en: 'DevSecOps & AI: Opportunities and Challenges of a Double-Edged Sword',
      zh: 'DevSecOps & AI：雙面刃的機遇與挑戰',
    },
    event: 'CISA Conference',
    date: { en: 'August 2024', zh: '2024年8月' },
    location: 'Live Stream',
    slides: '',
    video: '',
  },
  {
    title: {
      en: 'DevOps + Sec: Strong Support or Troublemakers?',
      zh: 'DevOps + Sec：強力後盾還是麻煩製造者？',
    },
    event: 'DevOpsDays Taipei 2024',
    date: { en: 'July 2024', zh: '2024年7月' },
    location: 'Bottle Cap Factory',
    slides: 'https://devopsdays.tw/2024/session-page/3022',
    video: '',
  },
  {
    title: {
      en: 'Security Requirements That Need to be Addressed',
      zh: '需要被重視的安全需求',
    },
    event: 'OpenText & Digicentre Joint Tech Session',
    date: { en: 'October 2023', zh: '2023年10月' },
    location: 'Taiwan',
    slides: '',
    video: '',
  },
  {
    title: {
      en: 'Stories of Auditors and Auditees',
      zh: '稽核員與受稽者的故事',
    },
    event: 'BSI & KPMG & Digicentre Joint Tech Session',
    date: { en: 'September 2023', zh: '2023年9月' },
    location: 'Taiwan',
    slides: 'https://www.ithome.com.tw/pr/159495',
    video: '',
  },
  {
    title: {
      en: 'Enterprise Secure Development Process Upgrade Path',
      zh: '企業安全開發流程升級路徑',
    },
    event: 'CyberRes 2023',
    date: { en: 'May 2023', zh: '2023年5月' },
    location: 'Nangang Exhibition Center',
    slides: 'https://cyber.ithome.com.tw/2023/session-page/1858',
    video: '',
  },
  {
    title: {
      en: 'Challenges of Enterprises Facing Secure Development',
      zh: '企業面臨安全開發的挑戰',
    },
    event: 'OpenText & Digicentre Joint Tech Session',
    date: { en: 'April 2023', zh: '2023年4月' },
    location: 'Taiwan',
    slides: 'https://www.ithome.com.tw/pr/156836',
    video: '',
  },
  {
    title: {
      en: 'Building Secure Software Starts with Effective Communication',
      zh: '建構安全軟體從有效溝通開始',
    },
    event: 'Digicentre Hacker Talk Forum',
    date: { en: 'March 2023', zh: '2023年3月' },
    location: 'Taiwan',
    slides: 'https://www.ithome.com.tw/pr/156206',
    video: '',
  },
]

export const projects: Project[] = [
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
  {
    name: 'File Monitor System',
    description: {
      en: 'System directory monitoring tool that detects unauthorised file modifications in real time. Suitable for monitoring live systems for hacker intrusions or malicious changes.',
      zh: '即時偵測系統目錄中未授權檔案異動的監控工具，適用於監控線上系統的駭客入侵或惡意竄改行為。',
    },
    language: 'Python',
    stars: 0,
    url: 'https://github.com/Lung-Yu/File-Monitor',
    tags: ['Security', 'Python', 'System Protection', 'File Integrity'],
    year: '2020',
    highlight: false,
  },
]

export const languageColors: Record<string, string> = {
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

export const writings: Writing[] = [
  {
    type: 'talk',
    title: {
      en: 'DevSecOps & AI: Opportunities and Challenges of a Double-Edged Sword',
      zh: 'DevSecOps & AI：雙面刃的機遇與挑戰',
    },
    teaser: {
      en: 'How AI is reshaping both attack surfaces and defence tooling in modern DevSecOps pipelines.',
      zh: 'AI 如何同時重塑現代 DevSecOps 流水線中的攻擊面與防禦工具。',
    },
    platform: 'CISA Conference',
    url: '',
    date: { en: 'Aug 2024', zh: '2024年8月' },
    lang: 'zh',
    tags: ['DevSecOps', 'AI', 'Security'],
    featured: true,
  },
  {
    type: 'talk',
    title: {
      en: 'DevOps + Sec: Strong Support or Troublemakers?',
      zh: 'DevOps + Sec：強力後盾還是麻煩製造者？',
    },
    teaser: {
      en: 'Practical lessons from integrating security gates into fast-moving DevOps teams without killing velocity.',
      zh: '在不拖慢開發節奏的前提下，將安全門控整合進快速迭代 DevOps 團隊的實戰心得。',
    },
    platform: 'DevOpsDays Taipei',
    url: 'https://speakerdeck.com/lungyu',
    date: { en: 'Jul 2024', zh: '2024年7月' },
    lang: 'zh',
    tags: ['DevSecOps', 'DevOps'],
    featured: false,
  },
  {
    type: 'article',
    title: {
      en: 'Building a RAG-Powered Security Consultant with Gemini',
      zh: '用 Gemini 打造 RAG 驅動的 AI 資安顧問',
    },
    teaser: {
      en: 'A walkthrough of building an internal AI security assistant using RAG pipelines, Gemini 2.5 Flash, and FastAPI.',
      zh: '以 RAG 流水線、Gemini 2.5 Flash 與 FastAPI 打造內部 AI 資安助理的完整過程。',
    },
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/lung-yu-tsai-633865100',
    date: { en: 'Feb 2025', zh: '2025年2月' },
    lang: 'zh',
    tags: ['AI', 'RAG', 'Gemini'],
    featured: false,
  },
  {
    type: 'article',
    title: {
      en: 'OWASP Top 10 for Developers — A Code Review Perspective',
      zh: 'OWASP Top 10 開發者視角 — Code Review 實戰',
    },
    teaser: {
      en: 'Common patterns that slip through code review and how to catch injection, broken auth, and SSRF before they ship.',
      zh: '常見在 Code Review 中漏網的安全漏洞模式，以及如何在上線前抓出注入、認證缺陷與 SSRF。',
    },
    platform: 'Medium',
    url: '',
    date: { en: 'Nov 2024', zh: '2024年11月' },
    lang: 'zh',
    tags: ['Security', 'Code Review', 'OWASP'],
    featured: false,
  },
  {
    type: 'course',
    title: {
      en: 'Designing a DevSecOps Curriculum from Scratch',
      zh: '從零設計 DevSecOps 課程的心得與架構',
    },
    teaser: {
      en: 'How I structure DevSecOps training for engineering teams: topics, exercises, and the mindset shift that matters most.',
      zh: '我如何為工程團隊設計 DevSecOps 培訓課程：主題、演練方式，以及最關鍵的思維轉變。',
    },
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/lung-yu-tsai-633865100',
    date: { en: 'Mar 2025', zh: '2025年3月' },
    lang: 'zh',
    tags: ['DevSecOps', 'Training', 'Education'],
    featured: false,
  },
  {
    type: 'article',
    slug: 'devsecops-turning-points',
    title: {
      en: 'DevSecOps Turning Points: 3 Lessons from Integrating Security into Agile Teams',
      zh: 'DevSecOps 轉捩點：安全融入敏捷團隊的 3 個關鍵教訓',
    },
    teaser: {
      en: "Security doesn't fail because of tools. It fails because of timing and framing. Three hard-won lessons from building DevSecOps at scale.",
      zh: '安全機制失敗不是因為工具不好，而是時機與框架的問題。從實戰中總結的三個關鍵轉捩點。',
    },
    platform: 'Personal',
    url: '',
    date: { en: 'Mar 2026', zh: '2026年3月' },
    lang: 'zh',
    tags: ['DevSecOps', 'Security', 'Agile'],
    featured: true,
    content: {
      en: `After three years of building DevSecOps processes at a Gamania subsidiary, I've come to one conclusion: security doesn't fail because of tools. It fails because of timing and framing.\n\nHere are three turning points that changed how I approach secure software development.\n\n## 1. Security gates that block are security gates that get bypassed\n\nThe first CI/CD security pipeline I built was technically correct. SAST scanner runs on every PR, findings block the merge. Within two months, the team had mastered three bypass tactics:\n\n- Suppress false positives by category — for entire rule classes, indefinitely\n- Disable rules \"for expediency\" with a YAML comment\n- Route around the gate with a manager \`override\` flag\n\nThe problem wasn't the scanner. The problem was that developers experienced security as an **adversary** — something that stopped their work. The fix: **change the feedback loop.** Move findings to warnings, explain why each category matters, let teams own their risk. Blocked pipelines teach avoidance. **Visible risk teaches judgment.**\n\n## 2. The hardest sell isn't to developers — it's to product owners\n\nI spent the first year convincing developers. The second year I realised the real audience was product owners and tech leads. A developer who understands an injection risk will still merge vulnerable code if the sprint deadline hits and no one above them has explicitly said "this risk is not acceptable."\n\nDevSecOps requires security to be a product concern, not a delivery blocker. That meant producing two-page risk summaries instead of CVSS score spreadsheets, and framing conversations as "this is a business continuity question" rather than "this violates our policy." Security literacy at the business level is the actual force multiplier.\n\n## 3. AI accelerates both attack surface and defence — and you need to be ready for both\n\nSince 2024, every team I work with has GitHub Copilot or similar. AI code generation is orders of magnitude faster than human typing. It's also orders of magnitude faster at producing insecure patterns — hardcoded secrets, trusting user input, missing auth checks — because the training data contains a lot of old, vulnerable code.\n\nThe answer isn't to ban AI tooling. The answer is to run SAST rules specifically tuned to AI-generated pattern antipatterns, to build prompt libraries that include security requirements, and to treat AI output with the same review standards as junior developer output: thorough, not assumed correct.\n\nThe DevSecOps stack hasn't changed fundamentally. What's changed is the rate of production — and that means framing, tooling, and education all need to operate at the same velocity.`,
      zh: `在 Gamania 子公司建立 DevSecOps 流程三年後，我得出一個結論：安全機制失敗，不是因為工具不好，而是因為時機與框架的問題。\n\n以下是三個改變我對安全軟體開發看法的轉捩點。\n\n## 1. 阻擋開發的安全關卡，最終會被繞過\n\n我第一條 CI/CD 安全流水線技術上是正確的：每個 PR 執行 SAST 掃描，有發現就阻擋合併。不到兩個月，團隊習得了三種繞過手法：\n\n- 對整個規則類批次壓制誤報，無限期有效\n- 在 YAML 裡加一行注釋，以「加速開發」為由停用規則\n- 透過主管的 \`override\` 旗標直接跳過關卡\n\n問題不在掃描器，而在開發者把安全當成**對手**——一個阻礙他們工作的東西。解法是：**改變回饋循環。** 先把發現改為警告，說明每個類別的重要性，讓團隊自己決定承擔哪些風險。被阻擋的流水線教會的是「如何繞過」，**可見的風險教會的是「如何判斷」。**\n\n## 2. 最難說服的不是開發者，是產品負責人\n\n第一年我花在說服開發者上。第二年我發現真正的對象是產品負責人和技術主管。一個懂注入風險的開發者，在 Sprint 截止日快到、上面沒人明確說「這個風險不可接受」的情況下，還是會把有漏洞的程式碼合進去。\n\nDevSecOps 需要安全成為產品關注事項，而不是交付的阻礙。這代表要產出兩頁的風險摘要，而不是 CVSS 分數試算表；要把對話框架成「這是業務持續性問題」，而不是「這違反了我們的政策」。提升業務層面的資安素養，才是真正的槓桿點。\n\n## 3. AI 同時加速攻擊面與防禦能力——你需要兩者都準備好\n\n2024 年以來，我接觸的每個團隊都在用 GitHub Copilot 或類似工具。AI 生成程式碼的速度比人打字快好幾個數量級，但它生產不安全模式的速度也一樣快——硬編碼密鑰、信任使用者輸入、缺少驗證——因為訓練資料裡有大量舊的、有漏洞的程式碼。\n\n答案不是禁用 AI 工具，而是跑針對 AI 生成反模式調校過的 SAST 規則、建立包含安全需求的 Prompt 文庫，並用對待初級開發者產出同等的審查標準來看待 AI 輸出：徹底審查，而非假設正確。\n\nDevSecOps 工具鏈本質上沒有改變，改變的是生產速度——這代表框架、工具和教育都需要以同樣的速度運作。`,
    },
  },
]

export const achievements: Achievement[] = [
  { icon: '🧊', label: { en: 'Arctic Code Vault Contributor', zh: 'Arctic 程式碼保存庫貢獻者' } },
  { icon: '🦈', label: { en: 'Pull Shark', zh: 'Pull Shark' } },
  { icon: '👥', label: { en: 'Pair Extraordinaire', zh: 'Pair Extraordinaire' } },
  { icon: '🎯', label: { en: 'YOLO', zh: 'YOLO' } },
  { icon: '⚡', label: { en: 'Quickdraw', zh: 'Quickdraw' } },
]

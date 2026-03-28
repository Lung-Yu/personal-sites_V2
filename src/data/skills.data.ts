import type { SkillGroup, SkillChip, ChipColors, ConsultingService } from './types'

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
        'Compliance Auditing',
      ],
      zh: [
        '資安架構與治理',
        '滲透測試（CEH）',
        '弱點評估',
        '事件應變與風險管理',
        'ISO 27001 主導稽核員',
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
        'React',
        'RESTful API Design',
        'Docker · Kubernetes · Nginx',
        'CI/CD Pipeline Implementation',
      ],
      zh: [
        'Python · TypeScript · C# · Java · C++',
        'React',
        'RESTful API 設計',
        'Docker · Kubernetes · Nginx',
        'CI/CD 流水線建置',
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
  { label: 'React', cat: 'infra' },
]

export const chipColors: ChipColors = {
  lang:  { bg: '#eff6ff', border: '#bfdbfe', text: '#1d4ed8' },
  ai:    { bg: '#faf5ff', border: '#e9d5ff', text: '#7c3aed' },
  sec:   { bg: '#fff1f2', border: '#fecdd3', text: '#be123c' },
  infra: { bg: '#f0fdf4', border: '#bbf7d0', text: '#15803d' },
}


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


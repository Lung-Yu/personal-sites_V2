// ── Types ─────────────────────────────────────────────────────────────────────

export type ChipCat = 'lang' | 'ai' | 'sec' | 'infra'
export type WritingType = 'article' | 'talk' | 'course' | 'thread'
export type ProjectLinkType = 'github' | 'demo' | 'video' | 'article' | 'slides' | 'site'

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
  resume?: boolean
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
  resume?: boolean
}

/** A link associated with a project (demo, video, article, etc.) */
export interface ProjectLink {
  type: ProjectLinkType
  label: BL
  url: string
}

export interface Project {
  name: string
  description: BL
  language: string
  stars: number
  /** Primary URL (GitHub). Use links[] for demo/video/article links. */
  url: string
  /** Optional additional links for demos, videos, articles, etc. */
  links?: ProjectLink[]
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
}

export interface Achievement {
  icon: string
  label: BL
}

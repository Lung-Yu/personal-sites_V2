// ── profile.ts ────────────────────────────────────────────────────────────────
// Barrel file — all site data lives in the .data.ts files below.
// Import from this file as before; nothing else needs to change.

// Re-export all types
export type {
  ChipCat, WritingType, ProjectLinkType,
  BL, BLArr,
  ProfileData, SkillGroup, SkillChip, ChipColors,
  ExperienceEntry, EducationEntry, Certification,
  ConsultingService, Talk, ProjectLink, Project, Writing, Achievement,
} from './types'

// Re-export all data
export { skills, skillChips, chipColors, consulting } from './skills.data'
export { experience, education, certifications }     from './experience.data'
export { talks }                                     from './talks.data'
export { projects, languageColors }                  from './projects.data'
export { writings }                                  from './writings.data'

// ── Profile & Achievements ─────────────────────────────────────────────────
import type { ProfileData, Achievement } from './types'

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
    en: `Cybersecurity expert and full-stack developer with 12+ years of experience in information security and software development. Specialises in integrating security into the development process to create safer, more stable software systems.

Conference speaker at DevOpsDays Taipei, CyberRes, CISA, and HWDC. Holds CISSP, CSSLP, ISO 27001 Lead Auditor, and CEH certifications. Currently Technical Manager at Cloudforce and part-time instructor teaching DevSecOps.`,
    zh: `擁有 12 年以上資訊安全與軟體開發經驗的資安專家與全端開發者，專注於將安全性融入開發流程，打造更安全穩定的軟體系統。

曾於 DevOpsDays Taipei、CyberRes、CISA 及 HWDC 等研討會演講。持有 CISSP、CSSLP、ISO 27001 主導稽核員及 CEH 等國際認證。目前擔任 Cloudforce 技術經理，並兼任 DevSecOps 課程講師。`,
  },
  links: {
    github: 'https://github.com/Lung-Yu',
    linkedin: 'https://www.linkedin.com/in/lung-yu-tsai-633865100',
  },
}

export const achievements: Achievement[] = [
  { icon: '🧊', label: { en: 'Arctic Code Vault Contributor', zh: 'Arctic 程式碼保存庫貢獻者' } },
  { icon: '🦈', label: { en: 'Pull Shark', zh: 'Pull Shark' } },
  { icon: '👥', label: { en: 'Pair Extraordinaire', zh: 'Pair Extraordinaire' } },
  { icon: '🎯', label: { en: 'YOLO', zh: 'YOLO' } },
  { icon: '⚡', label: { en: 'Quickdraw', zh: 'Quickdraw' } },
]

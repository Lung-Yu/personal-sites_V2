import type { Writing } from './types'

export const writings: Writing[] = [
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
    url: 'https://devopsdays.tw/2024/session-page/3022',
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
    url: '',
    date: { en: 'Feb 2025', zh: '2025年2月' },
    lang: 'zh',
    tags: ['AI', 'RAG', 'Gemini'],
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
    url: '',
    date: { en: 'Mar 2025', zh: '2025年3月' },
    lang: 'zh',
    tags: ['DevSecOps', 'Training', 'Education'],
    featured: false,
  },
]

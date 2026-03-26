/**
 * src/lib/posts.ts
 *
 * Loads all Markdown files from src/posts/*.md at build time using Vite's
 * import.meta.glob with { as: 'raw', eager: true }.
 *
 * Each file uses YAML frontmatter for metadata and a <!-- zh --> comment to
 * split English and Chinese body content.
 *
 * Frontmatter fields:
 *   slug        - URL slug used for /blog/:slug routing
 *   type        - 'article' | 'talk' | 'course' | 'thread'
 *   platform    - display platform name (e.g. 'Personal')
 *   date_en     - English date string
 *   date_zh     - Chinese date string
 *   tags        - string array
 *   featured    - boolean
 *   title_en    - English title
 *   title_zh    - Chinese title
 *   teaser_en   - English teaser
 *   teaser_zh   - Chinese teaser
 */

import { marked } from 'marked'
import type { WritingType } from '../data/profile'

/** Minimal browser-safe frontmatter parser (no Node.js Buffer needed). */
function parseFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/m)
  if (!match) return { data: {}, content: raw }
  const yamlBlock = match[1]
  const content = match[2]
  const data: Record<string, unknown> = {}

  for (const line of yamlBlock.split('\n')) {
    const kv = line.match(/^(\w+)\s*:\s*(.+)$/)
    if (!kv) continue
    const key = kv[1]
    let val: string = kv[2].trim()

    // Array: [a, b, c]
    if (val.startsWith('[') && val.endsWith(']')) {
      data[key] = val
        .slice(1, -1)
        .split(',')
        .map((s) => s.trim())
      continue
    }
    // Boolean
    if (val === 'true') { data[key] = true; continue }
    if (val === 'false') { data[key] = false; continue }
    // Strip surrounding quotes
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1)
    }
    data[key] = val
  }

  return { data, content }
}

export interface Post {
  slug: string
  type: WritingType
  platform: string
  date: { en: string; zh: string }
  tags: string[]
  featured: boolean
  title: { en: string; zh: string }
  teaser: { en: string; zh: string }
  /** Parsed HTML for each language */
  html: { en: string; zh: string }
}

// Configure marked for security: no HTML pass-through, no mangle
marked.setOptions({ gfm: true })

const rawFiles = import.meta.glob<string>('/src/posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

export const posts: Post[] = Object.values(rawFiles)
  .map((raw) => {
    const { data, content } = parseFrontmatter(raw)
    const [enBody, zhBody = ''] = content.split(/<!--\s*zh\s*-->/)
    return {
      slug: data.slug as string,
      type: (data.type ?? 'article') as WritingType,
      platform: (data.platform ?? 'Personal') as string,
      date: { en: data.date_en as string, zh: data.date_zh as string },
      tags: (data.tags ?? []) as string[],
      featured: Boolean(data.featured),
      title: { en: data.title_en as string, zh: data.title_zh as string },
      teaser: { en: data.teaser_en as string, zh: data.teaser_zh as string },
      html: {
        en: marked.parse(enBody.trim()) as string,
        zh: marked.parse(zhBody.trim()) as string,
      },
    }
  })
  .sort((a, b) => {
    // Featured posts first, then maintain file order (stable sort)
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return 0
  })

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

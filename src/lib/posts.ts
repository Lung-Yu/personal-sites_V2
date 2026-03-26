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

import matter from 'gray-matter'
import { marked } from 'marked'
import type { WritingType } from '../data/profile'

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
    const { data, content } = matter(raw)
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

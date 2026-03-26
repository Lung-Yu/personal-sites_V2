import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { writings, type BL, type WritingType } from '../data/profile'
import { posts, type Post } from '../lib/posts'
import '../styles/Blog.css'
import '../styles/Projects.css'

function useL() {
  const { i18n } = useTranslation()
  function l(obj: BL): string
  function l(obj: string): string
  function l(obj: BL | string | null | undefined): string | undefined {
    if (obj == null) return undefined
    if (typeof obj === 'string') return obj
    const lang: 'en' | 'zh' = i18n.language.startsWith('zh') ? 'zh' : 'en'
    return obj[lang] ?? obj.en
  }
  return l
}

// Normalise a Post into the same shape WritingCard expects
function postToWriting(p: Post) {
  return {
    type: p.type,
    title: p.title,
    teaser: p.teaser,
    platform: p.platform,
    url: '',
    date: p.date,
    lang: 'zh',
    tags: p.tags,
    featured: p.featured,
    slug: p.slug,
  }
}

export default function Blog() {
  const { t } = useTranslation()
  const l = useL()

  // Merge: posts (Markdown) take priority; exclude profile writings that have a
  // slug already covered by a Markdown post to avoid duplicates.
  const postSlugs = new Set(posts.map((p) => p.slug))
  const writingsFiltered = writings.filter((w) => !w.slug || !postSlugs.has(w.slug))
  const allItems = [...posts.map(postToWriting), ...writingsFiltered]

  const featured = allItems.filter((w) => w.featured)
  const rest = allItems.filter((w) => !w.featured)

  const typeLabel = (type: string): string => {
    const map: Record<string, string> = {
      article: 'typeArticle',
      talk: 'typeTalk',
      course: 'typeCourse',
      thread: 'typeThread',
    }
    return t(`blog.${map[type] ?? 'typeArticle'}`)
  }

  return (
    <div className="blog-page">
      <div className="container">

        <div className="blog-header">
          <h1>{t('blog.title')}</h1>
          <p className="subtitle">{t('blog.subtitle')}</p>
        </div>

        {/* Featured */}
        {featured.length > 0 && (
          <section className="blog-section">
            <p className="blog-section-title">{t('blog.featured')}</p>
            {featured.map((w, i) => (
              <WritingCard key={i} w={w} l={l} typeLabel={typeLabel} t={t} featured />
            ))}
          </section>
        )}

        {/* Rest */}
        <section className="blog-section">
          <p className="blog-section-title">{t('blog.title')}</p>
          <div className="writings-list">
            {rest.map((w, i) => (
              <WritingCard key={i} w={w} l={l} typeLabel={typeLabel} t={t} />
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}

interface WritingCardProps {
  w: ReturnType<typeof postToWriting> | (typeof writings)[number]
  l: (obj: BL) => string
  typeLabel: (type: string) => string
  t: (key: string) => string
  featured?: boolean
}

function WritingCard({ w, l, typeLabel, t, featured }: WritingCardProps) {
  const inner = (
    <div className={`writing-card${featured ? ' writing-card--featured' : ''}`}>
      <div className="writing-card-top">
        <div className="writing-badges">
          <span className={`writing-type writing-type--${w.type as WritingType}`}>{typeLabel(w.type)}</span>
          <span className="writing-platform">{w.platform}</span>
          <span className="writing-lang-flag">{w.lang === 'zh' ? '🇹🇼' : '🇺🇸'}</span>
        </div>
        <span className="writing-date">{l(w.date)}</span>
      </div>
      <h3 className="writing-title">{l(w.title)}</h3>
      <p className="writing-teaser">{l(w.teaser)}</p>
      <div className="writing-footer">
        <div className="writing-tags">
          {w.tags.map((tag) => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>
        {(w.slug || w.url) && (
          <span className="writing-read">{t('blog.readMore')}</span>
        )}
      </div>
    </div>
  )

  if (w.slug) {
    return (
      <Link to={`/blog/${w.slug}`} className="writing-card-link">
        {inner}
      </Link>
    )
  }
  if (w.url) {
    return (
      <a href={w.url} target="_blank" rel="noopener noreferrer" className="writing-card-link">
        {inner}
      </a>
    )
  }
  return <div className="writing-card-link writing-card-link--no-url">{inner}</div>
}

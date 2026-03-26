import { useParams, Link } from 'react-router-dom'
import { type ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { writings, type BL } from '../data/profile'
import '../styles/BlogPost.css'
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

function renderInline(text: string): ReactNode {
  const segs: ReactNode[] = []
  const rx = /(\*\*[^*]+\*\*|`[^`]+`)/g
  let last = 0
  let m: RegExpExecArray | null
  while ((m = rx.exec(text)) !== null) {
    if (m.index > last) segs.push(text.slice(last, m.index))
    const tok = m[0]
    if (tok.startsWith('**')) {
      segs.push(<strong key={m.index}>{tok.slice(2, -2)}</strong>)
    } else {
      segs.push(<code className="inline-code" key={m.index}>{tok.slice(1, -1)}</code>)
    }
    last = m.index + tok.length
  }
  if (last < text.length) segs.push(text.slice(last))
  if (segs.length === 0) return text
  if (segs.length === 1) return segs[0]
  return <>{segs}</>
}

function renderContent(raw: string): ReactNode[] {
  return raw
    .split(/\n\n+/)
    .filter(Boolean)
    .map((block, i) => {
      if (block.startsWith('## ')) {
        return <h2 key={i}>{renderInline(block.slice(3))}</h2>
      }
      const lines = block.split('\n').filter(Boolean)
      if (lines.length >= 1 && lines.every((l) => /^\s*[-*]\s/.test(l))) {
        return (
          <ul key={i}>
            {lines.map((line, j) => (
              <li key={j}>{renderInline(line.replace(/^\s*[-*]\s+/, ''))}</li>
            ))}
          </ul>
        )
      }
      if (lines.length >= 2 && lines.every((l) => /^\d+\.\s/.test(l))) {
        return (
          <ol key={i}>
            {lines.map((line, j) => (
              <li key={j}>{renderInline(line.replace(/^\d+\.\s+/, ''))}</li>
            ))}
          </ol>
        )
      }
      return <p key={i}>{renderInline(block)}</p>
    })
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const { t } = useTranslation()
  const l = useL()

  const writing = writings.find((w) => w.slug === slug)

  if (!writing) {
    return (
      <div className="blog-post-page">
        <div className="container">
          <Link to="/blog" className="blog-post-back">← {t('blog.title')}</Link>
          <div className="blog-post-not-found">
            <h2>404</h2>
            <p>{t('blog.notFound') ?? 'Article not found.'}</p>
          </div>
        </div>
      </div>
    )
  }

  const content = writing.content ? l(writing.content as BL) : null

  return (
    <div className="blog-post-page">
      <div className="container">
        <Link to="/blog" className="blog-post-back">← {t('blog.title')}</Link>

        <header className="blog-post-header">
          <div className="blog-post-badges">
            <span className="blog-post-type">{writing.type}</span>
            <span className="blog-post-platform">{writing.platform}</span>
            <span className="blog-post-date">{l(writing.date)}</span>
          </div>
          <h1 className="blog-post-title">{l(writing.title)}</h1>
          {writing.teaser && (
            <p className="blog-post-teaser">{l(writing.teaser)}</p>
          )}
          {writing.tags.length > 0 && (
            <div className="blog-post-tags">
              {writing.tags.map((tag) => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>
          )}
        </header>

        <hr className="blog-post-divider" />

        {content ? (
          <article className="blog-post-content">
            {renderContent(content)}
          </article>
        ) : writing.url ? (
          <p style={{ color: 'var(--text2)' }}>
            <a href={writing.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {t('blog.readMore')} ↗
            </a>
          </p>
        ) : null}
      </div>
    </div>
  )
}

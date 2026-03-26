import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getPost } from '../lib/posts'
import { writings } from '../data/profile'
import type { BL } from '../data/profile'
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

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const { t, i18n } = useTranslation()
  const l = useL()
  const lang: 'en' | 'zh' = i18n.language.startsWith('zh') ? 'zh' : 'en'

  // Try Markdown post first, fall back to profile.ts writing with inline content
  const post = slug ? getPost(slug) : undefined
  const legacyWriting = !post ? writings.find((w) => w.slug === slug) : undefined

  if (!post && !legacyWriting) {
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

  const title    = post ? l(post.title)  : l((legacyWriting!.title  as BL))
  const teaser   = post ? l(post.teaser) : l((legacyWriting!.teaser as BL))
  const date     = post ? l(post.date)   : l((legacyWriting!.date   as BL))
  const tags     = post ? post.tags      : legacyWriting!.tags
  const platform = post ? post.platform  : legacyWriting!.platform
  const html     = post?.html[lang]

  return (
    <div className="blog-post-page">
      <div className="container">
        <Link to="/blog" className="blog-post-back">← {t('blog.title')}</Link>

        <header className="blog-post-header">
          <div className="blog-post-badges">
            <span className="blog-post-type">{(post?.type ?? legacyWriting?.type) ?? 'article'}</span>
            <span className="blog-post-platform">{platform}</span>
            <span className="blog-post-date">{date}</span>
          </div>
          <h1 className="blog-post-title">{title}</h1>
          {teaser && <p className="blog-post-teaser">{teaser}</p>}
          {tags.length > 0 && (
            <div className="blog-post-tags">
              {tags.map((tag) => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>
          )}
        </header>

        <hr className="blog-post-divider" />

        {html ? (
          <article
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        ) : legacyWriting?.url ? (
          <p>
            <a href={legacyWriting.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              {t('blog.readMore')} ↗
            </a>
          </p>
        ) : null}
      </div>
    </div>
  )
}

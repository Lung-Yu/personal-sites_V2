import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'
import { useInView } from '../hooks/useInView'
import { posts } from '../lib/posts'
import { writings } from '../data/profile'
import type { BL } from '../data/profile'
import '../styles/Blog.css'

function useL() {
  const { i18n } = useTranslation()
  return function l(obj: BL | string): string {
    if (typeof obj === 'string') return obj
    const lang: 'en' | 'zh' = i18n.language.startsWith('zh') ? 'zh' : 'en'
    return obj[lang] ?? obj.en
  }
}

function FadeSection({ children }: { children: ReactNode }) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`fade-up${inView ? ' visible' : ''}`}>
      {children}
    </div>
  )
}

export default function Blog() {
  const { t, i18n } = useTranslation()
  const l = useL()
  const isZh = i18n.language.startsWith('zh')
  const topics: string[] = t('blog.comingSoonTopics', { returnObjects: true }) as string[]

  const typeLabel = (type: string) => {
    const map: Record<string, string> = {
      article: t('blog.typeArticle'),
      talk:    t('blog.typeTalk'),
      course:  t('blog.typeCourse'),
      thread:  t('blog.typeThread'),
    }
    return map[type] ?? type
  }

  return (
    <div className="blog-page">
      <Helmet>
        <title>{isZh ? '文章 · 蔡龍佑' : 'Writing · tygrus'}</title>
        <meta name="description" content={isZh
          ? '蔡龍佑關於 DevSecOps、AI 應用與資安的技術文章、演講心得與課程筆記。'
          : 'Technical articles, conference talk write-ups, and course notes on DevSecOps, AI, and cybersecurity by Lung-Yu Tsai.'
        } />
      </Helmet>
      <div className="container">

        <div className="blog-header">
          <h1>{t('blog.title')}</h1>
          <p className="subtitle">{t('blog.subtitle')}</p>
        </div>

        {/* ── Markdown posts ── */}
        {posts.length > 0 && (
          <FadeSection>
            <div className="blog-section">
              <div className="blog-section-title">{t('blog.sectionArticles')}</div>
              <div className="writings-list">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    to={`/blog/${post.slug}`}
                    className="writing-card-link"
                  >
                    <div className={`writing-card${post.featured ? ' writing-card--featured' : ''}`}>
                      <div className="writing-card-top">
                        <div className="writing-badges">
                          <span className={`writing-type writing-type--${post.type}`}>
                            {typeLabel(post.type)}
                          </span>
                          <span className="writing-platform">{post.platform}</span>
                        </div>
                        <span className="writing-date">{l(post.date)}</span>
                      </div>
                      <div className="writing-title">{l(post.title)}</div>
                      <p className="writing-teaser">{l(post.teaser)}</p>
                      <div className="writing-footer">
                        <div className="writing-tags">
                          {post.tags.map((tag) => (
                            <span key={tag} className="project-tag">{tag}</span>
                          ))}
                        </div>
                        <span className="writing-read">{t('blog.readMore')}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </FadeSection>
        )}

        {/* ── External writings ── */}
        {writings.length > 0 && (
          <FadeSection>
            <div className="blog-section">
              <div className="blog-section-title">{t('blog.sectionExternal')}</div>
              <div className="writings-list">
                {writings.map((w, i) => {
                  const hasUrl = Boolean(w.url)
                  const inner = (
                    <div className={`writing-card${w.featured ? ' writing-card--featured' : ''}`}>
                      <div className="writing-card-top">
                        <div className="writing-badges">
                          <span className={`writing-type writing-type--${w.type}`}>
                            {typeLabel(w.type)}
                          </span>
                          <span className="writing-platform">{w.platform}</span>
                          {w.lang && <span className="writing-lang-flag">{w.lang === 'zh' ? '🇹🇼' : '🌐'}</span>}
                        </div>
                        <span className="writing-date">{l(w.date as BL)}</span>
                      </div>
                      <div className="writing-title">{l(w.title as BL)}</div>
                      <p className="writing-teaser">{l(w.teaser as BL)}</p>
                      <div className="writing-footer">
                        <div className="writing-tags">
                          {w.tags.map((tag) => (
                            <span key={tag} className="project-tag">{tag}</span>
                          ))}
                        </div>
                        {hasUrl && <span className="writing-read">{t('blog.readMore')}</span>}
                      </div>
                    </div>
                  )
                  return hasUrl ? (
                    <a
                      key={i}
                      href={w.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="writing-card-link"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={i} className="writing-card-link writing-card-link--no-url">
                      {inner}
                    </div>
                  )
                })}
              </div>
            </div>
          </FadeSection>
        )}

        {/* ── Fallback if nothing exists yet ── */}
        {posts.length === 0 && writings.length === 0 && (
          <FadeSection>
            <div className="blog-coming-soon">
              <span className="blog-coming-badge">{t('blog.comingSoonBadge')}</span>
              <div className="blog-coming-icon">✏️</div>
              <h2 className="blog-coming-title">{t('blog.comingSoonTitle')}</h2>
              <p className="blog-coming-desc">{t('blog.comingSoonDesc')}</p>
              <div className="blog-coming-topics">
                <p className="blog-coming-topics-label">{t('blog.comingSoonTopicsLabel')}</p>
                <ul className="blog-coming-topics-list">
                  {topics.map((topic, i) => (
                    <li key={i} className="blog-coming-topic-item">
                      <span className="blog-coming-topic-dot" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeSection>
        )}

      </div>
    </div>
  )
}

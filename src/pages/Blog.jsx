import { useTranslation } from 'react-i18next'
import { writings } from '../data/profile'
import '../styles/Blog.css'
import '../styles/Projects.css'

function useL() {
  const { i18n } = useTranslation()
  return (obj) => {
    if (!obj || typeof obj === 'string') return obj
    const lang = i18n.language.startsWith('zh') ? 'zh' : 'en'
    return obj[lang] ?? obj.en
  }
}

export default function Blog() {
  const { t } = useTranslation()
  const l = useL()

  const featured = writings.filter((w) => w.featured)
  const rest = writings.filter((w) => !w.featured)

  const typeLabel = (type) => {
    const map = { article: 'typeArticle', talk: 'typeTalk', course: 'typeCourse', thread: 'typeThread' }
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

function WritingCard({ w, l, typeLabel, t, featured }) {
  const inner = (
    <div className={`writing-card${featured ? ' writing-card--featured' : ''}`}>
      <div className="writing-card-top">
        <div className="writing-badges">
          <span className={`writing-type writing-type--${w.type}`}>{typeLabel(w.type)}</span>
          <span className="writing-platform">{w.platform}</span>
          <span className={`writing-lang-flag`}>{w.lang === 'zh' ? '🇹🇼' : '🇺🇸'}</span>
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
        {w.url && (
          <span className="writing-read">{t('blog.readMore')}</span>
        )}
      </div>
    </div>
  )

  if (w.url) {
    return (
      <a href={w.url} target="_blank" rel="noopener noreferrer" className="writing-card-link">
        {inner}
      </a>
    )
  }
  return <div className="writing-card-link writing-card-link--no-url">{inner}</div>
}

import { useTranslation } from 'react-i18next'
import '../styles/Blog.css'

export default function Blog() {
  const { t } = useTranslation()

  const topics: string[] = t('blog.comingSoonTopics', { returnObjects: true }) as string[]

  return (
    <div className="blog-page">
      <div className="container">

        <div className="blog-header">
          <h1>{t('blog.title')}</h1>
          <p className="subtitle">{t('blog.subtitle')}</p>
        </div>

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

      </div>
    </div>
  )
}

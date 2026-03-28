import { useTranslation } from 'react-i18next'
import { projects, languageColors, type BL, type ProjectLink } from '../data/profile'
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

const LINK_META: Record<string, { icon: string; defaultLabel: BL }> = {
  github:  { icon: '⌥', defaultLabel: { en: 'GitHub',  zh: 'GitHub'  } },
  demo:    { icon: '▶', defaultLabel: { en: 'Demo',    zh: 'Demo'    } },
  video:   { icon: '🎬', defaultLabel: { en: 'Video',   zh: '影片'    } },
  article: { icon: '📄', defaultLabel: { en: 'Article', zh: '文章'    } },
  slides:  { icon: '📊', defaultLabel: { en: 'Slides',  zh: '簡報'    } },
  site:    { icon: '🌐', defaultLabel: { en: 'Site',    zh: '網站'    } },
}

const featured = projects.filter((p) => p.highlight)
const others = projects.filter((p) => !p.highlight)

export default function Projects() {
  const { t } = useTranslation()
  const l = useL()

  return (
    <div className="projects-page">
      <div className="container">
        <div className="projects-page-header">
          <h1>{t('projects.title')}</h1>
          <p className="subtitle">{t('projects.subtitle')}</p>
        </div>

        {/* Featured */}
        <p className="section-label">{t('projects.featured')}</p>
        <div className="projects-featured">
          {featured.map((p) => (
            <div key={p.name} className="project-featured-card">
              <div className="project-featured-top">
                <div className="project-featured-name">
                  <RepoIcon />
                  {p.name}
                </div>
                <span className="highlight-badge">{t('projects.featured')}</span>
              </div>
              <p className="project-featured-desc">{l(p.description)}</p>
              <div className="project-tags" style={{ marginBottom: 10 }}>
                {p.tags.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
              <div className="project-footer">
                <LangIndicator lang={p.language} />
                {p.stars > 0 && <Stars count={p.stars} />}
                <ProjectLinks links={buildLinks(p.url, p.links)} l={l} />
              </div>
            </div>
          ))}
        </div>

        {/* Others */}
        <div className="projects-grid-section">
          <h2>{t('projects.more')}</h2>
          <div className="projects-grid">
            {others.map((p) => (
              <div key={p.name} className="project-card">
                <div className="project-card-name">
                  <RepoIcon />
                  {p.name}
                </div>
                <p className="project-card-desc">{l(p.description)}</p>
                <div className="project-tags">
                  {p.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-footer">
                  <LangIndicator lang={p.language} />
                  {p.stars > 0 && <Stars count={p.stars} />}
                  <ProjectLinks links={buildLinks(p.url, p.links)} l={l} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/** Merge legacy url (GitHub) with explicit links[], dedup empties */
function buildLinks(url: string, links?: ProjectLink[]): ProjectLink[] {
  const result: ProjectLink[] = []
  if (url) {
    result.push({ type: 'github', label: { en: 'GitHub', zh: 'GitHub' }, url })
  }
  if (links) result.push(...links.filter((l) => l.url))
  return result
}

interface ProjectLinksProps {
  links: ProjectLink[]
  l: (obj: BL) => string
}
function ProjectLinks({ links, l }: ProjectLinksProps) {
  if (links.length === 0) return null
  return (
    <div className="project-links">
      {links.map((lk) => {
        const meta = LINK_META[lk.type] ?? LINK_META.site
        return (
          <a
            key={lk.type + lk.url}
            href={lk.url}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-btn"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="project-link-icon">{meta.icon}</span>
            {l(lk.label)}
          </a>
        )
      })}
    </div>
  )
}

interface LangIndicatorProps { lang: string }
function LangIndicator({ lang }: LangIndicatorProps) {
  return (
    <div className="lang-indicator">
      <span className="lang-dot" style={{ background: languageColors[lang] || '#aaa' }} />
      <span className="lang-label">{lang}</span>
    </div>
  )
}

interface StarsProps { count: number }
function Stars({ count }: StarsProps) {
  return (
    <span className="stars">
      <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z" />
      </svg>
      {count}
    </span>
  )
}

function RepoIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 16 16" fill="currentColor" style={{ color: 'var(--muted)', flexShrink: 0 }}>
      <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8Z" />
    </svg>
  )
}

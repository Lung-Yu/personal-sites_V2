import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { type ReactNode } from 'react'
import {
  profile, skillChips, chipColors, achievements, talks, projects, languageColors,
  certifications,
  type BL, type BLArr,
} from '../data/profile'
import { useInView } from '../hooks/useInView'
import { useTypewriter } from '../hooks/useTypewriter'
import '../styles/Home.css'
import '../styles/Projects.css'

function useL() {
  const { i18n } = useTranslation()
  function l(obj: BL): string
  function l(obj: BLArr): string[]
  function l(obj: string): string
  function l(obj: BL | BLArr | string | null | undefined): string | string[] | undefined {
    if (obj == null) return undefined
    if (typeof obj === 'string') return obj
    const o = obj as { en: string | string[]; zh: string | string[] }
    const lang: 'en' | 'zh' = i18n.language.startsWith('zh') ? 'zh' : 'en'
    return (o[lang] ?? o.en) as string | string[]
  }
  return l
}

interface FadeSectionProps {
  children: ReactNode
  className?: string
}

function FadeSection({ children, className }: FadeSectionProps) {
  const [ref, inView] = useInView()
  return (
    <div ref={ref} className={`fade-up${inView ? ' visible' : ''}${className ? ` ${className}` : ''}`}>
      {children}
    </div>
  )
}

export default function Home() {
  const { t, i18n } = useTranslation()
  const l = useL()

  const titleText = l(profile.title) as string
  const typedTitle = useTypewriter(titleText, 42, 3000)
  const isDone = typedTitle.length >= titleText.length

  return (
    <>
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-layout">
            <div className="hero-text">
              <div className="hero-eyebrow">
                <span className="status-dot" />
                <span>{t('home.status')}</span>
              </div>

              <h1>
                <span className="gradient">{profile.name.zh}</span>
              </h1>
              <p className="en-name">{profile.name.en} · {profile.name.alias}</p>

              <div className="title-row">
                <span className={`job-title${isDone ? ' typed' : ''}`}>
                  {typedTitle || '\u00A0'}
                </span>
              </div>

              <div className="title-row" style={{ marginTop: '-16px' }}>
                <span className="location">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C2.3 4.339 2 5.764 2 7c0 1.452.415 2.808 1.052 4.096C4.368 13.48 6.045 15.165 7 16c.417-.368.875-.768 1.329-1.183A17.47 17.47 0 0 0 9.895 13c.641-.937 1.14-1.929 1.521-2.904.38-.974.584-1.95.584-2.596 0-2.647-1.78-4.79-4-4.79C8.35.214 8.174.21 8 .21V0Zm0 6a2 2 0 1 1 0 4A2 2 0 0 1 8 6Z"/>
                  </svg>
                  {profile.location}
                </span>
              </div>

              <p className="bio">{l(profile.bio)}</p>

              <div className="hero-links">
                <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary" aria-label="GitHub profile">
                  <GitHubIcon /> GitHub
                </a>
                <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" aria-label="LinkedIn profile">
                  <LinkedInIcon /> LinkedIn
                </a>
              </div>
            </div>

            <div className="hero-avatar-wrap">
              <img
                src={`${import.meta.env.BASE_URL}images/avatar.png`}
                alt="蔡龍佑 Lung-Yu Tsai — profile photo"
                className="hero-avatar"
              />
            </div>
          </div>
        </div>

        {/* Decorative serif watermark in background */}
        <div className="hero-watermark" aria-hidden="true">
          {i18n.language.startsWith('zh') ? '龍佑' : 'tygrus'}
        </div>
      </section>

      <div className="home-body">
        <div className="container">
          <div className="stats-row">
            <div className="stat-card">
              <div className="stat-number">12+</div>
              <div className="stat-label">{t('home.statsYears')}</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{certifications.length}</div>
              <div className="stat-label">{t('home.statsCerts')}</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{talks.length}</div>
              <div className="stat-label">{t('home.statsTalks')}</div>
            </div>
          </div>

          <FadeSection className="home-section">
            <h2 className="section-label">{t('home.sectionSkills')}</h2>
            <div className="skill-chips">
              {skillChips.map((chip) => {
                const c = chipColors[chip.cat]
                return (
                  <span
                    key={chip.label}
                    className="skill-chip"
                    style={{ background: c.bg, borderColor: c.border, color: c.text }}
                  >
                    {chip.label}
                  </span>
                )
              })}
            </div>
          </FadeSection>

          <FadeSection className="home-section">
            <h2 className="section-label">{t('home.sectionTalks')}</h2>
            <div className="talks-preview">
              {talks.map((talk, i) => (
                <div key={i} className="talk-preview-item">
                  <span className="talk-preview-event">{talk.event}</span>
                  <span className="talk-preview-title">{l(talk.title)}</span>
                  <div className="talk-preview-right">
                    <span className="talk-preview-date">{l(talk.date)}</span>
                    {talk.slides && (
                      <a href={talk.slides} target="_blank" rel="noopener noreferrer" className="talk-link-sm" aria-label="View slides">
                        📊
                      </a>
                    )}
                    {talk.video && (
                      <a href={talk.video} target="_blank" rel="noopener noreferrer" className="talk-link-sm" aria-label="Watch video">
                        ▶
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </FadeSection>

          <FadeSection className="home-section">
            <h2 className="section-label">{t('home.sectionProjects')}</h2>
            <div className="home-projects-grid">
              {projects.filter((p) => p.highlight).slice(0, 3).map((p) => (
                <a
                  key={p.name}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="home-project-card"
                >
                  <div className="home-project-name">{p.name}</div>
                  <p className="home-project-desc">{l(p.description)}</p>
                  <div className="home-project-footer">
                    <span className="home-project-lang">
                      <span
                        className="lang-dot"
                        style={{ background: languageColors[p.language] || '#aaa' }}
                      />
                      {p.language}
                    </span>
                    <div className="home-project-tags">
                      {p.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="project-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <Link to="/projects" className="view-all-link">
              {t('home.viewAllProjects')} →
            </Link>
          </FadeSection>

          <FadeSection className="home-section">
            <h2 className="section-label">{t('home.sectionAchievements')}</h2>
            <div className="achievements-row">
              {achievements.map((a) => (
                <div key={a.icon} className="achievement-badge">
                  <span className="icon">{a.icon}</span>
                  {l(a.label)}
                </div>
              ))}
            </div>
          </FadeSection>

          <div className="cta-strip">
            <span>{t('home.ctaText')}</span>
            <Link to="/contact" className="btn btn-primary cta-strip-btn">{t('home.ctaBtn')}</Link>
          </div>
        </div>
      </div>
    </>
  )
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

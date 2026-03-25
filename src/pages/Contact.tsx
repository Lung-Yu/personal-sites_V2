import { useTranslation } from 'react-i18next'
import { consulting, profile, type BL, type BLArr } from '../data/profile'
import '../styles/Contact.css'

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

export default function Contact() {
  const { t } = useTranslation()
  const l = useL()

  return (
    <div className="contact-page">
      <div className="container">

        <div className="contact-header">
          <h1>{t('contact.title')}</h1>
          <p className="subtitle">{t('contact.subtitle')}</p>
        </div>

        {/* Consulting Services */}
        <section className="contact-section">
          <p className="contact-section-title">{t('contact.servicesTitle')}</p>
          <div className="consulting-grid">
            {consulting.map((svc) => (
              <div key={svc.title.en} className="consulting-card">
                <div className="consulting-icon">{svc.icon}</div>
                <h3 className="consulting-title">{l(svc.title)}</h3>
                <p className="consulting-desc">{l(svc.desc)}</p>
                <ul className="consulting-items">
                  {l(svc.items).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Get in Touch */}
        <section className="contact-section">
          <p className="contact-section-title">{t('contact.getInTouch')}</p>
          <div className="contact-reach">
            <p className="contact-available">{t('contact.available')}</p>
            <a
              href={`mailto:${profile.email}`}
              className="btn btn-primary contact-email-btn"
            >
              ✉ {profile.email}
            </a>
            <div className="contact-social">
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                GitHub
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                LinkedIn
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

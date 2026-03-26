import { useState } from 'react'
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
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))
    try {
      const res = await fetch('https://formspree.io/f/xzzboazb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

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

            {status === 'success' ? (
              <p className="form-success">{t('contact.formSuccess')}</p>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-field">
                    <label htmlFor="name">{t('contact.formName')}</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder={t('contact.formNamePlaceholder')}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">{t('contact.formEmail')}</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder={t('contact.formEmailPlaceholder')}
                      required
                    />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="subject">{t('contact.formSubject')}</label>
                  <select id="subject" name="subject" required defaultValue="">
                    <option value="" disabled>{t('contact.formSubjectPlaceholder')}</option>
                    <option value="consulting">{t('contact.formSubjectOpts.consulting')}</option>
                    <option value="speaking">{t('contact.formSubjectOpts.speaking')}</option>
                    <option value="training">{t('contact.formSubjectOpts.training')}</option>
                    <option value="collab">{t('contact.formSubjectOpts.collab')}</option>
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="message">{t('contact.formMessage')}</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder={t('contact.formMessagePlaceholder')}
                    required
                  />
                </div>
                {status === 'error' && (
                  <p className="form-error">{t('contact.formError')}</p>
                )}
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? t('contact.formSending') : t('contact.formSend')}
                </button>
              </form>
            )}

            <div className="contact-divider"><span>or</span></div>

            <a
              href={`mailto:${profile.email}`}
              className="btn btn-secondary contact-email-btn"
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

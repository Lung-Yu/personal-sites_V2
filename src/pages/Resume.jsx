import { useTranslation } from 'react-i18next'
import { profile, experience, education, certifications, skills, talks } from '../data/profile'
import '../styles/Resume.css'

function useL() {
  const { i18n } = useTranslation()
  return (obj) => {
    if (!obj || typeof obj === 'string') return obj
    const lang = i18n.language.startsWith('zh') ? 'zh' : 'en'
    return obj[lang] ?? obj.en
  }
}

export default function Resume() {
  const { t } = useTranslation()
  const l = useL()

  return (
    <div className="resume">
      <div className="container">

        {/* Header */}
        <div className="resume-hero">
          <h1>{profile.name.zh} &mdash; {profile.name.en}</h1>
          <p className="subtitle">{l(profile.title)}</p>
          <div className="resume-meta">
            <span>📍 {profile.location}</span>
            <a href={`mailto:${profile.email}`}>✉ {profile.email}</a>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer">
              <GitHubIcon /> GitHub
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon /> LinkedIn
            </a>
          </div>
          <div className="resume-actions">
            <button className="btn btn-secondary" onClick={() => window.print()}>
              <PrintIcon /> {t('resume.printBtn')}
            </button>
          </div>
        </div>

        {/* Experience */}
        <section className="resume-section">
          <p className="resume-section-title">{t('resume.sectionExp')}</p>
          <div className="timeline">
            {experience.map((job, idx) => (
              <div key={idx} className="timeline-entry">
                <div className="timeline-header">
                  <h3>{l(job.title)}</h3>
                  <span className="period">{l(job.period)}</span>
                </div>
                <div className="timeline-org">
                  <span>{job.company}</span>
                  <span>· {l(job.location)}</span>
                </div>
                {job.companyNote && (
                  <p className="company-note">{l(job.companyNote)}</p>
                )}
                <ul>
                  {l(job.highlights).map((h, i) => <li key={i}>{h}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="resume-section">
          <p className="resume-section-title">{t('resume.sectionEdu')}</p>
          <div className="timeline">
            {education.map((edu, idx) => (
              <div key={idx} className="timeline-entry">
                <div className="timeline-header">
                  <h3>{l(edu.school)}</h3>
                  <span className="period">{edu.period}</span>
                </div>
                <div className="timeline-org">
                  <span className="org-badge">{l(edu.degree)}</span>
                </div>
                <p className="edu-focus">{l(edu.focus)}</p>
                <ul>
                  {l(edu.projects).map((p, i) => <li key={i}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="resume-section">
          <p className="resume-section-title">{t('resume.sectionCerts')}</p>
          <div className="certs-grid">
            {certifications.map((cert) => (
              <div key={cert.name} className="cert-card">
                <div className="cert-abbr">{cert.name}</div>
                <div className="cert-desc">{l(cert.desc)}</div>
                <div className="cert-meta">
                  {cert.issuer}{cert.year ? ` · ${cert.year}` : ''}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Speaking */}
        <section className="resume-section">
          <p className="resume-section-title">{t('resume.sectionTalks')}</p>
          <div className="talks-list">
            {talks.map((talk, idx) => (
              <div key={idx} className="talk-entry">
                <div className="talk-title">{l(talk.title)}</div>
                <div className="talk-meta">
                  <span className="talk-event">{talk.event}</span>
                  <span className="talk-date">{l(talk.date)}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="resume-section">
          <p className="resume-section-title">{t('resume.sectionSkills')}</p>
          <div className="skills-matrix">
            {skills.map((group) => (
              <div key={group.category.en} className="skill-group">
                <div className="skill-group-header">
                  <span className="skill-group-dot" style={{ background: group.color }} />
                  <h3>{l(group.category)}</h3>
                </div>
                <ul>
                  {l(group.items).map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  )
}

function GitHubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function PrintIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
      <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"/>
      <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5ZM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3Zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5Zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Z"/>
    </svg>
  )
}

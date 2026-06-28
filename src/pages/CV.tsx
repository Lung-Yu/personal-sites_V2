import { profile, experience, education, certifications, talks, skills } from '../data/profile'
import '../styles/CV.css'

/* ─── data selections ─────────────────────────────────────────────────────── */

const resumeExperience = experience.slice(0, 4) // Cloudforce, AI Network, Digicentre roles, PwC

const resumeCerts = certifications.filter(c => c.resume)

const resumeTalks = talks.filter(t => t.resume)

// Skill groups to show in sidebar
const SIDEBAR_SKILLS: { label: string; items: string[] }[] = [
  {
    label: 'Security',
    items: [
      'Security Architecture & Governance',
      'DevSecOps · SSDLC · SDLC Integration',
      'Application Security Testing (SAST/DAST/SCA)',
      'Vulnerability Management & Risk Assessment',
      'Penetration Testing · Code Review',
      'ISO 27001:2022 Compliance',
    ],
  },
  {
    label: 'DevOps & Cloud',
    items: [
      'Kubernetes · GKE · GCP · Terraform (IaC)',
      'CI/CD (GitLab CI · GitHub Actions · ArgoCD)',
      'Docker · Kafka · KEDA · OpenTelemetry',
      'Microservices · Event Sourcing · CQRS',
    ],
  },
  {
    label: 'Development',
    items: [
      'Java · Spring Boot · Hexagonal Architecture',
      'TypeScript · React · Node.js',
      'C# · .NET 8 · Python',
      'REST API · Keycloak OAuth2',
    ],
  },
  {
    label: 'AI / ML',
    items: [
      'RAG Pipelines · LLM Integration',
      'pgvector · Cloud Run · Vertex AI',
      'Prompt Engineering · AI Security',
    ],
  },
]

/* ─── helpers ─────────────────────────────────────────────────────────────── */

function printPage() {
  window.print()
}

/* ─── component ────────────────────────────────────────────────────────────── */

export default function CV() {
  const linkedIn = 'https://www.linkedin.com/in/lung-yu-tsai-633865100'
  const github   = 'https://github.com/Lung-Yu'
  const website  = 'https://lung-yu.github.io/personal-sites_V2'

  return (
    <div className="cv-page">
      {/* ── Toolbar (hidden on print) ── */}
      <div className="cv-toolbar">
        <div className="cv-toolbar-left">
          <a href="../">← Back to site</a>
          <span style={{ color: '#6a6560' }}>|</span>
          <span style={{ color: '#9a9590' }}>Lung-Yu Tsai — One-Page CV</span>
        </div>
        <button className="cv-print-btn" onClick={printPage}>
          <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor">
            <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
            <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/>
          </svg>
          Print / Save PDF
        </button>
      </div>

      {/* ── Paper ── */}
      <div className="cv-paper">

        {/* ── Header ── */}
        <header className="cv-header">
          <div className="cv-name">{profile.name.en}</div>
          <div className="cv-name-zh">{profile.name.zh} · {profile.name.alias}</div>
          <div className="cv-title">
            DevSecOps Engineer · Security Architect · Technical Manager
          </div>
          <div className="cv-contact">
            <span className="cv-contact-item">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"/>
              </svg>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </span>
            <span className="cv-contact-item">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C2.3 4.339 2 5.764 2 7c0 1.452.415 2.808 1.052 4.096C4.368 13.48 6.045 15.165 7 16c.417-.368.875-.768 1.329-1.183A17.47 17.47 0 0 0 9.895 13c.641-.937 1.14-1.929 1.521-2.904.38-.974.584-1.95.584-2.596 0-2.647-1.78-4.79-4-4.79C8.35.214 8.174.21 8 .21V0Zm0 6a2 2 0 1 1 0 4A2 2 0 0 1 8 6Z"/>
              </svg>
              {profile.location}
            </span>
            <span className="cv-contact-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 23.2 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <a href={linkedIn} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </span>
            <span className="cv-contact-item">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
            </span>
            <span className="cv-contact-item">
              <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
              </svg>
              <a href={website} target="_blank" rel="noopener noreferrer">lung-yu.github.io</a>
            </span>
          </div>
        </header>

        {/* ── Body ── */}
        <div className="cv-body">

          {/* ══════════════════════ MAIN ══════════════════════ */}
          <main className="cv-main">

            {/* Profile */}
            <section className="cv-section">
              <h2 className="cv-section-title">Profile</h2>
              <p className="cv-profile">
                DevSecOps engineer and security architect with 12+ years bridging
                cybersecurity and software engineering. Currently Technical Manager at
                Cloudforce (Gamania subsidiary), leading AI product development and
                establishing secure development standards across engineering teams.
                Built Polisana, an AI-native vulnerability management platform, from
                the ground up. Holds CISSP, CSSLP, ISO 27001 Lead Auditor, and CEH.
                Regular conference speaker at DevOpsDays Taipei, CyberRes, CISA, and HWDC.
              </p>
            </section>

            {/* Experience */}
            <section className="cv-section">
              <h2 className="cv-section-title">Experience</h2>

              {/* Cloudforce */}
              <div className="cv-exp">
                <div className="cv-exp-header">
                  <span className="cv-exp-company">Cloudforce Co., Ltd. (雲力橘子)</span>
                  <span className="cv-exp-period">Apr 2025 — Present</span>
                </div>
                <div className="cv-exp-title">
                  Technical Manager · AI Team
                  <span className="cv-exp-note"> — Gamania subsidiary · Taipei, Taiwan</span>
                </div>
                <ul className="cv-bullets">
                  <li>Built and operate <strong>Polisana</strong>, an AI-native vulnerability management platform (microservices, GKE, Terraform IaC — scaled from 3 to 69 resources); evolved infrastructure from on-demand to fully IaC-managed GCP deployment.</li>
                  <li>Developed an <strong>AI security consultant</strong> end-to-end using RAG pipelines, pgvector, and LLM integration (Python, Cloud Run), enabling automated security Q&A and knowledge retrieval.</li>
                  <li>Led Japan API integration project to production v1.0.0; established architecture review and security code review standards across engineering teams.</li>
                  <li>Architected backend microservices with Java Spring Boot, Hexagonal Architecture, CQRS, and Event Sourcing; led cross-departmental ISMS policy revision for secure software development.</li>
                </ul>
                <div className="cv-tech-stack">
                  {['Java', 'Spring Boot', 'CQRS', 'Event Sourcing', 'GKE', 'Terraform', 'Kafka', 'Python', 'RAG', 'pgvector', 'Keycloak'].map(t => (
                    <span key={t} className="cv-tech-tag">{t}</span>
                  ))}
                </div>
              </div>

              <hr className="cv-exp-divider" />

              {/* Digicentre / Cloudforce — Deputy Manager, Software Dev Security */}
              <div className="cv-exp">
                <div className="cv-exp-header">
                  <span className="cv-exp-company">Digicentre Co., Ltd. (果核數位, now Cloudforce)</span>
                  <span className="cv-exp-period">Sep 2021 — Mar 2025</span>
                </div>
                <div className="cv-exp-title">
                  Deputy Manager, Software Development Security → Deputy Manager, Tech Development II
                  <span className="cv-exp-note"> — Gamania subsidiary</span>
                </div>
                <ul className="cv-bullets">
                  <li>Designed enterprise DevSecOps processes; led DevSecOps adoption for <strong>7+ enterprise clients</strong> in financial and technology sectors.</li>
                  <li>Built <strong>ScanPortal</strong> (full-stack SAST platform sold to 2 enterprise clients) and a black/white-box automated scanning platform integrating Fortify SCA + WebInspect, sold to a listed financial institution.</li>
                  <li>Automated vulnerability handling workflow — reduced team load by <strong>51%</strong>; self-service security testing platform eliminated 80% of manual operations for clients.</li>
                  <li>Primary technical spokesperson as <strong>Micro Focus MSSP Gold Partner</strong>; served as Gama Star Award recipient (2023) for project excellence.</li>
                </ul>
                <div className="cv-tech-stack">
                  {['Java', 'Spring Boot', 'C#', '.NET 8', 'Flutter', 'Jenkins', 'GitLab CI', 'Fortify SCA', 'WebInspect', 'Docker', 'GCP', 'Terraform'].map(t => (
                    <span key={t} className="cv-tech-tag">{t}</span>
                  ))}
                </div>
              </div>

              <hr className="cv-exp-divider" />

              {/* PwC */}
              <div className="cv-exp">
                <div className="cv-exp-header">
                  <span className="cv-exp-company">PwC Taiwan (資誠)</span>
                  <span className="cv-exp-period">Sep 2020 — Sep 2021</span>
                </div>
                <div className="cv-exp-title">
                  Security Consultant
                  <span className="cv-exp-note"> — Financial Cybersecurity Team · Taipei</span>
                </div>
                <ul className="cv-bullets">
                  <li>Conducted penetration testing, vulnerability analysis, and compliance audits for banking and insurance clients.</li>
                  <li>Delivered malware analysis, packet capture analysis, and load/stress testing; developed Python automation for report generation and Linux CIS benchmark checking.</li>
                </ul>
                <div className="cv-tech-stack">
                  {['Python', 'Bash', 'Burp Suite', 'Wireshark', 'Kali Linux'].map(t => (
                    <span key={t} className="cv-tech-tag">{t}</span>
                  ))}
                </div>
              </div>

              <hr className="cv-exp-divider" />

              {/* Instructor note */}
              <div className="cv-exp">
                <div className="cv-exp-header">
                  <span className="cv-exp-company">DevSecOps Instructor</span>
                  <span className="cv-exp-period">2025 — Present</span>
                </div>
                <div className="cv-exp-title">
                  AI Network · Gtalent
                  <span className="cv-exp-note"> — Part-time · Course design &amp; delivery</span>
                </div>
                <ul className="cv-bullets">
                  <li>Design and deliver DevSecOps and secure coding programmes; develop AI integration curriculum for software development courses.</li>
                </ul>
              </div>
            </section>
          </main>

          {/* ══════════════════════ SIDEBAR ══════════════════════ */}
          <aside className="cv-sidebar">

            {/* Skills */}
            <section className="cv-section">
              <h2 className="cv-section-title">Skills</h2>
              {SIDEBAR_SKILLS.map(group => (
                <div key={group.label} className="cv-skill-group">
                  <div className="cv-skill-group-name">{group.label}</div>
                  <div className="cv-skill-items">
                    {group.items.join(' · ')}
                  </div>
                </div>
              ))}
            </section>

            {/* Certifications */}
            <section className="cv-section">
              <h2 className="cv-section-title">Certifications</h2>
              {resumeCerts.map(cert => (
                <div key={cert.name} className="cv-cert">
                  <span className="cv-cert-name">{cert.name}</span>
                  <span className="cv-cert-desc">{cert.issuer}</span>
                  <span className="cv-cert-year">{cert.year}</span>
                </div>
              ))}
            </section>

            {/* Education */}
            <section className="cv-section">
              <h2 className="cv-section-title">Education</h2>
              <div className="cv-edu-school">
                {education[0].school.en}
              </div>
              <div className="cv-edu-degree">{education[0].degree.en}</div>
              <div className="cv-edu-period">{education[0].period}</div>
              <div style={{ marginTop: 10 }} />
              <div className="cv-edu-school">{education[1].school.en}</div>
              <div className="cv-edu-degree">{education[1].degree.en}</div>
              <div className="cv-edu-period">{education[1].period}</div>
            </section>

            {/* Selected Talks */}
            <section className="cv-section">
              <h2 className="cv-section-title">Selected Talks</h2>
              {resumeTalks.slice(0, 5).map((talk, i) => (
                <div key={i} className="cv-talk">
                  <div className="cv-talk-event">{talk.event}</div>
                  <div className="cv-talk-title">{talk.title.en}</div>
                </div>
              ))}
            </section>

            {/* Languages */}
            <section className="cv-section">
              <h2 className="cv-section-title">Languages</h2>
              <div className="cv-lang">
                <span>Chinese (Mandarin)</span>
                <span className="cv-lang-level">Native</span>
              </div>
              <div className="cv-lang">
                <span>English</span>
                <span className="cv-lang-level">Professional</span>
              </div>
            </section>

          </aside>
        </div>
      </div>
    </div>
  )
}

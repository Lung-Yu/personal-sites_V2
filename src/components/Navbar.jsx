import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../i18n/useTheme'
import { profile } from '../data/profile'
import '../styles/Navbar.css'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const isZh = i18n.language.startsWith('zh')
  const { theme, toggle: toggleTheme } = useTheme()

  return (
    <nav>
      <div className="nav-inner">
        <NavLink to="/" className="nav-brand">
          <span className="dot">T</span>
          <span className="zh">{profile.name.zh}</span>
          <span className="alias">· {profile.name.alias}</span>
        </NavLink>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ul className="nav-links">
            <li><NavLink to="/" end>{t('nav.about')}</NavLink></li>
            <li><NavLink to="/resume">{t('nav.resume')}</NavLink></li>
            <li><NavLink to="/projects">{t('nav.projects')}</NavLink></li>
            <li><NavLink to="/contact">{t('nav.contact')}</NavLink></li>
          </ul>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className="lang-toggle"
            onClick={() => i18n.changeLanguage(isZh ? 'en' : 'zh-TW')}
            aria-label="Switch language"
          >
            {isZh ? 'EN' : '中'}
          </button>
        </div>
      </div>
    </nav>
  )
}

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}

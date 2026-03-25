import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useTheme } from '../i18n/useTheme'
import { profile } from '../data/profile'
import '../styles/Navbar.css'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const isZh = i18n.language.startsWith('zh')
  const { theme, toggle: toggleTheme } = useTheme()
  const [menuOpen, setMenuOpen] = useState(false)

  const close = () => setMenuOpen(false)

  return (
    <nav>
      <div className="nav-inner">
        <NavLink to="/" className="nav-brand" onClick={close}>
          <span className="dot">T</span>
          <span className="zh">{profile.name.zh}</span>
          <span className="alias">· {profile.name.alias}</span>
        </NavLink>

        <div className="nav-right">
          {/* Desktop + mobile-open links */}
          <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
            <li><NavLink to="/" end onClick={close}>{t('nav.about')}</NavLink></li>
            <li><NavLink to="/resume" onClick={close}>{t('nav.resume')}</NavLink></li>
            <li><NavLink to="/projects" onClick={close}>{t('nav.projects')}</NavLink></li>
            <li><NavLink to="/contact" onClick={close}>{t('nav.contact')}</NavLink></li>
            <li><NavLink to="/blog" onClick={close}>{t('nav.blog')}</NavLink></li>
          </ul>

          {/* Controls: theme + lang + hamburger */}
          <div className="nav-controls">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
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
            <button
              className="hamburger"
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
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

function HamburgerIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="4" y1="6" x2="20" y2="6" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  )
}

import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { profile } from '../data/profile'
import '../styles/Navbar.css'

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const isZh = i18n.language.startsWith('zh')

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
          </ul>
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

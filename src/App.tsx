import './i18n/index'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'

// Phase 5: sync document.documentElement.lang with i18n language on every change
function LangSync(): null {
  const { i18n } = useTranslation()
  useEffect(() => {
    document.documentElement.lang = i18n.language
  }, [i18n.language])
  return null
}

export default function App() {
  return (
    <BrowserRouter basename="/personal-sites_V2">
      <Intro />
      <Cursor />
      <ScrollProgress />
      {/* Phase 4: skip-to-content link for keyboard / screen-reader users */}
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <LangSync />
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

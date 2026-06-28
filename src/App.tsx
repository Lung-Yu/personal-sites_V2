import './i18n/index'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Intro from './components/Intro'
import Cursor from './components/Cursor'
import ScrollProgress from './components/ScrollProgress'
import InkWash from './components/InkWash'
import Home from './pages/Home'

const Resume   = lazy(() => import('./pages/Resume'))
const CV       = lazy(() => import('./pages/CV'))
const Projects = lazy(() => import('./pages/Projects'))
const Contact  = lazy(() => import('./pages/Contact'))
const Blog     = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))

function LangSync(): null {
  const { i18n } = useTranslation()
  useEffect(() => {
    document.documentElement.lang = i18n.language
  }, [i18n.language])
  return null
}

// CV is a standalone clean page — no decorative layers, no navbar, no footer
function AppShell() {
  const { pathname } = useLocation()
  const isCV = pathname === '/cv'

  if (isCV) {
    return (
      <>
        <LangSync />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/cv" element={<CV />} />
          </Routes>
        </Suspense>
      </>
    )
  }

  return (
    <>
      <InkWash />
      <Intro />
      <Cursor />
      <ScrollProgress />
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <LangSync />
      <Navbar />
      <main id="main-content">
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter basename="/personal-sites_V2">
      <AppShell />
    </BrowserRouter>
  )
}

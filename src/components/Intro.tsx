import { useState, useEffect } from 'react'
import '../styles/Intro.css'

/**
 * Full-screen intro splash: shows "蔡龍佑" in large italic serif,
 * fades in → holds → fades out. Shown once per session.
 */
export default function Intro() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('intro-shown')) return
    sessionStorage.setItem('intro-shown', '1')
    setVisible(true)
    // Remove from DOM after animation finishes (0.1s buffer beyond CSS 2.6s total)
    const t = setTimeout(() => setVisible(false), 2800)
    return () => clearTimeout(t)
  }, [])

  if (!visible) return null

  return (
    <div className="intro-overlay" aria-hidden="true" role="presentation">
      <div className="intro-line" />
      <div className="intro-name">蔡龍佑</div>
      <div className="intro-alias">Lung-Yu Tsai</div>
      <div className="intro-line" />
    </div>
  )
}

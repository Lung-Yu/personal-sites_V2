import { useState, useEffect } from 'react'
import '../styles/Intro.css'

const INTRO_KEY = 'intro-last-shown'
const TTL_MS = 24 * 60 * 60 * 1000  // replay once per day at most

export default function Intro() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const last = Number(localStorage.getItem(INTRO_KEY) ?? 0)
    if (Date.now() - last < TTL_MS) return
    localStorage.setItem(INTRO_KEY, String(Date.now()))
    setVisible(true)
    const t = setTimeout(() => setVisible(false), 2800)
    return () => clearTimeout(t)
  }, [])

  if (!visible) return null

  return (
    <div className="intro-overlay" aria-hidden="true" role="presentation">
      <div className="intro-line" />
      <div className="intro-name">tygrus</div>
      <div className="intro-alias">Lung-Yu Tsai · 蔡龍佑</div>
      <div className="intro-line" />
    </div>
  )
}

import { useState, useEffect } from 'react'

/** Thin accent-coloured line at the very top of the viewport showing scroll depth. */
export default function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrolled  = window.scrollY
      const total     = document.documentElement.scrollHeight - window.innerHeight
      setPct(total > 0 ? (scrolled / total) * 100 : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <div
      className="scroll-progress"
      style={{ width: `${pct}%` }}
      aria-hidden="true"
    />
  )
}

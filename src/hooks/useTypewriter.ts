import { useState, useEffect } from 'react'

/**
 * Reveals `text` one character at a time.
 * @param text    Full string to type out
 * @param speed   ms per character (default 45)
 * @param delay   ms before typing starts (default 3200 — after intro finishes)
 */
export function useTypewriter(text: string, speed = 45, delay = 3200) {
  const [displayed, setDisplayed] = useState('')

  useEffect(() => {
    setDisplayed('')
    let i = 0
    let interval: ReturnType<typeof setInterval>

    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) clearInterval(interval)
      }, speed)
    }, delay)

    return () => {
      clearTimeout(timeout)
      clearInterval(interval)
    }
  }, [text, speed, delay])

  return displayed
}

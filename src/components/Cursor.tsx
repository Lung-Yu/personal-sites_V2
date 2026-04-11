import { useEffect, useRef } from 'react'

/** Custom cursor: small dot + lagging ring. Only renders on pointer-fine devices. */
export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  // Smooth ring position via rAF
  const ring = useRef({ x: 0, y: 0 })
  const mouse = useRef({ x: 0, y: 0 })
  const rafId = useRef<number>(0)

  useEffect(() => {
    // Only activate on devices with a fine pointer (mouse/trackpad)
    if (!window.matchMedia('(pointer: fine)').matches) return

    const dot  = dotRef.current!
    const ringEl = ringRef.current!

    const onMove = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e
      mouse.current = { x, y }
      dot.style.left = x + 'px'
      dot.style.top  = y + 'px'
    }

    const onDown = () => dot.classList.add('clicking')
    const onUp   = () => dot.classList.remove('clicking')

    // Lazy follow for the ring
    const tick = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.14
      ring.current.y += (mouse.current.y - ring.current.y) * 0.14
      ringEl.style.left = ring.current.x + 'px'
      ringEl.style.top  = ring.current.y + 'px'
      rafId.current = requestAnimationFrame(tick)
    }
    rafId.current = requestAnimationFrame(tick)

    // Hover state on interactive elements
    const addHover = (e: Event) => {
      const target = e.currentTarget as HTMLElement
      if (target.closest('a, button, [role="button"], label, input, select, textarea')) {
        ringEl.classList.add('hovering')
      }
    }
    const removeHover = () => ringEl.classList.remove('hovering')

    const updateListeners = () => {
      document.querySelectorAll<HTMLElement>('a, button, [role="button"]').forEach(el => {
        el.addEventListener('mouseenter', addHover)
        el.addEventListener('mouseleave', removeHover)
      })
    }
    updateListeners()

    // Re-scan on route changes (basic approach)
    const observer = new MutationObserver(updateListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mousedown', onDown)
    document.addEventListener('mouseup', onUp)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('mouseup', onUp)
      cancelAnimationFrame(rafId.current)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}

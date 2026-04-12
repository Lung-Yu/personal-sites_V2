import { useRef, useCallback } from 'react'

const isFinePointer = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches

/**
 * 3D tilt-on-hover effect (Reel 2 — CSS perspective + mousemove).
 * Only activates on fine-pointer devices; no-ops on touch.
 *
 * @param intensity  Max rotation in degrees (default 8)
 */
export function use3DHover<T extends HTMLElement>(intensity = 8) {
  const ref = useRef<T>(null)

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isFinePointer()) return
      const el = ref.current
      if (!el) return
      const { left, top, width, height } = el.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5   // −0.5 → +0.5
      const y = (e.clientY - top)  / height - 0.5
      el.style.transition = 'transform 0.08s ease, box-shadow 0.08s ease'
      el.style.transform  = `perspective(700px) rotateY(${x * intensity}deg) rotateX(${-y * intensity}deg) translateZ(6px)`
    },
    [intensity],
  )

  const onMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.transition = 'transform 0.45s ease, box-shadow 0.45s ease'
    el.style.transform  = ''
  }, [])

  return { ref, onMouseMove, onMouseLeave }
}

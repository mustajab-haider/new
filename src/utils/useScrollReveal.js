import { useEffect, useRef } from 'react'

/**
 * Adds 'visible' class when the element enters the viewport.
 * @param {number} threshold  - IntersectionObserver threshold (default 0.15)
 * @returns React ref to attach to the element
 */
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}

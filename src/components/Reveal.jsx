import { useScrollReveal } from '../utils/useScrollReveal'

/**
 * Wraps children in a div that fades + slides up when scrolled into view.
 * @param {string}  className  – extra Tailwind / CSS classes
 * @param {number}  delay      – transition delay in ms
 */
export default function Reveal({ children, className = '', delay = 0 }) {
  const ref = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

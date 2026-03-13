import { useEffect, useRef } from 'react'
import { drawPhoto } from '../utils/drawPhoto'

/**
 * Renders a canvas and calls drawPhoto() once on mount.
 */
export default function PhotoCanvas({ theme, w, h, className = '' }) {
  const ref = useRef(null)

  useEffect(() => {
    if (ref.current) drawPhoto(ref.current, theme, w, h)
  }, [theme, w, h])

  return <canvas ref={ref} className={className} />
}

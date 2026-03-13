import { useState, useCallback } from 'react'
import Reveal from './Reveal'
import PhotoCard from './PhotoCard'
import GalleryStrip from './GalleryStrip'
import Lightbox from './Lightbox'
import { GALLERY_DATA } from '../data/galleryData'

export default function GallerySection() {
  const [lbIndex, setLbIndex] = useState(null)

  const open  = useCallback(i => setLbIndex(i), [])
  const close = useCallback(() => setLbIndex(null), [])
  const prev  = useCallback(() => setLbIndex(i => (i - 1 + GALLERY_DATA.length) % GALLERY_DATA.length), [])
  const next  = useCallback(() => setLbIndex(i => (i + 1) % GALLERY_DATA.length), [])

  return (
    <>
      <section
        id="gallery-section"
        className="px-8 py-24 relative overflow-hidden
                   bg-gradient-to-b from-deep via-[#200812] to-deep"
      >
        {/* subtle radial overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(232,64,90,0.07)_0%,transparent_70%)] pointer-events-none" />

        {/* Header */}
        <div className="text-center mb-16 relative">
          <Reveal>
            <h2
              className="font-vibes text-blush mb-2"
              style={{ fontSize: 'clamp(2.5rem,7vw,4.5rem)', textShadow: '0 0 40px rgba(232,64,90,0.3)' }}
            >
              Our Beautiful Moments
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="font-josefin text-gold text-[0.65rem] tracking-[0.5em] uppercase">
              A collection of memories & love
            </p>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="gallery-grid grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-4 max-w-[1100px] mx-auto flex items-center justify-center">
          {GALLERY_DATA.map((d, i) => (
            <PhotoCard key={i} data={d} index={i}  />
          ))}
        </div>

        {/* Strip */}
        {/* <GalleryStrip onOpen={open} /> */}
      </section>

      {/* Lightbox portal */}
      {lbIndex !== null && (
        <Lightbox index={lbIndex} onClose={close} onPrev={prev} onNext={next} />
      )}
    </>
  )
}

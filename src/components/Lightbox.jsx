import { useEffect } from 'react'
import PhotoCanvas from './PhotoCanvas'
import { GALLERY_DATA } from '../data/galleryData'

export default function Lightbox({ index, onClose, onPrev, onNext }) {
  const data = GALLERY_DATA[index]

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape')      onClose()
      if (e.key === 'ArrowLeft')   onPrev()
      if (e.key === 'ArrowRight')  onNext()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, onPrev, onNext])

  return (
    <div
      className="lightbox-active fixed inset-0 z-[500] bg-[rgba(10,2,6,0.97)]
                 flex items-center justify-center backdrop-blur-xl
                 animate-[fadeIn_0.4s_ease_both]"
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      {/* Close */}
      <button
        className="fixed top-8 right-8 text-white/40 text-4xl bg-transparent border-none
                   cursor-pointer transition-colors hover:text-white z-10"
        onClick={onClose}
      >
        ×
      </button>

      {/* Prev */}
      <button
        className="fixed left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full
                   flex items-center justify-center text-xl text-blush
                   bg-rose/15 border border-rose/30
                   transition-all hover:bg-rose/40 z-10"
        onClick={e => { e.stopPropagation(); onPrev() }}
      >
        ‹
      </button>

      {/* Next */}
      <button
        className="fixed right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full
                   flex items-center justify-center text-xl text-blush
                   bg-rose/15 border border-rose/30
                   transition-all hover:bg-rose/40 z-10"
        onClick={e => { e.stopPropagation(); onNext() }}
      >
        ›
      </button>

      {/* Content */}
      <div className="lightbox-inner flex flex-col items-center gap-4 max-w-[85vw] max-h-[85vh]">
        <PhotoCanvas
          key={index}
          theme={data.theme}
          w={900}
          h={600}
          className="max-w-full max-h-[75vh] rounded-sm shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
        />
        <div className="font-vibes text-blush text-[1.8rem] text-center">
          {data.caption} · {data.date}
        </div>
      </div>
    </div>
  )
}

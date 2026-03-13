import { useEffect, useRef, useState } from 'react'
import PhotoCanvas from './PhotoCanvas'
import { GALLERY_DATA } from '../data/galleryData'

function StripItem({ data, index, onClick }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  const rot = useRef((Math.random() - 0.5) * 8)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="strip-item flex-shrink-0 w-[130px] bg-white p-2 pb-7
                 shadow-[0_8px_30px_rgba(0,0,0,0.4)] cursor-pointer"
      style={{
        transform: visible
          ? `rotate(${rot.current}deg)`
          : `translateY(30px) rotate(${rot.current}deg)`,
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.7s ease, transform 0.7s ease, box-shadow 0.3s ease',
        transitionDelay: `${index * 60}ms`,
      }}
      onClick={() => onClick(index)}
    >
      <PhotoCanvas theme={data.theme} w={200} h={150} className="w-full block" />
      <div className="font-josefin text-[0.55rem] tracking-[0.2em] uppercase text-[#888] text-center mt-1.5">
        {data.caption}
      </div>
    </div>
  )
}

export default function GalleryStrip({ onOpen }) {
  return (
    <div
      className="flex gap-6 overflow-x-auto py-8 max-w-[1100px] mx-auto mt-8
                 [scrollbar-width:thin] [scrollbar-color:#e8405a_transparent]
                 [-webkit-overflow-scrolling:touch]"
    >
      {GALLERY_DATA.map((d, i) => (
        <StripItem key={i} data={d} index={i} onClick={onOpen} />
      ))}
    </div>
  )
}

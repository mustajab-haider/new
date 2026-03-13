import { useEffect, useRef, useState } from 'react'
import PhotoCanvas from './PhotoCanvas'

export default function PhotoCard({ data, index, onClick }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

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
      className={`photo-card relative overflow-hidden rounded-sm cursor-pointer
                  transition-[opacity,transform,box-shadow] duration-700
                  hover:shadow-[0_20px_60px_rgba(232,64,90,0.3),0_0_0_1px_rgba(232,64,90,0.3)]
                  hover:z-[2]
                  ${visible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}
                 `}
      style={{ transitionDelay: `${(index % 4) * 80}ms` }}
      onClick={() => onClick(index)}
    >
      {data.type === 'video' ? (
        <video 
          className="w-full h-72 object-cover"
          controls
          // autoPlay
          loop
          playsInline
        >
          <source src={data.url} type="video/mp4" />
        </video>
      ) : (
        <PhotoCanvas theme={data.theme} w={data.w} h={data.h} className="w-full block" />
      )}

      {/* hover overlay */}
      {/* <div className="photo-overlay absolute inset-0 bg-gradient-to-t from-deep/85 to-transparent
                      flex flex-col items-start justify-center p-5">
        <div className="photo-caption font-vibes text-blush text-[1.4rem]">{data.caption}</div>
        <div className="photo-date font-josefin text-gold text-[0.6rem] tracking-[0.3em] uppercase mt-1">
          {data.date}
        </div>
      </div> */}

      {/* corner accent */}
      <div className="photo-corner absolute top-2.5 right-2.5 text-gold text-sm">✦</div>
    </div>
  )
}

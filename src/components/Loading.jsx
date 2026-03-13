import { useState, useEffect } from 'react'

export default function Loading({ onDone }) {
  const [hide, setHide] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => {
      setHide(true)
      setTimeout(onDone, 1000)
    }, 2800)
    return () => clearTimeout(t)
  }, [onDone])

  return (
    <div
      className={`
        fixed inset-0 bg-deep flex flex-col items-center justify-center z-[1000]
        transition-opacity duration-1000
        ${hide ? 'opacity-0 pointer-events-none' : 'opacity-100'}
      `}
    >
      <h2 className="font-vibes text-blush animate-pulse2 text-5xl md:text-6xl">
        Preparing something special...
      </h2>
      <p className="font-josefin text-gold text-xs tracking-[0.3em] uppercase mt-4">
        Just for Zehra
      </p>
      {/* loader bar */}
      <div className="w-[200px] h-px bg-white/10 mt-8 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-rose to-gold animate-loaderFill" />
      </div>
    </div>
  )
}

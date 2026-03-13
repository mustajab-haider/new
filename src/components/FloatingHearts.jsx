import { useRef } from 'react'

const EMOJIS = ['❤️', '💕', '💖', '💗', '🌹', '✨', '💝']

export default function FloatingHearts() {
  // Stable random values — computed once on mount via ref
  const hearts = useRef(
    Array.from({ length: 15 }, (_, i) => ({
      id: i,
      emoji:    EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
      left:     Math.random() * 100,
      duration: 8 + Math.random() * 12,
      delay:    Math.random() * 10,
      size:     0.8 + Math.random() * 1.5,
    }))
  )

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.current.map(h => (
        <div
          key={h.id}
          className="absolute bottom-[-50px] animate-floatUp"
          style={{
            left:              `${h.left}vw`,
            animationDuration: `${h.duration}s`,
            animationDelay:    `${h.delay}s`,
            fontSize:          `${h.size}rem`,
          }}
        >
          {h.emoji}
        </div>
      ))}
    </div>
  )
}

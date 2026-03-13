import { useState } from 'react'
import Reveal from './Reveal'

export default function CardSection({ onShowOverlay }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <section
      id="card-section"
      className="min-h-screen flex flex-col items-center justify-center px-8 py-16
                 bg-gradient-to-b from-deep via-[#2d0a1a] to-deep"
    >
      <Reveal>
        <p className="font-josefin text-gold text-[0.65rem] tracking-[0.5em] uppercase mb-12">
          A message from the heart
        </p>
      </Reveal>

      {/* ── Flip Card ── */}
      <Reveal>
        <div
          className="cursor-pointer"
          style={{ perspective: '1200px', width: 'min(420px, 90vw)', height: '560px' }}
          onClick={() => setFlipped(f => !f)}
        >
          <div className={`card-inner ${flipped ? 'flipped' : ''}`}>
            {/* Front */}
            <div className="card-face bg-gradient-to-br from-[#3d0a1e] to-[#1a0510] border border-gold/30
                            flex flex-col items-center justify-center gap-6
                            shadow-[0_30px_80px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)]">
              {/* inner gold frame */}
              <div className="absolute inset-3 border border-gold/15 pointer-events-none" />
              <div className="animate-heartbeat text-5xl">💌</div>
              <h2 className="font-vibes text-blush text-[2.6rem] text-center px-4">
                Happy Birthday My Favrt Cousin, My Dearest Friend, My Huge Support, My Secrets Keeper
              </h2>
              <p className="font-josefin text-gold/60 text-[0.65rem] tracking-[0.4em] uppercase">
                Tap to open
              </p>
            </div>

            {/* Back */}
            <div className="card-face card-back-face
                            bg-gradient-to-br from-cream to-[#fde8ec]
                            flex flex-col items-center justify-center gap-5 p-10
                            text-deep">
              <div className="absolute inset-3 border border-rose/20 pointer-events-none" />
              <div className="text-rose text-3xl">✿</div>
              <h3 className="font-vibes text-rose text-[2.2rem]">My Dearest Cousin</h3>
              <p className="italic text-soft text-center leading-relaxed">
                On this special day, I want you to know that every moment with you is a gift.
                You light up my world in ways I never thought possible.
              </p>
              <p className="italic text-soft text-center leading-relaxed">
                Just remember one thing—no matter how tough life gets, you will always have my support, my respect, and someone who believes in you more than you realize.
              </p>
              <div className="font-vibes text-rose text-[1.6rem] mt-2">
                With all my love ❤
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Buttons */}
      <Reveal>
        <div className="flex gap-4 mt-8 flex-wrap justify-center">
          <button
            onClick={() => setFlipped(f => !f)}
            className="fancy-btn border border-rose text-blush font-josefin text-xs tracking-[0.3em] uppercase px-10 py-4"
          >
            <span>{flipped ? 'Close Card' : 'Open Card'}</span>
          </button>
          <button
            onClick={onShowOverlay}
            className="fancy-btn border border-rose text-blush font-josefin text-xs tracking-[0.3em] uppercase px-10 py-4"
          >
            <span>✨ Surprise</span>
          </button>
        </div>
      </Reveal>
    </section>
  )
}

import { useState } from 'react'
import Reveal from './Reveal'
import { QUESTIONS } from '../data/gameData'

export default function GameSection() {
  const [qIdx,   setQIdx]   = useState(0)
  const [score,  setScore]  = useState(0)
  const [chosen, setChosen] = useState(null) // { idx, isCorrect }
  const [done,   setDone]   = useState(false)

  const current = QUESTIONS[qIdx]

  function handleAnswer(optIdx) {
    if (chosen !== null) return
    const isCorrect = optIdx === current.correct
    setChosen({ idx: optIdx, isCorrect })
    if (isCorrect) setScore(s => s + 1)

    setTimeout(() => {
      if (qIdx + 1 < QUESTIONS.length) {
        setQIdx(q => q + 1)
        setChosen(null)
      } else {
        setDone(true)
      }
    }, 1800)
  }

  function optClass(i) {
    let base = 'bd-game-opt w-full p-3 border border-gold/30 text-cream font-cormorant text-base rounded-sm transition-all duration-300 disabled:cursor-not-allowed'
    if (chosen !== null) {
      if (i === current.correct)                    return base + ' !border-[#50c864] !text-[#50c864] bg-[rgba(50,200,100,0.2)]'
      if (i === chosen.idx && !chosen.isCorrect)    return base + ' !border-rose !text-rose bg-rose/20'
    }
    return base + ' hover:bg-rose/15 hover:border-rose'
  }

  return (
    <section
      id="game-section"
      className="min-h-[80vh] flex flex-col items-center justify-center px-8 py-16 text-center"
    >
      <Reveal>
        <h2 className="font-vibes text-blush mb-2" style={{ fontSize: 'clamp(2rem,6vw,3.5rem)' }}>
          A Little Game...
        </h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="italic text-white/50 mb-12">Before the final surprise, answer this! 😊</p>
      </Reveal>

      <Reveal delay={150}>
        <div className="bg-white/[0.03] border border-white/[0.08] rounded-sm p-10 w-[min(500px,90vw)]">
          {/* score */}
          <div className="font-josefin text-gold text-[0.7rem] tracking-[0.3em] uppercase mb-4">
            Score: {score} / {QUESTIONS.length}
          </div>

          {done ? (
            <div className="italic text-cream text-lg py-6">
              You scored {score}/{QUESTIONS.length}! You are amazing 🎉
            </div>
          ) : (
            <>
              <div className="italic text-cream mb-8">{current.q}</div>
              <div className="grid grid-cols-2 gap-4">
                {current.opts.map((opt, i) => (
                  <button
                    key={`${qIdx}-${i}`}
                    className={optClass(i)}
                    disabled={chosen !== null}
                    onClick={() => handleAnswer(i)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              <div
                className="mt-6 italic min-h-[2rem] text-sm"
                style={{ color: chosen?.isCorrect ? '#50c864' : '#e8405a' }}
              >
                {chosen
                  ? chosen.isCorrect
                    ? '✨ You know me so well!'
                    : '💕 The answer is in your heart!'
                  : ''}
              </div>
            </>
          )}
        </div>
      </Reveal>
    </section>
  )
}

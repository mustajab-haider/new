import { useRef, useState, useCallback } from 'react'

export function useMusic() {
  const [playing, setPlaying] = useState(false)
  const ctxRef  = useRef(null)
  const gainRef = useRef(null)

  function playNote(freq, start, dur) {
    const osc = ctxRef.current.createOscillator()
    const g   = ctxRef.current.createGain()
    osc.type = 'sine'
    osc.frequency.value = freq
    osc.connect(g)
    g.connect(gainRef.current)
    g.gain.setValueAtTime(0, start)
    g.gain.linearRampToValueAtTime(1, start + 0.05)
    g.gain.linearRampToValueAtTime(0, start + dur)
    osc.start(start)
    osc.stop(start + dur + 0.1)
  }

  function playMelody() {
    const now   = ctxRef.current.currentTime
    const notes = [261.6, 293.7, 329.6, 349.2, 392, 440, 493.9, 523.3]
    const mel   = [4, 4, 5, 4, 2, 3, 4, 4, 5, 4, 1, 2, 4, 4, 11, 9, 2, 3, 1, 0]
    let t = now
    mel.forEach(n => {
      playNote(notes[n % notes.length] * (n > 7 ? 2 : 1), t, 0.4)
      t += 0.5
    })
    setTimeout(playMelody, mel.length * 500 + 500)
  }

  const toggle = useCallback(() => {
    if (!playing) {
      if (!ctxRef.current) {
        ctxRef.current  = new (window.AudioContext || window.webkitAudioContext)()
        gainRef.current = ctxRef.current.createGain()
        gainRef.current.connect(ctxRef.current.destination)
        gainRef.current.gain.value = 0.1
        playMelody()
      } else {
        ctxRef.current.resume()
      }
      setPlaying(true)
    } else {
      ctxRef.current.suspend()
      setPlaying(false)
    }
  }, [playing])

  return { playing, toggle }
}

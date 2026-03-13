import Reveal from './Reveal'

export default function FinalSection({ onShowOverlay }) {
  return (
    <section
      id="final-section"
      className="min-h-[60vh] flex flex-col items-center justify-center text-center px-8 py-16
                 bg-[radial-gradient(ellipse_at_center,rgba(232,64,90,0.1)_0%,transparent_70%)]"
    >
      <Reveal>
        <h2
          className="font-vibes text-blush mb-4"
          style={{ fontSize: 'clamp(2.5rem,8vw,5rem)', textShadow: '0 0 40px rgba(232,64,90,0.3)' }}
        >
          Forever & Always
        </h2>
      </Reveal>
      <Reveal delay={100}>
        <p className="italic text-white/50 mb-12 max-w-sm">
          The journey doesn't end here...
        </p>
      </Reveal>
      <Reveal delay={200}>
        <button
          onClick={onShowOverlay}
          className="fancy-btn border border-rose text-blush font-josefin text-xs tracking-[0.3em] uppercase px-10 py-4"
        >
          <span>Unlock Final Surprise →</span>
        </button>
      </Reveal>
    </section>
  )
}

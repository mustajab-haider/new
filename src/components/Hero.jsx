export default function Hero({ onOpenCard }) {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-8 relative"
    >
      {/* radial glow bg */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(232,64,90,0.15)_0%,transparent_70%)]" />

      <div className="hero-ornament animate-fadeDown text-gold text-2xl mb-8" style={{ letterSpacing: '1em' }}>
        ✦ ✦ ✦
      </div>

      <h1 className="hero-title font-vibes text-blush animate-fadeUp leading-tight"
          style={{ fontSize: 'clamp(3.5rem,10vw,7rem)', textShadow: '0 0 60px rgba(232,64,90,0.4)' }}>
        Happy Birthday Zehra!
      </h1>

      <p className="hero-sub font-josefin text-gold uppercase tracking-[0.5em] animate-fadeUp"
         style={{ fontSize: 'clamp(0.65rem,2vw,0.8rem)', margin: '1.5rem 0 3rem' }}>
        With all my best wishes
      </p>

      <p className="hero-love italic text-white/60 animate-fadeUp mb-12"
         style={{ fontSize: 'clamp(1rem,3vw,1.4rem)' }}>
        From one friend to another — <span className="text-rose not-italic">always & forever ❤</span>
      </p>

      <button
        onClick={onOpenCard}
        className="hero-btn fancy-btn border border-rose text-blush font-josefin text-xs tracking-[0.3em] uppercase px-10 py-4 animate-fadeUp"
      >
        <span>🎁 Open Your Gift</span>
      </button>
    </section>
  )
}

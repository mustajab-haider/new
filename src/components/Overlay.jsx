export default function Overlay({ onClose }) {
  return (
    <div
      className="fixed inset-0 z-[200] bg-deep/95 backdrop-blur-xl
                 flex items-center justify-center
                 animate-[fadeIn_0.5s_ease_both]"
      onClick={e => e.target === e.currentTarget && onClose()}
    >
      <button
        onClick={onClose}
        className="absolute top-8 right-8 text-white/30 text-2xl bg-transparent border-none
                   cursor-pointer transition-colors hover:text-white"
      >
        ×
      </button>

      <div className="text-center max-w-lg px-8">
        {/* <div className="text-5xl mb-4">🎉</div> */}
        <h2 className="font-vibes text-blush text-5xl md:text-7xl mb-4">
          Happy BirthDay Zehra
        </h2>
        <p className="italic text-white/60 mb-8">
          On your special day, i just want to say that,Life brings many people into my lives, 
          but very few become the ones i can truly count on. You are one of those rare people for me.
          Happy Birthday to someone who means more to me than words can ever explain.
          You are not just an important person in my life, you are someone I will always support, 
          believe in, and stand for. Whenever life feels heavy,
          remember you have someone who will always have your back.
          No one can ever dare to be Zehra — she is the reason behind smiles on many faces. 
        </p>
        <button onClick={onClose} className="fancy-btn border border-rose text-blush font-josefin text-xs tracking-[0.3em] uppercase px-10 py-4">
          <span>Close ✕</span>
        </button>
      </div>
    </div>
  )
}

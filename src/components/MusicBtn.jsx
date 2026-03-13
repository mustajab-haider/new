import { useMusic } from '../utils/useMusic'

export default function MusicBtn() {
  const { playing, toggle } = useMusic()

  return (
    <button
      onClick={toggle}
      title="Play Music"
      className={`
        fixed bottom-8 right-8 z-[100]
        w-[50px] h-[50px] rounded-full
        flex items-center justify-center
        text-blush text-xl
        bg-rose/15 border border-rose/40
        backdrop-blur-md
        transition-all duration-300
        hover:bg-rose/30
        ${playing ? 'animate-musicPulse' : ''}
      `}
    >
      {playing ? '♬' : '♪'}
    </button>
  )
}

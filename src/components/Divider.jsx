export default function Divider({ emoji = '💕' }) {
  return (
    <div className="flex items-center gap-6 w-[min(400px,80vw)] mx-auto my-8">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <span className="text-gold text-sm">{emoji}</span>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </div>
  )
}

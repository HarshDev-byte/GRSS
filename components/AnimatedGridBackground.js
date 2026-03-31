// Pure CSS background — no JS state, no re-renders, no mouse tracking.
// Uses CSS background-image for the grid and a static gradient for depth.
// GPU-composited via `will-change: transform` containment on the parent.
export default function AnimatedGridBackground(){
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-20 pointer-events-none overflow-hidden"
      style={{ background: '#000' }}
    >
      {/* Static radial depth gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,150,200,0.06) 0%, transparent 70%)',
        }}
      />

      {/* CSS-only grid — zero SVG, zero JS, composited on GPU */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  )
}

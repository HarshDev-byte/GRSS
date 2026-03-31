import { useMemo } from 'react'

// Lightweight star field — deterministic PRNG for SSR/CSR consistency.
// Opacity-only CSS animation: no transforms, no SVG filters, no blend modes.

function mulberry32(seed) {
  return function() {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed)
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t
    return ((t ^ t >>> 14) >>> 0) / 4294967296
  }
}

export default function AnimatedSky({ stars = 30 }) {
  const starData = useMemo(() => {
    const r = mulberry32(0xdeadbeef)
    const arr = []
    for (let i = 0; i < stars; i++) {
      arr.push({
        id: i,
        x: +(r() * 100).toFixed(2),
        y: +(r() * 100).toFixed(2),
        r: +(r() * 1.0 + 0.3).toFixed(2),
        delay: +(r() * 8).toFixed(2),
        dur: +(r() * 3 + 4).toFixed(2),
        opacity: +(r() * 0.4 + 0.25).toFixed(2),
      })
    }
    return arr
  }, [stars])

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <svg
        className="w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Plain white circles with opacity-only CSS animation — zero GPU cost */}
        {starData.map(s => (
          <circle
            key={s.id}
            cx={s.x}
            cy={s.y}
            r={s.r}
            fill="white"
            style={{
              opacity: s.opacity,
              animationName: 'starBlink',
              animationDuration: `${s.dur}s`,
              animationDelay: `${s.delay}s`,
              animationTimingFunction: 'ease-in-out',
              animationIterationCount: 'infinite',
            }}
          />
        ))}
      </svg>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          circle { animation: none !important; }
        }
        @keyframes starBlink {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </div>
  )
}

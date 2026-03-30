import { useEffect, useMemo } from 'react'

// AnimatedSky: performant background using SVG + CSS animations.
// - stars: many small circles with subtle twinkle via CSS animation
// - constellations: sparse lines connecting selected stars with faint glow
// - satellites: small icons following circular orbital paths (CSS animation)
// - drones: small hovering icons with bobbing + drift
// Respects `prefers-reduced-motion` and keeps element count moderate for perf.

export default function AnimatedSky({ stars = 80 }){
  const seed = useMemo(()=>Math.random(), [])

  // generate star positions once
  const starData = useMemo(()=>{
    const arr = []
    for(let i=0;i<stars;i++){
      arr.push({
        id: i,
        x: Math.random()*100,
        y: Math.random()*100,
        r: Math.random()*1.2 + 0.3,
        delay: Math.random()*6,
        twinkle: Math.random()*1.2 + 0.6,
        bright: Math.random()*0.6 + 0.4,
      })
    }
    return arr
  }, [stars, seed])

  // select a few stars to form constellations
  const constellationIndexes = useMemo(()=>{
    const picks = []
    const count = Math.min(5, Math.floor(stars/12))
    for(let i=0;i<count;i++) picks.push(Math.floor(Math.random()*stars))
    return picks
  }, [stars, seed])

  useEffect(()=>{
    // nothing to do; component purely presentational
  }, [])

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="starGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(180,255,255,0.9)" />
            <stop offset="60%" stopColor="rgba(120,200,255,0.4)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0)" />
          </radialGradient>
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="0.4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Stars */}
        {starData.map(s => (
          <g key={s.id} style={{ transformBox: 'fill-box' }}>
            <circle
              className="sky-star"
              cx={`${s.x}`} cy={`${s.y}`} r={s.r}
              fill="url(#starGlow)" opacity={s.bright}
              style={{ animationDelay: `${s.delay}s`, animationDuration: `${3 + s.twinkle}s` }}
            />
          </g>
        ))}

        {/* Constellations: connect a few chosen stars with thin lines */}
        {constellationIndexes.length > 1 && (
          <g stroke="rgba(120,200,255,0.18)" strokeWidth="0.08" strokeLinecap="round" filter="url(#softGlow)">
            {constellationIndexes.map((idx, i) => {
              const next = constellationIndexes[(i+1)%constellationIndexes.length]
              const a = starData[idx]
              const b = starData[next]
              if(!a || !b) return null
              return <line key={`${idx}-${next}`} x1={a.x} y1={a.y} x2={b.x} y2={b.y} />
            })}
          </g>
        )}

        {/* Satellite orbits (use simple circular paths) */}
        <g className="satellites" fill="none" stroke="rgba(180,240,255,0.9)" strokeWidth="0.08">
          <g className="orbit orbit-1">
            <circle cx="20" cy="20" r="8" strokeOpacity="0.06" />
          </g>
          <g className="orbit orbit-2">
            <circle cx="80" cy="30" r="6" strokeOpacity="0.05" />
          </g>
        </g>

      </svg>

      {/* Satellite icons (positioned absolutely and animated along CSS keyframes) */}
      <div className="absolute inset-0">
        <div className="sat-icon sat-1" aria-hidden>
          <svg width="28" height="14" viewBox="0 0 28 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="3" width="10" height="8" rx="1.2" fill="#9FE7FF" opacity="0.95"/>
            <rect x="14" y="2" width="10" height="10" rx="1" fill="#7AE0FF" opacity="0.9"/>
          </svg>
        </div>
        <div className="sat-icon sat-2" aria-hidden>
          <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="2" width="8" height="6" rx="1" fill="#BFF4FF"/>
            <rect x="11" y="1" width="8" height="8" rx="1" fill="#9EEBFF"/>
          </svg>
        </div>

        {/* Drones: small hovering icons */}
        <div className="drone drone-1" aria-hidden>
          <svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="6" r="2" fill="#9EEBFF" opacity="0.9" />
            <circle cx="28" cy="6" r="2" fill="#9EEBFF" opacity="0.9" />
            <rect x="12" y="4" width="12" height="4" rx="1.8" fill="#7AE0FF"/>
          </svg>
        </div>
        <div className="drone drone-2" aria-hidden>
          <svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="5" r="1.6" fill="#BFF4FF" />
            <circle cx="22" cy="5" r="1.6" fill="#BFF4FF" />
            <rect x="9" y="3.5" width="10" height="3" rx="1.2" fill="#9EEBFF"/>
          </svg>
        </div>
      </div>

      <style jsx>{`
        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .sky-star { animation: none !important; }
          .sat-icon, .drone { animation: none !important; }
        }

        .sky-star {
          transform-origin: center;
          mix-blend-mode: screen;
          filter: drop-shadow(0 0 2px rgba(120,220,255,0.12));
          animation-name: twinkle;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }

        @keyframes twinkle {
          0% { opacity: 0.2; transform: scale(0.95); }
          50% { opacity: 1; transform: scale(1.05); }
          100% { opacity: 0.2; transform: scale(0.95); }
        }

        .sat-icon {
          position: absolute;
          top: 0; left: 0;
          transform-origin: 50% 50%;
          will-change: transform;
        }

        .sat-1 {
          left: 8%; top: 10%;
          animation: orbit1 14s linear infinite;
        }
        .sat-2 {
          left: 60%; top: 22%;
          animation: orbit2 18s linear infinite reverse;
        }

        @keyframes orbit1 {
          0% { transform: translate(0,0) rotate(0deg) translateX(0) }
          25% { transform: translate(6vw, -1vh) }
          50% { transform: translate(12vw, 1vh) }
          75% { transform: translate(6vw, 2vh) }
          100% { transform: translate(0,0) }
        }
        @keyframes orbit2 {
          0% { transform: translate(0,0) }
          25% { transform: translate(-8vw, -2vh) }
          50% { transform: translate(-12vw, 1vh) }
          75% { transform: translate(-6vw, 3vh) }
          100% { transform: translate(0,0) }
        }

        .drone {
          position: absolute;
          will-change: transform;
          opacity: 0.95;
          filter: drop-shadow(0 6px 12px rgba(0,120,180,0.06));
        }
        .drone-1 { left: 72%; top: 46%; animation: hoverA 5s ease-in-out infinite; }
        .drone-2 { left: 42%; top: 68%; animation: hoverB 6.5s ease-in-out infinite; }

        @keyframes hoverA {
          0% { transform: translateY(0) translateX(0) }
          50% { transform: translateY(-6px) translateX(6px) }
          100% { transform: translateY(0) translateX(0) }
        }
        @keyframes hoverB {
          0% { transform: translateY(0) translateX(0) }
          50% { transform: translateY(-8px) translateX(-6px) }
          100% { transform: translateY(0) translateX(0) }
        }

      `}</style>
    </div>
  )
}

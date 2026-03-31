import { useEffect, useState } from 'react'

export default function RoamingCrafts() {
  const [crafts, setCrafts] = useState([])

  useEffect(() => {
    // Assign each craft to a strictly isolated screen zone so they never collide visually
    const items = [
      {
        src: '/realistic_satellite.png', 
        size: '50vw', maxWidth: 650, dur: 180, rotDur: 280, delay: -40,
        pos: { top: '-5%', left: '5%' },
        // Orbit strictly in the top-left quadrant
        path: [ [0,0], [10, 8], [-5, 12], [-10, 4], [0,0] ],
        xDir: 1,
      },
      {
        src: '/realistic_uav.png',
        size: '45vw', maxWidth: 550, dur: 140, rotDur: 220, delay: -90,
        pos: { top: '35%', right: '-5%' },
        // Cruise strictly in the middle-right quadrant
        path: [ [0,0], [-15, -8], [-20, 10], [-5, 5], [0,0] ],
        xDir: -1,
      },
      {
        src: '/realistic_drone.png',
        size: '35vw', maxWidth: 400, dur: 100, rotDur: 160, delay: -20,
        pos: { bottom: '0%', left: '10%' },
        // Hover strictly in the bottom-left quadrant
        path: [ [0,0], [15, -10], [5, -20], [-10, -5], [0,0] ],
        xDir: 1,
      }
    ]
    setCrafts(items)
  }, [])

  if (crafts.length === 0) return null

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true" style={{ mixBlendMode: 'screen' }}>
      
      {crafts.map((c, i) => (
        <div
          key={i}
          className={`absolute animate-float-${i}`}
          style={{
            ...c.pos,
            width: c.size, 
            height: c.size,
            maxWidth: c.maxWidth,
            maxHeight: c.maxWidth,
            opacity: 0.15, // Low opacity for subtle professional hologram look
            mixBlendMode: 'screen',
            willChange: 'transform'
          }}
        >
          {/* Black background gets filtered out through screen blending */}
          <img
            src={c.src}
            alt="Aerospace craft"
            className={`w-full h-full object-contain animate-spin-${i}`}
            style={{ 
              filter: 'grayscale(100%) contrast(180%) brightness(1.2)', 
              willChange: 'transform' 
            }}
          />
        </div>
      ))}

      {/* Inject distinct fluid animations for each craft */}
      <style jsx>{`
        ${crafts.map((c, i) => `
          @keyframes float-${i} {
            0%   { transform: translate(${c.path[0][0]}vw, ${c.path[0][1]}vh); }
            25%  { transform: translate(${c.path[1][0]}vw, ${c.path[1][1]}vh); }
            50%  { transform: translate(${c.path[2][0]}vw, ${c.path[2][1]}vh); }
            75%  { transform: translate(${c.path[3][0]}vw, ${c.path[3][1]}vh); }
            100% { transform: translate(${c.path[4][0]}vw, ${c.path[4][1]}vh); }
          }
          .animate-float-${i} {
            animation: float-${i} ${c.dur}s linear infinite;
            animation-delay: ${c.delay}s;
          }
          @keyframes spinObj-${i} {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(${c.xDir * 360}deg); }
          }
          .animate-spin-${i} {
             animation: spinObj-${i} ${c.rotDur}s linear infinite;
             animation-delay: ${c.delay}s;
          }
        `).join('\n')}
      `}</style>
    </div>
  )
}

import { useState, useEffect } from 'react'

export default function AnimatedGridBackground(){
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 })

  useEffect(() => {
    let animationFrameId
    const handleMouseMove = (e) => {
      // Throttle mouse updates using requestAnimationFrame for sheer performance
      animationFrameId = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 100
        const y = (e.clientY / window.innerHeight) * 100
        setMousePos({ x, y })
      })
    }
    
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <div className="fixed inset-0 w-full h-full -z-20 pointer-events-none overflow-hidden bg-bg-deep">
      {/* Dynamic Mouse Spotlight overlay */}
      <div 
        className="absolute w-[800px] h-[800px] rounded-full blur-[120px] pointer-events-none opacity-20 transition-opacity duration-1000"
        style={{
          background: 'radial-gradient(circle, rgba(0,240,255,1) 0%, rgba(181,53,250,0.4) 40%, transparent 70%)',
          left: `calc(${mousePos.x}% - 400px)`,
          top: `calc(${mousePos.y}% - 400px)`,
          transition: 'left 0.15s ease-out, top 0.15s ease-out',
        }}
      />

      <svg className="absolute inset-0 w-full h-full opacity-60" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900" aria-hidden="true">
        <defs>
          <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#0a0a2a" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#02040a" stopOpacity="1" />
          </radialGradient>
          <linearGradient id="g2" x1="0" x2="1">
            <stop offset="0" stopColor="#00f0ff" stopOpacity="0.15" />
            <stop offset="0.5" stopColor="#b535fa" stopOpacity="0.1" />
            <stop offset="1" stopColor="#0ea5ff" stopOpacity="0.08" />
          </linearGradient>
        </defs>

        <rect width="100%" height="100%" fill="url(#bgGrad)" />

        {/* grid lines */}
        <g className="grid-lines" stroke="url(#g2)" strokeWidth="1" opacity="0.8">
          {Array.from({length: 40}).map((_, i) => (
            <line key={`v${i}`} x1={i*40} y1={0} x2={i*40} y2={900} />
          ))}
          {Array.from({length: 30}).map((_, i) => (
            <line key={`h${i}`} x1={0} y1={i*40} x2={1600} y2={i*40} />
          ))}
        </g>
      </svg>
    </div>
  )
}

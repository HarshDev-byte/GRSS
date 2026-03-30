import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Crosshair } from 'lucide-react'

export default function CustomCursor() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 })
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(true) // assume mobile until proven otherwise

  useEffect(() => {
    // Check if the device is touch-based. If it is, don't show the custom cursor.
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return
    setIsMobile(false)

    // Hide default cursor
    document.body.style.cursor = 'none'

    const moveCursor = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }
    
    // Globals to listen to hovers
    const handleMouseHover = (e) => {
      const target = e.target
      if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
        setIsHovering(true)
      } else {
        setIsHovering(false)
      }
    }

    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseover', handleMouseHover)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseover', handleMouseHover)
      document.body.style.cursor = 'auto'
    }
  }, [])

  if (isMobile) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-accent-cyan rounded-full pointer-events-none z-[9999] mix-blend-screen"
        animate={{
          x: mousePos.x - 4,
          y: mousePos.y - 4,
          scale: isHovering ? 0 : 1,
          opacity: 1
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-accent-cyan/50 text-accent-cyan rounded-full pointer-events-none z-[9998] flex items-center justify-center mix-blend-screen"
        animate={{
          x: mousePos.x - 20,
          y: mousePos.y - 20,
          scale: isHovering ? 1.5 : 1,
          rotate: isHovering ? 90 : 0,
          backgroundColor: isHovering ? 'rgba(0, 240, 255, 0.1)' : 'transparent'
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.5 }}
      >
        {isHovering && <Crosshair size={14} className="opacity-70 animate-pulse" />}
      </motion.div>
    </>
  )
}

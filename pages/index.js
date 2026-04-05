import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { ArrowRight, Satellite, Cpu } from 'lucide-react'

export default function PremiumGateway() {
  const [hovered, setHovered] = useState(null)
  
  // Custom spring configuration for highly premium, weighted expansion physics
  const springConfig = { type: 'spring', stiffness: 200, damping: 35, mass: 1 }

  return (
    <div className="w-full h-screen bg-[#050505] flex overflow-hidden font-sans selection:bg-white/20">
      <Head>
        <title>Select Destination | SIES GST</title>
      </Head>

      {/* GRSS PANEL */}
      <motion.div 
        animate={{ 
           width: hovered === 'grss' ? '65%' : hovered === 'ras' ? '35%' : '50%',
        }}
        transition={springConfig}
        className="relative h-full border-r border-white/5 outline-none overflow-hidden"
        onMouseEnter={() => setHovered('grss')}
        onMouseLeave={() => setHovered(null)}
      >
        <Link href="/grss" className="absolute inset-0 block group cursor-pointer">
          {/* Base immersive gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#01050a] via-black to-black" />
          
          {/* Render Image with dramatic parallax & zoom */}
          <motion.div 
            className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
            animate={{
               scale: hovered === 'grss' ? 1.05 : 1.0,
               y: hovered === 'grss' ? '-2%' : '0%'
            }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
             <img 
               src="/satellite_render.png" 
               alt="GRSS Satellite" 
               className={`w-full max-w-none h-[120%] lg:h-[150%] object-contain mix-blend-screen opacity-50 transition-all duration-1000 ${hovered === 'grss' ? 'opacity-90' : hovered === 'ras' ? 'opacity-10 grayscale blur-sm' : ''}`}
             />
          </motion.div>

          {/* Deep Vignette Shadow to make text pop */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
          
          {/* Floating Top Accent */}
          <div className="absolute top-12 flex w-full justify-center px-10 items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
             <div className="h-[1px] w-16 bg-cyan-500/30" />
             <div className="font-mono text-[10px] tracking-[0.4em] text-cyan-400 uppercase">System 01</div>
             <div className="h-[1px] w-16 bg-cyan-500/30" />
          </div>

          {/* Content Block */}
          <div className="absolute inset-x-0 bottom-0 p-8 md:p-16 z-20 flex flex-col justify-end">
             
             {/* Premium Icon Label */}
             <motion.div 
                className="flex items-center gap-5 mb-6"
                animate={{ x: hovered === 'grss' ? 20 : 0 }}
                transition={springConfig}
             >
                <div className="w-14 h-14 rounded-full bg-black border border-white/10 flex items-center justify-center backdrop-blur-xl group-hover:bg-cyan-950/50 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.2)] transition-all duration-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <Satellite size={22} className="text-white group-hover:text-cyan-400 transition-colors z-10" />
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.3em] font-bold text-neutral-400 group-hover:text-cyan-300 transition-colors">
                  Geoscience Segment
                </span>
             </motion.div>

             {/* Mega Typography */}
             <motion.div className="overflow-hidden">
               <motion.h1 
                  className="text-[6rem] md:text-[9rem] lg:text-[11rem] font-display font-black leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600 group-hover:to-cyan-900 transition-colors duration-700 drop-shadow-2xl"
                  animate={{ x: hovered === 'grss' ? 20 : 0 }}
                  transition={springConfig}
               >
                 GRSS
               </motion.h1>
             </motion.div>
             
             {/* Subtitle & CTA */}
             <motion.div 
                className="mt-8 max-w-sm"
                animate={{ 
                  opacity: hovered === 'ras' ? 0 : 1,
                  x: hovered === 'grss' ? 20 : 0
                }}
                transition={springConfig}
             >
                <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed mb-8 group-hover:text-cyan-50/90 transition-colors duration-500">
                   Pioneering Earth observation technologies. Explore geospatial intelligence and global telemetry systems in absolute precision.
                </p>
                <div className="flex items-center gap-3 text-cyan-500/70 group-hover:text-cyan-400 font-mono text-xs font-bold tracking-[0.2em] uppercase">
                  <span>Enter Orbit</span>
                  <div className="overflow-hidden relative flex items-center w-6 h-4">
                     <ArrowRight size={16} className="absolute left-0 -translate-x-8 group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                     <ArrowRight size={16} className="absolute left-0 translate-x-0 group-hover:translate-x-8 transition-transform duration-500 ease-in" />
                  </div>
                </div>
             </motion.div>
          </div>
        </Link>
      </motion.div>

      {/* RAS PANEL */}
      <motion.div 
        animate={{ 
           width: hovered === 'ras' ? '65%' : hovered === 'grss' ? '35%' : '50%',
        }}
        transition={springConfig}
        className="relative h-full outline-none overflow-hidden"
        onMouseEnter={() => setHovered('ras')}
        onMouseLeave={() => setHovered(null)}
      >
        <Link href="/ras" className="absolute inset-0 block group cursor-pointer">
          {/* Base immersive gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0501] via-black to-black" />
          
          {/* Render Image with dramatic parallax & zoom */}
          <motion.div 
            className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
            animate={{
               scale: hovered === 'ras' ? 1.05 : 1.0,
               y: hovered === 'ras' ? '-2%' : '0%'
            }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
             <img 
               src="/robot_render.png" 
               alt="RAS Robot" 
               className={`w-full max-w-none h-[120%] lg:h-[150%] object-contain mix-blend-screen opacity-50 transition-all duration-1000 ${hovered === 'ras' ? 'opacity-90' : hovered === 'grss' ? 'opacity-10 grayscale blur-sm' : ''}`}
             />
          </motion.div>

          {/* Deep Vignette Shadow to make text pop */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />
          
          {/* Floating Top Accent */}
          <div className="absolute top-12 flex w-full justify-center px-10 items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
             <div className="h-[1px] w-16 bg-amber-500/30" />
             <div className="font-mono text-[10px] tracking-[0.4em] text-amber-500 uppercase">System 02</div>
             <div className="h-[1px] w-16 bg-amber-500/30" />
          </div>

          {/* Content Block */}
          <div className="absolute inset-x-0 bottom-0 p-8 md:p-16 z-20 flex flex-col justify-end text-right items-end">
             
             {/* Premium Icon Label */}
             <motion.div 
                className="flex items-center flex-row-reverse gap-5 mb-6"
                animate={{ x: hovered === 'ras' ? -20 : 0 }}
                transition={springConfig}
             >
                <div className="w-14 h-14 rounded-full bg-black border border-white/10 flex items-center justify-center backdrop-blur-xl group-hover:bg-amber-950/50 group-hover:border-amber-500/50 group-hover:shadow-[0_0_30px_rgba(245,158,11,0.2)] transition-all duration-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-bl from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <Cpu size={22} className="text-white group-hover:text-amber-400 transition-colors z-10" />
                </div>
                <span className="font-mono text-xs uppercase tracking-[0.3em] font-bold text-neutral-400 group-hover:text-amber-400 transition-colors">
                  Cybernetics Segment
                </span>
             </motion.div>

             {/* Mega Typography */}
             <motion.div className="overflow-hidden">
               <motion.h1 
                  className="text-[6rem] md:text-[9rem] lg:text-[11rem] font-display font-black leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-600 group-hover:to-orange-900 transition-colors duration-700 drop-shadow-2xl"
                  animate={{ x: hovered === 'ras' ? -20 : 0 }}
                  transition={springConfig}
               >
                 RAS
               </motion.h1>
             </motion.div>
             
             {/* Subtitle & CTA */}
             <motion.div 
                className="mt-8 max-w-sm flex flex-col items-end"
                animate={{ 
                  opacity: hovered === 'grss' ? 0 : 1,
                  x: hovered === 'ras' ? -20 : 0
                }}
                transition={springConfig}
             >
                <p className="text-neutral-400 font-light text-sm md:text-base leading-relaxed mb-8 group-hover:text-amber-50/90 transition-colors duration-500">
                   Engineering the future of automation. Delve into autonomous systems, robotics, and cybernetic architectures.
                </p>
                <div className="flex items-center flex-row-reverse gap-3 text-amber-500/70 group-hover:text-amber-400 font-mono text-xs font-bold tracking-[0.2em] uppercase">
                  <span>Boot Sequence</span>
                  <div className="overflow-hidden relative flex items-center w-6 h-4 rotate-180">
                     <ArrowRight size={16} className="absolute left-0 -translate-x-8 group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                     <ArrowRight size={16} className="absolute left-0 translate-x-0 group-hover:translate-x-8 transition-transform duration-500 ease-in" />
                  </div>
                </div>
             </motion.div>
          </div>
        </Link>
      </motion.div>
      
    </div>
  )
}

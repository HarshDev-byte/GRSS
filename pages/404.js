import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AnimatedSky from '../components/AnimatedSky'
import { Terminal } from 'lucide-react'

export default function Custom404() {
  return (
    <div className="min-h-screen bg-bg-deep text-white selection:bg-rose-500/30 selection:text-white">
      <Navbar />
      
      {/* Backgrounds */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20 filter grayscale">
         <AnimatedSky />
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] px-6 text-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="relative max-w-xl w-full p-8 md:p-14 rounded-3xl border border-rose-500/20 bg-black/60 shadow-[0_0_50px_rgba(244,63,94,0.05)] overflow-hidden backdrop-blur-xl"
        >
          {/* Internal Glitch Glow */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-500 to-transparent opacity-50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-rose-500/10 rounded-full blur-[80px] -z-10 animate-pulse" />

          {/* Glitch Icon */}
          <motion.div 
             animate={{ x: [-2, 2, -1, 1, 0], y: [1, -1, 1, -2, 0] }}
             transition={{ duration: 0.4, repeat: Infinity, repeatType: "mirror", repeatDelay: 3 }}
             className="w-20 h-20 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(244,63,94,0.2)]"
          >
            <Terminal className="text-rose-400" size={36} />
          </motion.div>

          {/* Glitch Typography */}
          <div className="relative inline-block mb-2">
            <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500">
              404
            </h1>
            <h1 className="absolute top-0 left-[2px] text-6xl md:text-8xl font-display font-black tracking-tighter text-rose-500 mix-blend-screen opacity-50 -z-10 animate-pulse">
              404
            </h1>
          </div>
          
          <div className="text-sm font-mono text-rose-400 uppercase tracking-widest mb-8 border-b border-rose-500/20 pb-4 inline-block">
            FATAL_ERR // DATA_NOT_FOUND
          </div>

          <p className="text-slate-400 font-mono text-xs md:text-sm leading-relaxed mb-10 bg-black/50 p-4 rounded-xl border border-white/5 text-left">
            <span className="text-rose-500">&gt;</span> Attempting connection to requested coordinates...<br/>
            <span className="text-rose-500">&gt;</span> ERROR: Satellite uplink failed.<br/>
            <span className="text-rose-500">&gt;</span> Coordinates do not map to any known orbital path.<br/>
            <span className="animate-pulse">_</span>
          </p>

          <Link href="/" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 border border-white/10 text-white font-bold hover:border-rose-500/50 transition-all shadow-glow hover:shadow-[0_0_30px_rgba(244,63,94,0.2)] group w-full sm:w-auto">
            <span className="text-slate-400 group-hover:text-white transition-colors uppercase tracking-widest text-xs font-mono">Abort & Return</span>
          </Link>
        </motion.div>

      </main>
      
      <Footer />
    </div>
  )
}

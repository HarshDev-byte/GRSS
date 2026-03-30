import AnimatedGridBackground from './AnimatedGridBackground'
import AnimatedSky from './AnimatedSky'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import { ArrowRight, Satellite, Database, ShieldAlert } from 'lucide-react'

const TelemetryWidget = dynamic(() => import('./TelemetryWidget'), {
  ssr: false,
  loading: () => (
    <div className="h-32 flex flex-col items-center justify-center text-slate-500 gap-2">
      <div className="w-6 h-6 border-2 border-accent-cyan border-t-transparent rounded-full animate-spin"></div>
      <span className="text-xs tracking-widest uppercase font-mono">Uplink Securing...</span>
    </div>
  ),
})

export default function Hero(){
  return (
    <section className="pt-32 pb-24 relative overflow-hidden" aria-label="Hero — mission overview" role="region">
      <AnimatedGridBackground />
      <AnimatedSky />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan text-xs font-mono tracking-widest uppercase mb-6 shadow-glow-cyan">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-cyan opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-cyan"></span>
            </span>
            System Online
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.1] tracking-tight text-white drop-shadow-lg">
            Mission: <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan via-blue-400 to-accent-purple animate-gradient-x">
              Observe. Analyze. Act.
            </span>
          </h1>
          <p className="mt-6 text-slate-300 max-w-xl text-lg sm:text-xl font-light leading-relaxed">
            IEEE GRSS SIES GST — a premier hub for Earth observation, autonomous drone research, satellite telemetry, and applied AI systems.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-black font-semibold shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 transition-all duration-300" href="#labs">
              Explore Research Labs
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-slate-200 hover:bg-white/10 hover:border-accent-cyan/30 hover:shadow-glow-cyan transition-all duration-300" href="#events">
              View Directives
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="relative mt-8 lg:mt-0"
          initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100 }}
          style={{ perspective: "1000px" }}
        >
          <div className="w-full relative rounded-3xl bg-gradient-to-br from-[#071029]/80 to-[#001022]/80 border border-accent-cyan/20 backdrop-blur-xl p-1 shadow-[0_0_50px_rgba(0,240,255,0.15)] overflow-hidden group">
            {/* Animated Scanning Line */}
            <div className="absolute inset-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-cyan to-transparent opacity-50 scan-line z-20 pointer-events-none" />
            
            <div className="h-full w-full rounded-2xl bg-[#030712] relative overflow-hidden">
              {/* Inner subtle grid */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
              
              <div className="relative p-6 flex flex-col h-full z-10">
                <div className="flex justify-between items-center border-b border-white/5 pb-4 mb-4">
                  <div className="flex items-center gap-2">
                    <Satellite size={16} className="text-accent-cyan" />
                    <span className="text-xs font-mono text-accent-cyan tracking-widest uppercase">Global Telemetry Uplink</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-slate-500 uppercase">SYS_TIME</span>
                    <span className="text-xs font-mono text-slate-300">UTC-ALIGNED</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                    <div className="text-[10px] text-slate-400 font-mono mb-1 flex items-center gap-1"><Database size={10} /> Data Stream</div>
                    <div className="text-lg font-bold text-white font-mono">48.2 PB/s</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-3 border border-white/5">
                    <div className="text-[10px] text-slate-400 font-mono mb-1 flex items-center gap-1"><ShieldAlert size={10} /> Threat Level</div>
                    <div className="text-lg font-bold text-accent-cyan font-mono">NOMINAL</div>
                  </div>
                </div>

                <div className="flex-1 bg-black/40 rounded-xl border border-white/5 p-4 relative overflow-hidden group-hover:border-accent-cyan/20 transition-colors">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/10 rounded-full blur-[40px] pointer-events-none" />
                  <div aria-live="polite" className="relative z-10 h-full flex items-center justify-center">
                    <TelemetryWidget />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 right-8 text-[10px] font-mono text-slate-500 uppercase tracking-widest">Secure connection established • 24ms ping</div>
        </motion.div>
      </div>
    </section>
  )
}

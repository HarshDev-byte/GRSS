import { motion } from 'framer-motion'
import { Rocket, Satellite, Target } from 'lucide-react'

export default function CaseStudySection(){
  return (
    <section className="mt-32 py-16" id="case-study">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Text and Features Content */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full glass-panel text-xs text-accent-purple font-mono uppercase tracking-widest border border-accent-purple/20">
            <Target size={14} /> Mission Debrief
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-display font-black leading-tight tracking-tight mb-6">
            Pioneering the Next Generation of <span className="text-gradient">Flight Software</span>.
          </h2>
          
          <p className="text-slate-400 max-w-xl text-lg font-light leading-relaxed mb-10">
            A comprehensive showcase of our latest satellite integrations and drone payloads. Harnessing decentralized data pipelines to provide real-time, mission-critical insights.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div 
               whileHover={{ y: -5 }}
               className="p-6 rounded-2xl glass-panel-hover border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/10 rounded-full blur-[50px] -z-10 group-hover:bg-accent-cyan/20 transition-colors duration-500" />
              <Satellite className="text-accent-cyan mb-4" size={28} />
              <div className="text-xs text-accent-cyan/70 font-mono tracking-widest uppercase mb-1">Architecture</div>
              <div className="text-xl font-bold text-slate-100">Orbital Networks</div>
            </motion.div>
            
            <motion.div 
               whileHover={{ y: -5 }}
               className="p-6 rounded-2xl glass-panel-hover border border-white/5 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-accent-purple/10 rounded-full blur-[50px] -z-10 group-hover:bg-accent-purple/20 transition-colors duration-500" />
              <Rocket className="text-accent-purple mb-4" size={28} />
              <div className="text-xs text-accent-purple/70 font-mono tracking-widest uppercase mb-1">Engineering</div>
              <div className="text-xl font-bold text-slate-100">Propulsion UI</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Visual Showcase Panel */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative perspective-1000"
        >
          <div className="w-full aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden glass-panel border border-white/10 relative group shadow-glow-cyan p-2">
             <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-accent-purple/5 -z-10" />
             {/* Abstract mapping graphic simulating a dashboard */}
             <div className="w-full h-full rounded-2xl bg-black/60 border border-white/5 relative overflow-hidden flex flex-col">
                {/* Header bar */}
                <div className="h-10 border-b border-white/10 flex items-center px-4 gap-2">
                   <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                   <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                   <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                   <span className="ml-4 text-xs font-mono text-slate-500 flex-1 text-center pr-12">SYSTEM_OVERRIDE_V2.1</span>
                </div>
                {/* Body Map */}
                <div className="flex-1 relative bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.05)_0%,transparent_100%)] flex items-center justify-center p-8">
                   <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(0,240,255,0.1) 20px), repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(0,240,255,0.1) 20px)'}} />
                   <svg viewBox="0 0 100 100" className="w-[80%] h-full stroke-accent-cyan/60 animate-[pulse_4s_ease-in-out_infinite]">
                     <ellipse cx="50" cy="50" rx="40" ry="15" fill="none" strokeWidth="0.5" transform="rotate(-15 50 50)" />
                     <ellipse cx="50" cy="50" rx="30" ry="8" fill="none" strokeWidth="0.5" transform="rotate(25 50 50)" />
                     <circle cx="50" cy="50" r="2" fill="#00F0FF" className="animate-ping" />
                     <path d="M 50 50 L 80 20 L 95 20" fill="none" strokeWidth="0.5" strokeDasharray="1 2" />
                     <circle cx="80" cy="20" r="1" fill="#0EA5FF" />
                   </svg>

                   <div className="absolute bottom-6 right-6 font-mono text-xs text-accent-cyan/60 text-right uppercase">
                      Target Acquired <br/>
                      <strong className="text-white text-lg">LOC-4X-99</strong>
                   </div>
                </div>
             </div>
          </div>
          
          {/* Decorative floating badges */}
          <motion.div 
            animate={{ y: [0, -10, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 right-2 md:-right-6 px-4 py-3 rounded-xl glass-panel border border-accent-purple/30 text-[10px] sm:text-xs font-bold font-mono tracking-widest text-white shadow-glow-purple flex flex-col gap-1 items-center z-20"
          >
            <span className="text-accent-purple">STATUS</span>
            100% ACTIVE
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

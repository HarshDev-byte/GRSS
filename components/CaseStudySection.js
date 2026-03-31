import { motion } from 'framer-motion'
import { Rocket, Satellite, Target, ArrowUpRight } from 'lucide-react'

export default function CaseStudySection() {
  return (
    <section className="py-8" id="case-study">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* ── Left: Copy ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Section label */}
          <div className="flex items-center gap-3 mb-5">
            <span className="w-5 h-px bg-fuchsia-500/60" />
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-fuchsia-400 uppercase flex items-center gap-2">
              <Target size={12} /> Mission Debrief
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl font-display font-black leading-[1.05] tracking-[-0.04em] mb-6 text-white">
            Pioneering the Next{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-500">
              Generation
            </span>{' '}
            of Autonomous Architecture.
          </h2>

          <p className="text-slate-400 text-[17px] font-light leading-relaxed mb-10 pl-5 border-l border-white/10">
            A comprehensive showcase of our satellite integrations and drone swarms — harnessing decentralized data pipelines and orbital edge-compute to deliver real-time, mission-critical insights.
          </p>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: <Satellite size={24} strokeWidth={1.5} className="text-cyan-400 drop-shadow-[0_0_10px_rgba(0,229,255,0.7)]" />,
                label: 'Architecture',
                title: 'Orbital Networks',
                accent: 'cyan',
                hoverBorder: 'hover:border-cyan-500/30',
                hoverLine: 'via-cyan-500/50',
                glow: 'bg-cyan-500/5 group-hover:bg-cyan-500/15',
              },
              {
                icon: <Rocket size={24} strokeWidth={1.5} className="text-fuchsia-400 drop-shadow-[0_0_10px_rgba(217,70,239,0.7)]" />,
                label: 'Engineering',
                title: 'Propulsion UI',
                accent: 'fuchsia',
                hoverBorder: 'hover:border-fuchsia-500/30',
                hoverLine: 'via-fuchsia-500/50',
                glow: 'bg-fuchsia-500/5 group-hover:bg-fuchsia-500/15',
              },
            ].map((f) => (
              <motion.div
                key={f.title}
                whileHover={{ y: -4 }}
                className={`p-7 rounded-2xl bg-[#040810]/80 backdrop-blur-xl border border-white/[0.04] ${f.hoverBorder} relative overflow-hidden group shadow-[0_4px_24px_rgba(0,0,0,0.5)] transition-all duration-300`}
              >
                <div className={`absolute inset-0 ${f.glow} rounded-2xl transition-colors duration-500`} />
                <div className="relative z-10">
                  {f.icon}
                  <p className="text-[9px] font-mono font-bold tracking-[0.2em] text-slate-500 uppercase mt-4 mb-1">{f.label}</p>
                  <h4 className="text-xl font-display font-black text-white tracking-tight">{f.title}</h4>
                </div>
                <div className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent ${f.hoverLine} to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-600`} />
              </motion.div>
            ))}
          </div>

          <a
            href="#labs"
            className="mt-8 inline-flex items-center gap-2 text-[12px] font-mono font-bold tracking-[0.18em] text-cyan-400 hover:text-cyan-300 uppercase transition-colors group"
          >
            Explore all labs
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>

        {/* ── Right: HUD Panel ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden bg-[#030508] border border-cyan-500/20 relative shadow-[0_0_80px_rgba(0,229,255,0.1)] p-px">
            <div className="w-full h-full rounded-[23px] bg-[#030508] relative overflow-hidden flex flex-col">

              {/* Window chrome */}
              <div className="h-11 border-b border-white/[0.06] flex items-center px-5 gap-3 bg-white/[0.015] shrink-0">
                <span className="w-3 h-3 rounded-full bg-rose-500 shadow-[0_0_6px_rgba(244,63,94,0.8)] animate-pulse" />
                <span className="w-3 h-3 rounded-full bg-amber-400/60" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/60" />
                <span className="ml-auto text-[9px] font-mono tracking-[0.22em] text-slate-600 font-bold uppercase">
                  Mission_Override_v3.9
                </span>
              </div>

              {/* Map body */}
              <div className="flex-1 relative flex items-center justify-center p-8">
                {/* Grid */}
                <div className="absolute inset-0 opacity-15" style={{
                  backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 24px,rgba(0,229,255,0.12) 25px),repeating-linear-gradient(90deg,transparent,transparent 24px,rgba(0,229,255,0.12) 25px)'
                }} />
                {/* Radial glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.04),transparent_70%)]" />

                {/* Orbital rings SVG */}
                <svg viewBox="0 0 100 100" className="w-[75%] h-auto stroke-cyan-500/50" fill="none">
                  <ellipse cx="50" cy="50" rx="40" ry="14" strokeWidth="0.5" transform="rotate(-15 50 50)" />
                  <ellipse cx="50" cy="50" rx="28" ry="9" strokeWidth="0.5" transform="rotate(20 50 50)" />
                  <circle cx="50" cy="50" r="1.5" fill="#00e5ff" />
                  <circle cx="50" cy="50" r="4" strokeWidth="0.5" strokeDasharray="1 2" />
                  <path d="M50 50 L78 22 L92 22" strokeWidth="0.6" strokeDasharray="2 2" />
                  <circle cx="78" cy="22" r="2" fill="#00e5ff" opacity="0.8" />
                  <path d="M50 50 L22 68 L10 68" strokeWidth="0.6" strokeDasharray="2 2" opacity="0.5" />
                  <circle cx="22" cy="68" r="1.5" fill="#d946ef" opacity="0.6" />
                </svg>

                {/* Target readout */}
                <div className="absolute bottom-5 right-5 text-right font-mono">
                  <p className="text-[9px] tracking-[0.2em] text-cyan-500/70 uppercase font-bold mb-1">Target Acquired</p>
                  <p className="text-2xl font-display font-black text-white tracking-tight">LOC-4X-99</p>
                </div>

                {/* Scan label */}
                <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 border border-cyan-500/20 rounded-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-[9px] font-mono tracking-[0.2em] text-cyan-400 font-bold uppercase">Orbital Lock</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-4 -right-3 lg:-right-6 px-5 py-3 rounded-2xl bg-[#02030d]/90 backdrop-blur-xl border border-fuchsia-500/35 shadow-[0_0_30px_rgba(217,70,239,0.2)] flex flex-col items-center gap-1 z-10"
          >
            <span className="text-[8px] font-mono font-bold tracking-[0.25em] text-fuchsia-400 uppercase">Status</span>
            <span className="text-sm font-display font-black text-white">SECURED</span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}

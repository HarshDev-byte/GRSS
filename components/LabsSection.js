import { motion } from 'framer-motion'
import { ArrowUpRight, FlaskConical, MapPin, Shield } from 'lucide-react'
import { SatelliteIcon, UavIcon, DroneIcon } from './CraftIcons'

const labs = [
  {
    title: 'Orbital Satellite Lab',
    tag: 'SYSTEM // SAT-NET',
    desc: 'Small-sat communication protocols, hyperspectral imagery telemetry simulators, and next-gen orbital analytics engines.',
    icon: <SatelliteIcon className="w-9 h-9 text-cyan-400 drop-shadow-[0_0_20px_rgba(0,229,255,0.9)]" />,
    accent: 'cyan',
    href: '/labs/satellite',
    stat: '24 Active Orbits',
  },
  {
    title: 'Autonomous UAV Lab',
    tag: 'SYSTEM // UAV-ALPHA',
    desc: 'Precision mapping workflows, real-time edge AI compute, and payload optimization for stealth fixed-wing reconnaissance.',
    icon: <UavIcon className="w-9 h-9 text-emerald-400 drop-shadow-[0_0_20px_rgba(16,185,129,0.9)]" />,
    accent: 'emerald',
    href: '/labs/uav',
    stat: 'Fleet: 12 Units',
  },
  {
    title: 'Tactical Drone Hub',
    tag: 'SYSTEM // DRONE-OPS',
    desc: 'Multi-rotor prototypes engineered for urban reconnaissance, rapid payload delivery, and swarm intelligence coordination.',
    icon: <DroneIcon className="w-9 h-9 text-fuchsia-400 drop-shadow-[0_0_20px_rgba(217,70,239,0.9)]" />,
    accent: 'fuchsia',
    href: '/labs/drone',
    stat: 'Ops: 142 Missions',
  },
]

const accentMap = {
  cyan:    { border: 'group-hover:border-cyan-500/40',    glow: 'group-hover:shadow-[0_0_60px_rgba(0,229,255,0.12)]',    gradient: 'from-cyan-500/10 to-blue-500/[0.03]',    tag: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',    cta: 'text-cyan-400 group-hover/cta:text-cyan-300',    icon: 'bg-cyan-500/10 border-cyan-500/20', line: 'via-cyan-500/50' },
  emerald: { border: 'group-hover:border-emerald-500/40', glow: 'group-hover:shadow-[0_0_60px_rgba(16,185,129,0.12)]',  gradient: 'from-emerald-500/10 to-teal-500/[0.03]',  tag: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20', cta: 'text-emerald-400 group-hover/cta:text-emerald-300', icon: 'bg-emerald-500/10 border-emerald-500/20', line: 'via-emerald-500/50' },
  fuchsia: { border: 'group-hover:border-fuchsia-500/40', glow: 'group-hover:shadow-[0_0_60px_rgba(217,70,239,0.12)]',  gradient: 'from-fuchsia-500/10 to-purple-500/[0.03]', tag: 'text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20', cta: 'text-fuchsia-400 group-hover/cta:text-fuchsia-300', icon: 'bg-fuchsia-500/10 border-fuchsia-500/20', line: 'via-fuchsia-500/50' },
}

export default function LabsSection() {
  return (
    <section id="labs" className="mt-16 py-24 relative">
      {/* Top section rule */}
      <div className="section-divider mb-20" />

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16"
      >
        <div>
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-cyan-500/50" />
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-cyan-500 uppercase">Research Facilities</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-black tracking-[-0.04em] text-white leading-[1.0]">
            Aerospace{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
              Research Labs
            </span>
          </h2>
        </div>
        <p className="text-slate-400 font-light leading-relaxed text-lg max-w-md lg:text-right">
          Where autonomous robotics meets orbital mechanics. Dedicated facilities for satellite swarms, stealth UAVs, and tactical drone fleets.
        </p>
      </motion.div>

      {/* Lab cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {labs.map((lab, idx) => {
          const a = accentMap[lab.accent]
          return (
            <motion.article
              key={lab.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className={`relative rounded-3xl bg-[#040810]/80 backdrop-blur-xl border border-white/[0.04] ${a.border} ${a.glow} overflow-hidden group transition-all duration-500 flex flex-col min-h-[400px] shadow-[0_8px_40px_rgba(0,0,0,0.5)]`}
            >
              {/* Hover mesh gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${a.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-600 pointer-events-none`} />

              {/* Hover bottom bar */}
              <div className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent ${a.line} to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700`} />

              {/* Top decorative dots */}
              <div className="absolute top-5 right-5 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                <div className="w-1 h-1 rounded-full bg-white/20" />
                <div className="w-1 h-1 rounded-full bg-white/20" />
                <div className="w-1 h-1 rounded-full bg-white/20" />
              </div>

              <div className="relative z-10 p-9 flex flex-col h-full">
                {/* Icon + tag row */}
                <div className="flex items-start justify-between mb-8">
                  <div className={`w-16 h-16 rounded-2xl ${a.icon} border flex items-center justify-center shadow-[inset_0_2px_20px_rgba(0,0,0,0.4)]`}>
                    {lab.icon}
                  </div>
                  <div className={`px-3 py-1 rounded-lg text-[9px] font-mono font-bold tracking-[0.2em] uppercase border ${a.tag}`}>
                    {lab.tag}
                  </div>
                </div>

                {/* Text */}
                <h3 className="text-2xl font-display font-black tracking-tight text-white mb-3 leading-snug">{lab.title}</h3>
                <p className="text-slate-400 font-light leading-relaxed flex-grow text-[15px]">{lab.desc}</p>

                {/* Stat */}
                <div className="flex items-center gap-2 mt-6 mb-6 pt-5 border-t border-white/[0.05]">
                  <Shield size={12} className="text-slate-500" />
                  <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate-500 uppercase">{lab.stat}</span>
                </div>

                {/* CTA */}
                <a
                  href={lab.href}
                  className={`group/cta inline-flex items-center gap-2 text-[12px] font-mono font-bold tracking-[0.15em] uppercase ${a.cta} transition-colors duration-300`}
                >
                  Initialize Access
                  <ArrowUpRight size={15} className="group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform duration-300" />
                </a>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

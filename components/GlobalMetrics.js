import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Activity, Database, Satellite, Zap,
  Radio, CalendarDays, RefreshCw, TrendingUp
} from 'lucide-react'

/* ─── Animated number counter ─── */
function useCounter(target, duration = 2200, start = true) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!start) return
    let t0 = null
    const tick = (ts) => {
      if (!t0) t0 = ts
      const p = Math.min((ts - t0) / duration, 1)
      const ease = 1 - Math.pow(1 - p, 4)
      setVal(Math.floor(ease * target))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [target, duration, start])
  return val
}

/* ─── Mini sparkline SVG ─── */
function Spark({ color, pts }) {
  return (
    <svg className="w-full h-8" viewBox="0 0 80 24" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`sg-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        fill={`url(#sg-${color})`}
        points={`0,24 ${pts} 80,24`}
      />
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={pts}
      />
    </svg>
  )
}

/* ─── Top-row stat card ─── */
const ACCENTS = {
  cyan:    { icon: 'text-cyan-400',    border: 'hover:border-cyan-500/25',    line: 'via-cyan-400/60',    badge: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',    sparkColor: '#00e5ff' },
  blue:    { icon: 'text-blue-400',    border: 'hover:border-blue-500/25',    line: 'via-blue-400/60',    badge: 'text-blue-400 bg-blue-500/10 border-blue-500/20',    sparkColor: '#60a5fa' },
  fuchsia: { icon: 'text-fuchsia-400', border: 'hover:border-fuchsia-500/25', line: 'via-fuchsia-400/60', badge: 'text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20', sparkColor: '#e879f9' },
  emerald: { icon: 'text-emerald-400', border: 'hover:border-emerald-500/25', line: 'via-emerald-400/60',  badge: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20', sparkColor: '#34d399' },
}

function StatCard({ label, value, unit, icon, accent, badge, sparkPts, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const count = useCounter(value, 2000, inView)
  const a = ACCENTS[accent]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`relative flex flex-col justify-between rounded-2xl bg-[#040810]/80 backdrop-blur-xl border border-white/[0.05] ${a.border} overflow-hidden group transition-all duration-400 shadow-[0_4px_24px_rgba(0,0,0,0.5)] min-h-[180px] p-6`}
    >
      {/* Top row */}
      <div className="flex items-start justify-between mb-5">
        <div className={`${a.icon} mt-0.5`}>{icon}</div>
        {badge && (
          <span className={`text-[9px] font-mono font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-lg border ${a.badge}`}>
            {badge}
          </span>
        )}
      </div>

      {/* Label */}
      <p className="text-[10px] font-mono font-bold tracking-[0.22em] text-slate-500 uppercase mb-2 leading-relaxed">
        {label}
      </p>

      {/* Value */}
      <div className="flex items-baseline gap-2 mb-3">
        <span className="text-4xl sm:text-5xl font-display font-black text-white tracking-tighter tabular-nums leading-none">
          {count}
        </span>
        <span className={`text-[10px] font-mono font-bold tracking-[0.18em] uppercase ${a.icon} opacity-80`}>
          {unit}
        </span>
      </div>

      {/* Sparkline */}
      <Spark color={a.sparkColor} pts={sparkPts} />

      {/* Bottom hover line */}
      <div className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent ${a.line} to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-600`} />
    </motion.div>
  )
}

/* ─── Bottom info card ─── */
function InfoCard({ label, value, desc, icon, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className="relative flex flex-col rounded-2xl bg-[#040810]/60 backdrop-blur-xl border border-white/[0.04] hover:border-white/[0.09] overflow-hidden group transition-all duration-400 shadow-[0_4px_24px_rgba(0,0,0,0.4)] p-8 min-h-[180px]"
    >
      {/* Top */}
      <div className="flex items-center justify-between mb-auto">
        <span className="text-[10px] font-mono font-bold tracking-[0.22em] text-slate-500 uppercase">
          {label}
        </span>
        <span className="text-slate-700 group-hover:text-slate-400 transition-colors duration-400">
          {icon}
        </span>
      </div>

      {/* Big value */}
      <div className="mt-6">
        <div className="text-5xl sm:text-6xl font-display font-black text-white tracking-tighter leading-none mb-2">
          {value}
        </div>
        <p className="text-slate-500 text-sm font-light">{desc}</p>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-600" />
    </motion.div>
  )
}

/* ─── Section ─── */
export default function GlobalMetrics() {
  return (
    <section className="relative z-10 mt-8 mb-28" id="dashboard">

      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10"
      >
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-5 h-px bg-cyan-500/60" />
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-cyan-500 uppercase">
              Mission Analytics
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-black tracking-tight text-white">
            Live Operations Dashboard
          </h2>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/20 w-max">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
          </span>
          <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-emerald-400 uppercase">
            All Systems Nominal
          </span>
        </div>
      </motion.div>

      <div className="flex flex-col gap-5">

        {/* Stat cards row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <StatCard
            label="Active Network Satellites"
            value={24} unit="Orbits"
            icon={<Satellite size={20} strokeWidth={1.8} />}
            accent="cyan"
            sparkPts="0,18 12,14 24,20 36,10 48,15 60,8 80,4"
            delay={0}
          />
          <StatCard
            label="Telemetry Processed"
            value={846} unit="Terabytes"
            icon={<Database size={20} strokeWidth={1.8} />}
            accent="blue"
            sparkPts="0,20 12,16 24,18 36,12 48,8 60,6 80,3"
            delay={0.1}
          />
          <StatCard
            label="Drone Field Operations"
            value={142} unit="Missions"
            icon={<Zap size={20} strokeWidth={1.8} />}
            accent="fuchsia"
            sparkPts="0,22 12,18 24,14 36,16 48,10 60,12 80,6"
            delay={0.2}
          />
          <StatCard
            label="Uptime SLA Target"
            value={99} unit="Percent"
            icon={<Activity size={20} strokeWidth={1.8} />}
            accent="emerald"
            badge="Nominal"
            sparkPts="0,8 12,10 24,6 36,8 48,5 60,7 80,4"
            delay={0.3}
          />
        </div>

        {/* Info cards row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <InfoCard
            label="Founding Year"
            value="2026"
            desc="GRSS SIES GST inception year"
            icon={<TrendingUp size={20} strokeWidth={1.5} />}
            delay={0.4}
          />
          <InfoCard
            label="Active Projects"
            value="5"
            desc="Drones · Satcom · Edge AI"
            icon={<Radio size={20} strokeWidth={1.5} />}
            delay={0.5}
          />
          <InfoCard
            label="Upcoming Events"
            value="3"
            desc="Workshops & Hackathons"
            icon={<CalendarDays size={20} strokeWidth={1.5} />}
            delay={0.6}
          />
        </div>

      </div>
    </section>
  )
}

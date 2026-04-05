import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Rocket, Play, Activity, Globe, Target, Crosshair, Wifi, Cpu, Bot, Zap, Network } from 'lucide-react'
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"

// ── Live Vector World Map ──────────────────────────────────────────────────
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

const HOT_SPOTS_COORDS = [
  [-122.4194, 37.7749], // San Francisco
  [-74.006, 40.7128],   // New York
  [-0.1278, 51.5074],   // London
  [37.6173, 55.7558],   // Moscow
  [116.4074, 39.9042],  // Beijing
  [139.6917, 35.6895],  // Tokyo
  [151.2093, -33.8688], // Sydney
  [18.4232, -33.9249],  // Cape Town
  [-58.3816, -34.6037], // Buenos Aires
  [72.8777, 19.0760],   // Mumbai
  [55.2708, 25.2048],   // Dubai
]

function WorldMap({ mounted }) {
  if (!mounted) return null
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none flex items-center justify-center overflow-hidden">
      <ComposableMap
        projection="geoEquirectangular"
        projectionConfig={{ scale: 160, center: [0, 10] }}
        width={800}
        height={400}
        style={{ width: "100%", height: "100%", transform: "scale(1.2)" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="rgba(0, 229, 255, 0.05)"
                stroke="rgba(0, 229, 255, 0.35)"
                strokeWidth={0.5}
                style={{
                  default: { outline: "none" },
                  hover: { outline: "none" },
                  pressed: { outline: "none" },
                }}
              />
            ))
          }
        </Geographies>
        {HOT_SPOTS_COORDS.map((coord, i) => (
          <Marker key={i} coordinates={coord}>
            <circle r={3} fill="rgba(0,229,255,0.4)" className="animate-ping" style={{ transformOrigin: "center" }} />
            <circle r={1.5} fill="#fff" shadow="0 0 6px #fff" />
          </Marker>
        ))}
      </ComposableMap>
    </div>
  )
}

// ── Live Telemetry Chart ───────────────────────────────────────────────────
function SparkLine({ color, points }) {
  return (
    <svg className="w-full h-[28px] mt-1" viewBox="0 0 100 28" preserveAspectRatio="none">
      <defs>
        <linearGradient id={`g-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.4" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" points={points} />
    </svg>
  )
}

// ── Metric mini card ───────────────────────────────────────────────────────
function MetricChip({ label, value, unit, accent, badge, sparkPoints }) {
  const colors = {
    cyan:    { text: 'text-cyan-400',    border: 'hover:border-cyan-500/30',   bg: 'bg-cyan-500/5',    badge: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20', hex: '#00e5ff' },
    emerald: { text: 'text-emerald-400', border: 'hover:border-emerald-500/30', bg: 'bg-emerald-500/5', badge: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20', hex: '#10b981' },
    fuchsia: { text: 'text-fuchsia-400', border: 'hover:border-fuchsia-500/30', bg: 'bg-fuchsia-500/5', badge: 'text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20', hex: '#d946ef' },
  }
  const c = colors[accent]

  return (
    <div className={`${c.bg} border border-white/[0.06] ${c.border} rounded-2xl p-4 flex flex-col justify-between relative overflow-hidden transition-colors duration-300 group`}>
      <div className="flex items-center justify-between mb-1 relative z-10">
        <span className="text-[9px] font-mono tracking-[0.2em] text-slate-400 uppercase font-bold">{label}</span>
        {badge && <span className={`text-[8px] font-mono tracking-widest uppercase px-2 py-0.5 border rounded font-bold ${c.badge}`}>{badge}</span>}
      </div>
      <div className={`text-2xl font-display font-black ${c.text} tracking-tight relative z-10 transition-all duration-500 tabular-nums`}>
        {value}<span className="text-[10px] font-mono ml-1 opacity-70">{unit}</span>
      </div>
      <SparkLine color={c.hex} points={sparkPoints} />
    </div>
  )
}

// ── Hero ───────────────────────────────────────────────────────────────────
export default function Hero() {
  const [mounted, setMounted] = useState(false)
  const [m, setM] = useState({ sat: 99.2, drones: 14, lat: 1.2 })
  const router = useRouter()
  const isRas = router.pathname.startsWith('/ras')

  const content = isRas ? {
    heading: ['Build.', 'Automate.', 'Deploy.'],
    tagline: 'IEEE RAS SIES GST — Pioneering the frontier of Robotics & Automation with intelligent autonomous systems, real-time control architectures, and adaptive AI.',
    cta1: 'Explore Labs',
    cta2: 'View Projects',
    stats: [
      { label: 'Active Bots',     val: `${m.drones}`,  icon: <Bot size={13} /> },
      { label: 'Automation Nodes', val: '20+',          icon: <Network size={13} /> },
      { label: 'Latency',         val: `${m.lat}ms`,   icon: <Zap size={13} /> },
    ],
    accentColor: 'amber',
    headingColors: ['text-white', 'text-amber-400', 'text-white/60'],
  } : {
    heading: ['Observe.', 'Analyze.', 'Act.'],
    tagline: 'IEEE GRSS SIES GST — Commanding the vanguard of Earth Observation with autonomous drone swarms, satellite telemetry, and predictive AI architectures.',
    cta1: 'Explore Labs',
    cta2: 'View Missions',
    stats: [
      { label: 'Active Satellites', val: '24+',         icon: <Globe size={13} /> },
      { label: 'Drones Deployed',  val: `${m.drones}`, icon: <Cpu size={13} /> },
      { label: 'Latency',          val: `${m.lat}ms`,  icon: <Wifi size={13} /> },
    ],
    accentColor: 'cyan',
    headingColors: ['text-white', 'hero-gradient-text', 'text-white/60'],
  }

  useEffect(() => {
    setMounted(true)
    setM({
      sat:    parseFloat((Math.random() * 5 + 94).toFixed(1)),
      drones: Math.floor(Math.random() * 14 + 8),
      lat:    parseFloat((Math.random() * 1.5 + 0.5).toFixed(2)),
    })
    const id = setInterval(() => {
      setM(p => {
        let s = parseFloat(p.sat) + (Math.random() * 0.4 - 0.2)
        s = Math.min(99.9, Math.max(90, s))
        let d = p.drones
        if (Math.random() > 0.65) d = Math.min(30, Math.max(5, d + (Math.random() > 0.5 ? 1 : -1)))
        let l = parseFloat(p.lat) + (Math.random() * 0.3 - 0.15)
        l = Math.min(5, Math.max(0.1, l))
        return { sat: s.toFixed(1), drones: d, lat: l.toFixed(2) }
      })
    }, 2000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      className="relative pt-28 lg:pt-36 pb-24 min-h-screen flex flex-col justify-center overflow-hidden"
      aria-label="Mission Overview"
    >
      {/* ── Ambient background glows ── */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vh] bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.06),transparent_65%)]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[70vw] h-[70vh] bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.05),transparent_65%)]" />
      </div>

      {/* ── Dot pattern ── */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-30"
        style={{ backgroundImage: "radial-gradient(rgba(0,229,255,0.12) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 lg:gap-24 items-center w-full">

        {/* ───────── LEFT: Hero Copy ───────── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >

          {/* Main heading */}
          <h1 className="text-[4rem] sm:text-[5.5rem] lg:text-[7rem] font-display font-black leading-[0.9] tracking-[-0.04em] mb-8">
            <span className="text-white drop-shadow-[0_2px_40px_rgba(255,255,255,0.1)]">{content.heading[0]}</span><br />
            <span className={`${content.headingColors[1]} drop-shadow-[0_0_60px_rgba(0,229,255,0.25)]`}>{content.heading[1]}</span><br />
            <span className="text-white/60">{content.heading[2]}</span>
          </h1>

          {/* Tagline */}
          <p className="text-slate-400 text-lg font-light leading-relaxed max-w-lg mb-12 pl-5 border-l-2 border-cyan-500/40 relative">
            <span className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(0,229,255,0.8)]" />
            {content.tagline}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 items-center">
            <a
              href="#labs"
              className={`group relative flex items-center gap-3 px-8 py-4 ${isRas ? 'bg-gradient-to-r from-amber-400 to-orange-500' : 'bg-gradient-to-r from-cyan-400 to-blue-600'} text-black font-display font-black uppercase tracking-[0.1em] text-[13px] rounded-xl overflow-hidden hover:scale-[1.03] transition-all shadow-[0_0_40px_rgba(0,229,255,0.25)] hover:shadow-[0_0_60px_rgba(0,229,255,0.4)]`}
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <Rocket size={17} className="relative z-10 group-hover:-translate-y-1 transition-transform" />
              <span className="relative z-10">{content.cta1}</span>
            </a>
            <a
              href="#case-study"
              className="group flex items-center gap-3 px-8 py-4 border border-white/15 text-white font-mono font-bold uppercase tracking-[0.1em] text-[12px] rounded-xl hover:bg-white/[0.04] hover:border-white/30 transition-all backdrop-blur-sm"
            >
              <Play size={16} className="group-hover:scale-110 transition-transform" />
              {content.cta2}
            </a>
          </div>

          {/* Quick-stat strip */}
          <div className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-white/[0.06]">
            {content.stats.map(s => (
              <div key={s.label} className="flex items-center gap-2">
                <span className={isRas ? 'text-amber-500/70' : 'text-cyan-500/70'}>{s.icon}</span>
                <span className="text-xl font-display font-black text-white tabular-nums">{s.val}</span>
                <span className="text-[9px] font-mono tracking-[0.15em] text-slate-500 uppercase">{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ───────── RIGHT: Telemetry Panel ───────── */}
        <motion.div
          className="relative w-full"
          initial={{ opacity: 0, scale: 0.96, rotateY: 8 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ perspective: '1200px' }}
        >
          {/* Card glow */}
          <div className="absolute -inset-4 bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.06),transparent_70%)] pointer-events-none" />

          {/* Main card */}
          <div className="relative rounded-[28px] p-[1px] bg-gradient-to-b from-cyan-500/30 via-purple-500/10 to-transparent shadow-[0_0_100px_rgba(0,229,255,0.1)]">
            <div className="w-full rounded-[27px] bg-[#040810]/95 backdrop-blur-2xl p-6 flex flex-col gap-5 relative overflow-hidden">

              {/* Corner accents */}
              {[
                'top-0 left-0 border-t-2 border-l-2 border-cyan-400/50 rounded-tl-[27px]',
                'top-0 right-0 border-t-2 border-r-2 border-cyan-400/50 rounded-tr-[27px]',
                'bottom-0 left-0 border-b-2 border-l-2 border-purple-500/40 rounded-bl-[27px]',
                'bottom-0 right-0 border-b-2 border-r-2 border-purple-500/40 rounded-br-[27px]',
              ].map((cls, i) => (
                <div key={i} className={`absolute w-7 h-7 ${cls}`} />
              ))}

              {/* Scan line */}
              <div className="absolute inset-x-0 top-0 h-px overflow-hidden">
                <div className="h-full w-1/3 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan-horizontal opacity-80" />
              </div>

              {/* Header */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2.5">
                  <Activity size={16} className="text-cyan-400" />
                  <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-slate-200 uppercase">Live Telemetry</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 bg-fuchsia-500/[0.08] border border-fuchsia-500/25 rounded-lg backdrop-blur-sm">
                    <span className="text-[9px] font-mono tracking-[0.2em] text-fuchsia-400 uppercase font-bold animate-pulse">
                      ● REC STREAMING
                    </span>
                  </div>
                </div>
              </div>

              {/* Map section */}
              <div className="relative w-full h-52 bg-[#010205] rounded-2xl border border-white/[0.04] overflow-hidden shadow-[inset_0_0_60px_rgba(0,0,0,0.9)]">
                {/* Tactical grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.025)_1px,transparent_1px)] bg-[size:28px_28px]" />

                <WorldMap mounted={mounted} />

                {/* Radar sweep */}
                <div className="absolute top-1/2 left-1/2 w-[200%] h-[200%] origin-top-left -translate-x-1/2 -translate-y-1/2 animate-radar-spin pointer-events-none">
                  <div className="w-1/2 h-1/2 bg-[conic-gradient(from_0deg,transparent_72%,rgba(0,229,255,0.06)_86%,rgba(0,229,255,0.5)_100%)] rounded-tl-full border-l border-cyan-400/40" />
                </div>

                {/* Cross-hairs */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 bottom-0 left-1/2 w-px border-l border-dashed border-cyan-500/15" />
                  <div className="absolute left-0 right-0 top-1/2 h-px border-t border-dashed border-cyan-500/15" />
                  <Crosshair size={28} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-cyan-500/15" strokeWidth={1} />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(0,229,255,1)] animate-ring-pulse" />
                </div>

                {/* Label */}
                <div className="absolute top-3 left-3 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 border border-cyan-500/25 rounded-lg">
                  <Target size={11} className="text-cyan-400 animate-spin-slow" />
                  <span className="text-[9px] font-mono tracking-[0.2em] text-cyan-400 font-bold uppercase">Global Coordinate Grid</span>
                </div>

                {/* Orbital lock badge */}
                <div className="absolute bottom-3 right-3 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 border border-purple-500/25 rounded-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse shadow-[0_0_6px_rgba(167,139,250,0.8)]" />
                  <span className="text-[9px] font-mono tracking-[0.2em] text-purple-400 font-bold uppercase">Orbital Lock</span>
                </div>
              </div>

              {/* Metric chips */}
              <div className="grid grid-cols-3 gap-3">
                <MetricChip
                  label="Sat Link"
                  value={m.sat}
                  unit="%"
                  accent="emerald"
                  badge="Nominal"
                  sparkPoints="0,20 20,16 40,22 60,10 80,14 100,4"
                />
                <MetricChip
                  label="Drone Ops"
                  value={m.drones}
                  unit="Active"
                  accent="fuchsia"
                  sparkPoints="0,14 20,10 40,18 60,6 80,12 100,8"
                />
                <MetricChip
                  label="Latency"
                  value={m.lat}
                  unit="ms"
                  accent="cyan"
                  sparkPoints="0,12 20,12 40,6 60,18 80,10 100,12"
                />
              </div>

            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-5 -right-3 lg:-right-8 px-5 py-3.5 rounded-2xl bg-[#02030d]/90 backdrop-blur-xl border border-purple-500/35 shadow-[0_0_40px_rgba(147,51,234,0.2)] flex flex-col items-center gap-1 z-20"
          >
            <span className="text-[8px] font-mono font-bold tracking-[0.25em] text-purple-400 uppercase">Status</span>
            <span className="text-xs font-display font-black text-white tracking-tight">100% Secure</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Embedded animation styles */}
      <style jsx>{`
        .animate-radar-spin { animation: radarSpin 4s linear infinite; }
        @keyframes radarSpin {
          from { transform: translate(-50%,-50%) rotate(0deg); }
          to   { transform: translate(-50%,-50%) rotate(360deg); }
        }
        .animate-scan-horizontal { animation: scanH 5s ease-in-out infinite alternate; }
        @keyframes scanH {
          from { transform: translateX(-250%); }
          to   { transform: translateX(250%); }
        }
        .animate-spin-slow { animation: spinSlow 10s linear infinite; }
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .animate-ring-pulse {
          animation: ringPulse 2.5s ease-in-out infinite;
        }
        @keyframes ringPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(0,229,255,0.5); }
          50%      { box-shadow: 0 0 0 10px rgba(0,229,255,0); }
        }
        .hero-gradient-text {
          background-image: linear-gradient(135deg, #00e5ff 0%, #60a5fa 50%, #a78bfa 100%);
          background-size: 200% auto;
          animation: shimmer 5s linear infinite;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        @keyframes shimmer {
          from { background-position: 0% center; }
          to   { background-position: 200% center; }
        }
      `}</style>
    </section>
  )
}

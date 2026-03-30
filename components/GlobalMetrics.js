import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Activity, Database, Satellite, Zap } from 'lucide-react'

// Animated Counter Hook
function useCounter(end, duration = 2000, start = true) {
  const [count, setCount] = useState(0)
  
  useEffect(() => {
    if (!start) return
    let startTime = null
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percentage = Math.min(progress / duration, 1)
      
      // Easing out function
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4)
      setCount(Math.floor(easeOutQuart * end))
      
      if (percentage < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration, start])
  
  return count
}

const MetricCard = ({ title, value, unit, icon, delay }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const count = useCounter(value, 2500, isInView)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5 }}
      className="p-6 rounded-2xl glass-panel relative overflow-hidden group border border-white/5 hover:border-accent-cyan/30 transition-colors"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/5 rounded-full blur-[40px] -z-10 group-hover:bg-accent-cyan/10 transition-colors" />
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 rounded-xl bg-black/50 border border-white/10 text-accent-cyan group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest leading-tight">
          {title}
        </div>
      </div>
      <div className="flex items-end gap-2">
        <div className="text-4xl sm:text-5xl font-display font-black text-white tracking-tighter shadow-glow-cyan">
          {count}
        </div>
        <div className="text-sm font-bold text-accent-cyan/70 mb-1">{unit}</div>
      </div>
    </motion.div>
  )
}

export default function GlobalMetrics() {
  return (
    <section className="mt-24 mb-12 relative z-10" id="metrics">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard title="Active Network Satellites" value={24} unit="ORBITS" icon={<Satellite size={24} />} delay={0} />
        <MetricCard title="Telemetry Processed" value={846} unit="TERABYTES" icon={<Database size={24} />} delay={0.1} />
        <MetricCard title="Drone Field Operations" value={142} unit="MISSIONS" icon={<Zap size={24} />} delay={0.2} />
        <MetricCard title="Uptime SLA Target" value={99} unit="PERCENT" icon={<Activity size={24} />} delay={0.3} />
      </div>
    </section>
  )
}

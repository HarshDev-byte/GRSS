import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function DashboardCard({ title, value, subtitle, icon }){
  return (
    <motion.div 
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
      className="relative rounded-3xl p-8 bg-[#040509]/80 border border-white/[0.04] overflow-hidden group cursor-default hover:border-cyan-500/20 hover:bg-[#06080d]/80 transition-all duration-500 backdrop-blur-md min-h-[260px] shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
    >
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
      
      {/* Top section */}
      <div className="relative z-10 flex justify-between items-start mb-6">
        <div className="w-14 h-14 rounded-2xl bg-[#020306] border border-white/10 flex items-center justify-center group-hover:border-cyan-500/30 transition-colors duration-300 shadow-[inset_0_4px_20px_rgba(255,255,255,0.02)]">
          {icon}
        </div>
        <div className="w-8 h-8 rounded-full bg-white/[0.03] flex items-center justify-center border border-white/5 group-hover:bg-cyan-500/10 group-hover:border-cyan-500/30 transition-all duration-300">
          <ArrowUpRight size={16} className="text-slate-500 group-hover:text-cyan-400 transition-colors duration-300" />
        </div>
      </div>
      
      {/* Content section */}
      <div className="relative z-10">
        <div className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-cyan-500 uppercase mb-3 flex items-center gap-2 font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-700 group-hover:bg-cyan-400 group-hover:animate-ping transition-colors" /> {title}
        </div>
        <div className="text-4xl sm:text-5xl font-display font-black text-white tracking-tighter leading-none mb-5">{value}</div>
        <div className="text-[13px] text-slate-400 font-light border-t border-white/5 pt-4 group-hover:text-slate-300 transition-colors duration-300 leading-relaxed">
          {subtitle}
        </div>
      </div>
    </motion.div>
  )
}

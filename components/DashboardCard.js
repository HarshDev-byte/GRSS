import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function DashboardCard({ title, value, subtitle, icon }){
  return (
    <motion.div 
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className="relative rounded-[2rem] p-7 glass-panel glass-panel-hover overflow-hidden group cursor-default"
    >
      {/* Background Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="absolute -top-12 -right-12 w-40 h-40 bg-accent-cyan/10 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:border-accent-cyan/30 group-hover:bg-accent-cyan/10 transition-colors duration-300">
            {icon}
          </div>
          <ArrowUpRight size={20} className="text-slate-600 group-hover:text-accent-cyan transition-colors duration-300" />
        </div>
        
        <div>
          <div className="text-xs font-mono font-medium tracking-widest text-slate-400 uppercase mb-2">{title}</div>
          <div className="text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 group-hover:to-white transition-all duration-300 tracking-tight">{value}</div>
          <div className="mt-3 text-sm text-slate-500 group-hover:text-slate-300 transition-colors duration-300 border-t border-white/5 pt-3">{subtitle}</div>
        </div>
      </div>
    </motion.div>
  )
}

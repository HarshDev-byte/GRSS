import { motion } from 'framer-motion'
import { FileText, Download, TrendingUp, Cpu } from 'lucide-react'

export default function Publications({ items = [] }) {
  const data = items.length ? items : [
    { id: 'p1', title: 'Multispectral Analytics for Crop Health', type: 'RESEARCH', year: 2026, icon: <TrendingUp size={18} /> },
    { id: 'p2', title: 'Coastal Mapping Using Drones & AI', type: 'SURVEY', year: 2025, icon: <Cpu size={18} /> },
    { id: 'p3', title: 'SmallSat Data Processing Pipeline', type: 'SYS-ARCH', year: 2026, icon: <FileText size={18} /> }
  ]

  return (
    <section className="mt-32 relative" id="publications">
      <div className="flex items-center gap-4 mb-12">
        <h3 className="text-3xl font-display font-black text-slate-100 uppercase tracking-tight">Open <span className="text-gradient">Research</span></h3>
        <div className="h-px bg-white/10 flex-1"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((it, i) => (
          <motion.article 
            key={it.id} 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ y: -5 }}
            className="group p-6 rounded-2xl glass-panel relative overflow-hidden border border-white/5 shadow-glow-cyan flex flex-col justify-between h-full"
          >
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-accent-blue/5 rounded-full blur-[40px] -z-10 group-hover:bg-accent-blue/20 transition-colors" />

            <div>
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                  {it.icon}
                </div>
                <div className="text-xs font-mono text-slate-500 border border-white/10 px-2 py-1 rounded bg-black/50">
                  {it.year}
                </div>
              </div>

              <div className="text-[10px] font-mono tracking-widest text-accent-cyan uppercase mb-2">
                 DOC // {it.type}
              </div>
              <h4 className="text-lg font-bold text-slate-200 leading-snug group-hover:text-white transition-colors">
                {it.title}
              </h4>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10">
              <a href="#" className="inline-flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-widest text-slate-400 group-hover:text-accent-cyan transition-colors">
                <Download size={14} /> Download PDF
              </a>
            </div>
            
            {/* Side loading bar effect */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-accent-cyan transition-all duration-500 group-hover:w-full" />
          </motion.article>
        ))}
      </div>
    </section>
  )
}

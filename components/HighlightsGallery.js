import { motion } from 'framer-motion'
import { Maximize2, Camera } from 'lucide-react'

export default function HighlightsGallery({ items = [] }) {
  const defaultItems = [
    { id: 1, src: '/social-preview.svg', col: 'md:col-span-2', row: 'row-span-2' },
    { id: 2, src: '/favicon.svg', col: 'col-span-1', row: 'row-span-1' },
    { id: 3, src: '/social-preview.svg', col: 'col-span-1', row: 'row-span-1' },
    { id: 4, src: '/social-preview.svg', col: 'md:col-span-2', row: 'row-span-1' }
  ]
  const data = items.length ? items : defaultItems

  return (
    <section className="mt-32 mb-16" id="gallery">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full glass-panel text-xs text-accent-cyan font-mono uppercase tracking-widest border border-accent-cyan/20">
            <Camera size={14} /> Mission Logs
          </div>
          <h3 className="text-3xl font-display font-black text-slate-100 uppercase tracking-tight">Deployment <span className="text-gradient">Highlights</span></h3>
        </div>
        <a href="#gallery" className="text-sm font-mono text-accent-cyan hover:underline pb-1">VIEW FULL ARCHIVE</a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[160px]">
        {data.map((it, i) => (
          <motion.div 
            key={it.id} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`group relative rounded-2xl overflow-hidden glass-panel border border-white/10 bg-black/50 ${it.col || 'col-span-1'} ${it.row || 'row-span-1'}`}
          >
            {/* Image Layer */}
            <img 
              src={it.src} 
              alt={it.alt || 'Highlight capture'} 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out" 
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#02040A] via-transparent to-transparent opacity-80" />
            
            {/* Hover Icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-md">
              <Maximize2 size={18} className="text-white" />
            </div>

            {/* Simulated Data Badge */}
            <div className="absolute bottom-4 left-4 font-mono text-[9px] text-accent-cyan uppercase tracking-widest border border-accent-cyan/20 px-2 py-1 rounded bg-black/50 backdrop-blur-sm">
               IMG_CAP_{5483 + i * 17}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

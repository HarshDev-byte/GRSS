import { motion } from 'framer-motion'
import { Expand, Radio } from 'lucide-react'

// Gallery items — using abstract gradient tiles since no mission photos exist yet
const TILES = [
  { id: 1, col: 'md:col-span-2', row: 'row-span-2', label: 'SAT DEPLOY / LOC-4X', tag: 'ORBITAL', grad: 'from-cyan-900/60 via-blue-900/40 to-[#040810]' },
  { id: 2, col: 'col-span-1',    row: 'row-span-1', label: 'UAV SURVEY / ALPHA-7', tag: 'AIRBORNE', grad: 'from-emerald-900/50 via-teal-900/30 to-[#040810]' },
  { id: 3, col: 'col-span-1',    row: 'row-span-1', label: 'DRONE RECON / SIGMA-2', tag: 'TACTICAL', grad: 'from-fuchsia-900/50 via-purple-900/30 to-[#040810]' },
  { id: 4, col: 'md:col-span-2', row: 'row-span-1', label: 'COASTAL MAP / DELTA-9', tag: 'SURVEY', grad: 'from-blue-900/60 via-indigo-900/30 to-[#040810]' },
]

export default function HighlightsGallery({ items = [] }) {
  const tiles = items.length ? items : TILES

  return (
    <section className="mt-24 mb-8 relative" id="gallery">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7 }}
        className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
      >
        <div>
          <div className="flex items-center gap-3 mb-3">
            <span className="w-5 h-px bg-cyan-500/60" />
            <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-cyan-500 uppercase">
              Mission Logs
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-black tracking-tight text-white">
            Deployment Highlights
          </h2>
        </div>
        <a
          href="#"
          className="text-[11px] font-mono font-bold tracking-[0.2em] text-slate-400 hover:text-white uppercase transition-colors flex items-center gap-1.5 w-max"
        >
          Full Archive →
        </a>
      </motion.div>

      {/* Bento grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] gap-4">
        {tiles.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative rounded-2xl overflow-hidden bg-[#040810] border border-white/[0.05] hover:border-white/[0.1] shadow-[0_4px_24px_rgba(0,0,0,0.5)] transition-all duration-500 cursor-pointer ${t.col || ''} ${t.row || ''}`}
          >
            {/* Background gradient tile */}
            <div className={`absolute inset-0 bg-gradient-to-br ${t.grad || 'from-slate-900 to-[#040810]'} group-hover:opacity-80 transition-opacity duration-500`} />

            {/* Subtle dot grid */}
            <div className="absolute inset-0 opacity-[0.15]"
              style={{ backgroundImage: 'radial-gradient(rgba(0,229,255,0.3) 1px, transparent 1px)', backgroundSize: '20px 20px' }}
            />

            {/* Overlay gradient for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Hover expand icon */}
            <div className="absolute top-3 right-3 w-9 h-9 rounded-xl bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
              <Expand size={15} className="text-white" />
            </div>

            {/* Bottom info */}
            <div className="absolute bottom-0 inset-x-0 p-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="flex h-1.5 w-1.5 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
                </span>
                <span className="text-[8px] font-mono font-bold tracking-[0.25em] text-slate-400 uppercase">{t.tag}</span>
              </div>
              <p className="text-[10px] font-mono font-bold tracking-[0.12em] text-white uppercase leading-tight">
                {t.label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-[11px] font-mono text-slate-600 tracking-[0.2em] uppercase mt-8">
        Imagery updated in real-time as missions complete
      </p>
    </section>
  )
}

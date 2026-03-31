import { motion } from 'framer-motion'
import { FileText, Download, TrendingUp, Cpu, ExternalLink } from 'lucide-react'

const DEFAULT_PAPERS = [
  {
    id: 'p1',
    title: 'Multispectral Analytics for Crop Health Monitoring',
    type: 'Research Paper',
    year: 2026,
    authors: 'Sharma et al.',
    icon: <TrendingUp size={18} />,
    accent: 'cyan',
  },
  {
    id: 'p2',
    title: 'Coastal Mapping Using Autonomous Drones & AI',
    type: 'Survey',
    year: 2025,
    authors: 'Patel, N. & Zhang, J.',
    icon: <Cpu size={18} />,
    accent: 'blue',
  },
  {
    id: 'p3',
    title: 'SmallSat Data Processing Pipeline Architecture',
    type: 'System Architecture',
    year: 2026,
    authors: 'GRSS Research Division',
    icon: <FileText size={18} />,
    accent: 'fuchsia',
  },
]

const ACCENT = {
  cyan:    { icon: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',    tag: 'text-cyan-500 bg-cyan-500/[0.08] border-cyan-500/15',    line: 'via-cyan-500/50',    cta: 'text-cyan-500 hover:text-cyan-300' },
  blue:    { icon: 'text-blue-400 bg-blue-500/10 border-blue-500/20',    tag: 'text-blue-500 bg-blue-500/[0.08] border-blue-500/15',    line: 'via-blue-500/50',    cta: 'text-blue-500 hover:text-blue-300' },
  fuchsia: { icon: 'text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20', tag: 'text-fuchsia-500 bg-fuchsia-500/[0.08] border-fuchsia-500/15', line: 'via-fuchsia-500/50', cta: 'text-fuchsia-500 hover:text-fuchsia-300' },
}

export default function Publications({ items = [] }) {
  const papers = items.length ? items : DEFAULT_PAPERS

  return (
    <section className="mt-24 mb-8 relative" id="publications">

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
              Open Research
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-black tracking-tight text-white">
            Published Works
          </h2>
        </div>
        <a
          href="#"
          className="text-[11px] font-mono font-bold tracking-[0.2em] text-slate-400 hover:text-white uppercase transition-colors flex items-center gap-1.5 w-max"
        >
          View All <ExternalLink size={12} />
        </a>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {papers.map((p, i) => {
          const a = ACCENT[p.accent] || ACCENT.cyan
          return (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.65, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group relative flex flex-col rounded-2xl bg-[#040810]/80 backdrop-blur-xl border border-white/[0.05] hover:border-white/[0.1] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.5)] transition-all duration-400 p-7 min-h-[280px]"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-6">
                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${a.icon}`}>
                  {p.icon}
                </div>
                <span className={`text-[9px] font-mono font-bold tracking-[0.2em] uppercase px-2.5 py-1 rounded-lg border ${a.tag}`}>
                  {p.year}
                </span>
              </div>

              {/* Type */}
              <p className="text-[9px] font-mono font-bold tracking-[0.22em] text-slate-500 uppercase mb-2">
                {p.type}
              </p>

              {/* Title */}
              <h3 className="text-[17px] font-display font-black text-white leading-snug tracking-tight group-hover:text-slate-100 transition-colors mb-2 flex-grow">
                {p.title}
              </h3>

              {/* Authors */}
              <p className="text-[12px] text-slate-500 font-light mb-6 mt-1">{p.authors}</p>

              {/* Footer CTA */}
              <div className="border-t border-white/[0.05] pt-5 mt-auto">
                <a
                  href="#"
                  className={`inline-flex items-center gap-2 text-[11px] font-mono font-bold tracking-[0.18em] uppercase transition-colors ${a.cta}`}
                >
                  <Download size={13} />
                  Download PDF
                </a>
              </div>

              {/* Hover accent line */}
              <div className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent ${a.line} to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-600`} />
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}

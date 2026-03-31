import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const quotes = [
  {by: 'Prof. A. Sharma', role: 'Head of Aerospace', text: 'GRSS SIES GST bridges research and operational excellence in Earth Observation. Their integration of real-time datalinks is unverified.'},
  {by: 'Dr. N. Patel', role: 'Lead Data Scientist', text: 'An incredibly impressive integration of drone mapping hardware paired with deeply analytical satellite data intelligence pipelines.'},
  {by: 'Industry Partner', role: 'Defense Contractor', text: 'Professional, blazingly fast responses, and completely research-driven. They continuously deliver the critical analytics we rely on.'}
]

export default function Testimonials(){
  const containerVars = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVars = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <section className="mt-24 py-24 relative overflow-hidden" id="testimonials">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="text-center mb-20 relative z-10 w-full flex flex-col items-center">
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-cyan-500/10 text-[10px] text-cyan-400 font-mono uppercase tracking-[0.2em] border border-cyan-500/20 shadow-[0_0_15px_rgba(0,229,255,0.1)] font-bold w-max"
        >
          Partner Feedback
        </motion.div>
        <h3 className="text-4xl sm:text-5xl lg:text-5xl font-display font-black text-slate-100 tracking-tighter">
          Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 drop-shadow-[0_0_20px_rgba(0,229,255,0.3)]">Global Leaders</span>
        </h3>
      </div>

      <motion.div 
        variants={containerVars}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 mx-auto"
      >
        {quotes.map((q, i) => (
          <motion.blockquote 
            key={i} 
            variants={itemVars}
            className="p-10 rounded-3xl bg-[#040509]/80 border border-white/[0.04] relative group overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-md min-h-[300px] flex flex-col justify-between hover:border-cyan-500/30 transition-colors duration-500"
          >
            {/* Hover Gradient Sweep */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <Quote className="text-cyan-500/30 mb-8 group-hover:text-cyan-400 transition-colors duration-500" size={40} strokeWidth={1} />
            
            <p className="text-slate-300 leading-relaxed font-light text-lg mb-10 relative z-10 transition-colors group-hover:text-white flex-1">
              "{q.text}"
            </p>
            
            <div className="flex flex-col border-t border-white/5 pt-6 mt-auto relative z-10 w-full">
              <cite className="font-display font-black text-xl text-white not-italic mb-1 tracking-tight">{q.by}</cite>
              <span className="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.2em] font-bold">{q.role}</span>
            </div>
            
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
          </motion.blockquote>
        ))}
      </motion.div>
    </section>
  )
}

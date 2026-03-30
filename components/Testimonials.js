import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const quotes = [
  {by: 'Prof. A. Sharma', role: 'Head of Aerospace', text: 'GRSS SIES GST bridges research and operational excellence in Earth Observation. Their integration of real-time datalinks is unmatched.'},
  {by: 'Dr. N. Patel', role: 'Lead Data Scientist', text: 'An incredibly impressive integration of drone mapping hardware paired with deeply analytical satellite pipelines.'},
  {by: 'Industry Partner', role: 'Defense Contractor', text: 'Professional, blazingly fast responses, and completely research-driven. They deliver the analytics we rely on.'}
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  }

  return (
    <section className="mt-24 py-16 relative" id="testimonials">
      
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="text-center mb-16">
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className="inline-flex px-4 py-1.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-mono tracking-widest uppercase mb-4"
        >
          Partner Feedback
        </motion.div>
        <h3 className="text-4xl font-display font-black text-slate-100">Trusted by <span className="text-gradient">Industry Leaders</span></h3>
      </div>

      <motion.div 
        variants={containerVars}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10"
      >
        {quotes.map((q, i) => (
          <motion.blockquote 
            key={i} 
            variants={itemVars}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="p-8 rounded-2xl glass-panel relative group border-t border-t-white/10 overflow-hidden"
          >
            {/* Hover Gradient Sweep */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <Quote className="text-accent-cyan/40 mb-6 group-hover:text-accent-cyan transition-colors" size={32} />
            <p className="text-slate-300 leading-relaxed font-light text-lg mb-8 relative z-10 transition-colors group-hover:text-white">
              "{q.text}"
            </p>
            
            <div className="flex flex-col border-t border-white/10 pt-4 mt-auto">
              <cite className="font-bold text-slate-100 not-italic">{q.by}</cite>
              <span className="text-xs font-mono text-accent-cyan uppercase tracking-widest mt-1">{q.role}</span>
            </div>
          </motion.blockquote>
        ))}
      </motion.div>
    </section>
  )
}

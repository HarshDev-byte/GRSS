import { motion } from 'framer-motion'
import { PlaneTakeoff, Orbit, ArrowRight } from 'lucide-react'

export default function LabsSection(){
  return (
    <section id="labs" className="mt-12 py-12 relative">
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent-blue/10 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
          Research <span className="text-gradient">Labs</span>
        </h2>
        <p className="text-slate-400 mt-4 text-lg max-w-2xl font-light">Drone Lab and Satellite Lab — pushing the boundaries of autonomous research, prototyping, and field ops.</p>
      </motion.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: 'Autonomous Drone Lab', 
            desc: 'Advanced telemetry, mapping workflows, and specialized payload integration for multi-rotor and fixed-wing UAVs.',
            icon: <PlaneTakeoff size={32} className="text-accent-cyan" />,
            color: 'from-accent-cyan/10 to-accent-blue/10',
            glow: 'group-hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]'
          },
          {
            title: 'Satellite & Space Systems', 
            desc: 'Remote sensing algorithms, small sat communication protocols, and orbital mechanics simulation.',
            icon: <Orbit size={32} className="text-accent-purple" />,
            color: 'from-accent-purple/10 to-accent-blue/10',
            glow: 'group-hover:shadow-[0_0_30px_rgba(181,53,250,0.15)]'
          }
        ].map((l, idx) => (
          <motion.article 
            key={l.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            whileHover={{ y: -8 }}
            className={`p-8 rounded-3xl glass-panel relative overflow-hidden group cursor-pointer transition-all duration-500 ${l.glow}`}
          >
            <div className={`absolute -inset-px bg-gradient-to-br ${l.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl`} />
            
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {l.icon}
              </div>
              <h3 className="text-2xl font-bold font-display tracking-wide">{l.title}</h3>
              <p className="mt-3 text-slate-300 leading-relaxed font-light">{l.desc}</p>
              
              <div className="mt-8 flex gap-4 items-center">
                <a href="/labs/satellite" className="group/btn inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium border border-white/10 transition-colors">
                  Explore Lab
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
            {/* Background animated flare */}
            <div className={`absolute bottom-0 right-0 w-32 h-32 blur-[60px] opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none ${l.color.split(' ')[0].replace('/10', '/30')}`} />
          </motion.article>
        ))}
      </div>
    </section>
  )
}

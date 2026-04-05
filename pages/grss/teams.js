import Head from 'next/head'
import { motion } from 'framer-motion'
import { Users, Camera, Zap } from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const councilData = [
  {
    category: "Executive Board",
    color: "cyan",
    gradient: "from-cyan-500/20 to-blue-500/5",
    members: [
      { name: "Tejraj Gujar", role: "Chairperson" },
      { name: "Sahil Chavan", role: "Vice Chairperson" },
      { name: "Shardul Gade", role: "Secretary" },
      { name: "Harsh Mhatre", role: "Treasurer" }
    ]
  },
  {
    category: "Technical Leadership",
    color: "purple",
    gradient: "from-purple-500/20 to-pink-500/5",
    members: [
      { name: "Aditya Kinikar", role: "Chief Technical Advisor" },
      { name: "Soham Chafale", role: "Chief Technical Advisor" }
    ]
  },
  {
    category: "Design & Creative Team",
    color: "emerald",
    gradient: "from-emerald-500/20 to-teal-500/5",
    members: [
      { name: "Ananya Siddayyanavar", role: "Design and Creative Mentor" },
      { name: "Shravani Khedkar", role: "Design and Creative Mentor" }
    ]
  },
  {
    category: "Events & Community",
    color: "fuchsia",
    gradient: "from-fuchsia-500/20 to-rose-500/5",
    members: [
      { name: "A S Lakshanya", role: "Event and Community Manager" },
      { name: "Anushka Pawar", role: "Event and Community Manager" }
    ]
  }
]

const staggers = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const itemFade = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } }
}

export default function Teams() {
  return (
    <div className="min-h-screen bg-[#01020a] pt-32 pb-24 px-6 md:px-10 2xl:px-16 overflow-hidden relative">
      <Head>
        <title>Senior Council | GRSS SIES GST</title>
        <meta name="description" content="Meet the Senior Council of IEEE GRSS SIES GST." />
      </Head>

      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-cyan-900/10 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none translate-y-1/3 -translate-x-1/3" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay" />

      <Navbar />

      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="mb-24 text-center flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex items-center gap-3 mb-6 px-5 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10"
          >
            <Users size={14} className="text-cyan-400" />
            <span className="text-[12px] font-mono font-bold tracking-[0.3em] text-cyan-400 uppercase">
              Leadership Node
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-display font-black text-white tracking-tight uppercase leading-[0.9] drop-shadow-[0_0_30px_rgba(0,229,255,0.15)]"
          >
            Senior <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-cyan-600">Council</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 text-lg font-light text-slate-400 max-w-2xl leading-relaxed mx-auto"
          >
            The visionaries and architects driving IEEE GRSS SIES GST forward. These core members orchestrate our operations, tech pipelines, and community initiatives.
          </motion.p>
        </div>

        {/* Council Sections */}
        <div className="space-y-32">
          {councilData.map((section, sIdx) => {
            const isBoard = sIdx === 0
            return (
              <motion.div 
                key={sIdx}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggers}
                className="relative"
              >
                {/* Section Title */}
                <div className="flex items-center gap-4 mb-10">
                  <div className={`w-12 h-1 bg-${section.color}-500/50`} />
                  <h2 className="text-2xl md:text-3xl font-display font-bold text-white tracking-widest uppercase">
                    {section.category}
                  </h2>
                </div>

                {/* Profiles Grid */}
                <div className={`grid grid-cols-1 sm:grid-cols-2 ${isBoard ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6 lg:gap-8`}>
                  {section.members.map((member, mIdx) => (
                    <motion.div
                      key={mIdx}
                      variants={itemFade}
                      className={`group relative p-[1px] rounded-3xl bg-gradient-to-br border border-white/5 from-white/[0.08] to-transparent overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]`}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl`} />
                      
                      <div className="relative bg-[#02050c]/90 backdrop-blur-3xl rounded-[23px] overflow-hidden flex flex-col h-full border border-white/[0.02]">
                        
                        {/* Large Profile Photo Placeholder */}
                        <div className="relative w-full aspect-[4/5] bg-[#050a14] border-b border-white/[0.05] flex flex-col items-center justify-center group-hover:border-cyan-500/30 transition-colors">
                          {/* Inner glow simulation */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02),transparent_70%)]" />
                          
                          <Camera size={40} className="text-slate-600 mb-3 group-hover:scale-110 transition-transform duration-500 relative z-0" strokeWidth={1} />
                          <span className="text-[10px] font-mono tracking-[0.2em] text-slate-500 uppercase px-3 py-1 border border-slate-700/50 rounded bg-slate-800/30 relative z-0">
                            Awaiting Portrait
                          </span>

                          {/* Decorative UI elements over the photo */}
                          <div className="absolute top-4 right-4 z-20 flex gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50" />
                            <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                          </div>
                          <div className="absolute bottom-4 left-4 z-20 border-l-2 border-cyan-500/50 pl-2">
                            <span className="text-[9px] font-mono tracking-widest text-white/50 uppercase block leading-none">ID-AUTH</span>
                            <span className="text-[8px] font-mono tracking-widest text-cyan-400 uppercase leading-none mt-1 block">VERIFIED</span>
                          </div>
                        </div>

                        {/* Text Content */}
                        <div className="p-6 md:p-8 flex-1 flex flex-col bg-gradient-to-b from-black/50 to-transparent">
                          <h3 className="text-xl md:text-2xl font-display font-bold text-white tracking-tight mb-2 group-hover:text-cyan-300 transition-colors">
                            {member.name}
                          </h3>
                          <p className="text-[12px] font-mono tracking-widest text-cyan-500/80 uppercase font-bold">
                            {member.role}
                          </p>
                        </div>

                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
          
          {/* Junior Council */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggers}
            className="relative"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-1 bg-cyan-500/50" />
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white tracking-widest uppercase">
                Junior Council
              </h2>
            </div>
            
            <div className="w-full aspect-[21/9] md:aspect-auto md:h-64 bg-[#02050c]/50 backdrop-blur-xl border border-white/[0.05] border-dashed rounded-3xl p-10 flex flex-col items-center justify-center text-center group hover:bg-[#02050c]/80 transition-colors">
              <div className="mb-4 w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center flex-col">
                <span className="w-1 h-1 rounded-full bg-cyan-400 mb-1" />
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/60" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white tracking-tight mb-2 opacity-50">Awaiting Deployment</h3>
              <span className="text-[11px] font-mono tracking-[0.3em] text-cyan-400 uppercase font-bold animate-pulse">Coming Soon...</span>
            </div>
          </motion.div>

          {/* Volunteers */}
          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggers}
            className="relative"
          >
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-1 bg-fuchsia-500/50" />
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white tracking-widest uppercase">
                Volunteers
              </h2>
            </div>
            
            <div className="w-full aspect-[21/9] md:aspect-auto md:h-64 bg-[#02050c]/50 backdrop-blur-xl border border-white/[0.05] border-dashed rounded-3xl p-10 flex flex-col items-center justify-center text-center group hover:bg-[#02050c]/80 transition-colors">
              <div className="mb-4 w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center flex-col">
                <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 mb-1" />
                <span className="w-1 h-1 rounded-full bg-fuchsia-500/60" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white tracking-tight mb-2 opacity-50">Expanding the Grid</h3>
              <span className="text-[11px] font-mono tracking-[0.3em] text-fuchsia-400 uppercase font-bold animate-pulse">Coming Soon...</span>
            </div>
          </motion.div>
        </div>

        {/* Fancy Footer Notice */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 pt-10 border-t border-white/[0.05] text-center"
        >
          <p className="text-[11px] font-mono tracking-[0.2em] text-slate-500 uppercase">
            // Core Directive: Orchestrate, Innovate, Elevate //
          </p>
        </motion.div>

      </div>
      
      <Footer />
    </div>
  )
}

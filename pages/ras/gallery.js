import Head from 'next/head'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Camera, Image as ImageIcon, Map, Satellite, Plane, Navigation2 } from 'lucide-react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const CATEGORIES = [
  { id: 'satellite', label: 'Satellite Lab', icon: <Satellite size={16} /> },
  { id: 'drone', label: 'Drone & UAV Lab', icon: <Plane size={16} /> },
  { id: 'events', label: 'Events & Expos', icon: <Map size={16} /> },
]

// Generating placeholders based on category
const PLACEHOLDER_IMAGES = {
  satellite: [
    { title: 'Cleanroom Assembly', desc: 'Orbital payload integration' },
    { title: 'Telemetry Board', desc: 'Custom PCB for deep space comms' },
    { title: 'Sat. Deployment', desc: 'Thermal vacuum testing' },
    { title: 'Systems Check', desc: 'Avionics stack calibration' },
  ],
  drone: [
    { title: 'Hexacopter Frame', desc: 'Carbon fiber chassis assembly' },
    { title: 'Autonomous Flight Test', desc: 'Indoor navigation algorithms' },
    { title: 'Payload Integration', desc: 'Mounting secondary sensors' },
    { title: 'Rotor Balancing', desc: 'Propulsion system diagnostics' },
  ],
  events: [
    { title: 'Tech Symposium', desc: 'Annual aerospace summit' },
    { title: 'Workshop Seminar', desc: 'Guest lecture series' },
    { title: 'Exhibition Booth', desc: 'Showcasing our prototypes' },
    { title: 'Hackathon', desc: '24-hour development sprint' },
  ]
}

export default function Gallery() {
  const [activeTab, setActiveTab] = useState('satellite')

  return (
    <div className="min-h-screen bg-[#01020a] relative overflow-hidden flex flex-col">
      <Head>
        <title>Media Gallery | GRSS SIES GST</title>
        <meta name="description" content="View our lab facilities and field operations." />
      </Head>

      <Navbar />

      {/* Ambient glows */}
      <div className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vh] bg-[radial-gradient(ellipse_at_center,rgba(0,229,255,0.04),transparent_65%)] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[60vw] h-[60vh] bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.03),transparent_65%)] pointer-events-none" />

      <main className="flex-1 w-full mx-auto px-6 md:px-10 2xl:px-16 pt-36 pb-24 relative z-10 flex flex-col">
        
        {/* Header */}
        <div className="mb-14 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cyan-500/[0.05] border border-cyan-500/20 mb-6"
          >
            <Camera size={14} className="text-cyan-400" />
            <span className="text-[11px] font-mono font-bold tracking-[0.2em] text-cyan-400 uppercase">Media Archives</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-black text-white tracking-tight uppercase"
          >
            Facility <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-slate-400 font-light max-w-xl mx-auto"
          >
            A visual record of our core laboratories and real-world deployment operations.
          </motion.p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {CATEGORIES.map((cat, i) => {
            const isActive = activeTab === cat.id
            return (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-6 py-3 rounded-xl border flex items-center gap-2 transition-all duration-300 font-mono text-[11px] uppercase tracking-widest font-bold ${
                  isActive 
                    ? 'border-cyan-500/50 bg-cyan-500/10 text-white shadow-[0_0_20px_rgba(0,229,255,0.15)]' 
                    : 'border-white/10 bg-white/[0.02] text-slate-400 hover:text-white hover:bg-white/[0.05]'
                }`}
              >
                {cat.icon}
                {cat.label}
              </motion.button>
            )
          })}
        </div>

        {/* Gallery Grid */}
        <div className="flex-1 min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {PLACEHOLDER_IMAGES[activeTab].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#040812] border border-white/5 hover:border-cyan-500/30 transition-all shadow-lg"
                >
                  {/* Placeholder background simulation */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />
                  
                  {/* Photo area */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-50 transition-opacity">
                    <ImageIcon size={32} className="text-slate-500" />
                  </div>

                  {/* Caption overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/90 pb-4 pt-16 to-transparent translate-y-2 group-hover:translate-y-0 transition-transform">
                    <h5 className="text-sm font-display font-bold text-white mb-1.5">{item.title}</h5>
                    <p className="text-[10px] font-mono text-cyan-400/80 tracking-widest uppercase">{item.desc}</p>
                  </div>
                  
                  {/* Add image later text */}
                  <div className="absolute top-3 right-3 px-2 py-1 bg-black/50 border border-white/10 rounded text-[9px] font-mono text-slate-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md">
                    Awaiting Upload
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </main>

      <Footer />
    </div>
  )
}

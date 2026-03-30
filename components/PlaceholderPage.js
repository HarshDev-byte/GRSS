import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'
import { AlertTriangle, Home } from 'lucide-react'
import Link from 'next/link'
import AnimatedSky from '../components/AnimatedSky'

export default function PlaceholderPage({ title = "Classified Sector" }) {
  return (
    <div className="min-h-screen bg-bg-deep text-white selection:bg-accent-cyan/30 selection:text-white">
      <Navbar />
      
      {/* Dynamic Backgrounds */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
         <AnimatedSky />
      </div>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-[85vh] px-6 text-center">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-lg w-full p-8 md:p-12 glass-panel rounded-3xl border border-accent-cyan/20 shadow-[0_0_50px_rgba(0,240,255,0.05)] overflow-hidden"
        >
          {/* Internal Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-accent-cyan/10 rounded-full blur-[60px] -z-10 animate-pulse" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-purple/10 rounded-full blur-[60px] -z-10" />

          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-purple/20 to-accent-cyan/10 border border-white/10 flex items-center justify-center mx-auto mb-8 shadow-glow-cyan">
            <AlertTriangle className="text-accent-cyan" size={32} />
          </div>

          <h1 className="text-3xl md:text-5xl font-display font-black tracking-tight text-white mb-4">
            {title}
          </h1>
          <div className="text-xs font-mono text-accent-cyan uppercase tracking-widest mb-6">Security Clearance Required</div>

          <p className="text-slate-400 font-light leading-relaxed mb-8">
            This module is currently offline or undergoing encrypted data compilation. Please check back later when the uplink is re-established.
          </p>

          <Link href="/" className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 hover:border-accent-cyan/40 hover:text-accent-cyan transition-all shadow-glow hover:shadow-glow-cyan w-full">
            <Home size={18} />
            Return to Base
          </Link>
        </motion.div>

      </main>
      
      <Footer />
    </div>
  )
}

import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowUpRight, Radio, Activity, Globe } from 'lucide-react'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Labs', path: '/labs' },
  { name: 'Cases', path: '/cases' },
  { name: 'Partners', path: '/partners' },
  { name: 'Research', path: '/research' },
  { name: 'Gallery', path: '/gallery' },
]

function LiveClock() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const update = () => {
      const d = new Date()
      setTime(d.toISOString().slice(11, 19) + ' UTC')
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])
  return (
    <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-white/[0.02] border border-white/[0.05] rounded-lg">
      <Globe size={10} className="text-cyan-500 animate-spin-slow" />
      <span className="text-[10px] font-mono tracking-[0.2em] text-slate-400 tabular-nums font-bold">
        {time || '00:00:00 UTC'}
      </span>
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [hoveredLink, setHoveredLink] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed w-full z-50 top-0 pointer-events-none flex justify-center transition-all duration-700">
      
      {/* Top accent line - only visible when not scrolled or acting as a border */}
      <div className={`absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent transition-opacity duration-700 ${scrolled ? 'opacity-0' : 'opacity-100'}`} />

      {/* Main bar container - becomes a floating pill on scroll */}
      <motion.div
        layout
        className={`pointer-events-auto transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between ${
          scrolled
            ? 'mt-4 w-[95%] max-w-[1400px] rounded-2xl bg-[#02050c]/80 backdrop-blur-2xl border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.6),0_0_20px_rgba(0,229,255,0.05)] px-4 md:px-6 py-3'
            : 'w-full px-6 md:px-10 2xl:px-16 py-5 bg-gradient-to-b from-[#01020a]/90 to-transparent'
        }`}
      >
        
        {/* ── Navbar Left: Logo & Clock ── */}
        <div className="flex items-center gap-6 shrink-0 z-20">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center p-1.5 rounded-xl bg-white/[0.02] border border-white/[0.06] overflow-hidden group-hover:border-cyan-500/30 transition-colors duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img
                src="/grss_logo.png"
                alt="IEEE GRSS"
                className="h-9 sm:h-11 w-auto object-contain drop-shadow-[0_0_12px_rgba(0,229,255,0.4)] relative z-10"
              />
            </div>
            <div className="hidden lg:flex flex-col">
              <span className="text-[13px] font-display font-black tracking-widest text-white uppercase leading-none drop-shadow-md">
                IEEE GRSS
              </span>
              <span className="text-[9px] mt-0.5 font-mono font-bold tracking-[0.3em] text-cyan-500/90 uppercase flex items-center gap-1">
                SIES GST <span className="w-1 h-1 bg-cyan-400 rounded-full animate-ping ml-1" />
              </span>
            </div>
          </Link>

          <LiveClock />
        </div>

        {/* ── Navbar Center: Floating Dynamic Links ── */}
        <nav
          className="hidden md:flex items-center gap-1 relative z-10"
          onMouseLeave={() => setHoveredLink(null)}
        >
          {navLinks.map((link) => {
            const isActive = link.path === '/' 
              ? router.pathname === '/' 
              : router.pathname.startsWith(link.path)

            return (
              <Link
                key={link.name}
                href={link.path}
                onMouseEnter={() => setHoveredLink(link.name)}
                className={`relative px-4 py-2 rounded-lg text-[11px] font-bold tracking-[0.15em] font-mono uppercase transition-colors duration-300 z-10 ${
                  isActive || hoveredLink === link.name ? 'text-white' : 'text-slate-400'
                }`}
              >
                {link.name}
                
                {/* Hover Pill Background using Framer Motion Layout */}
                {hoveredLink === link.name && (
                  <motion.div
                    layoutId="nav-hover"
                    className="absolute inset-0 bg-white/[0.06] border border-white/[0.08] rounded-lg -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  />
                )}

                {/* Active Indicator Underline */}
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-x-3 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_rgba(0,229,255,0.8)]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* ── Navbar Right: Status & Actions ── */}
        <div className="hidden md:flex items-center gap-4 shrink-0 z-20">
          
          {/* Hexagonal Pulse Status */}
          <div className="group flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/[0.05] border border-emerald-500/20 backdrop-blur-md hover:bg-emerald-500/[0.1] transition-colors cursor-default">
            <Activity size={12} className="text-emerald-400" />
            <span className="text-[9px] font-mono font-bold tracking-[0.2em] text-emerald-400 uppercase">Sys Active</span>
          </div>

          {/* Premium CTA Button */}
          <Link
            href="/join"
            className="group relative flex items-center gap-2 px-6 py-2.5 rounded-xl bg-cyan-500 text-black font-mono text-[11px] tracking-[0.15em] uppercase font-black overflow-hidden shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_40px_rgba(0,229,255,0.6)] hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-scan-horizontal" />
            <Radio size={14} className="relative z-10 group-hover:scale-110 transition-transform" />
            <span className="relative z-10">Access Hub</span>
            <ArrowUpRight size={14} className="relative z-10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* ── Mobile Menu Toggle ── */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden relative z-50 p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-white hover:bg-white/[0.08] transition-all focus:outline-none"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

      </motion.div>

      {/* ── Mobile Fullscreen Overlay Dropdown ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto md:hidden absolute top-[80px] left-4 right-4 bg-[#02050c]/95 backdrop-blur-3xl border border-white/[0.1] rounded-2xl p-6 shadow-[0_30px_80px_rgba(0,0,0,0.8)] flex flex-col gap-2 overflow-hidden"
          >
            {/* Ambient inner glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[50px] pointer-events-none" />

            {/* Links */}
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 + 0.1 }}
              >
                <Link
                  href={link.path}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-5 py-4 rounded-xl text-[14px] font-mono font-bold tracking-widest uppercase text-slate-300 hover:bg-white/[0.05] hover:text-white transition-all group"
                >
                  {link.name}
                  <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-cyan-400" />
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-4 pt-4 border-t border-white/[0.08]"
            >
              <Link
                href="/join"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-cyan-500 text-black font-display font-black text-sm tracking-widest uppercase shadow-[0_0_30px_rgba(0,229,255,0.4)]"
              >
                <Radio size={16} />
                Access the Network
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

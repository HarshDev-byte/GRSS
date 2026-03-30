import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Menu, X, Folder, Layers, Copy } from 'lucide-react'

const AppStoreIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l-8 16h3.5l2-4h5l2 4H20L12 3z" />
    <path d="M13.5 12h-3l1.5-3.5L13.5 12z" />
  </svg>
)

export default function Navbar(){
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const router = useRouter()

  useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed w-full z-40 top-0 transition-all duration-300 ${scrolled ? 'backdrop-blur-xl bg-[#02040a]/70 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent py-4'}`}>
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-14">
          
          {/* Left: Logo block */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-4 group">
              <div className="w-11 h-11 rounded-2xl bg-accent-cyan flex items-center justify-center text-black font-display font-black text-xl shadow-[0_0_20px_rgba(0,240,255,0.4)] group-hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] group-hover:scale-105 transition-all">G</div>
              <div className="hidden sm:flex flex-col">
                <div className="flex items-center gap-1.5 text-base font-display font-black tracking-wider text-white uppercase group-hover:text-accent-cyan transition-colors">
                  <span>IEEE GRSS</span>
                  <span className="text-white/40">SIES GST</span>
                </div>
                <div className="text-[10px] font-mono tracking-widest text-[#00f0ff] uppercase mt-0.5">Remote Sensing Network</div>
              </div>
            </Link>
          </div>

          {/* Middle: Links + Icons container */}
          <div className="hidden md:flex flex-1 items-center justify-end px-6 gap-6">
            <div className="flex items-center gap-6 border border-white/10 rounded-full px-8 py-2.5 bg-white/[0.02] backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
              <Link href="/labs" className={`text-sm tracking-wide transition-colors ${router.pathname === '/labs' ? 'text-white font-medium' : 'text-slate-400 hover:text-white font-normal'}`}>Labs</Link>
              <Link href="/courses" className={`text-sm tracking-wide transition-colors ${router.pathname === '/courses' ? 'text-white font-medium' : 'text-slate-400 hover:text-white font-normal'}`}>Courses</Link>
              <Link href="/partners" className={`text-sm tracking-wide transition-colors ${router.pathname === '/partners' ? 'text-white font-medium' : 'text-slate-400 hover:text-white font-normal'}`}>Partners</Link>
              <Link href="/research" className={`text-sm tracking-wide transition-colors ${router.pathname === '/research' ? 'text-white font-medium' : 'text-slate-400 hover:text-white font-normal'}`}>Research</Link>
              <Link href="/gallery" className={`text-sm tracking-wide transition-colors ${router.pathname === '/gallery' ? 'text-white font-medium' : 'text-slate-400 hover:text-white font-normal'}`}>Gallery</Link>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all outline-none">
                <AppStoreIcon size={18} />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all outline-none">
                <Folder size={18} strokeWidth={1.5} />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all outline-none">
                <Layers size={18} strokeWidth={1.5} />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-slate-400 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all outline-none">
                <Copy size={18} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          {/* Right: CTA button */}
          <div className="hidden md:flex items-center ml-8">
            <Link href="/initialize" className="px-6 py-2.5 rounded-full bg-[#00f0ff] text-black font-black text-[13px] tracking-[0.15em] hover:scale-105 shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] transition-all duration-300 uppercase">
              INITIALIZE
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <Link href="/initialize" className="px-4 py-2 rounded-full bg-[#00f0ff] text-black font-bold text-xs shadow-[0_0_15px_rgba(0,240,255,0.4)] uppercase">
              Init
            </Link>
            <button onClick={()=>setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav" className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 transition-colors">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {open && (
          <div id="mobile-nav" className="md:hidden mt-4 p-4 rounded-2xl bg-[#0a0f1e]/95 border border-white/10 backdrop-blur-xl shadow-2xl">
            <div className="flex flex-col gap-2">
              <Link href="/labs" className="px-4 py-3 rounded-xl text-slate-300 hover:bg-white/5 hover:text-white transition-colors">Labs</Link>
              <Link href="/courses" className="px-4 py-3 rounded-xl text-slate-300 hover:bg-white/5 hover:text-white transition-colors">Courses</Link>
              <Link href="/partners" className="px-4 py-3 rounded-xl text-slate-300 hover:bg-white/5 hover:text-white transition-colors">Partners</Link>
              <Link href="/research" className="px-4 py-3 rounded-xl text-slate-300 hover:bg-white/5 hover:text-white transition-colors">Research</Link>
              <Link href="/gallery" className="px-4 py-3 rounded-xl text-slate-300 hover:bg-white/5 hover:text-white transition-colors">Gallery</Link>
            </div>
            <div className="flex items-center gap-4 px-4 pt-4 mt-2 border-t border-white/10 justify-between">
               <button className="text-slate-400 hover:text-white"><AppStoreIcon size={20} /></button>
               <button className="text-slate-400 hover:text-white"><Folder size={20} /></button>
               <button className="text-slate-400 hover:text-white"><Layers size={20} /></button>
               <button className="text-slate-400 hover:text-white"><Copy size={20} /></button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

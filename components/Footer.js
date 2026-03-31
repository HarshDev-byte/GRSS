import Link from 'next/link'
// Removed unused imports

const LINKS = {
  Directives: [
    { label: 'Active Projects', href: '/projects' },
    { label: 'Research Labs',   href: '/labs' },
    { label: 'Global Summits',  href: '/events' },
    { label: 'Media Vault',     href: '/gallery' },
  ],
  Uplink: [
    { label: 'contact@grss.global', href: 'mailto:contact@grss.global', mono: true },
    { label: 'Academic Partnerships', href: '#' },
    { label: 'Join the Network',      href: '/join' },
  ],
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-[#01020a] border-t border-white/[0.04] overflow-hidden z-20 mt-0">

      {/* Top glow rule */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] bg-cyan-500/[0.03] blur-[100px] rounded-full pointer-events-none" />

      <div className="w-full mx-auto px-6 md:px-10 2xl:px-16 pt-20 pb-10 relative z-10">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-16 mb-16">

          {/* Brand */}
          <div className="flex flex-col gap-7">
            <Link href="/" className="flex items-center gap-4 group w-max">
              <div className="p-2.5 rounded-xl bg-[#040810] border border-white/[0.06] group-hover:border-cyan-500/25 transition-colors duration-400 shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
                <img
                  src="/grss_logo.png"
                  alt="IEEE GRSS"
                  className="h-14 md:h-16 w-auto object-contain group-hover:drop-shadow-[0_0_16px_rgba(0,229,255,0.4)] transition-all duration-400"
                />
              </div>
              <div>
                <div className="text-lg font-display font-black tracking-tight text-white uppercase group-hover:text-cyan-400 transition-colors duration-400">
                  GRSS <span className="text-slate-500 font-medium">SIES GST</span>
                </div>
                <div className="text-[9px] font-mono font-bold tracking-[0.28em] text-cyan-500/50 uppercase mt-1">
                  Est. 2026 · Node Active
                </div>
              </div>
            </Link>

            <p className="text-[15px] font-light text-slate-500 max-w-xs leading-relaxed">
              The premier hub for aerospace analytics, autonomous robotics, and applied orbital intelligence.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-1">
              {[
                { icon: <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>, href: 'mailto:contact@grss.global', label: 'Email' },
                { icon: <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>, href: '#', label: 'GitHub' },
                { icon: <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>, href: '#', label: 'LinkedIn' },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-[#040810] border border-white/[0.06] flex items-center justify-center text-slate-500 hover:text-cyan-400 hover:border-cyan-500/25 transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading} className="flex flex-col gap-4">
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                <span className="text-[10px] font-mono font-bold tracking-[0.25em] text-cyan-500 uppercase">{heading}</span>
              </div>
              {items.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-[14px] text-slate-500 hover:text-slate-200 transition-colors duration-300 w-max ${item.mono ? 'font-mono text-[12px]' : 'font-light'}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.04] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate-600 uppercase">
            © {year} IEEE GRSS SIES GST · All Rights Reserved
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-[10px] font-mono font-bold tracking-[0.18em] text-slate-600 hover:text-cyan-400 uppercase transition-colors">Privacy</a>
            <a href="#" className="text-[10px] font-mono font-bold tracking-[0.18em] text-slate-600 hover:text-cyan-400 uppercase transition-colors">Terms</a>
            <span className="text-[10px] font-mono text-slate-700 uppercase tracking-[0.15em]">v1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'

// Using native CSS keyframes for performant infinite scroll
export default function SponsorCarousel({ items = [] }) {
  // If no items, we generate some mock placeholders to demonstrate the marquee
  const data = items.length ? items : Array.from({length: 8}, (_, i) => ({ id: i, label: `PARTNER_${i+1} // ORG` }))

  return (
    <div className="mt-32 py-12 relative overflow-hidden border-y border-white/[0.05] bg-[#020306]">
      
      {/* Title */}
      <div className="w-full mx-auto px-6 md:px-10 2xl:px-16 mb-10 flex items-center justify-between">
         <div className="flex items-center gap-3">
            <ShieldCheck className="text-cyan-500 drop-shadow-[0_0_10px_rgba(0,229,255,0.8)]" size={20} />
            <h4 className="text-[11px] font-mono text-slate-400 font-bold tracking-[0.2em] uppercase">Verified Research Partners</h4>
         </div>
      </div>

      {/* Marquee Container */}
      <div className="flex overflow-hidden relative group w-full before:absolute before:inset-y-0 before:left-0 before:w-48 before:bg-gradient-to-r before:from-[#020306] before:to-transparent before:z-10 after:absolute after:inset-y-0 after:right-0 after:w-48 after:bg-gradient-to-l after:from-[#020306] after:to-transparent after:z-10">
        
        {/* Track 1 */}
        <div className="flex gap-6 whitespace-nowrap px-3 animate-marquee group-hover:animation-pause">
          {data.map((it, idx) => (
            <div key={`a-${idx}`} className="w-[240px] h-24 bg-[#04060b] rounded-2xl flex items-center justify-center border border-white/[0.03] group/item transition-all duration-500 hover:border-cyan-500/30 hover:bg-[#060913] hover:shadow-[0_0_30px_rgba(0,229,255,0.1)]">
              {it.src ? (
                <img src={it.src} alt="sponsor" className="max-h-12 opacity-30 group-hover/item:opacity-100 transition-opacity duration-500 filter grayscale group-hover/item:grayscale-0" />
              ) : (
                <span className="font-mono text-[10px] tracking-[0.2em] text-slate-600 font-bold group-hover/item:text-cyan-400 transition-colors duration-500">{it.label}</span>
              )}
            </div>
          ))}
        </div>

        {/* Track 2 (Duplicate for seamless loop) */}
        <div className="flex gap-6 whitespace-nowrap px-3 animate-marquee group-hover:animation-pause" aria-hidden="true">
          {data.map((it, idx) => (
            <div key={`b-${idx}`} className="w-[240px] h-24 bg-[#04060b] rounded-2xl flex items-center justify-center border border-white/[0.03] group/item transition-all duration-500 hover:border-cyan-500/30 hover:bg-[#060913] hover:shadow-[0_0_30px_rgba(0,229,255,0.1)]">
              {it.src ? (
                <img src={it.src} alt="sponsor" className="max-h-12 opacity-30 group-hover/item:opacity-100 transition-opacity duration-500 filter grayscale group-hover/item:grayscale-0" />
              ) : (
                <span className="font-mono text-[10px] tracking-[0.2em] text-slate-600 font-bold group-hover/item:text-cyan-400 transition-colors duration-500">{it.label}</span>
              )}
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animation-pause {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  )
}

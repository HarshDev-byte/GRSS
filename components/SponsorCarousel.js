import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'

// Using native CSS keyframes for performant infinite scroll
export default function SponsorCarousel({ items = [] }) {
  // If no items, we generate some mock placeholders to demonstrate the marquee
  const data = items.length ? items : Array.from({length: 6}, (_, i) => ({ id: i, label: `PARTNER_${i+1} // ORG` }))

  return (
    <div className="mt-32 py-10 relative overflow-hidden border-y border-white/5 bg-black/40">
      
      {/* Title */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8 flex items-center justify-between">
         <div className="flex items-center gap-3">
            <ShieldCheck className="text-accent-blue" size={20} />
            <h4 className="text-sm font-mono text-slate-300 tracking-widest uppercase">Verified Research Partners</h4>
         </div>
      </div>

      {/* Marquee Container */}
      <div className="flex overflow-hidden relative group w-full before:absolute before:inset-y-0 before:left-0 before:w-32 before:bg-gradient-to-r before:from-[#02040A] before:to-transparent before:z-10 after:absolute after:inset-y-0 after:right-0 after:w-32 after:bg-gradient-to-l after:from-[#02040A] after:to-transparent after:z-10">
        
        {/* Track 1 */}
        <div className="flex gap-6 whitespace-nowrap px-3 animate-marquee group-hover:animation-pause">
          {data.map((it, idx) => (
            <div key={`a-${idx}`} className="w-[200px] h-20 bg-[#02040A]/40 rounded-xl flex items-center justify-center border border-white/5 glass-panel-hover group/item transition-colors hover:border-accent-cyan/40 hover:bg-black">
              {it.src ? (
                <img src={it.src} alt="sponsor" className="max-h-10 opacity-50 group-hover/item:opacity-100 transition-opacity filter grayscale group-hover/item:grayscale-0" />
              ) : (
                <span className="font-mono text-xs text-slate-500 tracking-widest group-hover/item:text-accent-cyan transition-colors">{it.label}</span>
              )}
            </div>
          ))}
        </div>

        {/* Track 2 (Duplicate for seamless loop) */}
        <div className="flex gap-6 whitespace-nowrap px-3 animate-marquee group-hover:animation-pause" aria-hidden="true">
          {data.map((it, idx) => (
            <div key={`b-${idx}`} className="w-[200px] h-20 bg-[#02040A]/40 rounded-xl flex items-center justify-center border border-white/5 glass-panel-hover group/item transition-colors hover:border-accent-cyan/40 hover:bg-black">
              {it.src ? (
                <img src={it.src} alt="sponsor" className="max-h-10 opacity-50 group-hover/item:opacity-100 transition-opacity filter grayscale group-hover/item:grayscale-0" />
              ) : (
                <span className="font-mono text-xs text-slate-500 tracking-widest group-hover/item:text-accent-cyan transition-colors">{it.label}</span>
              )}
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 25s linear infinite;
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

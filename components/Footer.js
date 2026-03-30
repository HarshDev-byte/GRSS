import Link from 'next/link'

export default function Footer(){
  return (
    <footer className="mt-16 py-8 border-t border-white/6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-cyan to-accent-blue flex items-center justify-center text-black font-bold">G</div>
          <div>
            <div className="text-sm font-semibold">IEEE GRSS — SIES GST</div>
            <div className="text-xs text-slate-400">© {new Date().getFullYear()} All rights reserved</div>
          </div>
        </Link>

        <div className="flex items-center gap-6">
          <nav className="text-sm text-slate-400 flex gap-4">
            <a href="/projects" className="hover:text-white">Projects</a>
            <a href="/news" className="hover:text-white">News</a>
            <a href="/events" className="hover:text-white">Events</a>
            <a href="/gallery" className="hover:text-white">Gallery</a>
          </nav>
          <div className="text-sm text-slate-400">Contact: <a href="mailto:contact@grss-sies.example" className="text-slate-200 hover:text-white">contact@grss-sies.example</a></div>
        </div>
      </div>
    </footer>
  )
}

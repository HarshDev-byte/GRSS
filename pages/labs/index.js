import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Link from 'next/link'

export default function LabsIndex(){
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#020417] via-[#04081a] to-[#030417] text-slate-100">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 lg:px-8 pt-28 pb-12">
        <h1 className="text-3xl font-extrabold">Labs</h1>
        <p className="text-slate-400 mt-2">Drone Lab and Satellite Lab — research, prototyping, and field ops.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <article className="p-6 rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.02),rgba(255,255,255,0.03))] border border-glass-border">
            <h3 className="text-xl font-semibold">Drone Lab</h3>
            <p className="mt-2 text-slate-300">Autonomy, mapping, payload integration and field operations.</p>
            <div className="mt-4">
              <Link href="/labs/drone" className="px-4 py-2 rounded-md bg-accent-cyan text-black font-semibold">Open Drone Lab</Link>
            </div>
          </article>

          <article className="p-6 rounded-2xl bg-[linear-gradient(135deg,rgba(255,255,255,0.02),rgba(255,255,255,0.03))] border border-glass-border">
            <h3 className="text-xl font-semibold">Satellite Lab</h3>
            <p className="mt-2 text-slate-300">Remote sensing algorithms, small satellite prototyping and analytics.</p>
            <div className="mt-4">
              <Link href="/labs/satellite" className="px-4 py-2 rounded-md bg-accent-cyan text-black font-semibold">Open Satellite Lab</Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  )
}

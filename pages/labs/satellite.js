import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function SatelliteLab(){
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#020417] via-[#04081a] to-[#030417] text-slate-100">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 lg:px-8 pt-28 pb-12">
        <h1 className="text-3xl font-extrabold">Satellite Lab</h1>
        <p className="text-slate-400 mt-2">Focus areas: remote sensing algorithms, smallsat prototyping, onboard data processing.</p>

        <section className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-[#021226] border border-glass-border">Image Processing & AI</div>
          <div className="p-4 rounded-lg bg-[#021226] border border-glass-border">SmallSat Hardware</div>
        </section>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">Recent Work</h2>
          <div className="mt-3 grid grid-cols-1 gap-3">
            <div className="p-4 rounded-lg bg-[linear-gradient(135deg,rgba(255,255,255,0.02),rgba(255,255,255,0.03))] border border-glass-border">Multispectral algorithm benchmark (Feb 2026)</div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

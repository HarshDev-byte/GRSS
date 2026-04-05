import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import NewsCard from '../../components/NewsCard'
import data from '../../data/content.json'

export default function News(){
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#020417] via-[#04081a] to-[#030417] text-slate-100">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 lg:px-8 pt-28 pb-12">
        <h1 className="text-3xl font-extrabold">News</h1>
        <p className="text-slate-400 mt-2">Announcements and updates from GRSS SIES GST.</p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.news.map(n => (
            <NewsCard key={n.id} item={n} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

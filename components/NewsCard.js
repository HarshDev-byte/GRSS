export default function NewsCard({item}){
  return (
    <article className="p-4 rounded-xl bg-[linear-gradient(135deg,rgba(255,255,255,0.02),rgba(255,255,255,0.03))] border border-glass-border backdrop-blur-md">
      <div className="text-xs text-slate-400">{item.date}</div>
      <h4 className="mt-2 font-semibold">{item.title}</h4>
      <p className="mt-1 text-slate-300 text-sm">{item.summary}</p>
    </article>
  )
}

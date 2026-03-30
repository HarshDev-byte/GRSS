import Image from 'next/image'

export default function GalleryGrid({items}){
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {items.map(it => (
        <div key={it.id} className="rounded-lg overflow-hidden border border-glass-border bg-[#041025]">
          <Image src={it.src} alt={it.alt} width={400} height={240} className="w-full h-36 object-cover" />
        </div>
      ))}
    </div>
  )
}

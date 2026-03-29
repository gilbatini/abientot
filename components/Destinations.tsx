import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { DESTINATIONS } from '@/lib/constants'

export default function Destinations() {
  return (
    <section className="px-16 py-24 bg-[#FDFAF5] max-lg:px-8 max-md:px-6" id="destinations">
      <div className="flex items-end justify-between mb-14 flex-wrap gap-5">
        <div>
          <div className="eyebrow"><div className="eyebrow-bar" /><span className="eyebrow-tag">Destinations</span></div>
          <h2 className="sec-title">Discover <span className="text-gradient-teal">Uganda</span><br />& Beyond</h2>
        </div>
        <Link href="/safari-packages" className="inline-flex items-center gap-2 font-caps text-[9px] tracking-[0.2em] uppercase text-brand-teal hover:gap-4 transition-all duration-300">
          View all <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-[2fr_1fr_1fr] grid-rows-2 gap-4 h-[560px] max-lg:grid-cols-2 max-md:grid-cols-1 max-md:h-auto max-md:gap-4">
        {DESTINATIONS.map((dest, i) => (
          <div
            key={dest.name}
            className={`relative overflow-hidden rounded-2xl cursor-pointer group ${i === 0 ? 'row-span-2' : ''}`}
            style={{ minHeight: i === 0 ? undefined : '200px' }}
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{ backgroundImage: `url('${dest.image || `https://abientot-nextjs.vercel.app/images/gallery-${i+1}.jpg`}')`, backgroundColor: '#1B4332' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <span className="inline-block font-caps text-[8px] tracking-[0.22em] uppercase text-brand-gold border border-brand-gold/30 bg-brand-gold/15 rounded-full px-2.5 py-1 mb-2">
                {dest.tag}
              </span>
              <h3 className="font-display font-light text-white" style={{fontSize: i === 0 ? '38px' : '22px'}}>
                {dest.name}
              </h3>
              <p className="font-caps text-[8px] tracking-[0.2em] uppercase text-white/50 mt-1">{dest.country} · {dest.nights} nights</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { DESTINATIONS } from '@/lib/constants'

export default function Destinations() {
  return (
    <section className="px-16 py-28 bg-[#FDFAF5] max-lg:px-8 max-md:px-6" id="destinations">
      <div className="flex items-end justify-between mb-16 flex-wrap gap-5">
        <div>
          <div className="eyebrow"><div className="eyebrow-bar" /><span className="eyebrow-tag">Destinations</span></div>
          <h2 className="sec-title">Discover <span className="text-gradient-teal">Uganda</span><br />& Beyond</h2>
        </div>
        <Link
          href="/safari-packages"
          className="inline-flex items-center gap-2 font-caps text-[9px] tracking-[0.2em] uppercase text-brand-teal transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:gap-3.5"
        >
          View all <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
        </Link>
      </div>

      <div className="grid grid-cols-[2fr_1fr_1fr] grid-rows-2 gap-4 h-[580px] max-lg:grid-cols-2 max-md:grid-cols-1 max-md:h-auto max-md:gap-4">
        {DESTINATIONS.map((dest, i) => (
          <Link
            key={dest.name}
            href="/safari-packages"
            className={`relative overflow-hidden rounded-2xl cursor-pointer group block ${i === 0 ? 'row-span-2' : ''}`}
            style={{ minHeight: i !== 0 ? '200px' : undefined }}
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-108"
              style={{
                backgroundImage: `url('${dest.image}')`,
                backgroundColor: '#1B4332',
                transform: 'scale(1)',
              }}
            />

            {/* Persistent gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent transition-opacity duration-500 group-hover:opacity-60" />

            {/* Persistent info — fades out on hover */}
            <div className="absolute bottom-5 left-5 right-5 transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:opacity-0 group-hover:translate-y-2">
              <span className="inline-block font-caps text-[8px] tracking-[0.22em] uppercase text-brand-gold border border-brand-gold/30 bg-brand-gold/15 rounded-full px-2.5 py-1 mb-2">
                {dest.tag}
              </span>
              <h3
                className="font-display font-light text-white leading-tight"
                style={{ fontSize: i === 0 ? '38px' : '22px' }}
              >
                {dest.name}
              </h3>
              <p className="font-caps text-[8px] tracking-[0.2em] uppercase text-white/50 mt-1">
                {dest.country} · {dest.nights} nights
              </p>
            </div>

            {/* Hover reveal panel — slides up from bottom */}
            <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
              <div className="bg-gradient-to-t from-black/95 via-black/80 to-transparent px-5 pb-6 pt-16">
                <span className="inline-block font-caps text-[8px] tracking-[0.22em] uppercase text-brand-gold border border-brand-gold/30 bg-brand-gold/15 rounded-full px-2.5 py-1 mb-3">
                  {dest.tag}
                </span>
                <h3
                  className="font-display font-light text-white leading-tight mb-1"
                  style={{ fontSize: i === 0 ? '36px' : '21px' }}
                >
                  {dest.name}
                </h3>
                <p className="font-caps text-[8px] tracking-[0.2em] uppercase text-white/45 mb-4">
                  {dest.country} · {dest.nights} nights
                </p>
                <span className="inline-flex items-center gap-2 font-caps text-[9px] tracking-[0.18em] uppercase text-white bg-brand-teal/90 px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-brand-teal">
                  Explore <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

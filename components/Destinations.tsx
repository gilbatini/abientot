import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { DESTINATIONS } from '@/lib/constants'

export default function Destinations() {
  return (
    <section className="px-16 py-32 bg-white max-lg:px-8 max-md:px-6" id="destinations">
      {/* Header */}
      <div className="flex items-end justify-between mb-14 flex-wrap gap-5">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-7 h-px bg-brand-gold" />
            <span className="font-caps text-[9px] font-medium tracking-[0.26em] uppercase text-brand-gold">Destinations</span>
          </div>
          <div className="w-16 h-px bg-brand-gold mb-5" />
          <h2 className="font-display text-[clamp(40px,4.5vw,68px)] font-light leading-[1.06] tracking-[-0.01em] mb-0 text-brand-dark">
            Discover <span className="text-gradient-teal">Uganda</span><br />& Beyond
          </h2>
        </div>
        <Link
          href="/safari-packages"
          className="inline-flex items-center gap-2 font-caps text-[9px] tracking-[0.2em] uppercase text-brand-gold/70 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-brand-gold hover:gap-3.5"
        >
          View all <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
        </Link>
      </div>

      {/* Cards — tight gap for full-bleed magazine feel */}
      <div className="grid grid-cols-[2fr_1fr_1fr] grid-rows-2 gap-1.5 h-[640px] max-lg:grid-cols-2 max-md:grid-cols-1 max-md:h-auto max-md:gap-2">
        {DESTINATIONS.map((dest, i) => (
          <Link
            key={dest.name}
            href="/safari-packages"
            className={`relative overflow-hidden cursor-pointer group block rounded-sm ${i === 0 ? 'row-span-2' : ''}`}
            style={{ minHeight: i !== 0 ? '200px' : undefined }}
          >
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.06]"
              style={{
                backgroundImage: `url('${dest.image}')`,
                backgroundColor: '#1a2540',
                filter: 'saturate(1.15) contrast(1.08)',
              }}
            />

            {/* Base gradient — always present */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

            {/* Amber/gold hover wash — fades in on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
              style={{ background: 'linear-gradient(to top, rgba(180,110,0,0.55) 0%, rgba(180,110,0,0.15) 50%, transparent 100%)' }}
            />

            {/* Persistent info — fades out on hover */}
            <div className="absolute bottom-5 left-5 right-5 transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:opacity-0 group-hover:translate-y-2">
              <span className="inline-block font-caps text-[8px] tracking-[0.22em] uppercase text-brand-gold border border-brand-gold/30 bg-brand-gold/15 rounded-full px-2.5 py-1 mb-2">
                {dest.tag}
              </span>
              <h3
                className="font-display font-light text-white leading-tight"
                style={{ fontSize: i === 0 ? '44px' : '22px' }}
              >
                {dest.name}
              </h3>
              <p className="font-caps text-[8px] tracking-[0.2em] uppercase text-brand-gold/60 mt-1">
                {dest.country} · {dest.nights} nights
              </p>
            </div>

            {/* Hover reveal panel */}
            <div className="absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
              <div
                className="px-5 pb-6 pt-16 backdrop-blur-sm"
                style={{ background: 'linear-gradient(to top, rgba(26,10,0,0.95) 0%, rgba(26,10,0,0.75) 60%, transparent 100%)' }}
              >
                <span className="inline-block font-caps text-[8px] tracking-[0.22em] uppercase text-brand-gold border border-brand-gold/30 bg-brand-gold/15 rounded-full px-2.5 py-1 mb-3">
                  {dest.tag}
                </span>
                <h3
                  className="font-display font-light text-white leading-tight mb-1"
                  style={{ fontSize: i === 0 ? '40px' : '21px' }}
                >
                  {dest.name}
                </h3>
                <p className="font-caps text-[8px] tracking-[0.2em] uppercase text-brand-gold/50 mb-4">
                  {dest.country} · {dest.nights} nights
                </p>
                <span className="inline-flex items-center gap-2 font-caps text-[9px] tracking-[0.18em] uppercase text-[#0a0f1a] bg-brand-gold px-4 py-2 rounded-lg transition-all duration-200 hover:bg-brand-gold/90">
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

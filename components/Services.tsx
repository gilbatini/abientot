import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Plane, Car, Building2, Tent, Coffee, Telescope } from 'lucide-react'
import { SERVICES } from '@/lib/constants'

const ICONS: Record<string, React.ReactNode> = {
  plane:      <Plane      className="w-6 h-6" strokeWidth={1.5} />,
  car:        <Car        className="w-6 h-6" strokeWidth={1.5} />,
  building:   <Building2  className="w-6 h-6" strokeWidth={1.5} />,
  tent:       <Tent       className="w-6 h-6" strokeWidth={1.5} />,
  coffee:     <Coffee     className="w-6 h-6" strokeWidth={1.5} />,
  binoculars: <Telescope  className="w-6 h-6" strokeWidth={1.5} />,
}

const SERVICE_IMAGES: Record<string, string> = {
  plane:      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&auto=format&fit=crop',
  car:        'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&auto=format&fit=crop',
  building:   'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&auto=format&fit=crop',
  tent:       'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800&auto=format&fit=crop',
  coffee:     'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop',
  binoculars: 'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&auto=format&fit=crop',
}

export default function Services() {
  return (
    <section className="bg-[#F5F0E8]" id="services">
      {/* Section header */}
      <div className="px-16 pt-32 pb-16 max-lg:px-8 max-md:px-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-7 h-px bg-brand-gold" />
          <span className="font-caps text-[9px] font-medium tracking-[0.26em] uppercase text-brand-gold">Our Services</span>
        </div>
        <div className="w-16 h-px bg-brand-gold mb-5" />
        <h2 className="font-display text-[clamp(40px,4.5vw,68px)] font-light leading-[1.06] tracking-[-0.01em] text-brand-dark mb-4">
          Everything You Need,<br /><span className="text-gradient-teal">All in One Place</span>
        </h2>
        <p className="font-body text-[15px] font-light leading-[1.85] text-[#5A7751] max-w-xl">
          From luxury lodges to thrilling wildlife encounters, we handle every detail of your African adventure.
        </p>
      </div>

      {/* Alternating full-width rows */}
      <div className="divide-y divide-[#E2D9CC]">
        {SERVICES.map((svc, index) => {
          const imageLeft = index % 2 !== 0
          const isLight = index % 2 === 0

          const textCol = (
            <div
              key="text"
              className={`flex flex-col justify-center px-12 lg:px-16 py-16 max-md:px-8 max-md:py-12 ${imageLeft ? 'lg:order-2' : 'lg:order-1'} ${isLight ? 'bg-[#FAFAF7]' : 'bg-[#0d1a0d]'}`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-brand-gold mb-8 ${isLight ? 'bg-brand-gold/10' : 'bg-brand-gold/10'}`}>
                {ICONS[svc.icon]}
              </div>
              <h3 className={`font-display text-[clamp(28px,3vw,40px)] font-light leading-tight mb-4 ${isLight ? 'text-brand-dark' : 'text-white'}`}>
                {svc.title}
              </h3>
              <p className={`font-body text-[15px] leading-[1.85] mb-6 max-w-[480px] ${isLight ? 'text-[#5A7751]' : 'text-white/60'}`}>
                {svc.desc}
              </p>
              <ul className="flex flex-col gap-2.5 mb-8">
                {svc.features.map((f) => (
                  <li key={f} className={`flex items-center gap-3 font-body text-[13px] ${isLight ? 'text-[#4A6741]' : 'text-white/55'}`}>
                    <span className="w-1 h-1 rounded-full bg-brand-gold flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                href={svc.href}
                className={`inline-flex items-center gap-2 font-caps text-[9px] tracking-[0.2em] uppercase transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:gap-3 w-fit ${isLight ? 'text-brand-teal/70 hover:text-brand-teal' : 'text-brand-gold/60 hover:text-brand-gold'}`}
              >
                Learn more <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
              </Link>
            </div>
          )

          const imageCol = (
            <div
              key="image"
              className={`relative overflow-hidden min-h-[340px] lg:min-h-[480px] group ${imageLeft ? 'lg:order-1' : 'lg:order-2'}`}
            >
              <Image
                src={SERVICE_IMAGES[svc.icon]}
                alt={svc.title}
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
            </div>
          )

          return (
            <div key={svc.title} className="grid grid-cols-1 lg:grid-cols-2">
              {imageLeft ? [imageCol, textCol] : [textCol, imageCol]}
            </div>
          )
        })}
      </div>
    </section>
  )
}

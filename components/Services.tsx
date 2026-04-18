import Link from 'next/link'
import { ArrowRight, Plane, Car, Building2, Tent, Coffee, Telescope } from 'lucide-react'
import { SERVICES } from '@/lib/constants'

const ICONS: Record<string, React.ReactNode> = {
  plane:      <Plane      className="w-5 h-5" strokeWidth={1.5} />,
  car:        <Car        className="w-5 h-5" strokeWidth={1.5} />,
  building:   <Building2  className="w-5 h-5" strokeWidth={1.5} />,
  tent:       <Tent       className="w-5 h-5" strokeWidth={1.5} />,
  coffee:     <Coffee     className="w-5 h-5" strokeWidth={1.5} />,
  binoculars: <Telescope  className="w-5 h-5" strokeWidth={1.5} />,
}

export default function Services() {
  return (
    <section className="px-16 py-28 bg-white max-lg:px-8 max-md:px-6" id="services">
      <div className="max-w-2xl mb-16">
        <div className="eyebrow"><div className="eyebrow-bar" /><span className="eyebrow-tag">Our Services</span></div>
        <h2 className="sec-title">Everything You Need,<br /><span className="text-gradient-teal">All in One Place</span></h2>
        <p className="sec-subtitle">From luxury lodges to thrilling wildlife encounters, we handle every detail of your African adventure.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SERVICES.map((svc) => (
          <div
            key={svc.title}
            className="group relative bg-white border border-[#E8EDE6] rounded-2xl p-8 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-[0_20px_48px_-12px_rgba(26,46,26,0.12)]"
          >
            {/* Gold left-accent bar */}
            <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-brand-gold origin-center scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]" />

            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-[#F5F0E8] flex items-center justify-center text-brand-teal mb-6 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:bg-brand-teal group-hover:text-white group-hover:rounded-2xl">
              {ICONS[svc.icon]}
            </div>

            <h3 className="font-display text-[24px] font-light text-brand-dark mb-3 leading-tight">
              {svc.title}
            </h3>
            <p className="font-body text-[14px] leading-[1.85] text-[#5A7751] mb-5">
              {svc.desc}
            </p>

            <ul className="flex flex-col gap-2 mb-6">
              {svc.features.map((f) => (
                <li key={f} className="flex items-center gap-2.5 font-body text-[13px] text-[#5A7751]">
                  <span className="w-1 h-1 rounded-full bg-brand-gold flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            <Link
              href={svc.href}
              className="inline-flex items-center gap-2 font-caps text-[9px] tracking-[0.2em] uppercase text-brand-teal opacity-60 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:opacity-100 group-hover:gap-3"
            >
              Learn more <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

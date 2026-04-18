import Link from 'next/link'
import { ArrowRight, Plane, Car, Building2, Tent, Coffee, Binoculars } from 'lucide-react'
import { SERVICES } from '@/lib/constants'

const ICONS: Record<string, React.ReactNode> = {
  plane:      <Plane className="w-5 h-5" />,
  car:        <Car className="w-5 h-5" />,
  building:   <Building2 className="w-5 h-5" />,
  tent:       <Tent className="w-5 h-5" />,
  coffee:     <Coffee className="w-5 h-5" />,
  binoculars: <Binoculars className="w-5 h-5" />,
}

export default function Services() {
  return (
    <section className="px-16 py-24 bg-white max-lg:px-8 max-md:px-6" id="services">
      <div className="max-w-xl mb-14">
        <div className="eyebrow"><div className="eyebrow-bar" /><span className="eyebrow-tag">Our Services</span></div>
        <h2 className="sec-title">Everything You Need,<br /><span className="text-gradient-teal">All in One Place</span></h2>
        <p className="sec-subtitle">From luxury lodges to thrilling wildlife encounters, we handle every detail of your African adventure.</p>
      </div>

      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
        {SERVICES.map((svc) => (
          <div key={svc.title} className="card p-7 group">
            <div className="w-11 h-11 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-5 group-hover:bg-brand-teal group-hover:text-white transition-all duration-300">
              {ICONS[svc.icon]}
            </div>
            <h3 className="font-display text-[22px] font-light text-brand-dark mb-3 leading-tight">{svc.title}</h3>
            <p className="font-body text-[14px] leading-[1.8] text-[#4A6741] mb-4">{svc.desc}</p>
            <ul className="flex flex-col gap-1.5 mb-5">
              {svc.features.map((f) => (
                <li key={f} className="flex items-center gap-2 font-body text-[13px] text-[#4A6741]">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-teal/50 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Link href={svc.href} className="inline-flex items-center gap-2 font-caps text-[9px] tracking-[0.2em] uppercase text-brand-teal opacity-75 group-hover:opacity-100 group-hover:gap-3 transition-all duration-300">
              Learn More <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

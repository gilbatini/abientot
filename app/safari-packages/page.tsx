import type { Metadata } from 'next'
import { SERVICES, DESTINATIONS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Safari Packages | À Bientôt Tour & Travels',
  description: 'Browse our Uganda safari packages — gorilla trekking, wildlife safaris, glamping and more.',
}

export default function SafariPackagesPage() {
  return (
    <main className="pt-24 pb-24 px-16 max-lg:px-8 max-md:px-6 bg-[#FDFAF5] min-h-screen">
      <div className="mb-14">
        <div className="eyebrow"><div className="eyebrow-bar" /><span className="eyebrow-tag">Safari Packages</span></div>
        <h1 className="sec-title">Explore Our <span className="text-gradient-teal">Packages</span></h1>
        <p className="sec-subtitle">Every journey is crafted around your interests, pace, and budget.</p>
      </div>

      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
        {SERVICES.map(svc => (
          <div key={svc.title} className="bg-white border border-[#D8E8D0] rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
            <h3 className="font-display text-[22px] font-light text-brand-dark mb-2">{svc.title}</h3>
            <p className="font-body text-[14px] text-[#4A6741] leading-[1.8]">{svc.desc}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

import type { Metadata } from 'next'
import { BRAND } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About Us | À Bientôt Tour & Travels',
}

export default function AboutPage() {
  return (
    <main className="pt-24 pb-24 px-16 max-lg:px-8 max-md:px-6 bg-[#FDFAF5] min-h-screen">
      <div className="max-w-3xl mx-auto">
        <div className="eyebrow"><div className="eyebrow-bar" /><span className="eyebrow-tag">About Us</span></div>
        <h1 className="sec-title mb-6">Crafting Extraordinary<br /><span className="text-gradient-teal">African Journeys</span></h1>
        <p className="sec-subtitle mb-8">
          {BRAND.name} is a Kampala-based travel company with over 15 years of experience
          guiding adventurers across Uganda and East Africa. We believe every traveller
          deserves a journey tailored to their spirit.
        </p>
        <div className="grid grid-cols-2 gap-6 mt-10 max-md:grid-cols-1">
          {BRAND.stats.map(stat => (
            <div key={stat.label} className="bg-white border border-[#D8E8D0] rounded-2xl p-6">
              <span className="block font-display text-[48px] font-light text-brand-teal leading-none">{stat.value}</span>
              <span className="block font-caps text-[9px] tracking-[0.2em] uppercase text-[#8FA88A] mt-1">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

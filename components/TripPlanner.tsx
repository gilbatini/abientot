import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'

const STEPS = [
  { num: '01', label: 'Tell Us', title: 'Share your dream' },
  { num: '02', label: 'We Plan', title: 'Custom itinerary' },
  { num: '03', label: 'Explore', title: 'Your adventure begins' },
]

export default function TripPlanner() {
  return (
    <section className="px-16 py-28 bg-[#FDFAF5] text-center relative overflow-hidden max-lg:px-8 max-md:px-6">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-brand-teal/5 blur-[80px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-brand-gold/5 blur-[80px]" />
      </div>

      <div className="relative z-10">
        <div className="eyebrow justify-center mb-4"><div className="eyebrow-bar" /><span className="eyebrow-tag">Plan Your Trip</span><div className="eyebrow-bar" /></div>
        <h2 className="font-display font-light text-brand-dark mb-5" style={{fontSize:'clamp(52px,6vw,88px)', lineHeight:1.02, letterSpacing:'-0.02em'}}>
          Let's Make the <em className="italic font-light text-gradient-teal not-italic" style={{fontStyle:'italic'}}>Right Trip</em>
        </h2>
        <p className="font-body text-[16px] font-light leading-[1.85] text-[#4A6741] max-w-[560px] mx-auto mb-12">
          Gorilla trekking, wildlife safaris, cultural experiences — tell us what moves you and we'll build it perfectly.
        </p>

        {/* Steps */}
        <div className="flex items-center justify-center gap-0 mb-14 flex-wrap max-md:flex-col max-md:items-stretch max-md:max-w-sm max-md:mx-auto">
          {STEPS.map((step, i) => (
            <div key={step.num} className="flex items-center">
              <div className="flex items-center gap-3.5 bg-white border border-[#D8E8D0] rounded-xl px-6 py-4 shadow-sm">
                <div className="w-9 h-9 rounded-full bg-brand-teal flex items-center justify-center font-caps text-[10px] font-semibold tracking-[0.05em] text-white flex-shrink-0">
                  {step.num}
                </div>
                <div className="text-left">
                  <p className="font-caps text-[8px] tracking-[0.2em] uppercase text-[#8FA88A]">{step.label}</p>
                  <p className="font-display text-[17px] font-light text-brand-dark mt-0.5">{step.title}</p>
                </div>
              </div>
              {i < STEPS.length - 1 && (
                <span className="text-[#8FA88A] text-xl mx-4 max-md:hidden">→</span>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link href="/contact" className="btn-primary">
            Get a Free Quote <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="https://wa.me/256788138721"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-caps text-[10px] tracking-[0.18em] uppercase border border-[#D8E8D0] text-[#4A6741] px-8 py-4 rounded-lg hover:border-brand-teal hover:text-brand-teal transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  )
}

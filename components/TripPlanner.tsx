import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'

const STEPS = [
  { num: '01', label: 'Tell Us',   title: 'Share your dream' },
  { num: '02', label: 'We Plan',   title: 'Custom itinerary' },
  { num: '03', label: 'Explore',   title: 'Your adventure begins' },
]

export default function TripPlanner() {
  return (
    <section className="relative py-32 text-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1516026672322-bc52d61a4d2d?w=1600&auto=format&fit=crop')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.60)' }} />
      {/* Warm vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.35) 100%)' }}
      />

      <div className="relative z-10 px-16 max-lg:px-8 max-md:px-6">
        <div className="bg-white/8 backdrop-blur-md border border-white/15 rounded-3xl px-12 py-16 max-w-3xl mx-auto shadow-[0_16px_64px_rgba(0,0,0,0.2)] max-md:px-6 max-md:py-10">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-7 h-px bg-brand-gold" />
            <span className="font-caps text-[9px] font-medium tracking-[0.26em] uppercase text-brand-gold">Plan Your Trip</span>
            <div className="w-7 h-px bg-brand-gold" />
          </div>

          <h2
            className="font-display font-light leading-[1.02] tracking-[-0.02em] mb-6 mx-auto"
            style={{ fontSize: 'clamp(52px,7vw,100px)', maxWidth: '900px' }}
          >
            <span className="block text-white">Let&apos;s Make the</span>
            <em
              className="block not-italic italic"
              style={{
                background: 'linear-gradient(135deg, #e8d5b7, #f0c060, #d4a843)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Right Trip
            </em>
          </h2>

          <p className="font-body text-[16px] font-light leading-[1.85] text-white/65 max-w-[560px] mx-auto mb-14">
            Gorilla trekking, wildlife safaris, cultural experiences — tell us what moves you and we&apos;ll build it perfectly.
          </p>

          {/* Steps */}
          <div className="flex items-center justify-center gap-0 mb-14 flex-wrap max-md:flex-col max-md:items-stretch max-md:max-w-sm max-md:mx-auto">
            {STEPS.map((step, i) => (
              <div key={step.num} className="flex items-center">
                <div className="flex items-center gap-3.5 bg-white/8 border border-white/15 backdrop-blur-sm rounded-xl px-6 py-4">
                  <div className="w-9 h-9 rounded-full bg-brand-gold flex items-center justify-center font-caps text-[10px] font-semibold tracking-[0.05em] text-[#0a0f1a] flex-shrink-0">
                    {step.num}
                  </div>
                  <div className="text-left">
                    <p className="font-caps text-[8px] tracking-[0.2em] uppercase text-white/40">{step.label}</p>
                    <p className="font-display text-[17px] font-light text-white mt-0.5">{step.title}</p>
                  </div>
                </div>
                {i < STEPS.length - 1 && (
                  <span className="text-white/30 text-xl mx-4 max-md:hidden">→</span>
                )}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 font-caps text-[10px] font-bold tracking-[0.2em] uppercase bg-brand-gold text-[#0a0f1a] px-8 py-4 rounded-lg transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-brand-gold/90 hover:-translate-y-0.5"
            >
              Get a Free Quote <ArrowRight className="w-4 h-4" strokeWidth={2} />
            </Link>
            <a
              href="https://wa.me/256788138721"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-caps text-[10px] tracking-[0.18em] uppercase border border-white/30 text-white px-8 py-4 rounded-lg transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-white hover:bg-white/10"
            >
              <MessageCircle className="w-4 h-4" strokeWidth={1.5} /> WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

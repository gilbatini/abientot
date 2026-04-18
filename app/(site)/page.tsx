import { Headphones, Sparkles, CreditCard, Globe } from 'lucide-react'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Destinations from '@/components/Destinations'
import Services from '@/components/Services'
import Booking from '@/components/Booking'
import Testimonials from '@/components/Testimonials'
import Blog from '@/components/Blog'
import TripPlanner from '@/components/TripPlanner'

const Divider = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4A843]/30 to-transparent" />
)

const WHY_ITEMS = [
  {
    icon: <Headphones className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />,
    title: '24/7 Support',
    body: 'Real-time assistance at every stage — from planning to return. Peace of mind most agencies fail to guarantee.',
  },
  {
    icon: <Sparkles className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />,
    title: 'Tailor-Made Packages',
    body: 'Every itinerary is carefully designed around your preferences, budget, and travel pace — never a copy-paste tour.',
  },
  {
    icon: <CreditCard className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />,
    title: 'Flexible Payments',
    body: 'Secure your booking with a 30% deposit. We accept bank transfer, card, and mobile money on your schedule.',
  },
  {
    icon: <Globe className="w-6 h-6 text-brand-gold" strokeWidth={1.5} />,
    title: 'Practical Solutions',
    body: 'Visas, permits, transfers, accommodation — we handle every logistical detail so you arrive ready to explore.',
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Divider />

      {/* ── Why À Bientôt strip ── */}
      <section
        className="relative px-16 py-16 max-lg:px-8 max-md:px-6 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0d1525 0%, #1e2d4a 50%, #0d1525 100%)' }}
      >
        {/* Dot-grid texture */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #8ba3c7 1px, transparent 0)', backgroundSize: '32px 32px' }}
        />
        {/* Gold top line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent" />

        <div className="relative max-w-7xl mx-auto">
          {/* Header row */}
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <div className="eyebrow mb-3">
                <div className="eyebrow-bar" />
                <span className="eyebrow-tag text-brand-gold">Why Choose Us</span>
              </div>
              <h2
                className="font-display font-light text-white"
                style={{ fontSize: 'clamp(28px,3.5vw,44px)' }}
              >
                Why{' '}
                <em
                  className="not-italic italic"
                  style={{
                    background: 'linear-gradient(135deg, #e8d5b7, #f0c060, #d4a843)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  À Bientôt
                </em>{' '}
                stands out
              </h2>
            </div>
          </div>

          {/* 4 pillars */}
          <div className="grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
            {WHY_ITEMS.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-4 bg-white/5 border border-white/10 rounded-2xl px-6 py-7 transition-all duration-300 hover:bg-white/8 hover:border-white/18"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <h3 className="font-display font-light text-white text-[20px] leading-tight">{item.title}</h3>
                <p className="font-body text-[13px] leading-[1.8] text-white/55">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Gold bottom line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
      </section>

      <Divider />
      <Destinations />
      <Divider />
      <Services />
      <Divider />
      <Booking />
      <Divider />
      <Testimonials />
      <Divider />
      <Blog />
      <Divider />
      <TripPlanner />
    </>
  )
}

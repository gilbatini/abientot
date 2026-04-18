'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/constants'

const SLIDES = [
  { src: '/images/sunset-slide.jpeg',                                             alt: 'Tropical Island Escape' },
  { src: '/images/airport_pickup.jpg',                                            alt: 'Premium Airport Transfers' },
  { src: '/images/businessman-in-business-class-having-inflight-meal-768.jpeg',  alt: 'Business Class Travel' },
]

const ease = 'cubic-bezier(0.16, 1, 0.3, 1)'

function fadeUp(delay: string): React.CSSProperties {
  return { animation: `fadeUpIn 1s ${ease} both ${delay}` }
}

export default function Hero() {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % SLIDES.length), 7000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative w-full min-h-[100dvh] flex items-end overflow-hidden">
      {/* Slides */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ${i === slide ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url('${s.src}')` }}
        />
      ))}

      {/* Overlay */}
      <div
        className="absolute inset-0 z-[2]"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.40) 40%, rgba(0,0,0,0.65) 70%, rgba(0,0,0,0.95) 100%)' }}
      />

      {/* Content */}
      <div className="relative z-10 w-full px-16 pb-24 pt-32 grid grid-cols-[1fr_220px] items-end gap-12 max-lg:grid-cols-1 max-lg:px-8 max-md:px-6 max-md:pb-16">

        {/* Left */}
        <div className="relative">
          {/* Text backdrop */}
          <div
            className="absolute inset-y-0 -left-16 -right-8 z-[-1] max-md:-left-6"
            style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.50) 0%, transparent 100%)' }}
          />

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2.5 bg-white/10 border border-white/25 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6"
            style={fadeUp('0.05s')}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_12px_#D4A843] animate-pulse" />
            <span className="font-caps text-[9px] font-medium tracking-[0.22em] uppercase text-brand-gold">
              {BRAND.tagline}
            </span>
          </div>

          {/* H1 */}
          <h1
            className="font-display font-light leading-[0.9] tracking-[-0.02em] mb-6"
            style={{ fontSize: 'clamp(72px,10vw,140px)', textShadow: '0 2px 40px rgba(0,0,0,0.9), 0 4px 80px rgba(0,0,0,0.7)' }}
          >
            <span className="block text-white font-light" style={fadeUp('0.2s')}>
              Your Next
            </span>
            <span
              className="block italic font-normal"
              style={{
                ...fadeUp('0.35s'),
                background: 'linear-gradient(135deg, #e8d5b7, #f0c060, #d4a843)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Adventure
            </span>
            <span
              className="block font-caps text-white/55 not-italic uppercase"
              style={{ ...fadeUp('0.5s'), fontSize: '11px', letterSpacing: '0.28em', marginTop: '20px' }}
            >
              Crafted for those who dare to explore
            </span>
          </h1>

          {/* Description */}
          <p
            className="font-body text-[15px] font-light text-white/70 max-w-[460px] mb-11"
            style={{ ...fadeUp('0.6s'), lineHeight: 1.95 }}
          >
            From <strong className="text-white/88 font-medium">gorilla trekking in Bwindi</strong> to serene{' '}
            <strong className="text-white/88 font-medium">Lake Bunyonyi</strong> and thundering{' '}
            <strong className="text-white/88 font-medium">Murchison Falls</strong> —
            À Bientôt curates extraordinary journeys across Uganda and the world, tailored to every traveller.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-4 flex-wrap" style={fadeUp('0.75s')}>
            <Link href="/safari-packages" className="btn-primary">
              Explore Packages <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
            <Link href="/contact" className="btn-outline">
              Plan My Trip
            </Link>
          </div>
        </div>

        {/* Stats — hidden on mobile */}
        <div className="flex flex-col gap-3 max-lg:hidden" style={fadeUp('0.9s')}>
          {BRAND.stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/8 border border-white/12 backdrop-blur-md rounded-2xl px-5 py-4 transition-all duration-300 hover:bg-white/12 hover:border-white/20"
            >
              <span className="block font-display text-[42px] font-light text-brand-gold leading-none tracking-[-0.02em]">
                {stat.value}{stat.star && <span className="text-brand-gold text-2xl ml-1">★</span>}
              </span>
              <span className="block font-caps text-[8px] font-medium tracking-[0.22em] uppercase text-white/40 mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            className={`h-0.5 rounded-full transition-all duration-500 ${i === slide ? 'w-8 bg-brand-gold' : 'w-5 bg-white/30 hover:bg-white/50'}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 right-8 z-10 flex flex-col items-center gap-2 max-md:hidden">
        <span className="font-caps text-[8px] tracking-[0.3em] text-white/30 uppercase" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  )
}

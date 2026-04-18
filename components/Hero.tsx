'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/constants'

const SLIDES = [
  { src: '/images/sunset-slide.jpeg', alt: 'Tropical Island Escape', caption: 'Sun, sea & coconuts — your perfect getaway' },
  { src: '/images/airport_pickup.jpg', alt: 'Premium Airport Transfers', caption: 'Arrive in style — Mercedes S-Class from terminal to lodge' },
  { src: '/images/businessman-in-business-class-having-inflight-meal-768.jpeg', alt: 'Business Class Travel', caption: 'First class comfort on every flight we book for you' },
]

export default function Hero() {
  const [slide, setSlide] = useState(0)
  const [captionVisible, setCaptionVisible] = useState(true)

  useEffect(() => {
    setCaptionVisible(false)
    const show = setTimeout(() => setCaptionVisible(true), 100)
    return () => clearTimeout(show)
  }, [slide])

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % SLIDES.length), 7000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative w-full h-screen min-h-[680px] flex items-end overflow-hidden">
      {/* Slides */}
      {SLIDES.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2000ms] ${i === slide ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url('${s.src}')` }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 z-[2]" style={{
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 30%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.92) 100%)'
      }} />

      {/* Content */}
      <div className="relative z-10 w-full px-16 pb-24 pt-32 grid grid-cols-[1fr_220px] items-end gap-12 max-lg:grid-cols-1 max-lg:px-8 max-md:px-6 max-md:pb-16">

        {/* Left */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 bg-white/10 border border-white/25 backdrop-blur-sm rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shadow-[0_0_12px_#D4A843] animate-pulse" />
            <span className="font-caps text-[9px] font-medium tracking-[0.22em] uppercase text-brand-gold">
              {BRAND.tagline}
            </span>
          </div>

          {/* H1 */}
          <h1 className="font-display font-light leading-[0.92] tracking-[-0.02em] mb-6" style={{fontSize:'clamp(64px,9vw,130px)', textShadow: '0 2px 24px rgba(0,0,0,0.6)'}}>
            <span className="block text-white font-light">Your Next</span>
            <span className="block italic font-normal" style={{
              background:'linear-gradient(135deg, #e8d5b7, #f0c060, #d4a843)',
              WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', backgroundClip:'text'
            }}>
              Adventure
            </span>
            <span className="block font-caps text-white/60 not-italic" style={{fontSize:'0.22em', letterSpacing:'0.3em', marginTop:'16px'}}>
              Crafted for those who dare to explore
            </span>
            <span
              className={`block font-caps text-white/50 text-[10px] tracking-[0.2em] uppercase transition-opacity duration-700 ${captionVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{fontSize:'0.16em', marginTop:'10px'}}
            >
              {SLIDES[slide].caption}
            </span>
          </h1>

          {/* Description */}
          <p className="font-body text-[15px] font-light leading-[1.9] text-white/75 max-w-[500px] mb-11">
            From <strong className="text-white/88 font-medium">gorilla trekking in Bwindi</strong> to serene <strong className="text-white/88 font-medium">Lake Bunyonyi</strong> and thundering <strong className="text-white/88 font-medium">Murchison Falls</strong> —
            À Bientôt curates extraordinary journeys across Uganda and the world, tailored to every traveller.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-4 flex-wrap">
            <Link href="/safari-packages" className="btn-primary">
              Explore Packages <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn-outline">
              Plan My Trip
            </Link>
          </div>
        </div>

        {/* Stats — hidden on mobile */}
        <div className="flex flex-col gap-3 max-lg:hidden">
          {BRAND.stats.map((stat) => (
            <div key={stat.label} className="bg-white/8 border border-white/12 backdrop-blur-md rounded-2xl px-5 py-4">
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
            className={`h-0.5 rounded-full transition-all duration-500 ${i === slide ? 'w-8 bg-brand-gold' : 'w-5 bg-white/30'}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-10 right-8 z-10 flex flex-col items-center gap-2 max-md:hidden">
        <span className="font-caps text-[8px] tracking-[0.3em] text-white/30 uppercase" style={{writingMode:'vertical-rl'}}>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </section>
  )
}

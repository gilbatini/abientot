import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/constants'

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" strokeWidth={0} />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [featured, ...rest] = TESTIMONIALS

  return (
    <section className="px-16 py-32 bg-[#F5F0E8] max-lg:px-8 max-md:px-6" id="testimonials">
      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-7 h-px bg-brand-gold" />
          <span className="font-caps text-[9px] font-medium tracking-[0.26em] uppercase text-brand-gold">Testimonials</span>
        </div>
        <div className="w-16 h-px bg-brand-gold mb-5" />
        <h2 className="font-display text-[clamp(40px,4.5vw,68px)] font-light leading-[1.06] tracking-[-0.01em] mb-4 text-brand-dark">
          What Travellers<br /><span className="text-gradient-teal">Are Saying</span>
        </h2>
        <p className="font-body text-[15px] font-light leading-[1.85] text-[#5A7751] max-w-xl">
          Real stories from real adventurers who explored Africa with us.
        </p>
      </div>

      {/* Asymmetric editorial grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-5 mb-10">

        {/* Featured card */}
        <div className="relative bg-white/80 backdrop-blur-md border border-[#E2D9CC]/60 rounded-3xl p-10 overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-[0_24px_56px_-16px_rgba(0,0,0,0.12)]">
          {/* Giant decorative quote */}
          <div
            className="absolute -top-6 left-4 font-display italic leading-none text-brand-teal/8 select-none pointer-events-none"
            style={{ fontSize: '200px', lineHeight: 1 }}
            aria-hidden="true"
          >
            &ldquo;
          </div>
          <div className="relative">
            <Stars count={featured.rating} />
            <blockquote className="font-display text-[20px] font-light leading-[1.65] text-brand-dark/85 italic mt-5 mb-8">
              &ldquo;{featured.text}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4 pt-6 border-t border-[#E2D9CC]">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-gold/80 to-brand-gold/50 flex items-center justify-center font-display text-xl text-[#0a1a0a] font-medium flex-shrink-0">
                {featured.avatar}
              </div>
              <div>
                <p className="font-caps text-[9.5px] font-semibold tracking-[0.16em] uppercase text-brand-dark/90">
                  {featured.name}
                </p>
                <p className="font-body text-[12px] text-[#8A9E84] mt-0.5">{featured.country}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column — 2 stacked cards */}
        <div className="flex flex-col gap-5">
          {rest.map((t) => (
            <div
              key={t.name}
              className="relative bg-white/70 backdrop-blur-sm border border-[#E2D9CC]/50 rounded-2xl p-8 overflow-hidden flex-1 shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-[0_20px_48px_-12px_rgba(0,0,0,0.10)] hover:border-brand-gold/20"
            >
              {/* Decorative quote */}
              <div
                className="absolute -top-3 left-3 font-display italic leading-none text-brand-teal/8 select-none pointer-events-none"
                style={{ fontSize: '120px', lineHeight: 1 }}
                aria-hidden="true"
              >
                &ldquo;
              </div>
              <div className="relative">
                <Stars count={t.rating} />
                <blockquote className="font-body text-[14px] leading-[1.85] text-[#4A6741] italic mt-4 mb-6">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-5 border-t border-[#E2D9CC]/70">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-gold/70 to-brand-gold/40 flex items-center justify-center font-display text-lg text-[#0a1a0a] font-medium flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-caps text-[9px] font-semibold tracking-[0.16em] uppercase text-brand-dark/80">
                      {t.name}
                    </p>
                    <p className="font-body text-[12px] text-[#8A9E84] mt-0.5">{t.country}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA strip */}
      <div className="flex items-center justify-between bg-brand-gold/8 border border-brand-gold/25 rounded-2xl px-8 py-6 flex-wrap gap-4">
        <div>
          <h3 className="font-display text-[28px] font-light text-brand-dark mb-1 leading-tight">
            Ready to write your own story?
          </h3>
          <p className="font-body text-[14px] text-[#5A7751]">
            Join thousands of adventurers who made Uganda their destination.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2.5 font-caps text-[10px] font-bold tracking-[0.2em] uppercase bg-brand-gold text-[#0a1a0a] px-8 py-4 rounded-lg transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-brand-gold/90 hover:-translate-y-0.5 flex-shrink-0"
        >
          Start Planning <ArrowRight className="w-4 h-4" strokeWidth={2} />
        </Link>
      </div>
    </section>
  )
}

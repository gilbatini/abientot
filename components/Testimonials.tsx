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
    <section className="px-16 py-28 bg-[#FDFAF5] max-lg:px-8 max-md:px-6" id="testimonials">
      <div className="mb-16">
        <div className="eyebrow"><div className="eyebrow-bar" /><span className="eyebrow-tag">Testimonials</span></div>
        <h2 className="sec-title">What Travellers<br /><span className="text-gradient-teal">Are Saying</span></h2>
        <p className="sec-subtitle">Real stories from real adventurers who explored Africa with us.</p>
      </div>

      {/* Asymmetric editorial grid: 1 large featured left + 2 stacked right */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-6 mb-10">

        {/* Featured testimonial */}
        <div className="relative bg-[#F5F0E8] border border-[#E2D9CC] rounded-3xl p-10 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-[0_24px_56px_-16px_rgba(26,46,26,0.14)]">
          {/* Giant decorative quote mark */}
          <div
            className="absolute -top-6 left-4 font-display italic leading-none text-brand-teal/10 select-none pointer-events-none"
            style={{ fontSize: '200px', lineHeight: 1 }}
            aria-hidden="true"
          >
            &ldquo;
          </div>

          <div className="relative">
            <Stars count={featured.rating} />
            <blockquote className="font-display text-[20px] font-light leading-[1.65] text-brand-dark italic mt-5 mb-8">
              &ldquo;{featured.text}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4 pt-6 border-t border-[#D8CFC4]">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-teal to-[#239e97] flex items-center justify-center font-display text-xl text-white flex-shrink-0">
                {featured.avatar}
              </div>
              <div>
                <p className="font-caps text-[9.5px] font-semibold tracking-[0.16em] uppercase text-brand-dark">
                  {featured.name}
                </p>
                <p className="font-body text-[12px] text-[#8FA88A] mt-0.5">{featured.country}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right column — 2 stacked cards */}
        <div className="flex flex-col gap-6">
          {rest.map((t) => (
            <div
              key={t.name}
              className="relative bg-white border border-[#E8EDE6] rounded-2xl p-8 overflow-hidden flex-1 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-[0_20px_48px_-12px_rgba(26,46,26,0.1)]"
            >
              {/* Decorative quote */}
              <div
                className="absolute -top-3 left-3 font-display italic leading-none text-brand-gold/12 select-none pointer-events-none"
                style={{ fontSize: '120px', lineHeight: 1 }}
                aria-hidden="true"
              >
                &ldquo;
              </div>

              <div className="relative">
                <Stars count={t.rating} />
                <blockquote className="font-body text-[14px] leading-[1.85] text-[#5A7751] italic mt-4 mb-6">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-5 border-t border-[#E8EDE6]">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-teal/80 to-[#239e97] flex items-center justify-center font-display text-lg text-white flex-shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-caps text-[9px] font-semibold tracking-[0.16em] uppercase text-brand-dark">
                      {t.name}
                    </p>
                    <p className="font-body text-[12px] text-[#8FA88A] mt-0.5">{t.country}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA strip */}
      <div className="flex items-center justify-between bg-gradient-to-r from-brand-teal/6 to-brand-gold/6 border border-[#D8E8D0] rounded-2xl px-8 py-6 flex-wrap gap-4">
        <div>
          <h3 className="font-display text-[28px] font-light text-brand-dark mb-1 leading-tight">
            Ready to write your own story?
          </h3>
          <p className="font-body text-[14px] text-[#5A7751]">
            Join thousands of adventurers who made Uganda their destination.
          </p>
        </div>
        <Link href="/contact" className="btn-primary flex-shrink-0">
          Start Planning <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
        </Link>
      </div>
    </section>
  )
}

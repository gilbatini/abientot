import type { Metadata } from 'next'
import Link from 'next/link'
import { Star, ArrowRight, Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Traveller Reviews | À Bientôt Tour & Travels',
  description: 'Read what our clients say about their Uganda safari experiences with À Bientôt Tour & Travels.',
}

const PLATFORMS = [
  {
    name: 'TripAdvisor',
    rating: '5.0',
    reviews: '180+',
    color: 'bg-[#00AF87]',
    href: '#',
    logo: 'T',
  },
  {
    name: 'Google Reviews',
    rating: '4.9',
    reviews: '120+',
    color: 'bg-[#4285F4]',
    href: '#',
    logo: 'G',
  },
]

export default function ReviewsPage() {
  return (
    <main className="bg-[#FDFAF5] min-h-screen">

      {/* ── Hero ── */}
      <section className="pt-36 pb-20 px-16 max-lg:px-8 max-md:px-6 bg-[#F5F0E8]">
        <div className="max-w-3xl">
          <div className="eyebrow"><div className="eyebrow-bar" /><span className="eyebrow-tag">Reviews</span></div>
          <h1 className="sec-title mb-5">
            What Our Travellers<br />
            <span className="text-gradient-teal">Are Saying</span>
          </h1>
          <p className="font-body text-[16px] font-light leading-[1.9] text-[#4A6741] max-w-xl">
            Real stories from real adventurers. Every review is unedited and submitted
            directly by travellers who explored Africa with us.
          </p>
        </div>
      </section>

      {/* ── Rating summary ── */}
      <section className="px-16 py-14 max-lg:px-8 max-md:px-6 bg-white border-y border-[#D8E8D0]">
        <div className="flex flex-wrap items-center justify-between gap-8">

          {/* Overall score */}
          <div className="flex items-center gap-6">
            <div className="text-center">
              <span className="block font-display text-[72px] font-light text-brand-teal leading-none">4.9</span>
              <div className="flex gap-1 justify-center mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="font-body text-[12px] text-[#8FA88A] mt-1">300+ verified reviews</p>
            </div>
            <div className="h-16 w-px bg-[#D8E8D0] max-sm:hidden" />
            <div className="flex flex-col gap-2 max-sm:hidden">
              {[
                { label: '5 stars', pct: 92 },
                { label: '4 stars', pct: 6 },
                { label: '3 stars', pct: 2 },
              ].map(({ label, pct }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="font-body text-[12px] text-[#8FA88A] w-12">{label}</span>
                  <div className="w-32 h-1.5 bg-[#D8E8D0] rounded-full overflow-hidden">
                    <div className="h-full bg-brand-gold rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="font-body text-[12px] text-[#4A6741]">{pct}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Platform buttons */}
          <div className="flex flex-wrap gap-4">
            {PLATFORMS.map(p => (
              <a
                key={p.name}
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 bg-white border border-[#D8E8D0] rounded-2xl px-6 py-4 hover:border-brand-teal hover:shadow-md transition-all duration-300 group"
              >
                <div className={`w-10 h-10 rounded-xl ${p.color} flex items-center justify-center text-white font-caps font-bold text-[16px] flex-shrink-0`}>
                  {p.logo}
                </div>
                <div>
                  <p className="font-caps text-[10px] tracking-[0.16em] uppercase text-brand-dark font-semibold">{p.name}</p>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <Star className="w-3 h-3 fill-brand-gold text-brand-gold" />
                    <span className="font-body text-[13px] text-[#4A6741]">{p.rating}</span>
                    <span className="font-body text-[12px] text-[#8FA88A]">· {p.reviews} reviews</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial cards ── */}
      <section className="px-16 py-20 max-lg:px-8 max-md:px-6">
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} className="bg-white border border-[#D8E8D0] rounded-3xl p-10 max-md:p-7 relative overflow-hidden">
              {/* Large quote mark */}
              <Quote className="absolute top-6 right-8 w-16 h-16 text-brand-teal/6" strokeWidth={1} />

              <div className="flex items-start gap-6 max-sm:flex-col">
                {/* Avatar */}
                <div className="flex-shrink-0 flex flex-col items-center gap-2">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-teal to-[#239e97] flex items-center justify-center font-display text-3xl font-light text-white">
                    {t.avatar}
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-3 h-3 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                </div>

                <div className="flex-1">
                  <p className="font-display text-[19px] font-light italic leading-[1.75] text-[#2E4A2E] mb-5">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="font-caps text-[10px] font-semibold tracking-[0.18em] uppercase text-brand-dark">{t.name}</p>
                      <p className="font-body text-[12px] text-[#8FA88A] mt-0.5">{t.country}</p>
                    </div>
                    <span className="ml-auto font-caps text-[8px] tracking-[0.2em] uppercase text-brand-teal/60 border border-brand-teal/20 bg-brand-teal/5 rounded-full px-3 py-1">
                      Verified Traveller
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-16 py-20 max-lg:px-8 max-md:px-6 bg-[#F5F0E8]">
        <div className="max-w-2xl mx-auto text-center">
          <div className="eyebrow justify-center"><div className="eyebrow-bar" /><span className="eyebrow-tag">Your Turn</span><div className="eyebrow-bar" /></div>
          <h2 className="sec-title text-[clamp(32px,3.5vw,52px)]">
            Ready to Write<br />
            <span className="text-gradient-teal">Your Own Story?</span>
          </h2>
          <p className="sec-subtitle mx-auto mb-8">
            Join hundreds of adventurers who made Uganda their destination.
            Let us craft your perfect African journey.
          </p>
          <Link href="/contact" className="btn-primary">
            Start Planning <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </main>
  )
}

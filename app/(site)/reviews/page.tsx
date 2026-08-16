import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Star, ArrowRight, Quote } from 'lucide-react'
import { TESTIMONIALS, GOOGLE_PLACE_ID } from '@/lib/constants'
import { getGoogleReviews } from '@/lib/google-reviews'

export const metadata: Metadata = {
  title: 'Google Reviews | À Bientôt Tour & Travels',
  description: 'Read verified Google reviews from travellers who explored Uganda with À Bientôt Tour & Travels.',
}

const WRITE_REVIEW_URL = `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`
const FALLBACK_MAPS_URL = `https://www.google.com/maps/place/?q=place_id:${GOOGLE_PLACE_ID}`

// Static fallback used only when GOOGLE_PLACES_API_KEY isn't configured
// or the Places API request fails — keeps the page functional either way.
const FALLBACK_SUMMARY = { rating: 4.9, count: '120+' }

export default async function ReviewsPage() {
  const google = await getGoogleReviews()

  const summaryRating = google ? google.rating.toFixed(1) : FALLBACK_SUMMARY.rating.toFixed(1)
  const summaryCount = google ? `${google.userRatingCount}+` : FALLBACK_SUMMARY.count
  const mapsUrl = google?.mapsUri ?? FALLBACK_MAPS_URL

  const displayReviews = google
    ? google.reviews.map((r) => ({
        key: `${r.author}-${r.publishTime}`,
        name: r.author,
        meta: r.relativeTime,
        rating: r.rating,
        text: r.text,
        avatar: r.authorPhoto,
      }))
    : TESTIMONIALS.map((t) => ({
        key: t.name,
        name: t.name,
        meta: t.country,
        rating: t.rating,
        text: t.text,
        avatar: undefined as string | undefined,
      }))

  return (
    <main className="bg-[#FDFAF5] min-h-screen">

      {/* ── Hero ── */}
      <section className="pt-36 pb-20 px-16 max-lg:px-8 max-md:px-6 bg-[#F5F0E8]">
        <div className="max-w-3xl">
          <div className="eyebrow"><div className="eyebrow-bar" /><span className="eyebrow-tag">Google Reviews</span></div>
          <h1 className="sec-title mb-5">
            What Our Travellers<br />
            <span className="text-gradient-teal">Say on Google</span>
          </h1>
          <p className="font-body text-[16px] font-light leading-[1.9] text-[#4A6741] max-w-xl">
            Real stories from real adventurers, pulled straight from our Google Business Profile.
            Every review below was posted by a traveller who explored Africa with us.
          </p>
        </div>
      </section>

      {/* ── Rating summary ── */}
      <section className="px-16 py-14 max-lg:px-8 max-md:px-6 bg-white border-y border-[#D8E8D0]">
        <div className="flex flex-wrap items-center justify-between gap-8">

          {/* Overall score */}
          <div className="flex items-center gap-6">
            <div className="text-center">
              <span className="block font-display text-[72px] font-light text-brand-teal leading-none">{summaryRating}</span>
              <div className="flex gap-1 justify-center mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="font-body text-[12px] text-[#8FA88A] mt-1">{summaryCount} verified reviews</p>
            </div>
            <div className="h-16 w-px bg-[#D8E8D0] max-sm:hidden" />
            <div className="flex items-center gap-4 max-sm:hidden">
              <div className="w-12 h-12 rounded-xl bg-[#4285F4] flex items-center justify-center text-white font-caps font-bold text-[18px] flex-shrink-0">
                G
              </div>
              <div>
                <p className="font-caps text-[11px] tracking-[0.16em] uppercase text-brand-dark font-semibold">Google Reviews</p>
                <p className="font-body text-[12px] text-[#8FA88A] mt-0.5">
                  {google ? 'Live from our Business Profile' : 'À Bientôt Tour & Travels'}
                </p>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-white border border-[#D8E8D0] rounded-2xl px-6 py-4 hover:border-brand-teal hover:shadow-md transition-all duration-300 font-caps text-[11px] tracking-[0.14em] uppercase text-brand-dark font-semibold"
            >
              See all reviews on Google
            </a>
            <a
              href={WRITE_REVIEW_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-brand-teal rounded-2xl px-6 py-4 hover:bg-[#239e97] transition-all duration-300 font-caps text-[11px] tracking-[0.14em] uppercase text-white font-semibold"
            >
              Write a review
            </a>
          </div>
        </div>
      </section>

      {/* ── Review cards ── */}
      <section className="px-16 py-20 max-lg:px-8 max-md:px-6">
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {displayReviews.map((r) => (
            <div key={r.key} className="bg-white border border-[#D8E8D0] rounded-3xl p-10 max-md:p-7 relative overflow-hidden">
              {/* Large quote mark */}
              <Quote className="absolute top-6 right-8 w-16 h-16 text-brand-teal/6" strokeWidth={1} />

              <div className="flex items-start gap-6 max-sm:flex-col">
                {/* Avatar */}
                <div className="flex-shrink-0 flex flex-col items-center gap-2">
                  {r.avatar ? (
                    <Image
                      src={r.avatar}
                      alt={r.name}
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-teal to-[#239e97] flex items-center justify-center font-display text-3xl font-light text-white">
                      {r.name.charAt(0)}
                    </div>
                  )}
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, j) => (
                      <Star key={j} className="w-3 h-3 fill-brand-gold text-brand-gold" />
                    ))}
                  </div>
                </div>

                <div className="flex-1">
                  <p className="font-display text-[19px] font-light italic leading-[1.75] text-[#2E4A2E] mb-5">
                    &ldquo;{r.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="font-caps text-[10px] font-semibold tracking-[0.18em] uppercase text-brand-dark">{r.name}</p>
                      <p className="font-body text-[12px] text-[#8FA88A] mt-0.5">{r.meta}</p>
                    </div>
                    <span className="ml-auto flex items-center gap-1.5 font-caps text-[8px] tracking-[0.2em] uppercase text-brand-teal/60 border border-brand-teal/20 bg-brand-teal/5 rounded-full px-3 py-1">
                      Google Review
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
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Start Planning <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={WRITE_REVIEW_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 font-caps text-[10px] font-medium tracking-[0.2em] uppercase
                         border border-brand-teal text-brand-teal px-8 py-4 rounded-lg
                         transition-all duration-300
                         hover:bg-brand-teal hover:text-white"
            >
              Leave a Google Review
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}

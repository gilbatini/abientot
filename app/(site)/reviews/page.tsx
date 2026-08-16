import type { Metadata } from 'next'
import Link from 'next/link'
import { Star, ArrowRight, Quote } from 'lucide-react'
import { TESTIMONIALS, GOOGLE_WRITE_REVIEW_URL, GOOGLE_REVIEWS_URL } from '@/lib/constants'
import { getGoogleReviews, type GoogleReview } from '@/lib/google-reviews'

export const metadata: Metadata = {
  title: 'Traveller Reviews | À Bientôt Tour & Travels',
  description: 'Read what our clients say about their Uganda safari experiences with À Bientôt Tour & Travels — live reviews from Google.',
}

// Revalidate the page daily so fresh Google reviews come through.
export const revalidate = 86400

// Shape shared by live Google reviews and curated fallback testimonials.
type Card = {
  author: string
  meta: string
  rating: number
  text: string
  photoUrl?: string
  authorUrl?: string
  source: 'google' | 'curated'
}

function toCards(google: GoogleReview[]): Card[] {
  return google.map((r) => ({
    author: r.author,
    meta: r.relativeTime || 'Posted on Google',
    rating: r.rating,
    text: r.text,
    photoUrl: r.photoUrl,
    authorUrl: r.authorUrl,
    source: 'google',
  }))
}

function fallbackCards(): Card[] {
  return TESTIMONIALS.map((t) => ({
    author: t.name,
    meta: t.country,
    rating: t.rating,
    text: t.text,
    source: 'curated',
  }))
}

const GoogleGlyph = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
    <path fill="#4285F4" d="M45 24c0-1.6-.1-2.7-.4-3.9H24v7h12c-.2 1.9-1.6 4.7-4.5 6.6l-.04.3 6.5 5 .45.05C42.6 35.6 45 30.3 45 24z" />
    <path fill="#34A853" d="M24 46c5.9 0 10.8-1.9 14.4-5.3l-6.9-5.3c-1.8 1.3-4.3 2.2-7.5 2.2-5.7 0-10.6-3.8-12.3-9.1l-.3.02-6.7 5.2-.1.3C8.1 40.9 15.5 46 24 46z" />
    <path fill="#FBBC05" d="M11.7 28.5c-.5-1.4-.7-2.9-.7-4.5s.3-3.1.7-4.5l-.01-.3-6.8-5.3-.2.1C3.2 16.9 2.5 20.3 2.5 24s.7 7.1 2 10l7.2-5.5z" />
    <path fill="#EB4335" d="M24 10.7c4 0 6.8 1.7 8.3 3.2l6.1-6C34.8 4.4 29.9 2.5 24 2.5 15.5 2.5 8.1 7.6 4.7 14l7.1 5.5C13.4 14.5 18.3 10.7 24 10.7z" />
  </svg>
)

export default async function ReviewsPage() {
  const live = await getGoogleReviews()

  const cards = live && live.reviews.length > 0 ? toCards(live.reviews) : fallbackCards()
  const isLive = live !== null && live.reviews.length > 0

  const ratingValue = live?.rating != null ? live.rating.toFixed(1) : '4.9'
  const totalLabel = live?.total != null
    ? `${live.total.toLocaleString()} Google review${live.total === 1 ? '' : 's'}`
    : '300+ verified reviews'
  const mapsUri = live?.mapsUri ?? GOOGLE_REVIEWS_URL

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
            Real stories from real adventurers.{' '}
            {isLive
              ? 'These are live reviews pulled straight from our Google Business profile.'
              : 'Every review is unedited and submitted directly by travellers who explored Africa with us.'}
          </p>
        </div>
      </section>

      {/* ── Rating summary ── */}
      <section className="px-16 py-14 max-lg:px-8 max-md:px-6 bg-white border-y border-[#D8E8D0]">
        <div className="flex flex-wrap items-center justify-between gap-8">

          {/* Overall score */}
          <div className="flex items-center gap-6">
            <div className="text-center">
              <span className="block font-display text-[72px] font-light text-brand-teal leading-none">{ratingValue}</span>
              <div className="flex gap-1 justify-center mt-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="font-body text-[12px] text-[#8FA88A] mt-1">{totalLabel}</p>
            </div>
            <div className="h-16 w-px bg-[#D8E8D0] max-sm:hidden" />
            <div className="max-sm:hidden">
              <div className="flex items-center gap-2 mb-2">
                <GoogleGlyph className="w-5 h-5" />
                <span className="font-caps text-[11px] tracking-[0.16em] uppercase text-brand-dark font-semibold">
                  {isLive ? 'Live from Google' : 'Rated on Google'}
                </span>
              </div>
              <p className="font-body text-[13px] font-light leading-[1.7] text-[#4A6741] max-w-xs">
                {isLive
                  ? 'Updated automatically from our verified Google Business profile.'
                  : 'Trusted by hundreds of travellers across Google & TripAdvisor.'}
              </p>
            </div>
          </div>

          {/* Platform buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href={mapsUri}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 bg-white border border-[#D8E8D0] rounded-2xl px-6 py-4 hover:border-brand-teal hover:shadow-md transition-all duration-300"
            >
              <GoogleGlyph className="w-9 h-9 flex-shrink-0" />
              <div>
                <p className="font-caps text-[10px] tracking-[0.16em] uppercase text-brand-dark font-semibold">Google Reviews</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <Star className="w-3 h-3 fill-brand-gold text-brand-gold" />
                  <span className="font-body text-[13px] text-[#4A6741]">{ratingValue}</span>
                  {live?.total != null && (
                    <span className="font-body text-[12px] text-[#8FA88A]">· {live.total.toLocaleString()} reviews</span>
                  )}
                </div>
              </div>
            </a>
            <a
              href={GOOGLE_WRITE_REVIEW_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 bg-brand-teal hover:bg-[#239e97] text-white rounded-2xl px-6 py-4 font-caps text-[11px] tracking-[0.16em] uppercase font-semibold transition-colors duration-300"
            >
              <Star className="w-4 h-4 fill-white text-white" />
              Write a review
            </a>
          </div>
        </div>
      </section>

      {/* ── Review cards ── */}
      <section className="px-16 py-20 max-lg:px-8 max-md:px-6">
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-6 max-w-5xl mx-auto">
          {cards.map((c, i) => (
            <div key={`${c.author}-${i}`} className="bg-white border border-[#D8E8D0] rounded-3xl p-8 max-md:p-6 relative overflow-hidden flex flex-col">
              <Quote className="absolute top-5 right-6 w-14 h-14 text-brand-teal/6" strokeWidth={1} />

              {/* Header: avatar + name + stars */}
              <div className="flex items-center gap-4 mb-5">
                {c.photoUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={c.photoUrl}
                    alt={c.author}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-teal to-[#239e97] flex items-center justify-center font-display text-2xl font-light text-white flex-shrink-0">
                    {c.author.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    {c.authorUrl ? (
                      <a href={c.authorUrl} target="_blank" rel="noreferrer" className="font-caps text-[11px] font-semibold tracking-[0.14em] uppercase text-brand-dark hover:text-brand-teal transition-colors truncate">
                        {c.author}
                      </a>
                    ) : (
                      <span className="font-caps text-[11px] font-semibold tracking-[0.14em] uppercase text-brand-dark truncate">{c.author}</span>
                    )}
                    {c.source === 'google' && <GoogleGlyph className="w-3.5 h-3.5 flex-shrink-0" />}
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star
                          key={j}
                          className={`w-3 h-3 ${j < c.rating ? 'fill-brand-gold text-brand-gold' : 'fill-[#E5E0D5] text-[#E5E0D5]'}`}
                        />
                      ))}
                    </div>
                    <span className="font-body text-[11px] text-[#8FA88A]">{c.meta}</span>
                  </div>
                </div>
              </div>

              <p className="font-display text-[17px] font-light italic leading-[1.7] text-[#2E4A2E]">
                &ldquo;{c.text}&rdquo;
              </p>
            </div>
          ))}
        </div>

        {isLive && (
          <p className="text-center font-body text-[12px] text-[#8FA88A] mt-10">
            Showing our most recent Google reviews.{' '}
            <a href={mapsUri} target="_blank" rel="noreferrer" className="text-brand-teal hover:underline">
              See all reviews on Google →
            </a>
          </p>
        )}
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

import {
  GOOGLE_PLACE_ID,
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  TESTIMONIALS,
  type Review,
} from './constants'

export type ReviewsData = {
  reviews: Review[]
  rating: number
  count: number
  /** true when `reviews` came live from Google; false when using the static fallback. */
  live: boolean
}

// How long (seconds) Next.js caches the Places API response before refetching.
// 6h keeps the site fresh while staying comfortably inside the free tier.
const REVALIDATE_SECONDS = 60 * 60 * 6

const FALLBACK: ReviewsData = {
  reviews: TESTIMONIALS,
  rating: GOOGLE_RATING,
  count: GOOGLE_REVIEW_COUNT,
  live: false,
}

// Shape of a single review from the Places API (New). Only the fields we use.
type PlacesReview = {
  rating?: number
  text?: { text?: string }
  originalText?: { text?: string }
  relativePublishTimeDescription?: string
  authorAttribution?: { displayName?: string }
}

type PlacesResponse = {
  rating?: number
  userRatingCount?: number
  reviews?: PlacesReview[]
}

function mapReview(r: PlacesReview): Review {
  const name = r.authorAttribution?.displayName?.trim() || 'Google reviewer'
  const text = (r.text?.text ?? r.originalText?.text ?? '').trim()
  return {
    name,
    country: '',
    rating: Math.round(r.rating ?? 5),
    text,
    avatar: name.charAt(0).toUpperCase(),
    source: 'google',
    date: r.relativePublishTimeDescription,
  }
}

/**
 * Fetch the latest Google reviews via the Places API (New).
 *
 * Never throws: on a missing API key, a non-OK response, a network error, or an
 * empty/textless review set it returns the static fallback so the page always
 * renders. Set GOOGLE_PLACES_API_KEY (server-side only) to enable the live feed.
 *
 * Note: the Places API returns at most 5 reviews and does not expose reviewer
 * location, so `country` is left blank for live reviews.
 */
export async function getGoogleReviews(): Promise<ReviewsData> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  if (!apiKey) return FALLBACK

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${GOOGLE_PLACE_ID}?languageCode=en`,
      {
        headers: {
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'rating,userRatingCount,reviews',
        },
        next: { revalidate: REVALIDATE_SECONDS },
      },
    )

    if (!res.ok) {
      console.error(`[google-reviews] Places API returned ${res.status}`)
      return FALLBACK
    }

    const data = (await res.json()) as PlacesResponse

    // Keep only reviews that actually have written text (skip rating-only ones,
    // which would render as empty cards).
    const reviews = (data.reviews ?? [])
      .map(mapReview)
      .filter((r) => r.text.length > 0)

    if (reviews.length === 0) return FALLBACK

    return {
      reviews,
      rating: data.rating ?? GOOGLE_RATING,
      count: data.userRatingCount ?? GOOGLE_REVIEW_COUNT,
      live: true,
    }
  } catch (err) {
    console.error('[google-reviews] fetch failed:', err)
    return FALLBACK
  }
}

import { GOOGLE_PLACE_ID, GOOGLE_REVIEWS_URL } from './constants'

/**
 * Live Google reviews, fetched server-side from the Google Places API (New).
 *
 * Requires `GOOGLE_PLACES_API_KEY` in the environment (Google Cloud project with
 * the "Places API (New)" enabled and billing turned on). When the key is missing
 * or the request fails, `getGoogleReviews()` returns `null` and callers fall back
 * to curated testimonials — so the page never breaks.
 *
 * NOTE: Google's API returns at most 5 reviews (its "most relevant" selection).
 * There is no official way to retrieve the full list of reviews for a place.
 */

export type GoogleReview = {
  author: string
  authorUrl?: string
  photoUrl?: string
  rating: number
  text: string
  relativeTime: string
}

export type GooglePlaceReviews = {
  rating: number | null
  total: number | null
  reviews: GoogleReview[]
  mapsUri: string
}

const PLACES_ENDPOINT = `https://places.googleapis.com/v1/places/${GOOGLE_PLACE_ID}`
const FIELD_MASK = 'id,rating,userRatingCount,googleMapsUri,reviews'

type RawReview = {
  rating?: number
  text?: { text?: string }
  originalText?: { text?: string }
  relativePublishTimeDescription?: string
  authorAttribution?: {
    displayName?: string
    uri?: string
    photoUri?: string
  }
}

export async function getGoogleReviews(): Promise<GooglePlaceReviews | null> {
  const key = process.env.GOOGLE_PLACES_API_KEY
  if (!key) return null

  try {
    const res = await fetch(`${PLACES_ENDPOINT}?languageCode=en`, {
      headers: {
        'X-Goog-Api-Key': key,
        'X-Goog-FieldMask': FIELD_MASK,
      },
      // Google review data changes slowly and the API is billed per call —
      // cache the response for 24h.
      next: { revalidate: 60 * 60 * 24 },
    })

    if (!res.ok) return null

    const data: {
      rating?: number
      userRatingCount?: number
      googleMapsUri?: string
      reviews?: RawReview[]
    } = await res.json()

    const reviews: GoogleReview[] = (data.reviews ?? [])
      .map((r) => ({
        author: r.authorAttribution?.displayName ?? 'Google user',
        authorUrl: r.authorAttribution?.uri,
        photoUrl: r.authorAttribution?.photoUri,
        rating: r.rating ?? 5,
        text: r.text?.text ?? r.originalText?.text ?? '',
        relativeTime: r.relativePublishTimeDescription ?? '',
      }))
      .filter((r) => r.text.trim().length > 0)

    return {
      rating: data.rating ?? null,
      total: data.userRatingCount ?? null,
      reviews,
      mapsUri: data.googleMapsUri ?? GOOGLE_REVIEWS_URL,
    }
  } catch {
    return null
  }
}

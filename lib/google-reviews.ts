import { GOOGLE_PLACE_ID } from './constants'

export type GoogleReview = {
  author: string
  authorPhoto?: string
  rating: number
  text: string
  relativeTime: string
  publishTime: string
}

export type GooglePlaceReviews = {
  rating: number
  userRatingCount: number
  mapsUri: string
  reviews: GoogleReview[]
}

// Server-only: reads the Places API (New) "Place Details" endpoint.
// Requires GOOGLE_PLACES_API_KEY to be set — returns null when it isn't
// configured (or the request fails) so the page can fall back gracefully.
export async function getGoogleReviews(): Promise<GooglePlaceReviews | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY
  if (!apiKey) return null

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${GOOGLE_PLACE_ID}?languageCode=en`,
      {
        headers: {
          'X-Goog-Api-Key': apiKey,
          'X-Goog-FieldMask': 'rating,userRatingCount,googleMapsUri,reviews',
        },
        // Google reviews change slowly — cache for a day.
        next: { revalidate: 86400 },
      }
    )

    if (!res.ok) return null

    const data = await res.json()
    if (!Array.isArray(data?.reviews) || data.reviews.length === 0) return null

    return {
      rating: data.rating ?? 0,
      userRatingCount: data.userRatingCount ?? 0,
      mapsUri: data.googleMapsUri ?? `https://www.google.com/maps/place/?q=place_id:${GOOGLE_PLACE_ID}`,
      reviews: data.reviews.map((r: Record<string, any>) => ({
        author: r.authorAttribution?.displayName ?? 'Google user',
        authorPhoto: r.authorAttribution?.photoUri,
        rating: r.rating ?? 5,
        text: r.text?.text ?? r.originalText?.text ?? '',
        relativeTime: r.relativePublishTimeDescription ?? '',
        publishTime: r.publishTime ?? '',
      })),
    }
  } catch {
    return null
  }
}

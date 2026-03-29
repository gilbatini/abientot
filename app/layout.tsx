import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'À Bientôt Tour & Travels | Uganda Safari & Travel Experts',
  description: 'Experience gorilla trekking, wildlife safaris, and the breathtaking landscapes of East Africa with our expert local guides. Uganda — The Pearl of Africa.',
  keywords: ['Uganda safari', 'gorilla trekking', 'wildlife tours', 'Bwindi', 'Murchison Falls', 'travel Uganda'],
  openGraph: {
    title: 'À Bientôt Tour & Travels',
    description: 'Extraordinary safari journeys across Uganda and East Africa.',
    url: 'https://abientot.vercel.app',
    siteName: 'À Bientôt Tour & Travels',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

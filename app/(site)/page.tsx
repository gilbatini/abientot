import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Destinations from '@/components/Destinations'
import Services from '@/components/Services'
import Booking from '@/components/Booking'
import Testimonials from '@/components/Testimonials'
import Blog from '@/components/Blog'
import TripPlanner from '@/components/TripPlanner'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Destinations />
      <Services />
      <Booking />
      <Testimonials />
      <Blog />
      <TripPlanner />
    </>
  )
}

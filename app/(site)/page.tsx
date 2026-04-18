import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Destinations from '@/components/Destinations'
import Services from '@/components/Services'
import Booking from '@/components/Booking'
import Testimonials from '@/components/Testimonials'
import Blog from '@/components/Blog'
import TripPlanner from '@/components/TripPlanner'

const Divider = () => (
  <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4A843]/30 to-transparent" />
)

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Divider />
      <Destinations />
      <Divider />
      <Services />
      <Divider />
      <Booking />
      <Divider />
      <Testimonials />
      <Divider />
      <Blog />
      <Divider />
      <TripPlanner />
    </>
  )
}

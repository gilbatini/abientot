import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Clock, Users, Star, Plane, Car, Building, Tent, Coffee, Eye } from 'lucide-react'
import { DESTINATIONS, SERVICES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Safari Packages | À Bientôt Tour & Travels',
  description: 'Browse Uganda safari packages — gorilla trekking, Murchison Falls, Queen Elizabeth NP, glamping, and more. Tailor-made for every traveller.',
}

const PACKAGES = [
  {
    dest: 'Bwindi Forest',
    title: 'Gorilla Trekking Safari',
    duration: '3 Days / 2 Nights',
    groupSize: 'Up to 8 people',
    rating: 5.0,
    reviews: 142,
    price: '$850',
    tag: 'Best Seller',
    tagColor: 'bg-brand-earth/10 text-brand-earth border-brand-earth/20',
    image: 'https://abientot-nextjs.vercel.app/images/gallery-1.jpg',
    includes: ['Gorilla trekking permit', 'Park entrance fees', 'Expert guide', 'Accommodation', 'Airport transfers'],
    slug: 'gorilla-trekking',
  },
  {
    dest: 'Murchison Falls',
    title: 'Murchison Falls Adventure',
    duration: '4 Days / 3 Nights',
    groupSize: 'Up to 12 people',
    rating: 4.9,
    reviews: 98,
    price: '$650',
    tag: 'Popular',
    tagColor: 'bg-brand-teal/10 text-brand-teal border-brand-teal/20',
    image: 'https://abientot-nextjs.vercel.app/images/gallery-2.jpg',
    includes: ['Game drives (x3)', 'Nile boat cruise', 'Park entrance fees', 'Full board lodge', 'Airport transfers'],
    slug: 'murchison-falls',
  },
  {
    dest: 'Queen Elizabeth NP',
    title: 'Queen Elizabeth Safari',
    duration: '3 Days / 2 Nights',
    groupSize: 'Up to 10 people',
    rating: 4.8,
    reviews: 76,
    price: '$580',
    tag: 'Family Friendly',
    tagColor: 'bg-brand-gold/10 text-brand-gold border-brand-gold/20',
    image: 'https://abientot-nextjs.vercel.app/images/gallery-3.jpg',
    includes: ['Kazinga Channel cruise', 'Game drives (x2)', 'Tree-climbing lion tracking', 'Accommodation', 'Transfers'],
    slug: 'queen-elizabeth',
  },
  {
    dest: 'Lake Bunyonyi',
    title: 'Lake Bunyonyi Retreat',
    duration: '3 Days / 2 Nights',
    groupSize: 'Up to 8 people',
    rating: 4.9,
    reviews: 54,
    price: '$450',
    tag: 'Relaxation',
    tagColor: 'bg-[#3B82F6]/10 text-[#3B82F6] border-[#3B82F6]/20',
    image: 'https://abientot-nextjs.vercel.app/images/gallery-4.jpg',
    includes: ['Island hopping by canoe', 'Cultural village visit', 'Lakeside lodge', 'All meals included', 'Transfers'],
    slug: 'lake-bunyonyi',
  },
  {
    dest: 'Kidepo Valley',
    title: 'Kidepo Valley Expedition',
    duration: '5 Days / 4 Nights',
    groupSize: 'Up to 8 people',
    rating: 5.0,
    reviews: 31,
    price: '$1,200',
    tag: 'Off the Beaten Path',
    tagColor: 'bg-brand-earth/10 text-brand-earth border-brand-earth/20',
    image: 'https://abientot-nextjs.vercel.app/images/gallery-5.jpg',
    includes: ['Private charter flight option', 'Game drives (x4)', 'Narus Valley drives', 'Luxury tented camp', 'All meals'],
    slug: 'kidepo-valley',
  },
  {
    dest: 'Uganda',
    title: 'Uganda Big 5 Grand Tour',
    duration: '8 Days / 7 Nights',
    groupSize: 'Up to 8 people',
    rating: 5.0,
    reviews: 22,
    price: '$2,400',
    tag: 'Premium',
    tagColor: 'bg-brand-gold/10 text-brand-gold border-brand-gold/20',
    image: 'https://abientot-nextjs.vercel.app/images/gallery-1.jpg',
    includes: ['Gorilla & chimp permits', 'Bwindi + QENP + Murchison', 'Luxury lodges', 'All game drives', 'All transfers'],
    slug: 'big-5-grand-tour',
  },
]

const ICONS: Record<string, React.ReactNode> = {
  plane:      <Plane className="w-5 h-5" />,
  car:        <Car className="w-5 h-5" />,
  building:   <Building className="w-5 h-5" />,
  tent:       <Tent className="w-5 h-5" />,
  coffee:     <Coffee className="w-5 h-5" />,
  binoculars: <Eye className="w-5 h-5" />,
}

export default function SafariPackagesPage() {
  return (
    <main className="bg-[#FDFAF5] min-h-screen">

      {/* ── Hero ── */}
      <section className="pt-36 pb-20 px-16 max-lg:px-8 max-md:px-6 bg-[#F5F0E8]">
        <div className="max-w-4xl">
          <div className="eyebrow"><div className="eyebrow-bar" /><span className="eyebrow-tag">Safari Packages</span></div>
          <h1 className="sec-title mb-6">
            Explore Our<br />
            <span className="text-gradient-teal">Uganda Safaris</span>
          </h1>
          <p className="font-body text-[16px] font-light leading-[1.9] text-[#4A6741] max-w-2xl mb-8">
            Every journey is crafted around your interests, pace, and budget. From intimate
            gorilla treks to sweeping multi-park grand tours — find your perfect African adventure.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Request Custom Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://wa.me/256788138721" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2.5 font-caps text-[10px] font-medium tracking-[0.2em] uppercase border border-[#D8E8D0] text-[#4A6741] px-8 py-4 rounded-lg transition-all duration-300 hover:border-brand-teal hover:text-brand-teal bg-white">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── Packages Grid ── */}
      <section className="px-16 py-24 max-lg:px-8 max-md:px-6">
        <div className="mb-12">
          <div className="eyebrow"><div className="eyebrow-bar" /><span className="eyebrow-tag">Tour Packages</span></div>
          <h2 className="sec-title text-[clamp(28px,3vw,48px)]">Handcrafted <span className="text-gradient-teal">Itineraries</span></h2>
          <p className="sec-subtitle">All prices per person. Group discounts available. Contact us for tailor-made options.</p>
        </div>

        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
          {PACKAGES.map(pkg => (
            <div key={pkg.slug} className="card group flex flex-col">
              {/* Image */}
              <div className="relative overflow-hidden h-52 flex-shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className={`inline-block font-caps text-[8px] tracking-[0.2em] uppercase border rounded-full px-2.5 py-1 ${pkg.tagColor}`}>
                    {pkg.tag}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <p className="font-caps text-[8px] tracking-[0.2em] uppercase text-white/60">{pkg.dest}</p>
                    <h3 className="font-display text-[20px] font-light text-white leading-tight">{pkg.title}</h3>
                  </div>
                  <div className="text-right">
                    <p className="font-caps text-[8px] tracking-[0.12em] uppercase text-white/60">From</p>
                    <p className="font-display text-[24px] font-light text-brand-gold leading-none">{pkg.price}</p>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                {/* Meta */}
                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-[#D8E8D0]">
                  <div className="flex items-center gap-1.5 text-[12px] text-[#4A6741]">
                    <Clock className="w-3.5 h-3.5 text-brand-teal" />
                    {pkg.duration}
                  </div>
                  <div className="flex items-center gap-1.5 text-[12px] text-[#4A6741]">
                    <Users className="w-3.5 h-3.5 text-brand-teal" />
                    {pkg.groupSize}
                  </div>
                  <div className="flex items-center gap-1 text-[12px] text-[#4A6741] ml-auto">
                    <Star className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                    {pkg.rating} <span className="text-[#8FA88A]">({pkg.reviews})</span>
                  </div>
                </div>

                {/* Includes */}
                <ul className="flex flex-col gap-1.5 mb-6 flex-1">
                  {pkg.includes.map(item => (
                    <li key={item} className="flex items-center gap-2 font-body text-[13px] text-[#4A6741]">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-teal/50 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link href="/contact" className="btn-primary justify-center mt-auto">
                  Enquire Now <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section className="px-16 py-20 max-lg:px-8 max-md:px-6 bg-white border-t border-[#D8E8D0]">
        <div className="mb-12">
          <div className="eyebrow"><div className="eyebrow-bar" /><span className="eyebrow-tag">All Services</span></div>
          <h2 className="sec-title text-[clamp(28px,3vw,48px)]">Everything You Need, <span className="text-gradient-teal">All in One Place</span></h2>
          <p className="sec-subtitle">From flights to glamping, we handle every detail of your African adventure.</p>
        </div>

        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
          {SERVICES.map(svc => (
            <div key={svc.title} className="card p-7 group">
              <div className="w-11 h-11 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal mb-5 group-hover:bg-brand-teal group-hover:text-white transition-all duration-300">
                {ICONS[svc.icon]}
              </div>
              <h3 className="font-display text-[22px] font-light text-brand-dark mb-3 leading-tight">{svc.title}</h3>
              <p className="font-body text-[14px] leading-[1.8] text-[#4A6741] mb-4">{svc.desc}</p>
              <ul className="flex flex-col gap-1.5 mb-5">
                {svc.features.map(f => (
                  <li key={f} className="flex items-center gap-2 font-body text-[13px] text-[#4A6741]">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal/50 flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="inline-flex items-center gap-2 font-caps text-[9px] tracking-[0.2em] uppercase text-brand-teal opacity-75 group-hover:opacity-100 group-hover:gap-3 transition-all duration-300">
                Enquire <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── Custom Itinerary CTA ── */}
      <section className="px-16 py-20 max-lg:px-8 max-md:px-6 bg-[#F5F0E8]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="eyebrow justify-center"><div className="eyebrow-bar" /><span className="eyebrow-tag">Bespoke Travel</span><div className="eyebrow-bar" /></div>
          <h2 className="sec-title text-[clamp(32px,3.5vw,52px)]">
            Don&apos;t See What<br />
            <span className="text-gradient-teal">You&apos;re Looking For?</span>
          </h2>
          <p className="sec-subtitle mx-auto mb-8">
            Tell us your dream trip. Our safari specialists will build a custom itinerary
            just for you — any park, any duration, any budget.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Build My Custom Safari <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://wa.me/256788138721" target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2.5 font-caps text-[10px] font-medium tracking-[0.2em] uppercase border border-brand-teal text-brand-teal px-8 py-4 rounded-lg transition-all duration-300 hover:bg-brand-teal hover:text-white">
              WhatsApp a Specialist
            </a>
          </div>
        </div>
      </section>

    </main>
  )
}

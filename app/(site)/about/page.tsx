import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin, Phone, Mail, Check } from 'lucide-react'
import { BRAND } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About Us | À Bientôt Tour & Travels',
  description: "Learn about À Bientôt Tour & Travels — Kampala's premier safari company with 15+ years crafting East African journeys.",
}

const TEAM = [
  {
    name: 'Faridah Sebbowa',
    role: 'CEO',
    bio: "Faridah leads À Bientôt Tour & Travels with a passion for delivering world-class safari experiences. Her vision drives the company's commitment to excellence and sustainable tourism across East Africa.",
    initial: 'F',
    photo: '/Team/imgi_6_ridah.jpg',
  },
  {
    name: 'Ramlah Nampenja',
    role: 'Executive Director',
    bio: 'Ramlah oversees operations and strategic growth at À Bientôt. Her dedication to client satisfaction and deep knowledge of the African travel landscape make every journey exceptional.',
    initial: 'R',
    photo: '/Team/imgi_6_ram_edited.jpg',
  },
  {
    name: 'Moses Eriyau',
    role: 'Director',
    bio: 'Moses brings extensive experience in African tourism and business development. He plays a key role in forging partnerships and expanding the company\'s reach across the continent.',
    initial: 'M',
    photo: '/Team/imgi_6_moz.jpg',
  },
  {
    name: 'Caroline Apidi',
    role: 'Director of Finance',
    bio: 'Caroline manages the financial operations of À Bientôt with precision and integrity. Her expertise ensures every client gets outstanding value on their safari investment.',
    initial: 'C',
    photo: '/Team/imgi_6_caro_edited.jpg',
  },
  {
    name: 'Kayondo Twaha',
    role: 'Director',
    bio: "Twaha contributes strategic leadership and a deep passion for Uganda's natural wonders. He helps shape the company's direction and ensures our safaris remain truly authentic.",
    initial: 'K',
    photo: '/Team/imgi_6_twaha_edited.jpg',
  },
  {
    name: 'Remmy Ssekanjako',
    role: 'Director of IT',
    bio: 'Remmy drives the technology vision at À Bientôt, ensuring our digital platforms deliver seamless experiences for clients booking their dream African safaris.',
    initial: 'R',
    photo: '/Team/imgi_6_remmy.jpg',
  },
  {
    name: 'Patience Nyanja',
    role: 'Office Administrator',
    bio: 'Patience keeps the À Bientôt office running with quiet precision. From coordinating bookings to managing client communications, she ensures every journey begins with a seamless experience behind the scenes.',
    initial: 'P',
    photo: '/images/team/patience-nyanja.jpeg',
  },
  {
    name: 'Nakiguli Shamilah',
    role: 'Office Administrator',
    bio: 'Shamilah brings warmth and professionalism to every client interaction. Her attention to detail and dedication to service excellence make her an indispensable part of the À Bientôt team.',
    initial: 'N',
    photo: '/images/team/nakiguli-shamilah.jpeg',
  },
]

const VALUES = [
  {
    title: 'Locally Owned & Operated',
    desc: 'We are proudly Ugandan. Every shilling spent with us stays in the communities we serve, supporting local guides, lodges, and conservation efforts.',
    icon: '🌍',
  },
  {
    title: 'Tailor-Made Journeys',
    desc: 'No two travellers are alike. We build every itinerary from scratch around your interests, pace, and budget — never a copy-paste package.',
    icon: '✏️',
  },
  {
    title: 'Conservation First',
    desc: 'We partner exclusively with eco-certified lodges and actively contribute to gorilla habitat protection in Bwindi and Mgahinga forests.',
    icon: '🦍',
  },
]

const FAQS = [
  {
    q: 'When is the best time to visit Uganda?',
    a: 'Uganda can be visited year-round, but the dry seasons (June–August and December–February) offer the best wildlife viewing and trekking conditions. The wet seasons bring lush landscapes and fewer crowds.',
  },
  {
    q: 'Do I need a visa to visit Uganda?',
    a: 'Most nationalities require a visa. East Africa Tourist Visas are available on arrival and online, covering Uganda, Kenya, and Rwanda. We guide all our clients through the process.',
  },
  {
    q: 'How fit do I need to be for gorilla trekking?',
    a: 'Gorilla trekking involves hiking through rainforest terrain for 1–8 hours. A moderate level of fitness is recommended. We match each client to the most suitable gorilla family based on their fitness level.',
  },
  {
    q: 'What is included in your safari packages?',
    a: 'All packages include airport transfers, accommodation, park entry fees, gorilla/chimp permits where applicable, expert guide, and all game drives. International flights are typically excluded.',
  },
  {
    q: 'Are your tours suitable for families with children?',
    a: 'Absolutely. We design family-friendly itineraries with game drives, boat cruises, and cultural experiences suitable for all ages. Gorilla trekking requires participants to be at least 15 years old.',
  },
  {
    q: 'What is your payment and cancellation policy?',
    a: 'A 30% deposit confirms your booking. The balance is due 60 days before departure. We accept bank transfer, credit card, and mobile money. Cancellation terms vary by package — full details provided on booking.',
  },
]

export default function AboutPage() {
  return (
    <main className="bg-[#FDFAF5] min-h-screen">

      {/* ── Hero ── */}
      <section className="pt-36 pb-20 px-16 max-lg:px-8 max-md:px-6 bg-[#F5F0E8]">
        <div className="max-w-4xl">
          <div className="eyebrow"><div className="eyebrow-bar" /><span className="eyebrow-tag">About Us</span></div>
          <h1 className="sec-title mb-6">
            Crafting Extraordinary<br />
            <span className="text-gradient-teal">African Journeys</span>
          </h1>
          <p className="font-body text-[16px] font-light leading-[1.9] text-[#4A6741] max-w-2xl mb-5">
            Founded in Kampala, Uganda, À Bientôt Tour & Travels has spent over 15 years
            turning the Pearl of Africa into memories that last a lifetime. We are not a
            call centre — we are a team of local experts who live and breathe East Africa.
          </p>
          <div className="flex items-center gap-2 text-[13px] text-[#8FA88A]">
            <MapPin className="w-4 h-4 text-brand-teal flex-shrink-0" />
            <span className="font-body">{BRAND.address}</span>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="px-16 py-14 max-lg:px-8 max-md:px-6 bg-white border-y border-[#D8E8D0]">
        <div className="grid grid-cols-4 gap-8 max-lg:grid-cols-2 max-md:grid-cols-2">
          {BRAND.stats.map(stat => (
            <div key={stat.label} className="text-center">
              <span className="block font-display text-[52px] font-light text-brand-teal leading-none">
                {stat.value}
                {'star' in stat && stat.star ? <span className="text-brand-gold text-[30px]"> ★</span> : null}
              </span>
              <span className="block font-caps text-[9px] tracking-[0.24em] uppercase text-[#8FA88A] mt-2">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="px-16 py-24 max-lg:px-8 max-md:px-6">
        <div className="grid grid-cols-2 gap-16 items-center max-lg:grid-cols-1 max-lg:gap-10">
          <div>
            <div className="eyebrow"><div className="eyebrow-bar" /><span className="eyebrow-tag">Our Story</span></div>
            <h2 className="sec-title text-[clamp(32px,3.5vw,52px)]">
              Born From a<br /><span className="text-gradient-teal">Love of Africa</span>
            </h2>
            <p className="font-body text-[15px] leading-[1.9] text-[#4A6741] mb-5">
              À Bientôt was founded with one belief: Uganda deserves to be at the top of every
              traveller&apos;s Africa bucket list. We started small — two guides, one land cruiser,
              and an unrelenting passion for sharing the Pearl of Africa with the world.
            </p>
            <p className="font-body text-[15px] leading-[1.9] text-[#4A6741] mb-8">
              Today we run hundreds of tours annually across Uganda, Rwanda, Kenya, and Tanzania,
              but our ethos has never changed. Every client is treated like family. Every itinerary
              is crafted by hand. Every experience is designed to exceed expectations.
            </p>
            <Link href="/contact" className="btn-primary">
              Plan Your Journey <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://abientot-nextjs.vercel.app/images/gallery-1.jpg"
              alt="Bwindi Impenetrable Forest"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-5 left-5">
              <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2.5">
                <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
                <span className="font-caps text-[9px] tracking-[0.2em] uppercase text-brand-dark">Est. in Kampala, Uganda</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="px-16 py-20 max-lg:px-8 max-md:px-6 bg-[#F5F0E8]">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="eyebrow justify-center"><div className="eyebrow-bar" /><span className="eyebrow-tag">Why Choose Us</span><div className="eyebrow-bar" /></div>
          <h2 className="sec-title text-[clamp(32px,3.5vw,52px)]">What Sets Us <span className="text-gradient-teal">Apart</span></h2>
        </div>
        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-1">
          {VALUES.map(v => (
            <div key={v.title} className="bg-white border border-[#D8E8D0] rounded-2xl p-8">
              <span className="text-4xl mb-5 block">{v.icon}</span>
              <h3 className="font-display text-[22px] font-light text-brand-dark mb-3">{v.title}</h3>
              <p className="font-body text-[14px] leading-[1.85] text-[#4A6741]">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Team ── */}
      <section className="px-16 py-24 max-lg:px-8 max-md:px-6" id="team">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="eyebrow justify-center"><div className="eyebrow-bar" /><span className="eyebrow-tag">The Team</span><div className="eyebrow-bar" /></div>
          <h2 className="sec-title text-[clamp(32px,3.5vw,52px)]">Meet Our <span className="text-gradient-teal">Experts</span></h2>
          <p className="sec-subtitle mx-auto">Our guides are not just knowledgeable — they are passionate storytellers who bring Africa to life.</p>
        </div>
        <div className="grid grid-cols-4 gap-8 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 max-w-6xl mx-auto">
          {TEAM.map(member => (
            <div key={member.name} className="card p-8 text-center">
              {member.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-20 h-20 rounded-full object-cover object-top mx-auto mb-5 ring-2 ring-brand-teal/20"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-brand-teal to-[#239e97] flex items-center justify-center font-display text-4xl font-light text-white mx-auto mb-5">
                  {member.initial}
                </div>
              )}
              <h3 className="font-display text-[20px] font-light text-brand-dark">{member.name}</h3>
              <p className="font-caps text-[8.5px] tracking-[0.2em] uppercase text-brand-teal mt-1 mb-4">{member.role}</p>
              <p className="font-body text-[13.5px] leading-[1.85] text-[#4A6741]">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="px-16 py-20 max-lg:px-8 max-md:px-6 bg-white" id="faq">
        <div className="max-w-3xl mx-auto">
          <div className="eyebrow"><div className="eyebrow-bar" /><span className="eyebrow-tag">FAQ</span></div>
          <h2 className="sec-title text-[clamp(32px,3.5vw,52px)] mb-12">Common <span className="text-gradient-teal">Questions</span></h2>
          <div className="flex flex-col gap-4">
            {FAQS.map((faq, i) => (
              <div key={i} className="border border-[#D8E8D0] rounded-2xl p-6 bg-[#FDFAF5]">
                <div className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-brand-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-brand-teal" />
                  </span>
                  <div>
                    <h3 className="font-caps text-[11px] tracking-[0.14em] uppercase text-brand-dark font-semibold mb-2">{faq.q}</h3>
                    <p className="font-body text-[14px] leading-[1.85] text-[#4A6741]">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-16 py-20 max-lg:px-8 max-md:px-6 bg-[#F5F0E8]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="sec-title text-[clamp(32px,3.5vw,52px)]">Ready to <span className="text-gradient-teal">Explore?</span></h2>
          <p className="sec-subtitle mx-auto mb-8">Drop us a message and one of our safari experts will get back to you within 24 hours.</p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link href="/contact" className="btn-primary">
              Start Planning <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={`tel:${BRAND.phones[0].replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2.5 font-caps text-[10px] font-medium tracking-[0.2em] uppercase border border-brand-teal text-brand-teal px-8 py-4 rounded-lg transition-all duration-300 hover:bg-brand-teal hover:text-white"
            >
              <Phone className="w-4 h-4" /> {BRAND.phones[0]}
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 text-[13px] text-[#8FA88A]">
            <Mail className="w-3.5 h-3.5" />
            <a href={`mailto:${BRAND.email}`} className="hover:text-brand-teal transition-colors">{BRAND.email}</a>
          </div>
        </div>
      </section>

    </main>
  )
}

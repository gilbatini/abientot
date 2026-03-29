import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react'
import { BRAND } from '@/lib/constants'

const FOOTER_LINKS = {
  Services: [
    { label: 'Flight Booking',    href: '/safari-packages/flights' },
    { label: 'Airport Transfers', href: '/safari-packages/airport-pickup' },
    { label: 'Hotel Reservations',href: '/safari-packages/hotels' },
    { label: 'Safari Packages',   href: '/safari-packages/wildlife' },
    { label: 'Glamping',          href: '/safari-packages/glamping' },
  ],
  Company: [
    { label: 'About Us',  href: '/about' },
    { label: 'Our Team',  href: '/about#team' },
    { label: 'Blog',      href: '/blog' },
    { label: 'Reviews',   href: '/reviews' },
    { label: 'Contact',   href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-[#111111]">
      <div className="px-16 pt-16 pb-0 max-lg:px-8 max-md:px-6">
        <div className="grid grid-cols-[260px_1fr] gap-16 mb-12 max-lg:grid-cols-1 max-lg:gap-10">

          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="[filter:brightness(0)_invert(1)]">
                <Image src="/logo.svg" alt="À Bientôt" width={44} height={44} />
              </div>
              <span className="font-caps text-[14px] font-semibold tracking-[0.12em] text-brand-teal uppercase">
                À Bientôt
              </span>
            </Link>
            <p className="font-body text-[13px] leading-[1.7] text-brand-teal/65">
              Your trusted partner for unforgettable African safari experiences. Discover Uganda's wildlife, culture, and natural beauty.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Instagram className="w-4 h-4" />, href: BRAND.social.instagram },
                { icon: <Facebook className="w-4 h-4" />,  href: BRAND.social.facebook },
                { icon: <Twitter className="w-4 h-4" />,   href: BRAND.social.twitter },
              ].map((s, i) => (
                <a key={i} href={s.href} className="w-9 h-9 rounded-lg border border-brand-teal/20 flex items-center justify-center text-brand-teal/50 hover:text-brand-teal hover:border-brand-teal/50 transition-all duration-200">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-3 gap-10 max-md:grid-cols-2">
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-caps text-[9px] font-semibold tracking-[0.2em] uppercase text-brand-teal/50 mb-4">{title}</h4>
                <ul className="flex flex-col gap-2.5">
                  {links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="font-body text-[13px] text-brand-teal/60 hover:text-brand-teal transition-colors duration-200">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact */}
            <div>
              <h4 className="font-caps text-[9px] font-semibold tracking-[0.2em] uppercase text-brand-teal/50 mb-4">Contact Us</h4>
              <ul className="flex flex-col gap-3">
                {BRAND.phones.slice(0,2).map(p => (
                  <li key={p}>
                    <a href={`tel:${p.replace(/\s/g,'')}`} className="flex items-center gap-2 font-body text-[13px] text-brand-teal/60 hover:text-brand-teal transition-colors">
                      <Phone className="w-3.5 h-3.5 flex-shrink-0" /> {p}
                    </a>
                  </li>
                ))}
                <li>
                  <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 font-body text-[13px] text-brand-teal/60 hover:text-brand-teal transition-colors">
                    <Mail className="w-3.5 h-3.5 flex-shrink-0" /> {BRAND.email}
                  </a>
                </li>
                <li className="flex items-start gap-2 font-body text-[13px] text-brand-teal/50">
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" /> {BRAND.address}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between border-t border-brand-teal/12 py-6 flex-wrap gap-4">
          <p className="font-body text-[12px] text-brand-teal/40">
            © {new Date().getFullYear()} À Bientôt Tour & Travels Ltd. All rights reserved.
          </p>
          <ul className="flex gap-6 list-none">
            {[['Privacy Policy','/privacy'],['Terms of Service','/terms']].map(([label,href]) => (
              <li key={label}>
                <Link href={href} className="font-caps text-[10px] tracking-[0.1em] text-brand-teal/40 hover:text-brand-teal transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

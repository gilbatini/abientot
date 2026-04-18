import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin } from 'lucide-react'
import { BRAND } from '@/lib/constants'

const FOOTER_LINKS = {
  Services: [
    { label: 'Flight Booking',     href: '/safari-packages' },
    { label: 'Airport Transfers',  href: '/safari-packages' },
    { label: 'Hotel Reservations', href: '/safari-packages' },
    { label: 'Safari Packages',    href: '/safari-packages' },
    { label: 'Glamping',           href: '/safari-packages' },
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
    <footer className="bg-[#060f06] border-t-2 border-brand-gold">
      <div className="px-16 pt-16 pb-0 max-lg:px-8 max-md:px-6">
        <div className="grid grid-cols-[260px_1fr] gap-16 mb-12 max-lg:grid-cols-1 max-lg:gap-10">

          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="flex items-center gap-3">
              <div className="[filter:brightness(0)_invert(1)]">
                <Image src="/logo.svg" alt="À Bientôt" width={44} height={44} />
              </div>
              <span className="font-caps text-[14px] font-semibold tracking-[0.12em] text-white uppercase">
                À Bientôt
              </span>
            </Link>
            <p className="font-body text-[13px] leading-[1.7] text-white/45">
              Your trusted partner for unforgettable African safari experiences. Discover Uganda&apos;s wildlife, culture, and natural beauty.
            </p>
            <a
              href={BRAND.social.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-body text-[13px] text-white/50 hover:text-white transition-colors duration-200"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Links grid */}
          <div className="grid grid-cols-3 gap-10 max-md:grid-cols-2">
            {Object.entries(FOOTER_LINKS).map(([title, links]) => (
              <div key={title}>
                <h4 className="font-caps text-[9px] font-semibold tracking-[0.26em] uppercase text-brand-gold mb-5">{title}</h4>
                <ul className="flex flex-col gap-2.5">
                  {links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="font-body text-[13px] text-white/55 hover:text-white transition-colors duration-200">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact */}
            <div>
              <h4 className="font-caps text-[9px] font-semibold tracking-[0.26em] uppercase text-brand-gold mb-5">Contact Us</h4>
              <ul className="flex flex-col gap-3">
                {BRAND.phones.slice(0, 2).map(p => (
                  <li key={p}>
                    <a href={`tel:${p.replace(/\s/g, '')}`} className="flex items-center gap-2 font-body text-[13px] text-white/55 hover:text-white transition-colors duration-200">
                      <Phone className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={1.5} /> {p}
                    </a>
                  </li>
                ))}
                <li>
                  <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 font-body text-[13px] text-white/55 hover:text-white transition-colors duration-200">
                    <Mail className="w-3.5 h-3.5 flex-shrink-0" strokeWidth={1.5} /> {BRAND.email}
                  </a>
                </li>
                <li className="flex items-start gap-2 font-body text-[13px] text-white/40">
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" strokeWidth={1.5} /> {BRAND.address}
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between border-t border-white/10 py-6 flex-wrap gap-4">
          <p className="font-body text-[12px] text-white/35">
            &copy; {new Date().getFullYear()} À Bientôt Tour &amp; Travels Ltd. All rights reserved.
          </p>
          <ul className="flex gap-6 list-none">
            {[['Privacy Policy', '/privacy'], ['Terms of Service', '/terms']].map(([label, href]) => (
              <li key={label}>
                <Link href={href} className="font-caps text-[10px] tracking-[0.1em] text-white/35 hover:text-white transition-colors duration-200">
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

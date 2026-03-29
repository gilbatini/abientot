import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import { BRAND } from '@/lib/constants'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: "Contact Us | À Bientôt Tour & Travels",
  description: 'Get in touch with À Bientôt Tour & Travels to plan your Uganda safari adventure. Call, email, or send us a message.',
}

export default function ContactPage() {
  return (
    <main className="bg-[#FDFAF5] min-h-screen">

      {/* ── Hero ── */}
      <section className="pt-36 pb-20 px-16 max-lg:px-8 max-md:px-6 bg-[#F5F0E8]">
        <div className="max-w-3xl">
          <div className="eyebrow"><div className="eyebrow-bar" /><span className="eyebrow-tag">Get in Touch</span></div>
          <h1 className="sec-title mb-5">
            Let&apos;s Plan Your<br />
            <span className="text-gradient-teal">Adventure</span>
          </h1>
          <p className="font-body text-[16px] font-light leading-[1.9] text-[#4A6741] max-w-xl">
            Ready to explore Uganda? Our safari specialists are here to help — from a quick question
            to building your dream itinerary. We reply within 24 hours, usually much sooner.
          </p>
        </div>
      </section>

      {/* ── Two-column ── */}
      <section className="px-16 py-20 max-lg:px-8 max-md:px-6">
        <div className="grid grid-cols-[1fr_1.4fr] gap-14 items-start max-lg:grid-cols-1 max-lg:gap-10">

          {/* ── LEFT — Contact info ── */}
          <div className="flex flex-col gap-5">

            {/* Phones */}
            <div className="bg-white border border-[#D8E8D0] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal flex-shrink-0">
                  <Phone className="w-4.5 h-4.5" style={{ width: '18px', height: '18px' }} />
                </div>
                <p className="font-caps text-[9px] tracking-[0.24em] uppercase text-[#8FA88A]">Phone Numbers</p>
              </div>
              <div className="flex flex-col gap-2">
                {BRAND.phones.map(phone => (
                  <a
                    key={phone}
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="font-body text-[15px] text-brand-dark hover:text-brand-teal transition-colors"
                  >
                    {phone}
                  </a>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className="bg-white border border-[#D8E8D0] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal flex-shrink-0">
                  <Mail style={{ width: '18px', height: '18px' }} />
                </div>
                <p className="font-caps text-[9px] tracking-[0.24em] uppercase text-[#8FA88A]">Email</p>
              </div>
              <a
                href={`mailto:${BRAND.email}`}
                className="font-body text-[15px] text-brand-dark hover:text-brand-teal transition-colors break-all"
              >
                {BRAND.email}
              </a>
            </div>

            {/* Address */}
            <div className="bg-white border border-[#D8E8D0] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal flex-shrink-0">
                  <MapPin style={{ width: '18px', height: '18px' }} />
                </div>
                <p className="font-caps text-[9px] tracking-[0.24em] uppercase text-[#8FA88A]">Office Address</p>
              </div>
              <p className="font-body text-[15px] text-brand-dark leading-[1.7]">{BRAND.address}</p>
              <a
                href="https://maps.google.com/?q=Reed+Complex+Ntinda+Kiwatule+Kampala+Uganda"
                target="_blank"
                rel="noreferrer"
                className="inline-block font-caps text-[9px] tracking-[0.18em] uppercase text-brand-teal mt-3 hover:text-brand-teal-mid transition-colors"
              >
                Get Directions →
              </a>
            </div>

            {/* Hours */}
            <div className="bg-white border border-[#D8E8D0] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal flex-shrink-0">
                  <Clock style={{ width: '18px', height: '18px' }} />
                </div>
                <p className="font-caps text-[9px] tracking-[0.24em] uppercase text-[#8FA88A]">Office Hours</p>
              </div>
              <div className="flex flex-col gap-1.5">
                {[
                  { label: 'Mon – Fri', value: '8:00 am – 6:00 pm' },
                  { label: 'Saturday',  value: '9:00 am – 4:00 pm' },
                  { label: 'Sunday',    value: 'Closed' },
                ].map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between">
                    <span className="font-body text-[13px] text-[#8FA88A]">{label}</span>
                    <span className={`font-body text-[13px] ${value === 'Closed' ? 'text-brand-earth' : 'text-brand-dark'}`}>{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href={BRAND.social.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5c] text-white rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#25D366]/25"
            >
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="font-caps text-[10px] tracking-[0.2em] uppercase font-medium">Chat on WhatsApp</p>
                <p className="font-body text-[13px] text-white/70 mt-0.5">Fastest response — usually within minutes</p>
              </div>
            </a>

          </div>

          {/* ── RIGHT — Form ── */}
          <ContactForm />

        </div>
      </section>

      {/* ── Map / Location ── */}
      <section className="px-16 pb-20 max-lg:px-8 max-md:px-6">
        <div className="rounded-3xl overflow-hidden border border-[#D8E8D0] shadow-sm">
          <iframe
            title="À Bientôt Tours — Ntinda, Kampala"
            src="https://maps.google.com/maps?q=Ntinda+Kiwatule+Kampala+Uganda&output=embed&z=15"
            width="100%"
            height="380"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="flex items-center justify-between mt-4 px-1 max-sm:flex-col max-sm:items-start max-sm:gap-2">
          <p className="font-body text-[13px] text-[#8FA88A]">
            <span className="font-medium text-brand-dark">Reed Complex</span> · Ntinda Kiwatule, Kampala, Uganda
          </p>
          <a
            href="https://maps.google.com/?q=Reed+Complex+Ntinda+Kiwatule+Kampala+Uganda"
            target="_blank"
            rel="noreferrer"
            className="font-caps text-[9px] tracking-[0.18em] uppercase text-brand-teal hover:text-brand-teal-mid transition-colors"
          >
            Open in Google Maps →
          </a>
        </div>
      </section>

    </main>
  )
}

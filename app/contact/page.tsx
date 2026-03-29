import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import { BRAND } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact Us | À Bientôt Tour & Travels',
  description: 'Get in touch with À Bientôt Tour & Travels to plan your Uganda safari adventure.',
}

export default function ContactPage() {
  return (
    <main className="pt-24 pb-24 px-16 max-lg:px-8 max-md:px-6 bg-[#FDFAF5] min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <div className="eyebrow"><div className="eyebrow-bar" /><span className="eyebrow-tag">Get in Touch</span></div>
          <h1 className="sec-title">Let's Plan Your<br /><span className="text-gradient-teal">Adventure</span></h1>
          <p className="sec-subtitle">Ready to explore Uganda? Reach out and our team will get back to you within 24 hours.</p>
        </div>

        <div className="grid grid-cols-2 gap-12 max-lg:grid-cols-1">
          {/* Contact info */}
          <div className="flex flex-col gap-6">
            {[
              { icon: <Phone className="w-5 h-5" />, label: 'Phone', items: BRAND.phones },
              { icon: <Mail className="w-5 h-5" />,  label: 'Email', items: [BRAND.email] },
              { icon: <MapPin className="w-5 h-5" />, label: 'Address', items: [BRAND.address] },
              { icon: <Clock className="w-5 h-5" />,  label: 'Hours', items: [BRAND.hours.weekdays, BRAND.hours.saturday, BRAND.hours.sunday] },
            ].map(({ icon, label, items }) => (
              <div key={label} className="flex gap-4">
                <div className="w-11 h-11 rounded-xl bg-brand-teal/10 flex items-center justify-center text-brand-teal flex-shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="font-caps text-[9px] tracking-[0.2em] uppercase text-[#8FA88A] mb-1">{label}</p>
                  {items.map(item => <p key={item} className="font-body text-[14px] text-brand-dark">{item}</p>)}
                </div>
              </div>
            ))}
          </div>

          {/* Contact form — wired to Supabase via Booking component logic */}
          <div className="bg-white border border-[#D8E8D0] rounded-2xl p-8 shadow-sm">
            <h2 className="font-display text-[28px] font-light text-brand-dark mb-6">Send a Message</h2>
            <p className="font-body text-[14px] text-[#4A6741]">
              Use the booking form on the home page to send a full trip request, or email us directly at{' '}
              <a href={`mailto:${BRAND.email}`} className="text-brand-teal hover:underline">{BRAND.email}</a>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | À Bientôt Tour & Travels',
  description: 'Terms and conditions for booking travel services with À Bientôt Tour & Travels Ltd.',
}

const LAST_UPDATED = 'January 2025'

export default function TermsPage() {
  return (
    <div className="bg-brand-cream min-h-screen">

      {/* Hero */}
      <section className="bg-[#1a2540] pt-40 pb-20 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="eyebrow justify-center mb-4">
            <div className="eyebrow-bar" />
            <span className="eyebrow-tag text-brand-teal/80">Legal</span>
          </div>
          <h1 className="font-display text-[52px] font-light text-white leading-[1.1] mb-4">
            Terms of Service
          </h1>
          <p className="font-body text-[14px] text-white/50">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="flex flex-col gap-12">

          {/* 1. Acceptance of Terms */}
          <div>
            <h2 className="font-display text-[32px] font-light text-brand-dark mb-4">1. Acceptance of Terms</h2>
            <div className="flex flex-col gap-3 font-body text-[15px] text-[#4A5568] leading-[1.8]">
              <p>
                By accessing our website, submitting a booking inquiry, or purchasing any travel service
                from À Bientôt Tour & Travels Ltd ("we", "our", or "the Company"), you agree to be bound
                by these Terms of Service and all applicable laws and regulations.
              </p>
              <p>
                If you do not agree with any part of these terms, you may not use our services. These
                terms apply to all clients, visitors, and others who access or use our services.
              </p>
            </div>
          </div>

          <hr className="border-[#D8E8D0]" />

          {/* 2. Services Offered */}
          <div>
            <h2 className="font-display text-[32px] font-light text-brand-dark mb-4">2. Services Offered</h2>
            <div className="flex flex-col gap-3 font-body text-[15px] text-[#4A5568] leading-[1.8]">
              <p>
                À Bientôt Tour & Travels Ltd is a licensed travel company based in Kampala, Uganda,
                specialising in:
              </p>
              <ul className="flex flex-col gap-2 pl-5">
                {[
                  'Safari and wildlife tours across Uganda and East Africa',
                  'Gorilla and chimpanzee trekking permits and guided experiences',
                  'Domestic and international flight bookings',
                  'Hotel, lodge, and accommodation reservations',
                  'Custom itinerary planning and group travel coordination',
                  'Airport transfers and ground transportation',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-brand-teal mt-1.5 flex-shrink-0">–</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                All services are subject to availability and confirmation. We reserve the right to
                decline any booking at our discretion.
              </p>
            </div>
          </div>

          <hr className="border-[#D8E8D0]" />

          {/* 3. Booking & Payment */}
          <div>
            <h2 className="font-display text-[32px] font-light text-brand-dark mb-4">3. Booking &amp; Payment</h2>
            <div className="flex flex-col gap-3 font-body text-[15px] text-[#4A5568] leading-[1.8]">
              <p>
                A booking is confirmed only upon receipt of a signed booking form (or written confirmation
                via email) and the required deposit payment.
              </p>

              <h3 className="font-caps text-[10px] tracking-[0.2em] uppercase text-brand-earth mt-2">Deposit</h3>
              <p>
                A non-refundable deposit of <strong className="text-brand-dark">30% of the total tour cost</strong> is
                required to secure your booking. This deposit covers reservation fees, permit applications,
                and preliminary logistics.
              </p>

              <h3 className="font-caps text-[10px] tracking-[0.2em] uppercase text-brand-earth mt-2">Balance Payment</h3>
              <p>
                The remaining balance is due no later than <strong className="text-brand-dark">60 days before</strong> your
                travel start date. Bookings made within 60 days of the travel date require full payment
                at the time of booking.
              </p>

              <h3 className="font-caps text-[10px] tracking-[0.2em] uppercase text-brand-earth mt-2">Payment Methods</h3>
              <p>
                We accept bank transfer, mobile money, and other payment methods as agreed at the time of
                booking. All prices are quoted in USD unless otherwise stated. Bank charges and transfer
                fees are the responsibility of the client.
              </p>
            </div>
          </div>

          <hr className="border-[#D8E8D0]" />

          {/* 4. Cancellation Policy */}
          <div>
            <h2 className="font-display text-[32px] font-light text-brand-dark mb-4">4. Cancellation Policy</h2>
            <p className="font-body text-[15px] text-[#4A5568] leading-[1.8] mb-5">
              All cancellations must be submitted in writing to{' '}
              <a href="mailto:abientottours2023@gmail.com" className="text-brand-teal hover:underline">
                abientottours2023@gmail.com
              </a>.
              The following schedule applies:
            </p>

            <div className="flex flex-col gap-3">
              {[
                {
                  period: 'More than 60 days before travel',
                  refund: 'Full refund of all payments minus the 30% deposit',
                  color: 'bg-green-50 border-green-200',
                  badge: 'bg-green-100 text-green-700',
                },
                {
                  period: '30 – 60 days before travel',
                  refund: '50% refund of the total tour cost',
                  color: 'bg-amber-50 border-amber-200',
                  badge: 'bg-amber-100 text-amber-700',
                },
                {
                  period: 'Less than 30 days before travel',
                  refund: 'No refund — full cost is forfeited',
                  color: 'bg-red-50 border-red-200',
                  badge: 'bg-red-100 text-red-700',
                },
              ].map(({ period, refund, color, badge }) => (
                <div key={period} className={`border rounded-xl p-4 flex items-start gap-4 ${color}`}>
                  <span className={`font-caps text-[8px] tracking-[0.15em] uppercase px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0 mt-0.5 ${badge}`}>
                    {period}
                  </span>
                  <p className="font-body text-[14px] text-[#4A5568] leading-[1.7]">{refund}</p>
                </div>
              ))}
            </div>

            <p className="font-body text-[14px] text-[#4A5568] leading-[1.8] mt-5">
              Gorilla and chimpanzee trekking permits are non-refundable once issued by the Uganda Wildlife
              Authority, regardless of the cancellation date.
            </p>
          </div>

          <hr className="border-[#D8E8D0]" />

          {/* 5. Travel Insurance */}
          <div>
            <h2 className="font-display text-[32px] font-light text-brand-dark mb-4">5. Travel Insurance</h2>
            <div className="flex flex-col gap-3 font-body text-[15px] text-[#4A5568] leading-[1.8]">
              <p>
                Travel insurance is <strong className="text-brand-dark">strongly recommended</strong> for all
                clients and is not included in the price of any tour or package unless explicitly stated.
              </p>
              <p>
                We recommend that your policy covers trip cancellation, medical evacuation, personal
                accident, baggage loss, and curtailment. We are not liable for any costs incurred due to
                the absence of adequate travel insurance.
              </p>
            </div>
          </div>

          <hr className="border-[#D8E8D0]" />

          {/* 6. Liability Limitations */}
          <div>
            <h2 className="font-display text-[32px] font-light text-brand-dark mb-4">6. Liability Limitations</h2>
            <div className="flex flex-col gap-3 font-body text-[15px] text-[#4A5568] leading-[1.8]">
              <p>
                À Bientôt Tour & Travels Ltd acts as an agent for hotels, airlines, transport operators,
                and other service providers. We are not liable for any injury, loss, damage, delay,
                additional expense, or inconvenience caused directly or indirectly by events outside our
                control.
              </p>
              <p>These include, but are not limited to:</p>
              <ul className="flex flex-col gap-2 pl-5">
                {[
                  'Acts of God, natural disasters, or extreme weather events',
                  'Government actions, border closures, or travel advisories',
                  'Civil unrest, strikes, or epidemics',
                  'Mechanical breakdowns or failures by third-party operators',
                  'Changes to airline schedules or cancellations',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-brand-teal mt-1.5 flex-shrink-0">–</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                Our total liability to any client shall not exceed the total amount paid by that client
                for the specific tour or service giving rise to the claim.
              </p>
            </div>
          </div>

          <hr className="border-[#D8E8D0]" />

          {/* 7. Client Responsibilities */}
          <div>
            <h2 className="font-display text-[32px] font-light text-brand-dark mb-4">7. Client Responsibilities</h2>
            <p className="font-body text-[15px] text-[#4A5568] leading-[1.8] mb-4">
              Clients are solely responsible for ensuring they meet all travel requirements, including:
            </p>
            <ul className="flex flex-col gap-2 pl-5">
              {[
                'A valid passport with at least 6 months validity beyond the travel return date',
                'Obtaining all required visas, entry permits, and travel authorisations',
                'Compliance with vaccination and health requirements (e.g. Yellow Fever certificate)',
                'Ensuring fitness to participate in physically demanding activities such as gorilla trekking',
                'Adhering to the rules and regulations of national parks and wildlife reserves',
                'Respecting local laws, customs, and the natural environment',
              ].map(item => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-brand-teal mt-1.5 flex-shrink-0">–</span>
                  <span className="font-body text-[15px] text-[#4A5568] leading-[1.8]">{item}</span>
                </li>
              ))}
            </ul>
            <p className="font-body text-[15px] text-[#4A5568] leading-[1.8] mt-4">
              We accept no responsibility for any costs or losses arising from a client's failure to
              comply with these requirements.
            </p>
          </div>

          <hr className="border-[#D8E8D0]" />

          {/* 8. Intellectual Property */}
          <div>
            <h2 className="font-display text-[32px] font-light text-brand-dark mb-4">8. Intellectual Property</h2>
            <div className="flex flex-col gap-3 font-body text-[15px] text-[#4A5568] leading-[1.8]">
              <p>
                All content on this website — including text, photography, graphics, logos, itineraries,
                and design — is the property of À Bientôt Tour & Travels Ltd or its content suppliers
                and is protected by applicable intellectual property laws.
              </p>
              <p>
                You may not reproduce, distribute, modify, or republish any content from this website
                without our prior written permission.
              </p>
            </div>
          </div>

          <hr className="border-[#D8E8D0]" />

          {/* 9. Governing Law */}
          <div>
            <h2 className="font-display text-[32px] font-light text-brand-dark mb-4">9. Governing Law</h2>
            <div className="flex flex-col gap-3 font-body text-[15px] text-[#4A5568] leading-[1.8]">
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of
                the <strong className="text-brand-dark">Republic of Uganda</strong>. Any disputes arising
                from or relating to these terms or our services shall be subject to the exclusive
                jurisdiction of the courts of Uganda.
              </p>
              <p>
                If any provision of these terms is found to be unenforceable, the remaining provisions
                will continue in full force and effect.
              </p>
            </div>
          </div>

          <hr className="border-[#D8E8D0]" />

          {/* 10. Contact Us */}
          <div className="bg-white border border-[#D8E8D0] rounded-2xl p-8">
            <h2 className="font-display text-[32px] font-light text-brand-dark mb-4">10. Contact Us</h2>
            <p className="font-body text-[15px] text-[#4A5568] leading-[1.8] mb-5">
              For any questions about these Terms of Service or to discuss your booking, please get in
              touch:
            </p>
            <div className="flex flex-col gap-2">
              <p className="font-body text-[15px] text-brand-dark font-medium">À Bientôt Tour & Travels Ltd</p>
              <p className="font-body text-[14px] text-[#4A5568]">Reed Complex, Ntinda Kiwatule, Kampala, Uganda</p>
              <a href="mailto:abientottours2023@gmail.com" className="font-body text-[14px] text-brand-teal hover:underline">
                abientottours2023@gmail.com
              </a>
              <a href="tel:+256788138721" className="font-body text-[14px] text-brand-teal hover:underline">
                +256 788 138 721
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

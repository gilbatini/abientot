import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | À Bientôt Tour & Travels',
  description: 'How À Bientôt Tour & Travels collects, uses, and protects your personal information.',
}

const LAST_UPDATED = 'January 2025'

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="font-body text-[14px] text-white/50">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <div className="flex flex-col gap-12">

          {/* 1. Introduction */}
          <div>
            <h2 className="font-display text-[32px] font-light text-brand-dark mb-4">1. Introduction</h2>
            <div className="flex flex-col gap-3 font-body text-[15px] text-[#4A5568] leading-[1.8]">
              <p>
                À Bientôt Tour & Travels Ltd ("we", "our", or "us") is a licensed travel and safari company
                based in Kampala, Uganda. We are committed to protecting your personal information and your
                right to privacy.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you visit our website or make a booking with us. Please read this policy carefully. If
                you disagree with its terms, please discontinue use of our site.
              </p>
            </div>
          </div>

          <hr className="border-[#D8E8D0]" />

          {/* 2. Information We Collect */}
          <div>
            <h2 className="font-display text-[32px] font-light text-brand-dark mb-4">2. Information We Collect</h2>
            <p className="font-body text-[15px] text-[#4A5568] leading-[1.8] mb-4">
              We collect information you voluntarily provide to us when you submit a booking inquiry,
              contact form, or otherwise communicate with us. This may include:
            </p>
            <ul className="flex flex-col gap-2 pl-5">
              {[
                'Full name and contact details (email address, phone number)',
                'Travel dates, destination preferences, and group size',
                'Special requirements such as dietary needs or accessibility requests',
                'Payment information (processed securely via our payment partners)',
                'Passport and identification details required for booking arrangements',
                'Any other information you choose to provide in message fields',
              ].map(item => (
                <li key={item} className="font-body text-[15px] text-[#4A5568] leading-[1.8] flex items-start gap-2">
                  <span className="text-brand-teal mt-1.5 flex-shrink-0">–</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-body text-[15px] text-[#4A5568] leading-[1.8] mt-4">
              We also automatically collect certain technical information when you visit our website,
              including IP address, browser type, pages visited, and time spent on pages.
            </p>
          </div>

          <hr className="border-[#D8E8D0]" />

          {/* 3. How We Use Your Information */}
          <div>
            <h2 className="font-display text-[32px] font-light text-brand-dark mb-4">3. How We Use Your Information</h2>
            <p className="font-body text-[15px] text-[#4A5568] leading-[1.8] mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="flex flex-col gap-2 pl-5">
              {[
                'Processing and confirming your booking or travel inquiry',
                'Communicating with you about your trip, itinerary details, and updates',
                'Sending booking confirmations, invoices, and pre-departure information',
                'Responding to your questions and providing customer support',
                'Improving our website, services, and customer experience',
                'Complying with legal obligations and resolving disputes',
              ].map(item => (
                <li key={item} className="font-body text-[15px] text-[#4A5568] leading-[1.8] flex items-start gap-2">
                  <span className="text-brand-teal mt-1.5 flex-shrink-0">–</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <hr className="border-[#D8E8D0]" />

          {/* 4. Information Sharing */}
          <div>
            <h2 className="font-display text-[32px] font-light text-brand-dark mb-4">4. Information Sharing</h2>
            <div className="flex flex-col gap-3 font-body text-[15px] text-[#4A5568] leading-[1.8]">
              <p>
                We do not sell, trade, or rent your personal information to third parties for marketing
                purposes.
              </p>
              <p>
                We may share your information with trusted service partners strictly as required to deliver
                your travel experience. These partners may include:
              </p>
              <ul className="flex flex-col gap-2 pl-5">
                {[
                  'Hotels, lodges, and accommodation providers',
                  'Airlines and ground transportation operators',
                  'National parks, wildlife authorities, and tour operators',
                  'Visa and documentation processing services',
                ].map(item => (
                  <li key={item} className="font-body text-[15px] text-[#4A5568] leading-[1.8] flex items-start gap-2">
                    <span className="text-brand-teal mt-1.5 flex-shrink-0">–</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                All partners are required to handle your information securely and only for the purpose of
                delivering the services you have booked.
              </p>
            </div>
          </div>

          <hr className="border-[#D8E8D0]" />

          {/* 5. Data Security */}
          <div>
            <h2 className="font-display text-[32px] font-light text-brand-dark mb-4">5. Data Security</h2>
            <div className="flex flex-col gap-3 font-body text-[15px] text-[#4A5568] leading-[1.8]">
              <p>
                We implement appropriate technical and organisational security measures to protect your
                personal information against unauthorised access, alteration, disclosure, or destruction.
                Our website uses HTTPS encryption for all data transmissions.
              </p>
              <p>
                While we take reasonable precautions, no method of transmission over the internet is 100%
                secure. We cannot guarantee the absolute security of your data and encourage you to use
                caution when sharing sensitive information online.
              </p>
            </div>
          </div>

          <hr className="border-[#D8E8D0]" />

          {/* 6. Cookies */}
          <div>
            <h2 className="font-display text-[32px] font-light text-brand-dark mb-4">6. Cookies</h2>
            <div className="flex flex-col gap-3 font-body text-[15px] text-[#4A5568] leading-[1.8]">
              <p>
                Our website may use cookies — small text files stored on your device — to improve your
                browsing experience, remember your preferences, and analyse site traffic.
              </p>
              <p>
                You can instruct your browser to refuse all cookies or to alert you when cookies are being
                sent. However, some features of our website may not function properly if cookies are
                disabled.
              </p>
            </div>
          </div>

          <hr className="border-[#D8E8D0]" />

          {/* 7. Your Rights */}
          <div>
            <h2 className="font-display text-[32px] font-light text-brand-dark mb-4">7. Your Rights</h2>
            <p className="font-body text-[15px] text-[#4A5568] leading-[1.8] mb-4">
              You have the following rights regarding your personal data:
            </p>
            <ul className="flex flex-col gap-2 pl-5">
              {[
                'Access — request a copy of the personal data we hold about you',
                'Correction — request that we correct any inaccurate or incomplete data',
                'Deletion — request that we delete your personal data, subject to legal obligations',
                'Objection — object to our processing of your data for certain purposes',
                'Portability — request a transfer of your data to another service provider',
              ].map(item => (
                <li key={item} className="font-body text-[15px] text-[#4A5568] leading-[1.8] flex items-start gap-2">
                  <span className="text-brand-teal mt-1.5 flex-shrink-0">–</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-body text-[15px] text-[#4A5568] leading-[1.8] mt-4">
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:abientottours2023@gmail.com" className="text-brand-teal hover:underline">
                abientottours2023@gmail.com
              </a>.
            </p>
          </div>

          <hr className="border-[#D8E8D0]" />

          {/* 8. Third Party Services */}
          <div>
            <h2 className="font-display text-[32px] font-light text-brand-dark mb-4">8. Third Party Services</h2>
            <div className="flex flex-col gap-3 font-body text-[15px] text-[#4A5568] leading-[1.8]">
              <p>
                Our website is built on infrastructure provided by trusted third-party services. These
                services process data on our behalf under their own privacy policies:
              </p>
              <ul className="flex flex-col gap-2 pl-5 mt-1">
                <li className="flex items-start gap-2">
                  <span className="text-brand-teal mt-1.5 flex-shrink-0">–</span>
                  <span>
                    <strong className="text-brand-dark font-medium">Supabase</strong> — database and
                    authentication infrastructure. Data is stored on servers in accordance with Supabase's
                    privacy policy.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-brand-teal mt-1.5 flex-shrink-0">–</span>
                  <span>
                    <strong className="text-brand-dark font-medium">Vercel</strong> — website hosting and
                    content delivery. Network logs may be retained in accordance with Vercel's privacy
                    policy.
                  </span>
                </li>
              </ul>
              <p>
                We encourage you to review the privacy policies of these providers for full details on
                their data practices.
              </p>
            </div>
          </div>

          <hr className="border-[#D8E8D0]" />

          {/* 9. Changes to This Policy */}
          <div>
            <h2 className="font-display text-[32px] font-light text-brand-dark mb-4">9. Changes to This Policy</h2>
            <p className="font-body text-[15px] text-[#4A5568] leading-[1.8]">
              We may update this Privacy Policy from time to time to reflect changes in our practices or
              for legal, operational, or regulatory reasons. We will notify you of any significant changes
              by posting the new policy on this page with an updated date. We encourage you to review this
              page periodically.
            </p>
          </div>

          <hr className="border-[#D8E8D0]" />

          {/* 10. Contact Us */}
          <div className="bg-white border border-[#D8E8D0] rounded-2xl p-8">
            <h2 className="font-display text-[32px] font-light text-brand-dark mb-4">10. Contact Us</h2>
            <p className="font-body text-[15px] text-[#4A5568] leading-[1.8] mb-5">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our
              handling of your personal data, please contact us:
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

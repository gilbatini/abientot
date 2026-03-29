import Link from 'next/link'
import { ArrowRight, Star } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/constants'

export default function Testimonials() {
  return (
    <section className="px-16 py-24 bg-white max-lg:px-8 max-md:px-6" id="testimonials">
      <div className="text-center max-w-xl mx-auto mb-14">
        <div className="eyebrow justify-center"><div className="eyebrow-bar" /><span className="eyebrow-tag">Testimonials</span><div className="eyebrow-bar" /></div>
        <h2 className="sec-title">What Travellers<br /><span className="text-gradient-teal">Are Saying</span></h2>
        <p className="sec-subtitle mx-auto">Real stories from real adventurers who explored Africa with us.</p>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-12 max-lg:grid-cols-2 max-md:grid-cols-1">
        {TESTIMONIALS.map((t) => (
          <div key={t.name} className="card p-7">
            <span className="block font-display text-[72px] font-light leading-[0.8] text-brand-teal/10 italic mb-2">"</span>
            <div className="flex gap-1 mb-3">
              {Array.from({length: t.rating}).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
              ))}
            </div>
            <p className="font-body text-[14px] leading-[1.85] text-[#4A6741] italic mb-6">{t.text}</p>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-teal to-[#239e97] flex items-center justify-center font-display text-xl text-white flex-shrink-0">
                {t.avatar}
              </div>
              <div>
                <p className="font-caps text-[9.5px] font-semibold tracking-[0.16em] uppercase text-brand-dark">{t.name}</p>
                <p className="font-body text-[12px] text-[#8FA88A] mt-0.5">{t.country}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Post-testi CTA */}
      <div className="flex items-center justify-between bg-gradient-to-r from-brand-teal/5 to-[#D4A843]/5 border border-[#D8E8D0] rounded-2xl px-8 py-6 flex-wrap gap-4">
        <div>
          <h3 className="font-display text-[28px] font-light text-brand-dark mb-1">Ready to Write Your Own Story?</h3>
          <p className="font-body text-[14px] text-[#4A6741]">Join thousands of adventurers who made Uganda their destination.</p>
        </div>
        <Link href="/contact" className="btn-primary flex-shrink-0">
          Start Planning <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  )
}

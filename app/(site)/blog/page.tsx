import type { Metadata } from 'next'
import BlogGrid from '@/components/BlogGrid'

export const metadata: Metadata = {
  title: 'Travel Stories & Guides | À Bientôt Tour & Travels',
  description: 'Explore Uganda through our travel stories, safari guides, wildlife spotlights, and destination inspiration.',
}

export default function BlogPage() {
  return (
    <main className="bg-[#FDFAF5] min-h-screen">

      {/* ── Hero ── */}
      <section className="pt-36 pb-20 px-16 max-lg:px-8 max-md:px-6 bg-[#F5F0E8]">
        <div className="max-w-3xl">
          <div className="eyebrow"><div className="eyebrow-bar" /><span className="eyebrow-tag">Journal</span></div>
          <h1 className="sec-title mb-5">
            Travel Stories<br />
            <span className="text-gradient-teal">&amp; Guides</span>
          </h1>
          <p className="font-body text-[16px] font-light leading-[1.9] text-[#4A6741] max-w-xl">
            Inspiration, advice, and stories from the Pearl of Africa. From gorilla encounters
            to hidden waterfalls — everything you need to plan the trip of a lifetime.
          </p>
        </div>
      </section>

      {/* ── Posts ── */}
      <section className="px-16 py-20 max-lg:px-8 max-md:px-6">
        <BlogGrid />
      </section>

    </main>
  )
}

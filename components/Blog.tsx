import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { BLOG_POSTS } from '@/lib/constants'

export default function Blog() {
  return (
    <section className="px-16 py-32 bg-[#0a1a0a] max-lg:px-8 max-md:px-6" id="blog">
      {/* Header */}
      <div className="flex items-end justify-between mb-14 flex-wrap gap-5">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-7 h-px bg-brand-gold" />
            <span className="font-caps text-[9px] font-medium tracking-[0.26em] uppercase text-brand-gold">Travel Stories</span>
          </div>
          <h2 className="font-display text-[clamp(40px,4.5vw,68px)] font-light leading-[1.06] tracking-[-0.01em] text-white mb-0">
            From Our <span className="text-gradient-teal">Blog</span>
          </h2>
        </div>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-caps text-[9px] tracking-[0.2em] uppercase text-brand-gold/60 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-brand-gold hover:gap-3.5"
        >
          View all posts <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
        </Link>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-2 max-md:grid-cols-1">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block bg-[#111f11] rounded-2xl overflow-hidden ring-1 ring-white/6 border-t-2 border-t-transparent transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-t-brand-gold hover:-translate-y-1 hover:shadow-[0_20px_48px_-12px_rgba(0,0,0,0.5)]"
          >
            <div className="overflow-hidden aspect-video">
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={338}
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.05]"
              />
            </div>

            <div className="p-6 pb-7">
              <span className="inline-block font-caps text-[8px] tracking-[0.22em] uppercase text-brand-gold bg-brand-gold/10 rounded-full px-2.5 py-1 mb-3">
                {post.cat}
              </span>
              <h3 className="font-display text-[22px] font-light leading-[1.25] text-white mb-2.5 transition-colors duration-200 group-hover:text-brand-gold">
                {post.title}
              </h3>
              <p className="font-body text-[13px] leading-[1.8] text-white/55 mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center justify-between pt-4 border-t border-white/8">
                <span className="font-body text-[12px] text-white/35">{post.date} · {post.read}</span>
                <span className="inline-flex items-center gap-1.5 font-caps text-[9px] tracking-[0.2em] uppercase text-brand-gold/60 transition-all duration-300 group-hover:text-brand-gold group-hover:gap-2.5">
                  Read <ArrowRight className="w-3 h-3" strokeWidth={1.5} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

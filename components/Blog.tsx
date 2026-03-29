import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { BLOG_POSTS } from '@/lib/constants'

export default function Blog() {
  return (
    <section className="px-16 py-24 bg-[#F5F0E8] max-lg:px-8 max-md:px-6" id="blog">
      <div className="flex items-end justify-between mb-14 flex-wrap gap-5">
        <div>
          <div className="eyebrow"><div className="eyebrow-bar" /><span className="eyebrow-tag">Travel Stories</span></div>
          <h2 className="sec-title">From Our <span className="text-gradient-teal">Blog</span></h2>
        </div>
        <Link href="/blog" className="inline-flex items-center gap-2 font-caps text-[9px] tracking-[0.2em] uppercase text-brand-teal hover:gap-4 transition-all duration-300">
          View all posts <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
        {BLOG_POSTS.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="card group block">
            <div className="overflow-hidden aspect-video">
              <Image
                src={post.image}
                alt={post.title}
                width={600}
                height={338}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-6 pb-7">
              <span className="inline-block font-caps text-[8px] tracking-[0.22em] uppercase text-brand-teal bg-brand-teal/8 rounded-full px-2.5 py-1 mb-3">
                {post.cat}
              </span>
              <h3 className="font-display text-[22px] font-light leading-[1.25] text-brand-dark mb-2.5 group-hover:text-brand-teal transition-colors">
                {post.title}
              </h3>
              <p className="font-body text-[13px] leading-[1.8] text-[#4A6741] mb-4 line-clamp-2">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="font-body text-[12px] text-[#8FA88A]">{post.date} · {post.read}</span>
                <span className="inline-flex items-center gap-1.5 font-caps text-[9px] tracking-[0.2em] uppercase text-brand-teal group-hover:gap-3 transition-all duration-300">
                  Read <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

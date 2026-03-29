'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Clock, Calendar } from 'lucide-react'
import { BLOG_POSTS } from '@/lib/constants'

const CATS = ['All', 'Safaris', 'Wildlife', 'Destinations']

export default function BlogGrid() {
  const [active, setActive] = useState('All')

  const posts = active === 'All' ? BLOG_POSTS : BLOG_POSTS.filter(p => p.cat === active)

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-12">
        {CATS.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`font-caps text-[9px] tracking-[0.22em] uppercase px-5 py-2.5 rounded-full border transition-all duration-200 ${
              active === cat
                ? 'bg-brand-teal text-white border-brand-teal shadow-md shadow-brand-teal/20'
                : 'bg-white text-[#4A6741] border-[#D8E8D0] hover:border-brand-teal hover:text-brand-teal'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2 max-md:grid-cols-1">
        {posts.map(post => (
          <article key={post.slug} className="card group flex flex-col">
            {/* Image */}
            <div className="relative overflow-hidden h-52 flex-shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="font-caps text-[8px] tracking-[0.22em] uppercase bg-brand-earth/90 text-white px-3 py-1 rounded-full">
                  {post.cat}
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-4 mb-3">
                <span className="flex items-center gap-1.5 font-body text-[12px] text-[#8FA88A]">
                  <Calendar className="w-3 h-3" /> {post.date}
                </span>
                <span className="flex items-center gap-1.5 font-body text-[12px] text-[#8FA88A]">
                  <Clock className="w-3 h-3" /> {post.read}
                </span>
              </div>

              <h2 className="font-display text-[21px] font-light text-brand-dark leading-tight mb-3 group-hover:text-brand-teal transition-colors duration-200">
                {post.title}
              </h2>
              <p className="font-body text-[13.5px] leading-[1.8] text-[#4A6741] mb-5 flex-1">
                {post.excerpt}
              </p>

              <Link
                href={`/blog/${post.slug}`}
                className="inline-flex items-center gap-2 font-caps text-[9px] tracking-[0.2em] uppercase text-brand-teal group-hover:gap-3 transition-all duration-300 mt-auto"
              >
                Read More <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="text-center py-20 text-[#8FA88A] font-body text-[15px]">
          No posts in this category yet.
        </div>
      )}
    </>
  )
}

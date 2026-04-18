import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, Calendar, Clock, Tag } from 'lucide-react'
import { BLOG_POSTS } from '@/lib/constants'

/* ── Article content per slug ─────────────────────────────────────── */

const ARTICLES: Record<string, { sections: { heading?: string; body: string }[] }> = {
  'best-uganda-safari-packages': {
    sections: [
      {
        body: `Uganda, often called the Pearl of Africa, is one of the continent's most compelling safari destinations — and one of its most underrated. While East Africa's spotlight often falls on Kenya and Tanzania, Uganda offers something those countries cannot: an extraordinary density of biodiversity packed into a relatively compact landscape. From misty mountain gorillas to tree-climbing lions, from thundering waterfalls to calm crater lakes, Uganda rewards every type of traveller.`,
      },
      {
        heading: 'Gorilla Trekking in Bwindi Impenetrable Forest',
        body: `No Uganda safari is complete without a gorilla trek. Bwindi Impenetrable National Park is home to nearly half the world's remaining mountain gorillas — roughly 459 individuals across 22 habituated family groups. Trekking into the forest at dawn, following your expert ranger through ancient jungle, and coming face to face with a silverback is an experience that permanently changes how you see the natural world. Permits are required and must be booked in advance; we manage the entire permit process for our clients.`,
      },
      {
        heading: "Murchison Falls — The World's Most Powerful Waterfall",
        body: `In northwestern Uganda, the entire force of the Nile River is compressed through a 7-metre gap in the rocks, creating Murchison Falls — the most powerful waterfall on earth. The national park surrounding it is Uganda's largest and oldest, home to lions, elephants, buffalos, hippos, crocodiles, giraffes, and over 450 bird species. A classic Murchison package combines morning game drives through the savannah with an afternoon boat cruise up the Nile to the base of the falls.`,
      },
      {
        heading: 'Queen Elizabeth National Park — The Big Five & Beyond',
        body: `Queen Elizabeth National Park is Uganda's most visited park — and for good reason. The Kazinga Channel, a 40-kilometre natural waterway connecting Lakes George and Edward, is home to one of the highest concentrations of hippos on the continent. The park's Ishasha sector is famous for its tree-climbing lions, a rare behaviour seen in only two places on earth. Game drives at dawn reveal elephants, buffalos, leopards, and the strikingly beautiful Uganda kob, the country's national animal.`,
      },
      {
        heading: "Kidepo Valley — Uganda's Hidden Wilderness",
        body: `For the true off-the-beaten-path adventurer, Kidepo Valley National Park in the remote northeast is in a class of its own. Often ranked among Africa's finest parks by conservationists, Kidepo is home to 77 mammal species — including cheetahs, ostriches, and Burchell's zebras found nowhere else in Uganda. The remoteness is part of its magic; you can spend a full day on game drives without encountering another vehicle.`,
      },
      {
        heading: 'Planning Your Uganda Safari',
        body: `The best time to visit Uganda is during the dry seasons: June to August and December to February. That said, Uganda's equatorial climate means it can be visited year-round — the wet seasons bring lush landscapes and significantly reduced crowd levels. Most of our packages include airport pickup and drop-off, all park entrance fees, accommodation in hand-picked lodges and camps, and expert local guides. Contact our team to start building your custom itinerary.`,
      },
    ],
  },

  'silverback-gorillas-uganda': {
    sections: [
      {
        body: `Deep in the misty mountain forests of southwestern Uganda, the mountain gorilla reigns as one of nature's most magnificent creatures. With a population of fewer than 1,100 individuals remaining in the wild — all found in the Virunga Massif and Bwindi Impenetrable Forest — every encounter with these animals is a privilege that few people on earth will ever experience. Coming face to face with a silverback is not something you forget in a lifetime.`,
      },
      {
        heading: 'The Silverback — King of the Forest',
        body: `The silverback is the dominant adult male of a gorilla family group, named for the distinctive saddle of silver hair that develops along his back as he matures. A fully grown silverback can weigh up to 220 kilograms and stand nearly 1.8 metres tall on two legs. Despite their fearsome size, mountain gorillas are gentle, intelligent animals that share approximately 98% of their DNA with humans. Watching a silverback care for his family — grooming youngsters, resolving disputes, leading his group through the forest — is deeply moving.`,
      },
      {
        heading: 'Bwindi Impenetrable Forest',
        body: `Uganda's primary gorilla trekking destination is Bwindi Impenetrable National Park, a UNESCO World Heritage Site that covers 331 square kilometres of ancient montane rainforest in the Albertine Rift Valley. Bwindi is home to 459 mountain gorillas across 22 habituated family groups, each with its own personality, hierarchy, and territory. The forest itself is extraordinary — a cathedral of enormous hardwood trees, tangled vines, wild figs, and tree ferns that has remained largely unchanged for over 25,000 years.`,
      },
      {
        heading: 'What to Expect on a Gorilla Trek',
        body: `Gorilla trekking begins at dawn with a briefing from your Uganda Wildlife Authority ranger. Treks can last anywhere from 1 to 8 hours depending on where the gorilla family has moved overnight. Once you locate the family, you are granted one precious hour in their presence. In that hour, you may watch infants wrestle and tumble through the undergrowth, mothers nurse their young, and the silverback hold court at the centre of his world. Photography is permitted without flash. The experience is conducted in silence and with profound respect.`,
      },
      {
        heading: 'Gorilla Permits — Everything You Need to Know',
        body: `Each visitor to a habituated gorilla family must hold a gorilla trekking permit. In Uganda, permits are issued by the Uganda Wildlife Authority and cost USD 700 per person per trek. Only eight people per gorilla family group are permitted each day, keeping the experience intimate and minimising disturbance to the animals. Permits sell out months in advance during peak season (June–August and December–February). We secure permits for all our clients well ahead of time — contact us early to avoid disappointment.`,
      },
      {
        heading: 'Conservation Impact of Your Visit',
        body: `Every gorilla trekking permit purchased directly funds the conservation of mountain gorillas and the communities surrounding Bwindi. Uganda's gorilla population has actually grown over the past two decades — a remarkable conservation success story driven in large part by responsible ecotourism. By choosing À Bientôt for your gorilla trek, you are contributing directly to that story. We work exclusively with lodges and operators that meet the highest conservation and community-benefit standards.`,
      },
    ],
  },

  'enchanting-wonders-uganda': {
    sections: [
      {
        body: `Winston Churchill called Uganda the Pearl of Africa, and the name has stuck for over a century — because it fits. This small, landlocked East African nation is one of the most biologically diverse places on earth, home to more primate species than anywhere else, more bird species than all of Europe, and landscapes that range from equatorial rainforest to snow-capped peaks. Yet Uganda remains beautifully uncrowded, its wonders accessible without the mass tourism that defines other African safari circuits.`,
      },
      {
        heading: 'The Rwenzori Mountains — Mountains of the Moon',
        body: `On Uganda's western border with the Democratic Republic of Congo, the Rwenzori Mountains rise to 5,109 metres at their highest point — Margherita Peak on Mount Stanley, the third-highest point in Africa. Known as the Mountains of the Moon since antiquity, the Rwenzoris are a UNESCO World Heritage Site and one of Africa's most extraordinary trekking destinations. The mountain slopes are draped in otherworldly Afroalpine vegetation: giant lobelias, enormous groundsels, and heathers the size of trees. Multi-day trekking routes take hikers through bamboo forest, moorland, and permanent glaciers.`,
      },
      {
        heading: "Lake Victoria — Africa's Largest Lake",
        body: `Stretching across the borders of Uganda, Kenya, and Tanzania, Lake Victoria is the world's largest tropical lake and the second-largest freshwater lake on earth by surface area. Uganda's shoreline offers boat excursions to the Sese Islands — an archipelago of 84 lush islands dotted with fishing villages, tropical forest, and pristine beaches. The lake is also the source of the White Nile, which begins its 6,650-kilometre journey to the Mediterranean at Jinja, Uganda's adventure capital.`,
      },
      {
        heading: 'Kibale Forest — Primate Capital of the World',
        body: `Kibale National Park in western Uganda holds the highest density of primates of any forest in Africa. Thirteen primate species inhabit this ancient rainforest, most notably habituated communities of chimpanzees that can be tracked on foot. A chimpanzee trek through Kibale's cathedral-like forest — listening to the distant hooting grow louder until you find yourself surrounded by a chimpanzee community going about their daily lives — is an experience that rivals even gorilla trekking in its intensity and intimacy.`,
      },
      {
        heading: 'Lake Bunyonyi — The Switzerland of Africa',
        body: `Nestled at 1,962 metres above sea level in the rolling highlands of southwestern Uganda, Lake Bunyonyi is one of the deepest lakes in Africa and among its most beautiful. Surrounded by terraced hillsides and dotted with 29 islands, the lake is sometimes called the Switzerland of Africa. Canoe trips between the islands reveal fishing communities, ancient customs, and birdlife that includes the iconic African fish eagle. It is the perfect place to decompress after the intensity of gorilla trekking.`,
      },
      {
        heading: 'Ugandan Culture & Community',
        body: `Uganda's human story is as rich as its natural one. The country is home to over 50 distinct ethnic groups, each with its own language, traditions, and customs. Cultural experiences — visiting a traditional Batwa community near Bwindi, attending a royal ceremony at the Buganda Kingdom palace in Kampala, or sharing a meal with a local family in a rural village — add depth and meaning to any safari. We incorporate authentic community visits into all our itineraries, ensuring that tourism benefits the people of Uganda directly.`,
      },
    ],
  },
}

/* ── Static params ─────────────────────────────────────────────────── */

export function generateStaticParams() {
  return BLOG_POSTS.map(p => ({ slug: p.slug }))
}

/* ── Metadata ──────────────────────────────────────────────────────── */

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find(p => p.slug === slug)
  if (!post) return { title: 'Post Not Found' }
  return {
    title: `${post.title} | À Bientôt Tour & Travels`,
    description: post.excerpt,
  }
}

/* ── Page ──────────────────────────────────────────────────────────── */

export default async function BlogPostPage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params
  const post    = BLOG_POSTS.find(p => p.slug === slug)
  const article = ARTICLES[slug]

  if (!post || !article) notFound()

  const related = BLOG_POSTS.filter(p => p.slug !== slug)

  return (
    <main className="bg-[#FDFAF5] min-h-screen">

      {/* ── Hero image ── */}
      <div className="relative h-[60vh] min-h-[420px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />

        {/* Back link */}
        <div className="absolute top-28 left-16 max-lg:left-8 max-md:left-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-caps text-[9px] tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Journal
          </Link>
        </div>

        {/* Post header */}
        <div className="absolute bottom-0 left-0 right-0 px-16 pb-12 max-lg:px-8 max-md:px-6">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="font-caps text-[8px] tracking-[0.22em] uppercase bg-brand-earth/90 text-white px-3 py-1 rounded-full">
                {post.cat}
              </span>
              <span className="flex items-center gap-1.5 font-body text-[12px] text-white/60">
                <Calendar className="w-3 h-3" /> {post.date}
              </span>
              <span className="flex items-center gap-1.5 font-body text-[12px] text-white/60">
                <Clock className="w-3 h-3" /> {post.read}
              </span>
            </div>
            <h1 className="font-display text-[clamp(32px,4vw,56px)] font-light text-white leading-[1.1]">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* ── Article body ── */}
      <section className="px-16 py-20 max-lg:px-8 max-md:px-6">
        <div className="max-w-3xl mx-auto">

          {/* Excerpt lead */}
          <p className="font-display text-[20px] font-light italic text-[#4A6741] leading-[1.75] mb-10 pb-10 border-b border-[#D8E8D0] pl-px overflow-visible">
            {post.excerpt}
          </p>

          {/* Article sections */}
          <div className="flex flex-col gap-8">
            {article.sections.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2 className="font-display text-[28px] font-light text-brand-dark mb-4 leading-tight">
                    {section.heading}
                  </h2>
                )}
                <p className="font-body text-[15px] leading-[1.95] text-[#3A5A3A]">
                  {section.body}
                </p>
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex items-center gap-3 mt-12 pt-8 border-t border-[#D8E8D0]">
            <Tag className="w-3.5 h-3.5 text-[#8FA88A]" />
            <span className="font-caps text-[8.5px] tracking-[0.2em] uppercase text-[#8FA88A]">Filed under</span>
            <span className="font-caps text-[8.5px] tracking-[0.2em] uppercase text-brand-earth border border-brand-earth/30 bg-brand-earth/8 rounded-full px-3 py-1" style={{ backgroundColor: 'rgba(196,98,45,0.08)' }}>
              {post.cat}
            </span>
          </div>

          {/* CTA */}
          <div className="mt-10 bg-gradient-to-r from-brand-teal/5 to-brand-gold/5 border border-[#D8E8D0] rounded-2xl p-8">
            <h3 className="font-display text-[26px] font-light text-brand-dark mb-2">
              Ready to Experience Uganda?
            </h3>
            <p className="font-body text-[14px] text-[#4A6741] leading-[1.8] mb-5">
              Let our safari specialists craft your perfect itinerary. We reply within 24 hours.
            </p>
            <Link href="/contact" className="btn-primary">
              Plan My Safari <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Related posts ── */}
      <section className="px-16 pb-20 max-lg:px-8 max-md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-[28px] font-light text-brand-dark mb-8">More from the Journal</h2>
          <div className="grid grid-cols-2 gap-6 max-sm:grid-cols-1">
            {related.map(rel => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className="card group flex flex-col"
              >
                <div className="relative overflow-hidden h-44">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={rel.image}
                    alt={rel.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="font-caps text-[8px] tracking-[0.2em] uppercase bg-brand-earth/90 text-white px-2.5 py-1 rounded-full">
                      {rel.cat}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-body text-[11px] text-[#8FA88A] mb-1.5">{rel.date} · {rel.read}</p>
                  <h3 className="font-display text-[17px] font-light text-brand-dark leading-tight group-hover:text-brand-teal transition-colors">
                    {rel.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </main>
  )
}

# CLAUDE.md — À Bientôt Tour & Travels

> This file gives Claude Code full context on the project so it never loses direction.

---

## 🏢 Project Overview

**Client:** À Bientôt Tour & Travels Ltd  
**Type:** Travel & Safari Agency Website  
**Location:** Kampala, Uganda  
**Stack:** Next.js 14 (App Router) + TypeScript + Tailwind CSS + Supabase + Vercel  

---

## 🎨 Design System

### Brand Colors
| Token | Hex | Use |
|-------|-----|-----|
| `brand-teal` | `#2BBFB3` | Primary — buttons, links, accents |
| `brand-teal-mid` | `#239e97` | Hover states |
| `brand-gold` | `#D4A843` | Hero headline, stats, accents |
| `brand-earth` | `#C4622D` | Eyebrow tags, secondary accents |
| `brand-cream` | `#FDFAF5` | Page background |
| `brand-cream-alt` | `#F5F0E8` | Alternate sections |
| `brand-dark` | `#1A2E1A` | Primary text |
| Footer BG | `#111111` | Matt black footer |

### Typography
| Role | Font | Notes |
|------|------|-------|
| Display headlines | Cormorant Garamond | Weight 300–400, often italic |
| Nav / Caps / Labels | Cinzel | Weight 500–600, wide tracking |
| Body / UI text | Inter | Weight 300–400 |
| Pull quotes | Playfair Display | Italic only |

### Tailwind Font Classes
- `font-display` → Cormorant Garamond
- `font-caps` → Cinzel
- `font-body` → Inter
- `font-accent` → Playfair Display

### Component Classes (defined in globals.css)
- `.eyebrow` — section eyebrow with bar + tag
- `.eyebrow-bar` — the decorative horizontal line
- `.eyebrow-tag` — the small caps label
- `.sec-title` — main section heading
- `.sec-subtitle` — supporting paragraph
- `.btn-primary` — teal filled button
- `.btn-outline` — white glass button (hero only)
- `.card` — white card with border, hover lift

---

## 📁 File Structure

```
abientot-tours/
├── app/
│   ├── layout.tsx              ← Root layout: Nav + Footer wrapper
│   ├── page.tsx                ← Home: Hero + all sections
│   ├── globals.css             ← Design tokens + component classes
│   ├── about/page.tsx
│   ├── safari-packages/page.tsx
│   ├── contact/page.tsx
│   ├── blog/page.tsx           ← TODO: fetch from Supabase
│   └── api/
│       └── contact/route.ts    ← TODO: email notification endpoint
├── components/
│   ├── Nav.tsx                 ← Seamless floating pill nav
│   ├── Hero.tsx                ← Full-screen slideshow hero
│   ├── Marquee.tsx             ← Destination ticker
│   ├── Destinations.tsx        ← Grid of 5 destinations
│   ├── Services.tsx            ← 6 service cards
│   ├── Booking.tsx             ← Quote form → Supabase
│   ├── Testimonials.tsx        ← 3 review cards + CTA
│   ├── Blog.tsx                ← 3 blog posts
│   ├── TripPlanner.tsx         ← 3-step CTA section
│   └── Footer.tsx              ← Matt black footer
├── lib/
│   ├── constants.ts            ← ALL brand data (phones, services, etc.)
│   ├── supabase.ts             ← Supabase client + types
│   └── utils.ts                ← cn() helper
├── public/
│   └── logo.svg                ← Brand icon (228×228 teal SVG)
├── .env.local.example
├── CLAUDE.md                   ← This file
└── README.md
```

---

## 🗄️ Supabase Schema (to be created)

### Tables needed:

```sql
-- Booking inquiries from the quote form
create table booking_inquiries (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  email       text not null,
  phone       text,
  destination text not null,
  travel_date date,
  guests      integer default 1,
  message     text,
  status      text default 'new', -- new | contacted | confirmed | cancelled
  created_at  timestamptz default now()
);

-- Contact messages
create table contact_messages (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  email      text not null,
  message    text not null,
  created_at timestamptz default now()
);

-- Blog posts (future CMS)
create table blog_posts (
  id           uuid primary key default gen_random_uuid(),
  slug         text unique not null,
  title        text not null,
  excerpt      text,
  content      text,
  category     text,
  cover_image  text,
  published    boolean default false,
  published_at timestamptz,
  created_at   timestamptz default now()
);
```

---

## 🔑 Environment Variables

See `.env.local.example`. Required:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` (server-side only)
- `NEXT_PUBLIC_SITE_URL`

---

## 🚀 Deployment

- **Platform:** Vercel
- **Repo:** `github.com/gilbatini/abientot`
- **Branch:** `main` → auto-deploys to production
- **Live URL:** https://gilbatini-abientot.vercel.app
- **Domain:** TBD (configure in Vercel + Cloudflare)

---

## ✅ Current Status

- [x] Design system (colors, fonts, tokens)
- [x] Navigation (desktop pill nav + mobile drawer)
- [x] Hero section (slideshow + stats)
- [x] Destinations grid
- [x] Services grid
- [x] Booking form (Supabase-ready)
- [x] Testimonials
- [x] Blog section (homepage teaser)
- [x] Trip Planner CTA
- [x] Footer (matt black + teal text)
- [x] About page — story, team, values, FAQ
- [x] Contact page — Supabase form, info cards, map
- [x] Safari Packages page — 6 tour packages + services grid
- [x] Blog listing page — category filter, post cards
- [x] Blog individual posts — 3 full articles with related posts
- [x] Reviews page — rating summary, testimonials, platform CTAs
- [x] WhatsApp float button — all pages, pulse animation

## 🔲 Next Steps

1. **Admin dashboard** — view/manage booking inquiries from Supabase
2. **Email notifications** — `app/api/contact/route.ts` using Resend or Nodemailer
3. **Image optimization** — move hero slides to Supabase Storage / Cloudinary
4. **SEO** — `sitemap.ts`, `robots.ts`, structured data
5. **Animations** — scroll reveal with Framer Motion
6. **Individual package pages** — `app/safari-packages/[slug]/page.tsx`

---

## 📞 Client Contact

- **Email:** abientottours2023@gmail.com  
- **Phone:** +256 788 138 721  
- **Address:** Reed Complex, Ntinda Kiwatule, Kampala, Uganda  

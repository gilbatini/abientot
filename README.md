# À Bientôt Tour & Travels

Uganda Safari & Travel Agency — built with Next.js 14, Tailwind CSS, and Supabase.

## Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Database:** Supabase (PostgreSQL)
- **Deployment:** Vercel
- **Language:** TypeScript

## Getting Started

```bash
# Install dependencies
npm install

# Copy env template
cp .env.local.example .env.local
# Fill in your Supabase credentials

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role key (server only) |
| `NEXT_PUBLIC_SITE_URL` | Production URL |

## Project Structure

See `CLAUDE.md` for full architecture documentation, Supabase schema, and next steps.

## Deploy

Push to `main` branch on GitHub — Vercel auto-deploys.

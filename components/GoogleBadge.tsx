import { cn } from '@/lib/utils'

/** Multicolour Google "G" mark. */
function GoogleG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M45 24c0-1.6-.1-2.7-.4-3.9H24v7h12c-.2 1.9-1.6 4.7-4.5 6.6l-.04.3 6.5 5 .45.05C42.6 35.6 45 30.3 45 24z"
      />
      <path
        fill="#34A853"
        d="M24 46c5.9 0 10.8-1.9 14.4-5.3l-6.9-5.3c-1.8 1.3-4.3 2.2-7.5 2.2-5.7 0-10.6-3.8-12.3-9.1l-.3.02-6.7 5.2-.1.3C8.1 40.9 15.5 46 24 46z"
      />
      <path
        fill="#FBBC05"
        d="M11.7 28.5c-.5-1.4-.7-2.9-.7-4.5s.3-3.1.7-4.5l-.01-.3-6.8-5.3-.2.1C3.2 16.9 2.5 20.3 2.5 24s.7 7.1 2 10l7.2-5.5z"
      />
      <path
        fill="#EB4335"
        d="M24 10.7c4 0 6.8 1.7 8.3 3.2l6.1-6C34.8 4.4 29.9 2.5 24 2.5 15.5 2.5 8.1 7.6 4.7 14l7.1 5.5C13.4 14.5 18.3 10.7 24 10.7z"
      />
    </svg>
  )
}

/**
 * Small pill marking a review as sourced from Google.
 * Replaces the generic "Verified Traveller" tag on Google-sourced reviews.
 */
export default function GoogleBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border border-[#E2D9CC] bg-white/70 px-2.5 py-1',
        'font-caps text-[8px] tracking-[0.16em] uppercase text-brand-dark/70',
        className,
      )}
    >
      <GoogleG className="w-3 h-3" />
      Posted on Google
    </span>
  )
}

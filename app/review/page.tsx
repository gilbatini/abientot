import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import styles from "./review.module.css";
import { GOOGLE_PLACE_ID } from "@/lib/constants";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

// Direct "write a review" deep link — opens Google's review dialog.
const GOOGLE_REVIEW_URL = `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`;

export const metadata: Metadata = {
  title: "Leave a review · À Bientôt Tour & Travels",
  description:
    "Thank you for travelling with À Bientôt Tour & Travels. Share your experience on Google.",
  robots: { index: false }, // funnel page — keep it out of search results
};

export default function ReviewPage() {
  return (
    <main className={`${display.variable} ${styles.page}`}>
      <section className={styles.card} aria-labelledby="review-title">
        <header className={styles.stub}>
          <div className={styles.row}>
            <div className={styles.wordmark}>
              À&nbsp;Bient<span className={styles.accent}>ô</span>t
            </div>
            <span className={styles.stamp}>✈ Bon retour</span>
          </div>
          <div className={styles.eyebrow}>Tour &amp; Travels · Kampala</div>
        </header>

        <div className={styles.perf}>
          <div className={styles.dots} />
        </div>

        <div className={styles.body}>
          <svg
            className={styles.route}
            width="150"
            height="40"
            viewBox="0 0 150 40"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M12 30 Q75 -6 138 30"
              stroke="#CFE9E6"
              strokeWidth="2"
              strokeDasharray="3 5"
              strokeLinecap="round"
            />
            <circle cx="12" cy="30" r="4" fill="#2BBFB3" />
            <circle cx="138" cy="30" r="4" fill="#0E2A28" />
            <g transform="translate(69,3) scale(0.5)">
              <path d="M2 21 L23 12 L2 3 L2 10 L17 12 L2 14 Z" fill="#189a90" />
            </g>
          </svg>

          <h1 id="review-title" className={styles.title}>
            Thank you for travelling
            <br />
            with us — <span className={styles.soon}>à bientôt</span>
          </h1>
          <p className={styles.sub}>
            We&apos;d love to hear how your journey went. Your honest review
            helps other travellers plan with confidence.
          </p>

          <a
            className={styles.cta}
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className={styles.g} viewBox="0 0 48 48" aria-hidden="true">
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
            Write a Google review
          </a>

          <div className={styles.meta}>
            <span>Opens Google</span>
            <span className={styles.dot} />
            <span>about a minute</span>
          </div>

          <div className={styles.trust}>
            <span className={styles.stars}>★★★★★</span>
            <span>
              Rated <b>5.0</b> by travellers on Google
            </span>
          </div>

          <p className={styles.foot}>
            Every review is welcome — good or bad. À Bientôt Tour &amp; Travels,
            Kampala, Uganda.
          </p>
        </div>
      </section>
    </main>
  );
}

'use client';

import { useEffect, useState } from 'react';

interface Review {
  id: string;
  name: string;
  position: string;
  company: string;
  rating: string;
  review: string;
}

const fallbackTestimonials: Review[] = [
  {
    id: 'f1',
    name: 'Ahmad H.',
    position: 'Safety & Health Officer',
    company: 'Manufacturing Sector',
    rating: '★★★★★',
    review: 'The HIRAC training was practical and immediately applicable. Our safety committee walked away with a clear process they could implement the very next week.',
  },
  {
    id: 'f2',
    name: 'Rachel L.',
    position: 'HR Manager',
    company: 'Logistics & Warehousing',
    rating: '★★★★★',
    review: 'MEDSS delivered our domestic inquiry training in-house and tailored it to our actual HR cases. Exactly what we needed — not a generic slide deck.',
  },
  {
    id: 'f3',
    name: 'Siti K.',
    position: 'Compliance Manager',
    company: 'Supply Chain',
    rating: '★★★★★',
    review: 'Claiming through HRD Corp was straightforward and the MEDSS team handled all the paperwork. The security compliance programme helped us pass our TAPA audit.',
  },
];

function TestiCard({ r, dup = false }: { r: Review; dup?: boolean }) {
  return (
    <div className="testi-card" aria-hidden={dup || undefined}>
      <div className="testi-stars" aria-label="rating">{r.rating}</div>
      <p className="testi-quote">&ldquo;{r.review}&rdquo;</p>
      <div className="testi-author">
        <div className="testi-avatar" aria-hidden="true">
          {r.name.slice(0, 2).toUpperCase()}
        </div>
        <div>
          <strong>{r.name}</strong>
          <span>{[r.position, r.company].filter(Boolean).join(', ')}</span>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>(fallbackTestimonials);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const res = await fetch('/api/reviews?approved=1');
        if (!res.ok) return;
        const data: Review[] = await res.json();
        if (data.length > 0) setReviews(data);
      } catch {
        // keep fallback on error
      }
    }
    fetchReviews();
  }, []);

  // Once there are more than 5 reviews, switch from the static grid to an
  // auto-scrolling marquee so every review can live on the site without an
  // ever-growing page. Speed stays constant (~6s per card).
  const scrolling = reviews.length > 5;

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <span className="eyebrow">Client Feedback</span>
          <h2>Trusted by organisations<br />across Malaysia.</h2>
        </div>
      </div>

      {scrolling ? (
        <div className="testi-marquee-wrap">
          <div
            className="testi-marquee-track"
            style={{ animationDuration: `${reviews.length * 6}s` }}
          >
            {reviews.map((r) => (
              <TestiCard key={r.id} r={r} />
            ))}
            {reviews.map((r) => (
              <TestiCard key={`dup-${r.id}`} r={r} dup />
            ))}
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="testimonials-grid">
            {reviews.map((r) => (
              <TestiCard key={r.id} r={r} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}

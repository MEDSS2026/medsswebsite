'use client';

import { useEffect, useState } from 'react';
import { collection, query, where, getDocs, limit } from 'firebase/firestore';
import { db } from '@/lib/firebase';

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

export function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>(fallbackTestimonials);

  useEffect(() => {
    async function fetchReviews() {
      try {
        const q = query(
          collection(db, 'reviews'),
          where('approved', '==', true),
          limit(6)
        );
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...(doc.data() as Omit<Review, 'id'>),
          }));
          setReviews(data);
        }
      } catch {
        // keep fallback on error
      }
    }
    fetchReviews();
  }, []);

  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="testimonials-header">
          <span className="eyebrow">Client Feedback</span>
          <h2>Trusted by organisations<br />across Malaysia.</h2>
        </div>
        <div className="testimonials-grid">
          {reviews.map((r) => (
            <div className="testi-card" key={r.id}>
              <div className="testi-stars" aria-label="5 stars">{r.rating}</div>
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
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { REVIEW_MAX_LENGTH } from '@/lib/review-limits';

export function ReviewForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [review, setReview] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          position: data.get('position') || '',
          company: data.get('company') || '',
          rating: data.get('rating'),
          review: data.get('review'),
        }),
      });
      if (!res.ok) throw new Error(`Submit failed (${res.status})`);
      setStatus('success');
      form.reset();
      setReview('');
    } catch (err) {
      console.error('Submit error:', err);
      setStatus('error');
    }
  }

  return (
    <section className="review-section">
      <div className="container">
        <div className="review-inner">
          <div className="review-header">
            <span className="eyebrow">Share Your Experience</span>
            <h2>Leave Us a Review</h2>
            <p className="review-subhead">
              Enjoyed your training or consultancy with MEDSS? We&rsquo;d love to hear from you.
              Approved reviews will appear on our website.
            </p>
          </div>

          {status === 'success' ? (
            <div className="review-success">
              <div className="review-success-icon" aria-hidden="true">✓</div>
              <h3>Thank you for your review!</h3>
              <p>We&rsquo;ll review your submission and publish it shortly.</p>
            </div>
          ) : (
            <form className="review-form" onSubmit={handleSubmit}>
              <div className="review-form-row">
                <div className="review-form-group">
                  <label htmlFor="review-name">Your Name *</label>
                  <input id="review-name" type="text" name="name" placeholder="Your full name" required />
                </div>
                <div className="review-form-group">
                  <label htmlFor="review-position">Position / Job Title</label>
                  <input id="review-position" type="text" name="position" placeholder="e.g. Safety Officer" />
                </div>
              </div>
              <div className="review-form-row">
                <div className="review-form-group">
                  <label htmlFor="review-company">Company / Organisation</label>
                  <input id="review-company" type="text" name="company" placeholder="Your organisation" />
                </div>
                <div className="review-form-group">
                  <label htmlFor="review-rating">Rating *</label>
                  <select id="review-rating" name="rating" required>
                    <option value="">Select a rating</option>
                    <option value="★★★★★">★★★★★ Excellent</option>
                    <option value="★★★★">★★★★ Good</option>
                    <option value="★★★">★★★ Average</option>
                  </select>
                </div>
              </div>
              <div className="review-form-group">
                <div className="review-label-row">
                  <label htmlFor="review-message">Your Review *</label>
                  <span
                    className={`review-char-count${review.length >= REVIEW_MAX_LENGTH ? ' at-limit' : ''}`}
                    aria-live="polite"
                  >
                    {review.length}/{REVIEW_MAX_LENGTH}
                  </span>
                </div>
                <textarea
                  id="review-message"
                  name="review"
                  placeholder={`Tell us about your experience with MEDSS training or consultancy... (max ${REVIEW_MAX_LENGTH} characters)`}
                  maxLength={REVIEW_MAX_LENGTH}
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                  aria-describedby="review-message-hint"
                  required
                />
                <p id="review-message-hint" className="review-form-hint">
                  Keep it within {REVIEW_MAX_LENGTH} characters so your feedback displays in
                  full on our website.
                </p>
              </div>
              {status === 'error' && (
                <p className="review-form-error">Something went wrong. Please try again.</p>
              )}
              <button
                className="btn btn-primary review-form-submit"
                type="submit"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Submitting...' : 'Submit Review'}
                {status !== 'submitting' && (
                  <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16">
                    <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </button>
              <p className="review-form-note">
                Submitted reviews are moderated before appearing on our website.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

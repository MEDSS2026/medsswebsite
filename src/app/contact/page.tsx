import type { Metadata } from 'next';
import Link from 'next/link';

const services = [
  'HRDC Claimable Training',
  'HR Consulting',
  'ISO / Management System Consulting',
  'Security Consulting',
  'OSH & Environmental Monitoring',
  'Electronic Security System',
];

const phoneNumbers = [
  { label: '+60 12-274 4432', href: 'tel:+60122744432' },
  { label: '+60 12-667 9601', href: 'tel:+60126679601' },
  { label: '03-2116 9762', href: 'tel:+60321169762' },
];

const emails = [
  { label: 'consultant@medss.com.my', href: 'mailto:consultant@medss.com.my' },
  { label: 'evelyndevid@medss.com.my', href: 'mailto:evelyndevid@medss.com.my' },
];

const address = {
  line1: 'Suite 33-01, 33rd Floor,',
  line2: 'Menara Keck Seng,',
  line3: '203 Jalan Bukit Bintang,',
  line4: '55100 Kuala Lumpur.',
};

const directionsUrl =
  'https://www.google.com/maps/dir/?api=1&destination=Menara+Keck+Seng,203+Jalan+Bukit+Bintang,55100+Kuala+Lumpur,Malaysia';

const mapEmbedUrl =
  'https://maps.google.com/maps?q=Menara+Keck+Seng,203+Jalan+Bukit+Bintang,55100+Kuala+Lumpur,Malaysia&output=embed&hl=en';

export const metadata: Metadata = {
  title: 'Contact MEDSS',
  description:
    'Contact MEDSS Training and Consultancy Sdn. Bhd. for HRDC claimable training, HR consulting, ISO consulting, security consultancy and OSH monitoring services in Kuala Lumpur.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="contact-hero">
        <div className="contact-hero-topbar">
          <div className="container">
            <nav className="contact-hero-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="sep" aria-hidden="true">›</span>
              <span className="current">Contact</span>
            </nav>
          </div>
        </div>
        <div className="container">
          <div className="contact-hero-inner">
            <div>
              <h1 className="contact-hero-title">Let&rsquo;s Work<br />Together.</h1>
              <p className="contact-hero-sub">
                Send an enquiry about training, consultancy, HRDC claimable programmes or
                workplace compliance support. We respond within one business day.
              </p>
              <span className="contact-hero-badge">Responds within one business day</span>
            </div>
            <div className="contact-hero-panel">
              <span className="contact-hero-panel-label">Reach us directly</span>
              <a href="https://wa.me/60122744432" target="_blank" rel="noreferrer" className="contact-hero-channel">
                <span className="contact-hero-channel-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                    <path d="M12 2a9.92 9.92 0 00-8.48 15.14L3 22l4.92-1.3A9.94 9.94 0 1012 2zm5.7 14.56c-.24.68-1.39 1.3-1.92 1.33s-.5.43-3.23-1c-2.72-1.43-4.45-4.9-4.59-5.13a5.2 5.2 0 01-1-3.2 3.61 3.61 0 011.2-2.72 1.22 1.22 0 01.87-.3h.6c.2 0 .46-.07.72.55s.92 2.27 1 2.43a.57.57 0 010 .54 1.11 1.11 0 01-.16.24c-.08.1-.17.18-.25.29s-.18.18-.27.27A.58.58 0 0110 10a5.94 5.94 0 002.8 2.8.64.64 0 00.68-.07c.2-.24.86-1 1.09-1.35s.45-.27.75-.14 2 1 2.34 1.17.57.27.66.42a1.89 1.89 0 01-.62 1.73z"/>
                  </svg>
                </span>
                <span className="contact-hero-channel-text">
                  <span className="contact-hero-channel-name">WhatsApp</span>
                  <span className="contact-hero-channel-value">+60 12-274 4432</span>
                </span>
                <span className="contact-hero-channel-arrow" aria-hidden="true">→</span>
              </a>
              <a href="tel:+60122744432" className="contact-hero-channel">
                <span className="contact-hero-channel-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 01.97-.26 11.36 11.36 0 003.56.57 1 1 0 011 1v3.58a1 1 0 01-1 1A16.62 16.62 0 013 5a1 1 0 011-1h3.57a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.26.97z"/>
                  </svg>
                </span>
                <span className="contact-hero-channel-text">
                  <span className="contact-hero-channel-name">Phone</span>
                  <span className="contact-hero-channel-value">+60 12-274 4432</span>
                </span>
                <span className="contact-hero-channel-arrow" aria-hidden="true">→</span>
              </a>
              <a href="mailto:consultant@medss.com.my" className="contact-hero-channel">
                <span className="contact-hero-channel-icon">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round"/>
                  </svg>
                </span>
                <span className="contact-hero-channel-text">
                  <span className="contact-hero-channel-name">Email</span>
                  <span className="contact-hero-channel-value">consultant@medss.com.my</span>
                </span>
                <span className="contact-hero-channel-arrow" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── What to expect ── */}
      <section className="contact-process">
        <div className="container">
          <div className="contact-process-inner">
            <div className="contact-process-step">
              <span className="contact-process-num">01</span>
              <div>
                <p className="contact-process-label">Submit your enquiry</p>
                <p className="contact-process-desc">Fill in the form with your requirement, service area and contact details.</p>
              </div>
            </div>
            <div className="contact-process-step">
              <span className="contact-process-num">02</span>
              <div>
                <p className="contact-process-label">We review &amp; call back</p>
                <p className="contact-process-desc">A MEDSS consultant reviews your needs and contacts you within one business day.</p>
              </div>
            </div>
            <div className="contact-process-step">
              <span className="contact-process-num">03</span>
              <div>
                <p className="contact-process-label">We propose a solution</p>
                <p className="contact-process-desc">We tailor a training or consultancy proposal to your organisation&rsquo;s specific needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main grid: form + contact info ── */}
      <section className="contact-main">
        <div className="container contact-grid">

          {/* Enquiry form */}
          <div className="contact-form-col">
            <h2 className="contact-col-title">Send an Enquiry</h2>
            <p className="contact-col-sub">
              Fill in the form below and a MEDSS consultant will be in touch within one business day.
            </p>
            <form
              className="contact-form"
              action="mailto:consultant@medss.com.my"
              method="post"
              encType="text/plain"
            >
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="contact-name">Full Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="contact-email">Email Address *</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>
              <div className="contact-form-row">
                <div className="contact-form-group">
                  <label htmlFor="contact-phone">Phone Number</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    name="phone"
                    placeholder="+60 12-xxx xxxx"
                  />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="contact-company">Company Name</label>
                  <input
                    id="contact-company"
                    type="text"
                    name="company"
                    placeholder="Your organisation"
                  />
                </div>
              </div>
              <div className="contact-form-group">
                <label htmlFor="contact-service">Service Interest *</label>
                <select id="contact-service" name="service" required>
                  <option value="">Select a service area</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
              <div className="contact-form-group">
                <label htmlFor="contact-message">Your Requirement *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Describe your training or consultancy requirement, number of participants, preferred dates, or any specific questions."
                  required
                />
              </div>
              <div className="contact-form-trust">
                <span className="contact-form-trust-item">
                  <span className="contact-form-trust-dot" aria-hidden="true" />
                  HRDC Claimable
                </span>
                <span className="contact-form-trust-item">
                  <span className="contact-form-trust-dot" aria-hidden="true" />
                  200+ Organisations
                </span>
                <span className="contact-form-trust-item">
                  <span className="contact-form-trust-dot" aria-hidden="true" />
                  Responds in 1 day
                </span>
              </div>
              <button className="btn btn-primary contact-form-submit" type="submit">
                Send Enquiry
                <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16">
                  <path
                    d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"
                    stroke="currentColor" strokeWidth="2" fill="none"
                    strokeLinecap="round" strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>

          {/* Contact info sidebar */}
          <div className="contact-info-col">
            <div className="contact-info-block">
              <a href="https://wa.me/60122744432" target="_blank" rel="noreferrer" className="contact-wa-sidebar">
                <svg className="contact-wa-sidebar-icon" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2a9.92 9.92 0 00-8.48 15.14L3 22l4.92-1.3A9.94 9.94 0 1012 2zm5.7 14.56c-.24.68-1.39 1.3-1.92 1.33s-.5.43-3.23-1c-2.72-1.43-4.45-4.9-4.59-5.13a5.2 5.2 0 01-1-3.2 3.61 3.61 0 011.2-2.72 1.22 1.22 0 01.87-.3h.6c.2 0 .46-.07.72.55s.92 2.27 1 2.43a.57.57 0 010 .54 1.11 1.11 0 01-.16.24c-.08.1-.17.18-.25.29s-.18.18-.27.27A.58.58 0 0110 10a5.94 5.94 0 002.8 2.8.64.64 0 00.68-.07c.2-.24.86-1 1.09-1.35s.45-.27.75-.14 2 1 2.34 1.17.57.27.66.42a1.89 1.89 0 01-.62 1.73z"/>
                </svg>
                <div>
                  <span className="contact-wa-sidebar-title">Chat on WhatsApp</span>
                  <span className="contact-wa-sidebar-sub">Fastest way to reach us</span>
                </div>
              </a>
            </div>
            <div className="contact-info-block">
              <p className="contact-info-label">
                <svg aria-hidden="true" viewBox="0 0 24 24" width="13" height="13" fill="currentColor">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 01.97-.26 11.36 11.36 0 003.56.57 1 1 0 011 1v3.58a1 1 0 01-1 1A16.62 16.62 0 013 5a1 1 0 011-1h3.57a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.26.97z"/>
                </svg>
                Phone
              </p>
              <ul className="contact-info-list">
                {phoneNumbers.map((p) => (
                  <li key={p.href}><a href={p.href}>{p.label}</a></li>
                ))}
              </ul>
            </div>
            <div className="contact-info-block">
              <p className="contact-info-label">
                <svg aria-hidden="true" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round"/>
                </svg>
                Email
              </p>
              <ul className="contact-info-list">
                {emails.map((e) => (
                  <li key={e.href}><a href={e.href}>{e.label}</a></li>
                ))}
              </ul>
            </div>
            <div className="contact-info-block">
              <p className="contact-info-label">
                <svg aria-hidden="true" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2" strokeLinecap="round"/>
                </svg>
                Business Hours
              </p>
              <div className="contact-hours-grid">
                <span className="contact-hours-day">Mon – Fri</span>
                <span className="contact-hours-time">9:00 AM – 6:00 PM</span>
                <span className="contact-hours-day">Saturday</span>
                <span className="contact-hours-time">9:00 AM – 1:00 PM</span>
                <span className="contact-hours-day">Sunday</span>
                <span className="contact-hours-time contact-hours-closed">Closed</span>
              </div>
            </div>
            <div className="contact-info-block">
              <p className="contact-info-label">
                <svg aria-hidden="true" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" strokeLinecap="round"/>
                </svg>
                Office Address
              </p>
              <address className="contact-address">
                {address.line1}<br />{address.line2}<br />
                {address.line3}<br />{address.line4}
              </address>
            </div>
            <div className="contact-info-block">
              <p className="contact-info-label">
                <svg aria-hidden="true" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="3"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
                Follow &amp; Connect
              </p>
              <ul className="contact-info-list">
                <li><a href="https://www.instagram.com/medss_trainingprovider" target="_blank" rel="noreferrer">@medss_trainingprovider</a></li>
                <li><a href="https://www.medss.com.my" target="_blank" rel="noreferrer">www.medss.com.my</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Map section ── */}
      <section className="contact-map-section">
        <div className="contact-map-grid">
          <div className="contact-map-info">
            <span className="contact-map-eyebrow">Location</span>
            <h2 className="contact-map-title">How to Find Us</h2>
            <address className="contact-map-address">
              <strong>Menara Keck Seng</strong><br />
              Suite 33-01, 33rd Floor<br />
              203 Jalan Bukit Bintang<br />
              55100 Kuala Lumpur
            </address>
            <ul className="contact-map-directions">
              <li>
                <span aria-hidden="true">🚇</span>
                <span>5-minute walk from <strong>Bukit Bintang MRT/LRT</strong> station</span>
              </li>
              <li>
                <span aria-hidden="true">🚗</span>
                <span>Paid parking available at Fahrenheit88 and nearby buildings</span>
              </li>
              <li>
                <span aria-hidden="true">🏢</span>
                <span>Take the lift to <strong>33rd Floor</strong>, Suite 33-01</span>
              </li>
            </ul>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary contact-directions-btn"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16">
                <path
                  d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 16l4.553-2.276A1 1 0 0021 19.882V9.118a1 1 0 00-.553-.894L15 6m0 17V6m0 0L9 3"
                  stroke="currentColor" strokeWidth="2" fill="none"
                  strokeLinecap="round" strokeLinejoin="round"
                />
              </svg>
              Get Directions
            </a>
          </div>

          <div className="contact-map-embed">
            <iframe
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="MEDSS office location — Menara Keck Seng, Kuala Lumpur"
            />
          </div>
        </div>
      </section>
      {/* ── FAQ ── */}
      <section className="contact-faq">
        <div className="container">
          <div className="contact-faq-inner">
            <div>
              <h2 className="contact-faq-heading">Common Questions</h2>
              <p className="contact-faq-sub">Everything you need to know before reaching out.</p>
            </div>
            <div className="contact-faq-list">
              <div className="contact-faq-item">
                <p className="contact-faq-q">Are MEDSS programmes claimable under HRD Corp?</p>
                <p className="contact-faq-a">Yes. MEDSS is a registered HRD Corp training provider. Most programmes are eligible for claim under the HRD Corp levy. We assist with the paperwork and claim submission process.</p>
              </div>
              <div className="contact-faq-item">
                <p className="contact-faq-q">Can training be delivered at our premises?</p>
                <p className="contact-faq-a">Absolutely. We offer in-house delivery for all programmes. Bring us your participant count, preferred dates and location, and we will tailor the session to your organisation.</p>
              </div>
              <div className="contact-faq-item">
                <p className="contact-faq-q">How quickly will someone get back to me?</p>
                <p className="contact-faq-a">We respond to all enquiries within one business day. For urgent requirements, WhatsApp is the fastest channel — we typically reply within a few hours during business hours.</p>
              </div>
              <div className="contact-faq-item">
                <p className="contact-faq-q">Do you only do training, or consulting too?</p>
                <p className="contact-faq-a">Both. MEDSS provides HR consulting, ISO management system advisory, security consulting, and OSH &amp; environmental monitoring — not just training. Use the form to tell us which area you need support in.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';
import type { Metadata } from 'next';
import { ClientMarquee } from '@/components/client-marquee';

const stats = [
  { label: 'Claimable training programmes', value: 'HRDC' },
  { label: 'Core consultancy areas', value: '4' },
  { label: 'Professional service categories', value: '5' },
];

const serviceHighlights = [
  {
    icon: '01',
    title: 'Training Services',
    description:
      'HRDC claimable, in-house and public training programmes covering safety, HR, security and self-development topics.',
  },
  {
    icon: '02',
    title: 'Consulting Services',
    description:
      'HR consulting, ISO systems, TAPA, AEO, GDPMD, security audits and management system advisory.',
  },
  {
    icon: '03',
    title: 'OSH & Environmental Monitoring',
    description:
      'Noise exposure monitoring, chemical exposure monitoring, CHRA, local exhaust ventilation and boundary noise support.',
  },
];

export const metadata: Metadata = {
  title: 'HRDC Claimable Training Malaysia',
  description:
    'MEDSS helps Malaysian organisations improve safety, HR, security readiness and management systems through HRDC claimable training and consultancy.',
  keywords: [
    'HRDC claimable training Malaysia',
    'safety training Malaysia',
    'HR consulting Malaysia',
    'ISO consultancy',
    'security consultancy',
  ],
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div>
            <span className="eyebrow">HRDC Claimable Training Provider</span>
            <h1>Empower Your Workforce.<br />Ensure <span className="text-yellow">Compliance.</span></h1>
            <p>
              MEDSS helps Malaysian organisations improve safety, human resources, security readiness and management
              systems through practical training programmes and professional consulting services.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/contact">
                Send An Enquiry
              </Link>
              <Link className="btn btn-outline" href="/services">
                Explore Services
              </Link>
            </div>
            <div className="hero-stats">
              {stats.map((item) => (
                <div className="hero-stat-item" key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          <aside className="hero-glass">
            <h2>Your partner for training and consultancy</h2>
            <p>
              From HR advisory and ISO management systems to OSH monitoring, security consultancy and in-house training,
              MEDSS delivers structured solutions for business compliance and workforce capability.
            </p>
            <div className="badges">
              <img src="/assets/logos/hrdc-claimable.png" alt="HRD Corp claimable logo" />
              <img src="/assets/logos/hrdc-training-provider.png" alt="HRD Corp registered training provider logo" />
            </div>
          </aside>
        </div>
      </section>

      <ClientMarquee />

      <section className="wwd-section">
        <div className="container">
          <div className="wwd-panel">
            <div>
              <span className="eyebrow">What We Do</span>
              <h2>Everything your organisation needs — under one roof.</h2>
            </div>
            <Link href="/services" className="wwd-panel-cta">
              See all services ↗
            </Link>
          </div>

          <div className="wwd-list">
            <Link href="/services" className="wwd-row">
              <span className="wwd-row-num">01</span>
              <div className="wwd-row-body">
                <h3>Training Services</h3>
                <p>HRDC claimable, in-house and public programmes covering safety, HR, security and self-development.</p>
              </div>
              <ul className="wwd-row-tags">
                <li>Safety &amp; Health</li>
                <li>Human Resources</li>
                <li>Security</li>
                <li>Self Development</li>
              </ul>
              <span className="wwd-row-arrow" aria-hidden="true">→</span>
            </Link>

            <Link href="/services" className="wwd-row">
              <span className="wwd-row-num">02</span>
              <div className="wwd-row-body">
                <h3>Consulting Services</h3>
                <p>HR advisory, ISO management systems, TAPA, GDPMD, security audits and compliance advisory.</p>
              </div>
              <ul className="wwd-row-tags">
                <li>ISO Systems</li>
                <li>HR Advisory</li>
                <li>Security Audit</li>
                <li>TAPA / GDPMD</li>
              </ul>
              <span className="wwd-row-arrow" aria-hidden="true">→</span>
            </Link>

            <Link href="/services" className="wwd-row">
              <span className="wwd-row-num">03</span>
              <div className="wwd-row-body">
                <h3>OSH &amp; Environmental Monitoring</h3>
                <p>Noise &amp; chemical exposure monitoring, CHRA, local exhaust ventilation and boundary noise support.</p>
              </div>
              <ul className="wwd-row-tags">
                <li>Noise Monitoring</li>
                <li>Chemical Exposure</li>
                <li>CHRA</li>
                <li>LEV Assessment</li>
              </ul>
              <span className="wwd-row-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="stats-strip">
        <div className="container stats-grid">
          <div className="stat-item">
            <strong>10+</strong>
            <span>Years of industry experience</span>
          </div>
          <div className="stat-divider" aria-hidden="true" />
          <div className="stat-item">
            <strong>50+</strong>
            <span>HRDC claimable programmes</span>
          </div>
          <div className="stat-divider" aria-hidden="true" />
          <div className="stat-item">
            <strong>200+</strong>
            <span>Organisations trained</span>
          </div>
          <div className="stat-divider" aria-hidden="true" />
          <div className="stat-item">
            <strong>4</strong>
            <span>Core service pillars</span>
          </div>
        </div>
      </section>

      <section className="why-bento-section">
        <div className="container">
          <div className="why-bento-header">
            <span className="eyebrow">Why Choose MEDSS</span>
            <h2>Real expertise.<br />Real results.</h2>
            <p className="why-bento-lead">We don't just run programmes — we deliver measurable outcomes for HR, OSH, compliance and security needs across industries.</p>
          </div>

          <div className="why-bento-grid">

            {/* HRDC Claimable — dark tile */}
            <div className="why-tile why-tile--dark">
              <div className="why-tile-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <h4>HRDC Claimable</h4>
              <p>All eligible programmes claimable under HRD Corp for Malaysian employers.</p>
              <span className="why-tile-badge">HRD Corp Registered</span>
            </div>

            {/* 200+ stat — yellow tile */}
            <div className="why-tile why-tile--yellow">
              <strong className="why-tile-stat">200+</strong>
              <span className="why-tile-stat-label">Organisations<br />Trained</span>
            </div>

            {/* Industry Practitioners — white tile */}
            <div className="why-tile why-tile--white">
              <div className="why-tile-icon why-tile-icon--light">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <h4>Industry Practitioners</h4>
              <p>Trainers with hands-on experience in safety, HR, logistics and management.</p>
            </div>

            {/* 50+ stat — white tile */}
            <div className="why-tile why-tile--white why-tile--stat-light">
              <strong className="why-tile-stat why-tile-stat--dark">50+</strong>
              <span className="why-tile-stat-label why-tile-stat-label--dark">HRDC Claimable<br />Programmes</span>
            </div>

            {/* In-house & Compliance — wide white tile spanning 2 cols */}
            <div className="why-tile why-tile--white why-tile--wide">
              <div className="why-tile-split">
                <div className="why-tile-split-item">
                  <div className="why-tile-icon why-tile-icon--light">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                  </div>
                  <h4>In-house &amp; Public Formats</h4>
                  <p>Flexible delivery — at your premises or our public sessions, nationwide.</p>
                </div>
                <div className="why-tile-split-divider" aria-hidden="true" />
                <div className="why-tile-split-item">
                  <div className="why-tile-icon why-tile-icon--light">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                  </div>
                  <h4>Full Compliance Coverage</h4>
                  <p>HR, OSH, ISO, TAPA, security — one trusted provider for all.</p>
                </div>
              </div>
            </div>

            {/* Nationwide Reach — dark tile */}
            <div className="why-tile why-tile--dark why-tile--accent">
              <h4>Nationwide Reach</h4>
              <p>Serving clients across Peninsular Malaysia and East Malaysia.</p>
            </div>

            {/* Customised Programmes — wide white tile spanning 2 cols */}
            <div className="why-tile why-tile--white why-tile--wide why-tile--cta-row">
              <div>
                <h4>Customised Programmes</h4>
                <p>Training designed around your organisation's specific needs and industry sector.</p>
              </div>
              <Link className="btn btn-primary why-tile-inline-btn" href="/contact">
                Get a Quote
              </Link>
            </div>

          </div>

          <div className="why-bento-cta">
            <Link className="btn btn-primary" href="/training-gallery">
              View Training Programmes
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured Training Programmes ── */}
      <section className="programmes-section">
        <div className="container">
          <div className="programmes-header">
            <div>
              <span className="eyebrow">Training Programmes</span>
              <h2>HRDC claimable programmes<br />across every discipline.</h2>
            </div>
            <Link className="btn btn-outline programmes-header-link" href="/training-gallery">
              View All Programmes
            </Link>
          </div>

          <div className="programmes-grid">
            <div className="prog-card">
              <span className="prog-tag prog-tag--safety">Safety &amp; Health</span>
              <h4>Basic Chemical Safe Handling</h4>
              <p>Covers chemical hazards, SDS interpretation, PPE selection and safe storage for workplace compliance.</p>
              <Link className="prog-enquire" href="/contact">Enquire →</Link>
            </div>
            <div className="prog-card">
              <span className="prog-tag prog-tag--safety">Safety &amp; Health</span>
              <h4>Hazard Identification, Risk Assessment &amp; Risk Control (HIRAC)</h4>
              <p>Equips teams with systematic tools to identify workplace hazards and implement effective controls.</p>
              <Link className="prog-enquire" href="/contact">Enquire →</Link>
            </div>
            <div className="prog-card">
              <span className="prog-tag prog-tag--safety">Safety &amp; Health</span>
              <h4>Fire Safety, Fire Extinguisher &amp; ERP</h4>
              <p>Practical fire prevention, extinguisher operation and emergency response planning for your facility.</p>
              <Link className="prog-enquire" href="/contact">Enquire →</Link>
            </div>
            <div className="prog-card">
              <span className="prog-tag prog-tag--hr">Human Resources</span>
              <h4>Labour Law &amp; IR Law</h4>
              <p>Deep-dive into the Employment Act, Industrial Relations Act and termination procedures in Malaysia.</p>
              <Link className="prog-enquire" href="/contact">Enquire →</Link>
            </div>
            <div className="prog-card">
              <span className="prog-tag prog-tag--hr">Human Resources</span>
              <h4>Conducting an Effective Domestic Inquiry</h4>
              <p>Guides HR practitioners and managers through legally sound DI procedures and documentation.</p>
              <Link className="prog-enquire" href="/contact">Enquire →</Link>
            </div>
            <div className="prog-card">
              <span className="prog-tag prog-tag--security">Security</span>
              <h4>Facility Security Compliance</h4>
              <p>TAPA-aligned training on physical security controls, threat assessment and compliance reporting.</p>
              <Link className="prog-enquire" href="/contact">Enquire →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Gallery Teaser ── */}
      <section className="gallery-teaser-section">
        <div className="container">
          <div className="gallery-teaser-inner">

            {/* Left: content */}
            <div>
              <span className="gallery-teaser-eyebrow">Training Gallery</span>
              <h2 className="gallery-teaser-heading">Training<br />in action.</h2>
              <p className="gallery-teaser-desc">
                From safety workshops to hands-on practical sessions — see how MEDSS delivers results for organisations across Malaysia.
              </p>
              <Link className="gallery-teaser-btn-dark" href="/training-gallery">
                View Full Portfolio →
              </Link>
            </div>

            {/* Right: photos */}
            <div className="gallery-teaser-photos">
              <div className="gallery-teaser-main-photo">
                <img src="/assets/training/road-training-3.jpg" alt="Road Safety and Defensive Driving Training session" />
                <span className="gallery-teaser-pill">Road Safety &amp; Defensive Driving</span>
              </div>
              <div className="gallery-teaser-stack">
                <div className="gallery-teaser-stack-photo">
                  <img src="/assets/training/chemical-training-2.jpg" alt="Basic Chemical Safe Handling Training" />
                  <span className="gallery-teaser-pill">Chemical Safe Handling</span>
                </div>
                <div className="gallery-teaser-stack-photo">
                  <img src="/assets/training/electrical-training.jpg" alt="Electrical Safety Training practical session" />
                  <span className="gallery-teaser-pill">Electrical Safety</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-header">
            <span className="eyebrow">Client Feedback</span>
            <h2>Trusted by organisations<br />across Malaysia.</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testi-card">
              <div className="testi-stars" aria-label="5 stars">★★★★★</div>
              <p className="testi-quote">"The HIRAC training was practical and immediately applicable. Our safety committee walked away with a clear process they could implement the very next week."</p>
              <div className="testi-author">
                <div className="testi-avatar" aria-hidden="true">AH</div>
                <div>
                  <strong>Ahmad H.</strong>
                  <span>Safety &amp; Health Officer, Manufacturing Sector</span>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <div className="testi-stars" aria-label="5 stars">★★★★★</div>
              <p className="testi-quote">"MEDSS delivered our domestic inquiry training in-house and tailored it to our actual HR cases. Exactly what we needed — not a generic slide deck."</p>
              <div className="testi-author">
                <div className="testi-avatar" aria-hidden="true">RL</div>
                <div>
                  <strong>Rachel L.</strong>
                  <span>HR Manager, Logistics &amp; Warehousing</span>
                </div>
              </div>
            </div>
            <div className="testi-card">
              <div className="testi-stars" aria-label="5 stars">★★★★★</div>
              <p className="testi-quote">"Claiming through HRD Corp was straightforward and the MEDSS team handled all the paperwork. The security compliance programme helped us pass our TAPA audit."</p>
              <div className="testi-author">
                <div className="testi-avatar" aria-hidden="true">SK</div>
                <div>
                  <strong>Siti K.</strong>
                  <span>Compliance Manager, Supply Chain</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Industries We Serve ── */}
      <section className="industries-section">
        <div className="container">
          <div className="industries-top">
            <div>
              <span className="eyebrow">Industries We Serve</span>
              <h2>Built for the sectors<br />that need it most.</h2>
            </div>
            <p className="industries-intro">From factory floors to corporate offices — MEDSS delivers training and consultancy across Malaysia's most demanding industries.</p>
          </div>
          <div className="industries-grid">
            <div className="ind-item">
              <div className="ind-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span>Manufacturing</span>
            </div>
            <div className="ind-item">
              <div className="ind-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 17H5a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3m-8 14l3-3m0 0l3 3m-3-3v-7m6 3h-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span>Logistics &amp; Warehousing</span>
            </div>
            <div className="ind-item">
              <div className="ind-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span>Construction</span>
            </div>
            <div className="ind-item">
              <div className="ind-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span>Corporate &amp; HR</span>
            </div>
            <div className="ind-item">
              <div className="ind-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span>Security &amp; Compliance</span>
            </div>
            <div className="ind-item">
              <div className="ind-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span>Oil, Gas &amp; Chemical</span>
            </div>
            <div className="ind-item">
              <div className="ind-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span>Hospitality &amp; Retail</span>
            </div>
            <div className="ind-item">
              <div className="ind-icon">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <span>Energy &amp; Utilities</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-full">
        <div className="container">
          <div className="cta-full-inner">

            <div className="cta-full-left">
              <span className="eyebrow">Get Started</span>
              <h2 className="cta-full-heading">
                Ready to train your team or certify your compliance?
              </h2>
              <ul className="cta-full-trust">
                <li>HRDC Claimable programmes</li>
                <li>In-house &amp; public delivery formats</li>
                <li>200+ organisations served nationwide</li>
                <li>Response within 24 hours</li>
              </ul>
            </div>

            <div className="cta-full-divider" aria-hidden="true" />

            <div className="cta-full-right">
              <p className="cta-full-sub">
                Speak with MEDSS about HRDC claimable programmes, HR advisory, ISO consulting,
                security compliance or OSH monitoring requirements.
              </p>
              <div className="cta-full-actions">
                <Link className="btn btn-primary cta-full-btn-primary" href="https://wa.me/60126679601">
                  Contact On WhatsApp
                </Link>
                <Link className="cta-full-btn-ghost" href="/contact">
                  Send an Enquiry
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

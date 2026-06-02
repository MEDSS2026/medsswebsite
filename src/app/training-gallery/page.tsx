import type { Metadata } from 'next';
import Link from 'next/link';
import { ProgrammeFilter } from '@/components/programme-filter';

export const metadata: Metadata = {
  title: 'Training Programmes & Portfolio',
  description:
    'HRDC claimable training programmes in safety and health, security, human resources and self-development — delivered in-house or at public sessions across Malaysia.',
  alternates: {
    canonical: '/training-gallery',
  },
};

const galleryImages = [
  { src: '/assets/training/chemical-training.jpg',    alt: 'Chemical safe handling training',          spanRow: true,  spanCol: false },
  { src: '/assets/training/chemical-training-2.jpg',  alt: 'Chemical handling training participants',   spanRow: false, spanCol: false },
  { src: '/assets/training/chemical-training-3.jpg',  alt: 'In-house chemical training session',        spanRow: false, spanCol: false },
  { src: '/assets/training/electrical-training.jpg',  alt: 'Electrical safety training',                spanRow: false, spanCol: false },
  { src: '/assets/training/electrical-training-2.jpg',alt: 'Electrical safety training session',        spanRow: true,  spanCol: false },
  { src: '/assets/training/hero-road-safety.jpg',     alt: 'Road safety programme overview',            spanRow: false, spanCol: false },
  { src: '/assets/training/road-training-1.jpg',      alt: 'Road safety training participants',         spanRow: false, spanCol: false },
  { src: '/assets/training/road-training-2.jpg',      alt: 'Defensive driving training activity',       spanRow: false, spanCol: false },
  { src: '/assets/training/road-training-3.jpg',      alt: 'MEDSS defensive driving programme',         spanRow: false, spanCol: true  },
];

const clientLogos = [
  { src: '/assets/clients/bmi.png',         alt: 'BMI' },
  { src: '/assets/clients/century.png',     alt: 'Century' },
  { src: '/assets/clients/jj-express.png',  alt: 'JJ Express' },
  { src: '/assets/clients/maxitulin.jpeg',  alt: 'Maxitulin' },
  { src: '/assets/clients/mepsb.png',       alt: 'MEPSB' },
  { src: '/assets/clients/microenergy.png', alt: 'Microenergy' },
  { src: '/assets/clients/morelux.png',     alt: 'Morelux' },
  { src: '/assets/clients/ns.png',          alt: 'NS' },
  { src: '/assets/clients/prismma.png',     alt: 'Prismma' },
  { src: '/assets/clients/toll.png',        alt: 'Toll' },
  { src: '/assets/clients/tri-mode.png',    alt: 'Tri-Mode' },
  { src: '/assets/clients/twc.png',         alt: 'TWC' },
  { src: '/assets/clients/vanguards.png',   alt: 'Vanguards' },
  { src: '/assets/clients/visions.png',     alt: 'Visions' },
  { src: '/assets/clients/ht-logistics.png', alt: 'HT Logistics' },
  { src: '/assets/clients/shield-security.png', alt: 'Shield Security' },
];

export default function TrainingGalleryPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="portfolio-hero">
        <div className="container">
          <nav className="svc-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span>Training &amp; Portfolio</span>
          </nav>
          <h1 className="portfolio-hero-title">
            Training Programmes<br />&amp; Portfolio
          </h1>
          <p className="portfolio-hero-sub">
            HRDC claimable programmes across safety, HR, security and self-development —
            delivered in-house or at public sessions nationwide.
          </p>
          <div className="portfolio-hero-actions">
            <a href="#programmes" className="btn btn-primary">View Programmes</a>
            <Link href="/contact" className="btn btn-outline portfolio-hero-btn-outline">
              Enquire Now
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="portfolio-stats" aria-label="Key statistics">
        <div className="container portfolio-stats-grid">
          <div className="portfolio-stat">
            <strong>200+</strong>
            <span>Organisations trained</span>
          </div>
          <div className="portfolio-stat-divider" aria-hidden="true" />
          <div className="portfolio-stat">
            <strong>32</strong>
            <span>HRDC claimable programmes</span>
          </div>
          <div className="portfolio-stat-divider" aria-hidden="true" />
          <div className="portfolio-stat">
            <strong>4</strong>
            <span>Training categories</span>
          </div>
          <div className="portfolio-stat-divider" aria-hidden="true" />
          <div className="portfolio-stat">
            <strong>10+</strong>
            <span>Years of industry experience</span>
          </div>
        </div>
      </section>

      {/* ── Programmes ── */}
      <section className="section" id="programmes">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">HRDC Claimable Programmes</span>
            <h2>32 programmes across every discipline</h2>
            <p>
              All programmes are deliverable in-house at your premises or as public sessions.
              Most are claimable under HRD Corp.
            </p>
          </div>
          <ProgrammeFilter />
        </div>
      </section>

      {/* ── Gallery ── */}
      <section className="section section-light" id="gallery">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Training Gallery</span>
            <h2>Programmes in action</h2>
            <p>Selected photos from MEDSS training sessions across Malaysia.</p>
          </div>
          <div className="portfolio-gallery">
            {galleryImages.map((image) => {
              const classes = [
                'portfolio-gallery-item',
                image.spanRow ? 'portfolio-gallery-item--span-row' : '',
                image.spanCol ? 'portfolio-gallery-item--span-col' : '',
              ]
                .filter(Boolean)
                .join(' ');
              return (
                <div key={image.src} className={classes}>
                  <img src={image.src} alt={image.alt} loading="lazy" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Clients ── */}
      <section className="section portfolio-clients-section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Our Clients</span>
            <h2>Trusted by organisations across Malaysia</h2>
            <p>Companies from logistics, manufacturing, security, healthcare and more.</p>
          </div>
          <div className="portfolio-clients-grid">
            {clientLogos.map((logo) => (
              <div key={logo.src} className="portfolio-client-logo">
                <img src={logo.src} alt={logo.alt} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Promotional Flyers ── */}
      <section className="flyers-section">
        <div className="container">
          <div className="flyers-header">
            <span className="eyebrow">Programme Flyers</span>
            <h2>Download Our Training Flyers</h2>
            <p className="flyers-subhead">Click any flyer below to view or download the full programme details.</p>
          </div>
          <div className="flyers-grid">
            {[
              { file: 'Basic Chemical Safe Handling Training.pdf', title: 'Basic Chemical Safe Handling' },
              { file: 'Conducting Effective Domestic Enquiry Training.pdf', title: 'Conducting Effective Domestic Enquiry' },
              { file: 'Defensive Driving Heavy Vehicle Training.pdf', title: 'Defensive Driving — Heavy Vehicle' },
              { file: 'Lock Out Tag Out.pdf', title: 'Lock Out Tag Out (LOTO)' },
              { file: 'Supply Chain Security.pdf', title: 'Supply Chain Security' },
              { file: 'Warehouse Process Improvement.pdf', title: 'Warehouse Process Improvement' },
            ].map(({ file, title }) => (
              <a
                key={file}
                href={`/assets/flyers/${encodeURIComponent(file)}`}
                target="_blank"
                rel="noreferrer"
                className="flyer-card"
              >
                <div className="flyer-card-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13 3v5a1 1 0 001 1h5M9 13h6M9 17h4" strokeLinecap="round"/>
                  </svg>
                </div>
                <span className="flyer-card-title">{title}</span>
                <span className="flyer-card-action">View Flyer →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="portfolio-cta-section">
        <div className="container">
          <div className="portfolio-cta">
            <div className="portfolio-cta-left">
              <span className="portfolio-cta-eyebrow">Get Started</span>
              <h2 className="portfolio-cta-headline">
                Looking for in-house or HRDC claimable training?
              </h2>
              <p className="portfolio-cta-sub">
                Contact MEDSS to discuss topics, participant numbers, dates and HRD Corp claim
                requirements. We respond within one business day.
              </p>
            </div>
            <div className="portfolio-cta-right">
              <Link className="btn btn-primary" href="/contact">Send Enquiry</Link>
              <Link className="portfolio-cta-link" href="/services">
                Explore consulting services →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

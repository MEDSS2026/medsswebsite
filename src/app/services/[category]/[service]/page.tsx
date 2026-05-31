import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { serviceCategories, getServiceBySlug } from '@/data/services';

interface Props {
  params: Promise<{ category: string; service: string }>;
}

export async function generateStaticParams() {
  return serviceCategories.flatMap((c) =>
    c.services.map((s) => ({ category: c.slug, service: s.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: categorySlug, service: serviceSlug } = await params;
  const found = getServiceBySlug(categorySlug, serviceSlug);
  if (!found) return {};
  const { category, service } = found;
  return {
    title: `${service.title} | ${category.title} | MEDSS`,
    description: service.tagline,
    alternates: { canonical: `/services/${categorySlug}/${serviceSlug}` },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { category: categorySlug, service: serviceSlug } = await params;
  const found = getServiceBySlug(categorySlug, serviceSlug);
  if (!found) notFound();

  const { category, service } = found;
  const currentIndex = category.services.findIndex((s) => s.slug === serviceSlug);
  const prevService = currentIndex > 0 ? category.services[currentIndex - 1] : null;
  const nextService =
    currentIndex < category.services.length - 1 ? category.services[currentIndex + 1] : null;

  const overviewParagraphs = service.overview.split('\n\n');

  return (
    <>
      {/* Hero */}
      <section className="svc-detail-hero">
        <div className="svc-detail-hero-topbar">
          <div className="container">
            <nav className="svc-detail-breadcrumb" aria-label="Breadcrumb">
              <Link href="/services">Services</Link>
              <span className="sep" aria-hidden="true">›</span>
              <Link href={`/services/${category.slug}`}>{category.title}</Link>
              <span className="sep" aria-hidden="true">›</span>
              <span className="current">{service.title}</span>
            </nav>
          </div>
        </div>
        <div className="container">
          <div className="svc-detail-hero-inner">
            <div className="svc-detail-hero-text">
              <p className="svc-detail-category-tag">{category.title}</p>
              <h1 className="svc-detail-title">{service.title}</h1>
              <p className="svc-detail-tagline">{service.tagline}</p>
              <div className="svc-detail-hero-actions">
                <Link href="/contact" className="btn btn-primary">Get a Consultation ↗</Link>
                <p className="svc-detail-hero-note">Responds within one business day</p>
              </div>
            </div>
            <div className="svc-detail-hero-panel">
              <p className="svc-detail-hero-panel-label">What we deliver</p>
              <ul className="svc-detail-hero-panel-list">
                {service.whatWeDeliver.map((item, i) => (
                  <li key={i}>
                    <span className="svc-detail-hero-panel-dot" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="svc-detail-overview">
        <div className="container svc-detail-overview-inner">
          <div className="svc-detail-overview-text">
            <h2 className="svc-detail-section-title">Overview</h2>
            {overviewParagraphs.map((p, i) => (
              <p key={i} className="svc-detail-para">{p}</p>
            ))}
          </div>

          {/* What we deliver */}
          <div className="svc-detail-deliver">
            <h2 className="svc-detail-section-title">What We Deliver</h2>
            <ul className="svc-detail-deliver-list">
              {service.whatWeDeliver.map((item, i) => (
                <li key={i}>
                  <span className="svc-detail-deliver-dot" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="svc-detail-benefits">
        <div className="container">
          <h2 className="svc-detail-section-title svc-detail-section-title--center">
            Key Benefits
          </h2>
          <div className="svc-detail-benefits-grid">
            {service.benefits.map((benefit) => (
              <div key={benefit.title} className="svc-detail-benefit-card">
                <span className="svc-detail-benefit-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="20" height="20">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <h3 className="svc-detail-benefit-title">{benefit.title}</h3>
                <p className="svc-detail-benefit-desc">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who needs this */}
      <section className="svc-detail-who">
        <div className="container">
          <div className="svc-detail-who-inner">
            <p className="svc-detail-who-label">Who needs this service</p>
            <p className="svc-detail-who-text">{service.whoNeedsThis}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="svc-detail-cta">
        <div className="container">
          <div className="svc-detail-cta-inner">
            <div>
              <p className="svc-detail-cta-eyebrow">Ready to get started?</p>
              <h2 className="svc-detail-cta-title">Interested in {service.title}?</h2>
              <p className="svc-detail-cta-body">
                Contact MEDSS for a no-obligation consultation. Our consultants will assess your needs and propose the right solution.
              </p>
              <ul className="svc-detail-cta-trust">
                <li>HRDC Claimable</li>
                <li>200+ Organisations</li>
                <li>Responds in 1 day</li>
              </ul>
            </div>
            <div className="svc-detail-cta-actions">
              <Link href="/contact" className="btn btn-primary">Send Enquiry ↗</Link>
              <a href="https://wa.me/60126679601" target="_blank" rel="noreferrer" className="svc-detail-cta-whatsapp">
                💬 WhatsApp Us
              </a>
              <Link href={`/services/${category.slug}`} className="svc-detail-cta-back">
                ← Back to {category.shortTitle}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Prev / Next navigation */}
      {(prevService || nextService) && (
        <nav className="svc-detail-nav" aria-label="Other services">
          <div className="container svc-detail-nav-inner">
            {prevService ? (
              <Link
                href={`/services/${category.slug}/${prevService.slug}`}
                className="svc-detail-nav-item svc-detail-nav-item--prev"
              >
                <span className="svc-detail-nav-arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M19 12H5M12 5l-7 7 7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="svc-detail-nav-text">
                  <span className="svc-detail-nav-dir">Previous</span>
                  <span className="svc-detail-nav-name">{prevService.title}</span>
                  <span className="svc-detail-nav-cat">{category.title}</span>
                </span>
              </Link>
            ) : <div />}
            {nextService ? (
              <Link
                href={`/services/${category.slug}/${nextService.slug}`}
                className="svc-detail-nav-item svc-detail-nav-item--next"
              >
                <span className="svc-detail-nav-arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="svc-detail-nav-text">
                  <span className="svc-detail-nav-dir">Next</span>
                  <span className="svc-detail-nav-name">{nextService.title}</span>
                  <span className="svc-detail-nav-cat">{category.title}</span>
                </span>
              </Link>
            ) : <div />}
          </div>
        </nav>
      )}
    </>
  );
}

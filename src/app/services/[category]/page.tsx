import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { serviceCategories, getCategoryBySlug } from '@/data/services';

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return serviceCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: `${category.title} | MEDSS`,
    description: category.description,
    alternates: { canonical: `/services/${slug}` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category: slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();
  const categoryNum = String(serviceCategories.findIndex(c => c.slug === slug) + 1).padStart(2, '0');

  return (
    <>
      {/* Hero */}
      <section className="svc-cat-hero">
        <span className="svc-cat-hero-bg-num" aria-hidden="true">{categoryNum}</span>
        <div className="container">
          <div className="svc-cat-hero-inner">

            {/* Left: main content */}
            <div>
              <Link href="/services" className="svc-cat-breadcrumb">← All services</Link>
              <h1 className="svc-cat-title">{category.title}</h1>
              <p className="svc-cat-tagline">{category.tagline}</p>
              <div className="svc-cat-hero-actions">
                <Link href="/contact" className="svc-cat-hero-enquire">Send an Enquiry ↗</Link>
                <span className="svc-cat-hero-count">{category.services.length} services</span>
              </div>
            </div>

            {/* Right: services list */}
            <div>
              <span className="svc-cat-hero-panel-label">What&rsquo;s included</span>
              <ul className="svc-cat-hero-panel-list">
                {category.services.map((s) => (
                  <li key={s.slug}>
                    <span className="svc-cat-hero-panel-dot" aria-hidden="true" />
                    {s.title}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Service cards */}
      <section className="svc-cat-grid-section">
        <div className="container">
          <div className="svc-cat-grid">
            {category.services.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${category.slug}/${service.slug}`}
                className="svc-card"
              >
                <span className="svc-card-bg-num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="svc-card-num">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="svc-card-title">{service.title}</h2>
                <p className="svc-card-tagline">{service.tagline}</p>
                <span className="svc-card-cta">
                  Learn more
                  <svg aria-hidden="true" viewBox="0 0 24 24" width="13" height="13">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="svc-cat-cta">
        <div className="container">
          <div className="svc-cat-cta-inner">
            <div>
              <p className="svc-cat-cta-eyebrow">Ready to get started?</p>
              <h2 className="svc-cat-cta-title">Talk to a MEDSS consultant today.</h2>
              <p className="svc-cat-cta-body">
                We respond within one business day. No obligation.
              </p>
            </div>
            <div className="svc-cat-cta-actions">
              <Link href="/contact" className="btn btn-primary">Send Enquiry</Link>
              <Link href="/services" className="svc-cat-cta-back">← All services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

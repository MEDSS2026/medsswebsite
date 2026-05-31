import type { Metadata } from 'next';
import Link from 'next/link';
import { serviceCategories } from '@/data/services';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Explore MEDSS services including HR consulting, ISO management system consulting, security consulting and OSH/environmental monitoring in Malaysia.',
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="breadcrumb">Home / Services</div>
          <h1>Consulting &amp; Professional Services</h1>
          <p>
            MEDSS supports organisations with HR, management system, security, and OSH/environmental
            monitoring services across Malaysia.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Service Areas</span>
            <h2>Structured support for compliance and performance</h2>
          </div>
          <div className="grid-2">
            {serviceCategories.map((cat) => (
              <div className="card svc-overview-card" key={cat.slug}>
                <div className="svc-overview-card-head">
                  <h3>
                    <Link href={`/services/${cat.slug}`} className="svc-overview-cat-link">
                      {cat.title}
                    </Link>
                  </h3>
                  <Link href={`/services/${cat.slug}`} className="svc-overview-see-all">
                    See all →
                  </Link>
                </div>
                <ul className="list">
                  {cat.services.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${cat.slug}/${service.slug}`}
                        className="svc-overview-item-link"
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container split">
          <div>
            <img
              className="rounded-img"
              src="/assets/training/electrical-training.jpg"
              alt="Electrical safety training by MEDSS"
            />
          </div>
          <div>
            <span className="eyebrow">Integrated Solutions</span>
            <h2>From advisory to implementation support</h2>
            <p>
              MEDSS helps clients identify requirements, organise relevant training, improve documentation and
              coordinate practical workplace improvements.
            </p>
            <p>
              Whether your organisation needs HR guidance, an ISO management system roadmap, facility security support
              or OSH monitoring services, our team can help structure the right next step.
            </p>
            <Link className="btn btn-primary" href="/contact">
              Request Service Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Use | MEDSS Training and Consultancy',
  description: 'Terms governing the use of the MEDSS website and the engagement of MEDSS training and consultancy services in Malaysia.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="svc-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span>Terms of Use</span>
          </nav>
          <h1>Terms of Use</h1>
          <p>Last updated: 31 May 2026</p>
        </div>
      </section>

      <section className="legal-body">
        <div className="container legal-container">

          <div className="legal-intro">
            <p>
              These terms govern your use of the MEDSS Training and Consultancy website and the
              engagement of our training and consultancy services. We've kept this as straightforward
              as possible — if you have any questions, please{' '}
              <Link href="/contact">get in touch with us directly</Link>.
            </p>
            <p>
              By using this website or engaging MEDSS for any service, you agree to these terms.
              If you do not agree, please do not use our website or services.
            </p>
          </div>

          <div className="legal-section">
            <h2>1. About MEDSS</h2>
            <p>
              MEDSS Training and Consultancy Sdn. Bhd. is a company incorporated in Malaysia, registered
              with HRD Corp as a training provider. We offer HRDC claimable training programmes, HR
              consulting, ISO management system advisory, security consulting, and OSH & environmental
              monitoring services.
            </p>
            <p>
              Our registered office is at Suite 33-01, 33rd Floor, Menara Keck Seng, 203 Jalan Bukit
              Bintang, 55100 Kuala Lumpur. References to "MEDSS", "we", "us", or "our" throughout these
              terms refer to MEDSS Training and Consultancy Sdn. Bhd.
            </p>
          </div>

          <div className="legal-section">
            <h2>2. Using Our Website</h2>
            <p>
              Our website is provided for informational purposes — to tell you about our services,
              share training programme details, and make it easy for you to get in touch with us.
              You are welcome to browse, share links, and use the contact form to reach us.
            </p>
            <p>You agree not to:</p>
            <ul>
              <li>Use the website in any way that is unlawful or could harm MEDSS or anyone else.</li>
              <li>Attempt to gain unauthorised access to any part of our website or its underlying systems.</li>
              <li>Scrape, copy, or republish content from this website without our written permission.</li>
              <li>Use our contact form to send unsolicited commercial communications or spam.</li>
            </ul>
            <p>
              We do our best to keep the website accurate and up to date, but we cannot guarantee that
              every piece of information is always current — particularly programme dates, fees, and
              availability. Please contact us to confirm the latest details before making decisions
              based on website content.
            </p>
          </div>

          <div className="legal-section">
            <h2>3. Training Services</h2>
            <h3>Enquiries and Bookings</h3>
            <p>
              Submitting an enquiry through our website or contacting us by phone, email, or WhatsApp
              does not constitute a confirmed booking. A booking is only confirmed once both parties
              have agreed in writing (including by email) on the programme, date, venue, number of
              participants, and fee.
            </p>
            <h3>Fees and Payment</h3>
            <p>
              Training fees are quoted based on the specific programme, delivery format (in-house or
              public session), number of participants, and any customisation required. All fees quoted
              are in Malaysian Ringgit (MYR) and exclusive of GST or SST unless stated otherwise.
              Payment terms will be specified in the quotation or invoice.
            </p>
            <h3>Cancellations and Rescheduling</h3>
            <p>
              We understand that plans change. Here's how we handle it:
            </p>
            <ul>
              <li>
                <strong>Cancellation with more than 14 days' notice</strong> — no charge. We'll
                happily reschedule or provide a full refund if a deposit has been paid.
              </li>
              <li>
                <strong>Cancellation with 7–14 days' notice</strong> — 50% of the agreed fee may
                be retained to cover preparation and trainer allocation costs.
              </li>
              <li>
                <strong>Cancellation with less than 7 days' notice</strong> — the full fee is
                payable, as trainer and venue commitments are typically already in place.
              </li>
              <li>
                <strong>Rescheduling</strong> — we will always try to accommodate rescheduling
                requests at no extra charge, subject to trainer and venue availability.
              </li>
            </ul>
            <p>
              MEDSS reserves the right to cancel or reschedule a training session due to insufficient
              participant numbers, trainer unavailability, or circumstances beyond our control. In such
              cases, we will provide as much notice as possible and offer a full refund or alternative date.
            </p>
          </div>

          <div className="legal-section">
            <h2>4. HRDC / HRD Corp Claims</h2>
            <p>
              MEDSS is a registered HRD Corp training provider and many of our programmes are eligible
              for claim under the HRD Corp levy. We are happy to assist your organisation with the
              claim application process.
            </p>
            <p>
              However, please note the following:
            </p>
            <ul>
              <li>
                HRD Corp claim eligibility is determined by HRD Corp, not by MEDSS. While we will do
                our best to guide you through the process, we cannot guarantee that a particular claim
                will be approved.
              </li>
              <li>
                It is the employer's responsibility to ensure their HRD Corp registration is active
                and their levy account has sufficient balance to support the claim.
              </li>
              <li>
                Any information you provide to MEDSS for the purpose of a HRD Corp application must
                be accurate. MEDSS is not liable for claims that are rejected due to inaccurate
                information provided by the employer.
              </li>
              <li>
                Payment of MEDSS training fees is not conditional on HRD Corp claim approval. If a
                claim is rejected, the agreed fee remains payable by the employer.
              </li>
            </ul>
          </div>

          <div className="legal-section">
            <h2>5. Consultancy Services</h2>
            <p>
              Consultancy engagements (HR advisory, ISO management system development, security
              consulting, OSH monitoring) are governed by a separate service agreement or letter of
              engagement that we will provide before work begins. That agreement takes precedence over
              these general terms for the specific engagement.
            </p>
            <p>
              The advice and recommendations we provide are based on our professional expertise and the
              information you share with us. It is your responsibility to review and implement any
              recommendations in a manner appropriate for your organisation.
            </p>
          </div>

          <div className="legal-section">
            <h2>6. Intellectual Property</h2>
            <p>
              All training materials, handouts, slides, frameworks, and other content produced by
              MEDSS are our intellectual property. When we deliver in-house training, participants may
              retain their personal copies of handouts for their own professional development — but
              these materials may not be reproduced, redistributed, or used for commercial purposes
              without our written permission.
            </p>
            <p>
              The content on this website — including text, images, programme descriptions, and the
              MEDSS logo — is owned by MEDSS Training and Consultancy Sdn. Bhd. You may share links to
              our website, but may not reproduce our content elsewhere without permission.
            </p>
          </div>

          <div className="legal-section">
            <h2>7. Limitation of Liability</h2>
            <p>
              MEDSS provides training and consultancy services with care and professionalism. However,
              to the extent permitted by Malaysian law, we are not liable for:
            </p>
            <ul>
              <li>Any indirect, consequential, or incidental loss arising from your use of our services or website.</li>
              <li>Business decisions made based on our training content or consultancy advice.</li>
              <li>Any interruption or unavailability of our website.</li>
            </ul>
            <p>
              Nothing in these terms limits our liability for fraud, personal injury caused by our
              negligence, or any other liability that cannot be excluded under Malaysian law.
            </p>
          </div>

          <div className="legal-section">
            <h2>8. Confidentiality</h2>
            <p>
              We treat any business information, internal processes, or sensitive details you share
              with us in the course of an engagement as confidential. We will not disclose this
              information to third parties without your consent, except where required by law.
            </p>
            <p>
              Equally, any MEDSS materials, methodologies, or pricing information shared with you
              during an engagement are considered confidential and should not be shared with
              third parties without our agreement.
            </p>
          </div>

          <div className="legal-section">
            <h2>9. Governing Law</h2>
            <p>
              These terms are governed by the laws of Malaysia. Any dispute arising out of or in
              connection with these terms shall be subject to the exclusive jurisdiction of the courts
              of Malaysia.
            </p>
          </div>

          <div className="legal-section">
            <h2>10. Changes to These Terms</h2>
            <p>
              We may update these terms from time to time. When we do, we will update the date at the
              top of this page. The current version of these terms always applies to your use of the
              website from the date shown.
            </p>
          </div>

          <div className="legal-section">
            <h2>11. Questions</h2>
            <p>
              If anything here is unclear, or if you'd like to discuss any aspect of these terms
              before engaging our services, please reach out:
            </p>
            <div className="legal-contact-card">
              <strong>MEDSS Training and Consultancy Sdn. Bhd.</strong>
              <span>Suite 33-01, 33rd Floor, Menara Keck Seng</span>
              <span>203 Jalan Bukit Bintang, 55100 Kuala Lumpur</span>
              <a href="mailto:consultant@medss.com.my">consultant@medss.com.my</a>
              <a href="tel:+60122744432">+60 12-274 4432</a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

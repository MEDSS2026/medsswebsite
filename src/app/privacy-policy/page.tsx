import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy | MEDSS Training and Consultancy',
  description: 'How MEDSS Training and Consultancy collects, uses, and protects your personal information in accordance with the Personal Data Protection Act 2010 (Malaysia).',
  alternates: { canonical: '/privacy-policy' },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <nav className="svc-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">›</span>
            <span>Privacy Policy</span>
          </nav>
          <h1>Privacy Policy</h1>
          <p>Last updated: 31 May 2026</p>
        </div>
      </section>

      <section className="legal-body">
        <div className="container legal-container">

          <div className="legal-intro">
            <p>
              At MEDSS Training and Consultancy Sdn. Bhd., we take your privacy seriously. This policy explains
              what personal information we collect, why we collect it, how we use it, and what rights you have
              over your data. We've tried to write this in plain language — if anything is unclear, please
              reach out to us directly.
            </p>
            <p>
              This policy applies to all information collected through our website at{' '}
              <a href="https://www.medss.com.my" target="_blank" rel="noreferrer">www.medss.com.my</a>,
              our enquiry forms, and any direct communications with our team.
            </p>
          </div>

          <div className="legal-section">
            <h2>1. Who We Are</h2>
            <p>
              MEDSS Training and Consultancy Sdn. Bhd. is a registered training provider and consultancy firm
              based in Kuala Lumpur, Malaysia. We are registered with HRD Corp (Human Resource Development
              Corporation) and provide HRDC claimable training programmes, HR consulting, ISO management
              system advisory, security consulting, and OSH & environmental monitoring services to
              organisations across Malaysia.
            </p>
            <p>
              Our registered office is at Suite 33-01, 33rd Floor, Menara Keck Seng, 203 Jalan Bukit Bintang,
              55100 Kuala Lumpur.
            </p>
          </div>

          <div className="legal-section">
            <h2>2. What Information We Collect</h2>
            <p>We only collect information that is necessary to respond to your enquiry or deliver our services.</p>
            <h3>Information you give us directly</h3>
            <ul>
              <li><strong>Contact details</strong> — your name, email address, phone number, and company name when you submit an enquiry through our website or contact us by email, phone, or WhatsApp.</li>
              <li><strong>Training requirements</strong> — the type of service or training you're enquiring about, number of participants, preferred dates, and any specific requirements you share with us.</li>
              <li><strong>HRD Corp registration details</strong> — if you engage MEDSS to conduct HRDC claimable training, we may collect your company's HRD Corp employer code and related registration information to process your claim.</li>
            </ul>
            <h3>Information collected automatically</h3>
            <ul>
              <li><strong>Website usage data</strong> — standard server logs including your IP address, browser type, pages visited, and time of visit. This is used solely for maintaining the security and performance of our website.</li>
            </ul>
            <p>
              We do not use advertising trackers, retargeting pixels, or third-party analytics services on
              this website. We do not collect sensitive personal data (such as identification numbers, health
              information, or financial data) unless you specifically provide it as part of a consultancy
              engagement.
            </p>
          </div>

          <div className="legal-section">
            <h2>3. How We Use Your Information</h2>
            <p>We use the information you provide for the following purposes:</p>
            <ul>
              <li>To respond to your enquiry and follow up about training or consultancy requirements.</li>
              <li>To prepare training proposals, quotations, and programme schedules tailored to your organisation.</li>
              <li>To coordinate and deliver training sessions, including liaising with your HR team or designated contact person.</li>
              <li>To process HRD Corp training grants and claims on your behalf where you have engaged us to do so.</li>
              <li>To send you relevant updates about our programmes, services, or upcoming public training sessions — only where you have indicated interest or given consent.</li>
              <li>To comply with our legal obligations as a registered HRD Corp training provider.</li>
            </ul>
            <p>
              We do not use your information for any purpose unrelated to the services you have enquired about
              or engaged us for. We will never sell your personal data to third parties.
            </p>
          </div>

          <div className="legal-section">
            <h2>4. Who We Share Your Information With</h2>
            <p>
              We treat your information with care and only share it where genuinely necessary:
            </p>
            <ul>
              <li>
                <strong>HRD Corp (Human Resource Development Corporation)</strong> — if you engage us for
                HRDC claimable training, we are required to submit participant and employer details to HRD
                Corp as part of the grant application and claim process. This is a regulatory requirement
                we cannot fulfil without sharing this information.
              </li>
              <li>
                <strong>Our trainers and facilitators</strong> — when a confirmed training session is
                scheduled, we share the necessary participant list and logistics details with the assigned
                trainer. They are bound by the same confidentiality standards we hold ourselves to.
              </li>
              <li>
                <strong>Service providers</strong> — our website is hosted on secure servers. Our hosting
                provider may technically have access to server logs, but they do not process your personal
                data for any other purpose.
              </li>
            </ul>
            <p>
              We do not share your information with marketing companies, data brokers, or any third party
              for commercial purposes.
            </p>
          </div>

          <div className="legal-section">
            <h2>5. How Long We Keep Your Information</h2>
            <p>
              We keep your enquiry and contact details for as long as necessary to manage our relationship
              with you — typically up to three years from our last interaction, unless you ask us to remove
              it sooner or unless we are legally required to retain it for longer (for example, financial
              and tax records related to completed training engagements).
            </p>
            <p>
              HRD Corp-related records are kept in line with HRD Corp's requirements and Malaysian
              accounting regulations, which generally require retention for a minimum of seven years.
            </p>
          </div>

          <div className="legal-section">
            <h2>6. Your Rights Under the PDPA 2010</h2>
            <p>
              Under the Personal Data Protection Act 2010 (Malaysia), you have the right to:
            </p>
            <ul>
              <li><strong>Access</strong> the personal data we hold about you.</li>
              <li><strong>Correct</strong> any inaccurate or incomplete information.</li>
              <li><strong>Withdraw consent</strong> for us to process your data (where processing is based on consent), including opting out of any communications from us.</li>
              <li><strong>Request deletion</strong> of your personal data, subject to any legal obligations that require us to retain certain records.</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at{' '}
              <a href="mailto:consultant@medss.com.my">consultant@medss.com.my</a> with your name and
              a description of your request. We will respond within 14 business days.
            </p>
          </div>

          <div className="legal-section">
            <h2>7. Keeping Your Information Safe</h2>
            <p>
              We take reasonable precautions to protect the personal information we hold. Our website uses
              HTTPS encryption. Access to client records is limited to MEDSS staff who need it to perform
              their role. We do not store credit card or financial information on our systems.
            </p>
            <p>
              No system is completely secure, but we take the protection of your data seriously and will
              notify you promptly if we become aware of any breach that may affect your personal information.
            </p>
          </div>

          <div className="legal-section">
            <h2>8. Links to Other Websites</h2>
            <p>
              Our website may contain links to external sites such as HRD Corp's portal or partner
              organisations. Once you leave our site, this privacy policy no longer applies. We encourage
              you to review the privacy policies of any site you visit.
            </p>
          </div>

          <div className="legal-section">
            <h2>9. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time to reflect changes in our practices or legal
              requirements. When we do, we will update the "last updated" date at the top of this page.
              We encourage you to review this page periodically. Continued use of our website after any
              changes constitutes your acceptance of the updated policy.
            </p>
          </div>

          <div className="legal-section">
            <h2>10. Contact Us About Privacy</h2>
            <p>
              If you have any questions about this policy or how we handle your personal data, please
              get in touch:
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

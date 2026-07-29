import PolicyLayout, { PolicySection } from '@/components/site/policy-layout';
import { SITE } from '@/lib/siteData';

export const metadata = { title: 'Privacy Policy | Super Brass Industries' };

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout label="Legal" title="Privacy Policy" updated="June 2025">
      <PolicySection heading="1. Introduction">
        <p>
          Super Brass Industries (“we”, “our”, “us”) respects your privacy and is committed to protecting the personal information you share with us through this website. This policy explains what information we collect, how we use it, and the choices you have.
        </p>
      </PolicySection>
      <PolicySection heading="2. Information We Collect">
        <p>When you use our contact or quote request forms, we may collect your full name, company name, email address, phone number, project details and any technical drawings or files you choose to share with us.</p>
        <p>We may also collect standard technical data such as browser type, device information and pages visited, to help us improve the website experience.</p>
      </PolicySection>
      <PolicySection heading="3. How We Use Your Information">
        <p>We use the information you provide solely to respond to your enquiries, prepare quotations, fulfil orders, and communicate with you about your projects. We do not sell, rent or trade your personal information to any third party.</p>
      </PolicySection>
      <PolicySection heading="4. Confidentiality of Technical Data">
        <p>Drawings, specifications and project details submitted through this website are treated as strictly confidential business information. Access is limited to the engineering and sales personnel who need it to prepare your quotation. Non-disclosure agreements are available on request.</p>
      </PolicySection>
      <PolicySection heading="5. Data Retention & Security">
        <p>We retain enquiry data only for as long as necessary to serve your business relationship with us, and we apply reasonable technical and organisational measures to protect it against unauthorised access, loss or misuse.</p>
      </PolicySection>
      <PolicySection heading="6. Your Rights">
        <p>You may request access to, correction of, or deletion of your personal data at any time by writing to us at {SITE.email}. We will respond to legitimate requests within a reasonable timeframe.</p>
      </PolicySection>
      <PolicySection heading="7. Contact">
        <p>For any privacy-related questions, contact us at {SITE.email} or write to: {SITE.address}.</p>
      </PolicySection>
    </PolicyLayout>
  );
}

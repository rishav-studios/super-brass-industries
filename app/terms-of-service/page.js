import PolicyLayout, { PolicySection } from '@/components/site/policy-layout';
import { SITE } from '@/lib/siteData';

export const metadata = { title: 'Terms of Service | Super Brass Industries' };

export default function TermsPage() {
  return (
    <PolicyLayout label="Legal" title="Terms of Service" updated="June 2025">
      <PolicySection heading="1. Acceptance of Terms">
        <p>By accessing and using the Super Brass Industries website, you agree to these Terms of Service. If you do not agree with any part of these terms, please discontinue use of the website.</p>
      </PolicySection>
      <PolicySection heading="2. Use of the Website">
        <p>This website is provided for business information, enquiry and quotation purposes. You agree to use it lawfully and not to misuse forms, attempt unauthorised access, or submit false or misleading information.</p>
      </PolicySection>
      <PolicySection heading="3. Quotations & Orders">
        <p>Quotations issued through this website or by our sales team are indicative and valid for the period stated therein. All orders are subject to our formal order confirmation, which will set out final pricing, specifications, lead times and payment terms.</p>
      </PolicySection>
      <PolicySection heading="4. Intellectual Property">
        <p>All content on this website — including text, graphics, logos and images — is the property of Super Brass Industries or its licensors and may not be reproduced without written permission. Drawings and specifications submitted by customers remain the property of the customer.</p>
      </PolicySection>
      <PolicySection heading="5. Limitation of Liability">
        <p>While we strive to keep the information on this website accurate and up to date, it is provided “as is” without warranties of any kind. Super Brass Industries shall not be liable for any indirect or consequential loss arising from use of this website.</p>
      </PolicySection>
      <PolicySection heading="6. Governing Law">
        <p>These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Jamnagar, Gujarat.</p>
      </PolicySection>
      <PolicySection heading="7. Contact">
        <p>Questions about these terms may be directed to {SITE.email}.</p>
      </PolicySection>
    </PolicyLayout>
  );
}

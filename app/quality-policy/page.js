import PolicyLayout, { PolicySection } from '@/components/site/policy-layout';
import { SITE } from '@/lib/siteData';

export const metadata = { title: 'Quality Policy | Super Brass Industries' };

export default function QualityPolicyPage() {
  return (
    <PolicyLayout label="Our Commitment" title="Quality Policy" updated="June 2025">
      <PolicySection heading="Our Quality Commitment">
        <p>
          Super Brass Industries is committed to manufacturing and supplying precision brass components that consistently meet or exceed customer specifications, applicable statutory requirements and international standards. Quality is not a department at Super Brass — it is the way we work.
        </p>
      </PolicySection>
      <PolicySection heading="Quality Management System">
        <p>We operate an ISO 9001:2015 certified Quality Management System covering the design, manufacture and supply of brass components. The system is audited internally and by external certification bodies to ensure continued effectiveness.</p>
      </PolicySection>
      <PolicySection heading="Our Quality Objectives">
        <p>• Achieve zero customer rejections through rigorous in-process and final inspection.</p>
        <p>• Maintain on-time delivery performance above 98%.</p>
        <p>• Ensure full material traceability from raw material to dispatched consignment.</p>
        <p>• Continuously reduce process variation through measurement system analysis and operator training.</p>
        <p>• Respond to customer complaints within 24 hours with documented corrective action.</p>
      </PolicySection>
      <PolicySection heading="Inspection & Testing">
        <p>Every production batch undergoes dimensional inspection using calibrated instruments, thread verification with certified gauges, and visual inspection for surface finish. Material test certificates, plating thickness reports and PPAP documentation are available with every shipment on request.</p>
      </PolicySection>
      <PolicySection heading="Continuous Improvement">
        <p>We review our quality objectives regularly at management level, invest continuously in machinery and metrology, and train our team so that our capability grows with our customers' expectations.</p>
      </PolicySection>
      <PolicySection heading="Contact Our Quality Team">
        <p>For quality documentation, audits or supplier evaluation requests, write to {SITE.email}.</p>
      </PolicySection>
    </PolicyLayout>
  );
}

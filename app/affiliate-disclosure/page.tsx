import { MotionSection } from "@/components/motion-section";
import { SectionTitle } from "@/components/ui";
import { affiliateDisclosure } from "@/lib/site-data";

export default function AffiliateDisclosurePage() {
  return (
    <MotionSection className="section-container prose max-w-4xl prose-headings:font-serif prose-headings:text-navy">
      <SectionTitle eyebrow="Compliance" title="Affiliate Disclosure" description="Transparent disclosure regarding referral commissions." />
      <p>{affiliateDisclosure}</p>
      <p>Recommendations are based on relevance and quality standards. Commission eligibility does not influence commitment to trust and user value.</p>
    </MotionSection>
  );
}

import { SectionTitle } from "@/components/ui";
import { company } from "@/lib/site-data";

export default function PrivacyPolicyPage() {
  return (
    <section className="section-container prose max-w-4xl prose-headings:font-serif prose-headings:text-navy">
      <SectionTitle eyebrow="Legal" title="Privacy Policy" description="How Scelta Infinity handles visitor data responsibly." />
      <p>{company.brandName} respects your privacy. We collect minimal contact information voluntarily submitted via the contact form for communication purposes only.</p>
      <p>We do not process payments on this website. Purchases occur on third-party platforms such as Amazon or affiliate partner websites.</p>
      <p>Third-party links may have independent privacy practices. Please review their policies before engaging.</p>
    </section>
  );
}

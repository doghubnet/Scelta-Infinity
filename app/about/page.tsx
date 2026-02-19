import { Card, SectionTitle } from "@/components/ui";
import { company } from "@/lib/site-data";

export default function AboutPage() {
  return (
    <section className="section-container">
      <SectionTitle eyebrow="Brand Story" title="About Scelta Infinity" description="A modern publishing and affiliate showcase established by Gediyon Adamu Yeshitila." />
      <Card>
        <p className="text-lg text-navy/85">
          {company.brandName} was created as a professional destination where quality eBooks and premium affiliate recommendations are presented with clarity and integrity. Led by {company.legalName}, the brand emphasizes trust, transparent communication, and long-term client value.
        </p>
        <p className="mt-4 text-navy/85">Mission: {company.mission}</p>
        <p className="mt-3 text-navy/85">Vision: {company.vision}</p>
      </Card>
    </section>
  );
}

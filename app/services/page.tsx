import { Card, PrimaryButton, SectionTitle } from "@/components/ui";
import { company } from "@/lib/site-data";

export default function ServicesPage() {
  return (
    <section className="section-container">
      <SectionTitle eyebrow="Professional Services" title="Hire Scelta Infinity" description="Work directly through trusted global freelance platforms for digital publishing and affiliate marketing support." />
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <h3 className="font-serif text-2xl">Fiverr Services</h3>
          <p className="mt-4 text-navy/80">Discover premium, outcome-oriented services designed to help clients publish and market with confidence.</p>
          <PrimaryButton href={company.fiverr} className="mt-6">View Fiverr Profile</PrimaryButton>
        </Card>
        <Card>
          <h3 className="font-serif text-2xl">Upwork Services</h3>
          <p className="mt-4 text-navy/80">Access high-quality freelance collaboration with clear deliverables, timelines, and communication.</p>
          <PrimaryButton href={company.upwork} className="mt-6">View Upwork Profile</PrimaryButton>
        </Card>
      </div>
    </section>
  );
}

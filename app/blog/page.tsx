import { Card, SectionTitle } from "@/components/ui";

export default function BlogPage() {
  return (
    <section className="section-container">
      <SectionTitle eyebrow="Insights" title="Blog" description="This section is prepared for future publishing, affiliate strategy, and digital growth posts." />
      <Card>
        <h3 className="font-serif text-2xl">Coming Soon</h3>
        <p className="mt-4 text-navy/80">New professional articles will be published here to reinforce brand authority and provide practical value for readers.</p>
      </Card>
    </section>
  );
}

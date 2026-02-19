import { Card, PrimaryButton, SectionTitle } from "@/components/ui";
import { affiliateDisclosure } from "@/lib/site-data";

const products = [
  "Productivity Suite for Entrepreneurs",
  "Professional Content Creation Toolkit",
  "Home Office Efficiency Bundle",
  "Digital Learning Masterclass Package"
];

export default function AffiliateMarketplacePage() {
  return (
    <section className="section-container">
      <SectionTitle eyebrow="Curated Recommendations" title="Affiliate Marketplace" description="A carefully selected list of products and offers from trusted platforms such as Amazon Associates." />
      <p className="mb-8 rounded-2xl border border-gold/30 bg-gold/10 p-5 text-sm text-navy">{affiliateDisclosure}</p>
      <div className="grid gap-6 md:grid-cols-2">
        {products.map((product) => (
          <Card key={product}>
            <div className="mb-4 h-48 rounded-2xl bg-gradient-to-tr from-cream to-white" />
            <h3 className="font-serif text-xl">{product}</h3>
            <p className="mt-2 text-sm text-navy/80">Premium placeholder offer description. Replace with final affiliate content and approved links.</p>
            <PrimaryButton href="https://amazon.com" className="mt-4">Visit Offer</PrimaryButton>
          </Card>
        ))}
      </div>
    </section>
  );
}

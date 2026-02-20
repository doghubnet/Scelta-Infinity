import Image from "next/image";
import { Card, PrimaryButton, SectionTitle } from "@/components/ui";
import { affiliateDisclosure } from "@/lib/site-data";

const products = [
  {
    title: "Atomic Habits",
    description: "Tiny Changes, Remarkable Results — the #1 bestseller for building wealth systems",
    image: "https://m.media-amazon.com/images/I/81wgcld4wxL._AC_UY327_FMwebp_.jpg"
  },
  {
    title: "The Psychology of Money",
    description: "Timeless lessons on wealth, greed, and happiness from Morgan Housel",
    image: "https://m.media-amazon.com/images/I/71g0gQ6vWAL._AC_UY327_FMwebp_.jpg"
  },
  {
    title: "Principles: Life and Work",
    description: "Ray Dalio’s legendary blueprint for radical truth and decision-making at the highest level",
    image: "https://m.media-amazon.com/images/I/71kD5b3g6gL._AC_UY327_FMwebp_.jpg"
  }
];

export default function AffiliateMarketplacePage() {
  return (
    <section className="section-container">
      <SectionTitle
        eyebrow="Curated Recommendations"
        title="Affiliate Marketplace"
        description="Premium book recommendations aligned with the billionaire mindset and strategic wealth-building discipline."
      />
      <p className="mb-8 rounded-2xl border border-gold/30 bg-gold/10 p-5 text-sm text-navy">{affiliateDisclosure}</p>
      <div className="grid gap-6 md:grid-cols-3">
        {products.map((product) => (
          <Card key={product.title}>
            <div className="mb-4 overflow-hidden rounded-2xl border border-navy/10 bg-cream/40">
              <Image
                src={product.image}
                alt={product.title}
                width={500}
                height={700}
                className="h-72 w-full object-cover"
              />
            </div>
            <h3 className="font-serif text-xl">{product.title}</h3>
            <p className="mt-2 text-sm text-navy/80">{product.description}</p>
            <PrimaryButton href="https://amazon.com" className="mt-4">Get on Amazon</PrimaryButton>
          </Card>
        ))}
      </div>
      <p className="mt-8 text-xs text-navy/70">
        Amazon Affiliate Disclosure: As an Amazon Associate, Scelta Infinity may earn from qualifying purchases. This
        does not increase your purchase cost.
      </p>
    </section>
  );
}

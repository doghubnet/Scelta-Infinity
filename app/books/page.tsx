import { Card, PrimaryButton, SectionTitle } from "@/components/ui";

const books = [
  {
    title: "Elite Growth Blueprint for Affiliate Entrepreneurs",
    description: "A premium practical guide for building an affiliate business ecosystem designed for long-term sustainability.",
    link: "https://amazon.com"
  },
  {
    title: "Digital Product Publishing Excellence",
    description: "A structured publishing framework for creating quality digital books with professional market positioning.",
    link: "https://amazon.com"
  },
  {
    title: "Evergreen Commission Strategy Playbook",
    description: "An execution-focused handbook for selecting, positioning, and promoting high-value affiliate products.",
    link: "https://amazon.com"
  }
];

export default function BooksPage() {
  return (
    <section className="section-container">
      <SectionTitle eyebrow="Amazon KDP Showcase" title="My Books" description="Book links redirect to Amazon KDP product pages. Replace placeholder links anytime." />
      <div className="grid gap-6 md:grid-cols-3">
        {books.map((book) => (
          <Card key={book.title}>
            <div className="mb-5 aspect-[3/4] rounded-2xl bg-gradient-to-b from-navy to-navy/60 p-5 text-gold">
              <p className="font-serif text-2xl">{book.title}</p>
            </div>
            <p className="mb-5 text-sm text-navy/80">{book.description}</p>
            <PrimaryButton href={book.link}>Buy on Amazon</PrimaryButton>
          </Card>
        ))}
      </div>
    </section>
  );
}

import Link from "next/link";
import { Card, PrimaryButton, SectionTitle } from "@/components/ui";
import { affiliateDisclosure, company } from "@/lib/site-data";
import { MotionSection } from "@/components/motion-section";

const featuredBooks = [
  "THE BILLIONAIRE BLUEPRINT",
  "Digital Product Publishing Excellence",
  "Evergreen Commission Strategy Playbook"
];

const affiliateHighlights = ["Atomic Habits", "The Psychology of Money", "Principles: Life and Work"];

const testimonials = [
  "Dr. Tesfaye Ababe (Ethiopia): “This book completely changed how I approach wealth building. The practical playbooks are pure gold.”",
  "Zekariyas Alebel (Ethiopia): “The best investment I made this year. Clear, actionable insights from the world’s top minds.”",
  "John Thomson (USA): “Finally a book that combines deep research with real-world application. Highly recommended.”",
  "Alan Tim (UK): “The BUILD IT. SCALE IT. OWN IT. framework is powerful and immediately useful.”",
  "Benjamin Duke (Canada): “Professional, trustworthy, and truly international in perspective.”"
];

export default function HomePage() {
  return (
    <>
      <MotionSection className="bg-navy bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.12),_transparent_40%),radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.08),_transparent_35%)] text-white">
        <div className="section-container grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.25em] text-gold">Scelta Infinity</p>
            <h1 className="font-serif text-4xl font-bold leading-tight md:text-6xl">
              Premium eBooks & Trusted Affiliate Recommendations for Global Audiences
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/85">
              Built by {company.legalName}, {company.brandName} is a professional digital showcase focused on
              authority, quality, and long-term value in eBook publishing and affiliate marketing.
            </p>
            <p className="mt-4 text-gold">Serving ambitious minds worldwide.</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryButton href="/books" className="bg-gold text-navy hover:bg-gold/90">Explore My Books</PrimaryButton>
              <PrimaryButton href="/affiliate-marketplace" className="border border-gold bg-transparent text-gold hover:bg-gold hover:text-navy">View Affiliate Marketplace</PrimaryButton>
            </div>
          </div>
          <Card className="bg-white/10 text-white backdrop-blur">
            <h2 className="font-serif text-2xl">Trust Signals</h2>
            <ul className="mt-6 space-y-4 text-sm text-white/90">
              <li>✓ Clear external redirection model (no onsite payment processing)</li>
              <li>✓ Direct links to Fiverr, Upwork, Amazon-focused products, and contact channels</li>
              <li>✓ Transparent affiliate disclosure and legal pages</li>
            </ul>
          </Card>
        </div>
      </MotionSection>

      <MotionSection className="section-container" delay={0.03}>
        <SectionTitle
          eyebrow="Contact"
          title="Get In Touch"
          description="Have a question about books, services, or affiliate collaborations? Send a message directly."
        />
        <Card className="mx-auto max-w-4xl">
          <form action="https://formspree.io/f/maqddkdo" method="POST" className="grid gap-4 md:grid-cols-2">
            <input name="name" required placeholder="Full Name" className="rounded-xl border border-navy/20 p-3" />
            <input name="email" type="email" required placeholder="Email Address" className="rounded-xl border border-navy/20 p-3" />
            <textarea name="message" required placeholder="Message / Question" rows={5} className="rounded-xl border border-navy/20 p-3 md:col-span-2" />
            <button aria-label="Send message" className="rounded-full bg-navy px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-navy/90 focus-visible:ring-offset-white md:col-span-2 md:w-fit">
              Send Message
            </button>
          </form>
        </Card>
      </MotionSection>

      <MotionSection className="section-container" delay={0.05}>
        <SectionTitle
          eyebrow="Featured Portfolio"
          title="Books Crafted for Real-World Value"
          description="Every title is developed with practical insight and publishing quality standards suitable for international readers."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {featuredBooks.map((book, idx) => (
            <Card key={book}>
              <div className="mb-5 aspect-[3/4] rounded-2xl bg-gradient-to-br from-navy to-navy/70 p-4 text-gold">
                <p className="text-xs uppercase tracking-[0.2em]">Book {idx + 1}</p>
                <p className="mt-3 font-serif text-2xl leading-tight">{book}</p>
              </div>
              <PrimaryButton href="/books">Buy on Amazon</PrimaryButton>
            </Card>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="bg-white" delay={0.08}>
        <div className="section-container">
          <SectionTitle
            eyebrow="Affiliate Marketplace"
            title="Curated Wealth-Mindset Recommendations"
            description="Explore premium titles from trusted platforms that align with high-performance thinking and disciplined execution."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {affiliateHighlights.map((item) => (
              <Card key={item}><p className="font-serif text-2xl text-navy">{item}</p></Card>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section-container" delay={0.1}>
        <SectionTitle
          eyebrow="Client Proof"
          title="What Our Readers & Clients Say"
          description="Trusted by ambitious professionals across multiple countries."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item} className="border-gold/25">
              <p className="text-navy/85">{item}</p>
            </Card>
          ))}
        </div>
      </MotionSection>

      <MotionSection className="bg-white" delay={0.12}>
        <div className="section-container">
          <SectionTitle
            eyebrow="About Us"
            title="Purpose-Driven, Quality-Focused, Globally Oriented"
            description="A refined platform built for lasting brand integrity in publishing and affiliate marketing."
          />
          <div className="grid gap-6 md:grid-cols-2">
            <Card><h3 className="font-serif text-2xl">Mission</h3><p className="mt-4 text-navy/80">{company.mission}</p></Card>
            <Card><h3 className="font-serif text-2xl">Vision</h3><p className="mt-4 text-navy/80">{company.vision}</p></Card>
          </div>
        </div>
      </MotionSection>

      <section className="bg-navy py-8 text-center text-sm text-white/90">
        <p>{affiliateDisclosure}</p>
        <p className="mt-2">All purchases are completed on third-party platforms such as Amazon KDP or affiliate partner sites.</p>
        <Link href="/affiliate-disclosure" className="mt-2 inline-block text-gold underline">Read full affiliate disclosure</Link>
      </section>
    </>
  );
}

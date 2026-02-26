import Link from "next/link";
import { Card, PrimaryButton, SectionTitle } from "@/components/ui";
import { affiliateDisclosure, company } from "@/lib/site-data";

const featuredBooks = [
  "Elite Growth Blueprint for Affiliate Entrepreneurs",
  "Digital Product Publishing Excellence",
  "Evergreen Commission Strategy Playbook"
];

const testimonials = [
  "Scelta Infinity presents content with a polished, professional standard that reflects true publishing discipline.",
  "The quality benchmark and clarity of recommendation make this brand stand out as trustworthy.",
  "A premium brand hub that confidently connects books, affiliate products, and freelance credibility."
];

const readerResults = [
  {
    name: "Dr. Tesfaye Ababe",
    country: "Ethiopia",
    quote:
      "This book completely changed how I approach wealth building. The practical playbooks are pure gold."
  },
  {
    name: "Zekariyas Alebel",
    country: "Ethiopia",
    quote:
      "The best investment I made this year. Clear, actionable insights from the world’s top minds."
  },
  {
    name: "John Thomson",
    country: "USA",
    quote:
      "Finally a book that combines deep research with real-world application. Highly recommended."
  },
  {
    name: "Alan Tim",
    country: "UK",
    quote:
      "The BUILD IT. SCALE IT. OWN IT. framework is powerful and immediately useful."
  },
  {
    name: "Benjamin Duke",
    country: "Canada",
    quote:
      "Professional, trustworthy, and truly international in perspective."
  }
];

const audienceTags = [
  "Aspiring Entrepreneurs",
  "Affiliate Marketers",
  "Self-Improvement Seekers",
  "International Readers",
  "Business Builders",
  "Wealth Mindset Enthusiasts"
];

const faqs = [
  {
    question: "Is this suitable for beginners?",
    answer:
      "Yes, the content is designed for both beginners and experienced entrepreneurs who want to build lasting value through eBooks and affiliate marketing."
  },
  {
    question: "Do you support multiple currencies?",
    answer:
      "Yes, all purchases are handled through Amazon, which supports multiple currencies depending on your location."
  },
  {
    question: "Is this only for one country?",
    answer:
      "No, the books and recommendations are available worldwide. See the supported countries upon purchase on Amazon."
  },
  {
    question: "What if I have questions after purchase?",
    answer:
      "You can reach out via the contact form or email scelta.infinity@gmail.com. We respond within 24 hours."
  },
  {
    question: "Are partners included?",
    answer:
      "Yes, we welcome affiliate partners and collaborations. Feel free to reach out through the contact form."
  },
  {
    question: "Can I access content on mobile?",
    answer:
      "Yes, the website is fully responsive and works perfectly on all mobile devices."
  },
  {
    question: "Do bundles save money?",
    answer:
      "Yes, we offer bundle deals that provide significant savings compared to purchasing individually."
  }
];

export default function HomePage() {
  return (
    <>
      <section className="bg-navy text-white">
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
            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryButton href="/books" className="bg-gold text-navy hover:bg-gold/90">Explore My Books</PrimaryButton>
              <PrimaryButton href="/affiliate-marketplace" className="border border-gold bg-transparent text-gold hover:bg-gold hover:text-navy">View Affiliate Marketplace</PrimaryButton>
            </div>
          </div>
          <Card className="bg-white/10 text-white backdrop-blur">
            <h2 className="font-serif text-2xl">Trust Signals</h2>
            <ul className="mt-6 space-y-4 text-sm text-white/90">
              <li>✓ Professional brand hub for Payoneer verification readiness</li>
              <li>✓ Clear external redirection model (no onsite payment processing)</li>
              <li>✓ Direct links to Fiverr, Upwork, Amazon-focused products, and contact channels</li>
              <li>✓ Transparent affiliate disclosure and legal pages</li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="section-container">
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
      </section>

      <section className="bg-white">
        <div className="section-container">
          <SectionTitle
            eyebrow="Mission & Vision"
            title="Purpose-Driven, Quality-Focused, Globally Oriented"
            description="A refined platform built for lasting brand integrity in publishing and affiliate marketing."
          />
          <div className="grid gap-6 md:grid-cols-2">
            <Card><h3 className="font-serif text-2xl">Mission</h3><p className="mt-4 text-navy/80">{company.mission}</p></Card>
            <Card><h3 className="font-serif text-2xl">Vision</h3><p className="mt-4 text-navy/80">{company.vision}</p></Card>
          </div>
        </div>
      </section>

      <section className="section-container">
        <SectionTitle eyebrow="Testimonials" title="Professional Perception" description="How the brand is positioned in terms of trust, quality, and authority." />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item}><p className="text-navy/80">“{item}”</p></Card>
          ))}
        </div>
      </section>

      <section className="section-container">
        <SectionTitle
          eyebrow="Growth Framework"
          title="The Strategy Behind Every Success"
          description="Explore real reader outcomes, ideal audience profiles, and clear answers to common questions."
        />

        <div>
          <h3 className="font-serif text-2xl text-navy">Real Reader Results</h3>
          <div className="mt-6 -mx-1 flex gap-4 overflow-x-auto px-1 pb-2 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0">
            {readerResults.map((item) => (
              <Card key={item.name} className="min-w-[85%] snap-start md:min-w-0">
                <p className="text-navy/80">“{item.quote}”</p>
                <p className="mt-5 text-sm font-semibold text-navy">{item.name}</p>
                <p className="text-xs uppercase tracking-wide text-navy/60">{item.country}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="font-serif text-2xl text-navy">Who This Is Perfect For</h3>
          <div className="mt-5 flex flex-wrap gap-3">
            {audienceTags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-navy/20 bg-white px-4 py-2 text-sm font-medium text-navy shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="font-serif text-2xl text-navy">FAQ</h3>
          <div className="mt-5 space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-2xl border border-navy/15 bg-white p-5 shadow-sm">
                <summary className="cursor-pointer list-none pr-4 font-semibold text-navy">{faq.question}</summary>
                <p className="mt-3 text-navy/80">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-8 text-center text-sm text-white/90">
        <p>{affiliateDisclosure}</p>
        <p className="mt-2">All purchases are completed on third-party platforms such as Amazon KDP or affiliate partner sites.</p>
        <Link href="/affiliate-disclosure" className="mt-2 inline-block text-gold underline">Read full affiliate disclosure</Link>
      </section>
    </>
  );
}

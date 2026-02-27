"use client";

import Link from "next/link";
import { Card, PrimaryButton, SectionTitle } from "@/components/ui";
import { affiliateDisclosure, company } from "@/lib/site-data";
import { MotionSection } from "@/components/motion-section";
import { motion, useReducedMotion } from "framer-motion";

const affiliateHighlights = ["Atomic Habits", "The Psychology of Money", "Principles: Life and Work"];

const testimonials = [
  "Dr. Tesfaye Ababe (Ethiopia): “This book completely changed how I approach wealth building. The practical playbooks are pure gold.”",
  "Zekariyas Alebel (Ethiopia): “The best investment I made this year. Clear, actionable insights from the world’s top minds.”",
  "John Thomson (USA): “Finally a book that combines deep research with real-world application. Highly recommended.”",
  "Alan Tim (UK): “The BUILD IT. SCALE IT. OWN IT. framework is powerful and immediately useful.”",
  "Benjamin Duke (Canada): “Professional, trustworthy, and truly international in perspective.”"
];

export default function HomePage() {
  const reduceMotion = useReducedMotion();

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.08 }
    }
  };

  const heroItemVariants = reduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.45, ease: "easeOut" } }
      }
    : {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
      };

  return (
    <>
      <section className="relative isolate overflow-hidden text-white">
        <div className="absolute inset-0 -z-20 bg-[url('https://i.postimg.cc/Z5Mqj0XJ/pexels-googledeepmind-18069814-(1).jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-navy/65 to-navy" />
        <div className="section-container">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-12 lg:grid-cols-2 lg:items-center"
          >
            <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
              <motion.p variants={heroItemVariants} className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-gold">Scelta Infinity</motion.p>
              <motion.h1 variants={heroItemVariants} className="font-serif text-5xl font-bold tracking-[-0.025em] text-white md:text-7xl">
                Premium eBooks & Trusted Affiliate Recommendations for Global Audiences
              </motion.h1>
              <motion.p variants={heroItemVariants} className="mt-7 max-w-xl text-[1.0625rem] leading-[1.75] tracking-[0.005em] text-white/85 lg:max-w-none">
                Built by {company.legalName}, {company.brandName} is a professional digital showcase focused on
                authority, quality, and long-term value in eBook publishing and affiliate marketing.
              </motion.p>
              <motion.p variants={heroItemVariants} className="mt-5 text-gold/95">Serving ambitious minds worldwide.</motion.p>
              <motion.div variants={heroItemVariants} className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
                <PrimaryButton href="/books" className="bg-gold text-navy hover:bg-gold/90">Explore My Books</PrimaryButton>
                <PrimaryButton href="/affiliate-marketplace" className="border border-gold bg-transparent text-gold hover:bg-gold hover:text-navy">View Affiliate Marketplace</PrimaryButton>
              </motion.div>
            </div>
            <motion.div variants={heroItemVariants}>
              <Card className="bg-white/10 text-white backdrop-blur">
                <h2 className="font-serif text-2xl">Trust Signals</h2>
                <ul className="mt-6 space-y-4 text-sm text-white/90">
                  <li>✓ Clear external redirection model (no onsite payment processing)</li>
                  <li>✓ Direct links to Fiverr, Upwork, Amazon-focused products, and contact channels</li>
                  <li>✓ Transparent affiliate disclosure and legal pages</li>
                </ul>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

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
          <Card className="overflow-hidden p-0">
            <div className="aspect-[3/4] w-full">
              <img src="https://i.imgur.com/uFKSQs0.jpg" alt="Featured Book 1" className="h-full w-full object-cover" />
            </div>
            <div className="p-6">
              <PrimaryButton href="/books">BUY ON AMAZON</PrimaryButton>
            </div>
          </Card>
          <Card className="overflow-hidden p-0">
            <div className="aspect-[3/4] w-full">
              <img src="https://i.imgur.com/cvcjADZ.jpg" alt="Featured Book 2" className="h-full w-full object-cover" />
            </div>
            <div className="p-6">
              <PrimaryButton href="/books">BUY ON AMAZON</PrimaryButton>
            </div>
          </Card>
          <Card className="overflow-hidden p-0">
            <div className="aspect-[3/4] w-full">
              <img src="https://i.imgur.com/wefa6yu.jpg" alt="Featured Book 3" className="h-full w-full object-cover" />
            </div>
            <div className="p-6">
              <PrimaryButton href="/books">BUY ON AMAZON</PrimaryButton>
            </div>
          </Card>
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

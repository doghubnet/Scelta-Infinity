"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Card, PrimaryButton, SectionTitle } from "@/components/ui";
import { affiliateDisclosure, company } from "@/lib/site-data";
import { MotionSection } from "@/components/motion-section";
import { motion, useReducedMotion } from "framer-motion";

const affiliateHighlights = ["Atomic Habits", "The Psychology of Money", "Principles: Life and Work"];

const testimonials = [
  {
    name: "Dr. Tesfaye Ababe",
    country: "Ethiopia",
    quote: "This book completely changed how I approach wealth building. The practical playbooks are pure gold.",
    photo: "https://ui-avatars.com/api/?name=Dr+Tesfaye+Ababe&background=D4AF37&color=0A2540&bold=true"
  },
  {
    name: "Zekariyas Alebel",
    country: "Ethiopia",
    quote: "The best investment I made this year. Clear, actionable insights from the world’s top minds.",
    photo: "https://ui-avatars.com/api/?name=Zekariyas+Alebel&background=D4AF37&color=0A2540&bold=true"
  },
  {
    name: "John Thomson",
    country: "USA",
    quote: "Finally a book that combines deep research with real-world application. Highly recommended.",
    photo: "https://ui-avatars.com/api/?name=John+Thomson&background=D4AF37&color=0A2540&bold=true"
  },
  {
    name: "Alan Tim",
    country: "UK",
    quote: "The BUILD IT. SCALE IT. OWN IT. framework is powerful and immediately useful.",
    photo: "https://ui-avatars.com/api/?name=Alan+Tim&background=D4AF37&color=0A2540&bold=true"
  },
  {
    name: "Benjamin Duke",
    country: "Canada",
    quote: "Professional, trustworthy, and truly international in perspective.",
    photo: "https://ui-avatars.com/api/?name=Benjamin+Duke&background=D4AF37&color=0A2540&bold=true"
  }
];

const newsItems = [
  {
    title: "New Book Release – The Billionaire Blueprint",
    description: "Now available on Amazon",
    href: "#"
  },
  {
    title: "Affiliate Program Update – Higher Commissions for Premium Products",
    description: "New partner incentives are now available for top-performing affiliates.",
    href: "#"
  },
  {
    title: "Global Reader Milestone – 40+ Countries Reached",
    description: "Our publishing and affiliate insights now serve readers across more than 40 countries.",
    href: "#"
  },
  {
    title: "Upcoming Masterclass – Building Lasting Affiliate Income",
    description: "A practical training session is coming soon for growth-focused creators.",
    href: "#"
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
    q: "Is this suitable for beginners?",
    a: "Yes, the content is designed for both beginners and experienced entrepreneurs who want to build lasting value through eBooks and affiliate marketing."
  },
  {
    q: "Do you support multiple currencies?",
    a: "Yes, all purchases are handled through Amazon, which supports multiple currencies depending on your location."
  },
  {
    q: "Is this only for one country?",
    a: "No, the books and recommendations are available worldwide. See the supported countries upon purchase on Amazon."
  },
  {
    q: "What if I have questions after purchase?",
    a: "You can reach out via the contact form or email scelta.infinity@gmail.com. We respond within 24 hours."
  },
  {
    q: "Are partners included?",
    a: "Yes, we welcome affiliate partners and collaborations. Feel free to reach out through the contact form."
  },
  {
    q: "Can I access content on mobile?",
    a: "Yes, the website is fully responsive and works perfectly on all mobile devices."
  },
  {
    q: "Do bundles save money?",
    a: "Yes, we offer bundle deals that provide significant savings compared to purchasing individually."
  }
];

export default function HomePage() {
  const reduceMotion = useReducedMotion();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 }
    }
  };

  const heroItemVariants = reduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.45, ease: "easeOut" } }
      }
    : {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
      };

  return (
    <>
      <section className="relative isolate overflow-hidden text-white">
        <div className="absolute inset-0 -z-20 bg-[url('https://i.postimg.cc/Z5Mqj0XJ/pexels-googledeepmind-18069814-(1).jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-navy/65 to-navy" />
        <div className="section-container">
          <motion.div variants={heroVariants} initial="hidden" animate="visible" className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
              <motion.p variants={heroItemVariants} className="mb-4 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.24em] text-gold">
                <span className="inline-block h-6 w-6 rounded-full border border-gold/80" aria-hidden="true" />
                Scelta Infinity
              </motion.p>
              <motion.h1 variants={heroItemVariants} className="text-5xl font-bold tracking-[-0.04em] text-white md:text-7xl">
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
                <h2 className="text-4xl font-bold tracking-[-0.025em] leading-[1.1] md:text-5xl">Trust Signals</h2>
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

      <MotionSection className="bg-white" delay={0.03}>
        <div className="section-container">
          <SectionTitle
            eyebrow="Updates"
            title="Latest News & Opportunities"
            description="Stay informed with new releases, partnership opportunities, and growth milestones across the Scelta Infinity ecosystem."
          />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {newsItems.map((item) => (
              <Card key={item.title} className="flex h-full flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold tracking-[-0.025em] leading-[1.1] text-navy">{item.title}</h3>
                  <p className="mt-4 text-navy/80">{item.description}</p>
                </div>
                <div className="mt-6">
                  <PrimaryButton href={item.href}>Read more</PrimaryButton>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section-container" delay={0.05}>
        <SectionTitle eyebrow="Featured Portfolio" title="Books Crafted for Real-World Value" description="Every title is developed with practical insight and publishing quality standards suitable for international readers." />
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="overflow-hidden p-0">
            <div className="relative aspect-[3/4] w-full"><Image src="https://i.imgur.com/uFKSQs0.jpg" alt="Client testimonial" width={400} height={250} className="object-cover rounded-xl" priority={true} /></div>
            <div className="p-6"><PrimaryButton href="/books">BUY ON AMAZON</PrimaryButton></div>
          </Card>
          <Card className="overflow-hidden p-0">
            <div className="relative aspect-[3/4] w-full"><Image src="https://i.imgur.com/cvcjADZ.jpg" alt="Client testimonial" width={400} height={250} className="object-cover rounded-xl" priority={true} /></div>
            <div className="p-6"><PrimaryButton href="/books">BUY ON AMAZON</PrimaryButton></div>
          </Card>
          <Card className="overflow-hidden p-0">
            <div className="relative aspect-[3/4] w-full"><Image src="https://i.imgur.com/wefa6yu.jpg" alt="Client testimonial" width={400} height={250} className="object-cover rounded-xl" priority={true} /></div>
            <div className="p-6"><PrimaryButton href="/books">BUY ON AMAZON</PrimaryButton></div>
          </Card>
        </div>
      </MotionSection>

      <MotionSection className="bg-white" delay={0.08}>
        <div className="section-container">
          <SectionTitle eyebrow="Affiliate Marketplace" title="Curated Wealth-Mindset Recommendations" description="Explore premium titles from trusted platforms that align with high-performance thinking and disciplined execution." />
          <div className="grid gap-6 md:grid-cols-3">
            {affiliateHighlights.map((item) => (
              <Card key={item}><p className="text-2xl font-bold tracking-[-0.025em] leading-[1.1] text-navy">{item}</p></Card>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-white" delay={0.11}>
        <div className="section-container">
          <SectionTitle eyebrow="About Us" title="Purpose-Driven, Quality-Focused, Globally Oriented" description="A refined platform built for lasting brand integrity in publishing and affiliate marketing." />
          <div className="grid gap-6 md:grid-cols-2">
            <Card><h3 className="text-2xl font-bold tracking-[-0.025em] leading-[1.1]">Mission</h3><p className="mt-4 text-navy/80">{company.mission}</p></Card>
            <Card><h3 className="text-2xl font-bold tracking-[-0.025em] leading-[1.1]">Vision</h3><p className="mt-4 text-navy/80">{company.vision}</p></Card>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="bg-navy py-8 text-center text-sm text-white/90" delay={0.12}>
        <div className="section-container py-0 md:py-0">
          <p>{affiliateDisclosure}</p>
          <p className="mt-2">All purchases are completed on third-party platforms such as Amazon KDP or affiliate partner sites.</p>
          <Link href="/affiliate-disclosure" className="mt-2 inline-block text-gold underline">Read full affiliate disclosure</Link>
        </div>
      </MotionSection>

      <MotionSection className="bg-white" delay={0.14}>
        <div className="section-container">
          <SectionTitle eyebrow="Growth Framework" title="The Strategy Behind Every Success" description="Built for readers and builders who value proven execution, measurable progress, and long-term growth." />

          <div>
            <h3 className="text-center text-3xl font-bold tracking-[-0.025em] leading-[1.1] text-navy">Real Reader Results</h3>
            <div className="mx-auto mt-8 max-w-3xl">
              <motion.div
                key={activeTestimonial}
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 24 }}
                animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                drag={reduceMotion ? false : "x"}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.25}
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onDragEnd={(_event: any, info: any) => {
                  if (info.offset.x > 60) {
                    setActiveTestimonial((activeTestimonial - 1 + testimonials.length) % testimonials.length);
                  } else if (info.offset.x < -60) {
                    setActiveTestimonial((activeTestimonial + 1) % testimonials.length);
                  }
                }}
              >
                <Card className="border-gold/25">
                  <div className="flex flex-col items-center text-center">
                    <Image src={testimonials[activeTestimonial].photo} alt="Client testimonial" width={400} height={250} className="object-cover rounded-xl" priority={true} unoptimized />
                    <p className="mt-5 text-navy/85">“{testimonials[activeTestimonial].quote}”</p>
                    <p className="mt-4 font-semibold text-navy">{testimonials[activeTestimonial].name}</p>
                    <p className="text-sm text-navy/70">{testimonials[activeTestimonial].country}</p>
                  </div>
                </Card>
              </motion.div>
              <div className="mt-6 flex items-center justify-center gap-3">
                <button type="button" onClick={() => setActiveTestimonial((activeTestimonial - 1 + testimonials.length) % testimonials.length)} className="rounded-full border border-gold/40 px-3 py-1 text-navy">←</button>
                {testimonials.map((item, idx) => (
                  <button key={item.name} type="button" onClick={() => setActiveTestimonial(idx)} className={`h-2.5 w-2.5 rounded-full ${idx === activeTestimonial ? "bg-gold" : "bg-navy/20"}`} aria-label={`Go to testimonial ${idx + 1}`} />
                ))}
                <button type="button" onClick={() => setActiveTestimonial((activeTestimonial + 1) % testimonials.length)} className="rounded-full border border-gold/40 px-3 py-1 text-navy">→</button>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-center text-3xl font-bold tracking-[-0.025em] leading-[1.1] text-navy">Who This Is Perfect For</h3>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {audienceTags.map((tag) => <span key={tag} className="rounded-full border border-gold/40 bg-cream px-5 py-2 text-sm font-semibold text-navy">{tag}</span>)}
            </div>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <h3 className="text-center text-3xl font-bold tracking-[-0.025em] leading-[1.1] text-navy">FAQ</h3>
            <div className="mt-8 space-y-4">
              {faqs.map((item, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={item.q} className="rounded-2xl border border-gold/30 bg-white shadow-luxury">
                    <button type="button" onClick={() => setOpenFaq(isOpen ? null : idx)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left">
                      <span className="font-semibold text-navy">{item.q}</span>
                      <span className="text-gold">{isOpen ? "−" : "+"}</span>
                    </button>
                    <motion.div
                      initial={false}
                      animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-navy/80">{item.a}</p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </MotionSection>
    </>
  );
}

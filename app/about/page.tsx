import Image from "next/image";
import { BookOpen, Calendar, Globe, Star } from "lucide-react";
import { Card, SectionTitle } from "@/components/ui";
import { company } from "@/lib/site-data";
import { MotionSection } from "@/components/motion-section";

const excellenceStats = [
  {
    value: "2026",
    label: "Founded",
    subtitle: "Building premium eBooks and trusted affiliate platforms",
    icon: Calendar
  },
  {
    value: "1",
    label: "Published Book",
    subtitle: "The Billionaire Blueprint — Decoding the 100 Wealthiest Minds",
    icon: BookOpen
  },
  {
    value: "100%",
    label: "Client Satisfaction",
    subtitle: "Trusted by readers and professionals worldwide",
    icon: Star
  },
  {
    value: "40+",
    label: "Countries",
    subtitle: "International reach from Ethiopia to global audiences",
    icon: Globe
  }
];

export default function AboutPage() {
  return (
    <MotionSection className="section-container bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.10),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(10,37,64,0.06),_transparent_40%)]">
      <SectionTitle eyebrow="Brand Story" title="About Scelta Infinity" description="A modern publishing and affiliate showcase established by Gediyon Adamu Yeshitila." />
      <Card>
        <p className="text-lg text-navy/85">
          {company.brandName} was created as a professional destination where quality eBooks and premium affiliate recommendations are presented with clarity and integrity. Led by {company.legalName}, the brand emphasizes trust, transparent communication, and long-term client value.
        </p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <article id="mission" className="rounded-2xl border border-navy/10 bg-cream/40 p-6 md:border-r-4 md:border-r-gold">
            <span className="mb-4 block h-1 w-12 rounded-full bg-gold" />
            <h3 className="text-3xl font-bold tracking-[-0.025em] leading-[1.1] text-navy">Mission</h3>
            <p className="mt-4 text-navy/85">{company.mission}</p>
          </article>
          <article id="vision" className="rounded-2xl border border-navy/10 bg-cream/40 p-6">
            <span className="mb-4 block h-1 w-12 rounded-full bg-gold" />
            <h3 className="text-3xl font-bold tracking-[-0.025em] leading-[1.1] text-navy">Vision</h3>
            <p className="mt-4 text-navy/85">{company.vision}</p>
          </article>
        </div>
      </Card>

      <section className="mt-8 rounded-3xl bg-navy p-8 md:p-10">
        <div className="mb-8 text-center md:text-left">
          <h3 className="font-serif text-4xl font-bold text-white">Numbers That Define Excellence</h3>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {excellenceStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <article key={stat.label} className="rounded-2xl border border-gold/25 bg-white/[0.04] p-6">
                <Icon className="h-6 w-6 text-gold" aria-hidden="true" />
                <p className="mt-4 text-4xl font-bold tracking-tight text-white">{stat.value}</p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.12em] text-gold">{stat.label}</p>
                <p className="mt-3 text-sm leading-relaxed text-white/80">{stat.subtitle}</p>
              </article>
            );
          })}
        </div>
      </section>

      <Card className="mt-8">
        <div className="grid items-center gap-8 md:grid-cols-[220px_1fr]">
          <div className="mx-auto">
            <Image
              src="https://i.imgur.com/5aT67cx.jpg"
              alt="Gediyon Adamu Yeshitila"
              width={220}
              height={220}
              className="rounded-full border-4 border-[#D4AF37] object-cover ring-4 ring-[#D4AF37]/25"
              sizes="220px"
            />
          </div>
          <div>
            <h3 className="font-serif text-3xl text-navy">Meet the Founder</h3>
            <p className="mt-4 text-lg font-semibold text-navy">Gediyon Adamu Yeshitila</p>
            <p className="mt-4 text-navy/85">
              <strong>Gediyon Adamu Yeshitila</strong> is the <strong>Founder</strong> of <strong>Scelta Infinity</strong>.
            </p>
            <p className="mt-2 text-navy/85">
              With a strong background in <strong>digital publishing</strong> and <strong>affiliate marketing</strong>, he is dedicated to delivering <strong>high-quality eBooks</strong> and <strong>trustworthy recommendations</strong> to clients worldwide.
            </p>
            <p id="founder" className="mt-2 text-navy/85">
              His <strong>vision</strong> is to build one of the most <strong>respected international platforms</strong> for lasting value and <strong>ethical business growth</strong>.
            </p>
          </div>
        </div>
      </Card>
    </MotionSection>
  );
}

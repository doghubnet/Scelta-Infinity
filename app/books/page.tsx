import Image from "next/image";
import { Card, PrimaryButton, SectionTitle } from "@/components/ui";

export default function BooksPage() {
  return (
    <section className="section-container">
      <SectionTitle
        eyebrow="Amazon KDP Showcase"
        title="My Books"
        description="A premium flagship title engineered for readers who study billionaire-level strategy, systems, and execution."
      />
      <Card className="mx-auto max-w-5xl">
        <div className="grid gap-8 md:grid-cols-[360px_1fr] md:items-start">
          <div className="overflow-hidden rounded-2xl border border-navy/10 bg-navy/5">
            <Image
              src="https://i.imgur.com/5KIMc.png"
              alt="THE BILLIONAIRE BLUEPRINT book cover"
              width={720}
              height={1080}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Featured Book</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-navy md:text-5xl">THE BILLIONAIRE BLUEPRINT</h2>
            <p className="mt-3 text-xl text-navy/85">Decoding the 100 Wealthiest Minds: From Musk to Arnault</p>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-gold">Author: Gediyon Adamu</p>
            <p className="mt-5 text-lg text-navy/85">
              The Ultimate Collection of Strategies. Detailed profiles of the world's wealthiest minds — Elon Musk,
              Larry Ellison, Jeff Bezos, Larry Page, Mark Zuckerberg, Sergey Brin and more — with their Daily
              Discipline, Books That Changed Their Lives, Iconic Quotes, and Engineered Reset & Mission Rhythm
              Playbooks.
            </p>
            <p className="mt-8 font-serif text-3xl font-bold text-navy md:text-4xl">BUILD IT. SCALE IT. OWN IT.</p>
            <PrimaryButton href="https://amazon.com" className="mt-8">Buy on Amazon</PrimaryButton>
          </div>
        </div>
      </Card>
    </section>
  );
}

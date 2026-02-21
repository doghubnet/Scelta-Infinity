import Link from "next/link";
import { BriefcaseBusiness, Facebook, Instagram, Linkedin, Mail, Send } from "lucide-react";
import { company } from "@/lib/site-data";

const quickLinks = [
  ["Home", "/"],
  ["My Books", "/books"],
  ["Affiliate Marketplace", "/affiliate-marketplace"],
  ["Services", "/services"],
  ["About Us", "/about"],
  ["Blog", "/blog"],
  ["Contact", "/contact"]
] as const;

const companyLinks = [
  ["About Scelta Infinity", "/about"],
  ["Mission", "/about#mission"],
  ["Vision", "/about#vision"],
  ["Meet the Founder", "/about#founder"]
] as const;

const resourceLinks = [
  ["Blog", "/blog"],
  ["Affiliate Disclosure", "/affiliate-disclosure"]
] as const;

const legalLinks = [
  ["Privacy Policy", "/privacy-policy"],
  ["Terms of Service", "/terms-of-service"]
] as const;

const connectLinks = [
  { label: "Instagram", href: company.instagram, icon: Instagram },
  { label: "LinkedIn", href: company.linkedin, icon: Linkedin },
  { label: "Facebook", href: company.facebook, icon: Facebook },
  { label: "Telegram", href: company.telegram, icon: Send },
  { label: "Fiverr", href: company.fiverr, icon: BriefcaseBusiness },
  { label: "Upwork", href: company.upwork, icon: BriefcaseBusiness },
  { label: "Email", href: `mailto:${company.email}`, icon: Mail }
];

function FooterColumn({ title, links }: { title: string; links: readonly (readonly [string, string])[] }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm text-cream/90">
        {links.map(([label, href]) => (
          <li key={href}>
            <Link href={href} className="transition hover:text-gold focus-visible:ring-offset-navy">{label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="section-container space-y-10 pb-12">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          <FooterColumn title="Quick Links" links={quickLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Resources" links={resourceLinks} />
          <FooterColumn title="Legal" links={legalLinks} />

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Connect</h4>
            <ul className="mt-4 space-y-2 text-sm text-cream/90">
              {connectLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-2 transition hover:text-gold focus-visible:ring-offset-navy"
                    aria-label={label}
                  >
                    <Icon className="h-4 w-4 text-gold" />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-gold/25 bg-white/5 p-6 md:p-8">
          <h4 className="font-serif text-2xl font-bold text-white">Send a Message</h4>
          <p className="mt-2 text-sm leading-relaxed text-cream/80">Reach out for books, affiliate collaborations, and services.</p>
          <form action="https://formspree.io/f/maqddkdo" method="POST" className="mt-6 grid gap-4 md:grid-cols-2">
            <input name="name" required placeholder="Full Name" className="rounded-xl border border-white/20 bg-white/10 p-3 text-white placeholder:text-cream/60" />
            <input name="email" type="email" required placeholder="Email Address" className="rounded-xl border border-white/20 bg-white/10 p-3 text-white placeholder:text-cream/60" />
            <textarea name="message" required placeholder="Message / Question" rows={4} className="rounded-xl border border-white/20 bg-white/10 p-3 text-white placeholder:text-cream/60 md:col-span-2" />
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-navy transition hover:bg-gold/90 md:col-span-2 md:w-fit">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-xs text-cream/80 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Scelta Infinity. All rights reserved.</p>
          <p>
            <Link href="/terms-of-service" className="hover:text-gold">Terms of Service</Link>
            <span className="px-2">|</span>
            <Link href="/privacy-policy" className="hover:text-gold">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

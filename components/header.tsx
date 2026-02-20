import Link from "next/link";
import { navLinks, company } from "@/lib/site-data";

function InfinityArrowLogo() {
  return (
    <svg viewBox="0 0 120 70" className="h-12 w-auto transition duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(212,175,55,0.65)] md:h-14" aria-hidden="true">
      <defs>
        <linearGradient id="goldGradient" x1="0" x2="1">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#F3E2A0" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>
      <path
        d="M8 35c0-12 8-22 20-22 13 0 21 11 32 22 11 11 19 22 32 22 12 0 20-10 20-22s-8-22-20-22c-13 0-21 11-32 22-11 11-19 22-32 22-12 0-20-10-20-22z"
        fill="none"
        stroke="url(#goldGradient)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M98 9l14 4-9 11" fill="none" stroke="#D4AF37" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const contactLinks = [
  { label: "Phone", href: `tel:${company.phone.replace(/\s+/g, "")}`, text: company.phone },
  { label: "WhatsApp", href: `https://wa.me/${company.whatsapp.replace(/\D/g, "")}`, text: company.whatsapp },
  { label: "Email", href: `mailto:${company.email}`, text: company.email },
  { label: "Fiverr", href: company.fiverr, text: "Fiverr" },
  { label: "Upwork", href: company.upwork, text: "Upwork" },
  { label: "Telegram", href: company.telegram, text: company.telegramHandle },
  { label: "Instagram", href: company.instagram, text: company.instagramHandle },
  { label: "LinkedIn", href: company.linkedin, text: company.linkedinDisplay },
  { label: "Facebook", href: company.facebook, text: "Facebook" }
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6 py-3 md:px-10">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="group flex items-center gap-3" aria-label="Scelta Infinity home">
            <InfinityArrowLogo />
            <span className="font-serif text-2xl font-bold text-gold transition duration-300 group-hover:scale-[1.02] group-hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.55)] md:text-3xl">{company.brandName}</span>
          </Link>
          <nav className="flex flex-wrap items-center gap-5 text-sm font-medium text-navy/90">
            {navLinks.map(([label, path]) => (
              <Link key={path} href={path} className="transition duration-300 hover:-translate-y-0.5 hover:text-gold">
                {label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 border-t border-navy/10 pt-2 text-xs text-navy/80">
          {contactLinks.map((link) => (
            <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined} className="transition hover:text-gold">
              <span className="font-semibold">{link.label}:</span> {link.text}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

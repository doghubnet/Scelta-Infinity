import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  Send,
  SendHorizontal
} from "lucide-react";
import { company, navLinks } from "@/lib/site-data";

function FiverrIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2" />
      <path d="M8 8h7v2h-2v6h-3v-6H8z" fill="currentColor" />
      <circle cx="12" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  );
}

function UpworkIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2" />
      <path d="M6.5 9.5v4.2c0 1.3.8 2.3 2.1 2.3 1.2 0 2-.9 2-2.2V9.5h2.1v3.1c.8 1.2 1.7 1.9 2.7 1.9.9 0 1.6-.7 1.6-1.7 0-.9-.7-1.6-1.6-1.6-.3 0-.7.1-.9.2l-.6-1.8c.5-.2 1-.3 1.6-.3 2 0 3.6 1.6 3.6 3.6s-1.6 3.7-3.6 3.7c-1.3 0-2.4-.6-3.4-1.7-.3 1.8-1.8 3-3.8 3-2.4 0-4.1-1.7-4.1-4.3V9.5z" fill="currentColor" />
    </svg>
  );
}

const socialLinks = [
  { label: "Phone", href: `tel:${company.phone.replace(/\s+/g, "")}`, icon: Phone },
  { label: "WhatsApp", href: `https://wa.me/${company.whatsapp.replace(/\D/g, "")}`, icon: MessageCircle },
  { label: "Email", href: `mailto:${company.email}`, icon: Mail },
  { label: "Fiverr", href: company.fiverr, icon: FiverrIcon },
  { label: "Upwork", href: company.upwork, icon: UpworkIcon },
  { label: "Telegram", href: company.telegram, icon: Send },
  { label: "Instagram", href: company.instagram, icon: Instagram },
  { label: "LinkedIn", href: company.linkedin, icon: Linkedin },
  { label: "Facebook", href: company.facebook, icon: Facebook }
];

const quickLinks = [...navLinks, ["Privacy Policy", "/privacy-policy"], ["Terms of Service", "/terms-of-service"], ["Affiliate Disclosure", "/affiliate-disclosure"]] as const;

export default function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="section-container grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-2xl font-semibold text-white">{company.brandName}</h3>
          <p className="mt-3 text-sm text-gold">Serving ambitious minds worldwide.</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/90">
            {quickLinks.map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="hover:text-gold">{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Connect</h4>
          <div className="mt-4 flex flex-wrap gap-3">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="rounded-full border border-gold/40 bg-white/5 p-3 text-gold transition hover:-translate-y-0.5 hover:border-gold hover:bg-gold/10"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="section-container pt-0">
        <div className="rounded-3xl border border-gold/25 bg-white/5 p-6 md:p-8">
          <h4 className="font-serif text-2xl text-white">Send a Message</h4>
          <p className="mt-2 text-sm text-cream/80">Reach out for books, affiliate collaborations, and services.</p>
          <form action="https://formspree.io/f/maqddkdo" method="POST" className="mt-6 grid gap-4 md:grid-cols-2">
            <input name="name" required placeholder="Full Name" className="rounded-xl border border-white/20 bg-white/10 p-3 text-white placeholder:text-cream/60" />
            <input name="email" type="email" required placeholder="Email Address" className="rounded-xl border border-white/20 bg-white/10 p-3 text-white placeholder:text-cream/60" />
            <textarea name="message" required placeholder="Message / Question" rows={4} className="rounded-xl border border-white/20 bg-white/10 p-3 text-white placeholder:text-cream/60 md:col-span-2" />
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-wide text-navy transition hover:bg-gold/90 md:col-span-2 md:w-fit">
              SEND MESSAGE <SendHorizontal className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-cream/80 md:px-10">
        © 2026 Scelta Infinity. All rights reserved.
      </div>
    </footer>
  );
}

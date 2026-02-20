import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
  Phone,
  Send
} from "lucide-react";
import { company } from "@/lib/site-data";

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

export default function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="section-container flex flex-col items-center justify-center gap-5 py-10 text-center">
        <p className="text-sm text-gold">Serving ambitious minds worldwide.</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
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
      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-cream/80 md:px-10">
        © {new Date().getFullYear()} {company.brandName} ({company.domain}). All rights reserved.
      </div>
    </footer>
  );
}

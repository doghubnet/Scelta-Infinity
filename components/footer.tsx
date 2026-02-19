import Link from "next/link";
import { company, affiliateDisclosure, navLinks } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="section-container grid gap-10 md:grid-cols-3">
        <div>
          <h3 className="font-serif text-2xl font-semibold text-white">{company.brandName}</h3>
          <p className="mt-3 text-sm text-cream/90">Legal name: {company.legalName}</p>
          <p className="mt-4 text-sm text-cream/80">{affiliateDisclosure}</p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map(([label, path]) => (
              <li key={path}>
                <Link href={path} className="hover:text-gold">
                  {label}
                </Link>
              </li>
            ))}
            <li><Link href="/privacy-policy" className="hover:text-gold">Privacy Policy</Link></li>
            <li><Link href="/terms-of-service" className="hover:text-gold">Terms of Service</Link></li>
            <li><Link href="/affiliate-disclosure" className="hover:text-gold">Affiliate Disclosure</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">Contact & Platforms</h4>
          <ul className="mt-4 space-y-2 text-sm text-cream/90">
            <li>{company.phone}</li>
            <li>{company.email}</li>
            <li><a href={company.fiverr} target="_blank" rel="noreferrer" className="hover:text-gold">Fiverr</a></li>
            <li><a href={company.upwork} target="_blank" rel="noreferrer" className="hover:text-gold">Upwork</a></li>
            <li><a href={company.telegram} target="_blank" rel="noreferrer" className="hover:text-gold">Telegram</a></li>
            <li><a href={company.instagram} target="_blank" rel="noreferrer" className="hover:text-gold">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-4 text-center text-xs text-cream/80 md:px-10">
        © {new Date().getFullYear()} {company.brandName} ({company.domain}). All rights reserved.
      </div>
    </footer>
  );
}

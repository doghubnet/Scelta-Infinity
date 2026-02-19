import Link from "next/link";
import { navLinks, company } from "@/lib/site-data";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 md:px-10">
        <Link href="/" className="font-serif text-2xl font-bold text-navy">
          {company.brandName}
        </Link>
        <nav className="flex flex-wrap items-center gap-5 text-sm font-medium text-navy/90">
          {navLinks.map(([label, path]) => (
            <Link key={path} href={path} className="transition hover:text-gold">
              {label}
            </Link>
          ))}
        </nav>
        <div className="text-right text-xs text-navy/80">
          <p>{company.phone}</p>
          <p>{company.email}</p>
        </div>
      </div>
    </header>
  );
}

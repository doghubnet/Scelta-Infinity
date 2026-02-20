import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function SectionTitle({
  eyebrow,
  title,
  description
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">{eyebrow}</p>
      <h2 className="font-serif text-3xl font-bold leading-tight text-navy md:text-5xl">{title}</h2>
      <p className="mt-4 text-lg text-navy/80">{description}</p>
    </div>
  );
}

export function PrimaryButton({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-navy/90",
        className
      )}
    >
      {children}
    </Link>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return <article className={cn("rounded-3xl border border-navy/10 bg-white p-7 shadow-luxury", className)}>{children}</article>;
}

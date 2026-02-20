"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { motion } from "framer-motion";

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
    <motion.div whileHover={{ scale: 1.04, y: -1 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
      <Link
        href={href}
        className={cn(
          "inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_10px_20px_-12px_rgba(10,37,64,0.65)] transition hover:bg-navy/90 hover:shadow-[0_18px_30px_-14px_rgba(212,175,55,0.5)]",
          className
        )}
      >
        {children}
      </Link>
    </motion.div>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.article
      whileHover={{ scale: 1.015, y: -4 }}
      transition={{ duration: 0.25 }}
      className={cn(
        "rounded-3xl border border-navy/10 bg-white p-7 shadow-luxury transition hover:border-gold/40 hover:shadow-[0_24px_40px_-20px_rgba(212,175,55,0.45)]",
        className
      )}
    >
      {children}
    </motion.article>
  );
}

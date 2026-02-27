"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

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
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-gold">{eyebrow}</p>
      <h2 className="text-4xl font-bold tracking-[-0.025em] leading-[1.1] text-navy md:text-5xl">{title}</h2>
      <p className="mt-6 text-[1.0625rem] leading-[1.75] tracking-[0.005em] text-navy/80">{description}</p>
    </div>
  );
}

export function PrimaryButton({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      whileHover={reduceMotion ? { opacity: 0.95 } : { scale: 1.02, y: -2 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.24, ease: "easeOut" }}
    >
      <Link
        href={href}
        className={cn(
          "inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_10px_20px_-12px_rgba(10,37,64,0.65)] transition hover:bg-navy/90 hover:shadow-[0_18px_30px_-14px_rgba(212,175,55,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy",
          className
        )}
      >
        {children}
      </Link>
    </motion.div>
  );
}

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={reduceMotion ? { opacity: 0.96 } : { scale: 1.02, y: -4 }}
      transition={{ duration: 0.24, ease: "easeOut" }}
      className={cn(
        "rounded-3xl border border-navy/10 bg-white p-7 shadow-luxury transition hover:border-gold/40 hover:shadow-[0_24px_40px_-20px_rgba(212,175,55,0.45)]",
        className
      )}
    >
      {children}
    </motion.article>
  );
}

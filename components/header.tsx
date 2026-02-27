"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
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

export default function Header() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[82rem] flex-wrap items-center justify-between gap-4 px-6 py-3 md:px-12">
        <Link href="/" className="group flex items-center gap-3" aria-label="Scelta Infinity home">
          <InfinityArrowLogo />
          <span className="font-serif text-2xl font-bold text-gold transition duration-300 group-hover:scale-[1.02] group-hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.55)] md:text-3xl">{company.brandName}</span>
        </Link>
        <nav aria-label="Primary navigation" className="flex flex-wrap items-center gap-5 text-sm font-semibold tracking-[0.01em] text-navy/90">
          {navLinks.map(([label, path]) => {
            const isActive = pathname === path;
            return (
              <motion.div
                key={path}
                whileHover={reduceMotion ? { opacity: 0.92 } : { scale: 1.02 }}
                transition={{ duration: 0.24 }}
                className="relative"
              >
                <Link href={path} className="transition duration-300 hover:text-gold">
                  {label}
                </Link>
                <motion.span
                  className="absolute -bottom-1 left-0 h-[2px] rounded-full bg-gold"
                  initial={false}
                  animate={{ width: isActive ? "100%" : "0%", opacity: isActive ? 1 : 0.9 }}
                  whileHover={{ width: "100%", opacity: 1 }}
                  transition={{ duration: 0.24, ease: "easeOut" }}
                />
              </motion.div>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

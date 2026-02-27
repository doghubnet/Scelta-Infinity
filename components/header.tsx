"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);

  const mobileMenuVariants = reduceMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.3, staggerChildren: 0.05 } }
      }
    : {
        hidden: { opacity: 0, y: -24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut", staggerChildren: 0.05 } }
      };

  const mobileItemVariants = reduceMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } };

  return (
    <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[82rem] flex-wrap items-center justify-between gap-4 px-6 py-3 md:px-12">
        <Link href="/" className="group flex items-center gap-3" aria-label="Scelta Infinity home">
          <InfinityArrowLogo />
          <span className="text-2xl font-bold text-gold transition duration-300 group-hover:scale-[1.02] group-hover:drop-shadow-[0_0_10px_rgba(212,175,55,0.55)] md:text-3xl">{company.brandName}</span>
        </Link>

        <button
          type="button"
          className="rounded-md border border-navy/20 px-3 py-2 text-sm font-semibold text-navy md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
        >
          Menu
        </button>

        <nav aria-label="Primary navigation" className="hidden flex-wrap items-center gap-5 text-sm font-semibold tracking-[0.01em] text-navy/90 md:flex">
          {navLinks.map(([label, path]) => {
            const isActive = pathname === path;
            return (
              <motion.div
                key={path}
                whileHover={reduceMotion ? { opacity: 0.92 } : { scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
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
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.div>
            );
          })}
        </nav>

        {menuOpen && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile navigation"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            className="w-full rounded-2xl border border-navy/10 bg-white p-4 shadow-luxury md:hidden"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map(([label, path]) => {
                const isActive = pathname === path;
                return (
                  <motion.div key={path} variants={mobileItemVariants}>
                    <Link
                      href={path}
                      onClick={() => setMenuOpen(false)}
                      className={`block rounded-lg px-3 py-2 text-sm font-semibold ${isActive ? "text-gold" : "text-navy"}`}
                    >
                      {label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
}

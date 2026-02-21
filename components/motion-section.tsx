"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

export function MotionSection({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.section
      initial={reduceMotion ? undefined : { opacity: 0, y: 28 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={reduceMotion ? undefined : { once: true, amount: 0.2 }}
      transition={reduceMotion ? undefined : { duration: 0.6, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

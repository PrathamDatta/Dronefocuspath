"use client";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

export function Reveal({ children, delay = 0, y = 24, className }: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

const group: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item: Variants = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } };

export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={group}
      initial={reduce ? "show" : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return <motion.div className={className} variants={item}>{children}</motion.div>;
}

export function HoverLift({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} whileHover={{ y: -6 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.25, ease }}>
      {children}
    </motion.div>
  );
}

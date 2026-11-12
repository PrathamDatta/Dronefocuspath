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

/** Letter-by-letter clip reveal: each char sits in an overflow-hidden span and slides up from 130%. */
export function ClipReveal({ text, className, delay = 0, as = "span" }: { text: string; className?: string; delay?: number; as?: "span" | "h1" | "h2" }) {
  const reduce = useReducedMotion();
  const group2: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.018, delayChildren: delay } } };
  const char: Variants = {
    hidden: { y: "130%" },
    show: { y: "0%", transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };
  const Tag = motion[as];
  return (
    <Tag className={className}>
      <motion.span
        className="inline"
        variants={group2}
        initial={reduce ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        aria-label={text}
      >
        {text.split("").map((c, i) => (
          <span key={i} className="inline-block overflow-hidden" aria-hidden>
            <motion.span className="inline-block" variants={reduce ? undefined : char}>
              {c === " " ? " " : c}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

export function Marquee({ items, className }: { items: string[]; className?: string }) {
  const reduce = useReducedMotion();
  const track = [...items, ...items];
  return (
    <div className={`overflow-hidden ${className ?? ""}`} aria-hidden>
      <motion.div
        className="flex w-max shrink-0 gap-10 whitespace-nowrap"
        animate={reduce ? undefined : { x: ["0%", "-50%"] }}
        transition={reduce ? undefined : { duration: 22, ease: "linear", repeat: Infinity }}
      >
        {track.map((t, i) => (
          <span key={i} className="flex items-center gap-10">
            {t}
            <span className="text-signal-dim">&middot;</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

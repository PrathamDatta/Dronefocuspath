"use client";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ease = [0.22, 1, 0.36, 1] as const;
const badges = [
  ["DGCA", "authorised RPTO"],
  ["DPIIT", "recognised startup"],
  ["IP", "Indian-owned, patent pending"],
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "16%"]);
  const up = (d: number) => ({
    initial: reduce ? false : { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: d, ease },
  });
  return (
    <section id="top" ref={ref} className="relative isolate overflow-hidden bg-primary-deep text-white">
      <motion.div
        style={{ y, backgroundImage: "url(/assets/drone-hero.jpg)" }}
        className="absolute -inset-y-[10%] inset-x-0 -z-20 bg-cover bg-no-repeat bg-[position:78%_center] md:bg-[position:70%_center]"
        aria-hidden
      />
      <div
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(42,10,33,.96)_0%,rgba(42,10,33,.86)_38%,rgba(42,10,33,.2)_72%,rgba(42,10,33,0)_100%)] max-md:bg-[linear-gradient(180deg,rgba(42,10,33,.45),rgba(42,10,33,.94)_72%)]"
        aria-hidden
      />
      <div className="container-x flex min-h-[100svh] flex-col justify-center pb-24 pt-36">
        <motion.p {...up(0.05)} className="eyebrow !text-accent-light">
          Mission systems for the UAV era. Built in India, for the world.
        </motion.p>
        <motion.h1 {...up(0.15)} className="mt-6 max-w-3xl text-3xl font-semibold leading-[1.1] tracking-tight md:text-4xl">
          Everything the <span className="text-accent">mission</span> needs.
        </motion.h1>
        <motion.p {...up(0.3)} className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
          Mission infrastructure, deployable UAV systems and operator training for evolving UAV operational needs.
        </motion.p>
        <motion.div {...up(0.45)} className="mt-10 flex flex-wrap gap-4">
          <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href="#contact" className="btn btn-light">
            Request a demo
          </motion.a>
          <motion.a whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} href="#capabilities" className="btn btn-ghost">
            Explore capabilities
          </motion.a>
        </motion.div>
        <motion.ul {...up(0.6)} className="mt-16 flex flex-wrap gap-x-10 gap-y-4 text-sm text-white/80">
          {badges.map(([a, b]) => (
            <li key={a} className="flex items-center gap-3">
              <span className="rounded-md bg-white/10 px-2.5 py-1 font-mono text-xs font-semibold text-accent-light">{a}</span>
              {b}
            </li>
          ))}
        </motion.ul>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" aria-hidden />
    </section>
  );
}

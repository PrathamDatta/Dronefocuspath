"use client";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;
const badges = [
  ["DGCA", "authorised RPTO"],
  ["DPIIT", "recognised startup"],
  ["IP", "Indian-owned, patent pending"],
];

export default function Hero() {
  const reduce = useReducedMotion();
  const up = (d: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: d, ease },
  });
  return (
    <section id="top" className="grid-bg relative border-b border-line pb-20 pt-28 md:pb-28 md:pt-20">
      <div className="container-x">
        <motion.div {...up(0)} className="flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-line pb-4 font-mono text-xs text-ink-muted">
          <span className="flex items-center gap-2"><span className="status-dot" /> SYSTEM LIVE</span>
          <span>12.97&deg;N&nbsp;&nbsp;77.59&deg;E</span>
          <span className="hidden sm:inline">BENGALURU, IN</span>
          <span className="ml-auto hidden sm:inline">MISSION SYSTEMS FOR THE UAV ERA</span>
        </motion.div>

        <motion.p {...up(0.05)} className="eyebrow mt-8">
          Mission systems for the UAV era &mdash; built in India, for the world
        </motion.p>
        <motion.h1 {...up(0.15)} className="mt-5 max-w-3xl text-4xl font-medium leading-[1.05] tracking-tight md:text-6xl">
          Everything the <em className="font-normal italic text-signal-dim">mission</em> needs.
        </motion.h1>
        <motion.p {...up(0.3)} className="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
          Mission infrastructure, deployable UAV systems and operator training for evolving UAV operational needs.
        </motion.p>
        <motion.div {...up(0.4)} className="mt-10 flex flex-wrap gap-4">
          <a href="#contact" className="btn btn-primary">Request a demo</a>
          <a href="#capabilities" className="btn btn-ghost">Explore capabilities ↓</a>
        </motion.div>

        <motion.ul {...up(0.5)} className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-line bg-line sm:grid-cols-3">
          {badges.map(([a, b]) => (
            <li key={a} className="flex items-center gap-3 bg-panel px-5 py-4">
              <span className="border border-signal-dim/40 bg-signal-soft px-2 py-1 font-mono text-xs font-semibold text-signal-dim">{a}</span>
              <span className="text-sm text-ink-muted">{b}</span>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const systems = [
  { id: "capabilities", label: "Mission Infrastructure", code: "01" },
  { id: "capabilities", label: "Mission Air Systems", code: "02" },
  { id: "capabilities", label: "Dronocation", code: "03" },
  { id: "editions", label: "Editions", code: "04" },
  { id: "team", label: "Team", code: "05" },
  { id: "faq", label: "FAQ", code: "06" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => setTime(new Date().toUTCString().slice(17, 25) + " UTC");
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      {/* Mobile top bar */}
      <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-line bg-paper/95 px-6 backdrop-blur md:hidden">
        <a href="#top" aria-label="Derospace Systems home">
          <Image src="/assets/logo.svg" alt="Derospace Systems" width={130} height={30} priority className="h-8 w-auto" />
        </a>
        <button type="button" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)} className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 border border-ink/30">
          <span className={`h-0.5 w-5 bg-ink transition-transform ${open ? "translate-y-1 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 bg-ink transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`} />
        </button>
      </header>
      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label="Mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-50 flex flex-col gap-1 border-b border-line bg-paper px-6 py-6 md:hidden"
          >
            {systems.map((s) => (
              <a key={s.label} href={`#${s.id}`} onClick={() => setOpen(false)} className="flex items-center gap-3 border-b border-line py-3 font-mono text-sm uppercase tracking-wide text-ink">
                <span className="text-ink-muted">{s.code}</span>{s.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary mt-4 self-start">Request a demo</a>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Desktop left rail */}
      <header className="fixed inset-y-0 left-0 z-50 hidden w-[248px] flex-col border-r border-line bg-paper md:flex">
        <a href="#top" aria-label="Derospace Systems home" className="flex items-center gap-2 border-b border-line px-6 py-6">
          <Image src="/assets/logo.svg" alt="Derospace Systems" width={140} height={32} priority className="h-8 w-auto" />
        </a>
        <div className="flex items-center gap-2 border-b border-line px-6 py-3 font-mono text-[11px] text-ink-muted">
          <span className="status-dot" /> SYSTEM LIVE <span className="ml-auto">{time}</span>
        </div>
        <nav aria-label="Primary" className="flex-1 overflow-y-auto px-3 py-4">
          {systems.map((s) => (
            <a
              key={s.label}
              href={`#${s.id}`}
              className="group flex items-center gap-3 border-b border-line/60 px-3 py-3.5 font-mono text-[13px] uppercase tracking-[.04em] text-ink-muted transition-colors hover:text-signal-dim"
            >
              <span className="text-[11px] text-ink-muted/70 group-hover:text-signal-dim">{s.code}</span>
              <span className="link-roll truncate">
                <span className="roll-track">
                  <span className="roll-line">{s.label}</span>
                  <span className="roll-line text-signal-dim">{s.label}</span>
                </span>
              </span>
              <span aria-hidden className="ml-auto opacity-0 transition-opacity group-hover:opacity-100">→</span>
            </a>
          ))}
        </nav>
        <div className="border-t border-line p-4">
          <a href="#contact" className="btn btn-primary btn-ripple w-full">Request a demo</a>
        </div>
      </header>
    </>
  );
}

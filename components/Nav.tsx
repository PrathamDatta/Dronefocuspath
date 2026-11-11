"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Editions", href: "#editions" },
  { label: "Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  useEffect(() => {
    const on = () => setSolid(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${open ? "bg-white border-b border-line" : solid ? "bg-white/90 backdrop-blur border-b border-line" : "bg-transparent"}`}>
      <div className="container-x flex h-20 items-center justify-between">
        <a href="#top" aria-label="Derospace Systems home">
          <Image src={solid || open ? "/assets/logo.svg" : "/assets/logo-white.svg"} alt="Derospace Systems" width={150} height={44} priority className="h-11 w-auto" />
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className={`text-sm font-semibold uppercase tracking-[.08em] transition-colors ${solid ? "text-ink hover:text-primary" : "text-white/90 hover:text-white"}`}>{l.label}</a>
          ))}
          <a href="#contact" className={`btn ${solid ? "btn-primary" : "btn-light"}`}>Request a demo</a>
        </nav>
        <button type="button" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)} className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-current md:hidden" style={{ color: solid || open ? "#801E62" : "#fff" }}>
          <span className={`h-0.5 w-5 bg-current transition-transform ${open ? "translate-y-1 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 bg-current transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`} />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav aria-label="Mobile" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }} className="container-x flex flex-col gap-1 pb-8 md:hidden">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-b border-line py-4 text-lg font-semibold uppercase tracking-wide text-ink">{l.label}</a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary mt-6">Request a demo</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

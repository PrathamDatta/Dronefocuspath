"use client";
import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();
  const [v, setV] = useState(reduce ? to : 0);
  useEffect(() => {
    if (!inView || reduce) return;
    const c = animate(0, to, { duration: 1.4, ease: "easeOut", onUpdate: (n) => setV(Math.round(n)) });
    return () => c.stop();
  }, [inView, to, reduce]);
  return <span ref={ref}>{v}{suffix}</span>;
}

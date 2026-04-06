"use client";

import { useEffect, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FadeInUp } from "./ui/FadeInUp";

/* ── animated counter hook ────────────────────────────── */

function useCountUp(end: number, inView: boolean, duration = 1.5) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      // ease-out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      setValue(Math.round(start + (end - start) * eased));
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [inView, end, duration]);

  return value;
}

/* ── stat card data ───────────────────────────────────── */

interface StatCard {
  type: "count" | "fade";
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  desc: string;
}

const stats: StatCard[] = [
  {
    type: "count",
    value: 15,
    suffix: "+",
    label: "ore risparmiate",
    desc: "a settimana per ogni studio",
  },
  {
    type: "count",
    value: 40,
    prefix: "-",
    suffix: "%",
    label: "no-show",
    desc: "Promemoria intelligenti riducono gli appuntamenti mancati.",
  },
  {
    type: "fade",
    value: 0,
    label: "sempre operativo",
    desc: "Non dorme, non si ammala, non va in ferie.",
  },
  {
    type: "fade",
    value: 0,
    label: "mese per il ROI",
    desc: "Il costo è una frazione di uno stipendio.",
  },
];

/* ── single card component ────────────────────────────── */

function StatCardEl({ stat, index }: { stat: StatCard; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const counted = useCountUp(stat.value, isInView && stat.type === "count");

  // static display strings for fade-type cards
  const fadeLabels = ["24/7", "1°"];

  return (
    <FadeInUp delay={index * 0.1}>
      <div
        ref={ref}
        className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center h-full hover:shadow-md transition-shadow"
      >
        {/* Big number */}
        {stat.type === "count" ? (
          <p className="text-6xl md:text-7xl font-extrabold text-brand leading-none mb-3 tabular-nums">
            {stat.prefix ?? ""}
            {counted}
            {stat.suffix ?? ""}
          </p>
        ) : (
          <motion.p
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-6xl md:text-7xl font-extrabold text-brand leading-none mb-3"
          >
            {fadeLabels[index - 2]}
          </motion.p>
        )}

        {/* Label */}
        <p className="text-lg md:text-xl font-semibold text-secondary mb-1">
          {stat.label}
        </p>

        {/* Description */}
        <p className="text-sm text-text-muted">{stat.desc}</p>
      </div>
    </FadeInUp>
  );
}

/* ── main section ─────────────────────────────────────── */

export function Results() {
  return (
    <section
      id="risultati"
      className="py-24"
      style={{ background: "linear-gradient(to bottom, #F8FAFC, #F0F7FF)" }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <FadeInUp className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
            Risultati misurabili
          </h2>
        </FadeInUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <StatCardEl key={idx} stat={stat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

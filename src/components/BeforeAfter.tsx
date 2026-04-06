"use client";

import { motion } from "framer-motion";
import { FadeInUp } from "./ui/FadeInUp";
import { ArrowRight, Phone, Mail, CalendarX, Clock, User, CheckCircle } from "lucide-react";

/* ── data ─────────────────────────────────────────────── */

const ICON_CLS = "w-5 h-5 shrink-0";

interface LineItem {
  icon: React.ReactNode;
  text: string;
  accent: string;
  extra?: React.ReactNode;
  emoji?: string;
}

const withoutItems: LineItem[] = [
  {
    icon: <Phone className={`${ICON_CLS} text-red-500`} />,
    text: "5 chiamate perse",
    accent: "text-red-900",
    extra: (
      <motion.span
        animate={{ x: [-1.5, 1.5, -1.5, 1.5, 0] }}
        transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 2 }}
        className="inline-flex"
      >
        <Phone className={`${ICON_CLS} text-red-500`} />
      </motion.span>
    ),
  },
  {
    icon: <Mail className={`${ICON_CLS} text-red-500`} />,
    text: "23 email non lette",
    accent: "text-red-900",
    extra: (
      <span className="relative ml-auto">
        <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5">
          <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping" />
          <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white animate-pulse">
            23
          </span>
        </span>
      </span>
    ),
  },
  {
    icon: <CalendarX className={`${ICON_CLS} text-red-500`} />,
    text: "3 no-show oggi",
    accent: "text-red-900 line-through",
  },
  {
    icon: <Clock className={`${ICON_CLS} text-red-500`} />,
    text: "11 ore lavorate",
    accent: "text-red-900",
    extra: (
      <div className="ml-auto w-28 h-2 rounded-full bg-red-200 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-red-500"
          initial={{ width: 0 }}
          whileInView={{ width: "92%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
    ),
  },
  {
    icon: <User className={`${ICON_CLS} text-red-500`} />,
    text: "Zero tempo per i clienti",
    accent: "text-red-900",
    emoji: "😓",
  },
];

const withItems: LineItem[] = [
  {
    icon: <CheckCircle className={`${ICON_CLS} text-brand`} />,
    text: "Tutte le chiamate gestite dall'AI",
    accent: "text-emerald-800",
  },
  {
    icon: <CheckCircle className={`${ICON_CLS} text-brand`} />,
    text: "Email classificate e risposte automatiche",
    accent: "text-emerald-800",
  },
  {
    icon: <CheckCircle className={`${ICON_CLS} text-brand`} />,
    text: "Zero no-show — promemoria automatici",
    accent: "text-emerald-800",
  },
  {
    icon: <Clock className={`${ICON_CLS} text-brand`} />,
    text: "6 ore lavorate",
    accent: "text-emerald-800",
    /* dual-colour bar rendered inline below */
  },
  {
    icon: <CheckCircle className={`${ICON_CLS} text-brand`} />,
    text: "5 ore in più per i tuoi clienti",
    accent: "text-emerald-800",
    emoji: "😊",
  },
];

/* ── stagger delays ───────────────────────────────────── */
const WITHOUT_BASE = 0.2;
const WITH_BASE = WITHOUT_BASE + withoutItems.length * 0.3 + 0.2;

/* ── row component ────────────────────────────────────── */

function Row({
  item,
  index,
  base,
  borderColor,
  isDualBar,
}: {
  item: LineItem;
  index: number;
  base: number;
  borderColor: string;
  isDualBar?: boolean;
}) {
  const delay = base + index * 0.3;

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      className={`flex items-center gap-3 py-3.5 border-b last:border-0 ${borderColor}`}
    >
      {/* icon — first row "without" uses the shaking phone extra */}
      {item.extra && index === 0 ? item.extra : <span>{item.icon}</span>}

      {/* text + optional emoji */}
      <span className={`text-sm font-semibold ${item.accent} flex-1`}>
        {item.emoji && <span className="mr-1 text-2xl align-middle">{item.emoji}</span>}
        {item.text}
      </span>

      {/* trailing element (badge, progress bar) */}
      {item.extra && index !== 0 && item.extra}

      {/* dual-colour bar for "with" card row 3 */}
      {isDualBar && (
        <div className="ml-auto flex flex-col items-end gap-0.5">
          <div className="flex items-center gap-1">
            <span className="text-[9px] text-emerald-600 font-semibold">tempo libero</span>
          </div>
          <div className="w-28 h-2 rounded-full bg-emerald-100 overflow-hidden flex">
            <motion.div
              className="h-full bg-secondary rounded-l-full"
              initial={{ width: 0 }}
              whileInView={{ width: "55%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            <motion.div
              className="h-full bg-brand rounded-r-full"
              initial={{ width: 0 }}
              whileInView={{ width: "45%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.1 }}
            />
          </div>
        </div>
      )}
    </motion.div>
  );
}

/* ── card shake variant ───────────────────────────────── */
const shakeVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
  shake: {
    x: [0, -3, 3, -3, 3, -2, 2, 0],
    transition: { duration: 0.35, delay: 0.55 },
  },
};

const calmVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: 0.3,
      ease: "easeOut" as const,
    },
  },
};

/* ── main component ───────────────────────────────────── */

export function BeforeAfter() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <FadeInUp>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-secondary mb-4 leading-tight">
              La tua giornata, <span className="text-brand">trasformata</span>
            </h2>
          </FadeInUp>
          <FadeInUp delay={0.1}>
            <p className="text-lg md:text-xl text-text-muted">
              Stesso business. Stessa giornata. Risultato completamente diverso.
            </p>
          </FadeInUp>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
          {/* ── WITHOUT AI ── */}
          <motion.div
            variants={shakeVariant}
            initial="hidden"
            whileInView={["visible", "shake"]}
            viewport={{ once: true, margin: "-80px" }}
            className="rounded-2xl border border-red-200 overflow-hidden h-full"
            style={{
              background: "linear-gradient(to bottom, #FEF2F2, #FEE2E2)",
              boxShadow: "0 8px 30px rgba(239,68,68,0.1)",
            }}
          >
            <div className="h-1.5 bg-red-500" />
            <div className="p-6 md:p-8">
              <h3 className="text-lg font-heading font-bold text-red-900 flex items-center gap-2 mb-6">
                <span className="text-xl">&#10060;</span> Senza AI
              </h3>
              <div>
                {withoutItems.map((item, i) => (
                  <Row
                    key={i}
                    item={item}
                    index={i}
                    base={WITHOUT_BASE}
                    borderColor="border-red-100"
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* ── WITH AI ── */}
          <motion.div
            variants={calmVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="rounded-2xl border border-teal-200 overflow-hidden h-full"
            style={{
              background: "linear-gradient(to bottom, #ECFDF5, #F0FDFA)",
              boxShadow: "0 8px 30px rgba(13,148,136,0.1)",
            }}
          >
            <div className="h-1.5 bg-brand" />
            <div className="p-6 md:p-8">
              <h3 className="text-lg font-heading font-bold text-emerald-900 flex items-center gap-2 mb-6">
                <span className="text-xl">&#9989;</span> Con SC Automation
              </h3>
              <div>
                {withItems.map((item, i) => (
                  <Row
                    key={i}
                    item={item}
                    index={i}
                    base={WITH_BASE}
                    borderColor="border-emerald-100"
                    isDualBar={i === 3}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <FadeInUp delay={0.3}>
          <div className="flex justify-center mt-12">
            <a
              href="#contatti"
              className="flex items-center gap-2 bg-brand hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-brand/25 hover:-translate-y-1"
            >
              Trasforma la tua giornata <ArrowRight size={20} />
            </a>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { FadeInUp } from "./ui/FadeInUp";
import { ArrowRight, Phone, Mail, CalendarX, Clock, User } from "lucide-react";

interface LineItem {
  icon: React.ReactNode;
  text: string;
  accent: string;
  extra?: React.ReactNode;
}

const ICON_CLS = "w-5 h-5 shrink-0";

const withoutItems: LineItem[] = [
  {
    icon: <Phone className={ICON_CLS} />,
    text: "5 chiamate perse",
    accent: "text-red-500",
    extra: (
      <motion.span
        animate={{ x: [-1, 1, -1, 1, 0] }}
        transition={{ duration: 0.4, repeat: Infinity, repeatDelay: 2 }}
        className="inline-flex"
      >
        <Phone className={`${ICON_CLS} text-red-400`} />
      </motion.span>
    ),
  },
  {
    icon: <Mail className={ICON_CLS} />,
    text: "23 email non lette",
    accent: "text-red-500",
    extra: (
      <span className="relative ml-auto">
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping" />
          <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white">
            23
          </span>
        </span>
      </span>
    ),
  },
  {
    icon: <CalendarX className={ICON_CLS} />,
    text: "3 no-show oggi",
    accent: "text-red-500 line-through",
  },
  {
    icon: <Clock className={ICON_CLS} />,
    text: "11 ore lavorate",
    accent: "text-red-500",
    extra: (
      <div className="ml-auto w-24 h-2 rounded-full bg-red-100 overflow-hidden">
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
    icon: <User className={ICON_CLS} />,
    text: "Zero tempo per i clienti",
    accent: "text-red-500",
  },
];

const withItems: LineItem[] = [
  {
    icon: <Phone className={ICON_CLS} />,
    text: "Tutte le chiamate gestite dall'AI",
    accent: "text-brand",
  },
  {
    icon: <Mail className={ICON_CLS} />,
    text: "Email classificate e risposte automatiche",
    accent: "text-brand",
  },
  {
    icon: <CalendarX className={ICON_CLS} />,
    text: "Zero no-show — promemoria automatici",
    accent: "text-brand",
  },
  {
    icon: <Clock className={ICON_CLS} />,
    text: "6 ore lavorate",
    accent: "text-brand",
    extra: (
      <div className="ml-auto w-24 h-2 rounded-full bg-emerald-100 overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-brand"
          initial={{ width: 0 }}
          whileInView={{ width: "50%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </div>
    ),
  },
  {
    icon: <User className={ICON_CLS} />,
    text: "5 ore in più per i tuoi clienti",
    accent: "text-brand",
  },
];

/* shared stagger delay: "without" items start at 0, "with" items start after all "without" finish */
const WITHOUT_BASE = 0.2;
const WITH_BASE = WITHOUT_BASE + withoutItems.length * 0.3 + 0.2;

function Row({
  item,
  index,
  base,
  checkColor,
  emoji,
}: {
  item: LineItem;
  index: number;
  base: number;
  checkColor: string;
  emoji?: string;
}) {
  const delay = base + index * 0.3;

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0"
    >
      {/* icon / emoji column */}
      {item.extra && index === 0 ? (
        item.extra
      ) : (
        <span className={checkColor}>{item.icon}</span>
      )}

      {/* text */}
      <span className={`text-sm font-medium ${item.accent} flex-1`}>
        {emoji && <span className="mr-1">{emoji}</span>}
        {item.text}
      </span>

      {/* optional trailing element (badge, progress bar) */}
      {item.extra && index !== 0 && item.extra}
    </motion.div>
  );
}

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* WITHOUT AI */}
          <FadeInUp delay={0.15}>
            <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm h-full"
                 style={{ background: "linear-gradient(to bottom, #F3F4F6, #E5E7EB)" }}>
              <div className="h-1 bg-red-500" />
              <div className="p-6 md:p-8">
                <h3 className="text-lg font-heading font-bold text-secondary flex items-center gap-2 mb-6">
                  <span className="text-red-500">&#10060;</span> Senza AI
                </h3>
                <div>
                  {withoutItems.map((item, i) => (
                    <Row
                      key={i}
                      item={item}
                      index={i}
                      base={WITHOUT_BASE}
                      checkColor="text-red-400"
                      emoji={i === 4 ? "😓" : undefined}
                    />
                  ))}
                </div>
              </div>
            </div>
          </FadeInUp>

          {/* WITH AI */}
          <FadeInUp delay={0.25}>
            <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm h-full"
                 style={{ background: "linear-gradient(to bottom, #FFFFFF, #F0F7FF)" }}>
              <div className="h-1 bg-brand" />
              <div className="p-6 md:p-8">
                <h3 className="text-lg font-heading font-bold text-secondary flex items-center gap-2 mb-6">
                  <span className="text-brand">&#9989;</span> Con SC Automation
                </h3>
                <div>
                  {withItems.map((item, i) => (
                    <Row
                      key={i}
                      item={item}
                      index={i}
                      base={WITH_BASE}
                      checkColor="text-brand"
                      emoji={i === 4 ? "😊" : undefined}
                    />
                  ))}
                </div>
              </div>
            </div>
          </FadeInUp>
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

"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, CalendarDays, Mail, Bell, MessageCircle, Star, FileText } from "lucide-react";

interface Notification {
  id: number;
  icon: React.ReactNode;
  text: string;
  time: string;
  badge: string;
  badgeColor: string;
}

const ICON_CLASS = "w-4 h-4 shrink-0";

const NOTIFICATIONS: Omit<Notification, "id">[] = [
  {
    icon: <Phone className={ICON_CLASS} />,
    text: "Chiamata gestita — Studio Dr. Bianchi",
    time: "09:14",
    badge: "Medico",
    badgeColor: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: <CalendarDays className={ICON_CLASS} />,
    text: "Appuntamento spostato — Centro Estetico Bella",
    time: "09:16",
    badge: "Beauty",
    badgeColor: "bg-pink-100 text-pink-700",
  },
  {
    icon: <Mail className={ICON_CLASS} />,
    text: "3 email classificate — Amm. Condominio Rossi",
    time: "09:18",
    badge: "Condomini",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    icon: <Bell className={ICON_CLASS} />,
    text: "Promemoria inviato — 12 pazienti domani",
    time: "09:21",
    badge: "Medico",
    badgeColor: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: <MessageCircle className={ICON_CLASS} />,
    text: "WhatsApp: prenotazione confermata — Ristorante Da Mario",
    time: "09:23",
    badge: "Ristorazione",
    badgeColor: "bg-orange-100 text-orange-700",
  },
  {
    icon: <Star className={ICON_CLASS} />,
    text: "Risposta recensione Google — Hotel Mirto",
    time: "09:25",
    badge: "Hotel",
    badgeColor: "bg-purple-100 text-purple-700",
  },
  {
    icon: <FileText className={ICON_CLASS} />,
    text: "Preventivo generato — Idraulico Ferrara",
    time: "09:27",
    badge: "Artigiani",
    badgeColor: "bg-gray-100 text-gray-600",
  },
  {
    icon: <Phone className={ICON_CLASS} />,
    text: "Chiamata gestita — Dentista Sanna",
    time: "09:30",
    badge: "Medico",
    badgeColor: "bg-emerald-100 text-emerald-700",
  },
];

const MAX_VISIBLE = 3;

export function HeroLiveFeed() {
  const [visible, setVisible] = useState<Notification[]>([]);
  const [index, setIndex] = useState(0);
  const [counter, setCounter] = useState(847);

  const addNotification = useCallback(() => {
    const item = NOTIFICATIONS[index % NOTIFICATIONS.length];
    const notification: Notification = { ...item, id: Date.now() };

    setVisible((prev) => {
      const next = [...prev, notification];
      return next.length > MAX_VISIBLE ? next.slice(-MAX_VISIBLE) : next;
    });
    setIndex((i) => i + 1);
    setCounter((c) => c + 1);
  }, [index]);

  useEffect(() => {
    // Add first notification immediately
    const initialTimeout = setTimeout(addNotification, 600);
    return () => clearTimeout(initialTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (index === 0) return;
    const interval = setInterval(addNotification, 2500);
    return () => clearInterval(interval);
  }, [index, addNotification]);

  return (
    <div className="w-full max-w-md mx-auto lg:mx-0">
      <div className="rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex items-center gap-2 px-5 py-3 border-b border-gray-100">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <span className="text-xs font-semibold text-gray-500 tracking-wide">
            AI Attiva — In tempo reale
          </span>
        </div>

        {/* Notifications */}
        <div className="relative h-[198px] overflow-hidden px-4 py-3">
          <AnimatePresence initial={false}>
            {visible.map((n) => (
              <motion.div
                key={n.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10, transition: { duration: 0.25 } }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                layout
                className="flex items-start gap-3 rounded-xl bg-white/80 border border-gray-100 px-3.5 py-3 mb-2 last:mb-0 shadow-sm"
              >
                <div className="mt-0.5 text-brand">{n.icon}</div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-secondary leading-snug truncate">
                    {n.text}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-[11px] text-gray-400 font-medium">
                      {n.time}
                    </span>
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${n.badgeColor}`}
                    >
                      {n.badge}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Footer counter */}
        <div className="border-t border-gray-100 px-5 py-2.5 flex items-center justify-center gap-1.5">
          <span className="text-xs text-gray-400 font-medium">
            <motion.span
              key={counter}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-block font-bold text-brand tabular-nums"
            >
              {counter}
            </motion.span>
            {" "}task gestite oggi
          </span>
        </div>
      </div>
    </div>
  );
}

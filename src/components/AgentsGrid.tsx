"use client";

import { Phone, MessageCircle, Mail, FileText, BarChart3, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInUp } from "./ui/FadeInUp";

const agents = [
  {
    icon: Phone,
    title: "Segreteria Telefonica AI",
    desc: "Risponde alle chiamate 24/7 e gestisce appuntamenti.",
    pill: "24/7 attivo",
  },
  {
    icon: MessageCircle,
    title: "Assistente WhatsApp & Chat",
    desc: "Prenotazioni e risposte istantanee su WhatsApp.",
    pill: "Risposta in <5 sec",
  },
  {
    icon: Mail,
    title: "Email & Follow-up Automatici",
    desc: "Classifica, risponde e fa follow-up automaticamente.",
    pill: "-80% email manuali",
  },
  {
    icon: FileText,
    title: "Gestione Documenti AI",
    desc: "Trascrive, compila e archivia i tuoi documenti.",
    pill: "-3h/giorno di burocrazia",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    desc: "Dashboard con metriche chiave e trend del tuo business.",
    pill: "Dati in tempo reale",
  },
  {
    icon: Settings,
    title: "Agenti Custom",
    desc: "Qualsiasi workflow ripetitivo, automatizzato su misura.",
    pill: "48-72h per il deploy",
  },
];

export function AgentsGrid() {
  return (
    <section id="agenti" className="py-24 bg-bg-light relative">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInUp className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-brand/10 text-brand font-semibold text-sm tracking-widest mb-4">
            I NOSTRI AGENTI AI
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary">
            Un team AI che non dorme mai
          </h2>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-brand/5 hover:border-brand/40 transition-shadow duration-300 h-full flex flex-col"
            >
              <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mb-5">
                <agent.icon className="w-6 h-6 text-brand" />
              </div>
              <h3 className="text-lg font-heading font-bold text-secondary mb-2">
                {agent.title}
              </h3>
              <p className="text-sm text-text-muted leading-relaxed mb-4">
                {agent.desc}
              </p>
              <span className="mt-auto inline-flex self-start px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-semibold">
                {agent.pill}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

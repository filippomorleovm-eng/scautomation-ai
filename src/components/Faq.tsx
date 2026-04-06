"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeInUp } from "./ui/FadeInUp";

export function Faq() {
  const faqs = [
    {
      q: "Serve competenza tecnica?",
      a: "No. Se sai usare WhatsApp, sai usare i nostri agenti.",
    },
    {
      q: "Come funziona la segreteria telefonica AI?",
      a: "La nostra AI ha una voce naturale italiana. Risponde al telefono, capisce le richieste, consulta il tuo calendario e può prenotare, spostare o cancellare appuntamenti in tempo reale.",
    },
    {
      q: "I dati dei pazienti sono al sicuro?",
      a: "Assolutamente sì. Abbiamo la piena conformità GDPR. Tutti i dati sono crittografati in transito e a riposo, e utilizziamo esclusivamente server basati in Europa.",
    },
    {
      q: "Quanto tempo ci vuole per essere operativi?",
      a: "48-72 ore. Una chiacchierata di 30 minuti, poi configuriamo tutto noi. In 2-3 giorni sei operativo.",
    },
    {
      q: "E se non sono soddisfatto?",
      a: "Nessun vincolo a lungo termine. Puoi disdire quando vuoi.",
    },
    {
      q: "Funziona solo per gli studi medici?",
      a: "No, la nostra tecnologia è flessibile. Lavoriamo anche con dentisti, commercialisti, hotel, ristoranti, palestre e retail.",
    },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <FadeInUp className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
            Domande Frequenti
          </h2>
          <p className="text-lg text-text-muted">
            Tutto quello che devi sapere prima di iniziare.
          </p>
        </FadeInUp>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <FadeInUp key={idx} delay={idx * 0.1}>
                <div 
                  className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${isOpen ? "border-brand border-opacity-50 bg-bg-light/50" : "border-gray-200 bg-white hover:border-gray-300"}`}
                >
                  <button
                    className="w-full flex items-center justify-between p-6 text-left"
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                  >
                    <span className="font-heading font-bold text-secondary text-lg pr-8">{faq.q}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`shrink-0 ${isOpen ? "text-brand" : "text-gray-400"}`}
                    >
                      <ChevronDown size={24} />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 pt-0 text-text-muted">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeInUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}

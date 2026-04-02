"use client";

import { Phone, MessageSquare, Mail, FileText, BarChart3, Wrench } from "lucide-react";
import { FadeInUp } from "./ui/FadeInUp";

export function AgentsGrid() {
  const agents = [
    {
      icon: <Phone className="w-8 h-8 text-white" />,
      title: "Segreteria Telefonica AI",
      desc: "Risponde alle chiamate 24/7 in italiano naturale. Prenota, sposta e cancella appuntamenti. Risponde alle domande frequenti e trasferisce le chiamate urgenti.",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-white" />,
      title: "Assistente WhatsApp & Chat",
      desc: "Chatbot intelligente su WhatsApp e sito web. Gestisce prenotazioni, invia promemoria automatici, risponde istantaneamente a domande su orari e servizi.",
    },
    {
      icon: <Mail className="w-8 h-8 text-white" />,
      title: "Email & Follow-up Automatici",
      desc: "Classifica le email in arrivo per priorità, risponde automaticamente alle richieste ripetitive, invia follow-up post-visita e recall ai clienti inattivi.",
    },
    {
      icon: <FileText className="w-8 h-8 text-white" />,
      title: "Gestione Documenti AI",
      desc: "Trascrive referti e documenti, compila modulistica da template, organizza e archivia le cartelle digitali automaticamente.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-white" />,
      title: "Analytics & Insights",
      desc: "Dashboard con metriche chiave: tasso di no-show, flusso clienti, orari di picco, trend mensili. Decisioni basate sui dati, non sull'intuito.",
    },
    {
      icon: <Wrench className="w-8 h-8 text-white" />,
      title: "Agenti Custom",
      desc: "Qualsiasi workflow ripetitivo del tuo business può diventare un agente AI. Dicci cosa ti fa perdere più tempo — noi lo automatizziamo su misura per te.",
    },
  ];

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
            <FadeInUp key={index} delay={index * 0.1}>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-brand/5 hover:-translate-y-2 hover:border-brand/40 transition-all duration-300 h-full flex flex-col group">
                <div className="w-14 h-14 bg-brand rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  {agent.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-secondary mb-3">
                  {agent.title}
                </h3>
                <p className="text-text-muted leading-relaxed">
                  {agent.desc}
                </p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import {
  Phone, MessageSquare, BellRing, Mail, Star, RefreshCcw
} from "lucide-react";
import { ArrowRight } from "lucide-react";
import { FadeInUp } from "./ui/FadeInUp";

const highlightedAgents = [
  { id: 1, name: "Segreteria Telefonica AI", icon: Phone, desc: "Risponde alle chiamate 24/7 in italiano naturale. Prenota, sposta e cancella appuntamenti. Trasferisce le chiamate urgenti.", tags: ["Medico", "Beauty", "Ristoranti"] },
  { id: 2, name: "Assistente WhatsApp", icon: MessageSquare, desc: "Chatbot intelligente su WhatsApp. Gestisce prenotazioni, invia promemoria automatici, risponde a domande su orari e servizi.", tags: ["Medico", "Retail"] },
  { id: 4, name: "Agente Anti No-Show", icon: BellRing, desc: "Invia promemoria multicanale (SMS, WhatsApp, email) e gestisce conferme e cancellazioni automatiche.", tags: ["Medico", "Beauty", "Ristoranti"] },
  { id: 5, name: "Risponditore Email", icon: Mail, desc: "Classifica le email in arrivo per priorità e risponde automaticamente alle richieste ripetitive.", tags: ["Tutti"] },
  { id: 6, name: "Agente Gestione Recensioni", icon: Star, desc: "Monitora Google e TripAdvisor, risponde alle recensioni e segnala quelle negative per intervento rapido.", tags: ["Ristoranti", "Hotel", "Beauty"] },
  { id: 7, name: "Follow-up Automatico", icon: RefreshCcw, desc: "Invia sequenze post-visita personalizzate e recall ai clienti inattivi per aumentare la retention.", tags: ["Tutti"] },
];

export function Catalog() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInUp className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-secondary mb-4">
            50+ agenti AI pronti per il tuo business
          </h2>
          <p className="text-lg text-text-muted">
            Ecco alcuni dei nostri agenti più richiesti
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlightedAgents.map((agent, index) => {
             const Icon = agent.icon;
             return (
              <FadeInUp key={agent.id} delay={Math.min(index * 0.05, 0.5)}>
                <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:shadow-brand/5 hover:-translate-y-1 hover:border-brand/30 transition-all duration-300 flex flex-col h-full group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-bg-light text-brand rounded-full flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-secondary text-lg leading-tight mb-1 group-hover:text-brand transition-colors">
                        {agent.name}
                      </h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {agent.tags.filter(t => t !== "Tutti").slice(0, 2).map((tag, i) => (
                          <span key={i} className="text-[10px] uppercase font-bold tracking-wider text-gray-500 bg-gray-50 px-2 py-0.5 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-text-muted text-sm mt-auto">
                    {agent.desc}
                  </p>
                </div>
              </FadeInUp>
             );
          })}
        </div>

        <FadeInUp delay={0.3} className="mt-12 text-center">
          <Link
            href="/agenti"
            className="inline-flex items-center gap-2 bg-brand hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-brand/25 hover:-translate-y-1"
          >
            Scopri tutti i 50+ agenti <ArrowRight size={20} />
          </Link>
        </FadeInUp>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { 
  Phone, MessageSquare, Bot, BellRing, Mail, Star, 
  RefreshCcw, UserCheck, Receipt, FileSpreadsheet, 
  CalendarClock, FilePen, CalendarDays, Package, 
  AlertCircle, Megaphone, Scissors, UtensilsCrossed 
} from "lucide-react";
import { FadeInUp } from "./ui/FadeInUp";

// Definiamo i dati del catalogo in base alla richiesta
const allAgents = [
  { id: 1, name: "Segreteria Telefonica AI", icon: Phone, desc: "Risponde alle chiamate 24/7 in italiano naturale. Prenota, sposta e cancella appuntamenti. Trasferisce le chiamate urgenti.", category: "Comunicazione", tags: ["Medico", "Beauty", "Ristoranti", "Tutti"] },
  { id: 2, name: "Assistente WhatsApp", icon: MessageSquare, desc: "Chatbot intelligente su WhatsApp. Gestisce prenotazioni, invia promemoria automatici, risponde a domande su orari e servizi.", category: "Comunicazione", tags: ["Tutti", "Medico", "Retail"] },
  { id: 3, name: "Chatbot Sito Web", icon: Bot, desc: "Widget chat integrato nel sito. Qualifica i lead, risponde alle FAQ e indirizza le richieste al team giusto.", category: "Vendite", tags: ["Tutti", "Condomini"] },
  { id: 4, name: "Agente Anti No-Show", icon: BellRing, desc: "Invia promemoria multicanale (SMS, WhatsApp, email) e gestisce conferme e cancellazioni automatiche.", category: "Operazioni", tags: ["Medico", "Beauty", "Ristoranti"] },
  { id: 5, name: "Risponditore Email", icon: Mail, desc: "Classifica le email in arrivo per priorità e risponde automaticamente alle richieste ripetitive.", category: "Comunicazione", tags: ["Tutti"] },
  { id: 6, name: "Agente Gestione Recensioni", icon: Star, desc: "Monitora Google e TripAdvisor, risponde alle recensioni e segnala quelle negative per intervento rapido.", category: "Comunicazione", tags: ["Ristoranti", "Hotel", "Beauty"] },
  { id: 7, name: "Follow-up Automatico", icon: RefreshCcw, desc: "Invia sequenze post-visita personalizzate e recall ai clienti inattivi per aumentare la retention.", category: "Vendite", tags: ["Tutti"] },
  { id: 8, name: "Agente Recall Clienti", icon: UserCheck, desc: "Identifica i clienti inattivi e li ricontatta con messaggi personalizzati per riportarli in agenda.", category: "Vendite", tags: ["Medico", "Beauty"] },
  { id: 9, name: "Agente Fatturazione", icon: Receipt, desc: "Genera fatture dai dati delle prestazioni, le invia ai clienti e traccia i pagamenti in sospeso.", category: "Amministrazione", tags: ["Tutti"] },
  { id: 10, name: "Agente Preventivi", icon: FileSpreadsheet, desc: "Crea preventivi professionali su richiesta partendo da template e listini preconfigurati.", category: "Vendite", tags: ["Artigiani", "Consulenti", "Tutti"] },
  { id: 11, name: "Agente Scadenze", icon: CalendarClock, desc: "Monitora tutte le scadenze fiscali e contrattuali, invia alert anticipati al team e ai clienti.", category: "Amministrazione", tags: ["Commercialisti", "Condomini"] },
  { id: 12, name: "Compilatore Documenti", icon: FilePen, desc: "Compila modulistica da template con dati già presenti, trascrive referti e archivia automaticamente.", category: "Amministrazione", tags: ["Medico", "Legale"] },
  { id: 13, name: "Agente Turni", icon: CalendarDays, desc: "Crea turni del personale ottimizzati in base a disponibilità, competenze e picchi di affluenza.", category: "Operazioni", tags: ["Ristoranti", "Hotel", "Retail"] },
  { id: 14, name: "Agente Inventario", icon: Package, desc: "Monitora le scorte in tempo reale, prevede esaurimenti e genera ordini di riapprovvigionamento.", category: "Operazioni", tags: ["Ristoranti", "Retail"] },
  { id: 15, name: "Agente Segnalazioni Condominio", icon: AlertCircle, desc: "Riceve segnalazioni guasti dai condomini, le classifica per urgenza e le smista ai fornitori.", category: "Operazioni", tags: ["Condomini"] },
  { id: 16, name: "Agente Comunicazioni Condominiali", icon: Megaphone, desc: "Genera avvisi condominiali, li distribuisce via email e WhatsApp e traccia le letture.", category: "Comunicazione", tags: ["Condomini"] },
  { id: 17, name: "Agente Booking Beauty", icon: Scissors, desc: "Gestisce prenotazioni con durate variabili per servizio, evita sovrapposizioni e ottimizza l'agenda.", category: "Operazioni", tags: ["Beauty"] },
  { id: 18, name: "Agente Menu Dinamico", icon: UtensilsCrossed, desc: "Aggiorna il menu digitale in base a disponibilità ingredienti, stagionalità e promozioni attive.", category: "Operazioni", tags: ["Ristoranti"] },
];

const categories = ["Tutti", "Comunicazione", "Vendite", "Amministrazione", "Operazioni"];

export function Catalog() {
  const [activeCategory, setActiveCategory] = useState("Tutti");

  const filteredAgents = activeCategory === "Tutti" 
    ? allAgents 
    : allAgents.filter(agent => agent.category === activeCategory);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInUp className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-secondary mb-4">
            50+ agenti AI pronti per il tuo business
          </h2>
          <p className="text-lg text-text-muted">
            Filtra per categoria o settore e trova l'agente perfetto
          </p>
        </FadeInUp>

        <FadeInUp delay={0.1} className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium transition-all ${
                activeCategory === cat 
                  ? "bg-brand text-white shadow-md" 
                  : "bg-gray-100 text-text-muted hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgents.map((agent, index) => {
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

        <FadeInUp delay={0.4} className="mt-16 text-center bg-bg-light border border-brand/20 p-8 rounded-3xl max-w-4xl mx-auto">
          <h3 className="text-xl font-heading font-bold text-secondary mb-3">Non trovi quello che cerchi?</h3>
          <p className="text-text-muted mb-6">Lo costruiamo su misura per te e per i tuoi flussi di lavoro unici.</p>
          <a href="#contatti" className="inline-block bg-brand hover:bg-teal-700 text-white font-medium px-8 py-3 rounded-full shadow-md transition-colors">
            Richiedi Agente Custom
          </a>
        </FadeInUp>
      </div>
    </section>
  );
}

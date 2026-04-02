"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { Stethoscope, Scissors, Building2, UtensilsCrossed, ChevronLeft, ChevronRight } from "lucide-react";
import { FadeInUp } from "./ui/FadeInUp";

const scenarios = [
  {
    icon: Stethoscope,
    label: "Studio Medico",
    color: "bg-blue-100 text-blue-700",
    text: "Ore 22:15. Un paziente chiama per spostare la visita di domani mattina. L'agente risponde, trova il primo slot libero giovedì alle 15:30, conferma e invia un SMS di promemoria. Tutto in 47 secondi.",
    stat: "Costo dell'interazione: €0.10",
  },
  {
    icon: Scissors,
    label: "Centro Estetico",
    color: "bg-pink-100 text-pink-700",
    text: "Lunedì mattina. 8 clienti hanno un appuntamento questa settimana ma nessuno ha confermato. L'agente invia un promemoria WhatsApp personalizzato a ciascuno. 7 su 8 confermano entro un'ora. Il posto dell'ottava viene riassegnato dalla lista d'attesa.",
    stat: "No-show evitati: 87%",
  },
  {
    icon: Building2,
    label: "Amministratore Condominio",
    color: "bg-amber-100 text-amber-700",
    text: "Sabato sera. Un condomino segnala una perdita d'acqua nel garage. L'agente riceve il messaggio WhatsApp, classifica la segnalazione come urgente, avvisa il tecnico reperibile e aggiorna il condomino sullo stato dell'intervento. L'amministratore lo scopre lunedì — già risolto.",
    stat: "Tempo di risposta: istantaneo",
  },
  {
    icon: UtensilsCrossed,
    label: "Ristorante",
    color: "bg-orange-100 text-orange-700",
    text: "Venerdì sera, pieno servizio. Il telefono squilla ma nessuno può rispondere. L'agente gestisce 12 chiamate contemporaneamente: 8 prenotazioni confermate, 3 informazioni sugli orari, 1 richiesta allergeni con risposta dettagliata dal menu.",
    stat: "Chiamate perse: zero",
  },
];

export function ScenariosCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    checkScroll();
    el.addEventListener("scroll", checkScroll, { passive: true });
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = 320 + 24; // card width + gap
    el.scrollBy({ left: direction === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInUp className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
            Come funziona nella pratica
          </h2>
        </FadeInUp>

        {/* Carousel wrapper */}
        <div className="relative max-w-5xl mx-auto">
          {/* Left arrow — desktop only */}
          <button
            onClick={() => scroll("left")}
            aria-label="Scorri a sinistra"
            className={`hidden md:flex absolute -left-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md items-center justify-center transition-opacity ${
              canScrollLeft ? "opacity-100 hover:bg-gray-50" : "opacity-0 pointer-events-none"
            }`}
          >
            <ChevronLeft size={20} className="text-secondary" />
          </button>

          {/* Right arrow — desktop only */}
          <button
            onClick={() => scroll("right")}
            aria-label="Scorri a destra"
            className={`hidden md:flex absolute -right-14 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md items-center justify-center transition-opacity ${
              canScrollRight ? "opacity-100 hover:bg-gray-50" : "opacity-0 pointer-events-none"
            }`}
          >
            <ChevronRight size={20} className="text-secondary" />
          </button>

          {/* Scrollable track */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide"
          >
            {scenarios.map((s, idx) => {
              const Icon = s.icon;
              return (
                <FadeInUp key={idx} delay={idx * 0.1}>
                  <div className="w-[300px] md:w-[320px] shrink-0 snap-start bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow flex flex-col h-full">
                    {/* Sector icon + label */}
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center ${s.color}`}>
                        <Icon size={18} />
                      </div>
                      <span className={`text-xs font-bold uppercase tracking-wider ${s.color.split(" ")[1]}`}>
                        {s.label}
                      </span>
                    </div>

                    {/* Scenario text */}
                    <p className="text-text-muted leading-relaxed text-[15px] flex-1 mb-5">
                      {s.text}
                    </p>

                    {/* Result stat */}
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-brand font-bold text-sm">{s.stat}</p>
                    </div>
                  </div>
                </FadeInUp>
              );
            })}
          </div>

          {/* Scroll indicators — mobile only */}
          <div className="flex justify-center gap-1.5 mt-4 md:hidden">
            {scenarios.map((_, idx) => (
              <div key={idx} className="w-2 h-2 rounded-full bg-gray-200" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

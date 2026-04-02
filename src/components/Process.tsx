"use client";

import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { FadeInUp } from "./ui/FadeInUp";

export function Process() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const [linesVisible, setLinesVisible] = useState(0);

  useEffect(() => {
    if (inView) {
      const timers = [
        setTimeout(() => setLinesVisible(1), 500),
        setTimeout(() => setLinesVisible(2), 1500),
        setTimeout(() => setLinesVisible(3), 2500),
        setTimeout(() => setLinesVisible(4), 3800),
        setTimeout(() => setLinesVisible(5), 4500),
        setTimeout(() => setLinesVisible(6), 5500),
        setTimeout(() => setLinesVisible(7), 6500),
      ];
      return () => timers.forEach(clearTimeout);
    }
  }, [inView]);

  const steps = [
    { num: "01", title: "Audit AI Gratuito", desc: "Analizziamo il tuo business in 30 minuti. Mappiamo i workflow, stimiamo il risparmio." },
    { num: "02", title: "Progettazione Agenti", desc: "Progettiamo agenti AI su misura. Nessun software generico." },
    { num: "03", title: "Deploy & Training", desc: "Attiviamo tutto. Si integra con i tuoi strumenti. Zero disruption." },
    { num: "04", title: "Ottimizzazione Continua", desc: "Gli agenti migliorano nel tempo. Supporto costante. Risultati misurabili." },
  ];

  return (
    <section id="processo" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Column - Steps */}
          <div className="flex-1 w-full max-w-xl">
            <FadeInUp>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-12">
                Come lavoriamo
              </h2>
            </FadeInUp>
            
            <div className="space-y-8">
              {steps.map((step, idx) => (
                <FadeInUp key={idx} delay={idx * 0.1} className="relative flex items-center md:justify-start gap-6">
                  <div className="flex items-center justify-center w-14 h-14 rounded-full bg-brand/10 border-2 border-brand text-brand font-bold text-xl shrink-0 shadow-sm">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-heading font-bold text-secondary mb-2">{step.title}</h3>
                    <p className="text-text-muted">{step.desc}</p>
                  </div>
                </FadeInUp>
              ))}
            </div>
          </div>

          {/* Right Column - Terminal Simulation */}
          <div className="flex-1 w-full max-w-xl" ref={ref}>
            <FadeInUp delay={0.3}>
              <div className="bg-[#0F172A] rounded-2xl shadow-2xl p-6 font-mono text-sm overflow-hidden border border-gray-800">
                {/* MacOS Dots */}
                <div className="flex gap-2 mb-6 border-b border-gray-800 pb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>

                <div className="space-y-3 min-h-[200px]">
                  {linesVisible >= 1 && (
                    <p className="text-green-400 font-bold mb-4">// SIMULAZIONE LIVE <span className="animate-pulse">_</span></p>
                  )}
                  {linesVisible >= 2 && (
                    <p className="text-gray-300"><span className="text-blue-400">→</span> Chiamata in arrivo: +39 070 *** ***</p>
                  )}
                  {linesVisible >= 3 && (
                    <p className="text-gray-300"><span className="text-brand">✓</span> Paziente identificato: Marco R.</p>
                  )}
                  {linesVisible >= 4 && (
                    <p className="text-gray-300"><span className="text-brand">✓</span> Richiesta: Spostare visita di giovedì</p>
                  )}
                  {linesVisible >= 5 && (
                    <p className="text-gray-300"><span className="text-brand">✓</span> Slot disponibile trovato: Venerdì 15:30</p>
                  )}
                  {linesVisible >= 6 && (
                    <p className="text-gray-300"><span className="text-brand">✓</span> Appuntamento aggiornato ed SMS conferma inviato</p>
                  )}
                  {linesVisible >= 7 && (
                    <div className="mt-6 pt-4 border-t border-gray-800 text-gray-400 flex items-center justify-between text-xs">
                      <span>Durata: 47 secondi</span>
                      <span className="text-green-400">Costo: €0.03</span>
                    </div>
                  )}
                </div>
              </div>
            </FadeInUp>
          </div>
          
        </div>
      </div>
    </section>
  );
}

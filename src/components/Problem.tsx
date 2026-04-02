"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FadeInUp } from "./ui/FadeInUp";

export function Problem() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-red-50/50 border-y border-red-100 pb-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center" ref={ref}>
          <FadeInUp>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-secondary mb-6 leading-tight">
              Quanto tempo perdi ogni giorno in task che <span className="text-red-500">non dovresti fare tu?</span>
            </h2>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <p className="text-xl text-text-muted mb-16 md:px-10">
              Che tu gestisca uno studio medico, un centro estetico, un condominio o un ristorante, il problema è lo stesso: il 60% del tuo tempo va in telefonate, email, prenotazioni e burocrazia. Non è quello per cui hai aperto il tuo business.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInUp delay={0.2} className="bg-white p-8 rounded-2xl shadow-sm border border-red-50 flex flex-col items-center">
              <div className="text-5xl md:text-6xl font-heading font-extrabold text-secondary mb-2 whitespace-nowrap">
                {inView ? <CountUp end={23} duration={2.5} /> : "0"}h
              </div>
              <p className="text-text-muted font-medium">Perse in burocrazia / settimana</p>
            </FadeInUp>

            <FadeInUp delay={0.3} className="bg-white p-8 rounded-2xl shadow-sm border border-red-50 flex flex-col items-center">
              <div className="text-5xl md:text-6xl font-heading font-extrabold text-brand mb-2 whitespace-nowrap">
                {inView ? <CountUp end={40} duration={2.5} /> : "0"}%
              </div>
              <p className="text-text-muted font-medium">No-show eliminabili</p>
            </FadeInUp>

            <FadeInUp delay={0.4} className="bg-white p-8 rounded-2xl shadow-sm border border-red-50 flex flex-col items-center">
              <div className="text-5xl md:text-6xl font-heading font-extrabold text-green-500 mb-2 whitespace-nowrap">
                {inView ? <CountUp end={15} duration={2.5} /> : "0"}h
              </div>
              <p className="text-text-muted font-medium">Recuperabili con AI</p>
            </FadeInUp>
          </div>
          
          <FadeInUp delay={0.6}>
            <p className="text-sm text-gray-400 mt-8 text-center italic">
              Dati medi rilevati su business di servizi in Italia.
            </p>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}

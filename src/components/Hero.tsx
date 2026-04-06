"use client";

import { TypeAnimation } from "react-type-animation";
import { FadeInUp } from "./ui/FadeInUp";
import { HeroLiveFeed } from "./ui/HeroLiveFeed";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-36 pb-24 md:pt-48 md:pb-36 overflow-hidden bg-white">
      {/* Background accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] rounded-full bg-brand/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[400px] h-[400px] rounded-full bg-secondary/5 blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 xl:gap-16 max-w-7xl mx-auto">

          {/* Left column — text */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left lg:w-[55%] shrink-0">

            <FadeInUp>
              <div className="inline-flex items-center gap-2 bg-bg-light border border-brand/20 px-4 py-2 rounded-full mb-8">
                <span className="w-2.5 h-2.5 rounded-full bg-brand animate-pulse" />
                <span className="text-sm font-semibold text-brand tracking-wide">AI Automation Agency — Italia</span>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl/tight font-heading font-extrabold text-secondary mb-6">
                Il tuo business lavora per te, <span className="text-brand">anche quando dormi</span>
              </h1>
            </FadeInUp>

            <FadeInUp delay={0.2} className="min-h-[80px] md:min-h-0">
              <div className="text-xl md:text-2xl text-text-muted mb-8 font-medium">
                Smetti di sprecare tempo con{" "}
                <span className="text-brand font-semibold block sm:inline">
                  <TypeAnimation
                    sequence={[
                      "le telefonate dei pazienti",
                      2000,
                      "le prenotazioni automatiche",
                      2000,
                      "le email ripetitive",
                      2000,
                      "la burocrazia quotidiana",
                      2000,
                      "ogni task che odi",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.3}>
              <p className="text-lg text-text-muted mb-10 max-w-2xl mx-auto">
                Nessun software da imparare. Nessun contratto annuale. Solo ore risparmiate, ogni giorno.
              </p>
            </FadeInUp>

            <FadeInUp delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
                <a href="#contatti" className="flex items-center justify-center gap-2 bg-brand hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-brand/25 hover:-translate-y-1">
                  Prenota il tuo Audit AI Gratuito <ArrowRight size={20} />
                </a>
                <a href="#agenti" className="flex items-center justify-center bg-white border-2 border-gray-200 hover:border-brand text-secondary px-8 py-4 rounded-full font-semibold text-lg transition-all hover:text-brand">
                  Scopri gli Agenti AI
                </a>
              </div>
            </FadeInUp>

            <FadeInUp delay={0.5}>
              <div className="border-t border-gray-100 pt-6">
                <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-3">Settori serviti con successo</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-text-muted font-medium">
                  <span>Studi Medici</span>
                  <span className="text-gray-300">&bull;</span>
                  <span>Dentisti</span>
                  <span className="text-gray-300">&bull;</span>
                  <span>Commercialisti</span>
                  <span className="text-gray-300">&bull;</span>
                  <span>Hotel</span>
                  <span className="text-gray-300">&bull;</span>
                  <span>Ristoranti</span>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mt-4">
                  {[
                    { emoji: "\u{1F1EE}\u{1F1F9}", label: "100% Italiano" },
                    { emoji: "\u26A1", label: "Operativo in 48-72h" },
                    { emoji: "\u{1F512}", label: "GDPR Compliant" },
                  ].map(({ emoji, label }) => (
                    <span
                      key={label}
                      className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-full px-3 py-1 text-xs font-medium text-secondary"
                    >
                      <span>{emoji}</span>
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInUp>

          </div>

          {/* Right column — live feed */}
          <FadeInUp delay={0.3} className="mt-12 lg:mt-0 lg:w-[45%]">
            <HeroLiveFeed />
          </FadeInUp>

        </div>
      </div>
    </section>
  );
}

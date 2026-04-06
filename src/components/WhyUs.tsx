"use client";

import { Puzzle, GraduationCap, ShieldCheck } from "lucide-react";
import { FadeInUp } from "./ui/FadeInUp";

const blocks = [
  {
    icon: Puzzle,
    title: "Su misura, non SaaS generico",
    desc: "Ogni agente è configurato sui tuoi workflow specifici. Non è un software uguale per tutti — è costruito intorno al tuo business.",
  },
  {
    icon: GraduationCap,
    title: "Zero software da imparare",
    desc: "Si integra con gli strumenti che usi già — WhatsApp, email, calendario. Se sai usare il telefono, sai usare i nostri agenti.",
  },
  {
    icon: ShieldCheck,
    title: "Zero vincoli, disdici quando vuoi",
    desc: "Nessun contratto annuale, nessuna penale. Resti solo se sei soddisfatto. Supporto italiano, umano, diretto.",
  },
];

export function WhyUs() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInUp className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
            Perché i business italiani scelgono SC Automation
          </h2>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 max-w-5xl mx-auto">
          {blocks.map((block, idx) => {
            const Icon = block.icon;
            return (
              <FadeInUp key={idx} delay={idx * 0.2}>
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center mb-5">
                    <Icon className="w-8 h-8 text-brand" />
                  </div>
                  <h3 className="text-lg font-heading font-bold text-secondary mb-2">
                    {block.title}
                  </h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {block.desc}
                  </p>
                </div>
              </FadeInUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}

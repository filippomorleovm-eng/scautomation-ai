"use client";

import { Clock, TrendingDown, Moon, DollarSign } from "lucide-react";
import { FadeInUp } from "./ui/FadeInUp";

export function Results() {
  const stats = [
    {
      icon: <Clock size={32} className="text-white" />,
      title: "15+ ore risparmiate",
      desc: "a settimana per ogni studio.",
    },
    {
      icon: <TrendingDown size={32} className="text-white" />,
      title: "-40% no-show",
      desc: "Promemoria intelligenti riducono gli appuntamenti mancati.",
    },
    {
      icon: <Moon size={32} className="text-white" />,
      title: "Operativo 24/7",
      desc: "Non dorme, non si ammala, non va in ferie.",
    },
    {
      icon: <DollarSign size={32} className="text-white" />,
      title: "ROI dal mese 1",
      desc: "Il costo è una frazione di uno stipendio.",
    },
  ];

  return (
    <section id="risultati" className="py-24 bg-bg-light">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInUp className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
            Risultati misurabili
          </h2>
        </FadeInUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <FadeInUp key={idx} delay={idx * 0.1}>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center h-full hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-brand rounded-full flex items-center justify-center mb-6 shadow-md">
                  {stat.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-brand mb-3">
                  {stat.title}
                </h3>
                <p className="text-text-muted">
                  {stat.desc}
                </p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { ArrowRight, Check, CheckCircle2, AlertCircle } from "lucide-react";
import { FadeInUp } from "./ui/FadeInUp";

export function ContactCta() {
  const [formData, setFormData] = useState({
    nome: "",
    contatto: "",
    business: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.nome,
          contact: formData.contatto,
          business: formData.business,
        }),
      });

      if (!res.ok) throw new Error("Request failed");

      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        throw new Error("Server error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contatti" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInUp>
          <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-bg-light to-white pointer-events-none" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/5 pointer-events-none rounded-l-full blur-3xl" />
            
            <div className="absolute top-0 bottom-0 left-0 w-1 bg-brand" />

            <div className="flex-1 p-10 md:p-16 relative z-10 flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-heading font-extrabold text-secondary mb-6 leading-tight">
                Pronto a eliminare il <span className="text-brand">lavoro che odi?</span>
              </h2>
              <p className="text-lg md:text-xl text-text-muted mb-8">
                30 minuti per scoprire quanto tempo e denaro puoi risparmiare.
              </p>
              
              <ul className="space-y-4 text-text-muted font-medium mb-12">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  Nessun impegno
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  Risposta entro 24h
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                    <Check size={14} strokeWidth={3} />
                  </div>
                  100% gratuito
                </li>
              </ul>
            </div>

            <div className="flex-1 p-8 md:p-16 bg-white relative z-10 border-l border-gray-100">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-8">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <p className="text-xl font-heading font-bold text-secondary mb-2">
                    Grazie!
                  </p>
                  <p className="text-text-muted">
                    Ti ricontatteremo entro 24 ore per fissare il tuo audit gratuito.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status === "error" && (
                    <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                      <AlertCircle size={18} className="shrink-0" />
                      <span>Qualcosa è andato storto. Riprova o contattaci a info@scautomation-ai.it</span>
                    </div>
                  )}

                  <div>
                    <label htmlFor="nome" className="block text-sm font-bold text-secondary mb-2">
                      Nome e Cognome
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      disabled={status === "sending"}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all disabled:opacity-50"
                      placeholder="Mario Rossi"
                    />
                  </div>

                  <div>
                    <label htmlFor="contatto" className="block text-sm font-bold text-secondary mb-2">
                      Email o Telefono
                    </label>
                    <input
                      type="text"
                      id="contatto"
                      name="contatto"
                      required
                      value={formData.contatto}
                      onChange={handleChange}
                      disabled={status === "sending"}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all disabled:opacity-50"
                      placeholder="mario@email.it o 340 1234567"
                    />
                  </div>

                  <div>
                    <label htmlFor="business" className="block text-sm font-bold text-secondary mb-2">
                      Il tuo business
                    </label>
                    <input
                      type="text"
                      id="business"
                      name="business"
                      required
                      value={formData.business}
                      onChange={handleChange}
                      disabled={status === "sending"}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all disabled:opacity-50"
                      placeholder="es. Studio dentistico, Hotel..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-2 bg-brand hover:bg-teal-700 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 mt-4 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {status === "sending" ? (
                      "Invio in corso..."
                    ) : (
                      <>Prenota il tuo Audit AI Gratuito <ArrowRight size={20} /></>
                    )}
                  </button>
                </form>
              )}
            </div>
            
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}

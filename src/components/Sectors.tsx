import { Stethoscope, Scissors, Building2, UtensilsCrossed, ShoppingBag } from "lucide-react";
import { FadeInUp } from "./ui/FadeInUp";
import Link from "next/link";

export function Sectors() {
  const sectors = [
    {
      id: "medici",
      title: "Studi Medici & Sanitari",
      icon: <Stethoscope size={40} strokeWidth={1.5} />,
      count: 12,
      color: "text-blue-500",
      bgHover: "hover:bg-blue-50",
      borderHover: "hover:border-blue-200"
    },
    {
      id: "beauty",
      title: "Centri Estetici & Parrucchieri",
      icon: <Scissors size={40} strokeWidth={1.5} />,
      count: 9,
      color: "text-pink-500",
      bgHover: "hover:bg-pink-50",
      borderHover: "hover:border-pink-200"
    },
    {
      id: "condomini",
      title: "Amministratori di Condominio",
      icon: <Building2 size={40} strokeWidth={1.5} />,
      count: 8,
      color: "text-indigo-500",
      bgHover: "hover:bg-indigo-50",
      borderHover: "hover:border-indigo-200"
    },
    {
      id: "ristorazione",
      title: "Ristoranti & Bar",
      icon: <UtensilsCrossed size={40} strokeWidth={1.5} />,
      count: 11,
      color: "text-orange-500",
      bgHover: "hover:bg-orange-50",
      borderHover: "hover:border-orange-200"
    },
    {
      id: "retail",
      title: "Negozi & Retail",
      icon: <ShoppingBag size={40} strokeWidth={1.5} />,
      count: 7,
      color: "text-emerald-500",
      bgHover: "hover:bg-emerald-50",
      borderHover: "hover:border-emerald-200"
    }
  ];

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <FadeInUp className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-secondary">
            Soluzioni su misura per il tuo settore
          </h2>
        </FadeInUp>

        <div className="flex flex-wrap justify-center gap-6 max-w-[920px] mx-auto">
          {sectors.map((sector, idx) => (
            <FadeInUp key={sector.id} delay={idx * 0.1}>
              <Link 
                href={`/settori/${sector.id}`}
                className={`block bg-white w-[280px] p-8 rounded-3xl border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group ${sector.borderHover}`}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 bg-gray-50 ${sector.color} group-${sector.bgHover.split(":")[1]}`}>
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {sector.icon}
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold text-secondary mb-2 group-hover:text-brand transition-colors">
                  {sector.title}
                </h3>
                <div className="flex items-center text-sm font-medium text-text-muted mt-4">
                  <span className="bg-gray-100 px-3 py-1 rounded-full">{sector.count} agenti disponibili</span>
                </div>
              </Link>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}

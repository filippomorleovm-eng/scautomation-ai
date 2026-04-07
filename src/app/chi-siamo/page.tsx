import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { Shield, Users, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Chi Siamo — SC Automation AI",
  description:
    "Scopri le persone dietro SC Automation AI. Due fondatori di Cagliari che costruiscono agenti AI su misura per il tuo business.",
  openGraph: {
    title: "Chi Siamo — SC Automation AI",
    description:
      "Scopri le persone dietro SC Automation AI. Due fondatori di Cagliari che costruiscono agenti AI su misura per il tuo business.",
    type: "website",
    locale: "it_IT",
  },
};

const founders = [
  {
    name: "Mattia",
    role: "Co-Fondatore",
    photo: "/Sbraba_profilo.png",
    bio: "Libero professionista di Cagliari, sempre stato dell'idea che la tecnologia deve lavorare per te, non il contrario. Il mio obiettivo è semplice: recuperare il tempo che le attività monotone mi rubano ogni giorno. Con gli Agenti AI che abbiamo sviluppato ci sto riuscendo ed ora voglio far sì che queste potenzialità vengano conosciute anche da voi.",
  },
  {
    name: "Filippo",
    role: "Co-Fondatore",
    photo: "/Carra_profilo.jpg",
    bio: "Sono un ingegnere di Cagliari, da sempre affascinato dalle nuove scoperte/tecnologie. Dopo vari viaggi per studi e lavori, ho visto come il mondo sta andando avanti velocemente e voglio far sì che nè io nè i miei collaboratori rimangano indietro. In un mondo sempre più veloce, voglio che SC Automation aiuti a tenere il passo ed i nostri Agenti sono il primo strumento che naviga verso quella rotta.",
  },
];

const values = [
  {
    icon: Shield,
    title: "Zero fuffa",
    text: "Non vendiamo fumo. Se l'AI non può migliorare il tuo business, te lo diciamo. Preferiamo un cliente soddisfatto a una vendita forzata.",
  },
  {
    icon: Users,
    title: "Su misura, sempre",
    text: "Niente soluzioni preconfezionate. Ogni agente è costruito sulle esigenze specifiche del tuo business, non su un template generico.",
  },
  {
    icon: Clock,
    title: "Operativi in 48-72 ore",
    text: "Non mesi di setup. Una chiacchierata, la configurazione, e in 2-3 giorni i tuoi agenti sono al lavoro.",
  },
];

export default function ChiSiamoPage() {
  return (
    <main>
      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-40 pb-20 bg-bg-light relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] rounded-full bg-brand/5 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl text-center">
          <FadeInUp>
            <div className="inline-block bg-white border border-brand/20 px-4 py-1.5 rounded-full mb-6 text-brand font-semibold text-sm shadow-sm tracking-widest uppercase">
              Chi Siamo
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-secondary mb-6 leading-tight">
              Le persone dietro i tuoi <span className="text-brand">agenti AI</span>
            </h1>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-xl md:text-2xl text-text-muted max-w-2xl mx-auto">
              Non siamo un software. Siamo due persone che costruiscono soluzioni su misura per il tuo business.
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ── Founders ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {founders.map((founder, index) => (
              <FadeInUp key={founder.name} delay={index * 0.15}>
                <div className="bg-white border border-gray-100 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-xl hover:border-brand/30 transition-all duration-300 flex flex-col items-center text-center h-full">
                  <div className="w-[200px] h-[200px] rounded-full overflow-hidden mb-6 shrink-0">
                    <Image
                      src={founder.photo}
                      alt={`Foto di ${founder.name}`}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-1">
                    {founder.name}
                  </h3>
                  <p className="text-brand font-semibold mb-4">{founder.role}</p>
                  <p className="text-text-muted leading-relaxed">{founder.bio}</p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Valori ── */}
      <section className="py-24 bg-bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
              I nostri valori
            </h2>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeInUp key={item.title} delay={index * 0.15}>
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm h-full flex flex-col items-center text-center">
                    <div className="w-14 h-14 bg-brand/10 text-brand rounded-xl flex items-center justify-center mb-6">
                      <Icon size={28} />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-secondary mb-3">
                      {item.title}
                    </h3>
                    <p className="text-text-muted leading-relaxed">{item.text}</p>
                  </div>
                </FadeInUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
              Vuoi scoprire cosa possiamo fare per te?
            </h2>
            <p className="text-lg text-text-muted mb-8 max-w-2xl mx-auto">
              Prenota un audit AI gratuito di 30 minuti. Ti mostriamo esattamente quanto tempo e denaro puoi risparmiare.
            </p>
            <a
              href="/#contatti"
              className="inline-flex items-center gap-2 bg-brand hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-brand/25 hover:-translate-y-1"
            >
              Prenota il tuo Audit AI Gratuito <ArrowRight size={20} />
            </a>
          </FadeInUp>
        </div>
      </section>

      <Footer />
    </main>
  );
}

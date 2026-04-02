import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — SC Automation AI",
  description:
    "Articoli e guide su come l'intelligenza artificiale può trasformare il tuo business. Strategie, casi studio e novità dal mondo dell'AI automation.",
  openGraph: {
    title: "Blog — SC Automation AI",
    description:
      "Articoli e guide su come l'intelligenza artificiale può trasformare il tuo business.",
    type: "website",
    locale: "it_IT",
  },
};

export default function BlogPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 bg-bg-light relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] rounded-full bg-brand/5 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl text-center">
          <FadeInUp>
            <div className="inline-block bg-white border border-brand/20 px-4 py-1.5 rounded-full mb-6 text-brand font-semibold text-sm shadow-sm tracking-widest uppercase">
              Blog
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-secondary mb-6 leading-tight">
              Blog
            </h1>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-xl md:text-2xl text-text-muted max-w-2xl mx-auto">
              Articoli e guide su come l&apos;AI può trasformare il tuo business
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* Coming soon */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInUp>
            <div className="max-w-2xl mx-auto text-center bg-bg-light border border-gray-100 rounded-2xl p-10 md:p-14">
              <div className="w-16 h-16 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 20h9" />
                  <path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-secondary mb-4">
                I primi articoli sono in arrivo
              </h2>
              <p className="text-lg text-text-muted mb-8 leading-relaxed">
                Nel frattempo, prenota il tuo audit gratuito per scoprire come
                possiamo aiutare il tuo business.
              </p>
              <a
                href="/#contatti"
                className="inline-flex items-center gap-2 bg-brand hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all shadow-lg hover:shadow-brand/25 hover:-translate-y-1"
              >
                Prenota il tuo Audit AI Gratuito <ArrowRight size={20} />
              </a>
            </div>
          </FadeInUp>
        </div>
      </section>

      <Footer />
    </main>
  );
}

import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeInUp } from "@/components/ui/FadeInUp";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

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

const articles = [
  {
    slug: "5-task-business-automatizzare-2026",
    title:
      "Quanto tempo perdi ogni giorno? 5 task che ogni business dovrebbe automatizzare nel 2026",
    date: "2026-04-03",
    excerpt:
      "È l'una e mezza. Dovresti essere a pranzo. Invece sei al telefono con un cliente che vuole spostare l'appuntamento di domani. Mentre parli, ti arriva una notifica: tre email non lette, tutte con la stessa domanda.",
  },
];

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

      {/* Articles list */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="space-y-8">
            {articles.map((article, idx) => {
              const formattedDate = new Date(article.date).toLocaleDateString(
                "it-IT",
                { year: "numeric", month: "long", day: "numeric" }
              );
              return (
                <FadeInUp key={article.slug} delay={idx * 0.1}>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="block bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-brand/30 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-1.5 text-sm text-text-muted mb-3">
                      <CalendarDays size={15} />
                      <time dateTime={article.date}>{formattedDate}</time>
                    </div>
                    <h2 className="text-xl md:text-2xl font-heading font-bold text-secondary mb-3 group-hover:text-brand transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-text-muted leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-brand font-semibold text-sm group-hover:gap-2.5 transition-all">
                      Leggi l&apos;articolo <ArrowRight size={16} />
                    </span>
                  </Link>
                </FadeInUp>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

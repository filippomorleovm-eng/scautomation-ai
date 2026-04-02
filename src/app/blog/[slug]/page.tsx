import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays } from "lucide-react";

/* ─── Articles Data ─── */

interface Article {
  title: string;
  description: string;
  date: string;
  author: string;
  content: string[];
}

const articles: Record<string, Article> = {
  // Add articles here as they are published. Example:
  // "come-la-segreteria-ai-riduce-i-no-show": {
  //   title: "Come la segreteria AI riduce i no-show del 40%",
  //   description: "Scopri come un agente telefonico AI può ridurre drasticamente gli appuntamenti mancati nel tuo studio.",
  //   date: "2026-04-10",
  //   author: "SC Automation AI",
  //   content: [
  //     "Paragraph 1...",
  //     "Paragraph 2...",
  //   ],
  // },
};

/* ─── Metadata ─── */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    return { title: "Articolo Non Trovato — SC Automation AI" };
  }

  return {
    title: `${article.title} — SC Automation AI Blog`,
    description: article.description,
    openGraph: {
      title: `${article.title} — SC Automation AI Blog`,
      description: article.description,
      type: "article",
      locale: "it_IT",
      publishedTime: article.date,
      authors: [article.author],
    },
  };
}

/* ─── Page ─── */

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  const formattedDate = new Date(article.date).toLocaleDateString("it-IT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main>
      <Navbar />

      {/* Article Header */}
      <section className="pt-40 pb-12 bg-bg-light relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] rounded-full bg-brand/5 blur-[100px] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-3xl">
          <FadeInUp>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-brand font-medium mb-8 hover:underline"
            >
              <ArrowLeft size={16} /> Torna al Blog
            </Link>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-secondary mb-6 leading-tight">
              {article.title}
            </h1>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div className="flex items-center gap-4 text-text-muted text-sm">
              <div className="flex items-center gap-1.5">
                <CalendarDays size={16} />
                <time dateTime={article.date}>{formattedDate}</time>
              </div>
              <span className="text-gray-300">|</span>
              <span>{article.author}</span>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <FadeInUp>
            <div className="prose prose-lg prose-gray max-w-none">
              {article.content.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-text-main leading-relaxed mb-6 text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bg-light">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <FadeInUp>
            <div className="bg-white border border-gray-100 rounded-2xl p-8 md:p-10 text-center shadow-sm">
              <h2 className="text-2xl font-heading font-bold text-secondary mb-4">
                Vuoi scoprire come automatizzare il tuo business?
              </h2>
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

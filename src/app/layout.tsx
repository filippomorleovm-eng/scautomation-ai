import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const siteUrl = "https://scautomation-ai.it";

export const metadata: Metadata = {
  title: "SC Automation AI — Agenti AI per ogni Business in Italia",
  description:
    "50+ agenti AI che gestiscono telefonate, prenotazioni, email e burocrazia per studi medici, centri estetici, amministratori di condominio, ristoranti e ogni business. Operativi in 48-72 ore.",
  keywords:
    "agenti AI, automazione business, segreteria AI, intelligenza artificiale business, Italia",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "SC Automation AI — Agenti AI per ogni Business in Italia",
    description:
      "50+ agenti AI che gestiscono telefonate, prenotazioni, email e burocrazia per il tuo business. Operativi in 48-72 ore.",
    type: "website",
    url: siteUrl,
    locale: "it_IT",
    siteName: "SC Automation AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "SC Automation AI — Agenti AI per ogni Business in Italia",
    description:
      "50+ agenti AI che gestiscono telefonate, prenotazioni, email e burocrazia per il tuo business. Operativi in 48-72 ore.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SC Automation AI",
  url: siteUrl,
  description: "Agenti AI per automatizzare ogni business in Italia",
  areaServed: "Italia",
  serviceType: [
    "AI Automation",
    "Virtual Assistant",
    "Business Process Automation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

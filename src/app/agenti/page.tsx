import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AgentiCatalog } from "@/components/AgentiCatalog";

export const metadata: Metadata = {
  title: "Catalogo Agenti AI — SC Automation",
  description:
    "Scopri tutti i 50+ agenti AI di SC Automation: comunicazione, vendite, amministrazione e operazioni. Trova l'agente perfetto per il tuo business.",
  openGraph: {
    title: "Catalogo Agenti AI — SC Automation",
    description:
      "Scopri tutti i 50+ agenti AI di SC Automation: comunicazione, vendite, amministrazione e operazioni. Trova l'agente perfetto per il tuo business.",
    type: "website",
    locale: "it_IT",
  },
};

export default function AgentiPage() {
  return (
    <main>
      <Navbar />
      <AgentiCatalog />
      <Footer />
    </main>
  );
}

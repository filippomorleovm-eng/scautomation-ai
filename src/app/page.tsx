import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { BeforeAfter } from "@/components/BeforeAfter";
import { AgentsGrid } from "@/components/AgentsGrid";
import { Catalog } from "@/components/Catalog";
import { Sectors } from "@/components/Sectors";
import { Process } from "@/components/Process";
import { Results } from "@/components/Results";
import { ScenariosCarousel } from "@/components/ScenariosCarousel";
import { Faq } from "@/components/Faq";
import { ContactCta } from "@/components/ContactCta";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <BeforeAfter />
      <AgentsGrid />
      <Catalog />
      <Sectors />
      <Process />
      <Results />
      <ScenariosCarousel />
      <Faq />
      <ContactCta />
      <Footer />
    </main>
  );
}

import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FadeInUp } from "@/components/ui/FadeInUp";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Phone, MessageSquare, Bot, BellRing, Mail, Star,
  RefreshCcw, UserCheck, Receipt, FileSpreadsheet,
  CalendarClock, FilePen, CalendarDays, Package,
  AlertCircle, Megaphone, Scissors, UtensilsCrossed,
  ArrowLeft, ArrowRight, Clock, TrendingDown, TrendingUp,
  type LucideIcon,
} from "lucide-react";

/* ─── Sector Data ─── */

interface SectorResult { value: string; label: string }

interface SectorData {
  title: string;
  description: string;
  painPoint: string;
  painStat: string;
  tags: string[];
  results: SectorResult[];
}

const sectorsData: Record<string, SectorData> = {
  medici: {
    title: "Agenti AI per Studi Medici e Sanitari",
    description: "Riduci le code in segreteria e i no-show. Automatizza prenotazioni e certificati.",
    painPoint: "Il 58% del tempo di un medico va in burocrazia. 23 ore su 40 settimanali perse tra telefonate, carte e prenotazioni.",
    painStat: "58%",
    tags: ["Medico", "Tutti"],
    results: [
      { value: "15+", label: "ore/settimana risparmiate" },
      { value: "-40%", label: "no-show" },
      { value: "Zero", label: "chiamate perse" },
    ],
  },
  beauty: {
    title: "Agenti AI per Centri Estetici e Parrucchieri",
    description: "Riempi l'agenda 24/7 e azzera i tempi morti. La tua reception è sempre aperta.",
    painPoint: "Il tuo centro perde fino al 30% degli appuntamenti per no-show e gestione caotica delle prenotazioni. Ogni chiamata persa è un cliente che va dalla concorrenza.",
    painStat: "30%",
    tags: ["Beauty", "Tutti"],
    results: [
      { value: "30%", label: "meno no-show" },
      { value: "24/7", label: "prenotazioni anche di notte" },
      { value: "Auto", label: "recall clienti inattivi" },
    ],
  },
  condomini: {
    title: "Agenti AI per Amministratori di Condominio",
    description: "Gestisci segnalazioni h24 e automatizza le comunicazioni ai condòmini.",
    painPoint: "Il 50% degli italiani è insoddisfatto del proprio amministratore. I motivi principali: scarsa reperibilità, comunicazione lenta, gestione poco trasparente.",
    painStat: "50%",
    tags: ["Condomini", "Tutti"],
    results: [
      { value: "24/7", label: "reperibilità garantita" },
      { value: "Auto", label: "segnalazioni gestite" },
      { value: "1 click", label: "comunicazioni inviate" },
    ],
  },
  ristorazione: {
    title: "Agenti AI per Ristoranti e Bar",
    description: "Dall'aiuto in prenotazione alla gestione scorte. Fai crescere il tuo locale.",
    painPoint: "Il telefono squilla durante il servizio e nessuno risponde. Ogni chiamata persa è una prenotazione persa — e un tavolo vuoto.",
    painStat: "100%",
    tags: ["Ristoranti", "Tutti"],
    results: [
      { value: "Zero", label: "prenotazioni perse" },
      { value: "Auto", label: "gestione allergeni e preferenze" },
      { value: "Auto", label: "recensioni Google gestite" },
    ],
  },
  retail: {
    title: "Agenti AI per Negozi e Retail",
    description: "Migliora l'inventario e il servizio clienti online e instore.",
    painPoint: "I tuoi clienti comprano una volta e spariscono. Nessun follow-up, nessuna fidelizzazione, nessun recall.",
    painStat: "0%",
    tags: ["Retail", "Tutti"],
    results: [
      { value: "+25%", label: "clienti di ritorno" },
      { value: "Auto", label: "follow-up post-acquisto" },
      { value: "Alert", label: "gestione inventario e scorte" },
    ],
  },
};

/* ─── Agent Data ─── */

interface AgentData {
  id: number;
  name: string;
  icon: LucideIcon;
  desc: string;
  category: string;
  tags: string[];
}

const allAgents: AgentData[] = [
  { id: 1, name: "Segreteria Telefonica AI", icon: Phone, desc: "Risponde alle chiamate 24/7 in italiano naturale. Prenota, sposta e cancella appuntamenti. Trasferisce le chiamate urgenti.", category: "Comunicazione", tags: ["Medico", "Beauty", "Ristoranti", "Tutti"] },
  { id: 2, name: "Assistente WhatsApp", icon: MessageSquare, desc: "Chatbot intelligente su WhatsApp. Gestisce prenotazioni, invia promemoria automatici, risponde a domande su orari e servizi.", category: "Comunicazione", tags: ["Tutti", "Medico", "Retail"] },
  { id: 3, name: "Chatbot Sito Web", icon: Bot, desc: "Widget chat integrato nel sito. Qualifica i lead, risponde alle FAQ e indirizza le richieste al team giusto.", category: "Vendite", tags: ["Tutti", "Condomini"] },
  { id: 4, name: "Agente Anti No-Show", icon: BellRing, desc: "Invia promemoria multicanale (SMS, WhatsApp, email) e gestisce conferme e cancellazioni automatiche.", category: "Operazioni", tags: ["Medico", "Beauty", "Ristoranti"] },
  { id: 5, name: "Risponditore Email", icon: Mail, desc: "Classifica le email in arrivo per priorità e risponde automaticamente alle richieste ripetitive.", category: "Comunicazione", tags: ["Tutti"] },
  { id: 6, name: "Agente Gestione Recensioni", icon: Star, desc: "Monitora Google e TripAdvisor, risponde alle recensioni e segnala quelle negative per intervento rapido.", category: "Comunicazione", tags: ["Ristoranti", "Hotel", "Beauty"] },
  { id: 7, name: "Follow-up Automatico", icon: RefreshCcw, desc: "Invia sequenze post-visita personalizzate e recall ai clienti inattivi per aumentare la retention.", category: "Vendite", tags: ["Tutti"] },
  { id: 8, name: "Agente Recall Clienti", icon: UserCheck, desc: "Identifica i clienti inattivi e li ricontatta con messaggi personalizzati per riportarli in agenda.", category: "Vendite", tags: ["Medico", "Beauty"] },
  { id: 9, name: "Agente Fatturazione", icon: Receipt, desc: "Genera fatture dai dati delle prestazioni, le invia ai clienti e traccia i pagamenti in sospeso.", category: "Amministrazione", tags: ["Tutti"] },
  { id: 10, name: "Agente Preventivi", icon: FileSpreadsheet, desc: "Crea preventivi professionali su richiesta partendo da template e listini preconfigurati.", category: "Vendite", tags: ["Artigiani", "Consulenti", "Tutti"] },
  { id: 11, name: "Agente Scadenze", icon: CalendarClock, desc: "Monitora tutte le scadenze fiscali e contrattuali, invia alert anticipati al team e ai clienti.", category: "Amministrazione", tags: ["Commercialisti", "Condomini"] },
  { id: 12, name: "Compilatore Documenti", icon: FilePen, desc: "Compila modulistica da template con dati già presenti, trascrive referti e archivia automaticamente.", category: "Amministrazione", tags: ["Medico", "Legale"] },
  { id: 13, name: "Agente Turni", icon: CalendarDays, desc: "Crea turni del personale ottimizzati in base a disponibilità, competenze e picchi di affluenza.", category: "Operazioni", tags: ["Ristoranti", "Hotel", "Retail"] },
  { id: 14, name: "Agente Inventario", icon: Package, desc: "Monitora le scorte in tempo reale, prevede esaurimenti e genera ordini di riapprovvigionamento.", category: "Operazioni", tags: ["Ristoranti", "Retail"] },
  { id: 15, name: "Agente Segnalazioni", icon: AlertCircle, desc: "Riceve segnalazioni guasti dai condomini, le classifica per urgenza e le smista ai fornitori.", category: "Operazioni", tags: ["Condomini"] },
  { id: 16, name: "Comunicazioni Condominiali", icon: Megaphone, desc: "Genera avvisi condominiali, li distribuisce via email e WhatsApp e traccia le letture.", category: "Comunicazione", tags: ["Condomini"] },
  { id: 17, name: "Agente Booking Beauty", icon: Scissors, desc: "Gestisce prenotazioni con durate variabili per servizio, evita sovrapposizioni e ottimizza l'agenda.", category: "Operazioni", tags: ["Beauty"] },
  { id: 18, name: "Agente Menu Dinamico", icon: UtensilsCrossed, desc: "Aggiorna il menu digitale in base a disponibilità ingredienti, stagionalità e promozioni attive.", category: "Operazioni", tags: ["Ristoranti"] },
];

/* ─── Scenari per settore+agente ─── */

const agentExamples: Record<string, Record<number, string>> = {
  medici: {
    1: "Scenario: Un paziente chiama alle 22:00 per spostare la visita di domani. L'agente risponde, trova il primo slot libero, conferma l'appuntamento e invia un SMS di promemoria. Tutto in 47 secondi, costo: €0.03.",
    2: "Scenario: Un paziente scrive su WhatsApp per conoscere i tempi di attesa per una visita specialistica. L'agente consulta l'agenda e risponde con le prime 3 date disponibili.",
    4: "Scenario: Il giorno prima della visita, l'agente invia un promemoria SMS e WhatsApp. Se il paziente non conferma entro 2 ore, lo richiama automaticamente.",
    5: "Scenario: Arriva una richiesta di certificato medico via email. L'agente la classifica, prepara la risposta con i documenti necessari e la mette in coda per la firma del medico.",
    8: "Scenario: Un paziente non si presenta da 6 mesi. L'agente lo identifica, invia un messaggio personalizzato e propone una visita di controllo con le date disponibili.",
    12: "Scenario: Dopo ogni visita, l'agente trascrive le note del medico, compila il referto nel template dello studio e lo archivia nella cartella digitale del paziente.",
  },
  beauty: {
    1: "Scenario: Una cliente chiama durante un trattamento e nessuno può rispondere. L'agente prende la chiamata, propone gli slot liberi per un taglio + colore e invia la conferma via SMS.",
    2: "Scenario: Una cliente vuole prenotare un trattamento viso sabato mattina. L'agente WhatsApp le mostra gli slot disponibili, lei sceglie, riceve conferma e promemoria automatico 24h prima.",
    4: "Scenario: Il giorno prima dell'appuntamento, l'agente invia un messaggio WhatsApp di promemoria. Se la cliente vuole cancellare, l'agente propone automaticamente una nuova data.",
    17: "Scenario: Una cliente prenota un pacchetto completo (taglio + piega + colore). L'agente calcola la durata totale, trova lo slot giusto senza sovrapposizioni e blocca l'agenda.",
    8: "Scenario: Una cliente non viene da 3 mesi. L'agente le invia un messaggio personalizzato con un'offerta dedicata per il suo trattamento preferito.",
    6: "Scenario: Una nuova recensione a 4 stelle arriva su Google. L'agente risponde ringraziando e invitando la cliente a provare un nuovo servizio.",
  },
  condomini: {
    15: "Scenario: Un condomino segnala una perdita d'acqua alle 23:00. L'agente riceve la segnalazione via WhatsApp, la classifica come urgente, avvisa il tecnico di turno e aggiorna il condomino sullo stato dell'intervento.",
    16: "Scenario: L'amministratore deve comunicare l'orario della riunione condominiale. L'agente genera l'avviso, lo invia via email e WhatsApp a tutti i condomini e traccia chi lo ha letto.",
    3: "Scenario: Un condomino visita il sito per segnalare un guasto all'ascensore. Il chatbot raccoglie i dettagli, classifica la priorità e crea il ticket per l'amministratore.",
    11: "Scenario: La polizza assicurativa del condominio scade tra 30 giorni. L'agente invia un alert all'amministratore e prepara la documentazione per il rinnovo.",
    5: "Scenario: Un condomino chiede via email lo stato del suo rimborso. L'agente riconosce la richiesta, recupera le informazioni e risponde automaticamente con l'aggiornamento.",
  },
  ristorazione: {
    1: "Scenario: Un cliente chiama per prenotare un tavolo per 4 sabato sera. L'agente verifica la disponibilità, conferma la prenotazione e invia un promemoria il giorno prima con il menu della serata.",
    4: "Scenario: Il giorno della prenotazione, l'agente invia un messaggio di conferma. Se il cliente non risponde, lo richiama. Se cancella, l'agente libera il tavolo e lo rende disponibile online.",
    18: "Scenario: Lo chef comunica che il pesce spada è finito. L'agente aggiorna il menu digitale in tempo reale su sito e Google, evitando ordini impossibili.",
    6: "Scenario: Un cliente lascia una recensione negativa su Google. L'agente risponde con tono professionale e invia un alert al proprietario per gestire il caso.",
    13: "Scenario: È lunedì mattina. L'agente analizza le prenotazioni della settimana, i dati storici di affluenza e genera i turni ottimali per sala e cucina.",
    14: "Scenario: Le scorte di farina stanno per esaurirsi. L'agente lo rileva, calcola il consumo previsto per la settimana e genera automaticamente l'ordine al fornitore.",
  },
  retail: {
    2: "Scenario: Un cliente acquista un prodotto. Dopo 7 giorni l'agente invia un messaggio di soddisfazione. Dopo 30 giorni suggerisce prodotti complementari. Dopo 90 giorni invia un'offerta personalizzata per farlo tornare.",
    7: "Scenario: Un cliente ha comprato una crema viso 3 settimane fa. L'agente gli invia un messaggio con consigli d'uso e suggerisce il siero complementare con il 10% di sconto.",
    14: "Scenario: Le scorte di un prodotto best-seller scendono sotto la soglia minima. L'agente invia un alert al responsabile e prepara l'ordine di riapprovvigionamento.",
    13: "Scenario: Il weekend si prevede un picco di affluenza. L'agente analizza i dati storici e propone turni extra per coprire le fasce orarie più intense.",
    3: "Scenario: Un visitatore del sito cerca un prodotto specifico. Il chatbot verifica la disponibilità in negozio, mostra le alternative e offre la prenotazione per il ritiro.",
    5: "Scenario: Un cliente chiede via email lo stato del suo ordine. L'agente riconosce la richiesta, recupera i dati di spedizione e risponde automaticamente con il tracking.",
  },
};

/* ─── Result icons ─── */

const resultIcons = [Clock, TrendingDown, TrendingUp];

/* ─── Metadata ─── */

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const sector = sectorsData[resolvedParams.id];

  if (!sector) {
    return { title: "Settore Non Trovato | SC Automation AI" };
  }

  return {
    title: `${sector.title} | SC Automation AI`,
    description: sector.description,
    openGraph: {
      title: `${sector.title} | SC Automation AI`,
      description: sector.description,
      type: "website",
      locale: "it_IT",
    },
  };
}

/* ─── Page ─── */

export default async function SectorPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const sectorId = resolvedParams.id;
  const sectorInfo = sectorsData[sectorId];

  if (!sectorInfo) {
    notFound();
  }

  const examples = agentExamples[sectorId] ?? {};

  // Agents matching this sector
  const matchedAgents = allAgents.filter((agent) =>
    agent.tags.some((tag) => sectorInfo.tags.includes(tag) && tag !== "Tutti")
  );
  const genericAgents = allAgents.filter(
    (agent) => agent.tags.includes("Tutti") && !matchedAgents.includes(agent)
  );
  const finalAgents = [...matchedAgents, ...genericAgents].slice(0, 8);

  return (
    <main>
      <Navbar />

      {/* ── 1. Hero ── */}
      <section className="pt-40 pb-20 bg-bg-light relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-brand/5" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-4xl">
          <FadeInUp>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-brand font-medium mb-8 hover:underline"
            >
              <ArrowLeft size={16} /> Torna alla Home
            </Link>
          </FadeInUp>

          <FadeInUp>
            <div className="inline-block bg-white border border-brand/20 px-4 py-1.5 rounded-full mb-6 text-brand font-semibold text-sm shadow-sm tracking-widest uppercase">
              Soluzione Settoriale
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-secondary mb-6 leading-tight">
              {sectorInfo.title}
            </h1>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <p className="text-lg text-text-muted max-w-2xl mx-auto">
              {sectorInfo.description}
            </p>
          </FadeInUp>
        </div>
      </section>

      {/* ── 2. Il problema nel tuo settore ── */}
      <section className="py-20 bg-red-50/50 border-y border-red-100">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <FadeInUp className="text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">
              Il problema nel tuo settore
            </h2>
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-red-100 max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl text-text-main font-medium leading-relaxed">
                {sectorInfo.painPoint}
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* ── 3. Agenti con scenari pratici ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInUp className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
              Gli agenti perfetti per te
            </h2>
            <p className="text-lg text-text-muted mt-4 max-w-2xl mx-auto">
              Ogni agente è pensato per risolvere un problema specifico del tuo settore, con risultati misurabili dal primo giorno.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {finalAgents.map((agent, index) => {
              const Icon = agent.icon;
              const example = examples[agent.id];
              return (
                <FadeInUp key={agent.id} delay={Math.min(index * 0.1, 0.5)}>
                  <div className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-brand/30 transition-all duration-300 h-full flex flex-col group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-bg-light text-brand rounded-full flex items-center justify-center shrink-0 group-hover:bg-brand group-hover:text-white transition-colors duration-300">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-secondary text-lg mb-1 group-hover:text-brand transition-colors">
                          {agent.name}
                        </h4>
                        <p className="text-text-muted text-sm">{agent.desc}</p>
                      </div>
                    </div>

                    {example && (
                      <div className="mt-auto pt-4 border-t border-gray-100">
                        <p className="text-sm text-text-muted italic leading-relaxed">
                          {example}
                        </p>
                      </div>
                    )}
                  </div>
                </FadeInUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Risultati attesi ── */}
      <section className="py-20 bg-bg-light">
        <div className="container mx-auto px-4 md:px-6">
          <FadeInUp className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary">
              Risultati attesi
            </h2>
            <p className="text-lg text-text-muted mt-4 max-w-xl mx-auto">
              Ecco cosa puoi aspettarti dopo l'attivazione dei tuoi agenti AI.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {sectorInfo.results.map((result, index) => {
              const RIcon = resultIcons[index % resultIcons.length];
              return (
                <FadeInUp key={index} delay={index * 0.15}>
                  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center flex flex-col items-center">
                    <div className="w-12 h-12 bg-brand/10 text-brand rounded-full flex items-center justify-center mb-4">
                      <RIcon size={24} />
                    </div>
                    <div className="text-4xl md:text-5xl font-heading font-extrabold text-brand mb-2">
                      {result.value}
                    </div>
                    <p className="text-text-muted font-medium">{result.label}</p>
                  </div>
                </FadeInUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. CTA ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-4">
              Pronto a trasformare il tuo business?
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

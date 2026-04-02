import Link from "next/link";
import { Logo } from "./ui/Logo";
import { Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-bg-light border-t border-gray-200 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-gray-200 pb-8 mb-8">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-text-muted">
              Agenti AI per il tuo business — Italia
            </p>
          </div>
          
          <div className="flex flex-col gap-3">
            <h4 className="font-heading font-semibold text-secondary mb-1">Contatti</h4>
            <a href="mailto:info@scautomation-ai.it" className="flex items-center gap-2 text-text-muted hover:text-brand transition-colors">
              <Mail size={18} />
              <span>info@scautomation-ai.it</span>
            </a>
            <a href="tel:+393274473758" className="flex items-center gap-2 text-text-muted hover:text-brand transition-colors">
              <Phone size={18} />
              <span>+39 327 447 3758</span>
            </a>
            <a href="tel:+393423774981" className="flex items-center gap-2 text-text-muted hover:text-brand transition-colors">
              <Phone size={18} />
              <span>+39 342 377 4981</span>
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-text-muted">
          <p>© {new Date().getFullYear()} SC Automation AI. Tutti i diritti riservati.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-brand transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-brand transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./ui/Logo";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Agenti AI", href: isHome ? "#agenti" : "/#agenti" },
    { name: "Catalogo", href: "/agenti" },
    { name: "Come Funziona", href: isHome ? "#processo" : "/#processo" },
    { name: "Risultati", href: isHome ? "#risultati" : "/#risultati" },
    { name: "FAQ", href: isHome ? "#faq" : "/#faq" },
    { name: "Chi Siamo", href: "/chi-siamo" },
    { name: "Blog", href: "/blog" },
  ];

  const ctaHref = isHome ? "#contatti" : "/#contatti";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-text-main hover:text-brand font-medium transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href={ctaHref}
            className="bg-brand hover:bg-teal-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md hover:shadow-lg"
          >
            Audit Gratuito
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-secondary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-100 py-4 px-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-text-main hover:text-brand font-medium py-2 px-4 rounded-lg hover:bg-bg-light transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href={ctaHref}
            className="mt-2 bg-brand text-white px-6 py-3 rounded-full font-medium text-center shadow-md w-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            Audit Gratuito
          </a>
        </div>
      )}
    </header>
  );
}

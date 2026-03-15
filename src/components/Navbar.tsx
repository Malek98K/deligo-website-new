"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from "@/i18n";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.estimate, href: "/estimate" },
    { name: t.nav.drivers, href: "/drivers" },
    { name: t.nav.app, href: "/app-download" },
    { name: t.nav.company, href: "/company" },
    { name: t.nav.security, href: "/security" },
    { name: t.nav.compliance, href: "/compliance" },
    { name: t.nav.faq, href: "/faq" },
    { name: t.nav.contact, href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-soft py-4 border-b border-surface-200/50"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 overflow-visible flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-3xl font-pacifico text-brand">
            Déligo
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-brand"
                  : "text-surface-800 hover:text-brand"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <LanguageSwitcher />
          <button className="text-sm font-semibold text-surface-800 hover:text-brand transition-colors">
            {t.nav.login}
          </button>
          <Link
            href="/app-download"
            className="bg-brand hover:bg-brand-dark text-white text-sm font-medium px-5 py-2.5 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
          >
            {t.nav.downloadApp}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <button
            className="text-surface-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-soft border-b border-surface-200 lg:hidden">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-base font-medium text-surface-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <hr className="my-2 border-surface-200" />
            <button className="text-left font-medium text-surface-800">
              {t.nav.login}
            </button>
            <Link
              href="/app-download"
              className="bg-brand text-center text-white font-medium px-5 py-3 rounded-full shadow-md"
            >
              {t.nav.downloadApp}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

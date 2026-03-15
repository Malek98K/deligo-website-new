"use client";

import Link from "next/link";
import { ShieldCheck, Lock, FileText, Code } from "lucide-react";
import { useTranslation } from "@/i18n";

export function Footer() {
  const { t } = useTranslation();
  
  const footerSections = [
    {
      title: t.footer.company,
      links: [
        { name: t.nav.company, href: "/company" },
        { name: t.nav.drivers, href: "/drivers" },
      ],
    },
    {
      title: t.footer.product,
      links: [
        { name: t.nav.estimate, href: "/estimate" },
        { name: t.nav.downloadApp, href: "/app-download" },
        { name: t.nav.faq, href: "/faq" },
      ],
    },
    {
      title: t.footer.legal,
      links: [
        { name: t.nav.security, href: "/security" },
        { name: t.nav.compliance, href: "/compliance" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
      ],
    },
  ];

  return (
    <footer className="bg-surface-50 border-t border-surface-200 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 inline-block">
              <span className="text-3xl font-pacifico text-surface-900 hover:text-brand transition-colors">
                Déligo
              </span>
            </Link>
            <p className="text-surface-800/80 mb-6 max-w-sm">
              {t.footer.desc}
            </p>
            <div className="flex gap-4 mb-8">
              <div className="flex items-center gap-2 text-xs font-semibold text-surface-800 bg-surface-200/50 px-3 py-1.5 rounded-md border border-surface-200 cursor-help" title="GDPR & INPDP Aligned">
                <ShieldCheck size={14} className="text-brand" /> GDPR & INPDP
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-surface-800 bg-surface-200/50 px-3 py-1.5 rounded-md border border-surface-200 cursor-help" title="ISO 27001 & NIST Framework">
                <Lock size={14} className="text-brand" /> ISO27001
              </div>
            </div>
          </div>
          
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-surface-900 mb-6">{section.title}</h4>
              <ul className="flex flex-col gap-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-surface-800/70 hover:text-brand transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-surface-200 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-surface-800/60">
            © {new Date().getFullYear()} {t.footer.rights}
          </p>
          <div className="flex gap-4 text-xs text-surface-800/50 flex-wrap justify-center">
            <span>{t.footer.ancs}</span>
            <span>•</span>
            <span>{t.footer.secInfra}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

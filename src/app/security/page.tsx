"use client";


import { ShieldCheck, Server, Lock, CheckCircle, FileText } from "lucide-react";
import { useTranslation } from "@/i18n";

export default function Security() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-6 py-24 pb-48">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-brand font-bold tracking-wider uppercase text-sm mb-4 block">{t.security.tag}</span>
        <h1 className="text-5xl font-bold tracking-tight text-surface-900 mb-6 leading-tight">
          {t.security.title}
        </h1>
        <p className="text-lg text-surface-800/80">
          {t.security.desc}
        </p>
      </div>

      {/* Badges Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
        {[
          { icon: ShieldCheck, title: "GDPR Aligned", desc: "Data minimization and right to be forgotten." },
          { icon: Lock, title: "INPDP Tunisia", desc: "Registered and audited by local authorities." },
          { icon: Server, title: "ISO 27001", desc: "Information security management systems." },
          { icon: FileText, title: "NIST Framework", desc: "Cybersecurity risk management." }
        ].map((item, i) => (
          <div key={i} className="bg-surface-50 border border-surface-200 rounded-3xl p-8 hover:shadow-soft transition-all">
            <item.icon size={36} className="text-brand mb-6" />
            <h3 className="text-xl font-bold mb-2 text-surface-900">{item.title}</h3>
            <p className="text-surface-800/70 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Main Architecture */}
      <div className="bg-surface-900 text-white rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-surface-800 to-transparent opacity-50"></div>
        <div className="relative z-10 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-white">{t.security.howProtect}</h2>
            <ul className="space-y-6">
              {[
                { title: t.security.list1Title, desc: t.security.list1Desc },
                { title: t.security.list2Title, desc: t.security.list2Desc },
                { title: t.security.list3Title, desc: t.security.list3Desc },
                { title: t.security.list4Title, desc: t.security.list4Desc }
              ].map((item, i) => (
                <li key={i}>
                  <div className="flex items-start gap-4">
                    <CheckCircle size={24} className="text-brand flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-surface-200/70 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-sm aspect-square bg-surface-800 border border-surface-700 rounded-full flex items-center justify-center relative p-8">
               <div className="absolute inset-4 border border-brand/30 rounded-full animate-spin-slow"></div>
               <div className="absolute inset-10 border border-brand-dark/20 rounded-full animate-spin-reverse-slow"></div>
               <div className="bg-surface-900 border border-brand rounded-full w-32 h-32 flex items-center justify-center shadow-[0_0_40px_rgba(34,197,94,0.3)] z-10 text-brand">
                 <ShieldCheck size={48} />
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

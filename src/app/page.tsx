"use client";

import Link from "next/link";
import { ArrowRight, Box, ShieldCheck, MapPin, Truck, CheckCircle2, Star, Lock, FileText } from "lucide-react";
import { useTranslation } from "@/i18n";
import { Testimonials } from "@/components/Testimonials";
import { PartnersSection } from "@/components/PartnersSection";
import { WaveText } from "@/components/ui/wave-text";

export default function Home() {
  const { t, locale } = useTranslation();

  // Helper component to conditionally render WaveText or plain text based on locale
  const ConditionalWave = ({ text, className = "" }: { text: string, className?: string }) => {
    if (locale === "en") {
      return <WaveText text={text} className={className} />;
    }
    return <span className={className}>{text}</span>;
  };

  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 lg:pt-20">
        <div className="absolute top-0 right-0 -z-10 bg-brand-light/30 w-96 h-96 rounded-full blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/10 text-brand text-sm font-semibold mb-6">
                  <ShieldCheck size={16} /> <ConditionalWave text={t.home.heroTag} />
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-surface-900 leading-[1.1] mb-6">
                  <ConditionalWave text={t.home.heroTitle1} /><br />
                  <ConditionalWave text={t.home.heroTitle2} /><span className="text-brand font-pacifico font-normal">Déligo</span>
                </h1>
                <div className="text-lg text-surface-800/80 mb-10 leading-relaxed max-w-2xl">
                  <ConditionalWave text={t.home.heroDesc} className="text-left inline" />
                </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 border border-surface-200 bg-white p-3 rounded-2xl shadow-soft">
                <div className="flex flex-1 items-center gap-3 px-4 py-2 bg-surface-50 rounded-xl w-full">
                  <MapPin className="text-brand" size={20} />
                  <input type="text" placeholder={t.home.pickup} className="bg-transparent border-none outline-none w-full text-surface-900 placeholder:text-surface-800/40" />
                </div>
                <div className="flex flex-1 items-center gap-3 px-4 py-2 bg-surface-50 rounded-xl w-full">
                  <MapPin className="text-brand-dark" size={20} />
                  <input type="text" placeholder={t.home.dropoff} className="bg-transparent border-none outline-none w-full text-surface-900 placeholder:text-surface-800/40" />
                </div>
                <Link href="/estimate" className="bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-xl transition-colors w-full sm:w-auto text-center whitespace-nowrap">
                    <ConditionalWave text={t.home.estimateBtn} />
                  </Link>
                </div>

                <div className="flex items-center gap-6 mt-10">
                  <Link href="/app-download" className="flex items-center gap-2 text-surface-900 font-semibold hover:text-brand transition-colors">
                    <Truck size={20} /> <ConditionalWave text={t.home.downloadBtn} />
                  </Link>
                  <Link href="/drivers" className="flex items-center gap-2 text-surface-900 font-semibold hover:text-brand transition-colors">
                    <Box size={20} /> <ConditionalWave text={t.home.becomeDriver} />
                </Link>
              </div>
            </div>

            <div className="lg:w-1/2 relative flex justify-center">
              {/* Abstract App/Truck UI Display Card */}
              <div className="relative w-full max-w-md bg-white border border-surface-200 shadow-glass rounded-3xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                 <div className="w-full h-64 bg-surface-50 rounded-2xl border border-surface-200 mb-6 flex flex-col items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-map-pattern opacity-10"></div>
                    <Truck size={64} className="text-brand mb-4 drop-shadow-md" />
                    <div className="px-4 py-2 bg-white rounded-full shadow-sm border border-brand/20 text-brand font-semibold text-sm">
                      {t.home.driverArriving}
                    </div>
                 </div>
                 <div className="space-y-4">
                    <div className="h-4 bg-surface-100 rounded-full w-3/4"></div>
                    <div className="h-4 bg-surface-100 rounded-full w-1/2"></div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">{t.home.howItWorksTitle}</h2>
          <p className="text-surface-800/70">{t.home.howItWorksDesc}</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: '01', title: t.home.step1Title, desc: t.home.step1Desc },
            { step: '02', title: t.home.step2Title, desc: t.home.step2Desc },
            { step: '03', title: t.home.step3Title, desc: t.home.step3Desc }
          ].map((item, i) => (
            <div key={i} className="bg-surface-50 border border-surface-100 rounded-3xl p-8 hover:shadow-soft transition-shadow relative overflow-hidden">
              <span className="absolute top-4 right-6 text-6xl font-black text-surface-200/50">{item.step}</span>
              <h3 className="text-xl font-bold mb-3 mt-8">{item.title}</h3>
              <p className="text-surface-800/70 relative z-10">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPLIANCE & TRUST */}
      <section className="bg-surface-900 border-y border-surface-800 text-white py-20">
        <div className="container mx-auto px-6 text-center">
           <h2 className="text-3xl font-bold mb-10">{t.home.secTitle}</h2>
           <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-70">
              <div className="flex flex-col items-center gap-2"><ShieldCheck size={32} /> <span className="text-sm font-semibold tracking-wider">GDPR</span></div>
              <div className="flex flex-col items-center gap-2"><CheckCircle2 size={32} /> <span className="text-sm font-semibold tracking-wider">INPDP TUNISIA</span></div>
              <div className="flex flex-col items-center gap-2"><Lock size={32} /> <span className="text-sm font-semibold tracking-wider">ISO 27001</span></div>
              <div className="flex flex-col items-center gap-2"><FileText size={32} /> <span className="text-sm font-semibold tracking-wider">NIST FRAMEWORK</span></div>
           </div>
           <div className="mt-12">
            <Link href="/security" className="text-brand hover:text-brand-light font-medium inline-flex items-center gap-2">
              {t.home.secLink} <ArrowRight size={16} />
            </Link>
           </div>
        </div>
      </section>
      {/* TESTIMONIALS SECTION */}
      <Testimonials />

      {/* PARTNERS SECTION */}
      <PartnersSection />

      {/* CTA SECTION */}
      <section className="container mx-auto px-6">
        <div className="bg-brand rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-light to-brand-dark opacity-50"></div>
           <div className="relative z-10 max-w-2xl mx-auto">
             <h2 className="text-4xl font-bold mb-6">{t.home.ctaTitle}</h2>
             <p className="text-lg text-white/90 mb-8">{t.home.ctaDesc}</p>
             <Link href="/app-download" className="bg-white text-brand font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105 active:scale-95 inline-block">
               {t.home.ctaBtn}
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import Link from "next/link";
import { DollarSign, Clock, ShieldCheck, CheckCircle } from "lucide-react";
import { useTranslation } from "@/i18n";

export default function Drivers() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-6 py-24">
      {/* Hero */}
      <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <span className="text-brand font-bold tracking-wider uppercase text-sm mb-4 block">{t.drivers.tag}</span>
          <h1 className="text-5xl font-bold tracking-tight text-surface-900 mb-6 leading-tight">
            {t.drivers.title}
          </h1>
          <p className="text-lg text-surface-800/80 mb-8">
            {t.drivers.desc}
          </p>
          <button className="bg-surface-900 text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:bg-surface-800 transition-all">
            {t.drivers.applyBtn}
          </button>
        </div>
        <div className="bg-surface-100 rounded-[3rem] p-12 relative flex items-center justify-center min-h-[400px]">
          <div className="absolute inset-0 bg-map-pattern opacity-10 rounded-[3rem]"></div>
          {/* Card Mockup */}
          <div className="bg-white rounded-2xl shadow-glass border border-surface-200 p-6 max-w-sm w-full relative z-10 translate-y-8 hover:-translate-y-2 transition-transform duration-500">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-medium text-surface-800/60">{t.drivers.earningsBox}</span>
              <span className="bg-brand/10 text-brand text-xs font-bold px-2 py-1 rounded-md text-green-700">+12%</span>
            </div>
            <div className="text-3xl font-bold text-surface-900">1,240 TND</div>
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="grid md:grid-cols-3 gap-8 mb-24">
        <div className="bg-white border border-surface-200 rounded-3xl p-8 shadow-sm">
          <DollarSign size={32} className="text-brand mb-6" />
          <h3 className="text-xl font-bold mb-3 text-surface-900">{t.drivers.benefitsTopRank}</h3>
          <p className="text-surface-800/70">{t.drivers.benefitsTopRankDesc}</p>
        </div>
        <div className="bg-white border border-surface-200 rounded-3xl p-8 shadow-sm">
          <Clock size={32} className="text-brand mb-6" />
          <h3 className="text-xl font-bold mb-3 text-surface-900">{t.drivers.benefitsFlex}</h3>
          <p className="text-surface-800/70">{t.drivers.benefitsFlexDesc}</p>
        </div>
        <div className="bg-white border border-surface-200 rounded-3xl p-8 shadow-sm">
          <ShieldCheck size={32} className="text-brand mb-6" />
          <h3 className="text-xl font-bold mb-3 text-surface-900">{t.drivers.benefitsSecure}</h3>
          <p className="text-surface-800/70">{t.drivers.benefitsSecureDesc}</p>
        </div>
      </div>

      {/* Requirements */}
      <div className="max-w-3xl mx-auto bg-surface-50 rounded-[2.5rem] p-10 md:p-16 border border-surface-200">
        <h2 className="text-3xl font-bold text-center mb-10">{t.drivers.reqTitle}</h2>
        <ul className="space-y-4">
          {t.drivers.reqListing.map((req, i) => (
            <li key={i} className="flex items-center gap-4 text-surface-800 text-lg bg-white border border-surface-200 p-4 rounded-xl">
              <CheckCircle size={24} className="text-brand-dark flex-shrink-0" />
              <span>{req}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

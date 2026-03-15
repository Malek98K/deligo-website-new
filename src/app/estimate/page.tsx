"use client";

import Link from "next/link";
import { Truck, Users, Layers, Calculator } from "lucide-react";
import { useTranslation } from "@/i18n";

export default function PriceEstimation() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-6 py-24 pb-48">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-surface-900 mb-6">
            {t.estimate.title}
          </h1>
          <p className="text-lg text-surface-800/70">
            {t.estimate.desc}
          </p>
        </div>

        <div className="bg-white border border-surface-200 shadow-glass rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
          
          <div className="flex flex-col gap-10 relative z-10">
            {/* Route */}
            <div>
              <label className="text-sm font-semibold text-surface-900 mb-3 block">{t.estimate.routeParams}</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder={t.estimate.distanceStr}
                  className="bg-surface-50 border border-surface-200 rounded-xl px-4 py-3 outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all w-full"
                />
                <input
                  type="text"
                  placeholder={t.estimate.timeStr}
                  className="bg-surface-50 border border-surface-200 rounded-xl px-4 py-3 outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all w-full"
                />
              </div>
            </div>

            {/* Vehicle Type */}
            <div>
              <label className="text-sm font-semibold text-surface-900 mb-3 block">{t.estimate.vehicleSize}</label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[t.estimate.van, t.estimate.smallTruck, t.estimate.mediumTruck, t.estimate.largeTruck].map((type, i) => (
                  <button key={i} className="flex flex-col items-center justify-center p-4 border border-surface-200 rounded-2xl hover:border-brand hover:bg-brand/5 transition-colors focus:ring-1 focus:ring-brand outline-none">
                    <Truck size={24} className="mb-2 text-surface-800" />
                    <span className="text-sm font-medium text-surface-900">{type}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Add-ons */}
            <div>
              <label className="text-sm font-semibold text-surface-900 mb-3 block">{t.estimate.addons}</label>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center gap-3 bg-surface-50 border border-surface-200 rounded-xl px-4 py-3 cursor-pointer select-none hover:border-brand transition-colors">
                  <input type="checkbox" className="w-5 h-5 rounded border-surface-200 text-brand focus:ring-brand" />
                  <span className="flex items-center gap-2 text-sm font-medium"><Users size={16} /> {t.estimate.helpers}</span>
                </label>
                <label className="flex items-center gap-3 bg-surface-50 border border-surface-200 rounded-xl px-4 py-3 cursor-pointer select-none hover:border-brand transition-colors">
                  <input type="checkbox" className="w-5 h-5 rounded border-surface-200 text-brand focus:ring-brand" />
                  <span className="flex items-center gap-2 text-sm font-medium"><Layers size={16} /> {t.estimate.stairs}</span>
                </label>
              </div>
            </div>

            <hr className="border-surface-200" />

            {/* Total */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-surface-50 rounded-2xl p-6 border border-surface-200 hidden-estimate">
              <div>
                <span className="text-sm font-medium text-surface-800/60 block mb-1">{t.estimate.totalStr}</span>
                <span className="text-4xl font-bold text-surface-900 flex items-center gap-2">
                  <Calculator size={28} className="text-brand text-xl" /> ~ TND <span className="opacity-70 text-2xl">|</span> $$
                </span>
                <p className="text-xs text-surface-800/50 mt-2">{t.estimate.pricesVary}</p>
              </div>
              <Link href="/app-download" className="bg-brand text-white font-bold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl hover:bg-brand-dark transition-all whitespace-nowrap w-full md:w-auto text-center">
                {t.estimate.openAppBtn}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";

import { useTranslation } from "@/i18n";
import { AppStoreButton } from "@/components/ui/app-store-button";
import { PlayStoreButton } from "@/components/ui/play-store-button";

export default function AppDownload() {
  const { t } = useTranslation();

  return (
    <div className="bg-surface-50 min-h-screen pt-24 pb-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand/10 text-brand text-sm font-semibold mb-6">
              {t.download.tag}
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-surface-900 leading-[1.1] mb-6">
              {t.download.title}
            </h1>
            <p className="text-lg text-surface-800/70 mb-10 leading-relaxed">
              {t.download.desc}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="#">
                <AppStoreButton className="w-full sm:w-auto h-14" />
              </Link>
              <Link href="#">
                <PlayStoreButton className="w-full sm:w-auto h-14" />
              </Link>
            </div>

            <ul className="grid grid-cols-2 gap-y-4 text-surface-800 font-medium">
              <li className="flex items-center gap-2 text-sm"><span className="w-2 h-2 rounded-full bg-brand"></span> {t.download.feat1}</li>
              <li className="flex items-center gap-2 text-sm"><span className="w-2 h-2 rounded-full bg-brand"></span> {t.download.feat2}</li>
              <li className="flex items-center gap-2 text-sm"><span className="w-2 h-2 rounded-full bg-brand"></span> {t.download.feat3}</li>
              <li className="flex items-center gap-2 text-sm"><span className="w-2 h-2 rounded-full bg-brand"></span> {t.download.feat4}</li>
            </ul>
          </div>

          {/* Phone Mockup Illustration */}
          <div className="relative flex justify-center lg:justify-end mt-16 lg:mt-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand/10 rounded-full blur-3xl"></div>
            
            <div className="relative w-[300px] h-[600px] bg-surface-900 rounded-[3rem] border-8 border-surface-800 shadow-2xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] transform rotate-[-5deg] hover:rotate-0 transition-transform duration-700">
               {/* App screen mockup */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-surface-800 rounded-b-3xl z-20"></div>
               <div className="bg-surface-50 w-full h-full p-4 pt-12 flex flex-col gap-4">
                  {/* Map mockup */}
                  <div className="bg-surface-200 w-full h-1/2 rounded-2xl relative overflow-hidden">
                     <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-brand rounded-full border-4 border-white shadow-md z-10 -translate-x-1/2 -translate-y-1/2"></div>
                     <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-brand/20 rounded-full -translate-x-1/2 -translate-y-1/2 animate-ping"></div>
                  </div>
                  {/* UI Elements */}
                  <div className="bg-white p-4 rounded-2xl shadow-sm">
                     <div className="h-4 bg-surface-200 rounded w-1/3 mb-4"></div>
                     <div className="h-10 bg-surface-100 rounded-xl mb-2"></div>
                     <div className="h-10 bg-surface-100 rounded-xl"></div>
                  </div>
                  <div className="bg-brand p-4 rounded-2xl text-white font-bold text-center mt-auto">
                     {t.download.bookTrans}
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

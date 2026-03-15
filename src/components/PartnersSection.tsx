'use client';

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { Truck, Package, Box, ShieldCheck, Zap, Server } from "lucide-react";
import { useTranslation } from "@/i18n";

export function PartnersSection() {
  const { t } = useTranslation();

  return (
    <section className="bg-transparent py-20 relative overflow-hidden border-t border-brand/10">
      <div className="container z-10 mx-auto px-4 md:px-6 mb-12">
        <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-4">
              {t.partners.title}
            </h2>
            <p className="text-gray-600">
               {t.partners.desc}
            </p>
        </div>
      </div>

      {/* Set an explicit height container with mask to blend out the edges */}
      <div className="mx-auto w-full max-w-7xl px-4 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <InfiniteSlider gap={40} duration={30} durationOnHover={50} className="w-full">
          {/* Logo 1 */}
          <div className="flex items-center justify-center gap-3 text-gray-400 font-bold text-2xl h-[80px] w-[200px] grayscale opacity-60 hover:opacity-100 hover:grayscale-0 hover:text-brand transition-all">
            <Truck size={36} /> ExpressLine
          </div>
          {/* Logo 2 */}
          <div className="flex items-center justify-center gap-3 text-gray-400 font-bold text-2xl h-[80px] w-[200px] grayscale opacity-60 hover:opacity-100 hover:grayscale-0 hover:text-brand transition-all">
            <Package size={36} /> SwiftLogix
          </div>
          {/* Logo 3 */}
          <div className="flex items-center justify-center gap-3 text-gray-400 font-bold text-2xl h-[80px] w-[200px] grayscale opacity-60 hover:opacity-100 hover:grayscale-0 hover:text-brand transition-all">
            <Box size={36} /> PackMasters
          </div>
          {/* Logo 4 */}
          <div className="flex items-center justify-center gap-3 text-gray-400 font-bold text-2xl h-[80px] w-[200px] grayscale opacity-60 hover:opacity-100 hover:grayscale-0 hover:text-brand transition-all">
            <ShieldCheck size={36} /> SecureFreight
          </div>
          {/* Logo 5 */}
          <div className="flex items-center justify-center gap-3 text-gray-400 font-bold text-2xl h-[80px] w-[200px] grayscale opacity-60 hover:opacity-100 hover:grayscale-0 hover:text-brand transition-all">
            <Zap size={36} /> BoltDelivery
          </div>
          {/* Logo 6 */}
          <div className="flex items-center justify-center gap-3 text-gray-400 font-bold text-2xl h-[80px] w-[200px] grayscale opacity-60 hover:opacity-100 hover:grayscale-0 hover:text-brand transition-all">
            <Server size={36} /> DataStoreMovers
          </div>
        </InfiniteSlider>
      </div>
    </section>
  );
}

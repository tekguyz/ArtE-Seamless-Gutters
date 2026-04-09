"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { BRAND } from "@/constants/brand";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="bg-[var(--color-brand-blue)] text-white min-h-[85vh] flex items-center pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column (Copy & Action) */}
          <div className="flex flex-col">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-6 [text-shadow:4px_4px_0_var(--color-brand-black)]">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl font-medium max-w-xl mb-8">
              {t.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href={`tel:${BRAND.contact.phone}`} 
                className="bg-[var(--color-brand-black)] text-white text-lg font-black px-8 py-4 uppercase border-2 border-[var(--color-brand-black)] hover:bg-transparent hover:text-[var(--color-brand-black)] transition-all text-center"
              >
                {t.hero.ctaPrimary}
              </a>
              <a 
                href="#contact" 
                className="bg-transparent text-white text-lg font-black px-8 py-4 uppercase border-2 border-white hover:bg-white hover:text-[var(--color-brand-blue)] transition-all text-center"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>

            {/* Trust Row */}
            <div className="flex flex-wrap gap-6">
              {t.trustBadges.map((badge, idx) => (
                <div key={idx} className="flex items-center gap-2 font-bold uppercase tracking-wide text-sm md:text-base">
                  <CheckCircle className="w-5 h-5 text-[var(--color-accent-cyan)]" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Visuals) */}
          <div className="bg-[var(--color-brand-black)] p-4 shadow-2xl relative overflow-hidden min-h-[400px]">
            <Image 
              src="/hero-image.jpg" 
              alt="Seamless Gutter Installation in Pompano Beach" 
              fill 
              className="object-cover border-4 border-[var(--color-brand-black)]" 
              priority 
              unoptimized
            />
          </div>

        </div>
      </div>
    </section>
  );
}

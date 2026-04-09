"use client";

import { Ruler, Wrench, CloudRain, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const ICONS = [Ruler, Wrench, CloudRain, ShieldCheck];

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="bg-[var(--color-brand-blue)] border-y-8 border-[var(--color-brand-black)] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-7xl font-black uppercase text-[var(--color-brand-black)] mb-12 tracking-tighter">
          {t.services.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.services.items.map((service, index) => {
            const Icon = ICONS[index % ICONS.length];
            return (
              <div key={index} className="bg-[var(--color-brand-black)] text-white p-8 border-l-4 border-[var(--color-accent-cyan)] rounded-none">
                <Icon className="w-12 h-12 text-[var(--color-accent-cyan)] mb-6" />
                <h3 className="text-2xl font-black uppercase mb-4">{service.title}</h3>
                <p className="text-lg text-gray-300 font-medium">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

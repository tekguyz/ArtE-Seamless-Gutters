"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function AuthoritySection() {
  const { t } = useLanguage();

  return (
    <section id="authority" className="bg-[var(--color-brand-black)] text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none text-[var(--color-white)]">
              {t.authority.title}
            </h2>
          </div>
          <div className="flex-1 space-y-8">
            <div className="inline-block bg-[var(--color-brand-blue)] text-white px-4 py-2 uppercase font-black tracking-widest text-sm rounded-none">
              {t.authority.badge}
            </div>
            <p className="text-xl md:text-2xl font-medium leading-relaxed">
              {t.authority.p1}
            </p>
            <p className="text-xl md:text-2xl font-medium leading-relaxed">
              {t.authority.p2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

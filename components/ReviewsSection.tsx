"use client";

import { Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ReviewsSection() {
  const { t } = useLanguage();

  return (
    <section id="reviews" className="bg-[var(--color-white)] text-[var(--color-brand-black)] py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-16 text-center">
          {t.reviews.title}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.reviews.items.map((review, index) => (
            <div key={index} className="border-4 border-[var(--color-brand-black)] p-8 bg-white rounded-none flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-[var(--color-brand-blue)] text-[var(--color-brand-blue)]" />
                  ))}
                </div>
                <p className="text-xl font-medium italic mb-8">&quot;{review.text}&quot;</p>
              </div>
              <p className="text-lg font-black uppercase tracking-wide">- {review.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

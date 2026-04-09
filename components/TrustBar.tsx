"use client";

import { Award, Zap, ShieldCheck } from "lucide-react";

export default function TrustBar() {
  const metrics = [
    {
      icon: Award,
      title: "15+ Years Experience",
      subtitle: "Master Gutter Craftsmanship",
    },
    {
      icon: Zap,
      title: "Same-Day Estimates",
      subtitle: "Fast, Reliable Local Service",
    },
    {
      icon: ShieldCheck,
      title: "Lifetime Warranty",
      subtitle: "On All Seamless Installations",
    },
  ];

  return (
    <section className="bg-[var(--color-brand-black)] border-y-4 border-[var(--color-brand-blue)] py-10 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center space-y-3 group cursor-default transition-transform duration-300 hover:scale-105"
            >
              <div className="p-3 bg-gray-900/50 rounded-none border border-gray-800 group-hover:border-[var(--color-accent-cyan)] transition-colors">
                <metric.icon 
                  size={32} 
                  className="text-[var(--color-accent-cyan)]" 
                  strokeWidth={1.5}
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-white font-bold text-lg uppercase tracking-wider">
                  {metric.title}
                </h3>
                <p className="text-gray-400 text-sm font-medium">
                  {metric.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

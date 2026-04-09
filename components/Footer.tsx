"use client";

import { Droplet, Facebook, Instagram } from "lucide-react";
import { BRAND } from "@/constants/brand";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const navLinks = [
    { name: t.nav.services, href: '#services' },
    { name: t.nav.whySeamless, href: '#authority' },
    { name: t.nav.reviews, href: '#reviews' },
    { name: t.nav.contact, href: '#contact' }
  ];

  return (
    <footer className="bg-[var(--color-brand-black)] text-white border-t-8 border-[var(--color-brand-blue)] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Col 1 */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-2">
              <Droplet size={40} className="text-[var(--color-accent-cyan)]" fill="currentColor" strokeWidth={1.5} />
              <div className="flex flex-col leading-none">
                <span className="text-white font-black text-3xl tracking-tighter">ArtE</span>
                <span className="text-[var(--color-brand-blue)] text-[10px] uppercase font-black tracking-widest mt-1">SEAMLESS GUTTERS</span>
              </div>
            </div>
            <p className="text-gray-400 font-medium">{t.hero.subtitle}</p>
            <span className="bg-[var(--color-brand-blue)] text-white text-xs px-3 py-1 uppercase tracking-widest font-bold mt-2">
              {t.trustBadges[2]}
            </span>
          </div>

          {/* Col 2 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-black uppercase tracking-widest text-[var(--color-accent-cyan)]">{t.footer.quickLinks}</h3>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-gray-300 hover:text-white font-bold uppercase tracking-wider text-sm p-2 -ml-2 inline-block w-fit min-h-[48px] flex items-center">
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-black uppercase tracking-widest text-[var(--color-accent-cyan)]">{t.footer.contactUs}</h3>
            <a href={`tel:${BRAND.contact.phone}`} className="text-3xl font-black text-[var(--color-accent-cyan)] hover:text-white transition-colors p-2 -ml-2 inline-block w-fit min-h-[48px] flex items-center">
              {BRAND.contact.displayPhone}
            </a>
            <div className="flex gap-4 mt-2">
              <a href={BRAND.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-[var(--color-accent-cyan)] p-3 -ml-3 min-h-[48px] min-w-[48px] flex items-center justify-center">
                <Facebook size={28} />
              </a>
              <a href={BRAND.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-[var(--color-accent-cyan)] p-3 min-h-[48px] min-w-[48px] flex items-center justify-center">
                <Instagram size={28} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 font-medium text-sm">
          &copy; {new Date().getFullYear()} {BRAND.name}. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}

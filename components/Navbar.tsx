"use client";

import { useState } from "react";
import { Droplet, Phone, Facebook, Instagram, Menu, X } from "lucide-react";
import { BRAND } from "@/constants/brand";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const navLinks = [
    { name: t.nav.services, href: '#services' },
    { name: t.nav.whySeamless, href: '#authority' },
    { name: t.nav.reviews, href: '#reviews' },
    { name: t.nav.contact, href: '#contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[var(--color-brand-black)] text-white border-b-4 border-[var(--color-accent-cyan)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Area */}
          <div className="flex items-center gap-2">
            <Droplet className="text-[var(--color-accent-cyan)] w-8 h-8" />
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-black tracking-tight">{BRAND.shortName}</span>
              <span className="text-xs uppercase tracking-widest text-gray-400">{t.nav.seamlessGutters}</span>
            </div>
          </div>

          {/* Middle - Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-white font-bold uppercase tracking-widest text-sm hover:text-[var(--color-accent-cyan)] transition-colors p-3 min-h-[48px] flex items-center">
                {link.name}
              </a>
            ))}
          </div>

          {/* Right - Desktop Social & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-2 mr-2">
              <a href={BRAND.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[var(--color-accent-cyan)] transition-colors p-3 min-h-[48px] min-w-[48px] flex items-center justify-center">
                <Facebook className="w-6 h-6" />
              </a>
              <a href={BRAND.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[var(--color-accent-cyan)] transition-colors p-3 min-h-[48px] min-w-[48px] flex items-center justify-center">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
            
            {/* Language Toggle */}
            <button 
              onClick={toggleLanguage}
              className="bg-[var(--color-brand-blue)] text-white text-xs px-3 py-1 uppercase tracking-widest font-bold hover:bg-[var(--color-accent-cyan)] hover:text-[var(--color-brand-black)] transition-colors min-h-[32px]"
            >
              {language === 'en' ? 'ES' : 'EN'}
            </button>

            <a href={`tel:${BRAND.contact.phone}`} className="flex items-center gap-2 bg-[var(--color-accent-cyan)] text-[var(--color-brand-black)] font-black px-6 py-3 hover:scale-105 transition-transform min-h-[48px]">
              <Phone className="w-5 h-5" />
              {BRAND.contact.displayPhone}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              aria-label="Toggle menu"
              className="text-white hover:text-[var(--color-accent-cyan)] p-3 min-h-[48px] min-w-[48px] flex items-center justify-center"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[var(--color-brand-black)] border-t border-gray-800 absolute w-full left-0 h-screen overflow-y-auto">
          <div className="px-4 pt-8 pb-32 space-y-8 flex flex-col items-center">
            <nav className="flex flex-col items-center gap-6 w-full">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-black text-white hover:text-[var(--color-accent-cyan)] p-4 w-full text-center min-h-[48px]"
                >
                  {link.name}
                </a>
              ))}
            </nav>
            
            <div className="w-full h-px bg-gray-800 my-4"></div>

            <div className="flex gap-8">
              <a href={BRAND.socials.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-[var(--color-accent-cyan)] p-3 min-h-[48px] min-w-[48px] flex items-center justify-center">
                <Facebook className="w-10 h-10" />
              </a>
              <a href={BRAND.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-[var(--color-accent-cyan)] p-3 min-h-[48px] min-w-[48px] flex items-center justify-center">
                <Instagram className="w-10 h-10" />
              </a>
            </div>

            {/* Mobile Language Toggle */}
            <button 
              onClick={() => {
                toggleLanguage();
                setIsOpen(false);
              }}
              className="bg-[var(--color-brand-blue)] text-white text-sm px-6 py-3 uppercase tracking-widest font-bold w-full"
            >
              {language === 'en' ? 'Ver en Español' : 'View in English'}
            </button>

            <a href={`tel:${BRAND.contact.phone}`} className="flex items-center justify-center gap-3 bg-[var(--color-accent-cyan)] text-[var(--color-brand-black)] font-black px-8 py-5 w-full text-xl mt-4 min-h-[64px]">
              <Phone className="w-7 h-7" />
              {BRAND.contact.displayPhone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

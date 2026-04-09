"use client";

import { useState, FormEvent } from "react";
import { CheckCircle, Phone, AlertTriangle, Mail } from "lucide-react";
import { BRAND } from "@/constants/brand";
import { useLanguage } from "@/context/LanguageContext";
import MapEmbed from "./MapEmbed";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const { language, t } = useLanguage();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    const formData = new FormData(e.currentTarget);
    formData.append("form-name", "arte-leads");

    try {
      const response = await fetch("/forms.html", {
        method: "POST",
        headers: { "X-Requested-With": "XMLHttpRequest" },
        body: formData,
      });

      if (response.ok) {
        setIsSuccess(true);
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section id="contact" className="bg-[var(--color-brand-black)] py-24 px-4">
        <div className="max-w-3xl mx-auto bg-[var(--color-brand-blue)] p-12 border-4 border-[var(--color-accent-cyan)] text-white text-center rounded-none">
          <CheckCircle className="w-20 h-20 text-[var(--color-accent-cyan)] mx-auto mb-6" />
          <h2 className="text-4xl font-black uppercase mb-4">{t.contact.success.title}</h2>
          <p className="text-xl font-medium mb-8">
            {t.contact.success.message}
          </p>
          <div className="bg-[var(--color-brand-black)] p-6 border-2 border-[var(--color-accent-cyan)]">
            <div className="flex items-center justify-center gap-3 text-[var(--color-accent-cyan)] mb-2">
              <AlertTriangle className="w-6 h-6" />
              <span className="font-black uppercase tracking-widest">{t.contact.success.emergencyTitle}</span>
            </div>
            <p className="text-lg mb-4">{t.contact.success.emergencyText}</p>
            <a 
              href={`tel:${BRAND.contact.phone}`} 
              className="text-3xl font-black text-[var(--color-accent-cyan)] hover:underline"
            >
              {BRAND.contact.displayPhone}
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-[var(--color-brand-black)] text-white py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none mb-8">
            {t.contact.title.split('Free Estimate')[0]}<span className="text-[var(--color-accent-cyan)]">{language === 'en' ? 'Free Estimate' : 'Presupuesto Gratis'}</span>{t.contact.title.split('Free Estimate')[1]}
          </h2>
          <p className="text-xl text-gray-400 max-w-lg">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Form */}
          <div className="bg-[#111] p-8 md:p-12 border-2 border-white/10">
            <form 
              name="arte-leads" 
              method="POST" 
              action="/forms.html" 
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="arte-leads" />
              <p className="hidden">
                <label>{t.contact.labels.botField} <input name="bot-field" /></label>
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm uppercase font-black tracking-widest text-gray-400">{t.contact.labels.fullName}</label>
                  <input 
                    required
                    name="fullName"
                    type="text" 
                    placeholder={t.contact.placeholders.fullName}
                    className="w-full bg-[#0a0a0a] border-2 border-white/20 px-4 py-3 text-white rounded-none focus:outline-none focus:border-[var(--color-accent-cyan)] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm uppercase font-black tracking-widest text-gray-400">{t.contact.labels.phone}</label>
                  <input 
                    required
                    name="phone"
                    type="tel" 
                    placeholder={t.contact.placeholders.phone}
                    className="w-full bg-[#0a0a0a] border-2 border-white/20 px-4 py-3 text-white rounded-none focus:outline-none focus:border-[var(--color-accent-cyan)] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm uppercase font-black tracking-widest text-gray-400">{t.contact.labels.email}</label>
                <input 
                  name="email"
                  type="email" 
                  placeholder={t.contact.placeholders.email}
                  className="w-full bg-[#0a0a0a] border-2 border-white/20 px-4 py-3 text-white rounded-none focus:outline-none focus:border-[var(--color-accent-cyan)] transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm uppercase font-black tracking-widest text-gray-400">{t.contact.labels.service}</label>
                <select 
                  name="service"
                  className="w-full bg-[#0a0a0a] border-2 border-white/20 px-4 py-3 text-white rounded-none focus:outline-none focus:border-[var(--color-accent-cyan)] transition-colors appearance-none"
                >
                  <option value="Installation">{t.contact.serviceOptions.installation}</option>
                  <option value="Repair">{t.contact.serviceOptions.repair}</option>
                  <option value="Cleaning">{t.contact.serviceOptions.cleaning}</option>
                  <option value="Leaf Guards">{t.contact.serviceOptions.leafGuards}</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm uppercase font-black tracking-widest text-gray-400">{t.contact.labels.message}</label>
                <textarea 
                  name="message"
                  rows={4}
                  placeholder={t.contact.placeholders.message}
                  className="w-full bg-[#0a0a0a] border-2 border-white/20 px-4 py-3 text-white rounded-none focus:outline-none focus:border-[var(--color-accent-cyan)] transition-colors resize-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[var(--color-accent-cyan)] text-[var(--color-brand-black)] font-black uppercase text-xl py-5 hover:scale-[1.02] transition-transform disabled:opacity-50 disabled:hover:scale-100"
              >
                {isSubmitting ? t.contact.labels.sending : t.contact.labels.submit}
              </button>

              {isError && (
                <p className="text-red-500 font-bold text-center">
                  {t.contact.error}
                </p>
              )}
            </form>
          </div>

          {/* Right Column: Map & Details */}
          <div className="flex flex-col h-full">
            <div className="w-full aspect-video border-4 border-[var(--color-brand-blue)] overflow-hidden">
              <MapEmbed />
            </div>

            <div className="bg-[#111] p-8 border-l-4 border-[var(--color-accent-cyan)] mt-6 flex-grow">
              <div className="space-y-8">
                <div>
                  <p className="text-sm uppercase tracking-widest text-gray-500 font-bold mb-2">{t.nav.callDispatch}</p>
                  <div className="flex items-center gap-4">
                    <Phone className="w-8 h-8 text-[var(--color-accent-cyan)]" />
                    <a href={`tel:${BRAND.contact.phone}`} className="text-3xl md:text-4xl font-black hover:text-[var(--color-accent-cyan)] transition-colors">
                      {BRAND.contact.displayPhone}
                    </a>
                  </div>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-widest text-gray-500 font-bold mb-2">Email</p>
                  <div className="flex items-center gap-4">
                    <Mail className="w-8 h-8 text-[var(--color-accent-cyan)]" />
                    <a href={`mailto:${BRAND.contact.email}`} className="text-xl font-bold hover:text-[var(--color-accent-cyan)] transition-colors">
                      {BRAND.contact.email}
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <p className="text-lg font-medium text-gray-300 italic">
                    {language === 'en' ? 'Serving Pompano Beach and all of Broward County.' : 'Sirviendo a Pompano Beach y todo el condado de Broward.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

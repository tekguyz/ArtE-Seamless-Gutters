"use client";

export default function MapEmbed() {
  return (
    <div className="border-4 border-[var(--color-brand-black)] h-[300px] w-full">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114471.09188130875!2d-80.27445405034325!3d26.286914576964403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91d55b603442b%3A0x952d969261364534!2sArtE%20Seamless%20Gutters!5e0!3m2!1sen!2sus!4v1775708684480!5m2!1sen!2sus" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} 
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

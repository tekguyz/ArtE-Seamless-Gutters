import type {Metadata} from 'next';
import './globals.css'; // Global styles
import { BRAND } from '@/constants/brand';
import { dictionary } from '@/constants/copy';
import { LanguageProvider } from '@/context/LanguageContext';

export const metadata: Metadata = {
  title: {
    default: `${BRAND.name} | Pompano Beach`,
    template: `%s | ${BRAND.name}`
  },
  description: "Custom seamless gutters cut on-site. Professional installation, cleaning, and repair in Broward County.",
  openGraph: {
    title: "ArtE Seamless Gutters | Pompano Beach",
    description: "Custom seamless gutters cut on-site. Professional installation, cleaning, and repair in Broward County.",
    url: "https://arteseamlessgutters.com",
    siteName: BRAND.name,
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1200,
        height: 630,
        alt: BRAND.name,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ArtE Seamless Gutters | Pompano Beach",
    description: "Custom seamless gutters cut on-site. Professional installation, cleaning, and repair in Broward County.",
    images: ["/assets/og-image.jpg"],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": BRAND.name,
    "image": "https://arteseamlessgutters.com/assets/og-image.jpg",
    "telephone": BRAND.contact.phone,
    "email": BRAND.contact.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Pompano Beach",
      "addressRegion": "FL",
      "postalCode": "33064",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.237860,
      "longitude": -80.124763
    },
    "url": "https://arteseamlessgutters.com",
    "priceRange": "$$"
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body 
        className="bg-[var(--color-brand-blue)] text-[var(--color-white)] antialiased selection:bg-[var(--color-brand-black)] selection:text-[var(--color-white)]"
        suppressHydrationWarning
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}

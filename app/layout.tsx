import type {Metadata, Viewport} from 'next';
import './globals.css'; // Global styles
import { BRAND } from '@/constants/brand';
import { dictionary } from '@/constants/copy';
import { LanguageProvider } from '@/context/LanguageContext';

export const viewport: Viewport = {
  themeColor: '#0055A4', // Assuming brand blue, or we can just use a standard color
};

export const metadata: Metadata = {
  title: {
    default: `${BRAND.name} | Pompano Beach`,
    template: `%s | ${BRAND.name}`
  },
  description: "Custom seamless gutters cut on-site. Professional installation, cleaning, and repair in Broward County. Se Habla Español.",
  openGraph: {
    title: "ArtE Seamless Gutters | Pompano Beach",
    description: "Custom seamless gutters cut on-site. Professional installation, cleaning, and repair in Broward County. Se Habla Español.",
    url: "https://arteseamlessgutters.com",
    siteName: BRAND.name,
    images: [
      {
        url: "/opengraph-image",
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
    description: "Custom seamless gutters cut on-site. Professional installation, cleaning, and repair in Broward County. Se Habla Español.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "name": BRAND.name,
    "image": "https://arteseamlessgutters.com/opengraph-image",
    "telephone": BRAND.contact.phone,
    "email": BRAND.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1366 NE 27th St",
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
    "areaServed": ["Broward County", "Palm Beach County"],
    "url": "https://arteseamlessgutters.com",
    "priceRange": "$$"
  };

  return (
    <html lang="en" className="scroll-smooth">
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

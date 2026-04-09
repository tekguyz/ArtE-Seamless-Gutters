import Link from 'next/link';
import { Phone, Home } from 'lucide-react';
import { BRAND } from '@/constants/brand';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--color-brand-blue)] flex items-center justify-center px-4 py-20 text-white">
      <div className="max-w-3xl w-full text-center space-y-12">
        <div className="space-y-6">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none [text-shadow:4px_4px_0_var(--color-brand-black)]">
            Looks like you got blown off course.
          </h1>
          <p className="text-xl md:text-2xl font-medium max-w-xl mx-auto opacity-90">
            We can&apos;t find that page, but we can definitely fix your gutters.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href={`tel:${BRAND.contact.phone}`}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[var(--color-brand-black)] text-white text-xl font-black px-10 py-6 uppercase border-4 border-[var(--color-brand-black)] hover:bg-transparent hover:text-white transition-all group"
          >
            <Phone className="w-6 h-6 group-hover:animate-bounce" />
            Call for Dispatch
          </a>
          
          <Link
            href="/"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-transparent text-white text-xl font-black px-10 py-6 uppercase border-4 border-white hover:bg-white hover:text-[var(--color-brand-blue)] transition-all"
          >
            <Home className="w-6 h-6" />
            Return Home
          </Link>
        </div>

        <div className="pt-12">
          <div className="inline-block border-2 border-white/20 px-6 py-3 uppercase tracking-widest font-black text-sm">
            Error 404 • Page Not Found
          </div>
        </div>
      </div>
    </main>
  );
}

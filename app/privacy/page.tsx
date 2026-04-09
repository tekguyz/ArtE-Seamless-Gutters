import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { BRAND } from '@/constants/brand';

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="bg-gray-50 text-gray-900 py-24 px-4 min-h-screen">
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 shadow-sm border border-gray-200">
          <h1 className="text-4xl font-black uppercase tracking-tight mb-12 border-b-4 border-[var(--color-brand-blue)] pb-4">
            Privacy Policy
          </h1>
          
          <div className="space-y-10 text-lg leading-relaxed text-gray-700">
            <section>
              <h2 className="text-2xl font-black uppercase tracking-wide mb-4 text-[var(--color-brand-black)]">
                Information We Collect
              </h2>
              <p>
                When you use our contact form or request an estimate, we collect personal information that you provide to us, including:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Full Name</li>
                <li>Phone Number</li>
                <li>Email Address</li>
                <li>Service Address (if provided in message)</li>
                <li>Project details and requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase tracking-wide mb-4 text-[var(--color-brand-black)]">
                How We Use Your Information
              </h2>
              <p>
                The information we collect is used solely for the following purposes:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>To provide you with accurate gutter installation, cleaning, or repair estimates.</li>
                <li>To contact you regarding your service request.</li>
                <li>To schedule on-site measurements and installations.</li>
                <li>To improve our customer service and response times.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase tracking-wide mb-4 text-[var(--color-brand-black)]">
                Data Protection
              </h2>
              <p>
                We value your privacy. We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties. This does not include trusted third parties who assist us in operating our website or conducting our business, so long as those parties agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-black uppercase tracking-wide mb-4 text-[var(--color-brand-black)]">
                Contact Us
              </h2>
              <p>
                If you have any questions regarding this privacy policy, you may contact us using the information below:
              </p>
              <div className="mt-6 p-6 bg-gray-50 border-l-4 border-[var(--color-brand-blue)]">
                <p className="font-black uppercase">{BRAND.name}</p>
                <p>{BRAND.contact.address}</p>
                <p className="font-bold">{BRAND.contact.displayPhone}</p>
                <p>{BRAND.contact.email}</p>
              </div>
            </section>

            <section className="pt-10 border-t border-gray-100">
              <p className="text-sm text-gray-500 italic">
                Last Updated: April 9, 2026
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

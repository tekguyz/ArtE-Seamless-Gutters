import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import ServicesSection from "@/components/ServicesSection";
import AuthoritySection from "@/components/AuthoritySection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ServicesSection />
        <AuthoritySection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}





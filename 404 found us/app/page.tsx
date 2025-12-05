import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="relative">
        <HeroSection />
        <div className="h-32 md:h-40 lg:h-48" />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}


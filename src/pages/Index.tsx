import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FloatingContact from "@/components/FloatingContact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ServicesSection />
      <Footer />
      <FloatingContact />
    </main>
  );
};

export default Index;

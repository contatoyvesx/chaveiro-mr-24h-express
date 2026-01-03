import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HighlightsSection from "@/components/HighlightsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FloatingContact from "@/components/FloatingContact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <HighlightsSection />
      <ServicesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <Footer />
      <FloatingContact />
    </main>
  );
};

export default Index;

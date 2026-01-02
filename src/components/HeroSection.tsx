import { Key, Phone, Clock, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-keys.jpg";

const HeroSection = () => {
  const scrollToServices = () => {
    document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Chaves douradas profissionais"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      {/* Animated Keys Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] opacity-10 animate-float">
          <Key className="w-16 h-16 text-primary" />
        </div>
        <div className="absolute top-40 right-[15%] opacity-10 animate-float" style={{ animationDelay: "0.5s" }}>
          <Key className="w-12 h-12 text-primary rotate-45" />
        </div>
        <div className="absolute bottom-40 left-[20%] opacity-10 animate-float" style={{ animationDelay: "1s" }}>
          <Key className="w-20 h-20 text-primary -rotate-12" />
        </div>
        <div className="absolute bottom-20 right-[10%] opacity-10 animate-float" style={{ animationDelay: "1.5s" }}>
          <Key className="w-14 h-14 text-primary rotate-90" />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* 24h Badge */}
        <div className="inline-flex items-center gap-2 bg-urgent/20 border border-urgent/50 rounded-full px-6 py-2 mb-8 animate-pulse-urgent">
          <Clock className="w-5 h-5 text-urgent" />
          <span className="font-bold text-urgent uppercase tracking-wider">
            Atendimento 24 Horas
          </span>
        </div>

        {/* Logo/Name */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <Key className="w-12 h-12 md:w-16 md:h-16 text-primary animate-key-rotate" />
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-gradient-gold">
            Chaveiro MR
          </h1>
        </div>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-foreground/80 mb-4 max-w-2xl mx-auto">
          Soluções rápidas e profissionais em chaveiro
        </p>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          Ficou trancado? Perdeu a chave? Não se preocupe! Estamos prontos para ajudar.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="tel:+5511999999999">
            <Button variant="urgent" size="xl" className="gap-3">
              <Phone className="w-6 h-6" />
              Ligar Agora
            </Button>
          </a>
          <a
            href="https://wa.me/5511999999999?text=Olá! Preciso de um chaveiro urgente."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="gold" size="xl" className="gap-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </Button>
          </a>
        </div>

        {/* Phone Number */}
        <a 
          href="tel:+5511999999999" 
          className="inline-flex items-center gap-3 text-2xl md:text-3xl font-heading font-bold text-foreground hover:text-primary transition-colors"
        >
          <Phone className="w-8 h-8 animate-unlock" />
          (11) 99999-9999
        </a>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToServices}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
        >
          <ChevronDown className="w-10 h-10" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

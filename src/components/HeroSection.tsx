import { Phone, Clock, Key, Shield, Zap, MapPin, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-start md:items-center justify-center px-4 sm:px-6 md:px-8 pt-12 sm:pt-16 md:pt-32 pb-16 md:pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute inset-0 bg-gradient-glow" />
      <div className="absolute inset-0 bg-grid" />

      {/* Header strip */}
      <div className="relative md:absolute md:top-0 md:left-0 md:right-0 px-4 sm:px-6 md:px-8 py-4 mb-8 md:mb-0 z-10 hidden md:block">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-3">
          <div className="flex items-center gap-3 bg-card/70 backdrop-blur-sm border border-primary/20 rounded-xl px-4 py-3 animate-fade-up">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 border border-primary/30">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Chegamos em minutos</p>
              <p className="text-sm font-semibold text-foreground">Plantão 24h em toda a região</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-card/70 backdrop-blur-sm border border-primary/20 rounded-xl px-4 py-3 animate-fade-up-delay-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 border border-primary/30">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Atendimento Local</p>
              <p className="text-sm font-semibold text-foreground">Especialistas na zona leste</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-card/70 backdrop-blur-sm border border-primary/20 rounded-xl px-4 py-3 animate-fade-up-delay-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 border border-primary/30">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Serviço Garantido</p>
              <p className="text-sm font-semibold text-foreground">Pagamento só quando o problema resolver</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Keys Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Key className="absolute top-[15%] left-[8%] w-8 h-8 text-primary/20 rotate-12 animate-float" />
        <Key className="absolute top-[25%] right-[12%] w-6 h-6 text-primary/15 -rotate-45 animate-float" style={{ animationDelay: "1s" }} />
        <Key className="absolute bottom-[30%] left-[15%] w-10 h-10 text-primary/10 rotate-45 animate-float" style={{ animationDelay: "2s" }} />
        <Key className="absolute bottom-[20%] right-[8%] w-7 h-7 text-primary/15 -rotate-12 animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        {/* 24h Badge */}
        <div className="animate-fade-up inline-flex items-center gap-3 bg-card/80 backdrop-blur-sm border border-primary/30 rounded-full px-5 py-2.5 mb-10">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
          </span>
          <Clock className="w-4 h-4 text-primary" />
          <span className="text-sm font-semibold text-primary tracking-wide">
            ATENDIMENTO 24 HORAS
          </span>
        </div>

        {/* Logo Icon */}
        <div className="animate-fade-up-delay-1 mb-6 flex justify-center">
          <img
            src="/canivete2.png"
            alt="Canivete"
            className="w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 object-contain"
          />
        </div>

        {/* Title */}
        <div className="space-y-4 animate-fade-up-delay-1 px-2">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
            <span className="text-gradient">Chaveiro MR</span> 24 Horas
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Equipe de chaveiros profissionais com deslocamento imediato, equipamentos modernos e atendimento acolhedor para você voltar à rotina sem dor de cabeça.
          </p>
        </div>

        {/* Subtitle */}
        <div className="animate-fade-up-delay-2 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
          <div className="flex items-center gap-3 text-foreground font-semibold text-lg">
            <CheckCircle2 className="w-5 h-5 text-primary" /> Portas, cofres e veículos
          </div>
          <div className="hidden md:block w-px h-6 bg-border" />
          <div className="flex items-center gap-3 text-muted-foreground">
            <Shield className="w-5 h-5 text-primary" /> Serviço com garantia e nota fiscal
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4 flex-wrap">
          <a href="tel:+5511970211708">
            <Button variant="glow" size="xl" className="gap-3 w-full sm:min-w-[220px]">
              <Phone className="w-5 h-5" />
              Ligar Agora
            </Button>
          </a>
          <a
            href="https://wa.me/5511970211708?text=Olá! Preciso de um chaveiro urgente."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="xl" className="gap-3 w-full sm:min-w-[220px]">
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp
            </Button>
          </a>
        </div>

        {/* Phone Number */}
        <a 
          href="tel:+5511970211708" 
          className="animate-fade-up-delay-3 inline-flex items-center gap-3 text-3xl md:text-4xl font-bold text-foreground hover:text-primary transition-colors duration-300"
        >
          <Phone className="w-7 h-7" />
          +55 11 97021-1708
        </a>

        {/* Quick Trust Indicators */}
        <div className="animate-fade-up-delay-3 flex flex-wrap items-center justify-center gap-6 mt-12 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm">Chegada em 15min</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm">Garantia Total</span>
          </div>
          <div className="flex items-center gap-2">
            <Key className="w-4 h-4 text-primary" />
            <span className="text-sm">+10 Anos de Experiência</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export default HeroSection;

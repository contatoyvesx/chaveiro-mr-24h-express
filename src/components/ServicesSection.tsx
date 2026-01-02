import { Home, Car, Building, Wrench } from "lucide-react";

const services = [
  { 
    icon: Home, 
    title: "Residencial", 
    desc: "Abertura de portas, troca de fechaduras e cópias de chaves" 
  },
  { 
    icon: Car, 
    title: "Automotivo", 
    desc: "Chaves codificadas, abertura de veículos de todas as marcas" 
  },
  { 
    icon: Building, 
    title: "Comercial", 
    desc: "Fechaduras de alta segurança e controle de acesso" 
  },
  { 
    icon: Wrench, 
    title: "Manutenção", 
    desc: "Reparo, lubrificação e troca de cilindros" 
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 px-4 relative">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-card/50" />
      <div className="absolute inset-0 animate-shimmer" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Soluções completas em chaveiro para residências, veículos e empresas
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 hover-lift hover-glow cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

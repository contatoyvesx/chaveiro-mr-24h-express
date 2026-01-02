import { Key, Phone, Clock, Shield, Car, Home, Building, Wrench } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residencial",
    description: "Abertura de portas, troca de fechaduras e cópias de chaves",
  },
  {
    icon: Car,
    title: "Automotivo",
    description: "Chaves codificadas, abertura de veículos e chaveiros de carro",
  },
  {
    icon: Building,
    title: "Comercial",
    description: "Fechaduras de alta segurança e sistemas de controle de acesso",
  },
  {
    icon: Wrench,
    title: "Manutenção",
    description: "Reparo e manutenção de fechaduras e cilindros",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 animate-key-rotate">
          <Key className="w-32 h-32 text-primary" />
        </div>
        <div className="absolute bottom-20 right-10 animate-key-rotate" style={{ animationDelay: "1s" }}>
          <Key className="w-24 h-24 text-primary" />
        </div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gradient-gold mb-4">
            Nossos Serviços
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluções completas em chaveiro para todas as suas necessidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--gold)/0.2)] cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-8 h-8 text-primary group-hover:animate-key-rotate" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Clock className="w-6 h-6 text-primary" />
              <span className="font-heading text-3xl font-bold text-foreground">24h</span>
            </div>
            <p className="text-muted-foreground text-sm">Atendimento</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-heading text-3xl font-bold text-foreground">100%</span>
            </div>
            <p className="text-muted-foreground text-sm">Garantia</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Phone className="w-6 h-6 text-primary" />
              <span className="font-heading text-3xl font-bold text-foreground">15min</span>
            </div>
            <p className="text-muted-foreground text-sm">Tempo Médio</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Key className="w-6 h-6 text-primary" />
              <span className="font-heading text-3xl font-bold text-foreground">10+</span>
            </div>
            <p className="text-muted-foreground text-sm">Anos de Experiência</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

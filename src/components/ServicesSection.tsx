import { Home, Car, Building, Wrench, ShieldCheck, Sparkles } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residencial",
    desc: "Abertura de portas, troca de fechaduras e cópias de chaves",
    highlight: "Chegamos em até 15 min"
  },
  {
    icon: Car,
    title: "Automotivo",
    desc: "Chaves codificadas, abertura de veículos de todas as marcas",
    highlight: "Sem danificar o veículo"
  },
  {
    icon: Building,
    title: "Comercial",
    desc: "Fechaduras de alta segurança e controle de acesso",
    highlight: "Planos para empresas"
  },
  {
    icon: Wrench,
    title: "Manutenção",
    desc: "Reparo, lubrificação e troca de cilindros",
    highlight: "Atendimento preventivo",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 px-4 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-card/60" />
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[140%] h-full bg-gradient-to-b from-primary/5 via-transparent to-primary/10 rounded-full blur-3xl" />
      <div className="absolute inset-0 animate-shimmer" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4">
            <ShieldCheck className="w-4 h-4" />
            Atendimento especializado
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Atendimento rápido, equipamentos modernos e profissionais certificados para qualquer situação de emergência.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group h-full bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 hover-lift hover-glow cursor-pointer"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </h3>
                <span className="text-[11px] uppercase tracking-wide text-primary font-semibold bg-primary/10 border border-primary/20 rounded-full px-3 py-1">
                  {service.highlight}
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.desc}
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                <Sparkles className="w-4 h-4 text-primary" />
                Técnico mais próximo enviado imediatamente
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

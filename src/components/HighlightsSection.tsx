import { Clock3, ShieldCheck, Star, MapPin, BadgeCheck } from "lucide-react";

const highlights = [
  {
    icon: Clock3,
    title: "Tempo médio de chegada",
    value: "15 minutos",
    desc: "Equipe posicionada estrategicamente para chegar rápido até você."
  },
  {
    icon: ShieldCheck,
    title: "Garantia em todos os serviços",
    value: "Cobertura completa",
    desc: "Pagou apenas após o serviço estar resolvido, com nota fiscal."
  },
  {
    icon: MapPin,
    title: "Cobertura local",
    value: "Zona Leste",
    desc: "Conhecemos cada bairro e os acessos para ganhar tempo no deslocamento."
  },
  {
    icon: Star,
    title: "Avaliação dos clientes",
    value: "4.9/5",
    desc: "Atendimento cordial, ferramentas modernas e cuidado com o seu patrimônio."
  },
];

const HighlightsSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto bg-card/70 backdrop-blur-md border border-border rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/5" />
        <div className="relative z-10 flex items-center gap-3 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 border border-primary/30">
            <BadgeCheck className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="text-sm text-primary font-semibold uppercase tracking-wide">Credibilidade</p>
            <h3 className="text-2xl font-bold text-foreground">Números que deixam você tranquilo</h3>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="group bg-secondary/50 border border-border/60 rounded-2xl p-5 h-full hover-lift transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/25">
                  <item.icon className="w-5 h-5 text-primary" />
                </span>
                <div className="text-xs uppercase tracking-wide text-muted-foreground">{item.title}</div>
              </div>
              <p className="text-3xl font-bold text-foreground mb-2">{item.value}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;

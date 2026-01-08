import { MessageCircle, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Juliana M.",
    role: "Moradora em Perdizes",
    text: "Chegaram muito rápido e abriram a porta sem marcar nada. O técnico explicou tudo e foi super educado!"
  },
  {
    name: "Carlos Henrique",
    role: "Gestor predial",
    text: "Precisávamos trocar várias fechaduras de acesso. Atendimento ágil, organizado e com nota fiscal. Recomendo."
  },
  {
    name: "Ana Beatriz",
    role: "Motorista de aplicativo",
    text: "Trancada fora do carro às 2h da manhã. Resolveram em minutos e sem dano nenhum à porta."
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-4">
          <MessageCircle className="w-4 h-4" />
          Clientes reais
        </div>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Atendimento que gera confiança</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Cada ocorrência é tratada com urgência e cuidado. Veja como nossos clientes descrevem a experiência com o plantão 24h.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial) => (
          <article
            key={testimonial.name}
            className="relative bg-card/70 backdrop-blur-sm border border-border rounded-2xl p-6 text-left shadow-lg hover-lift"
          >
            <Quote className="w-8 h-8 text-primary opacity-70 mb-3" />
            <p className="text-muted-foreground leading-relaxed mb-4">{testimonial.text}</p>
            <div>
              <p className="text-foreground font-semibold">{testimonial.name}</p>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">{testimonial.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;

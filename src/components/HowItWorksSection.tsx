import { PhoneCall, Route, Shield, ThumbsUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: PhoneCall,
    title: "Chame pelo canal preferido",
    desc: "Telefone ou WhatsApp. Já identificamos o tipo de chave e a localização."
  },
  {
    icon: Route,
    title: "Equipe a caminho",
    desc: "Enviamos o técnico mais próximo com ferramentas específicas para o seu caso."
  },
  {
    icon: Shield,
    title: "Serviço garantido",
    desc: "Abertura, reparo ou troca de fechadura com cuidado total ao seu patrimônio."
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        <div>
          <p className="text-sm text-primary font-semibold uppercase tracking-wide mb-3">Passo a passo</p>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Atendimento humanizado, processo eficiente
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Cada chamado recebe acompanhamento completo: confirmamos chegada, enviamos atualizações e só finalizamos quando você estiver seguro dentro de casa, no carro ou na empresa.
          </p>

          <div className="space-y-5">
            {steps.map((step, index) => (
              <div key={step.title} className="relative flex gap-4 p-4 rounded-2xl border border-border bg-card/60 backdrop-blur-sm">
                <div className="flex flex-col items-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                    <step.icon className="w-6 h-6 text-primary" />
                  </span>
                  {index !== steps.length - 1 && <div className="w-px h-10 bg-border mt-2" />}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">Etapa {index + 1}</p>
                  <h4 className="text-xl font-semibold text-foreground">{step.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/15 via-card to-card border border-primary/20 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative z-10 space-y-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
              <ThumbsUp className="w-4 h-4" />
              Zero dor de cabeça
            </span>
            <h4 className="text-2xl font-bold text-foreground">Ficou trancado agora?</h4>
            <p className="text-muted-foreground leading-relaxed">
              Ligue e deixe o deslocamento conosco. Enquanto chegamos, orientamos sobre segurança e enviamos o status do atendimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+5511999999999">
                <Button variant="glow" size="lg" className="gap-2 w-full sm:w-auto">
                  Ligar agora
                </Button>
              </a>
              <a
                href="https://wa.me/5511970211708?text=Olá! Preciso de um chaveiro urgente."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="outline" size="lg" className="gap-2 w-full">
                  Falar no WhatsApp
                </Button>
              </a>
            </div>
            <ul className="text-muted-foreground text-sm space-y-1">
              <li>• Atendimento 24h incluindo finais de semana e feriados</li>
              <li>• Pagamento por cartão, pix ou faturado para empresas</li>
              <li>• Técnicos identificados e uniformizados</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

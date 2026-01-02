import { Phone, MapPin, Clock, Key } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t border-border/50 bg-card/30">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Key className="w-5 h-5 text-primary" />
              </div>
              <span className="text-xl font-bold text-gradient">Chaveiro MR</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Seu chaveiro de confiança, disponível 24 horas por dia, 7 dias por semana.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Contato</h3>
            <div className="space-y-3">
              <a
                href="tel:+5511999999999"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span>(11) 99999-9999</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Atendemos toda a região</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>24 horas - Todos os dias</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-foreground mb-4">Serviços</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-primary transition-colors cursor-pointer">Abertura de portas</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Chaves automotivas</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Troca de fechaduras</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Cópias de chaves</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Chaveiro MR. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

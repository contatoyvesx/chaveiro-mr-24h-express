import { Phone, MapPin, Clock, Key } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Key className="w-8 h-8 text-primary animate-key-rotate" />
              <span className="font-heading text-2xl font-bold text-gradient-gold">
                Chaveiro MR
              </span>
            </div>
            <p className="text-muted-foreground">
              Seu chaveiro de confiança, disponível 24 horas por dia, 7 dias por semana.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-4">
              Contato
            </h3>
            <div className="space-y-3">
              <a
                href="tel:+5511999999999"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(11) 99999-9999</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>Atendemos toda a região</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="w-5 h-5" />
                <span>24 horas - Todos os dias</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-4">
              Serviços
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Abertura de portas</li>
              <li>• Chaves automotivas</li>
              <li>• Troca de fechaduras</li>
              <li>• Cópias de chaves</li>
              <li>• Cofres e cadeados</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Chaveiro MR. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

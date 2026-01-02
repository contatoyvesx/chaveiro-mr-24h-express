import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="text-xl font-bold text-foreground mb-4">Chaveiro MR</h2>
            <p className="text-muted-foreground text-sm">
              Seu chaveiro de confiança, disponível 24 horas.
            </p>
          </div>

          <div className="space-y-3">
            <a
              href="tel:+5511999999999"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
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

        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Chaveiro MR
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Phone, MapPin, Clock, Key } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 px-4 border-t border-border/50 bg-card/30">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="bg-gradient-to-r from-primary/15 via-card to-card border border-primary/20 rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-wide">Precisa agora?</p>
            <h3 className="text-xl font-bold text-foreground">Acionamos o chaveiro mais próximo imediatamente.</h3>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="tel:+5511999999999" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground font-semibold shadow-lg">
              <Phone className="w-4 h-4" />
              Ligar agora
            </a>
            <a
              href="https://wa.me/5511970211708?text=Olá! Preciso de um chaveiro urgente."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 text-primary hover:bg-primary/10 transition"
            >
              <span className="w-4 h-4">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
              WhatsApp
            </a>
          </div>
        </div>

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

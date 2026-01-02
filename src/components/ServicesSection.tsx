import { Home, Car, Building, Wrench, Clock, Shield, Phone, MapPin } from "lucide-react";

const services = [
  { icon: Home, title: "Residencial", desc: "Abertura de portas e fechaduras" },
  { icon: Car, title: "Automotivo", desc: "Chaves codificadas de veículos" },
  { icon: Building, title: "Comercial", desc: "Fechaduras de alta segurança" },
  { icon: Wrench, title: "Manutenção", desc: "Reparo e troca de cilindros" },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-secondary/50 rounded-lg p-5 text-center"
            >
              <service.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <Clock className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">24h</p>
            <p className="text-sm text-muted-foreground">Atendimento</p>
          </div>
          <div>
            <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">100%</p>
            <p className="text-sm text-muted-foreground">Garantia</p>
          </div>
          <div>
            <Phone className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">15min</p>
            <p className="text-sm text-muted-foreground">Chegada</p>
          </div>
          <div>
            <MapPin className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-2xl font-bold text-foreground">10+</p>
            <p className="text-sm text-muted-foreground">Anos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

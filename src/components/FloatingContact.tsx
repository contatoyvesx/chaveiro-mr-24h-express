import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingContact = () => {
  const phoneNumber = "5511958870740";
  const whatsappNumber = "5511958870740";
  const whatsappMessage = encodeURIComponent("Olá! Preciso de um chaveiro urgente.");

  return (
    <div className="fixed inset-x-0 bottom-24 sm:bottom-6 sm:inset-x-auto sm:right-6 z-50 flex justify-center sm:justify-end sm:flex-col gap-3 px-4">
      <a href={`tel:+${phoneNumber}`} className="flex justify-center">
        <Button
          variant="glow"
          size="icon"
          className="w-12 h-12 sm:w-14 sm:h-14 shadow-xl"
        >
          <Phone className="w-6 h-6" />
        </Button>
      </a>

      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="whatsapp"
          size="icon"
          className="w-12 h-12 sm:w-14 sm:h-14 shadow-xl animate-ring-pulse"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </a>
    </div>
  );
};

export default FloatingContact;

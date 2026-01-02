import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingContact = () => {
  const phoneNumber = "5511999999999"; // Replace with actual number
  const whatsappMessage = encodeURIComponent("Olá! Preciso de um chaveiro urgente.");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Phone Button */}
      <a href={`tel:+${phoneNumber}`}>
        <Button
          variant="urgent"
          size="icon"
          className="w-14 h-14 rounded-full shadow-2xl"
        >
          <Phone className="w-6 h-6" />
        </Button>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="whatsapp"
          size="icon"
          className="w-14 h-14 rounded-full shadow-2xl animate-ring-pulse"
        >
          <MessageCircle className="w-6 h-6" />
        </Button>
      </a>
    </div>
  );
};

export default FloatingContact;

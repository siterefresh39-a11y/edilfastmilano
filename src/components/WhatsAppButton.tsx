import { MessageCircle, Phone } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "393515663803";
  const message = "Ciao, vi contatto per informazioni riguardo una ristrutturazione";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <a
        href={`tel:+${phoneNumber}`}
        className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-50 inline-flex items-center gap-2 bg-primary hover:opacity-90 text-white font-semibold px-5 py-3 md:px-6 md:py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Chiama Edilfast Milano"
      >
        <Phone size={20} className="md:w-6 md:h-6" />
        Chiama
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Contattaci su WhatsApp"
      >
        <MessageCircle size={20} className="md:w-6 md:h-6" />
      </a>
    </>
  );
};

export default WhatsAppButton;

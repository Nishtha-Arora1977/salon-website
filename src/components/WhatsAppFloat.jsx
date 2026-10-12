import { MessageCircle } from 'lucide-react';
import { brand } from '../data/studio';
import { waLink } from '../lib/whatsapp';

export default function WhatsAppFloat() {
  return (
    <a
      href={waLink(`Hello ${brand.name}! I'd like to book an appointment.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-xl shadow-whatsapp/30 transition-transform hover:scale-105"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
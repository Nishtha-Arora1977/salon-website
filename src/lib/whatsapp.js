export const WHATSAPP_NUMBER = '918283050747';
export const WHATSAPP_DISPLAY = '+91 82830 50747';

export function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
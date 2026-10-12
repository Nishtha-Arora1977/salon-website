import { Scissors, Flower2, Paintbrush, Gem } from 'lucide-react';

export const brand = {
  name: 'Lumière',
  suffix: 'Hair & Beauty Studio',
  email: 'hello@lumiere.in',
};

export const serviceGroups = [
  {
    id: 'hair',
    label: 'Hair',
    description: 'Cuts, colour and treatments that work with your hair’s natural texture.',
    icon: Scissors,
    services: [
      { name: 'Haircut & Blow-Dry', price: 600 },
      { name: 'Hair Colour — Roots', price: 1200 },
      { name: 'Global Hair Colour', price: 2500 },
      { name: 'Keratin & Smoothing', price: 3500, note: 'final price on consultation' },
      { name: 'Deep Conditioning Mask', price: 900 },
    ],
  },
  {
    id: 'skin',
    label: 'Skincare',
    description: 'Gentle facials and treatments chosen for your skin type.',
    icon: Flower2,
    services: [
      { name: 'Clean-Up', price: 500 },
      { name: 'Classic Facial', price: 900 },
      { name: 'Anti-Ageing Facial', price: 1800 },
      { name: 'Under-Eye Treatment', price: 600 },
    ],
  },
  {
    id: 'nails',
    label: 'Nails',
    description: 'Clean, long-lasting finishes for hands and feet.',
    icon: Paintbrush,
    services: [
      { name: 'Manicure', price: 400 },
      { name: 'Pedicure', price: 650 },
      { name: 'Gel Polish', price: 700 },
      { name: 'Nail Art', price: 750 },
    ],
  },
  {
    id: 'bridal',
    label: 'Bridal & Styling',
    description: 'Full styling for your big day, planned around your look.',
    icon: Gem,
    services: [
      { name: 'Bridal Makeup', price: null, note: 'includes trial · on request' },
      { name: 'Engagement Styling', price: null, note: 'on request' },
      { name: 'Mehndi Design', price: 800 },
      { name: 'Pre-Bridal Facial', price: 2200 },
    ],
  },
];

export const hours = [
  { day: 'Monday – Friday', time: '10:00 AM – 8:00 PM' },
  { day: 'Saturday', time: '9:00 AM – 8:00 PM' },
  { day: 'Sunday', time: 'By appointment only' },
];

export const address = {
  line1: 'Lumière Hair & Beauty Studio, 1st Floor',
  line2: 'Rose Walk, Main Street, Your City',
};

export const gallery = [
  { icon: Flower2, tone: ['#dcefe6', '#eef7f0'], caption: 'Fresh balayage, finished with a gloss' },
  { icon: Scissors, tone: ['#e4dcc8', '#f4eeda'], caption: 'Precision cut, styled to sit naturally' },
  { icon: Paintbrush, tone: ['#e7d9e3', '#f5edf3'], caption: 'Soft glam for an evening out' },
  { icon: Gem, tone: ['#e3dcc9', '#f1ecd9'], caption: 'Bridal styling with a trial look' },
];

export function formatPrice(value) {
  return value === null ? 'On request' : `₹${value.toLocaleString('en-IN')}`;
}

export function inquiryMessage(service) {
  const base = `Hello ${brand.name}! I'd like to know more about "${service.name}".`;
  const price = service.price === null ? '' : ` Could you confirm the current price of ₹${service.price.toLocaleString('en-IN')}?`;
  return base + price;
}

export function appointmentMessage(fields) {
  const lines = [
    `Hello ${brand.name}! I'd like to book an appointment.`,
    '',
    `Name: ${fields.name}`,
    `Service: ${fields.service}`,
    `Preferred date: ${fields.date}`,
  ];
  if (fields.notes) lines.push(`Notes: ${fields.notes}`);
  return lines.join('\n');
}
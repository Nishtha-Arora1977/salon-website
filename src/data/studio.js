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
    description: 'Cuts, colour and treatments tailored to you.',
    icon: Scissors,
    services: [
      { name: 'Haircut & Blow-Dry', price: 600 },
      { name: 'Hair Colour — Roots', price: 1200 },
      { name: 'Global Hair Colour', price: 2500 },
      { name: 'Balayage', price: 2800, note: 'length-dependent' },
      { name: 'Keratin & Smoothing', price: 3500, note: 'final price on consultation' },
      { name: 'Deep Conditioning Mask', price: 900 },
    ],
  },
  {
    id: 'skin',
    label: 'Skincare',
    description: 'Gentle facials and targeted treatments.',
    icon: Flower2,
    services: [
      { name: 'Clean-Up', price: 500 },
      { name: 'Classic Facial', price: 900 },
      { name: 'Anti-Ageing Facial', price: 1800 },
      { name: 'Under-Eye Treatment', price: 600 },
      { name: 'LED Light Therapy', price: 850 },
    ],
  },
  {
    id: 'nails',
    label: 'Nails',
    description: 'Polished finishes with care and precision.',
    icon: Paintbrush,
    services: [
      { name: 'Manicure', price: 400 },
      { name: 'Pedicure', price: 650 },
      { name: 'Gel Polish', price: 700 },
      { name: 'Gel Extension', price: 1100 },
      { name: 'Nail Art', price: 750 },
    ],
  },
  {
    id: 'bridal',
    label: 'Bridal & Styling',
    description: 'Tailored looks for your special day.',
    icon: Gem,
    services: [
      { name: 'Bridal Makeup', price: null, note: 'includes trial · on request' },
      { name: 'Engagement Styling', price: null, note: 'on request' },
      { name: 'Mehndi Design', price: 800 },
      { name: 'Pre-Bridal Facial', price: 2200 },
      { name: 'Saree Draping', price: 600 },
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
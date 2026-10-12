import { MessageCircle, CalendarHeart } from 'lucide-react';
import { brand } from '../data/studio';
import { hero } from '../data/images';
import { waLink } from '../lib/whatsapp';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <img src={hero} alt="" aria-hidden="true" className="h-full w-full object-cover object-[50%_40%]" />
        <div className="absolute inset-0 bg-gradient-to-b from-paper/20 via-paper/85 to-paper" />
        <div className="absolute -top-32 right-[-10%] h-[26rem] w-[26rem] rounded-full bg-accent/10 blur-[110px]" />
        <div className="absolute bottom-0 left-[-15%] h-80 w-80 rounded-full bg-accent/8 blur-[90px]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Hair & Beauty Studio
          </p>
          <h1 className="text-balance font-serif text-5xl leading-[1.05] text-ink sm:text-6xl lg:text-[4.5rem]">
            Glow natural.
            <br />
            <span className="font-script text-[clamp(4rem,6vw,6rem)] italic text-accent">
              Feel effortlessly you.
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-ink-soft">
            {brand.name} is a serene studio offering cuts, colour, skincare, nails and bridal styling.
            Clean products, calm space and expert hands — tailored just for you.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-medium text-paper transition-all hover:bg-accent-strong"
            >
              View services & prices
            </a>
            <a
              href={waLink(`Hello ${brand.name}! I'd like to book an appointment.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-line-strong px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-accent"
            >
              <MessageCircle className="h-4 w-4 text-accent" />
              Book on WhatsApp
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <span>Walk-ins welcome · appointments preferred</span>
            <span>Open Mon – Sat</span>
            <span>Free consultation</span>
          </div>
        </div>
      </div>
    </section>
  );
}
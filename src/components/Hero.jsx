import { ArrowRight, MessageCircle, Scissors, Flower2, Gem } from 'lucide-react';
import { brand } from '../data/studio';
import { waLink } from '../lib/whatsapp';

const tiles = [
  { icon: Scissors, tone: ['#dcefe6', '#eef7f0'], offset: '' },
  { icon: Flower2, tone: ['#e7d9e3', '#f5edf3'], offset: 'lg:-translate-y-6' },
  { icon: Gem, tone: ['#e4dcc8', '#f4eeda'], offset: '' },
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 right-[-10%] h-[26rem] w-[26rem] rounded-full bg-accent-soft/80 blur-[110px]" />
        <div className="absolute bottom-0 left-[-15%] h-80 w-80 rounded-full bg-paper-2 blur-[90px]" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Hair & Beauty Studio
          </p>
          <h1 className="text-balance font-serif text-5xl leading-[1.05] text-ink sm:text-6xl lg:text-[4rem]">
            Look your best,
            <br />
            <span className="italic text-accent">feel completely yourself.</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted">
            {brand.name} is a friendly neighbourhood studio for haircuts, colour, skincare and
            nails. Browse the services, see our opening hours, and book your appointment in a
            single WhatsApp message.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-all hover:bg-accent-strong"
            >
              View services & prices
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={waLink(`Hello ${brand.name}! I'd like to book an appointment.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-line-strong bg-white/70 px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink"
            >
              <MessageCircle className="h-4 w-4 text-whatsapp-strong" />
              Book on WhatsApp
            </a>
          </div>

          <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <span>Walk-ins welcome · appointments preferred</span>
            <span>Open Mon – Sat</span>
            <span>Free consultation</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          {tiles.map((tile, index) => {
            const Icon = tile.icon;
            return (
              <div
                key={index}
                className={`relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-2xl shadow-[0_25px_50px_-30px_rgba(28,38,34,0.45)] ${tile.offset}`}
                style={{ background: `linear-gradient(135deg, ${tile.tone[0]}, ${tile.tone[1]})` }}
              >
                <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/30 blur-2xl" />
                <span className="relative flex items-center justify-center rounded-full bg-white/60 p-5 backdrop-blur-sm">
                  <Icon className="h-9 w-9 text-ink/70" strokeWidth={1.5} />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
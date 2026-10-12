import { MapPin, Clock } from 'lucide-react';
import Reveal from './Reveal';
import { address, hours } from '../data/studio';
import { visit } from '../data/images';

export default function Visit() {
  return (
    <section id="visit" className="bg-paper-2 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">Visit Us</p>
          <h2 className="font-serif text-4xl text-ink sm:text-5xl">Location & hours</h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_1fr] lg:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-line">
              <img src={visit} alt="" aria-hidden="true" className="aspect-[16/10] w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-paper/40" />
            </div>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={40}>
              <div className="flex h-full flex-col rounded-3xl border border-line bg-surface p-8 sm:p-9">
                <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-accent-soft p-3.5 text-accent">
                  <MapPin className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 font-serif text-2xl text-ink">Find the studio</h3>
                <p className="mt-4 text-pretty leading-relaxed text-ink-soft">
                  {address.line1}
                  <br />
                  {address.line2}
                </p>
                <p className="mt-4 text-sm text-muted">Parking available nearby.</p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="flex h-full flex-col rounded-3xl border border-line bg-surface p-8 sm:p-9">
                <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-accent-soft p-3.5 text-accent">
                  <Clock className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h3 className="mt-6 font-serif text-2xl text-ink">Opening hours</h3>
                <ul className="mt-5 divide-y divide-line">
                  {hours.map((row) => (
                    <li key={row.day} className="flex items-center justify-between py-3.5">
                      <span className="text-ink-soft">{row.day}</span>
                      <span className="font-medium text-ink">{row.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
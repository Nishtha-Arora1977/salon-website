import { Clock, MapPin } from 'lucide-react';
import Reveal from './Reveal';
import { hours, address } from '../data/studio';

export default function Visit() {
  return (
    <section id="visit" className="bg-paper-2 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">Visit Us</p>
          <h2 className="font-serif text-4xl text-ink sm:text-5xl">Location & hours</h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl border border-line bg-paper p-8 sm:p-9">
              <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-accent-soft p-3.5 text-accent">
                <MapPin className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <h3 className="mt-6 font-serif text-2xl text-ink">Find the studio</h3>
              <p className="mt-4 text-pretty leading-relaxed text-muted">
                {address.line1}
                <br />
                {address.line2}
              </p>

              <div className="mt-8 rounded-2xl bg-paper-2 p-5">
                <p className="text-sm text-muted">
                  Parking available nearby. Two-wheelers can be parked right outside.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={70}>
            <div className="flex h-full flex-col rounded-3xl border border-line bg-paper p-8 sm:p-9">
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
              <p className="mt-6 text-sm text-muted">
                Want a Sunday slot? Message us on WhatsApp and we&apos;ll find a time.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
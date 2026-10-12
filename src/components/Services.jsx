import { MessageCircle } from 'lucide-react';
import Reveal from './Reveal';
import { serviceGroups, formatPrice, inquiryMessage } from '../data/studio';
import { waLink } from '../lib/whatsapp';

export default function Services() {
  return (
    <section id="services" className="bg-paper-2 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Services
          </p>
          <h2 className="font-serif text-4xl text-ink sm:text-5xl">Services & pricing</h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted">
            Clear prices, professional products, no surprises. Prices marked “on request” depend on
            hair length and treatment — we&apos;ll confirm before you book.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {serviceGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <Reveal key={group.id} delay={(index % 2) * 70}>
                <div className="flex h-full flex-col rounded-3xl border border-line bg-paper p-8 sm:p-9">
                  <div className="flex items-center gap-4">
                    <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-accent-soft p-3.5 text-accent">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl text-ink">{group.label}</h3>
                      <p className="mt-1 text-sm text-muted">{group.description}</p>
                    </div>
                  </div>

                  <ul className="mt-7 flex-1 divide-y divide-line">
                    {group.services.map((service) => (
                      <li key={service.name} className="flex items-center gap-4 py-3.5">
                        <div className="min-w-0 flex-1">
                          <p className="font-medium text-ink">{service.name}</p>
                          {service.note && <p className="mt-0.5 text-xs text-muted">{service.note}</p>}
                        </div>
                        <span className="shrink-0 font-serif text-lg text-accent">
                          {formatPrice(service.price)}
                        </span>
                        <a
                          href={waLink(inquiryMessage(service))}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Ask about ${service.name} on WhatsApp`}
                          title="Ask on WhatsApp"
                          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-whatsapp text-white transition-colors hover:bg-whatsapp-strong"
                        >
                          <MessageCircle className="h-4 w-4" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
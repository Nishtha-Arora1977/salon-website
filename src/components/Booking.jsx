import { useState } from 'react';
import { CalendarHeart, MessageCircle } from 'lucide-react';
import Reveal from './Reveal';
import { serviceGroups, appointmentMessage } from '../data/studio';
import { waLink } from '../lib/whatsapp';

const allServices = serviceGroups.flatMap((group) => group.services.map((service) => service.name));

const inputClass =
  'w-full rounded-xl border border-line bg-white px-4 py-3 text-ink placeholder:text-muted/60 transition-colors focus:border-accent focus:outline-none';

export default function Booking() {
  const [values, setValues] = useState({ name: '', service: '', date: '', notes: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const update = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const next = {};
    if (!values.name.trim()) next.name = 'Please enter your name.';
    if (!values.service) next.service = 'Please choose a service.';
    if (!values.date.trim()) next.date = 'Please choose a preferred date.';
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setSent(false);
      return;
    }
    window.open(waLink(appointmentMessage(values)), '_blank', 'noopener');
    setSent(true);
  };

  return (
    <section id="book" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-[2rem] bg-ink px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent-soft">
                Book an appointment
              </p>
              <h2 className="text-balance font-serif text-4xl text-paper sm:text-5xl">
                Reserve your visit in one message
              </h2>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-paper/70">
                Tell us your name, the service you&apos;d like, and a preferred day. We&apos;ll
                reply on WhatsApp to confirm your slot — usually within the hour.
              </p>

              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-paper/70">
                <span className="flex items-center gap-2">
                  <CalendarHeart className="h-4 w-4 text-accent-soft" />
                  Free consultation
                </span>
                <span>Member price list on request</span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-paper/80">
                    Your name
                  </label>
                  <input
                    id="name"
                    value={values.name}
                    onChange={(event) => update('name', event.target.value)}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={inputClass}
                    placeholder="Full name"
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-2 text-sm text-[#9ad5b1]">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="service" className="mb-2 block text-sm text-paper/80">
                    Service
                  </label>
                  <select
                    id="service"
                    value={values.service}
                    onChange={(event) => update('service', event.target.value)}
                    aria-invalid={Boolean(errors.service)}
                    aria-describedby={errors.service ? 'service-error' : undefined}
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Choose a service
                    </option>
                    {allServices.map((name) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p id="service-error" className="mt-2 text-sm text-[#9ad5b1]">
                      {errors.service}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="date" className="mb-2 block text-sm text-paper/80">
                    Preferred date
                  </label>
                  <input
                    id="date"
                    type="date"
                    value={values.date}
                    onChange={(event) => update('date', event.target.value)}
                    aria-invalid={Boolean(errors.date)}
                    aria-describedby={errors.date ? 'date-error' : undefined}
                    className={inputClass}
                  />
                  {errors.date && (
                    <p id="date-error" className="mt-2 text-sm text-[#9ad5b1]">
                      {errors.date}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="notes" className="mb-2 block text-sm text-paper/80">
                    Notes <span className="text-paper/50">(optional)</span>
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    value={values.notes}
                    onChange={(event) => update('notes', event.target.value)}
                    className={`${inputClass} resize-none`}
                    placeholder="Anything we should know — hair length, allergies, references…"
                  />
                </div>

                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp px-7 py-3.5 text-sm font-medium text-white transition-colors hover:bg-whatsapp-strong sm:w-auto"
                >
                  <MessageCircle className="h-4 w-4 transition-transform group-hover:scale-110" />
                  Send on WhatsApp
                </button>

                <p role="status" className="text-sm text-paper/60">
                  {sent
                    ? 'WhatsApp is opening with your request ready to send. If it doesn’t open, tap the floating WhatsApp button instead.'
                    : 'This opens WhatsApp with your appointment details filled in — nothing is stored on this site.'}
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
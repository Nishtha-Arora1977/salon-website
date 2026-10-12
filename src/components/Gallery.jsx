import Reveal from './Reveal';
import { gallery } from '../data/images';

const captions = [
  'Fresh balayage, finished with a gloss',
  'Precision cut, styled to sit naturally',
  'Soft glam for an evening out',
  'Bridal styling with a trial look',
  'Clean gel manicure with detail work',
  'Calm facial with botanical extracts',
  'Sleek blow-dry for a polished finish',
  'Glow-up before the big day',
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">Gallery</p>
          <h2 className="font-serif text-4xl text-ink sm:text-5xl">A little of what we do</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((src, index) => (
            <Reveal key={src} delay={index * 60}>
              <figure className="group">
                <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line">
                  <img
                    src={src}
                    alt=""
                    aria-hidden="true"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-paper/40" />
                </div>
                <figcaption className="mt-3 text-center text-sm text-muted">{captions[index]}</figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
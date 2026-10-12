import Reveal from './Reveal';
import { gallery } from '../data/studio';

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-accent">Gallery</p>
          <h2 className="font-serif text-4xl text-ink sm:text-5xl">A little of what we do</h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {gallery.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={index} delay={index * 60}>
                <figure className="group">
                  <div
                    className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-line"
                    style={{ background: `linear-gradient(135deg, ${item.tone[0]}, ${item.tone[1]})` }}
                  >
                    <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/30 blur-2xl" />
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="flex items-center justify-center rounded-full bg-white/60 p-5 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-9 w-9 text-ink/70" strokeWidth={1.5} />
                      </span>
                    </span>
                  </div>
                  <figcaption className="mt-3 text-center text-sm text-muted">{item.caption}</figcaption>
                </figure>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
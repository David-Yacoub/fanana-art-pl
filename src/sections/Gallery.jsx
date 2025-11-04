import { Image } from 'lucide-react';
import { galleryItems } from '../data/gallery.js';

const Gallery = () => (
  <section id="gallery" className="mt-24 px-6 sm:px-10 lg:px-12">
    <div className="mx-auto max-w-6xl space-y-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-brand-forest">Galeria</p>
          <h2 className="mt-2 font-display text-3xl text-brand-ink sm:text-4xl">
            Prace uczestników i inspiracje ze studia
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-brand-ink/75">
            Zajrzyj do świata Fanana-Art: każda praca powstała podczas warsztatów i opowiada historię cierpliwości,
            warstw oraz radości z odkrywania nowych technik.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-full bg-brand-forest/10 px-4 py-2 text-brand-forest">
          <Image className="h-5 w-5" />
          <span className="text-sm font-medium">Dotknij, aby zobaczyć detale</span>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {galleryItems.map((item) => (
          <figure
            key={item.id}
            className="group relative overflow-hidden rounded-3xl border border-brand-ink/10 bg-white/70 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <figcaption className="flex items-center justify-between px-5 py-4">
              <p className="font-medium text-brand-ink">{item.title}</p>
              <span className="rounded-full bg-brand-cream px-3 py-1 text-xs uppercase tracking-[0.3em] text-brand-forest/80">
                Ręcznie wykonane
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;

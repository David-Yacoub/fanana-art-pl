import { Palette, Paintbrush2, Sparkles } from 'lucide-react';

const featureHighlights = [
  {
    title: 'Kameralne grupy (3–10 osób)',
    copy: 'Pracujemy w małych grupach, aby każdy uczestnik otrzymał uważne wsparcie instruktora.',
    image: '/images/hero-small-group.jpg',
    alt: 'Warsztaty dla dzieci i dorosłych'
  },
  {
    title: 'Materiały w cenie zajęć',
    copy: 'Zapewniamy papiery, farby i wykończenia premium – Ty przychodzisz tylko z pomysłem.',
    image: '/images/hero-materials.jpg',
    alt: 'Profesjonalne materiały do decoupage'
  },
  {
    title: 'Wyjdziesz z dziełem, które pokochasz',
    copy: 'Każdą sesję kończysz ukończonym projektem oraz wiedzą, jak powtórzyć efekt w domu.',
    image: '/images/leave_with_the_art_you_love.jpg',
    alt: 'Dekoracyjna szkatułka wykonana podczas warsztatów'
  }
];

const Hero = ({ onCtaClick }) => (
  <section className="relative overflow-hidden bg-brand-cream">
    <div
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: "url('/images/gallery-lavender-box.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    />
    <div className="absolute inset-0 opacity-60 mix-blend-multiply bg-paper-texture" />
    <div className="absolute inset-y-0 -left-24 hidden w-64 rotate-12 bg-white/20 blur-3xl sm:block" />
    <div className="absolute inset-y-0 -right-32 hidden w-72 -rotate-12 bg-white/20 blur-3xl lg:block" />

    <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center gap-10 px-6 py-24 sm:px-10 lg:px-12">
      <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.3em] text-brand-forest/70">
        <Sparkles className="h-5 w-5" />
        Warsztaty Fanana-Art
      </div>

      <div className="max-w-3xl space-y-6 rounded-3xl bg-white/85 p-6 shadow-lg backdrop-blur">
        <h1 className="font-display text-4xl leading-tight text-brand-ink sm:text-5xl lg:text-6xl">
          Warsztaty decoupage i kreatywne, które celebrują radość rękodzieła.
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-brand-ink/80 sm:text-xl">
          Poznaj techniki pracy z papierem, fakturą i kolorem. Pod okiem instruktorki Fananah w Wiśle każda sesja łączy
          solidną technikę, inspirację oraz ciepłą atmosferę studia.
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={onCtaClick}
            className="inline-flex items-center gap-2 rounded-full bg-brand-forest px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition hover:bg-brand-forest/90"
          >
            <Paintbrush2 className="h-5 w-5" />
            Zobacz warsztaty
          </button>
          <a
            href="#activities"
            className="inline-flex items-center gap-2 rounded-full border border-brand-ink/10 bg-white/70 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-brand-ink transition hover:border-brand-forest hover:text-brand-forest"
          >
            <Palette className="h-5 w-5" />
            Aktualności
          </a>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {featureHighlights.map((feature) => (
          <div
            key={feature.title}
            className="overflow-hidden rounded-3xl border border-brand-ink/10 bg-white/80 shadow-sm"
          >
            {feature.image && (
              <div className="flex h-48 w-full items-center justify-center bg-white">
                <img
                  src={feature.image}
                  alt={feature.alt ?? feature.title}
                  className="max-h-full w-full object-contain"
                />
              </div>
            )}
            <div className="space-y-2 p-6">
              <h3 className="font-semibold text-brand-forest">{feature.title}</h3>
              <p className="mt-2 text-sm text-brand-ink/70">{feature.copy}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;

export const workshopTypes = ['Decoupage', 'Mixed media', 'Cykl sezonowy', 'Rodzinne', 'Na zamówienie'];

export const workshops = [
  {
    id: 'earrings-workshop',
    title: 'Warsztat drewnianych kolczyków',
    description:
      'Stwórz trzy pary lekkich, drewnianych kolczyków dopasowanych do Twojego stylu. Poznasz podstawy decoupage, dobierzesz wzory oraz wykończenia i zabierzesz ze sobą gotowe ozdoby.',
    duration: '2 godziny',
    price: 65,
    priceDisplay: '65 zł / 3 pary kolczyków',
    difficulty: 'Początkujący',
    type: 'Decoupage',
    highlight: 'Dla początkujących',
    image: '/images/Earings_workshop.jpg',
    ctaLabel: 'Zarezerwuj termin',
    ctaDisabledLabel: 'Zarezerwuj termin',
    dateTimes: [
      {
        date: '2025-11-19',
        time: '17:30',
        display: '19 listopada 2025 · 17:30–19:30'
      }
    ]
  },
  {
    id: 'candle-holder-workshop',
    title: 'Warsztat świeczników dekoracyjnych',
    description:
      'Zaprojektuj świecznik, który rozświetli długie wieczory i doda przytulnego blasku Twojemu wnętrzu. Zajęcia prowadzone są spokojnym tempem, z naciskiem na relaks i twórczą zabawę.',
    duration: '2 godziny',
    price: 0,
    priceDisplay: 'Do potwierdzenia',
    difficulty: 'Początkujący',
    type: 'Decoupage',
    highlight: 'Zarezerwuj termin',
    image: '/images/candle_workshop.jpg',
    ctaLabel: 'Zarezerwuj termin',
    ctaDisabledLabel: 'Zarezerwuj termin',
    bookingUrl:
      'https://docs.google.com/forms/d/e/1FAIpQLSfnOY2G0RlzpVuwQD9f5NMZnt6WJUMKkFHqTVcse1M4rjZAbQ/viewform',
    dateTimes: [
      {
        date: null,
        time: null,
        display: 'Termin do potwierdzenia'
      }
    ]
  },
  {
    id: 'mixed-media-canvas',
    title: 'Płótno mixed media',
    description:
      'Eksperymentuj z decoupage, akrylami i pastami strukturalnymi, aby stworzyć warstwowy obraz pełen charakteru i głębi.',
    duration: '4 godziny',
    price: 85,
    difficulty: 'Zaawansowany',
    type: 'Mixed media',
    highlight: 'Rozwiń umiejętności',
    image:
      'https://images.unsplash.com/photo-1482160549825-59d1b23cb208?auto=format&fit=crop&w=900&q=60',
    dateTimes: [
      { date: '2025-01-12', time: '09:30' },
      { date: '2025-02-16', time: '13:00' }
    ]
  },
  {
    id: 'spring-florals-series',
    title: 'Wiosenny cykl kwiatowy',
    description:
      'Trzy spotkania poświęcone florystycznym motywom na wazonach, tacach i dekoracjach ściennych. Idealne, by rozwinąć swój styl i zestaw technik.',
    duration: '3 × 2 godziny',
    price: 150,
    difficulty: 'Średnio zaawansowany',
    type: 'Cykl sezonowy',
    highlight: 'Nowość sezonu',
    image:
      'https://images.unsplash.com/photo-1526481280695-3c4696e38ce7?auto=format&fit=crop&w=900&q=60',
    dateTimes: [
      { date: '2025-03-01', time: '10:00' },
      { date: '2025-03-08', time: '10:00' },
      { date: '2025-03-15', time: '10:00' }
    ]
  },
  {
    id: 'family-collage-workshop',
    title: 'Rodzinny warsztat kolażu',
    description:
      'Swobodne, rodzinne spotkanie z tworzeniem tablic wspomnień za pomocą decoupage i opowieści. Doskonałe dla dużych i małych artystów.',
    duration: '90 minut',
    price: 35,
    difficulty: 'Początkujący',
    type: 'Rodzinne',
    highlight: 'Dla całej rodziny',
    image:
      'https://images.unsplash.com/photo-1505744764255-45302db3c6b7?auto=format&fit=crop&w=900&q=60',
    dateTimes: [
      { date: '2024-12-28', time: '16:00' },
      { date: '2025-01-25', time: '11:30' }
    ]
  },
  {
    id: 'christmas-workshops-children',
    title: 'Świąteczne warsztaty dla dzieci',
    description:
      'Magiczne zajęcia, podczas których dzieci tworzą dekoracje świąteczne. Warsztaty rozwijają kreatywność, sprawiają radość i pozwalają zabrać do domu własnoręcznie wykonane ozdoby.',
    duration: '45–60 minut',
    price: 25,
    priceDisplay: '20–25 zł',
    pricingDetails: [
      '25 zł – decoupage na krążkach brzozy',
      '20 zł – decoupage na zawieszkach drewnianych'
    ],
    difficulty: 'Początkujący',
    type: 'Rodzinne',
    highlight: 'Świąteczna edycja',
    image: '/images/gallery-love-beyond-words.jpg',
    ctaLabel: 'Zarezerwuj termin',
    ctaDisabledLabel: 'Zarezerwuj termin',
    dateTimes: [{ date: 'Do ustalenia', time: 'Do ustalenia', display: 'Termin do uzgodnienia' }]
  },
  {
    id: 'wooden-clock-workshop',
    title: 'Warsztat drewnianych zegarów',
    description:
      'Stwórz funkcjonalny zegar z drewnianej bazy, łącząc sztukę, relaks i własny styl. Nie potrzebujesz doświadczenia – zapewniamy materiały i wsparcie krok po kroku.',
    duration: '2 godziny',
    price: 90,
    priceDisplay: '90 zł',
    pricingDetails: ['Przy rezerwacji podaj liczbę osób (3–10)'],
    difficulty: 'Początkujący',
    type: 'Decoupage',
    highlight: 'Małe grupy 3–10',
    image: '/images/gallery-rose-clock.jpg',
    ctaLabel: 'Zarezerwuj termin',
    ctaDisabledLabel: 'Zarezerwuj termin',
    dateTimes: [{ date: 'Do ustalenia', time: 'Do ustalenia', display: 'Termin do uzgodnienia' }]
  },
  {
    id: 'tea-box-workshop',
    title: 'Warsztat herbacianych szkatułek',
    description:
      'Ozdób drewnianą szkatułkę na herbaty techniką decoupage – powstanie piękny i praktyczny dodatek do kuchni lub prezent od serca.',
    duration: '2 godziny',
    price: 70,
    priceDisplay: '70–80 zł',
    pricingDetails: ['70 zł – pudełko z 4 przegródkami', '80 zł – pudełko z 6 przegródkami'],
    difficulty: 'Początkujący',
    type: 'Rodzinne',
    highlight: 'Zarezerwuj termin',
    image: '/images/gallery-floral-box.jpg',
    ctaLabel: 'Zarezerwuj termin',
    ctaDisabledLabel: 'Zarezerwuj termin',
    dateTimes: [{ date: 'Do ustalenia', time: 'Do ustalenia', display: 'Termin do uzgodnienia' }]
  },
  {
    id: 'custom-workshop-request',
    title: 'Warsztat na zamówienie – odkryj radość tworzenia',
    description:
      'Podczas spotkania uczestnicy ozdabiają drewniany przedmiot techniką decoupage, nadając mu unikalny charakter. To idealny sposób na relaks, integrację i stworzenie pięknej pamiątki.',
    duration: 'Elastyczny',
    price: 0,
    priceDisplay: 'Oferta indywidualna',
    difficulty: 'Początkujący',
    type: 'Na zamówienie',
    highlight: 'Zapytaj o ofertę',
    image: '/images/gallery-marble-box.jpg',
    ctaLabel: 'Zapytaj o ofertę',
    ctaDisabledLabel: 'Zapytaj o ofertę',
    dateTimes: [{ date: 'Elastyczny harmonogram', time: 'Do ustalenia', display: 'Termin do uzgodnienia' }]
  }
];

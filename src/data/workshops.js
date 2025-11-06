export const workshopTypes = ['Decoupage', 'Mixed media', 'Cykl sezonowy', 'Rodzinne', 'Na zamówienie'];

export const workshops = [
  {
    id: 'earrings-workshop',
    title: 'Warsztaty z tworzenia kolczyków',
    description:
      'Stwórz swoje niepowtarzalne drewniane kolczyki, które ozdobią każdą kreację i podkreślą Twój wyjątkowy styl.',
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
        date: '2025-11-21',
        time: '17:30',
        display: '21 listopada 2025 – 17:30-19:30'
      }
    ]
  },
  {
    id: 'candle-holder-workshop',
    title: 'Warsztaty z tworzenia świeczników',
    description:
      'Stwórz świecznik, który rozświetli długie wieczory i doda przytulnego blasku Twojemu wnętrzu. Zajęcia prowadzone są spokojnym tempem, z naciskiem na relaks i twórczą zabawę.',
    duration: '2 godziny',
    price: 50,
    priceDisplay: '50 zł (za jeden duży świecznik)',
    difficulty: 'Początkujący',
    type: 'Decoupage',
    highlight: 'Zarezerwuj termin',
    image: '/images/picture_candle_holder_regular_workshop.jpg',
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
    id: 'family-collage-workshop',
    title: 'Rodzinny warsztat kolażu',
    description:
      'Swobodne, rodzinne spotkanie z tworzeniem tablic wspomnień za pomocą decoupage i opowieści. Doskonałe dla dużych i małych artystów.',
    duration: '90 minut',
    price: 35,
    difficulty: 'Początkujący',
    type: 'Rodzinne',
    highlight: 'Dla całej rodziny',
    image: '/images/workshop_cloth_holder.jpg',
    dateTimes: [
      { date: '2024-12-28', time: '16:00' },
      { date: '2025-01-25', time: '11:30' }
    ]
  },
  {
    id: 'christmas-workshops-children',
    title: 'Świąteczne warsztaty dla dzieci',
    description:
      'Świąteczne warsztaty dla dzieci to wyjątkowa okazja, by stworzyć własne, piękne dekoracje świąteczne. Zajęcia pobudzą kreatywność, wprowadzą uczestników w nastrój świąt i pozwolą im udekorować domy własnoręcznie wykonanymi dziełami. Max ilość dzieci w grupie do 15 osób)',
    duration: '45-60 minut',
    price: 25,
    priceDisplay: '20-25 zł',
    pricingDetails: [
      '25 zł – decoupage na krążkach brzozy',
      '20 zł – decoupage na zawieszkach drewnianych'
    ],
    difficulty: 'Początkujący',
    type: 'Rodzinne',
    highlight: 'Świąteczna edycja',
    image: '/images/kids_christmas_workshop.jpg',
    ctaLabel: 'Zarezerwuj termin',
    ctaDisabledLabel: 'Zarezerwuj termin',
    dateTimes: [
      {
        date: 'Do ustalenia',
        time: 'Do ustalenia',
        display: 'Termin do uzgodnienia'
      }
    ]
  },
  {
    id: 'wooden-clock-workshop',
    title: 'Warsztaty z tworzenia zegarów',
    description:
      'Zapraszamy na kreatywne spotkanie, podczas którego uczestnicy ozdobią drewniany zegar w technice decoupage – łącząc sztukę, relaks i własny styl. Nie potrzeba żadnego doświadczenia – zapewniamy wszystkie materiały, inspiracje i krok po kroku przeprowadzimy przez proces tworzenia.',
    duration: '2 godziny',
    price: 90,
    priceDisplay: '90 zł',
    pricingDetails: [
      'Przy rezerwacji podaj liczbę osób (3-10)'
    ],
    difficulty: 'Początkujący',
    type: 'Decoupage',
    highlight: 'Małe grupy 3-10',
    image: '/images/gallery_flower_clock.jpg',
    ctaLabel: 'Zarezerwuj termin',
    ctaDisabledLabel: 'Zarezerwuj termin',
    dateTimes: [
      {
        date: 'Do ustalenia',
        time: 'Do ustalenia',
        display: 'Termin do uzgodnienia'
      }
    ]
  },
  {
    id: 'tea-box-workshop',
    title: 'Warsztaty z tworzenia pudełek na herbatę',
    description:
      'Zapraszamy na wyjątkowe warsztaty, podczas których uczestnicy ozdobią drewniane pudełko na herbatę w technice decoupage – własnoręcznie wykonany przedmiot, który stanie się ozdobą kuchni lub wyjątkowym prezentem dla bliskiej osoby. Nie potrzeba żadnych umiejętności plastycznych – zapewniamy wszystkie materiały, wzory i instruktaż krok po kroku. Zajęcia odbywają się w kameralnych grupach (3–10 osób), co gwarantuje indywidualne wsparcie i czas na rozwinięcie kreatywności.',
    duration: '2 godziny',
    price: 70,
    priceDisplay: '70-80 zł',
    pricingDetails: [
      '70 zł – pudełko z 4 przegródkami',
      '80 zł – pudełko z 6 przegródkami'
    ],
    difficulty: 'Początkujący',
    type: 'Rodzinne',
    highlight: 'Zarezerwuj termin',
    image: '/images/tea_box_workshop.jpg',
    ctaLabel: 'Zarezerwuj termin',
    ctaDisabledLabel: 'Zarezerwuj termin',
    dateTimes: [
      {
        date: 'Do ustalenia',
        time: 'Do ustalenia',
        display: 'Termin do uzgodnienia'
      }
    ]
  },
  {
    id: 'custom-workshop-request',
    title: 'Warsztaty na zamówienie - odkryj radość z tworzenia',
    description:
      'Podczas spotkania uczestnicy ozdobią drewniany przedmiot w technice decoupage, nadając mu niepowtarzalny styl i charakter. To doskonała okazja, by oderwać się od codzienności, zrelaksować przy twórczej pracy i stworzyć coś pięknego własnymi rękami.',
    duration: 'Elastyczny',
    price: 0,
    priceDisplay: 'Oferta indywidualna',
    difficulty: 'Początkujący',
    type: 'Na zamówienie',
    highlight: 'Zapytaj o ofertę',
    image: '/images/gallery_lavendar_box.jpg',
    ctaLabel: 'Zapytaj o ofertę',
    ctaDisabledLabel: 'Zapytaj o ofertę',
    dateTimes: [
      {
        date: 'Elastyczny harmonogram',
        time: 'Do ustalenia',
        display: 'Termin do uzgodnienia'
      }
    ]
  }
];

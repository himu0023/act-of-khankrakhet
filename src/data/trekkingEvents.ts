export type TrekDifficulty =
  | "Easy"
  | "Moderate"
  | "Difficult"
  | "Expedition"
  | "To be confirmed";

export type TrekItineraryOption = {
  duration: string;
  title: string;
  route: string;
  note?: string;
};

export type TrekkingEvent = {
  id: string;
  slug: string;
  name: string;
  image: string;
  imageAlt: string;
  location: string;
  shortDescription: string;
  fullDescription: string;
  route: string[];
  duration: string;
  difficulty: TrekDifficulty;
  altitude: string;
  date: string;
  price: string;
  itineraryOptions: TrekItineraryOption[];
  inclusions: string[];
  exclusions: string[];
  thingsToCarry: string[];
  eligibility: string;
  ageCriteria: string;
};

const pending = "To be confirmed by ACT OF KHANKRAKHET";

const pendingPackageDetails = {
  date: "Schedule to be confirmed",
  price: "Contact for pricing",
  inclusions: [pending],
  exclusions: [pending],
  thingsToCarry: [
    "Personal trekking clothing and footwear appropriate to the route",
    "Personal medication, if required",
    "Identification documents",
    "Final trek-specific packing list to be confirmed",
  ],
  eligibility: "Confirm suitability with the team before booking.",
  ageCriteria: "Age criteria to be confirmed.",
};

export const trekkingEvents: TrekkingEvent[] = [
  {
    id: "valley-of-flowers",
    slug: "valley-of-flowers",
    name: "Valley of Flowers",
    image:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Green Himalayan valley with mountain scenery",
    location: "Govindghat, Ghangaria, Chamoli, Uttarakhand",
    shortDescription:
      "Explore a Himalayan valley known for its alpine flowers and mountain landscapes. A destination for nature lovers, photography enthusiasts, and trekkers.",
    fullDescription:
      "The Valley of Flowers experience follows an approach through Govindghat and Ghangaria before entering the valley. The supplied material describes the destination as suitable for families, nature lovers, photography enthusiasts, and first-time Himalayan trekkers. The complete route, season, and trip arrangements must be confirmed before booking.",
    route: ["Govindghat", "Ghangaria", "Valley of Flowers"],
    duration: "Sample circuits: 2–4 days; full arrangements to be confirmed",
    difficulty: "To be confirmed",
    altitude: "Approximately 3,600 m (as supplied; verify before publication)",
    date: pendingPackageDetails.date,
    price: pendingPackageDetails.price,
    itineraryOptions: [
      {
        duration: "2 days",
        title: "Introductory approach circuit",
        route: "Govindghat → Ghangaria → return / overnight",
        note: "An approach circuit, not a complete Valley of Flowers visit.",
      },
      {
        duration: "3 days",
        title: "Valley of Flowers sample circuit",
        route:
          "Govindghat → Ghangaria → Valley of Flowers → Ghangaria → Govindghat",
      },
      {
        duration: "4 days",
        title: "Valley and Hemkund Sahib sample circuit",
        route:
          "Govindghat → Ghangaria → Valley of Flowers → Hemkund Sahib → Govindghat",
        note: "Route sequence and feasibility require local confirmation.",
      },
    ],
    ...pendingPackageDetails,
  },
  {
    id: "roopkund",
    slug: "roopkund",
    name: "Ali–Bedni Bugyal / Roopkund",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Trekkers walking through a Himalayan mountain landscape",
    location: "Lohajung, Wan, Bedni Bugyal, Uttarakhand",
    shortDescription:
      "A high-altitude trekking region associated with alpine meadows and challenging Himalayan terrain.",
    fullDescription:
      "The supplied material positions Ali–Bedni Bugyal and Roopkund for experienced trekkers interested in alpine meadows and high-altitude adventure. A short circuit should be presented as an introductory route only. The full Roopkund trek requires a longer expedition plan and route confirmation.",
    route: ["Lohajung", "Wan", "Bedni Bugyal", "Ali Bugyal", "Roopkund region"],
    duration: "Full trek duration to be confirmed; longer expedition required",
    difficulty: "Difficult",
    altitude: pending,
    date: pendingPackageDetails.date,
    price: pendingPackageDetails.price,
    itineraryOptions: [
      {
        duration: "4 days",
        title: "Introductory meadow circuit",
        route: "Lohajung → Wan / Bedni Bugyal → return",
        note: "Not the complete Roopkund trek.",
      },
      {
        duration: "6 days",
        title: "Roopkund sample route",
        route:
          "Lohajung → Wan → Bedni Bugyal → Patar Nachaniya → Roopkund → Gairoli Patal → Wan",
        note: "Route and duration require expert/local verification.",
      },
      {
        duration: "7 days",
        title: "Meadow circuit sample",
        route:
          "Lohajung → Gairoli Patal → Bedni Bugyal → Ali Bugyal → Lohajung",
        note: "Sample route from supplied material; confirm route details.",
      },
    ],
    ...pendingPackageDetails,
  },
  {
    id: "lord-curzon-pass",
    slug: "lord-curzon-pass",
    name: "Lord Curzon Pass",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "High Himalayan mountain pass and surrounding peaks",
    location: "Chamoli region, Uttarakhand",
    shortDescription:
      "A high-mountain adventure concept for trekkers interested in remote Himalayan landscapes and high passes.",
    fullDescription:
      "The supplied material positions this as a premium adventure and high-altitude trekking product. Some listed routes appear to describe different approaches or nearby trekking circuits. The actual route, destination identity, duration, and itinerary must be verified before this is marketed as a confirmed trek.",
    route: ["Base location and route to be confirmed"],
    duration: "Route-dependent; to be confirmed",
    difficulty: "Expedition",
    altitude: pending,
    date: pendingPackageDetails.date,
    price: pendingPackageDetails.price,
    itineraryOptions: [
      {
        duration: "1 day",
        title: "Base-station visit",
        route: "Base station — exact location to be confirmed",
        note: "A base-station visit, not a pass crossing.",
      },
      {
        duration: "2 days",
        title: "Approach sample",
        route: "Narayabagad → Poin approach → first campsite (Gyansain)",
        note: "Route names and feasibility require verification.",
      },
      {
        duration: "3 days",
        title: "Regional sample circuit",
        route:
          "Gyansain → Bhabhar/Khal → Khankrakhet region → Rajgarhi → Badhangarh → return",
        note: "Supplied route requires local and geographic verification.",
      },
      {
        duration: "4 days",
        title: "Alternative pass-area sample",
        route: "Gwaldam → Auli/Gorson → Kuari Pass → Khullara → Joshimath",
        note: "This is an alternative route sample; do not present as the same pass trek without verification.",
      },
    ],
    ...pendingPackageDetails,
  },
  {
    id: "satopanth",
    slug: "satopanth",
    name: "Satopanth",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Remote Himalayan mountain landscape",
    location: "Badrinath, Mana, Chamoli, Uttarakhand",
    shortDescription:
      "A high-altitude lake and glacier-region experience for experienced trekkers.",
    fullDescription:
      "Satopanth is described in the supplied material as an experience for experienced trekkers interested in sacred Himalayan lake and glacier scenery. A genuine expedition normally requires more time and acclimatization than a short approach circuit. Final route and itinerary details need confirmation.",
    route: ["Badrinath", "Mana", "Satopanth approach", "Satopanth Tal"],
    duration: "Expedition duration to be confirmed",
    difficulty: "Expedition",
    altitude: pending,
    date: pendingPackageDetails.date,
    price: pendingPackageDetails.price,
    itineraryOptions: [
      {
        duration: "2 days",
        title: "Approach sample",
        route: "Badrinath → Mana → short trail / approach → Badrinath",
        note: "Not the complete Satopanth expedition.",
      },
      {
        duration: "3 days",
        title: "Approach circuit",
        route: "Badrinath → Mana → Satopanth approach → return",
        note: "Not the complete Satopanth expedition.",
      },
      {
        duration: "4 days",
        title: "Lake approach sample",
        route: "Badrinath → Mana → Satopanth Tal → return toward Badrinath",
        note: "Requires route, acclimatization, and feasibility confirmation.",
      },
    ],
    ...pendingPackageDetails,
  },
  {
    id: "dronagiri",
    slug: "dronagiri",
    name: "Dronagiri",
    image:
      "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Mountain village and Himalayan landscape",
    location: "Joshimath, Jumma, Dronagiri, Uttarakhand",
    shortDescription:
      "Explore a remote mountain village setting with an emphasis on landscape, culture, and photography.",
    fullDescription:
      "The supplied material presents Dronagiri as a destination for visitors interested in remote villages, mountain culture, mythology, and photography. Exact access, route conditions, and itinerary arrangements must be confirmed with local operators.",
    route: ["Joshimath", "Jumma", "Dronagiri"],
    duration: "Sample circuits: 2–4 days",
    difficulty: "To be confirmed",
    altitude: pending,
    date: pendingPackageDetails.date,
    price: pendingPackageDetails.price,
    itineraryOptions: [
      {
        duration: "2 days",
        title: "Village visit sample",
        route: "Joshimath → Dronagiri → Joshimath",
      },
      {
        duration: "3 days",
        title: "Approach sample",
        route: "Joshimath → Jumma → Dronagiri → return",
      },
      {
        duration: "4 days",
        title: "Village exploration sample",
        route: "Joshimath → Jumma → Dronagiri → local exploration → Joshimath",
      },
    ],
    ...pendingPackageDetails,
  },
  {
    id: "kakbhushandi-track",
    slug: "kakbhushandi-track",
    name: "Kakbhushandi Track",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Remote high-altitude Himalayan terrain",
    location: "Badrinath / Joshimath region, Uttarakhand",
    shortDescription:
      "A remote alpine trekking concept intended for experienced adventure travellers.",
    fullDescription:
      "The supplied material describes Kakbhushandi as a difficult, expedition-style experience in remote alpine terrain. The short circuits listed are approach or exploration samples only. A complete trek should not be sold as a short beginner itinerary.",
    route: ["Approach location to be confirmed", "Kakbhushandi region"],
    duration: "Expedition duration to be confirmed",
    difficulty: "Expedition",
    altitude: pending,
    date: pendingPackageDetails.date,
    price: pendingPackageDetails.price,
    itineraryOptions: [
      {
        duration: "2 days",
        title: "Trail exploration sample",
        route: "Joshimath / Badrinath approach → trail exploration → return",
        note: "Approach sample only.",
      },
      {
        duration: "3 days",
        title: "High-altitude approach sample",
        route:
          "Badrinath → Kakbhushandi approach → high-altitude exploration → Badrinath",
        note: "Approach sample only.",
      },
      {
        duration: "4 days",
        title: "Regional approach sample",
        route:
          "Badrinath → trail approach → Kakbhushandi region → return",
        note: "Not necessarily the complete trek.",
      },
    ],
    ...pendingPackageDetails,
  },
  {
    id: "sapt-kund",
    slug: "sapt-kund",
    name: "Sapt Kund",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Mountain lake and alpine landscape",
    location: "Uttarakhand; exact base to be confirmed",
    shortDescription:
      "A high-altitude lake trekking concept for experienced trekkers seeking solitude and alpine scenery.",
    fullDescription:
      "The supplied material positions Sapt Kund for experienced trekkers. The base village, route, duration, and exact itinerary are not confirmed in the provided information. Short options should be presented as approach samples, not complete expeditions.",
    route: ["Base village to be confirmed", "Sapt Kund approach"],
    duration: "Expedition duration to be confirmed",
    difficulty: "Difficult",
    altitude: pending,
    date: pendingPackageDetails.date,
    price: pendingPackageDetails.price,
    itineraryOptions: [
      {
        duration: "2 days",
        title: "Approach sample",
        route: "Approach trek and return",
        note: "Exact route to be confirmed.",
      },
      {
        duration: "3 days",
        title: "Lake approach sample",
        route: "Base village → Sapt Kund approach → lake → return",
        note: "Exact base and route to be confirmed.",
      },
      {
        duration: "4 days",
        title: "Lake exploration sample",
        route: "Base → campsite → Sapt Kund → exploration → return",
        note: "Route and feasibility to be confirmed.",
      },
    ],
    ...pendingPackageDetails,
  },
  {
    id: "panpatta-lake",
    slug: "panpatta-lake",
    name: "Panpatta Lake",
    image:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Remote Himalayan lake and mountain scenery",
    location: "Uttarakhand; exact base to be confirmed",
    shortDescription:
      "A remote lake experience intended for adventure travellers interested in Himalayan landscapes.",
    fullDescription:
      "The supplied material describes Panpatta Lake as a remote Himalayan lake experience. The selected route may require additional expedition days. Exact access, route, difficulty, and trip arrangements need confirmation before publication as a bookable event.",
    route: ["Base location to be confirmed", "Panpatta Lake"],
    duration: "Expedition duration to be confirmed",
    difficulty: "Expedition",
    altitude: pending,
    date: pendingPackageDetails.date,
    price: pendingPackageDetails.price,
    itineraryOptions: [
      {
        duration: "2 days",
        title: "Short excursion sample",
        route: "Approach / short excursion",
        note: "Exact route to be confirmed.",
      },
      {
        duration: "3 days",
        title: "Lake visit sample",
        route: "Base → Panpatta Lake → return",
        note: "Exact base and route to be confirmed.",
      },
      {
        duration: "4 days",
        title: "Lake and surroundings sample",
        route: "Base → campsite → lake → surrounding exploration → return",
        note: "Route and feasibility to be confirmed.",
      },
    ],
    ...pendingPackageDetails,
  },
  {
    id: "rudranath-kalpeshwar",
    slug: "rudranath-kalpeshwar",
    name: "Rudranath–Kalpeshwar",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Temple architecture in a Himalayan pilgrimage setting",
    location: "Sagar, Gopeshwar, Urgam, Chamoli, Uttarakhand",
    shortDescription:
      "A spiritual trekking circuit combining pilgrimage destinations and Himalayan landscapes.",
    fullDescription:
      "The supplied material describes Rudranath as one of the Panch Kedar and positions Rudranath–Kalpeshwar as a spiritual trekking circuit. The itinerary options below are samples. Route sequence, travel time, and temple access should be confirmed before being offered as a package.",
    route: ["Gopeshwar", "Sagar", "Rudranath", "Kalpeshwar / Urgam"],
    duration: "Sample circuits: 2–4 days; full circuit to be confirmed",
    difficulty: "To be confirmed",
    altitude: pending,
    date: pendingPackageDetails.date,
    price: pendingPackageDetails.price,
    itineraryOptions: [
      {
        duration: "2 days",
        title: "Rudranath sample",
        route: "Sagar → Rudranath → return / overnight",
      },
      {
        duration: "3 days",
        title: "Rudranath approach circuit",
        route: "Gopeshwar → Sagar → Rudranath → return",
      },
      {
        duration: "4 days",
        title: "Spiritual trek circuit sample",
        route: "Gopeshwar → Sagar → Rudranath → Kalpeshwar / Urgam → return",
        note: "Route sequence and feasibility to be confirmed.",
      },
    ],
    ...pendingPackageDetails,
  },
  {
    id: "madhmaheshwar-nandikund",
    slug: "madhmaheshwar-nandikund",
    name: "Madhmaheshwar–Nandikund",
    image:
      "https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Himalayan mountain landscape near a pilgrimage route",
    location: "Ransi, Madhmaheshwar, Uttarakhand",
    shortDescription:
      "A pilgrimage and trekking experience with mountain scenery and an optional high-altitude lake approach.",
    fullDescription:
      "The supplied material positions Madhmaheshwar–Nandikund as a pilgrimage and Himalayan scenery experience. Madhmaheshwar is described as one of the Panch Kedar. Nandikund is described as a difficult high-altitude lake trek. The short itinerary options are samples and require local confirmation.",
    route: ["Ransi", "Madhmaheshwar", "Budha Madhmaheshwar / Nandikund approach"],
    duration: "Sample circuits: 2–4 days; full arrangements to be confirmed",
    difficulty: "Difficult",
    altitude: pending,
    date: pendingPackageDetails.date,
    price: pendingPackageDetails.price,
    itineraryOptions: [
      {
        duration: "2 days",
        title: "Madhmaheshwar sample",
        route: "Ransi / Uniana → Madhmaheshwar → return / overnight",
      },
      {
        duration: "3 days",
        title: "Pilgrimage trek sample",
        route: "Ransi → Gaundhar / Bantoli → Madhmaheshwar → return",
      },
      {
        duration: "4 days",
        title: "Nandikund approach sample",
        route:
          "Ransi → Madhmaheshwar → Budha Madhmaheshwar / Nandikund approach → return",
        note: "Nandikund route and feasibility require confirmation.",
      },
    ],
    ...pendingPackageDetails,
  },
  {
    id: "pindari-glacier",
    slug: "pindari-glacier",
    name: "Pindari Glacier",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Trekking route through a Himalayan mountain valley",
    location: "Loharkhet, Dhakuri, Khati, Dwali, Uttarakhand",
    shortDescription:
      "A glacier-region trek through Himalayan villages and mountain landscapes. Short circuits are introductory approaches.",
    fullDescription:
      "The supplied material positions Pindari Glacier for beginner or intermediate trekking groups and families with reasonable fitness. It also notes that the full glacier trek is longer than a short 2–4 day itinerary. The full route and package details should be confirmed before publication.",
    route: [
      "Loharkhet",
      "Dhakuri",
      "Khati",
      "Dwali",
      "Phurkiya",
      "Pindari Glacier",
    ],
    duration: "Full glacier trek: approximately 7–8 days as supplied",
    difficulty: "To be confirmed",
    altitude: pending,
    date: pendingPackageDetails.date,
    price: pendingPackageDetails.price,
    itineraryOptions: [
      {
        duration: "2 days",
        title: "Introductory route",
        route: "Loharkhet → Dhakuri → return",
        note: "Not the full glacier trek.",
      },
      {
        duration: "3 days",
        title: "Village approach sample",
        route: "Loharkhet → Dhakuri → Khati → return",
        note: "Not the full glacier trek.",
      },
      {
        duration: "4 days",
        title: "Extended approach sample",
        route: "Loharkhet → Dhakuri → Khati → Dwali → return / continue",
        note: "Not the full glacier trek.",
      },
    ],
    ...pendingPackageDetails,
  },
  {
    id: "all-kedars-badris",
    slug: "all-kedars-badris",
    name: "All Kedars & Badris",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1400&q=85",
    imageAlt: "Himalayan temple and pilgrimage landscape",
    location: "Uttarakhand pilgrimage circuit",
    shortDescription:
      "A pilgrimage tourism concept combining sacred destinations, trekking approaches, and Himalayan sightseeing.",
    fullDescription:
      "The supplied material presents All Kedars & Badris as a pilgrimage and adventure circuit. It lists the Panch Kedar as Kedarnath, Tungnath, Rudranath, Madhyamaheshwar, and Kalpeshwar. A full circuit should be planned as a longer pilgrimage rather than marketed as a complete 2–4 day package.",
    route: [
      "Rishikesh / Haridwar",
      "Ukhimath",
      "Tungnath / Chopta",
      "Guptkashi",
      "Badrinath / Joshimath",
    ],
    duration: "Full pilgrimage circuit: longer duration to be confirmed",
    difficulty: "To be confirmed",
    altitude: pending,
    date: pendingPackageDetails.date,
    price: pendingPackageDetails.price,
    itineraryOptions: [
      {
        duration: "2 days",
        title: "Mini pilgrimage circuit",
        route: "Rishikesh / Haridwar → Ukhimath → Tungnath / Chopta → return",
        note: "A mini circuit, not the complete All Kedars & Badris pilgrimage.",
      },
      {
        duration: "3 days",
        title: "Pilgrimage sample",
        route:
          "Rishikesh → Guptkashi / Ukhimath → Tungnath → Madhmaheshwar approach → return",
        note: "Route and feasibility to be confirmed.",
      },
      {
        duration: "4 days",
        title: "Regional pilgrimage sample",
        route:
          "Rishikesh → Ukhimath → Tungnath / Chopta → Guptkashi → Badrinath / Joshimath",
        note: "Not the full Panch Kedar / Badrinath circuit.",
      },
    ],
    ...pendingPackageDetails,
  },
];
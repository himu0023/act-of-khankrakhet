export const site = {
  name: "ACT OF KHANKRAKHET",
  mission: "MISSION 120",
  tagline: "Find Your Wild. Discover Uttarakhand.",

  description:
    "Discover adventure, outdoor learning, and rural experiences rooted in Uttarakhand.",

  phones: [
    {
      label: "Mobile 1",
      number: "9258226771",
    },
    {
      label: "Mobile 2",
      number: "9758683350",
    },
  ],

  location:
    "Near Petrol Pump, Simli, Karnaprayag, Chamoli, Uttarakhand",
} as const;

export const navigation = [
  { label: "Home", path: "/" },
  { label: "Adventures", path: "/adventures" },
  { label: "Outdoor Learning", path: "/outdoor-learning" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
] as const;
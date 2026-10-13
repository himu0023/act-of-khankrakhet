export type Activity = {
  id: string;
  title: string;
  category: "Land" | "Water" | "Culture";
  eyebrow: string;
  description: string;
  image: string;
  alt: string;
};

export const activities: Activity[] = [
  {
    id: "trekking",
    title: "Trekking",
    category: "Land",
    eyebrow: "Explore the mountains",
    description:
      "Discover mountain landscapes and explore trekking experiences rooted in Uttarakhand.",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1000&q=85",
    alt: "Hikers exploring a trail through a mountain landscape",
  },
  {
    id: "hiking",
    title: "Hiking",
    category: "Land",
    eyebrow: "Find your trail",
    description:
      "Experience the outdoors on foot and discover the natural landscapes of the region.",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1000&q=85",
    alt: "Outdoor hikers walking along a scenic trail",
  },
  {
    id: "rafting",
    title: "Rafting",
    category: "Water",
    eyebrow: "Follow the current",
    description:
      "Explore advertised river adventure experiences and enquire about arrangements.",
    image:
      "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=1000&q=85",
    alt: "Whitewater rafting on a flowing river",
  },
  {
    id: "kayaking",
    title: "Kayaking",
    category: "Water",
    eyebrow: "Get on the water",
    description:
      "Discover kayaking as an advertised outdoor adventure activity.",
    image:
      "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?auto=format&fit=crop&w=1000&q=85",
    alt: "Outdoor adventure in a natural waterside setting",
  },
  {
    id: "outdoor-rock-climbing",
    title: "Outdoor Rock Climbing",
    category: "Land",
    eyebrow: "Reach higher",
    description:
      "Explore outdoor rock climbing and enquire about the arrangements for this activity.",
    image:
      "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=1000&q=85",
    alt: "Climber ascending a natural rock face",
  },
  {
    id: "heritage-tourism",
    title: "Heritage Tourism",
    category: "Culture",
    eyebrow: "Discover local heritage",
    description:
      "Explore heritage tourism and enquire about cultural experiences associated with the region.",
    image:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=85",
    alt: "Traditional architectural details in a built environment",
  },
  {
    id: "religious-tourism",
    title: "Religious Tourism",
    category: "Culture",
    eyebrow: "Explore places of faith",
    description:
      "Enquire about religious tourism experiences and arrangements in Uttarakhand.",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=85",
    alt: "Indian temple architecture",
  },
];
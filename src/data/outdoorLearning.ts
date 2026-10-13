export type LearningActivity = {
  id: string;
  title: string;
  description: string;
  categoryId: string;
};

export type LearningCategory = {
  id: string;
  title: string;
  intro: string;
  eyebrow: string;
  image: string;
  imageAlt: string;
  activities: LearningActivity[];
};

export const learningCategories: LearningCategory[] = [
  {
    id: "wilderness-skills",
    title: "Wilderness Skills",
    eyebrow: "Build practical outdoor skills",
    intro:
      "Explore practical skills for navigating and setting up in outdoor environments.",
    image:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Natural woodland landscape with a trail through the trees",
    activities: [
      {
        id: "navigation",
        title: "Navigation",
        description:
          "Explore navigation skills for finding your way through outdoor environments.",
        categoryId: "wilderness-skills",
      },
      {
        id: "survival-training",
        title: "Survival Training",
        description:
          "Discover practical wilderness survival skills in an outdoor learning setting.",
        categoryId: "wilderness-skills",
      },
      {
        id: "route-marking",
        title: "Route Marking",
        description:
          "Learn about marking routes and making outdoor trails easier to follow.",
        categoryId: "wilderness-skills",
      },
      {
        id: "shelter-making",
        title: "Shelter Making",
        description:
          "Explore the fundamentals of creating a simple shelter in an outdoor environment.",
        categoryId: "wilderness-skills",
      },
      {
        id: "tent-pitching",
        title: "Tent Pitching",
        description:
          "Learn the basics of pitching a tent as part of an outdoor experience.",
        categoryId: "wilderness-skills",
      },
    ],
  },
  {
    id: "safety-preparedness",
    title: "Safety & Preparedness",
    eyebrow: "Learn to prepare",
    intro:
      "Explore learning activities focused on first aid and disaster preparedness.",
    image:
      "https://images.unsplash.com/photo-1755718669693-5e5e9ce53e17?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    imageAlt: "Outdoor group activity in a natural environment",
    activities: [
      {
        id: "first-aid",
        title: "First Aid",
        description:
          "Explore first-aid learning as part of outdoor safety and preparedness.",
        categoryId: "safety-preparedness",
      },
      {
        id: "disaster-management-training",
        title: "Disaster Management Training",
        description:
          "Discover disaster management training focused on preparedness and response.",
        categoryId: "safety-preparedness",
      },
    ],
  },
  {
    id: "physical-team-activities",
    title: "Physical & Team Activities",
    eyebrow: "Move, collaborate, discover",
    intro:
      "Take part in activities centred on physical movement, recreation and teamwork.",
    image:
      "https://images.unsplash.com/photo-1522163182402-834f871fd851?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Person climbing a natural rock face",
    activities: [
      {
        id: "basic-rock-climbing-bouldering",
        title: "Basic Rock Climbing & Bouldering",
        description:
          "Explore introductory rock-climbing and bouldering activities in an outdoor setting.",
        categoryId: "physical-team-activities",
      },
      {
        id: "fitness-camps",
        title: "Fitness Camps",
        description:
          "Discover outdoor fitness activities designed around movement and participation.",
        categoryId: "physical-team-activities",
      },
      {
        id: "recreation-team-building-games",
        title: "Recreation & Team-Building Games",
        description:
          "Explore recreational games and activities that encourage group participation.",
        categoryId: "physical-team-activities",
      },
    ],
  },
  {
    id: "mindfulness-nature",
    title: "Mindfulness & Nature",
    eyebrow: "Slow down and reconnect",
    intro:
      "Explore activities that bring together mindfulness, outdoor settings and nature.",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1200&q=85",
    imageAlt: "Person practising meditation in a peaceful setting",
    activities: [
      {
        id: "yoga",
        title: "Yoga",
        description:
          "Discover yoga as part of an outdoor learning and wellbeing experience.",
        categoryId: "mindfulness-nature",
      },
      {
        id: "meditation",
        title: "Meditation",
        description:
          "Explore meditation in a setting that encourages stillness and attention to nature.",
        categoryId: "mindfulness-nature",
      },
      {
        id: "wildlife-photography",
        title: "Wildlife Photography",
        description:
          "Explore observing and photographing wildlife in its natural surroundings.",
        categoryId: "mindfulness-nature",
      },
    ],
  },
];

export const allLearningActivities = learningCategories.flatMap(
  (category) => category.activities,
);
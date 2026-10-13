import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import { site } from "../data/site";
import {
  featuredAdventures,
  learningCategories,
} from "../data/homeContent";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#C84A23]">
      {children}
    </p>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl">
      <Eyebrow>{eyebrow}</Eyebrow>

      <h2 className="mt-4 font-serif text-4xl leading-tight text-[#203C2D] sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-xl text-sm leading-7 text-[#292B26]/75 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function AdventureCard({
  activity,
}: {
  activity: (typeof featuredAdventures)[number];
}) {
  return (
    <Link
      to={`/contact?activity=${encodeURIComponent(activity.id)}`}
      className="group block"
      aria-label={`Enquire about ${activity.title}`}
    >
      <div className="relative aspect-[4/5] overflow-hidden bg-[#203C2D] sm:aspect-[3/4]">
        <img
          src={activity.image}
          alt={activity.alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04] motion-reduce:transition-none"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#15251B]/90 via-[#15251B]/10 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
          <p className="text-[10px] font-bold tracking-[0.2em] text-[#E6B49B]">
            {activity.category}
          </p>

          <h3 className="mt-3 font-serif text-2xl text-white sm:text-3xl">
            {activity.title}
          </h3>

          <p className="mt-3 max-w-sm text-sm leading-6 text-white/80">
            {activity.description}
          </p>

          <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
            Enquire about this activity
            <ArrowUpRight
              size={16}
              aria-hidden="true"
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate min-h-[650px] overflow-hidden bg-[#203C2D] sm:min-h-[740px] lg:min-h-[790px]">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2200&q=90"
          alt="Dramatic mountain peaks rising above the surrounding landscape"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#14251B]/90 via-[#14251B]/55 to-[#14251B]/15" />

        <div className="mx-auto flex min-h-[650px] max-w-7xl flex-col justify-center px-5 py-24 sm:min-h-[740px] sm:px-8 lg:min-h-[790px] lg:px-12">
          <div className="max-w-4xl">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D58A68]" />
              <Eyebrow>Mission 120 · Uttarakhand, India</Eyebrow>
            </div>

            <h1 className="max-w-4xl font-serif text-5xl leading-[1.08] tracking-tight text-[#F4EFE4] sm:text-7xl lg:text-[88px]">
              Find Your Wild.
              <br />
              <span className="font-normal italic text-[#D9C7A8]">
                Discover Uttarakhand.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/85 sm:text-lg">
              Adventure, outdoor learning, and meaningful experiences
              rooted in the landscapes and culture of Uttarakhand.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/adventures"
                className="inline-flex min-h-12 items-center justify-center gap-3 bg-[#C84A23] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#A93B1B]"
              >
                Explore Adventures
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>

              <Link
                to="/outdoor-learning"
                className="inline-flex min-h-12 items-center justify-center gap-3 border border-white/60 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Outdoor Learning
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <a
            href="#experiences"
            className="mt-16 inline-flex w-fit items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75 hover:text-white"
          >
            Discover our experiences
            <ArrowDown size={15} aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-[#F4EFE4] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Eyebrow>Beyond the ordinary</Eyebrow>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#203C2D] sm:text-5xl lg:text-6xl">
              More than a destination.
              <br />
              <span className="italic">An experience.</span>
            </h2>
          </div>

          <div className="flex flex-col justify-center lg:col-span-6 lg:col-start-7">
            <p className="text-base leading-8 text-[#292B26]/80">
              Uttarakhand offers a remarkable setting for adventure,
              learning, and discovery. ACT OF KHANKRAKHET brings these
              themes together through an initiative focused on adventure
              tourism, outdoor learning, and rural experiences.
            </p>

            <Link
              to="/about"
              className="mt-7 inline-flex w-fit items-center gap-3 border-b border-[#C84A23] pb-2 text-sm font-semibold text-[#203C2D] hover:text-[#C84A23]"
            >
              Discover our initiative
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED ADVENTURES */}
      <section
        id="experiences"
        className="bg-[#F4EFE4] px-5 pb-24 sm:px-8 lg:px-12 lg:pb-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Find your next experience"
              title="The outdoors is calling."
              description="Explore advertised adventures across the land, water, and rock."
            />

            <Link
              to="/adventures"
              className="inline-flex w-fit shrink-0 items-center gap-3 border-b border-[#C84A23] pb-2 text-sm font-semibold text-[#203C2D] hover:text-[#C84A23]"
            >
              View all adventures
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredAdventures.map((activity) => (
              <AdventureCard key={activity.id} activity={activity} />
            ))}
          </div>

          <p className="mt-5 text-xs leading-6 text-[#817D63]">
            Representative photography. Contact the organization to
            confirm current offerings, availability, and arrangements.
          </p>
        </div>
      </section>

      {/* OUTDOOR LEARNING */}
      <section className="bg-[#203C2D] px-5 py-20 text-[#F4EFE4] sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>Learn beyond the classroom</Eyebrow>

            <h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Skills for the outdoors.
              <br />
              <span className="italic text-[#D9C7A8]">
                Lessons for life.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-white/75 sm:text-base">
              Discover outdoor learning themes that bring together
              practical skills, preparedness, physical activity,
              teamwork, and a closer connection with nature.
            </p>

            <Link
              to="/outdoor-learning"
              className="mt-8 inline-flex items-center gap-3 bg-[#C84A23] px-6 py-4 text-sm font-semibold text-white hover:bg-[#A93B1B]"
            >
              Explore Outdoor Learning
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="border-t border-white/20">
            {learningCategories.map((category) => (
              <div
                key={category.number}
                className="grid grid-cols-[42px_1fr] gap-4 border-b border-white/20 py-6 sm:grid-cols-[56px_1fr] sm:gap-6 sm:py-7"
              >
                <span className="pt-1 font-serif text-xl text-[#D9C7A8]">
                  {category.number}
                </span>

                <div>
                  <h3 className="font-serif text-2xl">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm leading-7 text-white/65">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RURAL TOURISM */}
      <section className="bg-[#E9E1D2] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=1200&q=85"
              alt="Rural landscape with natural scenery and vegetation"
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />

            <div className="absolute -bottom-4 -right-3 bg-[#C84A23] px-5 py-4 text-white sm:-right-5 sm:px-7 sm:py-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em]">
                Rooted in place
              </p>
              <p className="mt-1 font-serif text-xl">
                Uttarakhand
              </p>
            </div>
          </div>

          <div className="pt-5 lg:pl-4">
            <Eyebrow>People · Place · Culture</Eyebrow>

            <h2 className="mt-5 font-serif text-4xl leading-tight text-[#203C2D] sm:text-5xl lg:text-6xl">
              Discover the stories beyond the trail.
            </h2>

            <p className="mt-6 text-sm leading-8 text-[#292B26]/80 sm:text-base">
              Travel can be about more than the journey. Rural tourism
              and local-product promotion create opportunities to
              explore the culture, landscapes, and experiences associated
              with Uttarakhand.
            </p>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-3 border-b border-[#C84A23] pb-2 text-sm font-semibold text-[#203C2D] hover:text-[#C84A23]"
            >
              Learn about our initiative
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>

            <p className="mt-5 text-xs leading-6 text-[#817D63]">
              Image is representative and does not claim to depict a
              participating village or an actual project location.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL INQUIRY CTA */}
      <section className="bg-[#F4EFE4] px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl border-t border-[#203C2D]/20 pt-12 sm:pt-16">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <Eyebrow>Your next chapter starts here</Eyebrow>

              <h2 className="mt-5 max-w-4xl font-serif text-4xl leading-tight text-[#203C2D] sm:text-6xl lg:text-7xl">
                Ready to find your wild?
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#292B26]/75 sm:text-base">
                Contact us to ask about advertised activities, schedules,
                pricing, and group arrangements.
              </p>
            </div>

            <div className="lg:col-span-4 lg:justify-self-end">
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-center gap-3 bg-[#C84A23] px-7 py-4 text-sm font-semibold text-white hover:bg-[#A93B1B] sm:w-auto"
              >
                Enquire Now
                <ArrowUpRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-[#203C2D]/15 pt-6 text-xs text-[#817D63] sm:flex-row sm:items-center sm:justify-between">
            <span>{site.mission} · {site.name}</span>
            <span>Adventure & Outdoor Learning · Uttarakhand</span>
          </div>
        </div>
      </section>
    </>
  );
}
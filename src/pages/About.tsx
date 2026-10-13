import { ArrowDown, ArrowUpRight, Compass, Mountain, Sprout } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "../data/site";

const principles = [
  {
    number: "01",
    title: "Adventure",
    description:
      "Explore outdoor experiences that invite people to discover the landscapes and natural settings of Uttarakhand.",
    icon: Mountain,
    href: "/adventures",
    linkLabel: "Explore adventures",
  },
  {
    number: "02",
    title: "Outdoor Learning",
    description:
      "Discover activities centred on wilderness skills, preparedness, physical participation, teamwork and nature.",
    icon: Compass,
    href: "/outdoor-learning",
    linkLabel: "Discover outdoor learning",
  },
  {
    number: "03",
    title: "Rural Tourism",
    description:
      "Explore the initiative's rural tourism focus alongside its advertised adventure and outdoor learning experiences.",
    icon: Sprout,
    href: "/contact",
    linkLabel: "Make an enquiry",
  },
];

export default function About() {
  return (
    <main className="bg-[#F4EFE4] text-[#292B26]">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#203C2D] text-[#F4EFE4]">
        <div className="absolute inset-0 -z-20">
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=90"
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            className="h-full w-full object-cover opacity-40"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#15251B]/95 via-[#203C2D]/70 to-[#203C2D]/25" />

        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#E6B49B]">
            Our initiative
          </p>

          <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
            Rooted in
            <br />
            Uttarakhand.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            {site.description} Our focus brings together adventure, outdoor
            learning, and rural tourism.
          </p>

          <a
            href="#our-focus"
            className="mt-9 inline-flex items-center gap-3 text-sm font-semibold text-white underline decoration-white/50 underline-offset-8 hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Discover our focus
            <ArrowDown size={17} aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-12">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C84A23]">
            About {site.name}
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#203C2D] sm:text-5xl">
            A connection to place, experience and the outdoors.
          </h2>
        </div>

        <div className="lg:pt-8">
          <p className="text-base leading-8 text-[#292B26]/85">
            ACT OF KHANKRAKHET brings together a focus on adventure, outdoor
            learning and rural tourism in Uttarakhand. These areas form the
            foundation of the initiative and shape the experiences visitors
            can explore through this website.
          </p>

          <p className="mt-5 text-base leading-8 text-[#292B26]/85">
            From outdoor adventure activities to practical learning and
            nature-based experiences, the website provides an introduction
            to the advertised offerings and a direct way to enquire about
            them.
          </p>
        </div>
      </section>

      {/* Focus areas */}
      <section
        id="our-focus"
        className="scroll-mt-24 border-y border-[#B5A58C]/50 bg-[#EEE6D8]"
      >
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C84A23]">
              What shapes our work
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#203C2D] sm:text-6xl">
              Three connected areas of focus.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#292B26]/80">
              Explore the three areas that bring the initiative’s advertised
              experiences together.
            </p>
          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <article
                  key={principle.number}
                  className="flex h-full flex-col border-t border-[#B5A58C] pt-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-lg text-[#817D63]">
                      {principle.number}
                    </span>

                    <Icon
                      size={25}
                      strokeWidth={1.5}
                      aria-hidden="true"
                      className="text-[#C84A23]"
                    />
                  </div>

                  <h3 className="mt-7 font-serif text-3xl text-[#203C2D]">
                    {principle.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-[#292B26]/80">
                    {principle.description}
                  </p>

                  <Link
                    to={principle.href}
                    className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#203C2D] underline decoration-[#C84A23]/60 underline-offset-4 transition-colors hover:text-[#C84A23] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C84A23] motion-reduce:transition-none"
                  >
                    {principle.linkLabel}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location and context */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-12">
        <div className="overflow-hidden bg-[#203C2D]">
          <img
            src="https://plus.unsplash.com/premium_photo-1697729439457-85d4b9d3a2cb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt="Mountain landscape surrounded by open natural scenery"
            loading="lazy"
            decoding="async"
            className="aspect-[5/4] h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C84A23]">
            Our location
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#203C2D] sm:text-5xl">
            Based in the Chamoli region.
          </h2>

          <p className="mt-5 text-base leading-8 text-[#292B26]/80">
            The initiative lists its location in Simli, Karnaprayag, Chamoli,
            Uttarakhand. This regional setting provides context for its focus
            on adventure, outdoor learning and rural tourism.
          </p>

          <div className="mt-7 border-l-2 border-[#C84A23] pl-5">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#817D63]">
              Listed address
            </p>

            <address className="mt-2 text-base not-italic leading-7 text-[#203C2D]">
              {site.location}
            </address>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#203C2D] text-[#F4EFE4]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E6B49B]">
              Start a conversation
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-6xl">
              Interested in exploring Uttarakhand with us?
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
              Get in touch to enquire about the advertised adventure and
              outdoor learning activities.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex w-fit shrink-0 items-center gap-3 bg-[#C84A23] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#A93C1D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
          >
            Contact the team
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
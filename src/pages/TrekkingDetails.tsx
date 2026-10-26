import {
  ArrowLeft,
  ArrowUpRight,
  Backpack,
  CalendarDays,
  Clock3,
  MapPin,
  Mountain,
} from "lucide-react";
import type { ReactNode } from "react";
import { Link, useParams } from "react-router-dom";
import { trekkingEvents } from "../data/trekkingEvents";

export default function TrekkingDetail() {
  const { slug } = useParams<{ slug: string }>();

  const trek = trekkingEvents.find((event) => event.slug === slug);

  if (!trek) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-[#F4EFE4] px-5 py-20 text-[#292B26]">
        <div className="max-w-lg text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C84A23]">
            Trek not found
          </p>

          <h1 className="mt-4 font-serif text-4xl text-[#203C2D]">
            This destination is unavailable.
          </h1>

          <p className="mt-4 text-sm leading-7 text-[#292B26]/75">
            The trekking destination may have moved or the address may be
            incorrect.
          </p>

          <Link
            to="/adventures/trekking"
            className="mt-7 inline-flex items-center gap-2 font-semibold text-[#203C2D] underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C84A23]"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            Back to trekking catalogue
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#F4EFE4] text-[#292B26]">
      {/* Trek hero */}
      <section className="relative isolate min-h-[55vh] overflow-hidden bg-[#203C2D] text-white sm:min-h-[65vh]">
        <div className="absolute inset-0 -z-20">
          <img
            src={trek.image}
            alt={trek.imageAlt}
            fetchPriority="high"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#15251B]/95 via-[#15251B]/50 to-[#15251B]/15" />

        <div className="mx-auto flex min-h-[55vh] max-w-7xl flex-col justify-end px-5 pb-12 pt-24 sm:min-h-[65vh] sm:px-8 sm:pb-16 lg:px-12">
          <Link
            to="/adventures/trekking"
            className="mb-8 inline-flex w-fit items-center gap-2 text-sm font-medium text-white/90 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            All trekking destinations
          </Link>

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#E6B49B]">
            ACT OF KHANKRAKHET · TREKKING
          </p>

          <h1 className="mt-4 max-w-5xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
            {trek.name}
          </h1>

          <p className="mt-5 flex max-w-3xl items-start gap-2 text-sm leading-7 text-white/85 sm:text-base">
            <MapPin
              size={18}
              aria-hidden="true"
              className="mt-1 shrink-0"
            />
            {trek.location}
          </p>
        </div>
      </section>

      {/* Summary information */}
      <section className="border-b border-[#B5A58C]/50">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-[#B5A58C]/50 sm:grid-cols-4">
          <SummaryItem
            icon={<Clock3 size={18} aria-hidden="true" />}
            label="Duration"
            value={trek.duration}
          />

          <SummaryItem
            icon={<Mountain size={18} aria-hidden="true" />}
            label="Difficulty"
            value={trek.difficulty}
          />

          <SummaryItem
            icon={<CalendarDays size={18} aria-hidden="true" />}
            label="Date"
            value={trek.date}
          />

          <SummaryItem
            icon={<ArrowUpRight size={18} aria-hidden="true" />}
            label="Registration"
            value={trek.price}
          />
        </div>
      </section>

      {/* Main detail content */}
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16 lg:px-12">
        <div className="min-w-0 space-y-14">
          {/* Overview */}
          <section>
            <SectionEyebrow>About the trek</SectionEyebrow>

            <h2 className="mt-3 font-serif text-3xl leading-tight text-[#203C2D] sm:text-4xl">
              Discover the journey.
            </h2>

            <p className="mt-5 max-w-3xl text-base leading-8 text-[#292B26]/80">
              {trek.fullDescription}
            </p>
          </section>

          {/* Route */}
          <section>
            <SectionEyebrow>Route details</SectionEyebrow>

            <h2 className="mt-3 font-serif text-3xl text-[#203C2D] sm:text-4xl">
              The route.
            </h2>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {trek.route.map((location, index) => (
                <div key={`${location}-${index}`} className="flex items-center gap-2">
                  <span className="border border-[#B5A58C]/70 bg-white/40 px-3 py-2 text-sm text-[#203C2D]">
                    {location}
                  </span>

                  {index < trek.route.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="text-[#C84A23]"
                    >
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>

            {trek.altitude !== "To be confirmed by ACT OF KHANKRAKHET" && (
              <p className="mt-5 text-sm leading-7 text-[#292B26]/75">
                <span className="font-semibold text-[#203C2D]">
                  Altitude:
                </span>{" "}
                {trek.altitude}
              </p>
            )}
          </section>

          {/* Itinerary options */}
          <section>
            <SectionEyebrow>Sample itineraries</SectionEyebrow>

            <h2 className="mt-3 font-serif text-3xl text-[#203C2D] sm:text-4xl">
              Choose a route length.
            </h2>

            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#292B26]/75">
              These are sample route options, not confirmed departures or
              guaranteed schedules. Final route, travel time, access, and
              feasibility must be confirmed before booking.
            </p>

            <div className="mt-7 space-y-4">
              {trek.itineraryOptions.map((option) => (
                <article
                  key={`${option.duration}-${option.title}`}
                  className="border border-[#B5A58C]/60 bg-white/35 p-5 sm:p-6"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="font-serif text-2xl text-[#203C2D]">
                      {option.title}
                    </h3>

                    <span className="bg-[#203C2D] px-3 py-2 text-xs font-semibold text-white">
                      {option.duration}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-[#292B26]/80">
                    {option.route}
                  </p>

                  {option.note && (
                    <p className="mt-4 border-l-2 border-[#C84A23] pl-4 text-sm leading-7 text-[#292B26]/75">
                      {option.note}
                    </p>
                  )}
                </article>
              ))}
            </div>
          </section>

          {/* Inclusions and exclusions */}
          <section>
            <SectionEyebrow>Package information</SectionEyebrow>

            <h2 className="mt-3 font-serif text-3xl text-[#203C2D] sm:text-4xl">
              What to expect.
            </h2>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <InfoList title="Inclusions" items={trek.inclusions} />
              <InfoList title="Exclusions" items={trek.exclusions} />
            </div>
          </section>

          {/* Packing */}
          <section>
            <SectionEyebrow>Preparation</SectionEyebrow>

            <h2 className="mt-3 flex items-center gap-3 font-serif text-3xl text-[#203C2D] sm:text-4xl">
              <Backpack size={28} aria-hidden="true" />
              Things to carry.
            </h2>

            <ul className="mt-6 space-y-3">
              {trek.thingsToCarry.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm leading-7 text-[#292B26]/80"
                >
                  <span
                    aria-hidden="true"
                    className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C84A23]"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Eligibility */}
          <section>
            <SectionEyebrow>Before you enquire</SectionEyebrow>

            <h2 className="mt-3 font-serif text-3xl text-[#203C2D] sm:text-4xl">
              Eligibility and requirements.
            </h2>

            <div className="mt-6 space-y-4 border-l-2 border-[#B5A58C] pl-5">
              <div>
                <h3 className="font-semibold text-[#203C2D]">
                  Eligibility
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#292B26]/75">
                  {trek.eligibility}
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#203C2D]">
                  Age criteria
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#292B26]/75">
                  {trek.ageCriteria}
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Enquiry panel */}
        <aside className="h-fit border border-[#B5A58C]/60 bg-white/45 p-6 lg:sticky lg:top-28">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C84A23]">
            Plan your experience
          </p>

          <h2 className="mt-3 font-serif text-3xl text-[#203C2D]">
            Enquire about {trek.name}.
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#292B26]/75">
            Ask the team about this destination, route arrangements, dates, and
            package details.
          </p>

          <Link
            to={`/contact?activity=trekking&trek=${encodeURIComponent(trek.slug)}`}
            className="mt-6 flex w-full items-center justify-center gap-3 bg-[#C84A23] px-5 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#A93C1D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#203C2D] motion-reduce:transition-none"
          >
            Enquire about this trek
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>

          <Link
            to="/adventures/trekking"
            className="mt-4 flex w-full items-center justify-center border border-[#203C2D]/30 px-5 py-4 text-sm font-semibold text-[#203C2D] hover:bg-[#203C2D]/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C84A23]"
          >
            Browse all treks
          </Link>
        </aside>
      </div>
    </main>
  );
}

function SummaryItem({
  icon,
  label,
  value,
}: {
  icon: ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="bg-[#F4EFE4] p-5 sm:p-6">
      <div className="flex items-center gap-2 text-[#817D63]">
        {icon}
        <span className="text-xs font-semibold uppercase tracking-[0.12em]">
          {label}
        </span>
      </div>

      <p className="mt-3 text-sm font-semibold leading-6 text-[#203C2D]">
        {value}
      </p>
    </div>
  );
}

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C84A23]">
      {children}
    </p>
  );
}

function InfoList({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="border border-[#B5A58C]/60 bg-white/35 p-5 sm:p-6">
      <h3 className="font-serif text-2xl text-[#203C2D]">{title}</h3>

      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-sm leading-7 text-[#292B26]/75"
          >
            <span
              aria-hidden="true"
              className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C84A23]"
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
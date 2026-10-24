import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import TrekkingEventCard from "../components/trekking/TrekkingEventCard";
import { trekkingEvents } from "../data/trekkingEvents";

export default function TrekkingCatalogue() {
  return (
    <main className="bg-[#F4EFE4] text-[#292B26]">
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

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#15251B]/95 via-[#203C2D]/75 to-[#203C2D]/25" />

        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#E6B49B]">
            Adventure · Uttarakhand
          </p>

          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
            Find your
            <br />
            mountain trail.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            Explore trekking destinations across Uttarakhand, from alpine
            meadows and glacier approaches to pilgrimage trails and remote
            mountain landscapes.
          </p>

          <a
            href="#trekking-catalogue"
            className="mt-9 inline-flex items-center gap-3 text-sm font-semibold text-white underline decoration-white/50 underline-offset-8 hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Explore destinations
            <ArrowDown size={17} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section
        id="trekking-catalogue"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 py-14 sm:px-8 sm:py-20 lg:px-12"
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C84A23]">
              Trekking catalogue
            </p>

            <h2 className="mt-3 font-serif text-4xl leading-tight text-[#203C2D] sm:text-5xl">
              Explore the destinations.
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-7 text-[#292B26]/75">
            Browse the destinations and open an individual trek to view its
            route information, sample itineraries, and enquiry options.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trekkingEvents.map((trek) => (
            <TrekkingEventCard key={trek.id} trek={trek} />
          ))}
        </div>
      </section>

      <section className="bg-[#203C2D] text-[#F4EFE4]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-14 sm:px-8 sm:py-16 lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E6B49B]">
              Planning your trek
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
              Have a destination in mind?
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/75">
              Contact the team to ask about a trekking destination and discuss
              the arrangements.
            </p>
          </div>

          <Link
            to="/contact?activity=trekking"
            className="inline-flex w-fit items-center gap-3 bg-[#C84A23] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#A93C1D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
          >
            Enquire about trekking
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}
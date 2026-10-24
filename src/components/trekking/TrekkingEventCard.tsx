import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { TrekkingEvent } from "../../data/trekkingEvents";

type TrekkingEventCardProps = {
  trek: TrekkingEvent;
};

export default function TrekkingEventCard({
  trek,
}: TrekkingEventCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden border border-[#B5A58C]/50 bg-white/40">
      <Link
        to={`/adventures/trekking/${trek.slug}`}
        aria-label={`Explore ${trek.name}`}
        className="block overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#C84A23]"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-[#203C2D]">
          <img
            src={trek.image}
            alt={trek.imageAlt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
          />

          <span className="absolute left-4 top-4 bg-[#F4EFE4] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#203C2D]">
            Trekking
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#817D63]">
          {trek.location}
        </p>

        <h2 className="mt-3 font-serif text-2xl leading-tight text-[#203C2D]">
          {trek.name}
        </h2>

        <p className="mt-3 flex-1 text-sm leading-7 text-[#292B26]/80">
          {trek.shortDescription}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="border border-[#B5A58C]/70 px-3 py-2 text-xs text-[#203C2D]">
            {trek.duration}
          </span>

          <span className="border border-[#B5A58C]/70 px-3 py-2 text-xs text-[#203C2D]">
            {trek.difficulty}
          </span>
        </div>

        <Link
          to={`/adventures/trekking/${trek.slug}`}
          className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#203C2D] underline decoration-[#C84A23]/60 underline-offset-4 transition-colors hover:text-[#C84A23] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C84A23] motion-reduce:transition-none"
        >
          Explore trek
          <ArrowUpRight
            size={16}
            aria-hidden="true"
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
          />
        </Link>
      </div>
    </article>
  );
}
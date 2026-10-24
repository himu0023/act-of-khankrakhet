import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Activity } from "../../data/activities";

type ActivityCardProps = {
  activity: Activity;
  index: number;
};

export default function ActivityCard({
  activity,
  index,
}: ActivityCardProps) {
  return (
    <article className="group">
      <Link
        to={
          activity.id === "trekking"
            ? "/adventures/trekking"
            : `/contact?activity=${encodeURIComponent(activity.id)}`
        }
        className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C84A23]"
        aria-label={`Enquire about ${activity.title}`}
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-[#203C2D]">
          <img
            src={activity.image}
            alt={activity.alt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#15251B]/90 via-[#15251B]/10 to-transparent" />

          <span className="absolute left-4 top-4 bg-[#F4EFE4] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#203C2D]">
            {activity.category}
          </span>

          <span className="absolute right-4 top-4 font-serif text-lg text-white/80">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#E6B49B]">
              {activity.eyebrow}
            </p>

            <h2 className="mt-3 font-serif text-2xl leading-tight text-white sm:text-3xl">
              {activity.title}
            </h2>

            <p className="mt-3 text-sm leading-6 text-white/80">
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
    </article>
  );
}
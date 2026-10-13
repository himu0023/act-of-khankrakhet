import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { LearningActivity } from "../../data/outdoorLearning";

type LearningActivityCardProps = {
  activity: LearningActivity;
  index: number;
};

export default function LearningActivityCard({
  activity,
  index,
}: LearningActivityCardProps) {
  return (
    <article className="group flex h-full flex-col border-t border-[#B5A58C]/60 py-5">
      <div className="flex items-center justify-between gap-4">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#817D63]">
          Learning activity
        </span>

        <span className="font-serif text-lg text-[#817D63]">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="mt-4 font-serif text-2xl leading-tight text-[#203C2D]">
        {activity.title}
      </h3>

      <p className="mt-3 flex-1 text-sm leading-7 text-[#292B26]/80">
        {activity.description}
      </p>

      <Link
        to={`/contact?activity=${encodeURIComponent(activity.id)}`}
        aria-label={`Enquire about ${activity.title}`}
        className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#203C2D] underline decoration-[#C84A23]/60 underline-offset-4 transition-colors hover:text-[#C84A23] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C84A23] motion-reduce:transition-none"
      >
        Enquire about this activity
        <ArrowUpRight
          size={16}
          aria-hidden="true"
          className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
        />
      </Link>
    </article>
  );
}
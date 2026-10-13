import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { LearningCategory } from "../../data/outdoorLearning";
import LearningActivityCard from "./LearningActivityCard";

type LearningCategorySectionProps = {
  category: LearningCategory;
  index: number;
};

export default function LearningCategorySection({
  category,
  index,
}: LearningCategorySectionProps) {
  const imageOnLeft = index % 2 === 0;

  return (
    <section
      id={category.id}
      aria-labelledby={`${category.id}-heading`}
      className="scroll-mt-28 border-b border-[#B5A58C]/40 py-14 sm:py-20"
    >
      <div className="grid gap-8 lg:grid-cols-2 lg:items-stretch lg:gap-14">
        <div
          className={`${
            imageOnLeft ? "lg:order-1" : "lg:order-2"
          } relative min-h-[320px] overflow-hidden bg-[#203C2D] sm:min-h-[420px] lg:min-h-0`}
        >
          <img
            src={category.image}
            alt={category.imageAlt}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-[center_60%]"
          />

          <span className="absolute left-4 top-4 bg-[#F4EFE4] px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#203C2D]">
            {String(index + 1).padStart(2, "0")} / 04
          </span>
        </div>

        <div className={imageOnLeft ? "lg:order-2" : "lg:order-1"}>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C84A23]">
            {category.eyebrow}
          </p>

          <h2
            id={`${category.id}-heading`}
            className="mt-3 font-serif text-4xl leading-tight text-[#203C2D] sm:text-5xl"
          >
            {category.title}
          </h2>

          <p className="mt-5 max-w-xl text-base leading-8 text-[#292B26]/80">
            {category.intro}
          </p>

          <div className="mt-8 grid gap-x-8 sm:grid-cols-2">
            {category.activities.map((activity, activityIndex) => (
              <LearningActivityCard
                key={activity.id}
                activity={activity}
                index={activityIndex}
              />
            ))}
          </div>

          <Link
            to={`/contact?activity=${encodeURIComponent(category.activities[0].id)}`}
            className="mt-8 inline-flex items-center gap-2 bg-[#203C2D] px-5 py-3 text-sm font-semibold text-[#F4EFE4] transition-colors hover:bg-[#C84A23] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#C84A23] motion-reduce:transition-none"
          >
            Enquire about this category
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
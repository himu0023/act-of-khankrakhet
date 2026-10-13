
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import ActivityCard from "../components/activities/ActivityCard";
import { activities } from "../data/activities";

const categories = [
  { label: "All experiences", value: "All" },
  { label: "Land", value: "Land" },
  { label: "Water", value: "Water" },
  { label: "Culture", value: "Culture" },
] as const;

import { useState } from "react";

export default function Adventures() {
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleActivities =
    activeCategory === "All"
      ? activities
      : activities.filter(
          (activity) => activity.category === activeCategory,
        );

  return (
    <>
      {/* EDITORIAL INTRODUCTION */}
      <section className="bg-[#203C2D] px-5 py-20 text-[#F4EFE4] sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#D9A184]">
            Mission 120 · Adventure Tourism
          </p>

          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.1] sm:text-7xl lg:text-8xl">
            Find your next
            <br />
            <span className="italic text-[#D9C7A8]">
              adventure.
            </span>
          </h1>

          <div className="mt-8 grid gap-8 md:grid-cols-2 md:items-end">
            <p className="max-w-xl text-sm leading-8 text-white/75 sm:text-base">
              From mountain trails to river experiences and cultural
              exploration, discover the activities advertised by
              ACT OF KHANKRAKHET.
            </p>

            <a
              href="#activity-catalogue"
              className="inline-flex w-fit items-center gap-3 border-b border-[#D9A184] pb-2 text-sm font-semibold text-white hover:text-[#D9C7A8]"
            >
              Explore all activities
              <ArrowDown size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* ACTIVITY CATALOGUE */}
      <section
        id="activity-catalogue"
        className="bg-[#F4EFE4] px-5 py-16 sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#C84A23]">
                The activity catalogue
              </p>

              <h2 className="mt-4 font-serif text-4xl text-[#203C2D] sm:text-5xl">
                Choose your experience.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#292B26]/70">
                Select an activity to enquire about schedules,
                pricing, availability, and group arrangements.
              </p>
            </div>

            <p className="text-xs uppercase tracking-[0.14em] text-[#817D63]">
              {activities.length} advertised activities
            </p>
          </div>

          {/* CATEGORY FILTER */}
          <div
            className="mt-9 flex flex-wrap gap-2"
            aria-label="Filter activities by category"
          >
            {categories.map((category) => {
              const isActive = activeCategory === category.value;

              return (
                <button
                  key={category.value}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(category.value)}
                  className={[
                    "border px-4 py-3 text-xs font-semibold transition-colors",
                    isActive
                      ? "border-[#203C2D] bg-[#203C2D] text-[#F4EFE4]"
                      : "border-[#203C2D]/20 text-[#203C2D] hover:border-[#203C2D]",
                  ].join(" ")}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          {/* REUSABLE ACTIVITY CARDS */}
          <div
            className="mt-8 grid gap-x-5 gap-y-9 sm:grid-cols-2 lg:grid-cols-3"
            aria-live="polite"
          >
            {visibleActivities.map((activity) => (
              <ActivityCard
                key={activity.id}
                activity={activity}
                index={activities.findIndex(
                  (item) => item.id === activity.id,
                )}
              />
            ))}
          </div>

          <p className="mt-8 max-w-3xl text-xs leading-6 text-[#817D63]">
            Activity information and photography are presented for
            discovery. Current offerings, schedules, pricing, participant
            requirements, and safety arrangements must be confirmed
            directly with the organization.
          </p>
        </div>
      </section>

      {/* INQUIRY CTA */}
      <section className="bg-[#E9E1D2] px-5 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#C84A23]">
              Need more information?
            </p>

            <h2 className="mt-4 font-serif text-3xl text-[#203C2D] sm:text-4xl">
              Let’s plan your enquiry.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-[#292B26]/75">
              Contact us to ask about advertised activities and
              the arrangements that may be available.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex w-fit shrink-0 items-center gap-3 bg-[#C84A23] px-6 py-4 text-sm font-semibold text-white hover:bg-[#A93B1B]"
          >
            Contact Us
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import LearningCategorySection from "../components/learning/LearningCategorySection";
import { learningCategories } from "../data/outdoorLearning";

export default function OutdoorLearning() {
  return (
    <main className="bg-[#F4EFE4] text-[#292B26]">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#203C2D] text-[#F4EFE4]">
        <div className="absolute inset-0 -z-20">
          <img
            src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=2000&q=90"
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            className="h-full w-full object-cover opacity-35"
          />
        </div>

        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#15251B]/95 via-[#203C2D]/75 to-[#203C2D]/30" />

        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#E6B49B]">
            Learn outdoors · Grow through experience
          </p>

          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
            Learn from
            <br />
            the outdoors.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-white/85 sm:text-lg">
            Discover wilderness skills, preparedness, team activities and
            nature-based experiences with ACT OF KHANKRAKHET in Uttarakhand.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/contact?activity=navigation"
              className="inline-flex items-center gap-3 bg-[#C84A23] px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#A93C1D] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
            >
              Enquire about outdoor learning
              <ArrowUpRight size={17} aria-hidden="true" />
            </Link>

            <a
              href="#learning-categories"
              className="inline-flex items-center gap-2 px-3 py-3 text-sm font-semibold text-white underline decoration-white/50 underline-offset-4 hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Explore categories
              <ArrowDown size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16 lg:px-12">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C84A23]">
            Outdoor learning
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#203C2D] sm:text-5xl">
            Skills, movement and a closer connection with nature.
          </h2>
        </div>

        <div className="lg:pt-8">
          <p className="text-base leading-8 text-[#292B26]/80">
            Outdoor learning brings together practical skills, safety
            awareness, physical activities and opportunities to engage with
            the natural world. Explore the categories below to discover the
            activities advertised by ACT OF KHANKRAKHET.
          </p>

          <p className="mt-5 text-sm leading-7 text-[#292B26]/70">
            Activity arrangements and availability can be discussed directly
            with the team.
          </p>
        </div>
      </section>

      {/* Category navigation */}
      <nav
        id="learning-categories"
        aria-label="Outdoor learning categories"
        className="border-y border-[#B5A58C]/50 bg-[#EEE6D8]"
      >
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3 px-5 py-5 sm:px-8 lg:px-12">
          {learningCategories.map((category, index) => (
            <a
              key={category.id}
              href={`#${category.id}`}
              className="inline-flex items-center gap-2 border border-[#B5A58C]/70 px-4 py-3 text-sm font-medium text-[#203C2D] transition-colors hover:border-[#203C2D] hover:bg-[#203C2D] hover:text-[#F4EFE4] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C84A23] motion-reduce:transition-none"
            >
              <span className="font-serif text-xs text-[#C84A23]">
                {String(index + 1).padStart(2, "0")}
              </span>
              {category.title}
            </a>
          ))}
        </div>
      </nav>

      {/* Category sections */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {learningCategories.map((category, index) => (
          <LearningCategorySection
            key={category.id}
            category={category}
            index={index}
          />
        ))}
      </div>

      {/* Final enquiry CTA */}
      <section className="bg-[#203C2D] text-[#F4EFE4]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:flex-row lg:items-end lg:justify-between lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#E6B49B]">
              Take the next step
            </p>

            <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-6xl">
              Find the learning experience that fits your interests.
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/75">
              Contact the team to enquire about an activity and discuss the
              arrangements.
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
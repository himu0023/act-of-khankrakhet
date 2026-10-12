import { site } from "../data/site";

export default function About() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
      <p className="text-xs font-bold tracking-[0.2em] text-[#C84A23]">
        OUR INITIATIVE
      </p>
      <h1 className="mt-5 font-serif text-5xl text-[#203C2D]">
        Rooted in Uttarakhand
      </h1>
      <p className="mt-5 max-w-2xl leading-8 text-[#292B26]/75">
        {site.description} Our focus brings together adventure,
        outdoor learning, and rural tourism.
      </p>
    </section>
  );
}
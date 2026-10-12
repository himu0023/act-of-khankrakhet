import { MapPin, Phone } from "lucide-react";
import { site } from "../data/site";

export default function Contact() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
      <p className="text-xs font-bold tracking-[0.2em] text-[#C84A23]">
        PLAN YOUR ENQUIRY
      </p>

      <h1 className="mt-5 font-serif text-5xl text-[#203C2D]">
        Get in touch.
      </h1>

      <p className="mt-5 max-w-xl leading-8 text-[#292B26]/75">
        Contact us to ask about advertised activities, schedules,
        pricing, and group arrangements.
      </p>

      <div className="mt-10 space-y-6">
        {site.phones.map((phone) => (
          <a
            key={phone.number}
            href={`tel:${phone.number}`}
            className="flex items-center gap-4 text-[#203C2D] hover:text-[#C84A23]"
          >
            <Phone size={20} aria-hidden="true" />
            <span>
              <span className="block text-xs text-[#817D63]">
                {phone.label}
              </span>
              <span className="font-semibold">{phone.number}</span>
            </span>
          </a>
        ))}

        <div className="flex items-start gap-4 text-[#203C2D]">
          <MapPin size={20} className="mt-1 shrink-0" aria-hidden="true" />
          <span className="max-w-md leading-7">{site.location}</span>
        </div>
      </div>
    </section>
  );
}
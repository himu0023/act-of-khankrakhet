import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { navigation, site } from "../../data/site";

export default function Footer() {
  return (
    <footer className="bg-[#203C2D] text-[#F4EFE4]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-12 lg:py-20">
        <div className="lg:col-span-2">
          <Link to="/" className="inline-flex flex-col">
            <span className="text-sm font-bold tracking-[0.15em]">
              ACT OF
            </span>
            <span className="text-xl font-extrabold tracking-[0.08em]">
              KHANKRAKHET
            </span>
          </Link>

          <p className="mt-5 max-w-md text-sm leading-7 text-[#F4EFE4]/75">
            {site.description}
          </p>

          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 border-b border-[#C84A23] pb-2 text-sm font-semibold text-[#F4EFE4] hover:text-[#D98B6E]"
          >
            Start an enquiry
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div>
          <h2 className="text-xs font-bold tracking-[0.18em] text-[#B5A58C]">
            EXPLORE
          </h2>

          <ul className="mt-5 space-y-3">
            {navigation.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="text-sm text-[#F4EFE4]/80 transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold tracking-[0.18em] text-[#B5A58C]">
            GET IN TOUCH
          </h2>

          <div className="mt-5 space-y-5">
            {site.phones.map((phone) => (
              <a
                key={phone.number}
                href={`tel:${phone.number}`}
                className="flex items-start gap-3 text-sm text-[#F4EFE4]/85 hover:text-white"
              >
                <Phone
                  size={17}
                  className="mt-0.5 shrink-0"
                  aria-hidden="true"
                />
                <span>
                  <span className="block text-xs text-[#B5A58C]">
                    {phone.label}
                  </span>
                  {phone.number}
                </span>
              </a>
            ))}

            <div className="flex items-start gap-3 text-sm leading-6 text-[#F4EFE4]/80">
              <MapPin
                size={18}
                className="mt-1 shrink-0"
                aria-hidden="true"
              />
              <span>{site.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-[#F4EFE4]/60 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p>Adventure · Outdoor Learning · Uttarakhand</p>
        </div>
      </div>
    </footer>
  );
}
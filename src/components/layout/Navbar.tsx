import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navigation, site } from "../../data/site";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    [
      "text-sm transition-colors duration-200",
      isActive
        ? "font-semibold text-[#C84A23]"
        : "text-[#292B26] hover:text-[#C84A23]",
    ].join(" ");

  return (
    <header className="sticky top-0 z-50 border-b border-[#203C2D]/10 bg-[#F4EFE4]/95 backdrop-blur-sm">
      <nav
        className="mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-12"
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="flex shrink-0 flex-col"
          aria-label={`${site.name} home`}
          onClick={() => setMenuOpen(false)}
        >
          <span className="text-xs font-bold tracking-[0.12em] text-[#203C2D] sm:text-sm">
            ACT OF
          </span>
          <span className="text-sm font-extrabold tracking-[0.08em] text-[#203C2D] sm:text-base">
            KHANKRAKHET
          </span>
          <span className="mt-1 text-[9px] tracking-[0.2em] text-[#817D63]">
            {site.mission}
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={linkClass}
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden items-center gap-2 bg-[#C84A23] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#A93B1B] lg:inline-flex"
        >
          Enquire Now
          <ArrowUpRight size={16} aria-hidden="true" />
        </Link>

        <button
          type="button"
          className="inline-flex items-center justify-center p-2 text-[#203C2D] focus-visible:outline-2 focus-visible:outline-offset-2 lg:hidden"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X size={25} aria-hidden="true" />
          ) : (
            <Menu size={25} aria-hidden="true" />
          )}
        </button>
      </nav>

      {menuOpen && (
        <div
          id="mobile-navigation"
          className="border-t border-[#203C2D]/10 bg-[#F4EFE4] px-5 py-5 lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  [
                    "px-3 py-3 text-sm",
                    isActive
                      ? "bg-[#203C2D]/5 font-semibold text-[#C84A23]"
                      : "text-[#292B26] hover:bg-[#203C2D]/5",
                  ].join(" ")
                }
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/contact"
              className="mt-3 flex items-center justify-center gap-2 bg-[#C84A23] px-5 py-3 text-sm font-semibold text-white"
              onClick={() => setMenuOpen(false)}
            >
              Enquire Now
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
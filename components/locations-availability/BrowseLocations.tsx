import Link from "next/link";
import SectionHeading from "./SectionHeading";

const pills = ["Responsible source", "Scope", "Last checked date"];

export default function BrowseLocations() {
  return (
    <section
      id="browse-locations"
      className="w-full scroll-mt-24 bg-gradient-to-b from-[#F8F7FE] to-[#ECE8FD] py-24"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[70px]">
        <SectionHeading
          badge="Browse"
          title="Browse location information"
          description="Browse only locations for which an approved public record exists. Availability and participation can differ within a country or region."
          className="lg:max-w-[690px]"
        />

        <div className="mt-4 flex flex-col items-center gap-8 rounded-3xl border border-dashed border-[#B9AEF2] bg-white px-6 py-10 sm:flex-row sm:items-center sm:px-14 sm:py-12">
          <svg
            viewBox="0 0 290 240"
            className="w-full max-w-[250px] shrink-0"
            aria-hidden="true"
          >
            <ellipse cx="125" cy="130" rx="124" ry="102" fill="#ECE8FD" />
            <rect x="50" y="53" width="162" height="125" rx="10" fill="#FFFFFF" />
            <rect x="69" y="77" width="86" height="11" rx="5.5" fill="#CFC6F6" />
            <rect x="69" y="101" width="122" height="8" rx="4" fill="#E6E2FA" />
            <rect x="69" y="121" width="98" height="8" rx="4" fill="#E6E2FA" />
            <rect x="69" y="141" width="66" height="8" rx="4" fill="#E6E2FA" />
            <circle cx="202" cy="148" r="30" fill="#FFFFFF" fillOpacity="0.6" stroke="#7A62E8" strokeWidth="9" />
            <path d="M223 170l18 20" stroke="#5A44D2" strokeWidth="11" strokeLinecap="round" />
          </svg>

          <div className="flex flex-col items-start gap-2.5">
            <h3 className="text-[18px] font-bold leading-6 text-[#211A5A] [font-family:var(--font-sora)]">
              No approved records yet
            </h3>
            <p className="max-w-[640px] text-[16px] leading-7 text-[#615D7E]">
              No location-specific service information is currently published
              here. Learn how the platform is designed to work.
            </p>
            <ul className="flex flex-wrap gap-2 pt-1.5">
              {pills.map((pill) => (
                <li
                  key={pill}
                  className="rounded-full border border-[#E6E3F5] bg-[#F5F3FE] px-3 pb-1 pt-[3px] text-[14px] font-semibold leading-5 text-[#4F3FC8]"
                >
                  {pill}
                </li>
              ))}
            </ul>
            <Link
              href="/how-it-works"
              className="mt-3 inline-flex min-h-12 items-center rounded-xl border-2 border-[#4267D5] bg-white px-6 text-[16px] font-semibold text-[#4267D5] transition-colors hover:bg-[#F7F8FF]"
            >
              Learn how it works
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

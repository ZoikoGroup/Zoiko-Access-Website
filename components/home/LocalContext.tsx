import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LocalContext() {
  return (
    <section className="w-full bg-[#F8F9FC] font-sans">
      <div className="mx-auto max-w-[1440px] px-6 pb-0 pt-14 sm:px-10 lg:px-[60px] lg:pt-[60px]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_0.75fr] lg:gap-16">
          <div>
            <p className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-[#5B3FD1]">
              <span
                className="block h-1.5 w-1.5 rounded-full bg-[#7C5CE8]"
                aria-hidden="true"
              />
              Care by location
            </p>

            <h2 className="mt-5 text-[32px] font-bold leading-[1.1] tracking-[-0.03em] text-[#23327A] sm:text-[40px]">
              Local context matters.
            </h2>

            <p className="mt-6 max-w-[620px] text-[16px] leading-[1.7] text-[#4B5563]">
              Country and service availability are separate from language
              preference. Choose a location to review the informational status
              of this preview.
            </p>
          </div>

          <div className="rounded-[20px] border border-[#E1E6F0] bg-white p-6 sm:p-7">
            <label
              htmlFor="care-location"
              className="block text-[13px] font-semibold text-[#23327A]"
            >
              Where are you exploring care?
            </label>
            <input
              id="care-location"
              type="text"
              placeholder="Choose a care location"
              className="mt-3 block w-full rounded-lg border border-[#E6EAF2] bg-[#F5F7FB] px-4 py-3.5 text-[15px] text-[#23327A] outline-none placeholder:text-[#374151] focus-visible:ring-2 focus-visible:ring-[#4267D5]"
            />

            <div className="mt-5 border-t border-[#E6EAF2] pt-5">
              <h3 className="text-[15px] font-semibold text-[#23327A]">
                Global informational experience
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-[#4B5563]">
                No approved local directory or booking capability is connected.
                Choosing a location does not activate healthcare services.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 rounded-[20px] bg-[#4267D5] px-6 py-9 text-white sm:px-10 md:flex-row md:items-center md:justify-between lg:mt-[60px] lg:px-[50px]">
          <div>
            <h2 className="text-[26px] font-semibold tracking-[-0.02em] sm:text-[32px]">
              Help shape better healthcare navigation.
            </h2>
            <p className="mt-4 max-w-[640px] text-[15px] text-[#E4EAFB]">
              Explore responsibilities and integration principles for healthcare
              institutions and technology partners.
            </p>
          </div>

          <Link
            href="#"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-lg bg-white px-6 py-4 text-[15px] font-semibold text-[#4267D5] transition-opacity hover:opacity-90"
          >
            Explore partner opportunities
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

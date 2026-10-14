import { ChevronDown, Globe, MapPin } from "lucide-react";

const FIELD =
  "mt-2 flex w-full items-center gap-3 rounded-lg border border-[#DCE3EE] bg-white px-4 py-4 text-left text-[15px] text-[#1F2937]";

export default function FooterPreferences() {
  return (
    <div className="border-b border-[#E3E8F0] bg-[#F4F7FB]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 py-8 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
          <div className="sm:w-[320px]">
            <p className="text-[13px] font-semibold text-[#1F2937]">
              Care location
            </p>
            <button type="button" className={FIELD}>
              <MapPin className="h-4 w-4 text-[#4267D5]" aria-hidden="true" />
              <span className="flex-1">Choose care location</span>
              <ChevronDown
                className="h-4 w-4 text-[#6B7280]"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="sm:w-[320px]">
            <p className="text-[13px] font-semibold text-[#1F2937]">Language</p>
            <button type="button" className={FIELD}>
              <Globe className="h-4 w-4 text-[#4267D5]" aria-hidden="true" />
              <span className="flex-1">English</span>
              <ChevronDown
                className="h-4 w-4 text-[#6B7280]"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        <div className="max-w-[640px] lg:pr-4">
          <p className="text-[14px] font-semibold text-[#1F2937]">
            Global informational preview
          </p>
          <p className="mt-2 text-[13px] leading-relaxed text-[#4B5563]">
            No live healthcare services are connected. Location is a preference,
            not permission or clinical eligibility.
          </p>
        </div>
      </div>
    </div>
  );
}

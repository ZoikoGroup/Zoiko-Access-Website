import { Eyebrow, Lead, Title, inner, sectionPad } from "./ui";

export default function LocalApplicability() {
  return (
    <section className={`w-full bg-white py-12 lg:py-[70px] ${sectionPad}`}>
      <div className={`${inner} flex flex-col items-start gap-[6px]`}>
        <Eyebrow>LOCAL APPLICABILITY</Eyebrow>
        <Title className="lg:pt-[13.5px]">What applies where you are</Title>
        <Lead className="lg:pt-[14.5px]">
          Your location changes what is shown. It does not decide residency or
          eligibility.
        </Lead>

        <label
          htmlFor="discharge-location"
          className="text-[16px] font-semibold leading-[26.4px] text-[#273444]"
        >
          Preview care location
        </label>
        <div className="relative w-full max-w-[420px]">
          <select
            id="discharge-location"
            defaultValue=""
            className="min-h-[48px] w-full appearance-none rounded-[12px] border border-solid border-[#d9d3f5] bg-white py-[14px] pl-[16px] pr-[44px] text-[16px] font-normal leading-[16px] text-black"
          >
            <option value="">Not selected</option>
          </select>
          <svg
            className="pointer-events-none absolute right-[14px] top-1/2 size-[24px] -translate-y-1/2"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M7 10l5 5 5-5"
              stroke="#000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <p
          aria-live="polite"
          className="w-full rounded-r-[12px] lg:mb-[8px] border-l-4 border-solid border-[#7b3ff2] bg-[#f6f9fc] px-[16px] py-[12px] text-[14.5px] font-normal leading-[23.93px] text-[#273444]"
        >
          No care location selected. Information is general. No local network
          coverage is claimed.
        </p>
      </div>
    </section>
  );
}

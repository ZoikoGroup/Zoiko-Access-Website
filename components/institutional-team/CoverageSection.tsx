import Copy from "./Copy";
import { fontPoppins } from "./fonts";
import { Eyebrow, Lead, Title, inner, sectionPad } from "./ui";

type State = {
  code: string;
  title: string;
  text: string;
  d?: string[];
  m: string[];
  active?: boolean;
  mobileOnly?: boolean;
};

const states: State[] = [
  {
    code: "P0",
    title: "Informational",
    text: "Education only. This is the state of this page.",
    d: ["Education only. This is the state", "of this page."],
    m: ["Education only. This is the state of this", "page."],
    active: true,
  },
  {
    code: "P1",
    title: "Intake authorized",
    text: "A verified, approved inquiry route for the region.",
    d: ["A verified, approved inquiry", "route for the region."],
    m: ["A verified, approved inquiry route for the", "region."],
  },
  {
    code: "PX",
    title: "Degraded or closed",
    text: "Safe information stays and the form is removed.",
    m: ["Safe information stays and the form is", "removed."],
    mobileOnly: true,
  },
];

export default function CoverageSection() {
  return (
    <section
      className={`w-full bg-white py-14 lg:py-[70px] ${sectionPad}`}
    >
      <div
        className={`${inner} flex flex-col items-start gap-[48px] lg:flex-row lg:items-center lg:justify-center`}
      >
        <div className="flex w-full flex-col items-start gap-[9.2px] lg:min-h-[408px] lg:min-w-0 lg:flex-1 lg:gap-[10px]">
          <Eyebrow>Care-region contact coverage</Eyebrow>
          <Title>
            <Copy
              text="Where the contact channel is available"
              d={["Where the contact channel is", "available"]}
              m={["Where the contact", "channel is available"]}
            />
          </Title>
          <Lead className="pt-[4.39px] lg:pt-[8.58px]">
            <Copy
              text="Five things that are separate: care location, institution jurisdiction, account location, partner activation and data residency. Choosing a region never verifies eligibility."
              d={[
                "Five things that are separate: care location, institution jurisdiction, account",
                "location, partner activation and data residency. Choosing a region never",
                "verifies eligibility.",
              ]}
              m={[
                "Five things that are separate: care location,",
                "institution jurisdiction, account location,",
                "partner activation and data residency.",
                "Choosing a region never verifies eligibility.",
              ]}
            />
          </Lead>

          <ul className="grid w-full gap-[20px] pt-[16.8px] lg:grid-cols-2 lg:pt-[16px]">
            {states.map((state) => (
              <li
                key={state.code}
                className={`overflow-hidden rounded-[20px] bg-white lg:self-start ${
                  state.active
                    ? "border-2 border-solid border-[#6f3fec] shadow-[0_14px_34px_rgba(111,63,236,0.25)]"
                    : "border border-solid border-[#e1dbf9] shadow-[0_10px_28px_rgba(27,23,80,0.1)] lg:pb-[2px]"
                } ${state.mobileOnly ? "lg:hidden" : ""}`}
              >
                <div className="flex flex-col items-start gap-[6px] p-[22px]">
                  <span
                    className={`${fontPoppins} flex w-[38px] items-center justify-center rounded-full bg-[#f1eefe] pb-[9.5px] pt-[8.5px] text-[14.4px] font-semibold leading-[normal] text-[#6d4fe6]`}
                  >
                    {state.code}
                  </span>
                  <h3
                    className={`${fontPoppins} w-full pb-[0.7px] pt-[3px] text-[17.6px] font-semibold leading-[19.71px] text-[#1b1750]`}
                  >
                    {state.title}
                  </h3>
                  <p className="w-full text-[14.7px] font-normal leading-[24.29px] text-[#575387]">
                    <Copy text={state.text} d={state.d} m={state.m} />
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex w-full flex-col items-start gap-[8px] rounded-[22px] border border-solid border-[#e1dbf9] bg-white p-[20px] drop-shadow-[0_14px_18px_rgba(27,23,80,0.12)] lg:min-h-[351px] lg:min-w-0 lg:flex-1 lg:gap-[19px] lg:p-[28px]">
          <label
            htmlFor="institutional-country"
            className={`${fontPoppins} w-full py-px text-[15.2px] font-semibold leading-[normal] text-[#1b1750]`}
          >
            Country of care
          </label>
          <div className="relative w-full">
            <select
              id="institutional-country"
              defaultValue=""
              className="min-h-[52px] w-full appearance-none rounded-[12px] border border-solid border-[#b9b0ea] bg-white py-[16px] pl-[18px] pr-[44px] text-[16px] font-normal leading-[16px] text-[#1b1750]"
            >
              <option value="">Choose a country or region</option>
            </select>
            <svg
              className="pointer-events-none absolute right-[14px] top-1/2 size-[24px] -translate-y-1/2 max-lg:hidden"
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
          <p className="order-3 w-full max-w-[600px] pt-[5.39px] text-[14.4px] font-normal leading-[23.76px] text-[#575387] lg:order-2 lg:pt-[5.38px]">
            <Copy
              text="The page never guesses your location, and a missing or out-of-date setting fails closed."
              d={[
                "The page never guesses your location, and a missing or out-of-date",
                "setting fails closed.",
              ]}
              m={[
                "The page never guesses your location, and a",
                "missing or out-of-date setting fails closed.",
              ]}
            />
          </p>
          <p
            aria-live="polite"
            className="order-2 w-full rounded-r-[14px] border-l-4 border-solid border-[#a28dfa] bg-white px-[18px] pb-[14px] pt-[20px] text-[15.2px] font-normal leading-[25px] text-[#575387] drop-shadow-[0_6px_9px_rgba(27,23,80,0.06)] lg:order-3"
          >
            <Copy
              text="Institutional inquiries are not currently available through this page for the selected location."
              d={[
                "Institutional inquiries are not currently available through this",
                "page for the selected location.",
              ]}
              m={[
                "Institutional inquiries are not",
                "currently available through this page",
                "for the selected location.",
              ]}
            />
          </p>
        </div>
      </div>
    </section>
  );
}

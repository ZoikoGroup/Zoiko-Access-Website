import FigmaImage from "./FigmaImage";
import Copy from "./Copy";
import Kicker from "./Kicker";
import SectionTitle from "./SectionTitle";
import Sub from "./Sub";
import { fontPoppins } from "./fonts";

const areas = [
  "Patient access and scheduling",
  "Referral intake and routing",
  "Discharge transitions",
  "Results and review handoff",
  "Interoperability",
];

export default function OperationalScope() {
  return (
    <section
      id="scope"
      className="w-full bg-[linear-gradient(137.36deg,#08176d_0%,#2d2bc9_55%,#6f3fec_100%)] px-4 py-12 sm:px-6 lg:px-12 lg:py-[70px]"
    >
      <div className="mx-auto flex w-full max-w-[1344px] flex-col items-start gap-[10px]">
        <Kicker tone="light">Operational scope</Kicker>
        <SectionTitle tone="light">
          <Copy
            text="Five areas, one rule: sources stay in charge"
            d={["Five areas, one rule: sources stay in charge"]}
          />
        </SectionTitle>
        <Sub tone="light" className="pt-[9.18px]">
          Each area links to its own page only when that page is published.
        </Sub>

        <div className="grid w-full gap-[30px] pt-[18px] lg:h-[336px] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:items-start">
          <ul className="flex w-full flex-col items-start gap-[12px]">
            {areas.map((area, index) => (
              <li
                key={area}
                aria-current={index === 0 ? "true" : undefined}
                className={`relative flex min-h-[54px] w-full items-center rounded-[14px] px-[20px] py-[17px] text-[16px] font-semibold leading-[normal] ${
                  index === 0
                    ? "bg-[#6e3feb] text-white shadow-[0px_0px_0px_2px_rgba(255,255,255,0.6)]"
                    : "bg-white text-[#1b1750]"
                }`}
              >
                {area}
              </li>
            ))}
          </ul>

          <div className="grid w-full overflow-clip rounded-[24px] bg-white shadow-[0px_22px_50px_0px_rgba(0,0,0,0.3)] lg:h-[316px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <div className="relative h-[220px] w-full overflow-hidden bg-[linear-gradient(132.26deg,#8e7bef_0%,#08176d_100%)] lg:col-start-1 lg:row-start-1 lg:h-[316px] lg:w-[357.36px]">
              <div className="absolute inset-[0.38px_0.91px_-0.38px_-30.55px] overflow-hidden">
                <FigmaImage
                  src="/enterprise-onboarding/scope-patient-access.webp"
                  alt="A clinician talking with a patient at a hospital bedside"
                  box={{ left: -10.26, width: 120.52 }}
                  sizes="(min-width: 1440px) 466px, 60vw"
                />
              </div>
            </div>

            <div className="flex flex-col items-start gap-[8.8px] px-[26px] pb-[40px] pt-[25px] lg:col-start-2 lg:row-start-1 lg:pb-[81.14px]">
              <h3
                className={`${fontPoppins} w-full pb-[0.7px] text-[17.6px] font-semibold leading-[19.71px] text-[#1b1750]`}
              >
                Patient access and scheduling
              </h3>
              <p className="w-full text-[16px] font-normal leading-[26.4px] text-[#575387]">
                The provider owns the schedule.
              </p>
              <ul className="flex w-full list-disc flex-col items-start gap-[6px] pl-[18px] pt-[4px] text-[16px] font-normal leading-[26.4px] text-[#575387]">
                <li className="ml-[6px] w-[calc(100%-6px)] pl-0">
                  A request is not a confirmation.
                </li>
                <li className="ml-[6px] w-[calc(100%-6px)] pl-0">
                  <Copy
                    text="Slots appear only where a partner is authorized."
                    d={["Slots appear only where a partner is", "authorized."]}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

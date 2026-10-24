import Image from "next/image";
import Copy from "./Copy";
import Kicker from "./Kicker";
import SectionTitle from "./SectionTitle";
import Sub from "./Sub";

const items = [
  "Service and country scope",
  "Participating legal entities",
  "Workflow mapping",
  "Identity and roles",
  "Vendor and source records",
  "Legal basis and privacy",
  "Security controls",
  "Clinical safety",
  "Data flows",
  "Accessibility",
  "Support owner",
  "Acceptance criteria",
];

export default function ReadinessChecklist() {
  return (
    <section
      id="readiness"
      className="w-full bg-[linear-gradient(231.87deg,rgba(223,215,255,0.5)_0.63%,#beafff_98.09%)] px-4 py-12 sm:px-6 lg:px-12 lg:py-[70px]"
    >
      <div className="mx-auto flex w-full max-w-[1344px] flex-col items-center justify-center gap-[48px] lg:h-[1008px] lg:flex-row lg:items-end">
        <div className="flex w-full flex-col items-start gap-[10px] pb-[20px] lg:h-[989px] lg:min-w-px lg:flex-1">
          <Kicker>Readiness requirements</Kicker>
          <SectionTitle>
            <Copy
              text="Twelve things to be ready to discuss"
              d={["Twelve things to be ready to", "discuss"]}
            />
          </SectionTitle>
          <Sub className="max-w-[625.81px]">
            <Copy
              text="A read-only list for planning. There is no score, no verdict and no “you qualify”. Each item has an owner and a review date when published."
              d={[
                "A read-only list for planning. There is no score, no verdict and no “you",
                "qualify”. Each item has an owner and a review date when published.",
              ]}
            />
          </Sub>

          <ul className="flex w-full flex-col items-start gap-[10px] pt-[10px]">
            {items.map((item) => (
              <li
                key={item}
                className="relative flex w-full flex-col items-start rounded-[14px] border border-solid border-[#e1dbf9] bg-white pb-[13.89px] pl-[52px] pr-[16px] pt-[13.5px] drop-shadow-[0px_6px_8px_rgba(27,23,80,0.06)]"
              >
                <span
                  className="absolute left-[16px] top-1/2 flex size-[24px] -translate-y-1/2 items-center justify-center overflow-clip rounded-[12px] bg-[#f1eefe]"
                  aria-hidden="true"
                >
                  <Image
                    src="/enterprise-onboarding/icon-check.svg"
                    alt=""
                    width={13}
                    height={13}
                    className="size-[13px]"
                  />
                </span>
                <span className="whitespace-nowrap text-[16px] font-normal leading-[26.4px] text-[#1b1750]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative h-[480px] w-full overflow-clip rounded-[26px] bg-[linear-gradient(131.88deg,#8e7bef_0%,#08176d_100%)] shadow-[0px_24px_56px_0px_rgba(27,23,80,0.25)] lg:flex lg:h-[787px] lg:w-[588px] lg:shrink-0 lg:flex-col lg:justify-center">
          <div className="relative size-full lg:aspect-[500/750] lg:size-auto lg:w-full lg:shrink-0">
            <div className="absolute left-[-3.63%] top-[-3.79%] size-[103.66%]">
              <Image
                src="/enterprise-onboarding/readiness-panel-discussion.webp"
                alt="A speaker addressing a panel of colleagues seated in armchairs"
                fill
                sizes="(min-width: 1440px) 588px, 90vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

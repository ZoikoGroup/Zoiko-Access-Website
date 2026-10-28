import Image from "next/image";
import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { Eyebrow, Title, inner, photoBg, sectionPad, sectionY } from "./ui";

const ticks = [
  "No diagnosis, treatment advice or medical-necessity decision is given here.",
  "An eligibility response never guarantees authorization.",
  "Data is limited to what a permitted purpose requires.",
  "Please don't enter personal health information into any public form.",
];

export default function ClinicalSafety() {
  return (
    <section
      id="safety"
      className={`w-full bg-[radial-gradient(1200px_516px_at_85%_120px,#b700dc_0%,rgba(167,22,223,0.75)_15%,rgba(151,44,226,0.5)_30%,rgba(118,87,232,0)_60%),linear-gradient(128.85deg,#0a1a4b_51.44%,#3550b8_100%)] ${sectionY} ${sectionPad}`}
    >
      <div className={`${inner} grid items-center gap-10 lg:h-[462px] lg:grid-cols-[5fr_6fr] lg:gap-14`}>
        <div className="flex w-full flex-col items-start gap-[13.7px] pb-[18px] pt-[6.91px] lg:order-1">
          <Eyebrow tone="steel">Clinical safety &amp; limits</Eyebrow>
          <Title tone="light">
            <Copy
              text="Eligibility is administrative—not clinical guidance."
              d={["Eligibility is administrative—", "not clinical guidance."]}
            />
          </Title>
          <div className="flex w-full items-start gap-3 rounded-[10px] border border-l-4 border-solid border-[#b7791f] bg-[#fff8ea] px-4 pb-[14px] pt-[16.3px]">
            <span
              aria-hidden="true"
              className="flex size-[24px] shrink-0 items-center justify-center rounded-[12px] bg-[#b7791f] pb-[1.2px] text-[14px] font-bold leading-[22.4px] text-white"
            >
              !
            </span>
            <p className="text-[15px] leading-[24px] text-[#4a3500]">
              <strong className="font-bold">Urgent or emergency need?</strong> Don&apos;t wait on benefits information.
              Contact your local emergency services or an appropriate care provider.
            </p>
          </div>
          <ul className="flex w-full flex-col gap-[10px] pt-[4.3px]">
            {ticks.map((tick) => (
              <li key={tick} className="relative pl-7 text-[15px] leading-[24px] text-white">
                <span className="absolute left-0 top-[6px] flex size-[16px] items-center justify-center rounded-[8px] bg-[#eee9fd]">
                  <Image src="/eligibility-benefits/icons/tick.svg" alt="" width={12} height={12} />
                </span>
                {tick}
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`relative h-[300px] w-full overflow-hidden rounded-[20px] shadow-[0_10px_30px_rgba(36,59,115,0.08)] sm:h-[400px] lg:order-2 lg:h-[458.98px] ${photoBg}`}
          role="img"
          aria-label="Stethoscope resting on a desk"
        >
          <FigmaImage
            src="/eligibility-benefits/safety-stethoscope.webp"
            box={{ top: -10.61, height: 121.22 }}
            sizes="(min-width: 1024px) 700px, 90vw"
          />
        </div>
      </div>
    </section>
  );
}

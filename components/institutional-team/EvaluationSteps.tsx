import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, Title, inner, sectionPad } from "./ui";

const chips = ["Proposed model", "Non-binding", "No fixed timelines"];

const steps = [
  {
    title: "Explore fit",
    text: "Read what this approach is, and who it is for.",
    m: ["Read what this approach is, and who it is", "for."],
  },
  {
    title: "Confirm responsible entities and region",
    titleM: ["Confirm responsible entities and", "region"],
    text: "Identify the legal entities and the care region.",
    m: ["Identify the legal entities and the care", "region."],
  },
  {
    title: "Discuss use cases",
    text: "Talk through what you would want to coordinate.",
    m: ["Talk through what you would want to", "coordinate."],
  },
  {
    title: "Review security, privacy and clinical boundaries",
    titleM: ["Review security, privacy and", "clinical boundaries"],
    text: "Each is reviewed by its own owner.",
  },
  {
    title: "Assess integration and contracting requirements",
    titleM: ["Assess integration and contracting", "requirements"],
    text: "See what technical and legal work would be involved.",
    m: ["See what technical and legal work would", "be involved."],
  },
  {
    title: "Determine whether a separate program may be authorized",
    titleM: ["Determine whether a separate", "program may be authorized"],
    text: "Only then could a distinct program be considered.",
    m: ["Only then could a distinct program be", "considered."],
  },
];

export default function EvaluationSteps() {
  return (
    <section
      id="how-it-works"
      className={`w-full scroll-mt-[40px] bg-[#f1eefe] py-14 lg:bg-[linear-gradient(180deg,#f1eefe_0%,#d2c8ff_100%)] lg:py-[70px] ${sectionPad}`}
    >
      <div
        className={`${inner} flex flex-col items-center gap-[48px] lg:flex-row lg:justify-center`}
      >
        <div className="flex w-full flex-col items-start gap-[9.2px] pb-[15.99px] lg:min-w-0 lg:flex-1 lg:gap-[10px]">
          <Eyebrow>
            <Copy
              text="What an institutional evaluation involves"
              m={["What an institutional evaluation", "involves"]}
            />
          </Eyebrow>
          <Title>
            <Copy
              text="Six steps, none of them a promise"
              d={["Six steps, none of them a", "promise"]}
              m={["Six steps, none of them a", "promise"]}
            />
          </Title>

          <ul className="flex w-full flex-wrap gap-[8px] pt-[4.4px] lg:pt-[9.18px]">
            {chips.map((chip) => (
              <li
                key={chip}
                className="rounded-full border border-solid border-[#e1dbf9] bg-white px-[14px] py-[4px] text-[13.4px] font-semibold leading-[22.18px] text-[#1b1750]"
              >
                {chip}
              </li>
            ))}
          </ul>

          <ol className="flex w-full flex-col gap-[16px] pt-[10.81px] lg:pt-[10px]">
            {steps.map((step, index) => (
              <li key={step.title} className="relative min-h-[53.72px] pl-[50px]">
                <span
                  className={`${fontPoppins} absolute left-0 top-0 flex size-[34px] items-center justify-center rounded-full bg-[#0023b3] text-[20px] font-bold leading-none text-white max-lg:text-[0px]`}
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <div className="-mt-px flex flex-col gap-[1px]">
                  <h3
                    className={`${fontPoppins} text-[16.3px] font-bold leading-[26.93px] text-[#1b1750]`}
                  >
                    <Copy text={step.title} m={step.titleM} />
                  </h3>
                  <p className="text-[15px] font-normal leading-[24.75px] text-[#575387]">
                    <Copy text={step.text} m={step.m} />
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="relative aspect-[351/421] w-full shrink-0 overflow-hidden rounded-[26px] bg-[linear-gradient(135deg,#8e7bef_0%,#08176d_100%)] shadow-[0_24px_56px_rgba(27,23,80,0.25)] lg:aspect-auto lg:h-[601px] lg:w-[501px]">
          <FigmaImage
            src="/institutional-team/steps-planning.webp"
            alt="People planning together around a table"
            box={{ left: -40.22, width: 180.45, top: -6.49, height: 112.98 }}
            mbox={{ left: -40.22, width: 180.45 }}
            sizes="(min-width: 1024px) 900px, 90vw"
          />
        </div>
      </div>
    </section>
  );
}

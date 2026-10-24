import FigmaImage from "./FigmaImage";
import type { ImageBox } from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, Lead, Title, inner, sectionPad } from "./ui";

type Pattern = {
  title: string;
  lines: string[];
  infer: string;
  image: string;
  box: ImageBox;
  cardClass: string;
};

const patterns: Pattern[] = [
  {
    title: "Service information",
    lines: [
      "Read-only discovery of published information.",
      "May communicate what a service says it offers.",
    ],
    infer: "Not that it is available to a given person.",
    image: "/ehr-interoperability/pattern-service-information.webp",
    box: { top: -9.2, height: 118.4 },
    cardClass: "lg:h-[460.26px]",
  },
  {
    title: "Appointment request status",
    lines: [
      "A request, hold or confirmation status.",
      "May communicate the status the scheduler reports.",
    ],
    infer: "A hold is not a confirmed appointment.",
    image: "/ehr-interoperability/pattern-appointment-status.webp",
    box: { top: -9.38, height: 118.75 },
    cardClass: "lg:pb-[26.38px]",
  },
  {
    title: "Referral handoff",
    lines: [
      "A referral packet and its acknowledgment.",
      "May communicate that the receiver recognized it.",
    ],
    infer: "Acknowledgment is not acceptance.",
    image: "/ehr-interoperability/pattern-referral-handoff.webp",
    box: { top: -9.2, height: 118.4 },
    cardClass: "lg:h-[460px] lg:pb-[26.38px]",
  },
  {
    title: "Results status",
    lines: [
      "A notice that a result exists, or was reviewed.",
      "May communicate the review event.",
    ],
    infer: "A result being available is not clinical review.",
    image: "/ehr-interoperability/pattern-results-status.webp",
    box: { top: -9.2, height: 118.4 },
    cardClass: "lg:h-[436px]",
  },
  {
    title: "Exception follow-up",
    lines: [
      "A failed or unresolved exchange.",
      "May communicate who owns the follow-up.",
    ],
    infer: "An exception is not resolved by the platform.",
    image: "/ehr-interoperability/pattern-exception-followup.webp",
    box: { top: -9.2, height: 118.4 },
    cardClass: "lg:h-[435px] lg:pb-[26.38px]",
  },
];

export default function InteropPatterns() {
  return (
    <section className={`w-full bg-white py-12 lg:py-[70px] ${sectionPad}`}>
      <div className={`${inner} flex flex-col items-start gap-[13px]`}>
        <Eyebrow>INTEROPERABILITY PATTERNS</Eyebrow>
        <Title>Five patterns, each with what not to infer</Title>
        <Lead className="pt-[0.99px]">
          Each is conditional. None is promised as available.
        </Lead>

        <div className="grid w-full gap-x-[18px] gap-y-[33px] pt-[17px] sm:grid-cols-2 lg:grid-cols-3 lg:items-start">
          {patterns.map((pattern) => (
            <article
              key={pattern.title}
              className={`isolate flex w-full flex-col items-start overflow-clip rounded-[24px] border border-solid border-[#d9d3f5] bg-white shadow-[0px_10px_20px_0px_rgba(0,0,0,0.1)] ${pattern.cardClass}`}
            >
              <div className="relative z-[2] aspect-[370/208.13] w-full shrink-0 overflow-hidden bg-[linear-gradient(135deg,#e8e2ff_0%,#d5dcff_100%)]">
                <FigmaImage
                  src={pattern.image}
                  box={pattern.box}
                  sizes="(min-width: 1440px) 421px, 33vw"
                />
              </div>
              <div className="relative z-[1] flex w-full flex-col items-start p-[20px]">
                <h3
                  className={`${fontPoppins} w-full text-[19px] font-semibold leading-[21.85px] tracking-[-0.38px] text-[#031974]`}
                >
                  {pattern.title}
                </h3>
                <div className="w-full pt-[6px] text-[16px] font-normal leading-[26.4px] text-[#273444]">
                  {pattern.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                <p className="w-full pt-[8px] text-[11px] font-bold leading-[normal] tracking-[0.77px] text-[#7b3ff2]">
                  DO NOT INFER
                </p>
                <p className="w-full text-[16px] font-normal leading-[26.4px] text-[#273444]">
                  {pattern.infer}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

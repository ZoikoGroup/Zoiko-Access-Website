import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import type { ImageBox } from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, Lead, Title, inner, sectionPad } from "./ui";

const tiers = [
  {
    label: "VISION",
    title: "The intended future",
    text: "Where the ecosystem could go.",
    d: undefined,
    shell:
      "rounded-l-[22px] border bg-white lg:rounded-r-none",
    labelColor: "text-[#7b3ff2]",
    titleColor: "text-[#031974]",
    textColor: "text-[#273444]",
    border: "border-[#d9d3f5]",
  },
  {
    label: "DESIGNED TO",
    title: "The architectural posture",
    text: "How this approach is built to behave.",
    d: undefined,
    shell: "border bg-[#f1eefe]",
    labelColor: "text-[#7b3ff2]",
    titleColor: "text-[#031974]",
    textColor: "text-[#273444]",
    border: "border-[#d9d3f5]",
  },
  {
    label: "AVAILABLE NOW",
    title: "Verified only",
    text: "Only what is verified by country, partner, workflow and release.",
    d: ["Only what is verified by country, partner,", "workflow and release."],
    shell: "rounded-r-[22px] border bg-[#031974] lg:rounded-l-none",
    labelColor: "text-[#c9b8ff]",
    titleColor: "text-white",
    textColor: "text-[#e6e9ff]",
    border: "border-[#031974]",
  },
];

type Card = {
  title: string;
  lines: string[];
  image: string;
  box: ImageBox;
  contentHeight?: string;
};

const cards: Card[] = [
  {
    title: "Connect with source systems",
    lines: [
      "Authorized task context is exchanged between systems. Source data stays where it is.",
    ],
    image: "/ehr-interoperability/why-source-systems.webp",
    box: { top: -0.07, height: 100.15 },
    contentHeight: "lg:h-[170px]",
  },
  {
    title: "Respect clinical ownership",
    lines: [
      "Clinical authority stays with the responsible professionals and organizations.",
    ],
    image: "/ehr-interoperability/why-clinical-ownership.webp",
    box: { left: -0.08, width: 100.15 },
  },
  {
    title: "Make handoffs attributable",
    lines: ["Each step names its source, time and owner."],
    image: "/ehr-interoperability/why-handoffs.webp",
    box: { top: -9.26, height: 118.52 },
  },
];

const cardBreaks: Record<string, string[]> = {
  "Connect with source systems": [
    "Authorized task context is exchanged between systems. Source data stays where it is.",
  ],
  "Respect clinical ownership": [
    "Clinical authority stays with the responsible",
    "professionals and organizations.",
  ],
  "Make handoffs attributable": [
    "Each step names its source, time and",
    "owner.",
  ],
};

export default function IntegrationPosture() {
  return (
    <section className={`w-full bg-white py-12 lg:py-[70px] ${sectionPad}`}>
      <div className={`${inner} flex flex-col items-start gap-[13px]`}>
        <Eyebrow>INTEGRATION POSTURE</Eyebrow>
        <Title>Why integrate rather than replace</Title>
        <Lead className="pt-px">
          Three terms are kept apart, so nobody reads a hope as a fact.
        </Lead>

        <div className="flex w-full flex-col items-stretch justify-center pt-[15px] lg:flex-row">
          {tiers.map((tier) => (
            <div
              key={tier.label}
              className={`flex min-w-px flex-1 flex-col items-start gap-[4px] border-solid px-[24px] py-[22px] ${
                tier.label === "AVAILABLE NOW" ? "" : "lg:pb-[48.4px]"
              } ${tier.shell} ${tier.border}`}
            >
              <p
                className={`w-full text-[11px] font-extrabold leading-[normal] tracking-[0.88px] ${tier.labelColor}`}
              >
                {tier.label}
              </p>
              <h3
                className={`${fontPoppins} w-full text-[19px] font-semibold leading-[21.85px] tracking-[-0.38px] ${tier.titleColor}`}
              >
                {tier.title}
              </h3>
              <p
                className={`w-full pt-[2px] text-[16px] font-normal leading-[26.4px] ${tier.textColor}`}
              >
                <Copy text={tier.text} d={tier.d} />
              </p>
            </div>
          ))}
        </div>

        <div className="grid w-full gap-[18px] pt-[17px] lg:grid-cols-3 lg:items-start">
          {cards.map((card) => (
            <article
              key={card.title}
              className={`isolate flex w-full flex-col items-start overflow-clip rounded-[24px] border border-solid border-[#d9d3f5] bg-white shadow-[0px_10px_20px_0px_rgba(0,0,0,0.1)] ${card.contentHeight ? "" : "lg:pb-[26.38px]"}`}
            >
              <div className="relative z-[2] aspect-[370/208.13] w-full shrink-0 overflow-hidden bg-[linear-gradient(135deg,#e8e2ff_0%,#d5dcff_100%)]">
                <FigmaImage
                  src={card.image}
                  box={card.box}
                  sizes="(min-width: 1440px) 421px, 33vw"
                />
              </div>
              <div
                className={`relative z-[1] flex w-full flex-col items-start gap-[5.4px] p-[20px] ${card.contentHeight ?? ""}`}
              >
                <h3
                  className={`${fontPoppins} w-full text-[19px] font-semibold leading-[21.85px] tracking-[-0.38px] text-[#031974]`}
                >
                  {card.title}
                </h3>
                <p className="w-full text-[16px] font-normal leading-[26.4px] text-[#273444]">
                  <Copy
                    text={card.lines.join(" ")}
                    d={cardBreaks[card.title]}
                  />
                </p>
                <p className="w-full pt-[2.6px] text-[11px] font-bold leading-[normal] tracking-[0.77px] text-[#7b3ff2]">
                  DESIGNED TO
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

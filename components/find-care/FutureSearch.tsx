import Image from "next/image";
import Copy from "./Copy";
import Eyebrow from "./Eyebrow";
import SectionHeading from "./SectionHeading";
import { fontPoppins } from "./fonts";

const cards = [
  {
    title: "Search & filters",
    titleLines: undefined,
    text: "An approved finder may use service or organization keywords, permitted care types, and catalog-defined locality. This fallback collects no query.",
    d: [
      "An approved finder may use",
      "service or organization",
      "keywords, permitted care",
      "types, and catalog-defined",
      "locality. This fallback collects",
      "no query.",
    ],
    m: [
      "An approved finder may use service or",
      "organization keywords, permitted care",
      "types, and catalog-defined locality. This",
      "fallback collects no query.",
    ],
  },
  {
    title: "Results & sorting",
    titleLines: undefined,
    text: "Only verifiable totals and records should appear. Sorting must explain its basis; no unsupported “best doctor” or clinical-quality ranking.",
    d: [
      "Only verifiable totals and",
      "records should appear. Sorting",
      "must explain its basis; no",
      "unsupported “best doctor” or",
      "clinical-quality ranking.",
    ],
    m: [
      "Only verifiable totals and records should",
      "appear. Sorting must explain its basis; no",
      "unsupported “best doctor” or clinical-",
      "quality ranking.",
    ],
  },
  {
    title: "Accessible results",
    titleLines: undefined,
    text: "A readable list must remain usable without an optional map. No coordinates, proximity values, or nearby matches are invented.",
    d: [
      "A readable list must remain",
      "usable without an optional map.",
      "No coordinates, proximity",
      "values, or nearby matches are",
      "invented.",
    ],
    m: [
      "A readable list must remain usable",
      "without an optional map. No coordinates,",
      "proximity values, or nearby matches are",
      "invented.",
    ],
  },
  {
    title: "No matches or stale sources",
    titleLines: ["No matches or stale", "sources"],
    text: "A real empty result is distinct from no catalog authorization. Expired records and withdrawn partners must not remain as usable listings.",
    d: [
      "A real empty result is distinct",
      "from no catalog authorization.",
      "Expired records and withdrawn",
      "partners must not remain as",
      "usable listings.",
    ],
    m: [
      "A real empty result is distinct from no",
      "catalog authorization. Expired records",
      "and withdrawn partners must not remain",
      "as usable listings.",
    ],
  },
];

export default function FutureSearch() {
  return (
    <section className="w-full bg-gradient-to-b from-[#f6f3ff] to-[#ece7ff] px-[19.5px] pb-[56px] pt-[112px] lg:px-[70px] lg:py-[96px]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start gap-[12.9px] lg:max-w-[1300px] lg:gap-[21px]">
        <Eyebrow>A future authorized search</Eyebrow>

        <SectionHeading desktopLines={2} mobileLines={3}>
          <Copy
            text="Useful discovery without hidden clinical assumptions."
            d={["Useful discovery without", "hidden clinical assumptions."]}
            m={["Useful discovery without", "hidden clinical", "assumptions."]}
          />
        </SectionHeading>

        <div className="flex w-full flex-col items-start gap-[20px] pt-[15.09px] lg:flex-row lg:justify-between lg:gap-x-[20px] lg:pt-0">
          <div className="flex w-full flex-col gap-[20px] lg:grid lg:min-w-0 lg:shrink lg:basis-[580px] lg:grid-cols-2">
            {cards.map((card) => (
              <article
                key={card.title}
                className="flex w-full flex-col items-start overflow-clip rounded-[18px] border border-solid border-[#e3def8] bg-white shadow-[0px_12px_32px_0px_rgba(36,28,89,0.1),0px_2px_6px_0px_rgba(36,28,89,0.05)]"
              >
                <div className="flex w-full flex-col items-start gap-[9.5px] px-[24px] pb-[24px] pt-[17px]">
                  <h3
                    className={`${fontPoppins} w-full pb-[0.99px] text-[17.3px] font-bold leading-[19.87px] text-[#241c59]`}
                  >
                    <Copy
                      text={card.title}
                      d={card.titleLines}
                    />
                  </h3>
                  <p className="w-full max-w-[651.52px] text-[15.2px] font-normal leading-[25px] text-[#5e5a86]">
                    <Copy text={card.text} d={card.d} m={card.m} />
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="relative hidden aspect-[700/467] min-w-0 shrink basis-[700px] overflow-hidden rounded-[13px] shadow-[0px_12px_32px_0px_rgba(0,0,0,0.1)] lg:block">
            <Image
              src="/find-care/discovery-illustration.webp"
              alt="Conceptual illustration of healthcare information and distinct responsible participants"
              fill
              sizes="(min-width: 1440px) 700px, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

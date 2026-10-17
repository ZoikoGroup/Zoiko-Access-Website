import Image from "next/image";
import Copy from "./Copy";
import Eyebrow from "./Eyebrow";
import SectionHeading from "./SectionHeading";
import { fontPoppins } from "./fonts";

// Figma card heights on mobile, keyed by the number of text lines.
const mobileMinHeight: Record<number, string> = {
  1: "min-h-[100.79px]",
  2: "min-h-[124.18px]",
  3: "min-h-[148.05px]",
};

const states = [
  {
    title: "Not submitted / validating",
    text: "No source-confirmed intake receipt exists.",
    d: undefined,
    m: undefined,
  },
  {
    title: "Submitted / received",
    text: "A live support system must confirm durable acceptance before this wording is used.",
    d: [
      "A live support system must confirm durable",
      "acceptance before this wording is used.",
    ],
    m: [
      "A live support system must confirm durable",
      "acceptance before this wording is used.",
    ],
  },
  {
    title: "Queued / assigned",
    text: "Queue and owner assignment need support-system evidence.",
    d: [
      "Queue and owner assignment need support-",
      "system evidence.",
    ],
    m: ["Queue and owner assignment need", "support-system evidence."],
  },
  {
    title: "Awaiting information / responded",
    text: "Any required action or response belongs to the authorized support owner.",
    d: [
      "Any required action or response belongs to the",
      "authorized support owner.",
    ],
    m: [
      "Any required action or response belongs to",
      "the authorized support owner.",
    ],
  },
  {
    title: "Closed",
    text: "Closure is a source-owned support event, not completion of clinical care.",
    d: [
      "Closure is a source-owned support event, not",
      "completion of clinical care.",
    ],
    m: [
      "Closure is a source-owned support event,",
      "not completion of clinical care.",
    ],
  },
  {
    title: "Delivery failed / unavailable",
    text: "No successful delivery is assumed. Inputs must be retained safely and retry reconciled if a live process exists.",
    d: [
      "No successful delivery is assumed. Inputs must",
      "be retained safely and retry reconciled if a live",
      "process exists.",
    ],
    m: [
      "No successful delivery is assumed. Inputs",
      "must be retained safely and retry reconciled",
      "if a live process exists.",
    ],
  },
];

export default function SupportStates() {
  return (
    <section className="w-full bg-gradient-to-b from-[#f6f3ff] to-[#ece7ff] px-[19.5px] pb-[78px] pt-[112px] lg:px-[70px] lg:pb-[118px] lg:pt-[96px]">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start gap-[13.2px] lg:max-w-[1300px] lg:gap-[13.1px]">
        <Eyebrow>Support states</Eyebrow>

        <SectionHeading desktopLines={2}>
          <Copy
            text="A message receipt is not medical review."
            d={["A message receipt is not", "medical review."]}
            m={["A message receipt is not", "medical review."]}
          />
        </SectionHeading>

        <p className="w-full max-w-[686.38px] pt-[0.7px] text-[16px] font-normal leading-[26.4px] text-[#5e5a86] lg:pt-[7.57px]">
          <Copy
            text="The following are definitions, not a live ticket timeline or a claim that any request has been created."
            d={[
              "The following are definitions, not a live ticket timeline or a claim that any request has been",
              "created.",
            ]}
            m={[
              "The following are definitions, not a live ticket",
              "timeline or a claim that any request has been",
              "created.",
            ]}
          />
        </p>

        <div className="flex w-full flex-col items-start gap-[20px] pt-[14.81px] lg:grid lg:grid-cols-3 lg:items-stretch lg:grid-rows-[minmax(124.72px,auto)_minmax(148.48px,auto)] lg:gap-[20px] lg:pb-[8.9px] lg:pt-[14.9px]">
          {states.map((state) => (
            <article
              key={state.title}
              className={`flex w-full flex-col items-start gap-[8.2px] rounded-[15px] border border-solid border-[#e3def8] bg-white px-[24px] pb-[24px] pt-[23px] lg:min-h-0 ${
                mobileMinHeight[state.m?.length ?? 1]
              }`}
            >
              <h3
                className={`${fontPoppins} w-full text-[16px] font-bold leading-[18.4px] text-[#241c59]`}
              >
                {state.title}
              </h3>
              <p className="w-full max-w-[617.34px] text-[14.4px] font-normal leading-[23.76px] text-[#5e5a86]">
                <Copy text={state.text} d={state.d} m={state.m} />
              </p>
            </article>
          ))}
        </div>

        <div className="w-full max-w-[728.17px] rounded-br-[14px] rounded-tr-[14px] border-l-4 border-solid border-[#8e7bef] bg-[#f4f2ff] px-[18px] pb-[13.66px] pt-[22.38px] lg:hidden">
          <p className="text-[15.2px] font-normal leading-[25px] text-[#5e5a86]">
            <Copy
              text="No receipt, ticket number, queue owner, response deadline, or clinical outcome is invented by this page."
              m={[
                "No receipt, ticket number, queue owner,",
                "response deadline, or clinical outcome is",
                "invented by this page.",
              ]}
            />
          </p>
        </div>

        <div className="relative hidden h-[405px] w-full overflow-hidden rounded-[16px] lg:block">
          <Image
            src="/talk-to-support/support-states.webp"
            alt="A support colleague reviewing a dashboard at a desk in a busy office"
            fill
            sizes="(min-width: 1440px) 1300px, 100vw"
            className="object-cover object-[50%_25.5%]"
          />
        </div>
      </div>
    </section>
  );
}

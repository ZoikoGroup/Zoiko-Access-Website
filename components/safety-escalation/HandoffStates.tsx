import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, Title, card, inner, photoBg, sectionPad } from "./ui";

type Kind = "Technical" | "Human" | "Clinical";

const states: {
  title: string;
  titleD?: string[];
  text: string;
  kind: Kind;
  src: string;
  alt: string;
}[] = [
  { title: "Prepared", text: "Information is ready at the source.", kind: "Technical", src: "state-prepared", alt: "A winding road through a misty pine forest" },
  { title: "Sent", text: "The source system transmits it.", kind: "Technical", src: "state-sent", alt: "A golden meadow with a single tree" },
  { title: "Delivered", text: "Transport evidence that it arrived.", kind: "Technical", src: "state-delivered", alt: "A snow-capped mountain peak" },
  {
    title: "Acknowledged by responsible recipient",
    titleD: ["Acknowledged by", "responsible recipient"],
    text: "An accountable person has received it.",
    kind: "Human",
    src: "state-acknowledged",
    alt: "A mountain valley with a lake",
  },
  { title: "Clinically reviewed", text: "Clinical evidence from a qualified reviewer.", kind: "Clinical", src: "state-reviewed", alt: "A crate of fresh strawberries" },
  { title: "Action documented", text: "Closure needs an authoritative record.", kind: "Clinical", src: "state-documented", alt: "An aerial view of a boat on dark green water" },
];

const bigCards: {
  eyebrow: string;
  title: string;
  d: string[];
  text: string;
  src: string;
  alt: string;
  gap: string;
  pb: string;
}[] = [
  {
    eyebrow: "Critical findings communication",
    title: "Time-sensitive diagnostic findings need accountable follow-through.",
    d: ["Time-sensitive diagnostic findings need", "accountable follow-through."],
    text: "The issuing source is responsible for the finding. It goes to an authorized recipient under locally approved escalation practice. No universal thresholds or response times are set here, and interpretation belongs to the appropriate clinician.",
    src: "critical-findings",
    alt: "Orange sandstone cliffs at sunset",
    gap: "gap-[14px]",
    pb: "",
  },
  {
    eyebrow: "Pharmacy safety boundaries",
    title: "Medication handoffs require licensed professional checks.",
    d: ["Medication handoffs require licensed", "professional checks."],
    text: "A prescriber authorizes. A pharmacist verifies, under local supply rules, and raises issues for clarification. This page never instructs substitution, dosing or direct prescription fulfillment.",
    src: "pharmacy-boundaries",
    alt: "An old wooden cart wheel in black and white",
    gap: "gap-[13.4px]",
    pb: "lg:pb-[26.39px]",
  },
];

const badge: Record<Kind, string> = {
  Technical: "bg-[#dfe8ff]",
  Human: "bg-[#ebe9fb]",
  Clinical: "bg-[#ebe9fb]",
};

export default function HandoffStates() {
  return (
    <section
      id="handoff-steps"
      className={`w-full scroll-mt-[40px] bg-[linear-gradient(180deg,#ffffff_0%,#ebe9fb_40%,#ffffff_100%)] py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div className={`${inner} flex flex-col items-start gap-[43px]`}>
        <div className="flex w-full flex-col items-start gap-[40px]">
          <div className="flex w-full max-w-[760px] flex-col items-start gap-[15.1px] lg:pt-[2px]">
            <Eyebrow>Handoff states</Eyebrow>
            <Title>Delivered is not reviewed. Reviewed is not completed.</Title>
          </div>

          <ul className="grid w-full gap-x-[48px] gap-y-[22px] sm:grid-cols-2 lg:grid-cols-3">
            {states.map((state) => (
              <li
                key={state.title}
                className={`${card} flex flex-col p-[16px] pb-[26px] drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)]`}
              >
                <div
                  className={`relative aspect-[197/123.13] w-full overflow-hidden rounded-[8px] ${photoBg}`}
                  role="img"
                  aria-label={state.alt}
                >
                  <FigmaImage
                    src={`/safety-escalation/${state.src}.webp`}
                    box={{ top: -12.22, height: 124.44 }}
                    sizes="(min-width: 1024px) 368px, 90vw"
                  />
                </div>
                <h3
                  className={`${fontPoppins} pt-[21px] text-[15.7px] font-semibold leading-[17.56px] tracking-[-0.157px] text-[#243b73]`}
                >
                  <Copy text={state.title} d={state.titleD} />
                </h3>
                <p className="pt-[8px] text-[13.4px] font-normal leading-[22.18px] text-[#273444]">
                  {state.text}
                </p>
                <span
                  className={`mt-[30px] w-fit rounded-[6px] px-[8px] pb-[2px] pt-px text-[11.5px] font-bold leading-[19px] text-[#243b73] ${badge[state.kind]}`}
                >
                  {state.kind}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <ul className="grid w-full items-center gap-[22px] lg:grid-cols-2 lg:gap-[51px]">
          {bigCards.map((item) => (
            <li
              key={item.eyebrow}
              className="overflow-hidden rounded-[22px] border border-solid border-[#dcd6f2] bg-white shadow-[0_10px_20px_rgba(0,0,0,0.1)]"
            >
              <div
                className={`relative aspect-[541/270.5] w-full overflow-hidden ${photoBg}`}
                role="img"
                aria-label={item.alt}
              >
                <FigmaImage
                  src={`/safety-escalation/${item.src}.webp`}
                  box={{ top: -27.78, height: 155.56 }}
                  sizes="(min-width: 1024px) 620px, 90vw"
                />
              </div>
              <div className={`flex flex-col p-[24px] ${item.gap} ${item.pb}`}>
                <Eyebrow>{item.eyebrow}</Eyebrow>
                <h2
                  className={`${fontPoppins} pb-[0.81px] pt-[1px] text-[24px] font-semibold leading-[26.88px] tracking-[-0.48px] text-[#243b73]`}
                >
                  <Copy text={item.title} d={item.d} />
                </h2>
                <p className="text-[16px] font-normal leading-[26.4px] text-[#273444]">
                  {item.text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

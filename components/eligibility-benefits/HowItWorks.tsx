import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, Title, card, cardText, cardTitle, inner, sectionPad, sectionY } from "./ui";

const steps: {
  step: string;
  title: string;
  td?: string[];
  text: string;
  d?: string[];
}[] = [
  {
    step: "Step 01",
    title: "Identify plan & service date",
    text: "Identify the correct plan and the service date the question applies to.",
    d: ["Identify the correct plan and the", "service date the question applies to."],
  },
  {
    step: "Step 02",
    title: "Confirm identity, role & purpose",
    td: ["Confirm identity, role &", "purpose"],
    text: "Confirm participant identity, role and permitted purpose.",
  },
  {
    step: "Step 03",
    title: "Request only what's needed",
    text: "Request only necessary fields from the authorized source.",
    d: ["Request only necessary fields from", "the authorized source."],
  },
  {
    step: "Step 04",
    title: "Review & act responsibly",
    text: "Review the response, its uncertainty and the next responsible action.",
    d: ["Review the response, its uncertainty", "and the next responsible action."],
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className={`w-full bg-[conic-gradient(from_62deg_at_50%_50%,#c0acff_0%,#f3effe_99.79%,#c0acff_100%),linear-gradient(180deg,#f3effe_0%,#e9e3fc_100%)] ${sectionY} ${sectionPad}`}
    >
      <div className={`${inner} flex flex-col gap-10 lg:h-[618px] lg:flex-row lg:items-end lg:justify-between`}>
        <div className="flex w-full flex-col items-start gap-[13.7px] pt-[6.91px] lg:h-[618px] lg:w-[650px]">
          <Eyebrow>How it works</Eyebrow>
          <Title>
            <Copy
              text="Four steps in an authorized eligibility inquiry."
              d={["Four steps in an authorized", "eligibility inquiry."]}
            />
          </Title>
          <p className="rounded-full bg-[#fff4e0] px-3 pb-[5.69px] pt-[7.8px] text-[12px] font-semibold leading-[19.2px] text-[#7a4b00]">
            CONCEPTUAL — NOT A LIVE TRANSACTION
          </p>
          <ol className="grid w-full gap-6 pt-[14.3px] sm:grid-cols-2 lg:grid-rows-[190.47px_192px]">
            {steps.map((s) => (
              <li
                key={s.step}
                className={`${card} flex flex-col items-start gap-2 p-[26px] drop-shadow-[0_10px_15px_rgba(36,59,115,0.08)]`}
              >
                <p className={`${fontPoppins} text-[12px] font-semibold leading-[19.2px] tracking-[0.72px] text-[#7657e8]`}>
                  {s.step.toUpperCase()}
                </p>
                <h3 className={`${cardTitle} pt-[2px]`}>
                  <Copy text={s.title} d={s.td} />
                </h3>
                <p className={cardText}>
                  <Copy text={s.text} d={s.d} />
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div
          className="relative h-[300px] w-full overflow-hidden rounded-[20px] bg-[linear-gradient(135deg,#dcd3fb_0%,#c7d3f5_100%)] shadow-[0_10px_30px_rgba(36,59,115,0.08)] sm:h-[380px] lg:h-[474.3px] lg:w-[605px]"
          role="img"
          aria-label="Operations team working through a structured process together"
        >
          <FigmaImage
            src="/eligibility-benefits/how-it-works-team.webp"
            box={{ left: -25.62, width: 151.25 }}
            sizes="(min-width: 1024px) 605px, 90vw"
          />
        </div>
      </div>
    </section>
  );
}

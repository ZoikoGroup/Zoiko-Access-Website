import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, Lead, Tag, Title, card, cardText, cardTitle, inner, lavender, sectionPad } from "./ui";

const steps: {
  step: string;
  title: string;
  d?: string[];
  text: string;
  td: string[];
  tag: string;
}[] = [
  {
    step: "Step 01",
    title: "Confirm authorized plan context",
    d: ["Confirm authorized plan", "context"],
    text: "An authorized member or organization establishes plan context. Care location is context only.",
    td: ["An authorized member or organization", "establishes plan context. Care location", "is context only."],
    tag: "Owner: authorized party",
  },
  {
    step: "Step 02",
    title: "Check payer-held eligibility",
    text: "Eligibility is read from the payer as source of record, with an effective date.",
    td: ["Eligibility is read from the payer as", "source of record, with an effective", "date."],
    tag: "Source: payer · dated",
  },
  {
    step: "Step 03",
    title: "Request a governed step",
    text: "A policy-governed administrative request is sent. Sending is not approval.",
    td: ["A policy-governed administrative", "request is sent. Sending is not", "approval."],
    tag: "Decision owner: payer",
  },
  {
    step: "Step 04",
    title: "Track & resolve",
    text: "Attributable status is followed and resolved with the responsible organization.",
    td: ["Attributable status is followed and", "resolved with the responsible", "organization."],
    tag: "Next step: named owner",
  },
];

export default function CoordinationFlow() {
  return (
    <section id="flow" className={`w-full ${lavender} py-12 lg:pb-[96px] lg:pt-[192px] ${sectionPad}`}>
      <div className={`${inner} grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]`}>
        <div className="flex w-full flex-col items-start gap-[13.7px] pt-[6.9px]">
          <Eyebrow>Illustrative coordination flow</Eyebrow>
          <Title>
            <Copy text="Four steps. Clear ownership at each one." d={["Four steps.", "Clear ownership at each one."]} />
          </Title>
          <Lead>
            <Copy
              text="A conceptual view of how an authorized administrative pathway is designed to work. Every status carries its source and how current it is."
              d={[
                "A conceptual view of how an authorized administrative pathway is designed to work.",
                "Every status carries its source and how current it is.",
              ]}
            />
          </Lead>
          <ol className="grid w-full gap-6 pt-[14.3px] sm:grid-cols-2">
            {steps.map((s) => (
              <li key={s.step} className={`${card} flex flex-col items-start gap-2 p-[26px]`}>
                <p className={`${fontPoppins} text-[12px] font-semibold uppercase leading-[19.2px] tracking-[0.72px] text-[#7657e8]`}>
                  {s.step}
                </p>
                <h3 className={cardTitle}>
                  <Copy text={s.title} d={s.d} />
                </h3>
                <p className={`${cardText} flex-1 pb-[10px]`}>
                  <Copy text={s.text} d={s.td} />
                </p>
                <Tag>{s.tag}</Tag>
              </li>
            ))}
          </ol>
          <p className="text-[12.5px] leading-[20px] text-[#5b6678]">
            ◇ Conceptual schematic — contains no real member, coverage or claims data.
          </p>
        </div>

        <div
          className="relative h-[260px] w-full overflow-hidden rounded-[20px] bg-[linear-gradient(135deg,#dcd3fb_0%,#c7d3f5_100%)] shadow-[0_10px_30px_rgba(36,59,115,0.08)] sm:h-[360px] lg:h-[474.3px]"
          role="img"
          aria-label="Abstract status dashboard representing coordinated administrative steps"
        >
          <FigmaImage
            src="/payers-insurers/flow-status-dashboard.webp"
            box={{ left: -13.72, width: 127.44 }}
            sizes="(min-width: 1024px) 560px, 90vw"
          />
        </div>
      </div>
    </section>
  );
}

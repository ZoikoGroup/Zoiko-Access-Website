import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { Eyebrow, Lead, Title, card, cardText, cardTitle, inner, photoBg, sectionPad, sectionY } from "./ui";

type Item = { title: string; d?: string[]; text: string; td: string[] };

const items: Item[] = [
  {
    title: "Plan / product context",
    text: "Which plan or product the person appears linked to.",
    td: ["Which plan or product the person", "appears linked to."],
  },
  {
    title: "Effective or termination date",
    d: ["Effective or termination", "date"],
    text: "When the association starts or ends.",
    td: ["When the association starts or ends."],
  },
  {
    title: "Member relationship",
    text: "Subscriber, dependent or other relationship to the plan.",
    td: ["Subscriber, dependent or other", "relationship to the plan."],
  },
  {
    title: "Relevant service date",
    text: "The date the response applies to — answers can differ by date.",
    td: ["The date the response applies to —", "answers can differ by date."],
  },
];

export default function EligibilityExplained() {
  return (
    <section id="eligibility" className={`w-full bg-white ${sectionY} ${sectionPad}`}>
      <div className={`${inner} grid items-center gap-10 lg:grid-cols-[6fr_5fr] lg:gap-14`}>
        <div className="flex w-full flex-col items-start gap-[13.7px] pt-[6.9px]">
          <Eyebrow>Eligibility explained</Eyebrow>
          <Title>
            <Copy
              text="What an eligibility response may tell you."
              d={["What an eligibility response may", "tell you."]}
            />
          </Title>
          <Lead>
            <Copy
              text="Eligibility describes whether a person appears associated with a particular plan or product for a given service date. The plan owner's response, and how current it is, governs."
              d={[
                "Eligibility describes whether a person appears associated with a particular plan or",
                "product for a given service date. The plan owner's response, and how current it is,",
                "governs.",
              ]}
            />
          </Lead>
          <ul className="grid w-full gap-6 pt-[14.3px] sm:grid-cols-2 lg:grid-rows-[196.47px_194.83px]">
            {items.map((item) => (
              <li
                key={item.title}
                className={`${card} flex flex-col items-start gap-2 self-start p-[26px] drop-shadow-[0_10px_10px_rgba(36,59,115,0.1)] lg:min-h-[169px]`}
              >
                <h3 className={`${cardTitle} pt-[2px]`}>
                  <Copy text={item.title} d={item.d} />
                </h3>
                <p className={cardText}>
                  <Copy text={item.text} d={item.td} />
                </p>
                <p className="pt-[2px] text-[12.5px] italic leading-[20px] text-[#5a3fc9]">
                  Subject to the source plan&apos;s rules.
                </p>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`relative h-[360px] w-full overflow-hidden rounded-[20px] shadow-[0_10px_30px_rgba(36,59,115,0.08)] sm:h-[480px] lg:h-[639.83px] ${photoBg}`}
          role="img"
          aria-label="Plan operations professional at work"
        >
          <FigmaImage
            src="/eligibility-benefits/eligibility-plan-professional.webp"
            box={{ top: -15.22, height: 130.44 }}
            sizes="(min-width: 1024px) 560px, 90vw"
          />
        </div>
      </div>
    </section>
  );
}

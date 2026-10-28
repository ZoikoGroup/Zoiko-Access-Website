import Copy from "./Copy";
import { SecHead, card, cardText, cardTitle, inner, lavender, note, sectionPad, sectionY } from "./ui";

const items: {
  icon: string;
  title: string;
  td?: string[];
  text: string;
  d: string[];
}[] = [
  {
    icon: "▤",
    title: "Benefit categories",
    text: "The types of services a plan describes.",
    d: ["The types of services a", "plan describes."],
  },
  {
    icon: "%",
    title: "Deductibles & cost sharing",
    text: "How costs may be shared under plan terms.",
    d: ["How costs may be", "shared under plan terms."],
  },
  {
    icon: "⊘",
    title: "Limits & exclusions",
    text: "Caps, frequencies and services not included.",
    d: ["Caps, frequencies and", "services not included."],
  },
  {
    icon: "⌖",
    title: "Network & service conditions",
    td: ["Network & service", "conditions"],
    text: "Where and by whom services may apply.",
    d: ["Where and by whom", "services may apply."],
  },
  {
    icon: "↻",
    title: "Referral or authorization rules",
    td: ["Referral or", "authorization rules"],
    text: "Steps the plan may require before a service.",
    d: ["Steps the plan may", "require before a service."],
  },
];

export default function BenefitsExplained() {
  return (
    <section id="benefits" className={`w-full ${lavender} ${sectionY} ${sectionPad}`}>
      <div className={`${inner} flex flex-col items-start gap-[18px]`}>
        <SecHead
          eyebrow="Benefits explained"
          title="What benefits information may include."
          lead={
            <Copy
              text="Plan-defined information, shown only when contractually available. It is not a quote or a guarantee."
              d={[
                "Plan-defined information, shown only when contractually available. It is not a quote or a",
                "guarantee.",
              ]}
            />
          }
        />
        <ul className="grid w-full gap-6 pt-[26px] sm:grid-cols-2 lg:grid-cols-5">
          {items.map((item) => (
            <li
              key={item.title}
              className={`${card} flex flex-col items-center gap-2 p-[26px] text-center drop-shadow-[0_10px_10px_rgba(36,59,115,0.1)] lg:h-[215px]`}
            >
              <span
                aria-hidden="true"
                className="flex size-[40px] items-center justify-center rounded-[10px] bg-[linear-gradient(135deg,#7657e8_0%,#4267d5_100%)] text-[16px] font-bold leading-[25.6px] text-white"
              >
                {item.icon}
              </span>
              <h3 className={`${cardTitle} pt-[5.32px]`}>
                <Copy text={item.title} d={item.td} />
              </h3>
              <p className={cardText}>
                <Copy text={item.text} d={item.d} />
              </p>
            </li>
          ))}
        </ul>
        <p className={`${note} w-full max-w-[860px] min-[1400px]:max-w-none min-[1400px]:w-[860px]`}>
          Actual terms and payment obligations are decided under the applicable plan and payer rules.
        </p>
      </div>
    </section>
  );
}

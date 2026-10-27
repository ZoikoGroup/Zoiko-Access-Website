import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { Eyebrow, Title, card, cardText, cardTitle, inner, photoBg, sectionPad } from "./ui";

const principles = [
  {
    title: "Verified recipients",
    text: "Designed to confirm who should receive information before it is sent.",
    d: ["Designed to confirm who should receive", "information before it is sent."],
    src: "principle-verified-recipients",
    alt: "Looking up between old stone buildings to a blue sky",
  },
  {
    title: "Human responsibility",
    text: "A named person or role owns each review and each decision.",
    d: ["A named person or role owns each review and", "each decision."],
    src: "principle-human-responsibility",
    alt: "A green park beside city towers",
  },
  {
    title: "Evidence-backed status",
    text: "Each status shows what proves it, and who said it.",
    d: ["Each status shows what proves it, and who", "said it."],
    src: "principle-evidence-status",
    alt: "An open laptop on a wooden desk",
  },
  {
    title: "Reliable escalation",
    text: "Designed so an unresolved issue reaches an accountable owner.",
    d: ["Designed so an unresolved issue reaches an", "accountable owner."],
    src: "principle-reliable-escalation",
    alt: "A small red boat on dark rolling water",
  },
];

export default function SafetyPrinciples() {
  return (
    <section
      id="principles"
      className={`w-full scroll-mt-[40px] bg-[#f8fcff] py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div className={`${inner} flex flex-col items-start gap-[40px]`}>
        <div className="flex w-full max-w-[760px] flex-col items-start gap-[15.1px]">
          <Eyebrow>Four safety principles</Eyebrow>
          <Title>
            <Copy
              text="A designed approach, not a service promise."
              d={["A designed approach, not a service", "promise."]}
            />
          </Title>
        </div>

        <ul className="grid w-full gap-[22px] lg:grid-cols-2">
          {principles.map((item) => (
            <li
              key={item.title}
              className={`${card} flex flex-col items-start gap-[20px] p-[22px] sm:flex-row sm:items-center lg:h-[196px]`}
            >
              <div
                className={`relative size-[150px] shrink-0 overflow-hidden rounded-[14px] ${photoBg}`}
                role="img"
                aria-label={item.alt}
              >
                <FigmaImage
                  src={`/safety-escalation/${item.src}.webp`}
                  box={{ left: -14.29, width: 128.57 }}
                  sizes="150px"
                />
              </div>
              <div className="flex min-w-0 flex-col gap-[8px]">
                <h3 className={cardTitle}>{item.title}</h3>
                <p className={cardText}>
                  <Copy text={item.text} d={item.d} />
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

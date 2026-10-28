import Copy from "./Copy";
import FigmaImage, { type ImageBox } from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { SecHead, Tag, card, cardText, inner, sectionPad } from "./ui";

type Item = {
  owner: string;
  title: string;
  text: string;
  d: string[];
  tag: string;
  tone?: "blue" | "violet";
  src: string;
  alt: string;
  box: ImageBox;
};

const items: Item[] = [
  {
    owner: "1 · Payer authority",
    title: "Plan terms, coverage & adjudication",
    text: "Payers determine plan rules, benefits, coverage and authorization decisions, and retain claim adjudication and financial settlement under their own contracts.",
    d: [
      "Payers determine plan rules, benefits, coverage",
      "and authorization decisions, and retain claim",
      "adjudication and financial settlement under their",
      "own contracts.",
    ],
    tag: "Source of record: the payer",
    src: "authority-payer-analyst",
    alt: "Benefits analyst reviewing plan information on a laptop",
    box: { top: -7, height: 114 },
  },
  {
    owner: "2 · Provider clinical authority",
    title: "Clinical actions & clinical records",
    text: "Care professionals retain clinical decisions, treatment and the clinical source records. Payer funding or sponsorship does not grant access to those records.",
    d: [
      "Care professionals retain clinical decisions,",
      "treatment and the clinical source records. Payer",
      "funding or sponsorship does not grant access to",
      "those records.",
    ],
    tag: "Source of record: the provider",
    src: "authority-provider-clinician",
    alt: "Clinician reviewing a patient record",
    box: { top: -2.1, height: 104.2 },
  },
  {
    owner: "3 · Zoiko Access coordination design",
    title: "Permissioned, attributable handoffs",
    text: "Designed to help authorized parties follow administrative steps with clear source and ownership labels. It is not an insurer, does not determine coverage and does not hold funds.",
    d: [
      "Designed to help authorized parties follow",
      "administrative steps with clear source and",
      "ownership labels. It is not an insurer, does not",
      "determine coverage and does not hold funds.",
    ],
    tag: "Designed to · where supported",
    tone: "violet",
    src: "authority-coordination",
    alt: "Team coordinating an administrative handoff",
    box: { top: -3.3, height: 106.6 },
  },
];

export default function Accountability() {
  return (
    <section className={`w-full bg-white pt-12 lg:pt-[96px] ${sectionPad}`}>
      <div className={`${inner} flex flex-col items-start gap-11`}>
        <SecHead
          eyebrow="Who is responsible"
          title={
            <Copy
              text="Three authorities. One clearly defined boundary."
              d={["Three authorities.", "One clearly defined boundary."]}
            />
          }
          lead={
            <Copy
              text="Zoiko Access is designed as a coordination layer for authorized payer and insurer administrative pathways. The payer remains authoritative for plan benefits and coverage decisions, and clinical providers remain responsible for care."
              d={[
                "Zoiko Access is designed as a coordination layer for authorized payer and insurer",
                "administrative pathways. The payer remains authoritative for plan benefits and coverage",
                "decisions, and clinical providers remain responsible for care.",
              ]}
            />
          }
        />

        <ul className="grid w-full gap-6 md:grid-cols-3">
          {items.map((item) => (
            <li key={item.owner} className={`${card} flex flex-col overflow-hidden`}>
              <div
                className="relative h-[220px] w-full overflow-hidden bg-[linear-gradient(135deg,#dcd3fb_0%,#c7d3f5_100%)] lg:h-[255.41px]"
                role="img"
                aria-label={item.alt}
              >
                <FigmaImage
                  src={`/payers-insurers/${item.src}.webp`}
                  box={item.box}
                  sizes="(min-width: 1024px) 440px, 90vw"
                />
              </div>
              <div className="flex flex-1 flex-col items-start gap-[6px] p-6">
                <p className="text-[12px] font-semibold uppercase leading-[20px] tracking-[0.96px] text-[#4267d5]">
                  {item.owner}
                </p>
                <h3 className={`${fontPoppins} pb-2 text-[19px] font-semibold leading-[26px] text-[#16245a]`}>
                  {item.title}
                </h3>
                <p className={`${cardText} flex-1`}>
                  <Copy text={item.text} d={item.d} />
                </p>
                <Tag tone={item.tone}>{item.tag}</Tag>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

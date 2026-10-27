import Copy from "./Copy";
import FigmaImage, { type ImageBox } from "./FigmaImage";
import { Eyebrow, Lede, Title, card, cardText, cardTitle, inner, photoBg, sectionPad } from "./ui";

const principles: {
  title: string;
  titleD?: string[];
  text: string;
  d: string[];
  src: string;
  alt: string;
  box: ImageBox;
}[] = [
  {
    title: "Access minimization",
    text: "Only what is needed, for an approved purpose.",
    d: ["Only what is needed, for an", "approved purpose."],
    src: "security-access-minimization",
    alt: "Hands typing on a laptop on a wooden desk",
    box: { top: -12.22, height: 124.44 },
  },
  {
    title: "Secure transport",
    text: "Controls are subject to architecture sign-off.",
    d: ["Controls are subject to", "architecture sign-off."],
    src: "security-secure-transport",
    alt: "A golden meadow with a lone tree",
    box: { top: -12.22, height: 124.44 },
  },
  {
    title: "Provenance and audit",
    text: "Who sent what, when, and who acted.",
    d: ["Who sent what, when, and", "who acted."],
    src: "security-provenance-audit",
    alt: "Waves crashing over dark rocks",
    box: { top: -12.22, height: 124.44 },
  },
  {
    title: "Retention and region separation",
    titleD: ["Retention and region", "separation"],
    text: "Handled under local rules and agreements.",
    d: ["Handled under local rules and", "agreements."],
    src: "security-retention-region",
    alt: "A red figure standing apart from a row of wooden figures",
    box: { top: -9.66, height: 109.69 },
  },
];

export default function SecurityPrinciples() {
  return (
    <section
      id="security"
      className={`w-full bg-[radial-gradient(ellipse_520px_420px_at_1240px_219px,#ac96ff_0%,#e0d8ff_100%)] py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div className={`${inner} flex flex-col items-start gap-[40px]`}>
        <div className="flex w-full max-w-[760px] flex-col items-start gap-[12.9px]">
          <Eyebrow>Security, privacy and audit</Eyebrow>
          <Title size="md" className="lg:pt-[2.1px]">
            Designed principles, not certifications.
          </Title>
          <Lede className="lg:pb-[0.56px]">
            <Copy
              text="No certification, protocol or data-residency guarantee is claimed. Encryption posture is subject to architecture sign-off."
              d={[
                "No certification, protocol or data-residency guarantee is claimed. Encryption posture",
                "is subject to architecture sign-off.",
              ]}
            />
          </Lede>
        </div>

        <ul className="grid w-full gap-[22px] sm:grid-cols-2 lg:h-[368px] lg:grid-cols-4">
          {principles.map((item) => (
            <li
              key={item.title}
              className={`${card} overflow-hidden drop-shadow-[0_10px_15px_rgba(60,50,160,0.06)] lg:h-[330px]`}
            >
              <div
                className={`relative h-[190px] w-full overflow-hidden rounded-t-[10px] ${photoBg}`}
                role="img"
                aria-label={item.alt}
              >
                <FigmaImage
                  src={`/lab-imaging-integration/${item.src}.webp`}
                  box={item.box}
                  sizes="(min-width: 1024px) 308px, 90vw"
                />
              </div>
              <div className="px-[22px] pb-[22px] pt-[14px]">
                <h3 className={`${cardTitle} pb-[8px]`}>
                  <Copy text={item.title} d={item.titleD} />
                </h3>
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

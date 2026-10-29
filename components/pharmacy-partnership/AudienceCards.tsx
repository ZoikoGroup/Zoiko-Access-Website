import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { Eyebrow, Title, card, cardText, cardTitle, inner, photoBg, sectionPad } from "./ui";

const audiences = [
  {
    title: "Independent pharmacies",
    text: "Single-site pharmacies can explore whether and how they may take part.",
    d: ["Single-site pharmacies can explore whether", "and how they may take part."],
    src: "audience-independent",
    alt: "A tall glass tower against a dusky sky",
    gap: "lg:pt-[18px]",
  },
  {
    title: "Pharmacy networks",
    text: "Multi-site operators can review coordination across locations.",
    d: ["Multi-site operators can review coordination", "across locations."],
    src: "audience-networks",
    alt: "A hand holding a phone up to photograph a river city",
    gap: "lg:pt-[18px]",
  },
  {
    title: "Service and technology operators",
    titleD: ["Service and technology", "operators"],
    text: "Operators of pharmacy systems can review the interface requirements.",
    d: ["Operators of pharmacy systems can review", "the interface requirements."],
    src: "audience-operators",
    alt: "A cactus in a round pot on a wooden window sill",
    gap: "lg:pt-[18px]",
  },
];

export default function AudienceCards() {
  return (
    <section
      className={`w-full bg-[#f3fbff] py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div className={`${inner} flex flex-col items-start gap-[40px]`}>
        <div className="flex w-full max-w-[760px] flex-col items-start gap-[15.1px]">
          <Eyebrow>Who this is for</Eyebrow>
          <Title>
            <Copy
              text="Three kinds of organization may explore eligibility."
              d={["Three kinds of organization may ", "explore eligibility."]}
            />
          </Title>
        </div>

        <ul className="grid w-full gap-[22px] lg:h-[444px] lg:grid-cols-3">
          {audiences.map((item) => (
            <li
              key={item.title}
              className={`${card} p-[22px] drop-shadow-[0_10px_15px_rgba(60,50,160,0.06)] lg:h-[418px]`}
            >
              <div
                className={`relative aspect-[310/193.75] w-full overflow-hidden rounded-[10px] ${photoBg}`}
                role="img"
                aria-label={item.alt}
              >
                <FigmaImage
                  src={`/pharmacy-partnership/${item.src}.webp`}
                  box={{ top: -12.22, height: 124.44 }}
                  sizes="(min-width: 1024px) 380px, 90vw"
                />
              </div>
              <h3 className={`${cardTitle} pb-[8px] pt-[18px]`}>
                <Copy text={item.title} d={item.titleD} />
              </h3>
              <p className={cardText}>
                <Copy text={item.text} d={item.d} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

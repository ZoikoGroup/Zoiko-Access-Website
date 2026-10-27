import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, Lede, Title, inner, photoBg, sectionPad } from "./ui";

const pillars = [
  {
    title: "Discoverability",
    text: "Designed to help people find accurate published service information.",
    d: ["Designed to help people find accurate", "published service information."],
    src: "pillar-discoverability",
    alt: "Dark rock cliffs in mist",
  },
  {
    title: "Coordination",
    text: "Designed to support clearer handoffs between organizations.",
    d: ["Designed to support clearer handoffs", "between organizations."],
    src: "pillar-coordination",
    alt: "A dark kitchen table with a cutting board, bowls and a pan",
  },
  {
    title: "Evidence-backed updates",
    text: "Designed to show the source and freshness of information.",
    d: ["Designed to show the source and", "freshness of information."],
    src: "pillar-evidence",
    alt: "The patterned facade of a tall office tower",
  },
  {
    title: "Governed connectivity",
    text: "Designed to connect systems under approved controls.",
    d: ["Designed to connect systems under", "approved controls."],
    src: "pillar-connectivity",
    alt: "A figure standing in a large industrial hall in black and white",
  },
];

export default function PartnershipPillars() {
  return (
    <section
      id="proposition"
      className={`w-full scroll-mt-[40px] bg-[linear-gradient(180deg,#ffffff_0%,#ebe9fb_40%,#ffffff_100%)] py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div className={`${inner} flex flex-col items-center gap-[40px] lg:px-6`}>
        <div className="flex w-full max-w-[760px] flex-col items-center gap-[13px] text-center">
          <Eyebrow center>Partnership proposition</Eyebrow>
          <Title className="text-center lg:whitespace-nowrap lg:pt-[2px]">
            Four pillars, each framed as designed to.
          </Title>
          <Lede className="text-center lg:pb-[0.7px]">
            These describe an approach, not a guaranteed outcome in any market.
          </Lede>
        </div>

        <ul className="grid w-full gap-[22px] sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((item) => (
            <li key={item.title} className="flex flex-col items-center gap-[7.4px]">
              <div
                className={`relative size-[180px] shrink-0 overflow-hidden rounded-full border-[6px] border-solid border-[#ebe9fb] ${photoBg}`}
                role="img"
                aria-label={item.alt}
              >
                <FigmaImage
                  src={`/pharmacy-partnership/${item.src}.webp`}
                  box={{ left: -14.29, width: 128.57 }}
                  sizes="180px"
                />
              </div>
              <h3
                className={`${fontPoppins} pt-[9.6px] text-center text-[17.3px] font-semibold leading-[19.35px] tracking-[-0.173px] text-[#243b73]`}
              >
                {item.title}
              </h3>
              <p className="text-center text-[14.4px] font-normal leading-[23.76px] text-[#273444]">
                <Copy text={item.text} d={item.d} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

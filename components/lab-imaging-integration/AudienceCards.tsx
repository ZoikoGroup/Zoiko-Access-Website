import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, Title, inner, sectionPad } from "./ui";

const audiences = [
  {
    title: "Laboratories",
    text: "Publish source-of-record orders, statuses and reports through an approved interface.",
    d: ["Publish source-of-record orders, statuses", "and reports through an approved interface."],
    src: "audience-laboratories",
    alt: "Dark oak trees on a golden sepia hillside",
    textColor: "text-[#e1d3d3]",
  },
  {
    title: "Imaging & radiology",
    text: "Coordinate scheduling and report delivery while images stay with the archive owner.",
    d: ["Coordinate scheduling and report delivery", "while images stay with the archive owner."],
    src: "audience-imaging",
    alt: "Tall pines over a green marsh under a pink sky",
    textColor: "text-white",
  },
  {
    title: "Hospitals and integration teams",
    text: "Receive information, validate it and assign an accountable next action.",
    d: ["Receive information, validate it and assign", "an accountable next action."],
    src: "audience-integration-teams",
    alt: "A geometric glass and steel roof in black and white",
    textColor: "text-white",
  },
];

export default function AudienceCards() {
  return (
    <section className={`w-full bg-[#f4f8fd] py-12 lg:py-[70px] ${sectionPad}`}>
      <div className={`${inner} flex flex-col items-start gap-[40px]`}>
        <div className="flex w-full max-w-[760px] flex-col items-start gap-[15px]">
          <Eyebrow>Who this page serves</Eyebrow>
          <Title className="lg:max-w-none lg:whitespace-nowrap">
            Three audiences, three integration tasks.
          </Title>
        </div>

        <ul className="grid w-full gap-[22px] lg:grid-cols-3">
          {audiences.map((item) => (
            <li
              key={item.title}
              className="relative h-[359px] overflow-hidden rounded-[20px] border border-solid border-[#dcd6f2] bg-white drop-shadow-[0_10px_15px_rgba(60,50,160,0.06)]"
            >
              <FigmaImage
                src={`/lab-imaging-integration/${item.src}.webp`}
                alt={item.alt}
                box={{ top: -12.22, height: 124.44 }}
                sizes="(min-width: 1024px) 420px, 90vw"
              />
              <div className="absolute inset-x-0 bottom-0 flex h-[98px] flex-col bg-[rgba(255,255,255,0.4)] p-[10px] backdrop-blur-[5px]">
                <h3
                  className={`${fontPoppins} pb-[8px] text-[19.2px] font-semibold leading-[21.5px] tracking-[-0.192px] text-[#243b73]`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-[14.7px] font-normal leading-[24.29px] ${item.textColor}`}
                >
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

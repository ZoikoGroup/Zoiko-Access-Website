import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, Lede, Title, inner, photoBg, sectionPad } from "./ui";

const boxes = [
  {
    title: "Authoritative source system",
    text: "Holds the record and owns its correctness.",
    d: ["Holds the record and owns its", "correctness."],
    evidence: "Evidence: source record",
    src: "architecture-source-system",
    alt: "A field of dandelions in long grass",
    edge: "border-[#4267d5]",
  },
  {
    title: "Authorized interface / transport",
    text: "Moves permitted information under agreed controls.",
    d: ["Moves permitted information under agreed ", "controls."],
    evidence: "Evidence: transport acknowledgment",
    src: "architecture-interface",
    alt: "A hand holding a phone above a laptop on a wooden desk",
    edge: "border-[#243b73]",
  },
  {
    title: "Validation and evidence",
    text: "Checks identity, structure and provenance.",
    evidence: "Evidence: validation result",
    src: "architecture-validation",
    alt: "A misty mountain slope with bare autumn trees",
    edge: "border-[#4267d5]",
  },
  {
    title: "Accountable receiver and next action",
    titleD: ["Accountable receiver and", "next action"],
    text: "A named role reviews and decides.",
    evidence: "Evidence: review and action record",
    src: "architecture-receiver",
    alt: "Tall trees in a foggy forest",
    edge: "border-[#243b73]",
  },
];

export default function ArchitectureBoxes() {
  return (
    <section
      id="approach"
      className={`w-full scroll-mt-[40px] bg-[linear-gradient(180deg,#ffffff_0%,#ebe9fb_40%,#ffffff_100%)] py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div className={`${inner} flex flex-col items-start gap-[40px] lg:px-6`}>
        <div className="flex w-full max-w-[760px] flex-col items-start gap-[12.7px] lg:pt-[2px]">
          <Eyebrow>Four-part architecture</Eyebrow>
          <Title className="lg:pt-[2.4px]">
            <Copy
              text="Control and evidence boundaries, left to right."
              d={["Control and evidence boundaries, ", "left to right."]}
            />
          </Title>
          <Lede>
            <Copy
              text="No clinical data is shown. Text equivalent: an authoritative source system sends through an authorized interface; the information is validated and evidenced; an accountable receiver decides the next action."
              d={[
                "No clinical data is shown. Text equivalent: an authoritative source system sends",
                "through an authorized interface; the information is validated and evidenced; an",
                "accountable receiver decides the next action.",
              ]}
            />
          </Lede>
        </div>

        <ul className="grid w-full gap-x-[39px] gap-y-[12px] py-[10px] lg:grid-cols-2">
          {boxes.map((box) => (
            <li
              key={box.title}
              className={`flex flex-col gap-4 rounded-[10px] border-[0.5px] border-solid bg-white p-[18px] drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)] sm:flex-row sm:items-center sm:gap-[22px] lg:min-h-[180px] ${box.edge}`}
            >
              <div
                className={`relative aspect-[244/152] w-full overflow-hidden rounded-[8px] sm:w-[40%] sm:shrink-0 ${photoBg}`}
                role="img"
                aria-label={box.alt}
              >
                <FigmaImage
                  src={`/lab-imaging-integration/${box.src}.webp`}
                  box={{ top: -12.22, height: 124.44 }}
                  sizes="(min-width: 1024px) 240px, 90vw"
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-[2px] lg:min-h-[119px]">
                <h3
                  className={`${fontPoppins} pb-[4px] pt-[3px] text-[16.3px] font-semibold leading-[18.28px] tracking-[-0.163px] text-[#243b73]`}
                >
                  <Copy text={box.title} d={box.titleD} />
                </h3>
                <p className="text-[13.8px] font-normal leading-[22.7px] text-[#273444]">
                  <Copy text={box.text} d={box.d} />
                </p>
                <p
                  className={`${fontPoppins} mt-auto pt-[10px] text-[11.8px] font-semibold leading-[19.54px] text-[#4267d5]`}
                >
                  {box.evidence}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

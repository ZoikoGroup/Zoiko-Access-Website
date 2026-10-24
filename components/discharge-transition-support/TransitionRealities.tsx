import Copy from "./Copy";
import FigmaImage, { type ImageBox } from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, Title, inner, sectionPad } from "./ui";

const cards: {
  title: string;
  text: string;
  lines: string[];
  src: string;
  box: ImageBox;
}[] = [
  {
    title: "Multiple handoffs",
    text: "Several teams and systems touch a single transition. No outcome figures are claimed.",
    lines: [
      "Several teams and systems touch a single",
      "transition. No outcome figures are claimed.",
    ],
    src: "reality-handoffs",
    box: { top: -8.96, height: 117.92 },
  },
  {
    title: "Uncertain next-step ownership",
    text: "It is not always clear who holds the next step. No outcome figures are claimed.",
    lines: [
      "It is not always clear who holds the next",
      "step. No outcome figures are claimed.",
    ],
    src: "reality-ownership",
    box: { top: -9.26, height: 118.52 },
  },
  {
    title: "Fragmented acknowledgment",
    text: "Acknowledgments are scattered across places. No outcome figures are claimed.",
    lines: [
      "Acknowledgments are scattered across",
      "places. No outcome figures are claimed.",
    ],
    src: "reality-acknowledgment",
    box: { top: -83.33, height: 266.66 },
  },
];

export default function TransitionRealities() {
  return (
    <section className={`w-full bg-white py-12 lg:py-[70px] ${sectionPad}`}>
      <div className={`${inner} flex flex-col items-start gap-[13px]`}>
        <Eyebrow>TRANSITION REALITIES</Eyebrow>
        <Title>Three things that make transitions hard</Title>

        <ul className="grid w-full gap-[18px] pt-[17px] md:grid-cols-3">
          {cards.map((card) => (
            <li
              key={card.title}
              className="overflow-hidden rounded-[22px] border border-solid border-[#d9d3f5] bg-white shadow-[0_10px_20px_rgba(0,0,0,0.1)]"
            >
              <div className="relative aspect-[370/208.13] w-full overflow-hidden bg-[linear-gradient(135deg,#e8e2ff_0%,#d5dcff_100%)]">
                <FigmaImage
                  src={`/discharge-transition-support/${card.src}.webp`}
                  box={card.box}
                  sizes="(min-width: 1024px) 370px, 90vw"
                />
              </div>
              <div className="flex flex-col gap-[6px] p-[20px]">
                <h3
                  className={`${fontPoppins} text-[19px] font-semibold leading-[21.85px] tracking-[-0.38px] text-[#031974]`}
                >
                  {card.title}
                </h3>
                <p className="text-[16px] font-normal leading-[26.4px] text-[#273444]">
                  <Copy text={card.text} d={card.lines} />
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

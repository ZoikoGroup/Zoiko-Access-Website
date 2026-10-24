import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import type { ImageBox } from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, Title, inner, sectionPad } from "./ui";

type Reader = {
  title: string;
  text: string;
  d?: string[];
  image: string;
  box: ImageBox;
  /** The fourth Figma card has square outer corners. */
  square?: boolean;
};

const readers: Reader[] = [
  {
    title: "CIO",
    text: "Integration posture and risk.",
    image: "/ehr-interoperability/reader-cio.webp",
    box: { left: -5.72, width: 111.44 },
  },
  {
    title: "Integration architect",
    text: "Mapping, standards and testing.",
    image: "/ehr-interoperability/reader-architect.webp",
    box: { left: -5.89, width: 111.77 },
  },
  {
    title: "Clinical informatician",
    text: "Clinical meaning and safety.",
    image: "/ehr-interoperability/reader-informatician.webp",
    box: { left: -5.89, width: 111.77 },
  },
  {
    title: "Procurement",
    text: "Requirements and route to contact, when one exists.",
    d: ["Requirements and route to contact,", "when one exists."],
    image: "/ehr-interoperability/reader-procurement.webp",
    box: { left: -5.72, width: 111.44 },
    square: true,
  },
];

export default function FourReaders() {
  return (
    <section className={`w-full bg-white py-12 lg:py-[70px] ${sectionPad}`}>
      <div className={`${inner} flex flex-col items-start gap-[13px]`}>
        <Eyebrow>ROLES AND INSTITUTIONAL JOURNEYS</Eyebrow>
        <Title>Four readers</Title>

        <div className="grid w-full gap-[16px] pt-[16.99px] sm:grid-cols-2 lg:grid-cols-4 lg:items-start">
          {readers.map((reader) => (
            <article
              key={reader.title}
              className={`flex w-full flex-col items-start overflow-clip drop-shadow-[0px_10px_10px_rgba(0,0,0,0.1)] ${
                reader.square ? "" : "rounded-[22px]"
              }`}
            >
              <div className="relative aspect-[274/205.5] w-full shrink-0 overflow-hidden rounded-b-[18px] rounded-t-full border-[3px] border-solid border-white bg-[linear-gradient(134.78deg,#e8e2ff_0%,#d5dcff_100%)] shadow-[0px_12px_28px_0px_rgba(47,66,203,0.18)]">
                <FigmaImage
                  src={reader.image}
                  box={reader.box}
                  sizes="(min-width: 1440px) 320px, 45vw"
                />
              </div>
              <div className="flex min-h-[130px] w-full flex-col items-start gap-[4px] bg-white px-[16px] pb-[16px] pt-[15px]">
                <h3
                  className={`${fontPoppins} w-full pb-[0.55px] text-center text-[17px] font-semibold leading-[19.55px] tracking-[-0.34px] text-[#031974]`}
                >
                  {reader.title}
                </h3>
                <p className="w-full text-center text-[14px] font-normal leading-[23.1px] text-[#273444]">
                  <Copy text={reader.text} d={reader.d} />
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { Eyebrow, Lede, Title, card, cardText, cardTitle, inner, sectionPad } from "./ui";

const pathways = [
  {
    title: "For laboratories",
    text: "Laboratory information systems (LIS), specimens, tests and released results.",
    d: ["Laboratory information systems (LIS), specimens, tests and released", "results."],
    href: "/for-laboratories",
    src: "pathway-laboratory",
    photo: "h-[324px]",
    alt: "Vintage cameras on a wooden shelf",
    wrap: "lg:h-[351px]",
  },
  {
    title: "Imaging & radiology",
    text: "Radiology workflow systems (RIS), image archives (PACS) and radiologist reports.",
    d: ["Radiology workflow systems (RIS), image archives (PACS) and", "radiologist reports."],
    href: "/lab-imaging-integration",
    src: "pathway-imaging",
    photo: "h-[330px]",
    alt: "A forested hillside in morning mist",
    wrap: "lg:h-[347px]",
  },
];

export default function SourcePathways() {
  return (
    <section className={`w-full bg-white py-12 lg:py-[70px] ${sectionPad}`}>
      <div className={`${inner} flex flex-col items-start gap-[40px]`}>
        <div className="flex w-full max-w-[760px] flex-col items-start gap-[13px]">
          <Eyebrow>Laboratory vs imaging pathways</Eyebrow>
          <Title className="lg:pt-[2.1px]">
            <Copy
              text="Two source-system families, two detailed pages."
              d={["Two source-system families, two detailed", "pages."]}
            />
          </Title>
          <Lede className="lg:pb-[0.7px]">
            The sibling pages own the system models. This page does not repeat
            their claims.
          </Lede>
        </div>

        <ul className="grid w-full items-start gap-[22px] lg:grid-cols-2">
          {pathways.map((item) => (
            <li key={item.title} className={`${card} p-[23px]`}>
              <div className={`pb-[18px] ${item.wrap}`}>
                <div
                  className={`relative w-full overflow-hidden rounded-[10px] bg-[linear-gradient(139deg,#4267d5_0%,#7657e8_100%)] ${item.photo}`}
                  role="img"
                  aria-label={item.alt}
                >
                  <FigmaImage
                    src={`/diagnostics-coordination/${item.src}.webp`}
                    box={{ top: -12.22, height: 124.44 }}
                    sizes="(min-width: 1024px) 600px, 90vw"
                  />
                </div>
              </div>
              <h3 className={cardTitle}>{item.title}</h3>
              <p className={cardText}>
                <Copy text={item.text} d={item.d} />
              </p>
              <Link
                href={item.href}
                className="block pt-[14px] text-[13.6px] font-semibold leading-[22.44px] text-[#4267d5]"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

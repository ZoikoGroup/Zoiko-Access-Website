import Link from "next/link";
import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, Title, inner, photoBg, sectionPad } from "./ui";

const paths = [
  { title: "For pharmacies", text: "The category overview.", href: "/for-pharmacies", src: "path-pharmacies", alt: "A hand moving the sliders on a mixing desk" },
  { title: "Prescription routing", text: "How an authorized prescription may be routed.", d: ["How an authorized prescription may be", "routed."], href: "/prescription-routing", src: "path-prescription-routing", alt: "Orange rock formations under a starry night sky" },
  { title: "Partner program", text: "Informational only, until the intake route is verified.", d: ["Informational only, until the intake route is", "verified."], href: "/pharmacy-partnership", src: "path-partner-program", alt: "A hiker standing on a rocky ridge above misty valleys" },
];

export default function EcosystemPaths() {
  return (
    <section
      className={`w-full bg-[linear-gradient(-67.87deg,#a508bd_1.74%,#00248f_34.33%,#01003f_99.65%)] py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div className={`${inner} flex flex-col items-start gap-[40px]`}>
        <div className="flex w-full max-w-[760px] flex-col items-start gap-[15.11px]">
          <Eyebrow tone="violet">Ecosystem paths</Eyebrow>
          <Title tone="light" className="text-[#edf1f5]">
            <Copy
              text="Continue to the page that owns your question."
              d={["Continue to the page that owns your", "question."]}
            />
          </Title>
        </div>

        <ul className="grid w-full gap-[22px] md:grid-cols-3">
          {paths.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="block rounded-[14px] bg-[rgba(58,58,58,0.4)] p-[23px] shadow-[0_10px_30px_rgba(60,50,160,0.06)] lg:h-[391px]"
              >
                <span
                  className={`relative block aspect-[310/193.75] w-full overflow-hidden rounded-[10px] ${photoBg}`}
                  role="img"
                  aria-label={item.alt}
                >
                  <FigmaImage
                    src={`/fulfillment-availability/${item.src}.webp`}
                    box={{ top: -12.22, height: 124.44 }}
                    sizes="(min-width: 1024px) 380px, 90vw"
                  />
                </span>
                <span
                  className={`${fontPoppins} block pb-[8px] pt-[18px] text-[19.2px] font-semibold leading-[21.5px] tracking-[-0.192px] text-[#8e7bef]`}
                >
                  {item.title}
                </span>
                <span className="block text-[14.7px] font-normal leading-[24.29px] text-[#fff7e6]">
                  <Copy text={item.text} d={item.d} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

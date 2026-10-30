import Link from "next/link";
import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { Eyebrow, Title, cardTitle, inner, photoBg, sectionPad } from "./ui";

const destinations: {
  title: string;
  d?: string[];
  href: string;
  src: string;
  alt: string;
}[] = [
  {
    title: "For laboratories",
    href: "/for-laboratories",
    src: "related-laboratories",
    alt: "Palm trees against a warm evening sky",
  },
  {
    title: "Imaging & radiology",
    href: "/lab-imaging-integration",
    src: "related-imaging",
    alt: "A stormy sky over the sea",
  },
  {
    title: "Prescription routing",
    href: "/prescription-routing",
    src: "related-prescription",
    alt: "Water droplets on a grey surface",
  },
  {
    title: "Lab & imaging integration",
    d: ["Lab & imaging", "integration"],
    href: "/lab-imaging-integration",
    src: "related-integration",
    alt: "Close-up of dark blue rippling water",
  },
];

export default function RelatedDestinations() {
  return (
    <section
      id="related"
      className={`w-full bg-[linear-gradient(180deg,#ffffff_0%,#ebe9fb_40%,#ffffff_100%)] py-12 lg:min-h-[708px] lg:py-[70px] ${sectionPad}`}
    >
      <div className={`${inner} flex flex-col items-start gap-[26px]`}>
        <div className="flex w-full max-w-[760px] flex-col items-start gap-[15.11px]">
          <Eyebrow>Related destinations</Eyebrow>
          <Title>
            <Copy
              text="Continue to the page that owns your question."
              d={["Continue to the page that owns your", "question."]}
            />
          </Title>
        </div>

        <ul className="grid w-full gap-[22px] pt-[14px] sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((item) => (
            <li key={item.title} className="flex">
              <Link
                href={item.href}
                className="block w-full rounded-[14px] border border-solid border-[#dcd6f2] bg-white px-[22px] pb-[43.5px] pt-[22px] drop-shadow-[0_10px_15px_rgba(60,50,160,0.06)] lg:last:pb-[22px]"
              >
                <span
                  className={`relative mb-[18px] block aspect-[215.5/134.69] w-full overflow-hidden rounded-[10px] ${photoBg}`}
                  role="img"
                  aria-label={item.alt}
                >
                  <FigmaImage
                    src={`/safety-escalation/${item.src}.webp`}
                    box={{ top: -12.22, height: 124.44 }}
                    sizes="(min-width: 1024px) 260px, 90vw"
                  />
                </span>
                <span className={`${cardTitle} block pb-[8px]`}>
                  <Copy text={item.title} d={item.d} />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <p className="w-full rounded-[10px] bg-[#ebe9fb] px-[16px] pb-[13.92px] pt-[13.5px] text-[13.6px] font-normal leading-[22.44px] text-[#273444]">
          Information varies by location and participating organization.
        </p>
      </div>
    </section>
  );
}

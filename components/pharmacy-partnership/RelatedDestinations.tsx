import Link from "next/link";
import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { Eyebrow, Title, cardText, cardTitle, inner, photoBg, sectionPad } from "./ui";

const destinations = [
  { title: "For pharmacies", text: "The category overview.", href: "/for-pharmacies", src: "related-pharmacies", alt: "Glass towers seen from below against the sky" },
  { title: "Prescription routing", text: "How authorized routing may work.", href: "/prescription-routing", src: "related-prescription-routing", alt: "A grassy track under a cloudy sky" },
  { title: "Fulfillment & availability", text: "Interpreting published availability.", href: "/fulfillment-availability", src: "related-fulfillment", alt: "A barn in a sunlit golden field" },
  { title: "Lab & imaging integration", text: "Connection architecture and safeguards.", href: "/lab-imaging-integration", src: "related-lab-imaging", alt: "Northern lights over dark pine trees" },
  { title: "Safety & escalation", text: "Accountable handoffs and escalation.", href: "/safety-escalation", src: "related-safety", alt: "A person sitting on a rock above misty hills" },
];

export default function RelatedDestinations() {
  return (
    <section
      id="related"
      className={`w-full bg-[linear-gradient(180deg,#ffffff_0%,#ebe9fb_40%,#ffffff_100%)] py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div className={`${inner} flex flex-col items-center gap-[40px] lg:px-6`}>
        <div className="flex w-full max-w-[760px] flex-col items-center gap-[15.11px] text-center">
          <Eyebrow center>Related destinations</Eyebrow>
          <Title className="text-center">
            <Copy
              text="Continue to the page that owns your question."
              d={["Continue to the page that owns your", "question."]}
            />
          </Title>
        </div>

        <ul className="grid w-full gap-[22px] lg:grid-cols-2 lg:px-[0px]">
          {destinations.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="flex flex-col-reverse items-start gap-4 rounded-[14px] border border-solid border-[#dcd6f2] bg-white p-[23px] drop-shadow-[0_10px_10px_rgba(60,50,160,0.1)] sm:flex-row sm:items-center sm:justify-between sm:gap-[40px] lg:min-h-[138px]"
              >
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className={`${cardTitle} pb-[8px]`}>{item.title}</span>
                  <span className={cardText}>{item.text}</span>
                </span>
                <span
                  className={`relative block aspect-[310/193.75] w-full overflow-hidden rounded-[10px] sm:w-[238px] sm:shrink-0 ${photoBg}`}
                  role="img"
                  aria-label={item.alt}
                >
                  <FigmaImage
                    src={`/pharmacy-partnership/${item.src}.webp`}
                    box={{ top: -12.22, height: 124.44 }}
                    sizes="238px"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

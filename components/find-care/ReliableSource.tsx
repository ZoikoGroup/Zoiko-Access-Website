import Image from "next/image";
import Copy from "./Copy";
import Eyebrow from "./Eyebrow";
import SectionHeading from "./SectionHeading";
import { fontPoppins } from "./fonts";

// Listed in desktop order. On mobile the cards are numbered 1-3 and
// "Discover where approved" comes before "Request where separately authorized".
const cards = [
  {
    number: "1",
    title: "Learn",
    titleLines: undefined,
    text: "General service types, professional roles, and care pathways can be explained without a provider search.",
    d: [
      "General service types, professional roles, and",
      "care pathways can be explained without a",
      "provider search.",
    ],
    m: [
      "General service types, professional roles,",
      "and care pathways can be explained",
      "without a provider search.",
    ],
    image: "/find-care/card-learn.webp",
    layout: "order-1 min-h-[218.59px]",
  },
  {
    number: "3",
    title: "Request where separately authorized",
    titleLines: ["Request where separately", "authorized"],
    text: "Provider contact and appointment requests need their own partner, role, identity, and operational permissions. A request is not a confirmation.",
    d: [
      "Provider contact and appointment requests",
      "need their own partner, role, identity, and",
      "operational permissions. A request is not a",
      "confirmation.",
    ],
    m: [
      "Provider contact and appointment",
      "requests need their own partner, role,",
      "identity, and operational permissions. A",
      "request is not a confirmation.",
    ],
    image: "/find-care/card-request.webp",
    layout: "order-3 min-h-[263.53px] lg:order-2",
  },
  {
    number: "2",
    title: "Discover where approved",
    titleLines: undefined,
    text: "Public directory records require authorized country scope, current catalog data, published providers, and a valid release.",
    d: [
      "Public directory records require authorized",
      "country scope, current catalog data,",
      "published providers, and a valid release.",
    ],
    m: [
      "Public directory records require",
      "authorized country scope, current",
      "catalog data, published providers, and a",
      "valid release.",
    ],
    image: "/find-care/card-discover.webp",
    layout: "order-2 min-h-[243.67px] lg:order-3",
  },
];

export default function ReliableSource() {
  return (
    <section className="w-full bg-white px-[19.5px] pt-[56px] lg:px-[70px] lg:pt-0">
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start gap-[13.2px] lg:max-w-[1300px] lg:gap-[13.1px] lg:pb-[96.01px] lg:pt-[96px]">
        <Eyebrow>Before a directory is offered</Eyebrow>

        <SectionHeading desktopLines={2}>
          <Copy
            text="Discovery needs a reliable local source."
            d={["Discovery needs a reliable", "local source."]}
            m={["Discovery needs a reliable", "local source."]}
          />
        </SectionHeading>

        <p className="w-full max-w-[686.38px] pt-[0.71px] text-[16px] font-normal leading-[26.4px] text-[#5e5a86] lg:pt-[7.57px]">
          <Copy
            text="An informational website, approved directory, and appointment workflow are separate capabilities."
            d={[
              "An informational website, approved directory, and appointment workflow are separate",
              "capabilities.",
            ]}
            m={[
              "An informational website, approved directory,",
              "and appointment workflow are separate",
              "capabilities.",
            ]}
          />
        </p>

        <div className="flex w-full flex-col items-start gap-[20px] pt-[14.8px] lg:grid lg:h-[374px] lg:grid-cols-[409fr_407fr_409fr] lg:gap-x-[37.5px] lg:gap-y-0 lg:pt-[14.9px]">
          {cards.map((card) => (
            <article
              key={card.title}
              className={`relative w-full overflow-clip rounded-[18px] border border-solid border-[#e3def8] bg-white pt-[70px] shadow-[0px_12px_32px_0px_rgba(36,28,89,0.1),0px_2px_6px_0px_rgba(36,28,89,0.05)] lg:flex lg:h-[352px] lg:min-h-0 lg:flex-col lg:items-start lg:pt-0 ${card.layout}`}
            >
              <span
                className="absolute left-[24px] top-[24px] flex size-[46px] flex-col items-center justify-center rounded-[14px] bg-[#e8e8f8] text-center text-[22px] font-semibold leading-[36.3px] text-[#5b49c8] lg:hidden"
                aria-hidden="true"
              >
                {card.number}
              </span>
              <div className="relative hidden h-[161px] w-full shrink-0 lg:block">
                <Image
                  src={card.image}
                  alt=""
                  fill
                  sizes="(min-width: 1440px) 409px, 30vw"
                  className="object-cover"
                />
              </div>
              <div className="flex w-full flex-col items-start gap-[9.5px] px-[24px] pb-[24px] pt-[17px]">
                <h3
                  className={`${fontPoppins} w-full pb-[0.99px] text-[17.3px] font-bold leading-[19.87px] text-[#241c59]`}
                >
                  <Copy
                    text={card.title}
                    d={card.titleLines}
                    m={card.titleLines}
                  />
                </h3>
                <p className="w-full max-w-[651.52px] text-[15.2px] font-normal leading-[25px] text-[#5e5a86]">
                  <Copy text={card.text} d={card.d} m={card.m} />
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

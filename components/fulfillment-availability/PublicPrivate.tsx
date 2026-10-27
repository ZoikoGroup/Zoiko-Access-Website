import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { Eyebrow, Title, card, cardText, cardTitle, inner, photoBg, sectionPad } from "./ui";

const items = [
  {
    title: "Public view",
    text: "Only de-identified, approved editorial information is shown.",
    src: "public-view-dunes",
    alt: "Desert dunes under a starry dusk sky",
  },
  {
    title: "Future private actions",
    text: "Would need a signed-in, authorized patient or delegate, purpose limitation, jurisdiction, role permissions, audit and revocation.",
    d: [
      "Would need a signed-in, authorized patient or delegate, purpose",
      "limitation, jurisdiction, role permissions, audit and revocation.",
    ],
    src: "public-private-actions-moss",
    alt: "A moss-covered tree trunk seen from below",
  },
];

export default function PublicPrivate() {
  return (
    <section className={`w-full bg-white py-12 lg:min-h-[812px] lg:py-[70px] ${sectionPad}`}>
      <div className={`${inner} flex flex-col items-start gap-[40px]`}>
        <div className="flex w-full max-w-[760px] flex-col items-start gap-[15px]">
          <Eyebrow>Public view and private actions</Eyebrow>
          <Title size="md">Public pages stay de-identified.</Title>
        </div>

        <ul className="grid w-full gap-[22px] lg:grid-cols-2">
          {items.map((item) => (
            <li
              key={item.title}
              className={`${card} p-[22px] drop-shadow-[0_10px_15px_rgba(60,50,160,0.06)] lg:h-[534px]`}
            >
              <div
                className={`relative aspect-[499/311.88] w-full overflow-hidden rounded-[10px] ${photoBg}`}
                role="img"
                aria-label={item.alt}
              >
                <FigmaImage
                  src={`/fulfillment-availability/${item.src}.webp`}
                  box={{ top: -12.22, height: 124.44 }}
                  sizes="(min-width: 1024px) 500px, 90vw"
                />
              </div>
              <h3 className={`${cardTitle} pb-[8px] pt-[18px]`}>{item.title}</h3>
              <p className={cardText}>
                <Copy text={item.text} d={item.d} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

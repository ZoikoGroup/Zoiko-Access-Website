import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { Eyebrow, Lede, Title, card, cardText, cardTitle, inner, photoBg, sectionPad } from "./ui";

type Item = {
  title: string;
  text: string;
  d?: string[];
  src: string;
  alt: string;
};

const top: Item[] = [
  { title: "Stock changed", text: "The pharmacy's own update replaces earlier information. Ask the pharmacy.", d: ["The pharmacy's own update replaces earlier", "information. Ask the pharmacy."], src: "exception-stock-changed", alt: "Sun rays over a calm bay and sandy beach" },
  { title: "No listing", text: "Absence of a listing is not unavailability. Contact the pharmacy.", d: ["Absence of a listing is not unavailability.", "Contact the pharmacy."], src: "exception-no-listing", alt: "A concrete bridge disappearing into fog" },
  { title: "Source unavailable", text: `Shown as "Availability not confirmed". Use the pharmacy's own route.`, d: [`Shown as "Availability not confirmed". Use`, "the pharmacy's own route."], src: "exception-source-unavailable", alt: "Snowy mountains under a sunset sky" },
];
const bottom: Item[] = [
  { title: "Authorization missing", text: "The prescriber or pharmacy resolves it. Nothing is supplied without it.", src: "exception-authorization-missing", alt: "A water droplet on a bright green leaf" },
  { title: "Withdrawal", text: "An earlier status no longer applies. The source organization explains why.", d: ["An earlier status no longer applies. The source organization explains", "why."], src: "exception-withdrawal", alt: "Old tools laid out on a dark wooden table" },
];

function Card({ item, ratio, h }: { item: Item; ratio: string; h: string }) {
  return (
    <li className={`${card} p-[22px] drop-shadow-[0_10px_15px_rgba(60,50,160,0.06)] ${h}`}>
      <div
        className={`relative w-full overflow-hidden rounded-[10px] ${ratio} ${photoBg}`}
        role="img"
        aria-label={item.alt}
      >
        <FigmaImage
          src={`/fulfillment-availability/${item.src}.webp`}
          box={{ top: -12.22, height: 124.45 }}
          sizes="(min-width: 1024px) 500px, 90vw"
        />
      </div>
      <h3 className={`${cardTitle} pb-[8px] pt-[18px]`}>{item.title}</h3>
      <p className={cardText}>
        <Copy text={item.text} d={item.d} />
      </p>
    </li>
  );
}

export default function ExceptionMosaic() {
  return (
    <section
      className={`w-full bg-[radial-gradient(ellipse_520px_620px_at_1240px_396px,#ac96ff_0%,#e0d8ff_100%)] py-12 lg:min-h-[1258px] lg:py-[70px] ${sectionPad}`}
    >
      <div className={`${inner} flex flex-col items-start gap-[40px]`}>
        <div className="flex w-full max-w-[760px] flex-col items-start gap-[13px]">
          <Eyebrow>Exceptions</Eyebrow>
          <Title className="lg:pt-[2.1px]">
            <Copy
              text="When availability changes, there is a safe next step."
              d={["When availability changes, there is a", "safe next step."]}
            />
          </Title>
          <Lede className="lg:pb-[0.7px]">
            Never a forced sale or a guessed substitute.
          </Lede>
        </div>

        <div className="flex w-full flex-col gap-[18px]">
          <ul className="grid gap-[18px] md:grid-cols-3">
            {top.map((item) => (
              <Card key={item.title} item={item} ratio="aspect-[312.66/195.41]" h="lg:h-[396px]" />
            ))}
          </ul>
          <ul className="grid gap-[18px] md:grid-cols-2">
            {bottom.map((item) => (
              <Card key={item.title} item={item} ratio="aspect-[501/313.12]" h="lg:h-[526px]" />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

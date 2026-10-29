import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, Lede, Title, inner, photoBg, sectionPad } from "./ui";

const methods = [
  {
    title: "Collection",
    text: "You collect from a pharmacy after it confirms the supply.",
    d: ["You collect from a pharmacy after it", "confirms the supply."],
    src: "method-collection",
    alt: "A small rocky island on a calm misty sea",
  },
  {
    title: "Delivery",
    text: "A pharmacy may deliver where local rules and its own service allow.",
    d: ["A pharmacy may deliver where local rules", "and its own service allow."],
    src: "method-delivery",
    alt: "A misty road curving through a pine forest",
  },
  {
    title: "Pharmacist-led follow-up",
    text: "The pharmacy explains what happens next and answers questions.",
    d: ["The pharmacy explains what happens next", "and answers questions."],
    src: "method-follow-up",
    alt: "A laptop, notebook and coffee on a wooden desk",
  },
];

export default function FulfillmentMethods() {
  return (
    <section
      className={`w-full bg-[linear-gradient(-70.04deg,#a508bd_1.74%,#00248f_34.33%,#01003f_99.65%)] py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div className={`${inner} flex flex-col items-start gap-[39.99px]`}>
        <div className="flex w-full max-w-[760px] flex-col items-start gap-[12.9px]">
          <Eyebrow tone="violet">Fulfillment methods</Eyebrow>
          <Title tone="light" className="font-bold lg:pt-[2.2px]">
            <Copy
              text="Possible ways a pharmacy may fulfill a request."
              d={["Possible ways a pharmacy may fulfill", "a request."]}
            />
          </Title>
          <Lede tone="light" className="lg:pb-[0.56px]">
            <Copy
              text="General descriptions. Methods that are not available are hidden, and no places, times, fees or slots are shown."
              d={[
                "General descriptions. Methods that are not available are hidden, and no places,",
                "times, fees or slots are shown.",
              ]}
            />
          </Lede>
        </div>

        <ul className="grid w-full gap-[22px] md:grid-cols-3">
          {methods.map((item) => (
            <li
              key={item.title}
              className="rounded-[14px] bg-[rgba(58,58,58,0.4)] p-[23px] shadow-[0_10px_30px_rgba(60,50,160,0.06)] lg:h-[404px]"
            >
              <div
                className={`relative aspect-[310/193.75] w-full overflow-hidden rounded-[10px] ${photoBg}`}
                role="img"
                aria-label={item.alt}
              >
                <FigmaImage
                  src={`/fulfillment-availability/${item.src}.webp`}
                  box={{ top: -12.22, height: 124.44 }}
                  sizes="(min-width: 1024px) 380px, 90vw"
                />
              </div>
              <h3
                className={`${fontPoppins} pb-[8px] pt-[18px] text-[19.2px] font-semibold leading-[21.5px] tracking-[-0.192px] text-[#8e7bef]`}
              >
                {item.title}
              </h3>
              <p className="text-[14.7px] font-normal leading-[24.29px] text-white">
                <Copy text={item.text} d={item.d} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

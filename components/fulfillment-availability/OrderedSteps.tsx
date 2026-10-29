import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, Lede, Title, inner, photoBg, sectionPad } from "./ui";

const steps = [
  {
    title: "Dispense decision",
    text: "A pharmacist decides whether to dispense.",
    d: ["A pharmacist decides", "whether to dispense."],
    owner: "Owner: pharmacist",
    src: "step-dispense-decision",
    alt: "A pale yellow haze over a flat horizon",
  },
  {
    title: "Collection or delivery status",
    titleD: ["Collection or delivery", "status"],
    text: "Reported by the fulfilling pharmacy.",
    d: ["Reported by the fulfilling", "pharmacy."],
    owner: "Owner: fulfilling pharmacy",
    src: "step-collection-delivery",
    alt: "A misty mountain slope with autumn trees",
  },
  {
    title: "Stock check",
    text: "The pharmacy looks at its own supply.",
    d: ["The pharmacy looks at its", "own supply."],
    owner: "Owner: pharmacy",
    src: "step-stock-check",
    alt: "An aerial view of an autumn forest",
  },
  {
    title: "Inquiry",
    text: "A person asks about a medicine or service.",
    d: ["A person asks about a", "medicine or service."],
    owner: "Owner: patient",
    src: "step-inquiry",
    alt: "A wooden jetty disappearing into fog",
  },
  {
    title: "Prescription validity",
    text: "Checked before anything is supplied.",
    d: ["Checked before anything is", "supplied."],
    owner: "Owner: prescriber and pharmacy",
    ownerD: ["Owner: prescriber and", "pharmacy"],
    src: "step-prescription-validity",
    alt: "Glowing street lamps at night",
  },
];

export default function OrderedSteps() {
  return (
    <section
      id="steps"
      className={`w-full scroll-mt-[40px] bg-white py-12 lg:min-h-[1035px] lg:py-[70px] ${sectionPad}`}
    >
      <div className={`${inner} flex flex-col items-start gap-[14px]`}>
        <div className="flex w-full max-w-[760px] flex-col items-start gap-[13px] lg:pt-[2px]">
          <Eyebrow>Five ordered steps</Eyebrow>
          <Title size="md" className="lg:pt-[2.01px]">
            Five steps, each with its own owner.
          </Title>
          <Lede className="lg:pb-[0.7px]">
            Confirmed stock is not the same as dispensed.
          </Lede>
        </div>

        <ol className="grid w-full gap-x-[62px] gap-y-[19px] py-[14px] lg:grid-cols-2 lg:px-[22px]">
          {steps.map((step) => (
            <li
              key={step.title}
              className="flex flex-col items-start gap-4 self-start rounded-[14px] border border-solid border-[#dcd6f2] bg-white p-[23px] drop-shadow-[0_10px_10px_rgba(60,50,160,0.1)] sm:flex-row sm:items-center sm:gap-[28px] lg:min-h-[206px] lg:py-[22px]"
            >
              <div
                className={`relative aspect-[204/127.5] w-full overflow-hidden rounded-[10px] sm:w-[43%] sm:shrink-0 ${photoBg}`}
                role="img"
                aria-label={step.alt}
              >
                <FigmaImage
                  src={`/fulfillment-availability/${step.src}.webp`}
                  box={{ top: -12.22, height: 124.44 }}
                  sizes="(min-width: 1024px) 255px, 90vw"
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col gap-[11px]">
                <h3
                  className={`${fontPoppins} text-[19.2px] font-semibold leading-[21.5px] tracking-[-0.192px] text-[#243b73]`}
                >
                  <Copy text={step.title} d={step.titleD} />
                </h3>
                <p className="text-[14.7px] font-normal leading-[24.29px] text-[#273444]">
                  <Copy text={step.text} d={step.d} />
                </p>
                <p
                  className={`${fontPoppins} pt-[11px] text-[12.5px] font-semibold leading-[20.59px] text-[#4267d5]`}
                >
                  <Copy text={step.owner} d={step.ownerD} />
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="rounded-[10px] bg-[#ebe9fb] px-[14px] pb-[7.72px] pt-[7.5px] text-[14.1px] font-semibold leading-[23.23px] text-[#243b73]">
          Confirmed stock ≠ dispensed
        </p>
      </div>
    </section>
  );
}

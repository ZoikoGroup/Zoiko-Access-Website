import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, Lede, Title, inner, photoBg, sectionPad } from "./ui";

const steps = [
  { title: "Source pharmacy system", text: "The pharmacy's own system of record.", src: "interface-source-system", alt: "A bare tree against a pale sky" },
  { title: "Authorized API / connector", text: "A scoped, audited connection.", src: "interface-connector", alt: "A skater against the setting sun at a skate park" },
  { title: "Permissioned coordination event", text: "A receipt. Not a pharmacist action.", src: "interface-event", alt: "An old wooden jetty among reeds" },
];

function Arrow() {
  return (
    <span
      className={`${fontPoppins} flex size-[50px] shrink-0 items-center justify-center rounded-full bg-[#bccdff] text-[22.4px] font-bold leading-[36.96px] text-[#7657e8] max-lg:rotate-90`}
      aria-hidden="true"
    >
      →
    </span>
  );
}

export default function InterfaceFlow() {
  return (
    <section
      className={`w-full bg-[radial-gradient(ellipse_520px_420px_at_1240px_207px,#ac96ff_0%,#e0d8ff_100%)] py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div className={`${inner} flex flex-col items-start gap-[40px]`}>
        <div className="flex w-full max-w-[760px] flex-col items-start gap-[12.8px] lg:pt-[2px]">
          <Eyebrow>Technical and operational interface</Eyebrow>
          <Title className="lg:whitespace-nowrap lg:pt-[2.31px]">
            Event receipt is separate from pharmacist action.
          </Title>
          <Lede className="lg:pb-[0.55px]">
            <Copy
              text="Review would cover scopes, identity and keys, audit events, retries and idempotency, stale-feed detection and partner suspension."
              d={[
                "Review would cover scopes, identity and keys, audit events, retries and idempotency,",
                "stale-feed detection and partner suspension.",
              ]}
            />
          </Lede>
        </div>

        <div className="flex w-full flex-col items-center gap-[24px] lg:flex-row lg:gap-[48px]">
          {steps.map((step, index) => (
            <div key={step.title} className="contents">
              <div className="w-full rounded-[16px] border border-solid border-[#dcd6f2] bg-white p-[16px] lg:min-w-0 lg:flex-1">
                <div
                  className={`relative aspect-[303/189.41] w-full overflow-hidden rounded-[10px] ${photoBg}`}
                  role="img"
                  aria-label={step.alt}
                >
                  <FigmaImage
                    src={`/pharmacy-partnership/${step.src}.webp`}
                    box={{ top: -12.22, height: 124.45 }}
                    sizes="(min-width: 1024px) 303px, 90vw"
                  />
                </div>
                <h3
                  className={`${fontPoppins} pb-[8px] pt-[12px] text-[16px] font-semibold leading-[17.92px] tracking-[-0.16px] text-[#243b73]`}
                >
                  {step.title}
                </h3>
                <p className="text-[13.8px] font-normal leading-[22.7px] text-[#273444]">
                  {step.text}
                </p>
              </div>
              {index < steps.length - 1 && <Arrow />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

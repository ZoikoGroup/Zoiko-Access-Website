import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { Eyebrow, Lede, Title, inner, sectionPad } from "./ui";

export default function PrivacyChannels() {
  return (
    <section
      className={`w-full bg-[linear-gradient(-58.52deg,#a508bd_1.74%,#00248f_34.33%,#01003f_99.65%)] py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div
        className={`${inner} flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-[56px]`}
      >
        <div className="flex w-full flex-col items-start gap-[13px] lg:min-w-0 lg:flex-1">
          <Eyebrow tone="violet">Privacy and appropriate permissions</Eyebrow>
          <Title tone="light" className="lg:pt-[2.1px]">
            <Copy
              text="Purpose-limited channels only."
              d={["Purpose-limited ", "channels only."]}
            />
          </Title>
          <Lede tone="light" className="lg:pb-[0.76px]">
            <Copy
              text="Sensitive information should move only through authorized, purpose-limited channels. Patient or caregiver rights are subject to identity and local delegation requirements. This public page never retrieves health information."
              d={[
                "Sensitive information should move only through authorized,",
                "purpose-limited channels. Patient or caregiver rights are subject",
                "to identity and local delegation requirements. This public page",
                "never retrieves health information.",
              ]}
            />
          </Lede>
        </div>

        <div
          className="relative h-[260px] w-full overflow-hidden rounded-[18px] bg-[linear-gradient(147.42deg,#4267d5_0%,#7657e8_100%)] lg:h-[318px] lg:w-[622px] lg:shrink-0"
          role="img"
          aria-label="A black and white photo of a taped-off area with a sign reading This Area is Closed. Thank you."
        >
          <FigmaImage
            src="/safety-escalation/privacy-closed-sign.webp"
            box={{ left: -2.89, top: -33.06, width: 105.79, height: 137.74 }}
            sizes="(min-width: 1024px) 700px, 90vw"
          />
        </div>
      </div>
    </section>
  );
}

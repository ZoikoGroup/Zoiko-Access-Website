import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { Eyebrow, Title, inner, photoBg, sectionPad, sectionY, urgentBox } from "./ui";

export default function Safeguards() {
  return (
    <section
      id="safeguards"
      className={`w-full bg-[conic-gradient(from_67deg_at_50%_50%,#c0acff_0%,#f3effe_99.79%,#c0acff_100%),linear-gradient(90deg,#f1f4ff,#f1f4ff)] ${sectionY} ${sectionPad}`}
    >
      <div className={`${inner} grid items-center gap-10 lg:h-[465.98px] lg:grid-cols-[5fr_6fr] lg:gap-11`}>
        <div
          className={`relative h-[320px] w-full overflow-hidden rounded-[24px] rounded-bl-[120px] sm:h-[420px] lg:h-[510px] ${photoBg}`}
          role="img"
          aria-label="Doctor in a consultation room"
        >
          <FigmaImage
            src="/prior-authorizations/safeguards-doctor-consultation.webp"
            box={{ left: -32.5, width: 165 }}
            sizes="(min-width: 1024px) 571px, 90vw"
          />
        </div>

        <div className="flex w-full flex-col items-start gap-3">
          <Eyebrow tone="ink">Clinical &amp; administrative safeguards</Eyebrow>
          <Title>
            <Copy text="Clinical judgment stays with the care team." d={["Clinical judgment stays", "with the care team."]} />
          </Title>
          <p className="w-full pb-[0.69px] pt-[3.1px] text-[16px] leading-[25.6px] text-[#5b6678]">
            <Copy
              text="Administrative authorization and clinical necessity are different things. No algorithm or score on this page makes a clinical decision, and there is no automated triage."
              d={[
                "Administrative authorization and clinical necessity are different",
                "things. No algorithm or score on this page makes a clinical",
                "decision, and there is no automated triage.",
              ]}
            />
          </p>
          <p className={`${urgentBox} w-full`}>
            <strong className="font-bold">Urgent need?</strong>{" "}
            <Copy
              text="Don't wait for an authorization. Follow your local emergency pathway or contact your care provider."
              d={["Don't wait for an authorization. Follow your local", "emergency pathway or contact your care provider."]}
            />
          </p>
        </div>
      </div>
    </section>
  );
}

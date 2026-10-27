import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { Eyebrow, Lede, Title, photoBg, sectionPad } from "./ui";

export default function StandardsCompatibility() {
  return (
    <section
      className={`w-full bg-[#f4f8fd] py-12 lg:py-[88px] ${sectionPad}`}
    >
      <div className="mx-auto flex w-full max-w-[1392px] flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-[56px] lg:px-0">
        <div className="flex w-full flex-col items-start gap-[13px] lg:min-w-0 lg:flex-1">
          <Eyebrow>Standards and compatibility</Eyebrow>
          <Title size="md" className="lg:pt-[2.11px]">
            <Copy
              text="Standards-aligned intent, no supported-version claims."
              d={["Standards-aligned intent, no", "supported-version claims."]}
            />
          </Title>
          <Lede className="lg:pb-[0.76px]">
            <Copy
              text="Concepts such as HL7/FHIR, DICOM and IHE are discussed only where technically approved. No vendor or compatibility matrix is shown without certification artifacts, and partner documentation links are gated."
              d={[
                "Concepts such as HL7/FHIR, DICOM and IHE are discussed only",
                "where technically approved. No vendor or compatibility matrix is",
                "shown without certification artifacts, and partner documentation",
                "links are gated.",
              ]}
            />
          </Lede>
        </div>

        <div
          className={`relative h-[260px] w-full overflow-hidden rounded-[18px] lg:h-[339px] lg:min-w-0 lg:flex-1 ${photoBg}`}
          role="img"
          aria-label="Dark oak trees on a golden sepia hillside"
        >
          <FigmaImage
            src="/lab-imaging-integration/standards-hillside.webp"
            box={{ left: -1.43, top: -22.5, width: 102.85, height: 145 }}
            sizes="(min-width: 1024px) 700px, 90vw"
          />
        </div>
      </div>
    </section>
  );
}

import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { Eyebrow, Lede, Title, inner, photoBg, sectionPad } from "./ui";

export default function RegionScope() {
  return (
    <section className={`w-full bg-white py-12 lg:py-[70px] ${sectionPad}`}>
      <div
        className={`${inner} flex flex-col items-start gap-10 lg:flex-row lg:items-center lg:justify-center lg:gap-[56px]`}
      >
        <div className="flex w-full flex-col items-start gap-[12.7px] lg:min-w-0 lg:flex-1">
          <Eyebrow>Regional scope and non-guarantees</Eyebrow>
          <Title className="lg:pt-[2.4px]">
            <Copy
              text="A care region gives context, not eligibility."
              d={["A care region gives context,", "not eligibility."]}
            />
          </Title>
          <Lede>
            <Copy
              text="A selected region is shown only as context. Territorial claims that are not approved, controlled-medicine offerings, cross-border shipments and false inventory freshness are not shown or implied."
              d={[
                "A selected region is shown only as context. Territorial claims that",
                "are not approved, controlled-medicine offerings, cross-border",
                "shipments and false inventory freshness are not shown or implied.",
              ]}
            />
          </Lede>
        </div>

        <div
          className={`relative aspect-[528/422.39] w-full overflow-hidden rounded-[18px] lg:min-w-0 lg:flex-1 ${photoBg}`}
          role="img"
          aria-label="A city skyline and highways at dusk under a dramatic cloudy sky"
        >
          <FigmaImage
            src="/pharmacy-partnership/region-world-map.webp"
            box={{ left: -1.43, width: 102.85, height: 100.19 }}
            sizes="(min-width: 1024px) 700px, 90vw"
          />
        </div>
      </div>
    </section>
  );
}

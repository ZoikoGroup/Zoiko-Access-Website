import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { Eyebrow, Lede, Title, inner, sectionPad } from "./ui";

const rows = [
  ["Data minimization", "Role-based authorization", "Data residency"],
  ["Audit logs", "Partner approval"],
];

export default function IntegrationBoundaries() {
  return (
    <section
      id="integration"
      className={`w-full scroll-mt-[40px] bg-[linear-gradient(180deg,#ffffff_0%,#ebe9fb_40%,#ffffff_100%)] py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div
        className={`${inner} flex flex-col items-start gap-10 lg:flex-row lg:justify-center lg:gap-[56px]`}
      >
        <div className="flex w-full flex-col items-start gap-[12.8px] lg:min-w-0 lg:flex-1">
          <Eyebrow>Interoperability and governance</Eyebrow>
          <Title className="lg:pt-[2.31px]">
            <Copy
              text="Standards-based potential, not assumed connectivity."
              d={["Standards-based potential,", "not assumed connectivity."]}
            />
          </Title>
          <Lede className="lg:pb-[0.55px]">
            <Copy
              text="Any connection depends on partner approvals and local rules. No standards, certifications or integrations are claimed here."
              d={[
                "Any connection depends on partner approvals and local rules. No",
                "standards, certifications or integrations are claimed here.",
              ]}
            />
          </Lede>
          <div className="flex w-full flex-col gap-[12px] pt-[7.2px]">
            {rows.map((row) => (
              <ul key={row[0]} className="flex flex-wrap gap-x-[14px] gap-y-[12px]">
                {row.map((pill) => (
                  <li
                    key={pill}
                    className="rounded-full border border-solid border-[#dcd6f2] bg-white px-[16px] py-[8px] text-[13.8px] font-medium leading-[22.7px] text-[#243b73]"
                  >
                    {pill}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div
          className="relative h-[280px] w-full overflow-hidden rounded-[18px] bg-[linear-gradient(135deg,#4267d5_0%,#7657e8_100%)] lg:h-[338px] lg:w-[422px] lg:shrink-0"
          role="img"
          aria-label="A coastal hillside under a cloudy sky, a stock photo representing health IT"
        >
          <FigmaImage
            src="/diagnostics-coordination/health-it.webp"
            box={{ left: -1.43, width: 102.85, height: 100.12 }}
            sizes="(min-width: 1024px) 422px, 90vw"
          />
        </div>
      </div>
    </section>
  );
}

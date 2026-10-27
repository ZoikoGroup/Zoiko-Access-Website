import Link from "next/link";
import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, Lead, Title, card, cardText, cardTitle, inner, photoBg, sectionPad, sectionY } from "./ui";

const checks = [
  ["Jurisdiction", "The market and regulatory context are identified and supported."],
  ["Contractual role", "Each party's role and responsibilities are defined in contract."],
  ["Authority", "Who may request, view and decide is documented and verifiable."],
  ["Data minimization", "Only purpose-necessary data is in scope."],
  ["Security", "Security review, access control and audit posture are approved."],
  ["Operational support", "Staffed support, escalation and manual alternatives are in place."],
];

export default function Readiness() {
  return (
    <section id="readiness" className={`w-full bg-white ${sectionY} ${sectionPad}`}>
      <div className={`${inner} grid items-start gap-10 lg:grid-cols-2 lg:gap-14`}>
        <div className="flex w-full flex-col items-start gap-[13.7px] pt-[6.91px]">
          <Eyebrow>Readiness &amp; evaluation</Eyebrow>
          <Title>
            <Copy text="Six checks before any engagement." d={["Six checks before", "any engagement."]} />
          </Title>
          <Lead>
            <Copy
              text="Institutional evaluation starts with prerequisites — not a connection. These checks lead to the informational implementation overview only."
              d={[
                "Institutional evaluation starts with prerequisites — not a connection. These",
                "checks lead to the informational implementation overview only.",
              ]}
            />
          </Lead>
          <div
            className={`w-full overflow-hidden rounded-[18px] pt-[14.3px] shadow-[0_10px_30px_rgba(36,59,115,0.08)] ${photoBg}`}
          >
            <div
              className="relative h-[260px] w-full overflow-hidden sm:h-[340px] lg:h-[382.5px]"
              role="img"
              aria-label="Team reviewing documents and readiness criteria"
            >
              <FigmaImage
                src="/payers-insurers/readiness-documents-team.webp"
                box={{ top: -3.36, height: 106.72 }}
                sizes="(min-width: 1024px) 560px, 90vw"
              />
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-4">
          <ol className="flex w-full flex-col gap-4">
            {checks.map(([title, text], index) => (
              <li key={title} className={`${card} flex items-start gap-4 p-[26px]`}>
                <span
                  className={`${fontPoppins} flex size-[32px] shrink-0 items-center justify-center rounded-[8px] border-2 border-solid border-[#7657e8] text-[13px] font-bold leading-[20.8px] text-[#7657e8]`}
                >
                  {index + 1}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className={cardTitle}>{title}</h3>
                  <p className={cardText}>{text}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link
            href="/payers-insurers/implementation"
            className="flex min-h-[46px] items-center justify-center rounded-[10px] border-2 border-solid border-[#e3e8f2] bg-white px-[22px] py-3 text-[15px] font-semibold leading-[24px] text-[#243b73]"
          >
            Read the implementation approach →
          </Link>
        </div>
      </div>
    </section>
  );
}

import Copy from "./Copy";
import FigmaImage from "./FigmaImage";
import { fontPoppins } from "./fonts";
import { Eyebrow, Title, glow, inner, photoBg, sectionPad, sectionY } from "./ui";

const cells = [
  { title: "Role-limited access", text: "Each role sees only what its task permits.", d: ["Each role sees only what its task", "permits."] },
  { title: "Consent / legal basis", text: "Sharing rests on a documented basis.", d: ["Sharing rests on a documented", "basis."] },
  { title: "Record source", text: "The original payer or provider stays the source of record.", d: ["The original payer or provider stays", "the source of record."] },
  { title: "Audit evidence", text: "Access and changes are attributable.", d: ["Access and changes are", "attributable."] },
  { title: "Regional policy", text: "Rules follow the applicable jurisdiction.", d: ["Rules follow the applicable", "jurisdiction."] },
  { title: "Integrity & correction", text: "Errors can be corrected with a traceable history.", d: ["Errors can be corrected with a", "traceable history."] },
];

export default function SecurityProvenance() {
  return (
    <section
      id="security"
      className={`w-full bg-[#0f1a44] ${sectionY} ${sectionPad}`}
      style={{
        backgroundImage: `${glow("984px 749px", "100% 0")},linear-gradient(206.14deg,#0a1a4b 51.65%,#3550b8 107.31%)`,
      }}
    >
      <div className={`${inner} flex flex-col items-start gap-8`}>
        <div className="flex w-full flex-col gap-8 sm:flex-row sm:items-center">
          <div className="flex min-w-0 flex-1 flex-col items-start gap-3 pb-4">
            <Eyebrow tone="light">Security &amp; record provenance</Eyebrow>
            <Title tone="light">
              <Copy text="Protected by role, purpose and source." d={["Protected by role, purpose", "and source."]} />
            </Title>
          </div>
          <div
            className={`relative aspect-[260/162.5] w-[260px] shrink-0 overflow-hidden rounded-[16px] ${photoBg}`}
            role="img"
            aria-label="Abstract digital security concept"
          >
            <FigmaImage
              src="/prior-authorizations/security-digital-concept.webp"
              box={{ top: -3.37, height: 106.74 }}
              sizes="260px"
            />
          </div>
        </div>

        <ul className="grid w-full gap-px overflow-hidden rounded-[14px] bg-white/[0.12] sm:grid-cols-2 lg:grid-cols-3">
          {cells.map((cell) => (
            <li key={cell.title} className="flex flex-col gap-[7.2px] bg-[rgba(43,36,144,0.5)] p-6 lg:min-h-[122.38px]">
              <h3 className={`${fontPoppins} text-[16px] font-semibold leading-[21.6px] text-white`}>{cell.title}</h3>
              <p className="pb-[0.59px] text-[14px] leading-[22.4px] text-white/70">
                <Copy text={cell.text} d={cell.d} />
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

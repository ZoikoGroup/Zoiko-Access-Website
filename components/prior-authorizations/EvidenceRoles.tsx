import Copy from "./Copy";
import { fontPoppins } from "./fonts";
import { Eyebrow, Title, glow, inner, sectionPad, sectionY } from "./ui";

const items = [
  { title: "Plan rules", text: "The payer's published requirements for the service or medication." },
  { title: "Request documents", text: "The submission itself, prepared by the provider office." },
  { title: "Clinical supporting records", text: "Only what supports the request, shared by the care team." },
  { title: "Consent / authority", text: "The legal basis or authority to share for this purpose." },
];

export default function EvidenceRoles() {
  return (
    <section
      id="evidence"
      className={`w-full bg-[#0a1a4b] ${sectionY} ${sectionPad}`}
      style={{ backgroundImage: `${glow("1200px 731px", "85% 92.6px")},linear-gradient(136.33deg,#0a1a4b 51.44%,#3550b8 100%)` }}
    >
      <div className={`${inner} flex flex-col items-start gap-3`}>
        <Eyebrow>Roles &amp; required evidence</Eyebrow>
        <Title tone="light">
          <Copy
            text="Only the information required for the permitted task."
            d={["Only the information required for the ", "permitted task."]}
          />
        </Title>
        <ul className="grid w-full gap-4 pt-1 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <li
              key={item.title}
              className="flex flex-col gap-[6.9px] rounded-b-[12px] border-t-[3px] border-solid border-[#7657e8] bg-[rgba(246,249,252,0.4)] px-5 pb-5 pt-5 lg:min-h-[138px]"
            >
              <h3 className={`${fontPoppins} text-[16px] font-semibold leading-[21.6px] text-[#16245a]`}>{item.title}</h3>
              <p className="text-[14px] leading-[22.4px] text-white">{item.text}</p>
            </li>
          ))}
        </ul>
        <p className="flex items-end gap-2 pt-[6px] text-[14px] leading-[22.4px] text-white">
          <span className="h-[22.38px] w-[7.44px] shrink-0 bg-white" aria-hidden="true" />
          Nothing is collected on this page — no member identifiers, diagnoses or uploads.
        </p>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import Copy from "./Copy";
import { SecHead, Tag, card, cardText, cardTitle, inner, sectionPad, sectionY } from "./ui";

const items = [
  {
    icon: "eligibility",
    title: "Eligibility & Benefits",
    text: "How member identity, plan enrollment, benefit entitlement and authorization are kept distinct.",
    d: ["How member identity, plan enrollment, benefit", "entitlement and authorization are kept distinct."],
    href: "/eligibility-benefits",
  },
  {
    icon: "authorizations",
    title: "Prior Authorizations",
    text: "Staged request states with a named decision owner — submitted is never the same as approved.",
    d: ["Staged request states with a named decision", "owner — submitted is never the same as", "approved."],
    href: "/prior-authorizations",
  },
  {
    icon: "claims",
    title: "Claims & Remittance Coordination",
    text: "Administrative status coordination only. The payer retains adjudication and settlement.",
    d: ["Administrative status coordination only. The payer", "retains adjudication and settlement."],
    href: "/claims-remittance",
  },
  {
    icon: "member-access",
    title: "Member Access Experience",
    text: "How plan entitlements are designed to be shown responsibly to locally authorized members.",
    d: ["How plan entitlements are designed to be shown", "responsibly to locally authorized members."],
    href: "/member-access",
  },
  {
    icon: "integrations",
    title: "Payer Integrations & Governance",
    text: "A proposed standards-based approach with partner approval, role governance and audit trail.",
    d: ["A proposed standards-based approach with", "partner approval, role governance and audit trail."],
    href: "/payer-integrations-governance",
  },
  {
    icon: "implementation",
    title: "Implementation Approach",
    text: "Legal, security, partner and operational prerequisites to evaluate before any engagement.",
    d: ["Legal, security, partner and operational", "prerequisites to evaluate before any engagement."],
    href: "/implementation-approach",
  },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className={`w-full bg-white ${sectionY} ${sectionPad}`}>
      <div className={`${inner} flex flex-col items-start gap-11`}>
        <SecHead
          eyebrow="Payer capabilities"
          title={<Copy text="What would you like to understand next?" d={["What would you like", "to understand next?"]} />}
          lead={
            <Copy
              text="Six informational destinations. Each explains a designed capability — none is a live transaction or payer portal."
              d={[
                "Six informational destinations. Each explains a designed capability — none is a live transaction",
                "or payer portal.",
              ]}
            />
          }
        />
        <ul className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li key={item.title} className="flex">
              <Link
                href={item.href}
                className={`${card} flex w-full flex-col items-start gap-2 p-[26px] lg:min-h-[220px]`}
              >
                <span className="flex size-[44px] items-center justify-center rounded-[12px] bg-[linear-gradient(135deg,#7657e8_0%,#4267d5_100%)]">
                  <Image src={`/payers-insurers/icons/${item.icon}.svg`} alt="" width={22} height={22} />
                </span>
                <h3 className={`${cardTitle} pt-[6px]`}>{item.title}</h3>
                <p className={`${cardText} flex-1`}>
                  <Copy text={item.text} d={item.d} />
                </p>
                <span className="flex w-full items-center justify-between pt-[11.4px]">
                  <span className="text-[13px] leading-[20.8px] text-[#4267d5]">{item.href}</span>
                  <Tag tone="violet">INFO</Tag>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

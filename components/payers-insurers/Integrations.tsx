import { Fragment } from "react";
import Copy from "./Copy";
import { SecHead, Tag, cardText, inner, sectionPad, sectionY } from "./ui";
import { fontPoppins } from "./fonts";

const nodes = [
  {
    title: "Contracted system of record",
    text: "Payer plan and coverage data, owned and maintained by the payer.",
    d: ["Payer plan and coverage data, owned and", "maintained by the payer."],
    tag: "Authoritative",
    tone: "blue" as const,
  },
  {
    title: "Permissioned interface",
    text: "Partner-approved, role-governed, purpose-limited and geography-aware.",
    d: ["Partner-approved, role-governed, purpose-limited", "and geography-aware."],
    featured: true,
  },
  {
    title: "Bounded coordination view",
    text: "Shows status with source, timestamp and owner — nothing beyond scope.",
    d: ["Shows status with source, timestamp and owner", "— nothing beyond scope."],
    tag: "Designed to",
    tone: "violet" as const,
  },
];

const audit = ["Audit trail on every exchange", "Provenance label", "Currentness timestamp", "Role governance"];

export default function Integrations() {
  return (
    <section id="integrations" className={`w-full bg-[#f6f9fc] ${sectionY} ${sectionPad}`}>
      <div className={`${inner} flex flex-col items-start gap-4`}>
        <SecHead
          eyebrow="Integrations & governance"
          title={
            <Copy
              text="The right information. From the responsible source."
              d={["The right information.", "From the responsible source."]}
            />
          }
          lead={
            <Copy
              text="A proposed, standards-based approach. Systems of record stay authoritative; a permissioned interface exposes only what an approved role and purpose allow."
              d={[
                "A proposed, standards-based approach. Systems of record stay authoritative; a permissioned",
                "interface exposes only what an approved role and purpose allow.",
              ]}
            />
          }
        />

        <div className="flex w-full flex-col items-stretch gap-4 pt-7 lg:flex-row lg:items-center lg:justify-center">
          {nodes.map((node, index) => (
            <Fragment key={node.title}>
              {index > 0 && (
                <span
                  aria-hidden="true"
                  className="flex shrink-0 justify-center text-[28px] font-bold leading-[44.8px] text-[#7657e8] max-lg:rotate-90 lg:w-[27.89px]"
                >
                  ⇄
                </span>
              )}
              <div
                className={`flex flex-1 flex-col items-center gap-[7.2px] rounded-[16px] p-6 text-center drop-shadow-[0_10px_15px_rgba(36,59,115,0.08)] ${
                  node.featured
                    ? "bg-[linear-gradient(134.92deg,#243b73_0%,#4267d5_100%)] text-white"
                    : "border border-solid border-[#e3e8f2] bg-white"
                }`}
              >
                <h3
                  className={`${fontPoppins} text-[19px] font-semibold leading-[25.65px] ${node.featured ? "text-white" : "text-[#16245a]"}`}
                >
                  {node.title}
                </h3>
                <p
                  className={`text-[14px] leading-[22.4px] ${node.featured ? "pb-[0.6px] text-white" : "pb-[5.4px] text-[#5b6678]"}`}
                >
                  <Copy text={node.text} d={node.d} />
                </p>
                {node.tag && <Tag tone={node.tone}>{node.tag}</Tag>}
              </div>
            </Fragment>
          ))}
        </div>

        <ul className="flex w-full flex-wrap justify-center gap-[10px] pt-2">
          {audit.map((label) => (
            <li key={label}>
              <Tag>{label}</Tag>
            </li>
          ))}
        </ul>
        <p className={`${cardText} w-full text-center text-[13px] leading-[20.8px]`}>
          <Copy
            text="No named vendors, certifications or live deployments are asserted. Interface standards and partner claims require evidence approval."
            d={[
              "No named vendors, certifications or live deployments are asserted. Interface standards and partner claims require evidence approval.",
            ]}
          />
        </p>
      </div>
    </section>
  );
}

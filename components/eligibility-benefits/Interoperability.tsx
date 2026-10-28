import { Fragment } from "react";
import Copy from "./Copy";
import { SecHead, Tag, cardTitle, inner, sectionPad, sectionY } from "./ui";

type Node = {
  title: string;
  td?: string[];
  text: string;
  d: string[];
  featured?: boolean;
  tag?: string;
};

const nodes: Node[] = [
  {
    title: "Authorized requester",
    text: "A verified role with a permitted purpose.",
    d: ["A verified role with a permitted", "purpose."],
  },
  {
    title: "Policy / identity gate",
    text: "Checks role, purpose, region and contract.",
    d: ["Checks role, purpose, region and", "contract."],
    featured: true,
  },
  {
    title: "Contracted payer service",
    td: ["Contracted payer", "service"],
    text: "The plan's own system of record.",
    d: ["The plan's own system of record."],
    tag: "Authoritative",
  },
  {
    title: "Scoped response & evidence",
    td: ["Scoped response &", "evidence"],
    text: "Only the necessary fields, with source and date.",
    d: ["Only the necessary fields, with", "source and date."],
  },
];

export default function Interoperability() {
  return (
    <section id="interoperability" className={`w-full bg-[#f6f9fc] ${sectionY} ${sectionPad}`}>
      <div className={`${inner} flex flex-col items-center gap-[19.4px] lg:px-10`}>
        <SecHead
          eyebrow="Payer interoperability concept"
          title="Integration respects the source system."
          lead={
            <Copy
              text="A standards-based, payer-controlled exchange, shown conceptually. No vendor is endorsed and no live integration is depicted."
              d={[
                "A standards-based, payer-controlled exchange, shown conceptually. No vendor is endorsed",
                "and no live integration is depicted.",
              ]}
            />
          }
        />

        <ol
          className="flex w-full flex-col items-stretch gap-4 pt-[24.6px] lg:flex-row lg:items-center lg:justify-center"
          aria-label="Conceptual flow: an authorized requester passes a policy and identity gate, reaches a contracted payer service, and receives a scoped response with evidence."
        >
          {nodes.map((node, index) => (
            <Fragment key={node.title}>
              {index > 0 && (
                <li
                  aria-hidden="true"
                  className="flex shrink-0 justify-center text-[28px] font-bold leading-[44.8px] text-[#7657e8] max-lg:rotate-90 lg:w-[28.02px]"
                >
                  →
                </li>
              )}
              <li
                className={`flex flex-1 flex-col items-center gap-[7.2px] rounded-[16px] p-6 text-center drop-shadow-[0_10px_15px_rgba(36,59,115,0.08)] lg:min-h-[173.6px] ${
                  node.featured
                    ? "bg-[linear-gradient(126.8deg,#243b73_0%,#4267d5_100%)] text-white"
                    : "border border-solid border-[#e3e8f2] bg-white"
                }`}
              >
                <h3 className={`${cardTitle} ${node.featured ? "text-white" : ""}`}>
                  <Copy text={node.title} d={node.td} />
                </h3>
                <p className={`text-[14px] leading-[22.4px] ${node.featured ? "text-white" : "pb-[0.6px] text-[#5b6678]"}`}>
                  <Copy text={node.text} d={node.d} />
                </p>
                {node.tag && <Tag>{node.tag}</Tag>}
              </li>
            </Fragment>
          ))}
        </ol>

        <p className="w-full max-w-[820px] text-center text-[13px] leading-[20.8px] text-[#5b6678] min-[1400px]:max-w-none">
          <Copy
            text="Text equivalent: An authorized requester sends an inquiry. A policy and identity gate checks role, purpose, region and contract. The contracted payer service answers from its own records. Only a scoped response, with source and date evidence, is returned."
            d={[
              "Text equivalent: An authorized requester sends an inquiry. A policy and identity gate checks role, purpose, region and contract. The",
              "contracted payer service answers from its own records. Only a scoped response, with source and date evidence, is returned.",
            ]}
          />
        </p>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { Eyebrow, Photo, Title, card, fontPoppins, inner, lavenderBg, photoBg, pic, sectionPad } from "./shared";

const fields = [
  ["purpose", "Purpose"],
  ["inputs", "Inputs"],
  ["owner", "Owner"],
  ["prerequisites", "Prerequisites"],
  ["evidence", "Evidence required"],
  ["gate", "Gate decision"],
  ["fallback", "Safe fallback"],
] as const;

type Step = {
  title: string;
  text: string;
  image: string;
  alt: string;
  detail: Record<(typeof fields)[number][0], string>;
};

const steps: Step[] = [
  {
    title: "Discover & assess fit",
    text: "Understand goals, markets and organizations.",
    image: pic("discovery-workshop"),
    alt: "Two colleagues celebrating at a meeting table",
    detail: {
      purpose: "Decide whether an implementation is worth exploring.",
      inputs: "Goals, markets, organization types, workflows of interest.",
      owner: "Payer leadership with Zoiko Access product team.",
      prerequisites: "None beyond an approved conversation.",
      evidence: "Documented scope hypothesis.",
      gate: "Proceed to scoping, or stop.",
      fallback: "Informational resources only.",
    },
  },
  {
    title: "Define authorized scope",
    text: "Agree which workflows and data are permitted.",
    image: pic("scoping-documents"),
    alt: "Colleagues reviewing notes beside laptops",
    detail: {
      purpose: "Agree exactly which workflows, data and parties are in scope.",
      inputs: "Scope hypothesis, workflow priorities, markets and participating organizations.",
      owner: "Payer operations with Zoiko Access product and privacy leads.",
      prerequisites: "A positive fit decision from step 01.",
      evidence: "Signed-off scope statement with permitted purposes and data classes.",
      gate: "Proceed to governance and agreements, narrow the scope, or stop.",
      fallback: "No data exchange; informational resources only.",
    },
  },
  {
    title: "Establish governance & agreements",
    text: "Roles, contracts and legal review.",
    image: pic("jurisdiction-review"),
    alt: "Person signing an agreement",
    detail: {
      purpose: "Set legal roles, responsibilities and contractual terms for each party.",
      inputs: "Approved scope, jurisdictional requirements and each party's legal entity.",
      owner: "Legal, privacy and procurement teams on both sides.",
      prerequisites: "An approved scope statement.",
      evidence: "Executed agreements and a governance record for each exchange.",
      gate: "Proceed to interface design, or stop.",
      fallback: "No connection is built without executed agreements.",
    },
  },
  {
    title: "Design & qualify interfaces",
    text: "Standards, mapping and error handling.",
    image: pic("interface-design"),
    alt: "Analytics dashboard on a monitor",
    detail: {
      purpose: "Design and qualify the interfaces the approved scope needs.",
      inputs: "Candidate standards, field mappings, terminology and error taxonomy.",
      owner: "Payer and Zoiko Access engineering teams.",
      prerequisites: "Executed agreements and an approved governance record.",
      evidence: "Interface specification, mapping review and error-handling design.",
      gate: "Proceed to controlled validation, or redesign.",
      fallback: "Interfaces remain disconnected from live systems.",
    },
  },
  {
    title: "Validate with controlled evidence",
    text: "Test in controlled environments.",
    image: pic("failure-testing"),
    alt: "Glowing circuit board",
    detail: {
      purpose: "Show that the integration behaves safely and as specified.",
      inputs: "Qualified interfaces, test plans and non-production test data.",
      owner: "Quality, security and engineering teams, with payer sign-off.",
      prerequisites: "Approved interface design.",
      evidence: "Recorded results across functionality, access, jurisdiction, interoperability, failure and operations.",
      gate: "Proceed to a launch decision, or fix and retest.",
      fallback: "Remain in the controlled environment; nothing reaches production.",
    },
  },
  {
    title: "Decide on launch & operations",
    text: "A separate, explicit go / no-go decision.",
    image: pic("launch-decision"),
    alt: "Two people shaking hands",
    detail: {
      purpose: "Make an explicit, recorded go / no-go decision.",
      inputs: "Validation evidence and the deployment readiness checklist.",
      owner: "Named decision owners at the payer and at Zoiko Access.",
      prerequisites: "Every readiness condition met.",
      evidence: "Signed launch decision, support ownership and rollback plan.",
      gate: "Launch under monitoring, or do not launch.",
      fallback: "Rollback to the last approved state, with incident communication.",
    },
  },
];

export default function Journey() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="journey" className={`w-full scroll-mt-24 py-12 lg:py-24 ${sectionPad}`} style={{ background: lavenderBg }}>
      <div className={`${inner} flex flex-col gap-2.5 lg:px-2.5`}>
        <div className="flex flex-col items-start gap-3.5 pb-4">
          <Eyebrow>Implementation journey</Eyebrow>
          <Title>Six steps, each with a gate.</Title>
          <span className="rounded-full bg-[#fff4e0] px-3 py-1.5 text-[12px] font-semibold uppercase leading-5 text-[#7a4b00]">
            Proposed method — not a claimed production process
          </span>
        </div>

        <ol className="grid gap-6 pt-6 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className={`flex flex-col ${card}`}>
              <div className={`relative h-[220px] w-full lg:h-[255px] ${photoBg}`}>
                <Photo src={s.image} alt={s.alt} sizes="(min-width: 1024px) 410px, (min-width: 640px) 50vw, 100vw" />
                <span
                  className={`${fontPoppins} absolute left-3.5 top-3.5 rounded-full bg-white/[0.92] px-2.5 py-1 text-[12px] font-semibold leading-5 text-[#243b73]`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-col gap-1.5 p-6">
                <h3 className={`${fontPoppins} pb-2 text-[18px] font-semibold leading-6 text-[#16245a]`}>{s.title}</h3>
                <p className="text-[15px] leading-6 text-[#5b6678]">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <h3 className={`${fontPoppins} pt-12 text-[20px] font-semibold leading-7 text-[#16245a]`}>Step-by-step detail</h3>
        <p className="text-[16px] leading-7 text-[#5b6678]">
          Opening a step shows information only — it is not step completion or onboarding.
        </p>

        <div className="flex flex-col gap-2.5 pt-1">
          {steps.map((s, i) => {
            const isOpen = open === i;
            const n = String(i + 1).padStart(2, "0");
            return (
              <div
                key={s.title}
                className={`overflow-hidden rounded-2xl border border-solid bg-white/50 ${isOpen ? "border-[#c9bdfb]" : "border-[#e3e8f2]"}`}
              >
                <h4>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`step-${n}`}
                    className={`${fontPoppins} flex min-h-14 w-full cursor-pointer items-center gap-3.5 px-4 py-3 text-left text-[16px] font-semibold text-[#16245a] ${
                      isOpen ? "border-b border-solid border-[#c9bdfb]" : ""
                    }`}
                  >
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-[10px] bg-[#eee9fd] text-[12px] text-[#7657e8]">
                      {n}
                    </span>
                    <span className="flex-1">{s.title}</span>
                    <span aria-hidden="true" className="text-[20px] text-[#7657e8]">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                </h4>
                <dl id={`step-${n}`} hidden={!isOpen} className="grid gap-x-10 gap-y-1 px-5 py-4 sm:grid-cols-[180px_1fr]">
                  {fields.map(([key, label]) => (
                    <div key={key} className="contents">
                      <dt className="pt-1 text-[12px] font-semibold uppercase leading-5 tracking-[0.6px] text-[#7657e8] sm:pt-0.5">
                        {label}
                      </dt>
                      <dd className="pb-2 text-[15px] leading-6 text-[#2d3a52] sm:pb-1">{s.detail[key]}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

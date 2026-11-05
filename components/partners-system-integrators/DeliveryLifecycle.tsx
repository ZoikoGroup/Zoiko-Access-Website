"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Eyebrow, heading } from "./shared";

const stages = [
  {
    title: "Discover",
    owner: "sponsor institution",
    text: "Define the actual use case and the accountable institution.",
    evidence: "A written use case naming the sponsor and the people it serves.",
    boundary: "No systems are touched and no data is requested at this stage.",
  },
  {
    title: "Assess",
    owner: "sponsor + integrator",
    text: "Check contractual, regional, privacy and technical feasibility.",
    evidence: "A feasibility note covering contracts, market rules, lawful basis and interfaces.",
    boundary: "A negative assessment ends the project. Nothing moves forward by default.",
  },
  {
    title: "Design",
    owner: "integrator",
    text: "Map systems, messages, terminologies, source ownership and roles.",
    evidence: "A data map and interface design approved by the sponsor.",
    boundary: "Only the fields the purpose needs are mapped. The source system stays the record owner.",
  },
  {
    title: "Validate",
    owner: "integrator + reviewers",
    text: "Run synthetic test data, interoperability, accessibility and threat scenarios.",
    evidence: "A test record that includes failures and how each one was resolved.",
    boundary: "Testing uses synthetic data only. No real patient information is used.",
  },
  {
    title: "Authorize",
    owner: "governance reviewers",
    text: "Obtain operational, clinical-safety and privacy sign-off.",
    evidence: "Signed approvals from the named operational, clinical-safety and privacy owners.",
    boundary: "Without every sign-off, the connection is not released.",
  },
  {
    title: "Operate",
    owner: "authorized organization",
    text: "Monitor, escalate, reconcile, update and revoke.",
    evidence: "A named owner, a monitoring routine and an approved change plan.",
    boundary: "Access can be suspended or revoked at any time by the authorized organization.",
  },
];

export default function DeliveryLifecycle() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="process" className="scroll-mt-24 bg-[#F5F8FC] px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <div className="mb-14 text-center">
          <Eyebrow center>Six-stage delivery lifecycle</Eyebrow>
          <h2 className={`${heading} mb-3 text-3xl text-[#16245A] md:text-4xl md:leading-[48px]`}>
            From discovery to governed operation.
          </h2>
          <p className="mx-auto max-w-[720px] text-base leading-7 text-[#5B6B8C]">
            Each stage has a deliverable and an owner. Open a stage to see the evidence and its boundary.
          </p>
        </div>

        <ol className="relative space-y-6 lg:space-y-0">
          {/* Dashed spine: left on mobile, centered on desktop. */}
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-6 top-0 border-l-2 border-dashed border-[#3D5BD9] lg:left-1/2"
          />
          {stages.map((s, i) => {
            const isOpen = open === i;
            const right = i % 2 === 1;
            return (
              <li key={s.title} className="relative grid grid-cols-[48px_1fr] gap-4 lg:grid-cols-[1fr_48px_1fr] lg:gap-6">
                <span
                  className={`${heading} relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#3D5BD9] bg-white text-base text-[#243B73] lg:col-start-2 lg:row-start-1`}
                >
                  {i + 1}
                </span>
                <div
                  className={`rounded-lg border border-[#E4E7F2] bg-white px-6 py-5 shadow-[0_10px_30px_rgba(36,59,115,0.08)] lg:row-start-1 ${
                    right ? "lg:col-start-3 lg:mt-12" : "lg:col-start-1 lg:mb-12"
                  }`}
                >
                  <p className="text-xs text-[#3D5BD9]">owner: {s.owner}</p>
                  <h3 className={`${heading} mt-1 text-xl leading-7 text-[#16245A]`}>{s.title}</h3>
                  <p className="mt-1.5 pb-1.5 text-sm leading-6 text-[#5B6B8C]">{s.text}</p>
                  <div className="border-t border-[#E4E7F2] pt-2">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={`stage-${i}`}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex items-center gap-1.5 text-sm font-semibold leading-6 text-[#7B5CF0] hover:text-[#5A3FD6]"
                    >
                      Evidence &amp; boundary
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen && (
                      <dl id={`stage-${i}`} className="mt-2 space-y-2 text-sm leading-6">
                        <div>
                          <dt className="font-semibold text-[#16245A]">Evidence</dt>
                          <dd className="text-[#5B6B8C]">{s.evidence}</dd>
                        </div>
                        <div>
                          <dt className="font-semibold text-[#16245A]">Boundary</dt>
                          <dd className="text-[#5B6B8C]">{s.boundary}</dd>
                        </div>
                      </dl>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

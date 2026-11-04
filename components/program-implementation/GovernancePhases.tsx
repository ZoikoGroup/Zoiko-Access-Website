"use client";

import { useState } from "react";
import { Eyebrow, IMG, heading } from "./shared";

const phases = [
  {
    title: "Discovery & mandate",
    icon: `${IMG}/icon-discovery.webp`,
    image: `${IMG}/phase-discovery.webp`,
    summary: "Establish why the program exists and who has the authority to run it.",
    purpose: "Define the need and intended population.",
    owner: "Program sponsor",
    evidence: "Documented mandate and objectives.",
    gate: "Mandate confirmed by the accountable owner.",
    fails: "Stop — no further work without a mandate.",
  },
  {
    title: "Scope & authority",
    icon: `${IMG}/icon-scope.webp`,
    image: `${IMG}/example-authority.webp`,
    summary: "Set the program's boundaries and confirm the legal basis for each activity.",
    purpose: "Define cohorts, locality, channels and services.",
    owner: "Program sponsor with legal counsel",
    evidence: "Approved scope and documented lawful basis.",
    gate: "Scope and authority signed off by accountable owners.",
    fails: "Narrow the scope or stop until authority is confirmed.",
  },
  {
    title: "Solution & partner design",
    icon: `${IMG}/icon-solution.webp`,
    image: `${IMG}/example-provider.webp`,
    summary: "Design how the service works and which licensed partners take part.",
    purpose: "Agree workflows, partners and data boundaries.",
    owner: "Program owner and participating providers",
    evidence: "Partner agreements and an approved design.",
    gate: "Design and partner agreements approved.",
    fails: "Redesign, or proceed without the partner that can't agree.",
  },
  {
    title: "Validation",
    icon: `${IMG}/icon-validation.webp`,
    image: `${IMG}/launch-assurance.webp`,
    summary: "Prove the program works safely before anyone relies on it.",
    purpose: "Test security, privacy, accessibility and clinical handoffs.",
    owner: "Named reviewers for each area",
    evidence: "Current test results and review records.",
    gate: "Every review passed, with named approvers.",
    fails: "Fix and re-test — no launch on unresolved findings.",
  },
  {
    title: "Approval & controlled launch",
    icon: `${IMG}/icon-approval.webp`,
    image: `${IMG}/example-launch.webp`,
    summary: "Launch in a limited, monitored way with a plan to roll back.",
    purpose: "Release to an agreed group under close monitoring.",
    owner: "Accountable program owner",
    evidence: "Signed release approval and a rollback plan.",
    gate: "Launch criteria met during the controlled period.",
    fails: "Roll back and return to validation.",
  },
  {
    title: "Monitoring & evolution",
    icon: `${IMG}/icon-monitoring.webp`,
    image: `${IMG}/hero-bg.webp`,
    summary: "Keep watching how the program performs and change it only through the same gates.",
    purpose: "Track exceptions, feedback and evidence over time.",
    owner: "Program owner and technology operator",
    evidence: "Ongoing monitoring and periodic reviews.",
    gate: "Each change re-enters the relevant phase.",
    fails: "Pause, suspend or decommission with an exit plan.",
  },
];

export default function GovernancePhases() {
  const [active, setActive] = useState(0);
  const phase = phases[active];

  const details = [
    { label: "Purpose", value: phase.purpose },
    { label: "Owner", value: phase.owner },
    { label: "Required evidence", value: phase.evidence },
    { label: "Exit gate", value: phase.gate },
    { label: "If it fails", value: phase.fails, warn: true },
  ];

  return (
    <section id="phases" className="scroll-mt-24 bg-[#F5F7FC] px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Six-phase governance journey</Eyebrow>
        <h2 className={`${heading} mb-3 text-3xl text-[#16245A] md:text-4xl`}>
          Six illustrative phases, each with a gate.
        </h2>
        <p className="mb-8 max-w-[740px] text-base leading-7 text-[#5B6B8C]">
          Each phase should close with a named owner, documented decision and evidence before the
          next phase begins. Phases are illustrative — no durations are implied.
        </p>

        <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-[330px_1fr]">
          <div role="tablist" aria-label="Implementation phases" className="flex flex-col gap-2">
            {phases.map((p, i) => {
              const selected = i === active;
              return (
                <button
                  key={p.title}
                  type="button"
                  role="tab"
                  id={`phase-tab-${i}`}
                  aria-selected={selected}
                  aria-controls="phase-panel"
                  onClick={() => setActive(i)}
                  className={`${heading} flex min-h-14 items-center gap-3 rounded-2xl border px-3.5 py-3 text-left text-base transition-colors ${
                    selected
                      ? "border-[#16245A] bg-[#16245A] text-white"
                      : "border-[#E4E7F2] bg-white text-[#16245A] hover:border-[#C9C0F7]"
                  }`}
                >
                  <img src={p.icon} alt="" className="h-10 w-10 rounded-[10px]" />
                  {p.title}
                </button>
              );
            })}
          </div>

          <div
            id="phase-panel"
            role="tabpanel"
            aria-labelledby={`phase-tab-${active}`}
            className="overflow-hidden rounded-3xl border border-[#E4E7F2] bg-white shadow-[0_10px_20px_rgba(36,59,115,0.10)]"
          >
            <img src={phase.image} alt="" className="h-56 w-full object-cover" />
            <div className="p-7">
              <h3 className={`${heading} mb-1 text-2xl text-[#16245A]`}>
                {String(active + 1).padStart(2, "0")} · {phase.title}
              </h3>
              <p className="mb-4 text-base leading-6 text-[#5B6B8C]">{phase.summary}</p>
              <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {details.map((d) => (
                  <div key={d.label} className="rounded-xl bg-[#F5F7FC] px-4 py-3.5">
                    <dt className="text-xs font-bold uppercase tracking-wide text-[#7B5CF0]">{d.label}</dt>
                    <dd className={`text-sm leading-6 ${d.warn ? "text-[#A32020]" : "text-[#2A3550]"}`}>
                      {d.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

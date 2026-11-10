"use client";

import { useState } from "react";
import Image from "next/image";
import { IMG, SectionHeader, container, heading, section } from "./shared";

const controls = [
  {
    title: "Least privilege",
    text: "Each user and system gets only the access its role and task require.",
    points: ["Role-based access", "Task-scoped permissions", "Default deny", "Periodic access review"],
  },
  {
    title: "Tenant isolation",
    text: "Each institution's data and configuration stay separate from every other institution's.",
    points: ["Separate tenant spaces", "No cross-tenant queries", "Per-tenant keys", "Isolation tested in review"],
  },
  {
    title: "Audit trail",
    text: "Every access and exchange is recorded so it can be reviewed later.",
    points: ["Who, what, when", "Tamper-evident logs", "Institution-visible records", "Defined retention"],
  },
  {
    title: "Credential lifecycle",
    text: "Credentials are issued, rotated and revoked on a defined schedule.",
    points: ["Short-lived tokens", "Scheduled rotation", "Immediate revocation", "No shared accounts"],
  },
  {
    title: "Data minimization",
    text: "Only the context a task needs is relayed. Nothing extra is stored or shared.",
    points: ["Purpose-bound fields", "No record copies", "Limited retention", "Redaction by default"],
  },
];

export default function SecurityControls() {
  const [active, setActive] = useState(0);
  const c = controls[active];

  return (
    <section className={`bg-gradient-to-br from-[#1A1F8F] via-[#2A2BC9] to-[#6A48F0] ${section}`}>
      <div className={container}>
        <SectionHeader
          dark
          eyebrow="Security & access controls"
          title="Five proposed controls."
          intro="Pick a control to see what it means. All are proposed, pending security review per institution."
        />

        <div className="mt-8 grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,525px)_minmax(0,1fr)]">
          <div className="relative aspect-[525/420] w-full overflow-hidden rounded-3xl">
            <Image
              src={`${IMG}/security-review.webp`}
              alt="A person reviewing hospital systems on a laptop and phone"
              fill
              sizes="(min-width: 1024px) 525px, 100vw"
              className="object-cover"
            />
          </div>

          <div>
            <div role="tablist" aria-label="Security controls" className="flex flex-wrap gap-2">
              {controls.map((ctl, i) => {
                const on = i === active;
                return (
                  <button
                    key={ctl.title}
                    type="button"
                    role="tab"
                    id={`sec-tab-${i}`}
                    aria-selected={on}
                    aria-controls="sec-panel"
                    onClick={() => setActive(i)}
                    className={`rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors ${
                      on
                        ? "border-white bg-white text-[#16245A]"
                        : "border-white/30 bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {ctl.title}
                  </button>
                );
              })}
            </div>

            <div
              role="tabpanel"
              id="sec-panel"
              aria-labelledby={`sec-tab-${active}`}
              className="mt-16 rounded-3xl border border-white/25 bg-white/10 p-7 backdrop-blur-sm"
            >
              <h3 className={`${heading} text-2xl text-white`}>{c.title}</h3>
              <p className="mt-1 text-base text-white/80">{c.text}</p>
              <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {c.points.map((p) => (
                  <li key={p} className="rounded-lg bg-white/10 px-4 py-2.5 text-sm text-white">
                    {p}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-white/65">Proposed · pending institutional review</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

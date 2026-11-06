"use client";

import { useState } from "react";
import { SectionHeader, container, heading, section } from "./shared";

const owners = [
  { role: "Institution sponsor", duty: "Approves the program and its scope" },
  { role: "Clinical owner", duty: "Clinical safety and workflow sign-off" },
  { role: "IT owner", duty: "Source systems and interfaces" },
  { role: "Legal", duty: "Contracts and data roles" },
  { role: "Privacy", duty: "Lawful basis and minimization" },
  { role: "Security", duty: "Security review and controls" },
  { role: "Operations", duty: "Runbooks, support and escalation" },
  { role: "Patient access", duty: "Patient-facing communication" },
];

// Ring geometry for the progress meter.
const R = 52;
const CIRC = 2 * Math.PI * R;

export default function ReadinessMatrix() {
  // Local state only: ticks are never saved or sent anywhere.
  const [checked, setChecked] = useState<boolean[]>(() => owners.map(() => false));
  const count = checked.filter(Boolean).length;

  return (
    <section id="readiness" className={`bg-[#F5F8FC] ${section}`}>
      <div className={container}>
        <SectionHeader
          eyebrow="Adoption readiness matrix"
          title="Is every owner in place?"
          intro="A private self-check for your institution. Ticks are not saved or sent anywhere."
        />

        <div className="mt-8 grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,830px)_minmax(0,1fr)]">
          <div className="overflow-hidden rounded-2xl border border-[#E4E7F2] bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#16245A] text-xs font-semibold text-white">
                <tr>
                  <th scope="col" className="px-5 py-4">Owner</th>
                  <th scope="col" className="hidden px-5 py-4 sm:table-cell">Responsible for</th>
                  <th scope="col" className="w-28 px-5 py-4 text-center">In place?</th>
                </tr>
              </thead>
              <tbody>
                {owners.map((o, i) => (
                  <tr key={o.role} className="border-t border-[#E4E7F2]">
                    <th scope="row" className={`${heading} px-5 py-3.5 font-semibold text-[#16245A]`}>
                      {o.role}
                      <span className="mt-0.5 block font-[inherit] text-xs font-normal text-[#5B6B8C] sm:hidden">
                        {o.duty}
                      </span>
                    </th>
                    <td className="hidden px-5 py-3.5 text-[#5B6B8C] sm:table-cell">{o.duty}</td>
                    <td className="px-5 py-3.5 text-center">
                      <input
                        type="checkbox"
                        aria-label={`${o.role} in place`}
                        checked={checked[i]}
                        onChange={() => setChecked((prev) => prev.map((v, j) => (j === i ? !v : v)))}
                        className="h-5 w-5 cursor-pointer accent-[#7B5CF0]"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-[#7B5CF0] to-[#3D68D6] px-8 py-8 text-center" aria-live="polite">
            <svg viewBox="0 0 140 140" className="mx-auto h-36 w-36" aria-hidden="true">
              <circle cx="70" cy="70" r={R} fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="12" />
              <circle
                cx="70"
                cy="70"
                r={R}
                fill="none"
                stroke="white"
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={CIRC}
                strokeDashoffset={CIRC * (1 - count / owners.length)}
                transform="rotate(-90 70 70)"
                className="transition-[stroke-dashoffset] duration-300"
              />
              <circle cx="70" cy="70" r="42" fill="#5A3FD6" />
              <text
                x="70"
                y="70"
                textAnchor="middle"
                dominantBaseline="central"
                fill="white"
                fontSize="28"
                fontWeight="700"
                fontFamily="var(--font-fc-poppins)"
              >
                {count}/{owners.length}
              </text>
            </svg>
            <p className={`${heading} mt-3 text-lg text-white`}>Owners in place</p>
            <p className="mt-1 text-xs leading-5 text-white/80">
              A self-check only. It is not an assessment and does not start onboarding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

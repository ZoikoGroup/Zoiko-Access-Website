"use client";

import { useState } from "react";
import { Eyebrow, IMG, heading } from "./shared";

const roles = [
  {
    id: "health-system",
    label: "Health system",
    title: "For health systems",
    text: "Evaluate how coordination with other independent organizations could work, while your own systems stay the source of record.",
    image: `${IMG}/role-hospital.webp`,
  },
  {
    id: "regional-network",
    label: "Regional network",
    title: "For regional networks",
    text: "Explore how members could share agreed rules and governed handoffs, without a central record or shared ownership of patient data.",
    image: `${IMG}/handoff-diagnostics.webp`,
  },
  {
    id: "provider",
    label: "Provider",
    title: "For providers",
    text: "See how referrals and handoffs could reach you with a named owner, and how you stay responsible only for care you explicitly accept.",
    image: `${IMG}/handoff-referral.webp`,
  },
  {
    id: "patient",
    label: "Patient",
    title: "For patients",
    text: "Understand how organizations caring for you could coordinate, with your information shared only on a lawful basis and for a clear purpose.",
    image: `${IMG}/handoff-follow-up.webp`,
  },
];

export default function RoleChooser() {
  const [active, setActive] = useState(roles[0].id);
  const role = roles.find((r) => r.id === active) ?? roles[0];

  return (
    <section className="bg-white px-6 py-16 lg:px-16">
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <Eyebrow>Who this is for</Eyebrow>
          <h2 className={`${heading} mb-3 text-3xl text-[#16245A] md:text-4xl`}>Choose your role.</h2>
          <p className="mb-6 text-base leading-7 text-[#5B6B8C]">
            Your choice changes the explanation below — it doesn&apos;t enroll you in anything.
          </p>

          <div
            role="tablist"
            aria-label="Choose your role"
            className="inline-flex flex-wrap gap-1.5 rounded-2xl border border-[#E4E7F2] bg-white p-1.5"
          >
            {roles.map((r) => {
              const selected = r.id === active;
              return (
                <button
                  key={r.id}
                  type="button"
                  role="tab"
                  id={`role-tab-${r.id}`}
                  aria-selected={selected}
                  aria-controls="role-panel"
                  onClick={() => setActive(r.id)}
                  className={`min-h-11 rounded-[10px] px-5 py-2.5 text-base font-semibold transition-colors ${
                    selected ? "bg-[#253B73] text-white" : "text-[#2A3550] hover:bg-[#F5F8FC]"
                  }`}
                >
                  {r.label}
                </button>
              );
            })}
          </div>
        </div>

        <div
          id="role-panel"
          role="tabpanel"
          aria-labelledby={`role-tab-${role.id}`}
          aria-live="polite"
          className="grid grid-cols-1 overflow-hidden rounded-3xl border border-[#E4E7F2] bg-white sm:grid-cols-[280px_1fr]"
        >
          <img src={role.image} alt="" className="h-56 w-full object-cover sm:h-full sm:min-h-60" />
          <div className="p-8">
            <h3 className={`${heading} mb-1.5 text-2xl text-[#16245A]`}>{role.title}</h3>
            <p className="text-base leading-6 text-[#5B6B8C]">{role.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

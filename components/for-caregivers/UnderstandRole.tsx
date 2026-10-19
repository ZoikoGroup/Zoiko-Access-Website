import { Headphones, KeyRound, ShieldCheck, Users } from "lucide-react";
import SectionHeading from "./SectionHeading";

const roles = [
  {
    icon: Users,
    title: "Informal helper",
    task: "Researching services, organizing questions, going along to visits.",
    basis: "The person’s own choices. No formal authority.",
    limits: "No automatic access to private records or to act for them.",
    next: "Ask the person what they are comfortable sharing.",
  },
  {
    icon: KeyRound,
    title: "Person-appointed delegate",
    task: "Acting only within what the person has authorized.",
    basis: "The person’s consent, verified by the responsible service.",
    limits: "Scope, purpose and time limits. It can be changed or revoked.",
    next: "Ask the responsible organization how delegation works where an approved service exists.",
  },
  {
    icon: ShieldCheck,
    title: "Legal parent or guardian",
    task: "Supporting decisions for a minor or a protected person.",
    basis: "Law and legal evidence, which vary by location.",
    limits:
      "Parental responsibility is not unlimited. Some services and records may be confidential.",
    next: "Check the local rules and the organization’s requirements.",
  },
  {
    icon: Headphones,
    title: "Care professional",
    task: "Clinical assessment, treatment and interpretation.",
    basis: "Professional responsibility within the care organization.",
    limits:
      "Zoiko Access supports navigation. It does not replace clinical judgment.",
    next: "Speak with the care team.",
  },
];

const columns = [
  ["Typical task", "task"],
  ["Authority basis", "basis"],
  ["Special limits", "limits"],
  ["Next step", "next"],
] as const;

export default function UnderstandRole() {
  return (
    <section className="w-full bg-white py-[72px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[70px]">
        <SectionHeading
          badge="Understand your role"
          title={
            <>
              Helping is not the same as
              <br className="hidden sm:block" /> having authority
            </>
          }
          description="Role names here are informational. What you can actually do comes from verified, location-specific checks, and rules differ by country and age."
        />

        <div className="mt-8 flex flex-col gap-6">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <article
                key={role.title}
                className="rounded-2xl border border-[#E4E0F7] bg-white px-6 pb-10 pt-6 shadow-[0_8px_24px_rgba(36,28,89,0.06)]"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEEAFE] text-[#5B45D6]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-[18px] font-semibold text-[#1D1857] [font-family:var(--font-poppins)]">
                    {role.title}
                  </h3>
                </div>
                <dl className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-[90px]">
                  {columns.map(([label, key]) => (
                    <div key={label}>
                      <dt className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#5B45D6]">
                        {label}
                      </dt>
                      <dd className="mt-0.5 text-[15px] leading-6 text-[#5B5880]">
                        {role[key]}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

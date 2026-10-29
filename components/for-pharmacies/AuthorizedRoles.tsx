import React from "react";

const rolesData = [
  {
    title: "Patient",
    description: "Owns their own requests and permissions.",
  },
  {
    title: "Guardian or caregiver",
    description: "Acts only with verified authority.",
  },
  {
    title: "Prescriber",
    description: "Creates prescriptions and keeps clinical responsibility.",
  },
  {
    title: "Pharmacy",
    description: "Reviews, dispenses and follows local rules.",
  },
  {
    title: "Payers, where applicable",
    description: "Handle their own coverage decisions.",
  },
  {
    title: "Platform coordination",
    description: "Supports permitted handoffs. No dispensing or clinical role.",
  },
];

export default function AuthorizedRoles() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#eee8fc] via-[#f5f0ff] to-[#e4d9fb] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full bg-[#7C3AED]"
              aria-hidden="true"
            />
            <span className="text-xs font-semibold tracking-wide text-[#7C3AED] sm:text-sm">
              Authorized roles
            </span>
          </div>
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#1E1B4B] sm:text-[44px]">
            Six roles, no implicit access.
          </h2>
          <p className="mt-3 text-[15px] leading-[1.65] text-[#475569] sm:text-[16px]">
            Delegation needs verified permission and can be revoked. Broad
            partner visibility is never assumed.
          </p>
        </div>

        {/* 3-Column 2-Row Card Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rolesData.map((role, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-[#CBD5E1] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] sm:p-8"
            >
              <div>
                <h3 className="text-[18px] font-bold tracking-[-0.02em] text-[#1E1B4B]">
                  {role.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#475569]">
                  {role.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

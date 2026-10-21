"use client";

export default function PermissionLifecycle() {
  const lifecycleSteps = [
    {
      term: "Grant",
      desc: "A verified authority is recorded for a defined purpose.",
    },
    {
      term: "Review",
      desc: "The permission is checked again at set times and when circumstances change.",
    },
    {
      term: "Limit",
      desc: "Scope can be narrowed to specific information or actions.",
    },
    {
      term: "Expire",
      desc: "A permission can end on a set date without anyone acting.",
    },
    {
      term: "Revoke",
      desc: "It can be withdrawn. Information already disclosed is not instantly deleted.",
    },
  ];

  const badges = [
    "Source",
    "Identity",
    "Represented patient",
    "Purpose",
    "Data or action scope",
    "Start",
    "Expiry",
    "Suspension",
    "Revocation",
    "Decision actor",
  ];

  return (
    <section className="w-full bg-[#f4f1ff] py-16 lg:py-20 border-t border-[#eee9ff]">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        {/* Eyebrow */}
        <div className="mb-3 inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.14em] text-[#6d5ae6] uppercase">
          <span className="inline-block h-1.5 w-1.5 rotate-45 bg-[#6d5ae6]" />
          <span>PERMISSION LIFECYCLE</span>
        </div>

        {/* Section Heading */}
        <h2 className="mb-4 font-bold tracking-tight text-[#111827] text-[30px] sm:text-[36px] lg:text-[40px] [font-family:var(--font-poppins)]">
          Permissions start, change
          <br className="hidden sm:inline" /> and end
        </h2>

        {/* Subtitle */}
        <p className="mb-8 max-w-[640px] text-[14px] sm:text-[15px] leading-relaxed text-slate-500">
          This describes the lifecycle only. It happens in a separately verified
          service, never on this page.
        </p>

        {/* Numbered List */}
        <ol className="mb-10 flex flex-col gap-2.5 text-[13.5px] sm:text-[14px] leading-relaxed text-slate-600">
          {lifecycleSteps.map((step, index) => (
            <li key={index} className="flex items-baseline gap-2">
              <span className="font-semibold text-slate-900">
                {index + 1}.
              </span>
              <span>
                <strong className="font-bold text-slate-900">{step.term}</strong>
                : {step.desc}
              </span>
            </li>
          ))}
        </ol>

        {/* Pill Badges Row */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
          {badges.map((badge, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-full border border-[#e5defb] bg-white px-4 py-1.5 text-[11.5px] sm:text-[12px] font-medium text-[#6d5ae6] shadow-sm transition hover:border-[#c4b5fd]"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

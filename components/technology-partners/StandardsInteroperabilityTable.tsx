import Image from "next/image";

interface CriteriaRow {
  criteria: string;
  description: string;
}

const criteriaData: CriteriaRow[] = [
  {
    criteria: "standards_profile",
    description:
      "Which healthcare messaging standard and version // evaluated, not claimed",
  },
  {
    criteria: "terminology_mapping",
    description: "How codes and terms translate between systems",
  },
  {
    criteria: "identity_matching",
    description: "How records are matched — never silently merged",
  },
  {
    criteria: "signed_interfaces",
    description: "Agreed, versioned interface contracts",
  },
  {
    criteria: "error_semantics",
    description: "What failures look like and who handles them",
  },
  {
    criteria: "source_of_record",
    description: "Which system stays authoritative",
  },
];

export default function StandardsInteroperabilityTable() {
  return (
    <section className="relative w-full overflow-hidden py-20 font-sans sm:py-28">
      {/* Background Image Layer */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <Image
          src="/tech/grad.png"
          alt="Standards and interoperability gradient background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-0.5 w-4 bg-[#B7A6FF]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B7A6FF]">
              Standards &amp; interoperability
            </span>
          </div>
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-white sm:text-[44px]">
            Evaluated per integration, never claimed upfront.
          </h2>
          <p className="mt-3 text-[15px] leading-[1.65] text-blue-100/90 sm:text-[16px]">
            Supported interfaces are listed only after validation. Until then,
            these are the questions every integration must answer.
          </p>
        </div>

        {/* Table Container with bg #0A1036 */}
        <div className="mt-12 overflow-x-auto rounded-[28px] border border-white/10 bg-[#0A1036] shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
          <div className="min-w-[800px] p-6 sm:p-8">
            {/* Table Header */}
            <div className="grid grid-cols-12 border-b border-white/10 pb-4 font-mono text-[13px] font-semibold tracking-wider text-blue-200/70">
              <div className="col-span-4">evaluation_criteria</div>
              <div className="col-span-8">
                supported.interfaces (none published)
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-white/5 font-mono text-[14px]">
              {criteriaData.map((row, index) => (
                <div
                  key={index}
                  className="grid grid-cols-12 items-center py-5"
                >
                  <div className="col-span-4 font-medium text-purple-300">
                    {row.criteria}
                  </div>
                  <div className="col-span-8 text-blue-100/90">
                    {row.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

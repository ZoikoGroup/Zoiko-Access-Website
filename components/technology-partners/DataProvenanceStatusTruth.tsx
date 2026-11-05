import Image from "next/image";

interface StageDetail {
  title: string;
  description: string;
}

const stagesData: StageDetail[] = [
  {
    title: "Transmission",
    description: "The connector sent it. Source and time recorded.",
  },
  {
    title: "Receipt",
    description: "The receiving system got it. No person has read it.",
  },
  {
    title: "Review",
    description: "A responsible person looked at it.",
  },
  {
    title: "Acceptance",
    description: "The receiving organization explicitly accepted it.",
  },
];

export default function DataProvenanceStatusTruth() {
  return (
    <section className="relative w-full overflow-hidden py-20 font-sans sm:py-28 text-white">
      {/* Background Image Layer */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <Image
          src="/tech/grad.png"
          alt="Data provenance background gradient"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-3 flex items-center justify-center gap-2">
            <span className="h-0.5 w-4 bg-[#B7A6FF]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B7A6FF]">
              Data provenance &amp; status truth
            </span>
            <span className="h-0.5 w-4 bg-[#B7A6FF]" aria-hidden="true" />
          </div>
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-white sm:text-[48px]">
            Four events. Never one.
          </h2>
        </div>

        {/* Status Flow Pill Sequence with Not-Equal Signs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6">
          {stagesData.map((stage, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 sm:gap-4 lg:gap-6"
            >
              {/* Pill Container */}
              <div className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 shadow-lg backdrop-blur-md sm:px-8 sm:py-5">
                <span className="text-[18px] font-bold tracking-tight text-white sm:text-[22px]">
                  {stage.title}
                </span>
              </div>

              {/* Not-Equal Symbol Connector */}
              {idx < stagesData.length - 1 && (
                <span
                  className="text-[20px] font-light text-blue-200/70 sm:text-[24px]"
                  aria-label="does not equal"
                >
                  &ne;
                </span>
              )}
            </div>
          ))}
        </div>

        {/* 4-Column Explanatory Grid with Top Separator Lines */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stagesData.map((stage, idx) => (
            <div
              key={idx}
              className="flex flex-col border-t border-white/20 pt-4"
            >
              <h3 className="text-[16px] font-bold text-white">
                {stage.title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-blue-100/80">
                {stage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

interface ProvenanceField {
  label: string;
  value: string;
}

const provenanceFields: ProvenanceField[] = [
  { label: "Source authority", value: "originating system" },
  { label: "Data version", value: "v—" },
  { label: "Authored time", value: "when it was written" },
  { label: "Effective time", value: "when it applies" },
  { label: "Correction", value: "none / superseded by" },
  { label: "Recipient", value: "who received it" },
];

export default function EvidenceProvenanceSource() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F2F2F2] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-3">
            <span className="rounded-md bg-[#0E1646] px-2.5 py-1 font-mono text-[12px] font-semibold text-[#B7A6FF]">
              // provenance
            </span>
          </div>

          <h2 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#0E1646] sm:text-[44px]">
            Follow evidence back to its source.
          </h2>

          <p className="mt-3 text-[15px] leading-[1.65] text-[#475569] sm:text-[16px]">
            Every piece of exchanged information should carry a label like this,
            so anyone can see where it came from.
          </p>
        </div>

        {/* 2-Column Main Card Layout */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Column: Purple Provenance Metadata Card */}
          <div className="flex flex-col justify-between rounded-3xl bg-[#B49BFF] p-6 text-[#0E1646] shadow-md sm:p-8 lg:col-span-6">
            <div>
              <h3 className="text-[24px] font-bold tracking-tight text-[#0E1646]">
                Provenance
              </h3>
              <div
                className="mt-4 h-1 w-full bg-[#0E1646]"
                aria-hidden="true"
              />

              {/* Field Rows */}
              <div className="mt-2 divide-y divide-[#0E1646]/20 font-sans text-[14px]">
                {provenanceFields.map((field, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-3"
                  >
                    <span className="font-bold text-[#0E1646]">
                      {field.label}
                    </span>
                    <span className="font-mono text-[13px] text-[#0E1646]/80">
                      {field.value}
                    </span>
                  </div>
                ))}
              </div>
              <div className="h-1 w-full bg-[#0E1646]" aria-hidden="true" />
            </div>

            {/* Disclaimer Footer */}
            <p className="mt-6 text-[12px] font-medium text-[#0E1646]/70">
              Conceptual metadata. Fields are illustrative, not a live schema.
            </p>
          </div>

          {/* Right Column: Image Card with Overlaid Banner */}
          <div className="relative min-h-[380px] overflow-hidden rounded-3xl shadow-md lg:col-span-6">
            <Image
              src="/api/4.png"
              alt="Clinical handoff and provenance evidence"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />

            {/* Dark Overlay Banner at Bottom */}
            <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-[#0E1646]/90 p-5 backdrop-blur-md">
              <p className="text-[16px] font-bold text-white sm:text-[18px]">
                If you cannot trace it, do not trust it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

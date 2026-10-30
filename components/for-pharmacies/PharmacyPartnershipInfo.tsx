import Link from "next/link";

export default function PharmacyPartnershipInfo() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-[#EBE9FB] to-[#FFFFFF] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6 text-center sm:px-10 lg:px-12">
        {/* Header Content */}
        <div className="mx-auto max-w-5xl">
          {/* Eyebrow */}
          <div className="mb-3 inline-flex items-center justify-center gap-2">
            <span
              className="h-2 w-2 rounded-full bg-[#7C3AED]"
              aria-hidden="true"
            />
            <span className="text-xs font-semibold tracking-wide text-[#7C3AED] sm:text-sm">
              Partner and procurement
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#1E1B4B] sm:text-[44px] lg:text-[48px]">
            Explore pharmacy partnership information.
          </h2>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-2xl text-[15px] max-w-xl leading-[1.65] text-[#475569] sm:text-[16px]">
            Partnership intake is gated. This route opens only when a contact
            owner, intake route and lawful process are verified.
          </p>

          {/* Action Button & Gated Pill */}
          <div className="mt-8 flex items-center justify-center gap-3">
            <Link
              href="/pharmacy-partnership"
              className="inline-flex items-center justify-center rounded-xl bg-[#7657E8] px-6 py-3.5 text-xs font-medium text-white shadow-lg shadow-purple-900/20 transition-all hover:bg-[#6C4AEC] sm:text-sm"
            >
              Pharmacy partnership
            </Link>
            <span className="inline-flex items-center rounded-full bg-[#FEF3C7] px-3.5 py-1.5 text-xs font-semibold text-[#D97706]">
              Gated
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function CoordinatedLayer() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f8fafc] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Left Column - Content */}
          <div className="flex flex-col">
            <p className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#5B3FD1]">
              <span
                className="block h-2 w-2 rounded-full bg-[#7C5CE8]"
                aria-hidden="true"
              />
              What we are building
            </p>

            <h2 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#23327A] sm:text-[44px]">
              A coordinated layer. <br className="hidden sm:inline" />
              Independent care systems.
            </h2>

            <p className="mt-6 text-[16px] leading-[1.8] text-[#4B5563] sm:text-[17px]">
              Zoiko Access is designed as a coordinated layer across a broad
              healthcare ecosystem. It can support service discovery, provider
              and facility information, eligible appointments and referrals,
              care-related communications, benefit navigation, pharmacy and
              diagnostic connections, and administrative follow-up where the
              required permissions, partners and releases are in place.
            </p>

            <p className="mt-6 text-[16px] leading-[1.8] text-[#4B5563] sm:text-[17px]">
              The underlying design is built to work with independent healthcare
              systems rather than declare one worldwide medical record.
              Participating providers, laboratories, insurers and other
              organizations retain their relevant source records, professional
              responsibilities and decisions. Zoiko Access is designed to help
              authorized steps move between them with clearer status and
              accountability.
            </p>
          </div>

          {/* Right Column - Illustration Card */}
          <div className="relative flex items-center justify-center sm:p-8">
            <div className="relative h-[360px] w-full sm:h-[420px] lg:h-[500px]">
              <Image
                src="/about/2.png"
                alt="Coordinated healthcare network illustration"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

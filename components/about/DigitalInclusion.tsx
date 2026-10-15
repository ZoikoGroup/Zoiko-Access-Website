import Image from "next/image";

export default function DigitalInclusion() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          {/* Left Column - Content */}
          <div className="flex flex-col">
            <p className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#7657E8]">
              <span
                className="block h-2 w-2 rounded-full bg-[#7657E8]"
                aria-hidden="true"
              />
              Digital inclusion
            </p>

            <h2 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#23327A] sm:text-[44px]">
              Designed to be useful <br />
              to more people.
            </h2>

            <p className="mt-6 text-[16px] leading-[1.8] text-[#4B5563] sm:text-[17px]">
              A healthcare service is not truly accessible if people cannot
              understand it or complete a necessary task. We are designing Zoiko
              Access with readable information, inclusive interactions,
              screen-reader and keyboard access, responsive mobile experiences,
              language adaptation and human-help pathways where available.
            </p>

            <p className="mt-6 text-[16px] leading-[1.8] text-[#4B5563] sm:text-[17px]">
              The goal is not just a smaller screen or translated label. It is
              an experience that considers people with differing abilities,
              devices, digital confidence, caregiving needs and connectivity
              constraints—and makes it clear when digital access alone is
              insufficient.
            </p>
          </div>

          {/* Right Column - Illustration Card */}
          <div className="relative flex items-center justify-center rounded-3xl border border-[#E5E7EB] bg-white p-6 shadow-[0_10px_30px_rgba(0,0,0,0.04)] sm:p-8">
            <div className="relative h-[360px] w-full sm:h-[420px] lg:h-[460px]">
              <Image
                src="/about/11.png"
                alt="Digital inclusion and accessibility illustration"
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

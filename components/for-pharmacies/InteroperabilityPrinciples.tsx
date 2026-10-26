import Image from "next/image";

const badges = [
  "Locally permitted",
  "Partner verified",
  "Source-attributed",
  "Least data",
];

export default function InteroperabilityPrinciples() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#eee8fc] via-[#f5f0ff] to-[#e4d9fb] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-6">
            <div className="mb-3 inline-flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full bg-[#7C3AED]"
                aria-hidden="true"
              />
              <span className="text-xs font-semibold tracking-wide text-[#7C3AED] sm:text-sm">
                Interoperability principles
              </span>
            </div>

            <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#1E1B4B] sm:text-[44px]">
              Connections follow local permission.
            </h2>

            <p className="mt-4 text-[15px] leading-[1.7] text-[#475569] sm:text-[16px]">
              Any connection depends on local rules, partner verification and
              authorized interfaces. No standard, certification or network is
              claimed here.
            </p>

            {/* Pills */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {badges.map((badge, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-full border border-[#E2E8F0] bg-white px-4 py-2 text-[14px] font-medium text-[#1E1B4B] shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column - Image Card */}
          <div className="lg:col-span-6">
            <div className="relative h-[280px] w-full overflow-hidden rounded-[28px] border border-[#E2E8F0] shadow-[0_10px_30px_rgba(0,0,0,0.08)] sm:h-[360px] lg:h-[400px]">
              <Image
                src="/for/13.png"
                alt="Wooden peg dolls arranged in a hierarchical organizational chart structure"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

const bulletItems = [
  "Its source and verification date",
  "The operating region and any restrictions",
  "An uncertainty label where freshness is unknown",
  "A clear line between service description and real-time inventory",
];

export default function ListingProvenance() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
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
                Listing and availability provenance
              </span>
            </div>

            <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#1E1B4B] sm:text-[44px]">
              A listing is a service description, not stock.
            </h2>

            <p className="mt-4 text-[15px] leading-[1.7] text-[#475569] sm:text-[16px]">
              A displayed service listing is not proof that a medicine is
              available, prescribed, reimbursable or safe for a particular
              patient. Any listing should show:
            </p>

            <ul className="mt-6 flex flex-col space-y-3">
              {bulletItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-[14px] leading-[1.6] text-[#475569] sm:text-[15px]"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7C3AED]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Image Card */}
          <div className="lg:col-span-6">
            <div className="relative h-[280px] w-full overflow-hidden rounded-[28px] border border-[#E2E8F0] shadow-[0_10px_30px_rgba(0,0,0,0.08)] sm:h-[360px] lg:h-[400px]">
              <Image
                src="/for/6.png"
                alt="Night city view featuring a lit bridge with light trails and a cathedral building"
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

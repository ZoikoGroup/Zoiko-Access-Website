import Image from "next/image";

const privacyBullets = [
  "No personal, medicine, symptom or prescription fields",
  "No uploads",
  "Analytics are category-only, with no clinical or search data",
  "Private exchange needs separately approved controls",
];

export default function PrivacyArchitecture() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column - Image Card */}
          <div className="order-2 lg:order-1 lg:col-span-6">
            <div className="relative h-[280px] w-full overflow-hidden rounded-[28px] border border-[#E2E8F0] shadow-[0_10px_30px_rgba(0,0,0,0.08)] sm:h-[360px] lg:h-[400px]">
              <Image
                src="/for/14.png"
                alt="Woman standing in a busy city street with traffic representing privacy architecture"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div className="order-1 lg:order-2 lg:col-span-6">
            <div className="mb-3 inline-flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full bg-[#7C3AED]"
                aria-hidden="true"
              />
              <span className="text-xs font-semibold tracking-wide text-[#7C3AED] sm:text-sm">
                Privacy architecture
              </span>
            </div>

            <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#1E1B4B] sm:text-[44px]">
              No medicine, symptom or prescription entered here.
            </h2>

            <ul className="mt-6 flex flex-col space-y-3.5">
              {privacyBullets.map((item, index) => (
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
        </div>
      </div>
    </section>
  );
}

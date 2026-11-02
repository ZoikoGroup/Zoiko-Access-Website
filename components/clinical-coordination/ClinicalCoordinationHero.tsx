import Image from "next/image";
import Link from "next/link";

export default function ClinicalCoordinationHero() {
  return (
    <section className="relative w-full overflow-hidden py-20 font-sans sm:py-28">
      {/* Background Image Layer */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <Image
          src="/cor/bg.png"
          alt="Abstract background pattern"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Content Column */}
          <div className="lg:col-span-6">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-0.5 w-4 bg-[#7C3AED]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#7C3AED]">
                Clinicians / Clinical coordination
              </span>
            </div>

            <h1 className="text-[38px] font-bold leading-[1.12] tracking-[-0.03em] text-[#1E1B4B] sm:text-[48px] lg:text-[58px]">
              Clearer care coordination, with{" "}
              <span className="text-[#4267D5]">clinical responsibility</span>{" "}
              where it belongs.
            </h1>

            <p className="mt-5 max-w-xl text-[15px] leading-[1.65] text-[#475569] sm:text-[16px]">
              Zoiko Access is designed to help qualified clinicians and
              authorized care organizations understand referrals, handoffs and
              follow-up across participating services. Workflows depend on local
              authorization, actual integrations and professional permissions.
            </p>

            {/* Inline Action Buttons */}
            <div className="mt-8 flex flex-row items-center gap-4">
              <Link
                href="#explore-coordination"
                className="inline-flex items-center gap-2 rounded-xl bg-[#3B82F6] px-6 py-3.5 text-[15px] font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#2563EB] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2"
              >
                <span>Explore clinical coordination</span>
                <span aria-hidden="true">&rarr;</span>
              </Link>

              <Link
                href="#understand-responsibility"
                className="inline-flex items-center rounded-xl border border-[#E2E8F0] bg-white px-6 py-3.5 text-[15px] font-semibold text-[#1E1B4B] shadow-sm transition-all duration-300 hover:border-[#CBD5E1] hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:ring-offset-2"
              >
                Understand clinical responsibility
              </Link>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="relative pt-6 pb-6 lg:col-span-6 lg:pb-0">
            {/* Main Rounded Image Container */}
            <div className="relative h-[380px] w-full overflow-hidden rounded-3xl bg-slate-100 shadow-[0_12px_40px_rgba(0,0,0,0.08)] sm:h-[460px]">
              <Image
                src="/cor/1.png"
                alt="Clinician using a mobile device for care coordination"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>

            {/* Floating Referral Status Overlay Badge - Overlapping left edge from below */}
            <div className="absolute bottom-4 -left-6 z-10 rounded-2xl border border-[#E2E8F0] bg-white/95 p-4 shadow-[0_15px_35px_rgba(0,0,0,0.15)] backdrop-blur-md sm:bottom-6 sm:-left-10 sm:p-5">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-[#7C3AED]">
                Referral status
              </span>
              <div className="mt-2.5 flex items-center gap-2">
                <span className="rounded-lg bg-[#7C3AED] px-3 py-1 text-xs font-semibold text-white">
                  Sent
                </span>
                <span className="text-xs text-[#94A3B8]" aria-hidden="true">
                  &rarr;
                </span>
                <span className="rounded-lg bg-[#F1F5F9] px-3 py-1 text-xs font-semibold text-[#475569]">
                  Received
                </span>
                <span className="text-xs text-[#94A3B8]" aria-hidden="true">
                  &rarr;
                </span>
                <span className="rounded-lg bg-[#F1F5F9] px-3 py-1 text-xs font-semibold text-[#475569]">
                  Accepted
                </span>
              </div>
              <span className="mt-2 block text-[11px] text-[#64748B]">
                Illustrative status only — no patient data.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

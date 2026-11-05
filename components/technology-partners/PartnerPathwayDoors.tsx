import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PartnerPathwayDoors() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F2F2F2] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Top Header Row with Title on Left and Description on Right */}
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-0.5 w-4 bg-[#7C3AED]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#7C3AED]">
                Partner pathway
              </span>
            </div>
            <h2 className="text-[36px] font-bold leading-[1.12] tracking-[-0.03em] text-[#1E1B4B] sm:text-[44px]">
              Two doors, one open today.
            </h2>
          </div>

          <div className="lg:col-span-6">
            <p className="text-[15px] leading-[1.65] text-[#475569] sm:text-[16px]">
              Partner intake opens only when the receiving team, forms, terms,
              routing and confirmation are operational.
            </p>
          </div>
        </div>

        {/* 2-Column Doors Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Left Door: Closed Partner Intake */}
          <div className="flex flex-col justify-between rounded-3xl border border-[#E2E8F0] bg-white p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] sm:p-10">
            <div>
              {/* Toggle Switch (Off / Closed) */}
              <div className="flex items-center gap-3">
                <div className="relative inline-flex h-6 w-11 shrink-0 cursor-not-allowed rounded-full bg-slate-300 transition-colors">
                  <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform" />
                </div>
                <span className="font-mono text-[12px] font-semibold text-[#64748B]">
                  partner_intake: closed
                </span>
              </div>

              <h3 className="mt-6 text-[22px] font-bold tracking-[-0.02em] text-[#1E1B4B] sm:text-[24px]">
                Become a partner
              </h3>

              <p className="mt-2 text-[15px] leading-[1.6] text-[#475569]">
                Not available yet. No form is shown until an approved, staffed
                intake exists.
              </p>
            </div>
          </div>

          {/* Right Door: Open Information & Requirements */}
          <div
            className="flex flex-col justify-between rounded-3xl p-8 shadow-[0_15px_40px_rgba(90,67,201,0.25)] sm:p-10 text-white"
            style={{
              background: "linear-gradient(to right, #6366F1 0%, #4267D5 100%)",
            }}
          >
            <div>
              {/* Toggle Switch (On / Open) */}
              <div className="flex items-center gap-3">
                <div className="relative inline-flex h-6 w-11 shrink-0 items-center rounded-full bg-emerald-400 p-0.5 transition-colors">
                  <span className="h-4 w-4 translate-x-5 rounded-full bg-white transition-transform shadow-sm" />
                </div>
                <span className="font-mono text-[12px] font-semibold text-white">
                  information: open
                </span>
              </div>

              <h3 className="mt-6 text-[22px] font-bold tracking-[-0.02em] text-white sm:text-[24px]">
                Review the requirements
              </h3>

              <p className="mt-2 text-[15px] leading-[1.6] text-blue-100/90">
                Read what a partnership would involve, and explore related
                partner topics.
              </p>
            </div>

            {/* Action Button */}
            <div className="mt-8">
              <Link
                href="#requirements"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-[15px] font-semibold text-[#1E1B4B] shadow-md transition-all duration-300 hover:bg-slate-100 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#4267D5]"
              >
                <span>Partner requirements</span>
                <ArrowRight className="h-4 w-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

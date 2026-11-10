import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, CheckCircle2 } from "lucide-react";

export default function CareOperationsHero() {
  return (
    <section
      className={`relative isolate w-full overflow-hidden bg-[radial-gradient(700px_420px_at_351px_341px,rgba(213,211,252,1)_0%,rgba(213,211,252,0)_70%),linear-gradient(180deg,#ffffff_0%,#efebfe_100%)] pb-14 pt-10 lg:bg-[radial-gradient(700px_408px_at_1296px_188px,rgba(213,211,252,1)_0%,rgba(213,211,252,0)_70%),linear-gradient(180deg,#ffffff_0%,#efebfe_100%)] lg:h-[628px] lg:py-16 `}
    >
      {/* Background Image Layer using /care/1.png */}

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
          {/* Left Column: Heading, Description & Actions */}
          <div className="lg:col-span-7">
            <div className="mb-3">
              <span className="font-mono text-[12px] font-semibold tracking-wider text-[#16245A]/70 uppercase">
                HOSPITALS &amp; CLINICS / CARE OPERATIONS
              </span>
            </div>

            <h1 className="text-[42px] font-bold leading-[1.1] tracking-[-0.03em] text-[#0E1646] sm:text-[56px]">
              Care <span className="text-[#4B3FB5]">Operations</span>
            </h1>

            <p className="mt-4 text-[16px] leading-[1.65] text-[#475569] sm:text-[18px]">
              Understand how scheduling, referrals and care transitions may be
              coordinated without transferring clinical responsibility.
            </p>

            <p className="mt-4 text-[15px] leading-[1.6] text-[#475569]">
              Zoiko Access is designed as a permissioned coordination layer.
              Institutional care teams keep their source systems, scheduling and
              clinical decisions.
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/workflows"
                className="inline-flex items-center justify-center rounded-2xl bg-[#4B3FB5] px-7 py-4 text-[15px] font-bold text-white shadow-lg shadow-[#4B3FB5]/20 transition-all duration-200 hover:bg-[#3d3298]"
              >
                Explore the three workflows &rarr;
              </Link>
              <Link
                href="/institutional-coordination"
                className="inline-flex items-center justify-center rounded-2xl border border-[#CBD5E1] bg-white px-7 py-4 text-[15px] font-bold text-[#0E1646] shadow-sm transition-all duration-200 hover:bg-slate-50"
              >
                Institutional coordination
              </Link>
            </div>

            {/* Footnote */}
            <p className="mt-6 text-[13px] font-medium text-[#64748B]">
              Specific connections depend on local approvals and partner
              validation. Not clinical advice, emergency response, booking
              confirmation or medical-record access.
            </p>
          </div>

          {/* Right Column: Hero Image with Floating Status Cards */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-[500px] lg:max-w-none">
              {/* Main Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/care/hero.png"
                  alt="Care operations clinician partner"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Floating Badge 1: Requested (Top Left) */}
              <div className="absolute -top-6 left-4 flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-xl border border-slate-100 sm:-left-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F1F0FE] text-[#7C3AED]">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[13px] font-bold text-[#0E1646]">
                    Requested
                  </span>
                  <span className="block text-[11px] text-[#64748B]">
                    Not yet a booking
                  </span>
                </div>
              </div>

              {/* Floating Badge 2: Referral Received (Middle Right) */}
              <div className="absolute top-1/2 -right-4 flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-xl border border-slate-100 sm:-right-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F1F0FE] text-[#7C3AED]">
                  <ArrowRight className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[13px] font-bold text-[#0E1646]">
                    Referral received
                  </span>
                  <span className="block text-[11px] text-[#64748B]">
                    Under review by the team
                  </span>
                </div>
              </div>

              {/* Floating Badge 3: Handoff Accepted (Bottom Left) */}
              <div className="absolute -bottom-6 left-8 flex items-center gap-3 rounded-2xl bg-white p-3.5 shadow-xl border border-slate-100">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[13px] font-bold text-[#0E1646]">
                    Handoff accepted
                  </span>
                  <span className="block text-[11px] text-[#64748B]">
                    By a named care owner
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

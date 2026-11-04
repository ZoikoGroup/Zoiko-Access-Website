import Image from "next/image";
import Link from "next/link";

export default function TechnologyPartnersHero() {
  return (
    <section className="relative w-full overflow-hidden py-16 font-sans sm:py-24">
      {/* Overall Background Image Layer (Spans full section width) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image
          src="/tech/bg.png"
          alt="Abstract technology background pattern"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Main Container max-w-[1440px] */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Outer Card Banner with Linear Gradient: #7657E8 via #4267D5 to #B7A6FF */}
        <div
          className="relative overflow-hidden rounded-[36px] p-8 shadow-[0_20px_50px_rgba(118,87,232,0.25)] sm:p-12 lg:p-16"
          style={{
            background:
              "linear-gradient(to right, #7657E8 0%, #4267D5 50%, #B7A6FF 100%)",
          }}
        >
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Content Column */}
            <div className="lg:col-span-6">
              {/* Eyebrow Badge */}
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-black/20 px-4 py-1.5 backdrop-blur-md">
                <span
                  className="h-2 w-2 rounded-full bg-white"
                  aria-hidden="true"
                />
                <span className="text-xs font-semibold uppercase tracking-widest text-white">
                  Partners &amp; Developers / Technology Partners
                </span>
              </div>

              {/* Main Title */}
              <h1 className="text-[38px] font-bold leading-[1.12] tracking-[-0.03em] text-white sm:text-[48px] lg:text-[54px]">
                Explore technology partnerships{" "}
                <span className="bg-gradient-to-r from-[#AA92FF] to-[#8ADEFF] bg-clip-text text-transparent"> with Zoiko Access</span>
              </h1>

              {/* Body Text */}
              <p className="mt-5 max-w-xl text-[15px] leading-[1.65] text-white/90 sm:text-[16px]">
                Technology partners may explore potential Zoiko Access
                integrations through governed scope, security, legal and
                operational review. A published technology concept does not
                establish a live connection or an approved partnership.
              </p>

              {/* Inline Action Buttons */}
              <div className="mt-8 flex flex-row items-center gap-4">
                <Link
                  href="#partner-requirements"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#7657E8] px-6 py-3.5 text-[15px] font-semibold text-white shadow-md transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#7657E8]"
                >
                  <span>See partner requirements</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>

                <Link
                  href="#governance"
                  className="inline-flex items-center rounded-xl border border-white/30 bg-black/10 px-6 py-3.5 text-[15px] font-semibold text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:bg-black/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#7657E8]"
                >
                  How integrations are governed
                </Link>
              </div>
            </div>

            {/* Right Side Visual Column (Code Window + Bottom Status Box with Image) */}
            <div className="flex flex-col gap-4 lg:col-span-6">
              {/* Mock Code Window Card */}
              <div className="overflow-hidden rounded-2xl border border-white/20 bg-[#090D2E]/90 shadow-2xl backdrop-blur-xl">
                {/* Window Top Bar */}
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500/80" />
                    <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                    <span className="h-3 w-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-xs font-mono text-blue-200/60">
                    partnership-review.example
                  </span>
                </div>

                {/* Code Content */}
                <div className="p-5 font-mono text-[13px] leading-[1.7] text-blue-100">
                  <p className="text-blue-300/60">
                    // illustrative only — not a live record
                  </p>
                  <p>
                    <span className="text-purple-300">partner_type:</span>{" "}
                    &quot;integration_platform&quot;
                  </p>
                  <p>
                    <span className="text-purple-300">scope:</span>{" "}
                    &quot;defined, separately reviewed&quot;
                  </p>
                  <p>
                    <span className="text-purple-300">security_review:</span>{" "}
                    <span className="text-amber-300">pending</span>
                  </p>
                  <p>
                    <span className="text-purple-300">legal_review:</span>{" "}
                    <span className="text-amber-300">pending</span>
                  </p>
                  <p>
                    <span className="text-purple-300">market_release:</span>{" "}
                    <span className="text-red-300">not_confirmed</span>
                  </p>
                  <p>
                    <span className="text-purple-300">data_access:</span>{" "}
                    &quot;none_by_default&quot;
                  </p>
                  <p>
                    <span className="text-purple-300">status:</span>{" "}
                    <span className="text-red-300">
                      &quot;not an approved partnership&quot;
                    </span>
                  </p>
                </div>
              </div>

              {/* Status Bar Card with Small Image */}
              <div className="flex items-center gap-4 rounded-2xl border border-white/20 bg-black/10 p-4 backdrop-blur-md">
                <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-xl bg-slate-800 shadow-sm">
                  <Image
                    src="/tech/3.png"
                    alt="Technology partner analytics preview"
                    fill
                    sizes="80px"
                    className="object-cover object-center"
                  />
                </div>
                <p className="text-[13px] leading-[1.5] text-white/90">
                  Every status above starts unconfirmed and changes only with
                  evidence and a named owner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

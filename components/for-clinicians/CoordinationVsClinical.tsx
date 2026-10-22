"use client";

export default function CoordinationVsClinical() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        {/* Eyebrow */}
        <div className="mb-3 inline-flex items-center gap-2 text-[12px] font-semibold text-[#6d5ae6]">
          <span className="h-0.5 w-3.5 bg-[#6d5ae6]" />
          <span>Clinical work and administration</span>
        </div>

        {/* Section Heading */}
        <h2 className="mb-10 font-bold tracking-tight text-[#111827] text-[30px] sm:text-[36px] lg:text-[40px] [font-family:var(--font-poppins)]">
          What coordination covers, and what stays with professionals
        </h2>

        {/* Comparison Container */}
        <div className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-2.5 sm:p-3.5 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
            {/* Left Box: Coordination tasks */}
            <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
              <div>
                <h3 className="mb-1 text-[21px] sm:text-[23px] font-bold text-slate-900 [font-family:var(--font-poppins)]">
                  Coordination tasks
                </h3>
                <p className="mb-8 text-[13.5px] text-slate-500">
                  Made easier to see and follow.
                </p>

                <ul className="space-y-4 text-[13.5px] sm:text-[14px] text-slate-700">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#2563eb] shrink-0" />
                    <span className="leading-snug">
                      Sending and tracking an authorized referral request
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#2563eb] shrink-0" />
                    <span className="leading-snug">
                      Showing who owns the next step
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#2563eb] shrink-0" />
                    <span className="leading-snug">
                      Keeping status, source and time together
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#2563eb] shrink-0" />
                    <span className="leading-snug">
                      Passing permitted messages between named parties
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Box: Reserved professional decisions */}
            <div className="flex flex-col justify-between rounded-2xl bg-[#132f9e] p-6 sm:p-8 lg:p-10 text-white shadow-lg">
              <div>
                <h3 className="mb-1 text-[21px] sm:text-[23px] font-bold text-white [font-family:var(--font-poppins)]">
                  Reserved professional decisions
                </h3>
                <p className="mb-8 text-[13.5px] text-blue-200">
                  Never made by the platform.
                </p>

                <ul className="space-y-4 text-[13.5px] sm:text-[14px] text-blue-50">
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-[2px] bg-[#93c5fd] shrink-0" />
                    <span className="leading-snug">
                      Diagnosis and clinical triage
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-[2px] bg-[#93c5fd] shrink-0" />
                    <span className="leading-snug">
                      Prescribing and treatment decisions
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-[2px] bg-[#93c5fd] shrink-0" />
                    <span className="leading-snug">
                      Deciding whether a referral is accepted
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-[2px] bg-[#93c5fd] shrink-0" />
                    <span className="leading-snug">
                      Ranking urgency automatically
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

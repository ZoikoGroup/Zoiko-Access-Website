"use client";

export default function CoordinationStepsMatrix() {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-6 sm:px-10 lg:px-12">
        {/* Eyebrow */}
        <div className="mb-3 inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.14em] text-[#6d5ae6] uppercase">
          <span className="h-0.5 w-4 bg-[#6d5ae6]" />
          <span>HOW COORDINATION WORKS</span>
        </div>

        {/* Section Heading */}
        <h2 className="mb-4 font-bold tracking-tight text-[#111827] text-[30px] sm:text-[36px] lg:text-[40px] [font-family:var(--font-poppins)]">
          Four steps, and who owns each one
        </h2>

        {/* Subtitle */}
        <p className="mb-12 max-w-[640px] text-[14px] sm:text-[15px] leading-relaxed text-slate-500">
          The platform helps the request travel. The people and organizations
          make the clinical decisions.
        </p>

        {/* Matrix Container */}
        <div className="rounded-3xl border border-[#e2dcfc] bg-[#f8f7ff] p-5 sm:p-7 lg:p-8 overflow-x-auto shadow-sm">
          <div className="min-w-[780px]">
            {/* Header Columns */}
            <div className="grid grid-cols-[180px_repeat(4,1fr)] gap-4 pb-6 text-[11px] font-bold tracking-[0.08em] text-[#6d5ae6] uppercase">
              <div>PARTY</div>
              <div>1 · CHOOSE</div>
              <div>2 · SEND</div>
              <div>3 · ACKNOWLEDGE</div>
              <div>4 · FOLLOW THROUGH</div>
            </div>

            {/* Matrix Rows */}
            <div className="flex flex-col gap-4">
              {/* Row 1: Sending clinician */}
              <div className="grid grid-cols-[180px_repeat(4,1fr)] items-stretch gap-4">
                {/* Party Label */}
                <div className="flex flex-col justify-center pr-3">
                  <span className="text-[14.5px] font-bold text-slate-900 leading-snug">
                    Sending clinician
                  </span>
                  <span className="text-[11.5px] text-slate-500 mt-0.5 leading-snug">
                    Decides what to ask for
                  </span>
                </div>

                {/* Col 1: Choose */}
                <div className="flex flex-col justify-center rounded-2xl bg-[#1d42a8] p-4 sm:p-5 text-white shadow-md">
                  <span className="text-[13.5px] sm:text-[14px] font-bold mb-1 [font-family:var(--font-poppins)]">
                    Choose a pathway
                  </span>
                  <span className="text-[11px] sm:text-[11.5px] text-white/80 leading-snug">
                    Pick the appropriate coordination pathway.
                  </span>
                </div>

                {/* Col 2: Send */}
                <div className="flex flex-col justify-center rounded-2xl bg-[#1d42a8] p-4 sm:p-5 text-white shadow-md">
                  <span className="text-[13.5px] sm:text-[14px] font-bold mb-1 [font-family:var(--font-poppins)]">
                    Send an authorized request
                  </span>
                  <span className="text-[11px] sm:text-[11.5px] text-white/80 leading-snug">
                    Only within your role and scope.
                  </span>
                </div>

                {/* Col 3: Acknowledge (Empty) */}
                <div />

                {/* Col 4: Follow Through */}
                <div className="flex flex-col justify-center rounded-2xl border border-dashed border-[#a78bfa] bg-white p-4 sm:p-5 shadow-sm">
                  <span className="text-[13.5px] sm:text-[14px] font-bold text-slate-900 mb-1 [font-family:var(--font-poppins)]">
                    Follow the outcome
                  </span>
                  <span className="text-[11px] sm:text-[11.5px] text-slate-600 leading-snug">
                    Act on what the receiving party reports.
                  </span>
                </div>
              </div>

              {/* Row 2: Coordination layer */}
              <div className="grid grid-cols-[180px_repeat(4,1fr)] items-stretch gap-4">
                {/* Party Label */}
                <div className="flex flex-col justify-center pr-3">
                  <span className="text-[14.5px] font-bold text-slate-900 leading-snug">
                    Coordination layer
                  </span>
                  <span className="text-[11.5px] text-slate-500 mt-0.5 leading-snug">
                    Carries and records, does not decide
                  </span>
                </div>

                {/* Col 1: Choose (Empty) */}
                <div />

                {/* Col 2: Send */}
                <div className="flex flex-col justify-center rounded-2xl border border-dashed border-[#a78bfa] bg-white p-4 sm:p-5 shadow-sm">
                  <span className="text-[13.5px] sm:text-[14px] font-bold text-slate-900 mb-1 [font-family:var(--font-poppins)]">
                    Carry the request
                  </span>
                  <span className="text-[11px] sm:text-[11.5px] text-slate-600 leading-snug">
                    Records the send event with its source and time.
                  </span>
                </div>

                {/* Col 3: Acknowledge */}
                <div className="flex flex-col justify-center rounded-2xl border border-dashed border-[#a78bfa] bg-white p-4 sm:p-5 shadow-sm">
                  <span className="text-[13.5px] sm:text-[14px] font-bold text-slate-900 mb-1 [font-family:var(--font-poppins)]">
                    Show the status
                  </span>
                  <span className="text-[11px] sm:text-[11.5px] text-slate-600 leading-snug">
                    Keeps technical and clinical status separate.
                  </span>
                </div>

                {/* Col 4: Follow Through (Empty) */}
                <div />
              </div>

              {/* Row 3: Receiving organization */}
              <div className="grid grid-cols-[180px_repeat(4,1fr)] items-stretch gap-4">
                {/* Party Label */}
                <div className="flex flex-col justify-center pr-3">
                  <span className="text-[14.5px] font-bold text-slate-900 leading-snug">
                    Receiving organization
                  </span>
                  <span className="text-[11.5px] text-slate-500 mt-0.5 leading-snug">
                    Decides whether to accept
                  </span>
                </div>

                {/* Col 1: Choose (Empty) */}
                <div />

                {/* Col 2: Send (Empty) */}
                <div />

                {/* Col 3: Acknowledge */}
                <div className="flex flex-col justify-center rounded-2xl bg-[#1d42a8] p-4 sm:p-5 text-white shadow-md">
                  <span className="text-[13.5px] sm:text-[14px] font-bold mb-1 [font-family:var(--font-poppins)]">
                    Acknowledge or accept
                  </span>
                  <span className="text-[11px] sm:text-[11.5px] text-white/80 leading-snug">
                    The accepting party is named. Delivery is not acceptance.
                  </span>
                </div>

                {/* Col 4: Follow Through */}
                <div className="flex flex-col justify-center rounded-2xl bg-[#1d42a8] p-4 sm:p-5 text-white shadow-md">
                  <span className="text-[13.5px] sm:text-[14px] font-bold mb-1 [font-family:var(--font-poppins)]">
                    Own the next action
                  </span>
                  <span className="text-[11px] sm:text-[11.5px] text-white/80 leading-snug">
                    The responsible clinician or team carries it forward.
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

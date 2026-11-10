const STAGES = [
  {
    title: "Creation",
    caption: "referring clinician",
    tone: "bg-[#ece8fb] text-[#1b2559]",
    note: null,
  },
  {
    title: "Authorized transmission",
    caption: null,
    tone: "bg-[#e4dcfa] text-[#1b2559]",
    note: null,
  },
  {
    title: "Receipt",
    caption: "transport fact only",
    tone: "bg-[#e1e9fa] text-[#1b2559]",
    note: "≠ accepted",
  },
  {
    title: "Review",
    caption: "receiving team",
    tone: "bg-[#1f3270] text-white",
    note: null,
  },
] as const;

const OUTCOMES = [
  {
    title: "Accept",
    description: "The receiving team takes the referral on.",
    box: "bg-[#e6f4ec] text-[#1f6b45]",
    stroke: "#1f6b45",
  },
  {
    title: "Decline",
    description: "The sender is told, with a reason where appropriate.",
    box: "bg-[#fdeee6] text-[#b4472a]",
    stroke: "#b4472a",
  },
  {
    title: "Redirect",
    description: "Sent to a more suitable team or service.",
    box: "bg-[#e4ebfb] text-[#2f4fc4]",
    stroke: "#2f4fc4",
  },
] as const;

export default function ReferralRouting() {
  return (
    <section className="w-full overflow-x-hidden bg-white px-6 py-12 text-[#1b2559] sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1300px]">
        <div className="flex items-center gap-3">
          <span className="h-0.5 w-6 bg-[#7c5ce6]" />
          <p className="text-sm font-medium uppercase tracking-[0.12em] text-[#7c5ce6]">
            Referral Intake &amp; Routing
          </p>
        </div>

        <div className="mt-5 grid items-end gap-6 lg:grid-cols-[1.2fr_1fr]">
          <h2 className="max-w-[520px] text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Sent, received, reviewed, then decided.
          </h2>
          <p className="max-w-[440px] text-base leading-7 text-[#5d6683]">
            A referral passes through five stages. Only the receiving
            team&apos;s review leads to a decision.
          </p>
        </div>

        {/* Diagram */}
        <div className="mt-8 rounded-3xl border border-[#e3e8f0] bg-white p-6 sm:p-8 lg:p-10">
          <div className="flex flex-col items-stretch gap-4 lg:flex-row lg:items-center lg:gap-0">
            {/* Stages */}
            <ol className="flex flex-1 flex-col gap-4 lg:flex-row lg:items-center lg:gap-0">
              {STAGES.map((stage, index) => (
                <li
                  key={stage.title}
                  className="flex flex-col items-center lg:flex-1 lg:flex-row"
                >
                  <div className="relative w-full lg:w-auto lg:min-w-[110px] lg:flex-1">
                    <div
                      className={`flex min-h-[72px] flex-col items-center justify-center rounded-xl px-4 py-3 text-center ${stage.tone}`}
                    >
                      <p className="text-base font-semibold leading-5">
                        {stage.title}
                      </p>
                      {stage.caption && (
                        <p
                          className={
                            stage.tone.includes("text-white")
                              ? "mt-1 text-sm text-white/70"
                              : "mt-1 text-sm text-[#5d6683]"
                          }
                        >
                          {stage.caption}
                        </p>
                      )}
                    </div>
                    {stage.note && (
                      <p className="mt-3 text-center text-sm text-[#b4472a]">
                        {stage.note}
                      </p>
                    )}
                  </div>
                  {index < STAGES.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="h-5 w-0.5 bg-[#7c5ce6] lg:h-0.5 lg:w-6"
                    />
                  )}
                </li>
              ))}
            </ol>

            {/* Connector + outcomes */}
            <div className="flex flex-col items-stretch lg:flex-row lg:items-center">
              <span
                aria-hidden="true"
                className="mx-auto h-5 w-0.5 bg-[#7c5ce6] lg:hidden"
              />
              <svg
                aria-hidden="true"
                viewBox="0 0 60 200"
                preserveAspectRatio="none"
                className="hidden h-[200px] w-[60px] shrink-0 lg:block"
                fill="none"
              >
                <path
                  d="M0 100 C30 100 30 28 60 28"
                  stroke="#7c5ce6"
                  strokeWidth="2"
                />
                <path d="M0 100 L60 100" stroke="#7c5ce6" strokeWidth="2" />
                <path
                  d="M0 100 C30 100 30 172 60 172"
                  stroke="#7c5ce6"
                  strokeWidth="2"
                />
              </svg>
              <ul className="flex flex-col gap-4 lg:w-[220px] lg:gap-[36px]">
                {OUTCOMES.map((outcome) => (
                  <li
                    key={outcome.title}
                    className={`flex h-[52px] items-center justify-center rounded-xl text-base font-semibold ${outcome.box}`}
                  >
                    {outcome.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Legend */}
        <ul className="mt-6 grid gap-4 md:grid-cols-3">
          {OUTCOMES.map((outcome) => (
            <li
              key={outcome.title}
              className={`rounded-xl px-5 py-4 ${outcome.box}`}
            >
              <p className="text-sm font-semibold">{outcome.title}</p>
              <p className="mt-1 text-sm leading-5">{outcome.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

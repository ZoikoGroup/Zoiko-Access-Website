interface ReviewCard {
  title: string;
  subtitle: string;
  bordered?: boolean;
}

interface ReviewStage {
  stepNumber: string;
  category: string;
  cards: ReviewCard[];
}

const reviewStages: ReviewStage[] = [
  {
    stepNumber: "01",
    category: "INTAKE",
    cards: [
      {
        title: "Organization & purpose",
        subtitle: "Who you are, what you'd connect",
      },
      {
        title: "Fit decision",
        subtitle: "Gate",
        bordered: true,
      },
    ],
  },
  {
    stepNumber: "02",
    category: "SCOPE",
    cards: [
      {
        title: "Use case & data needed",
        subtitle: "Minimum necessary",
      },
      {
        title: "Market & jurisdiction",
        subtitle: "Where it would apply",
      },
      {
        title: "Scope sign-off",
        subtitle: "Gate",
        bordered: true,
      },
    ],
  },
  {
    stepNumber: "03",
    category: "TECHNICAL",
    cards: [
      {
        title: "Standards & interfaces",
        subtitle: "Evaluated, not assumed",
      },
      {
        title: "Test plan",
        subtitle: "Including failures",
      },
    ],
  },
  {
    stepNumber: "04",
    category: "SECURITY & LEGAL",
    cards: [
      {
        title: "Security review",
        subtitle: "Controls & evidence",
      },
      {
        title: "Contracts & privacy",
        subtitle: "Lawful purpose",
      },
      {
        title: "Risk acceptance",
        subtitle: "Gate",
        bordered: true,
      },
    ],
  },
  {
    stepNumber: "05",
    category: "DECISION",
    cards: [
      {
        title: "Approve or stop",
        subtitle: "Named approvers",
        bordered: true,
      },
      {
        title: "Controlled release",
        subtitle: "Only if approved",
      },
    ],
  },
];

export default function PartnershipStagedReview() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-0.5 w-4 bg-[#7C3AED]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#7C3AED]">
              How partnership assessment works
            </span>
          </div>
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#1E1B4B] sm:text-[44px]">
            A staged review &mdash; not guaranteed onboarding.
          </h2>
        </div>

        {/* 5-Stage Column Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {reviewStages.map((stage, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-3xl bg-[#EEF1FA] p-5 shadow-sm"
            >
              {/* Column Header */}
              <div className="mb-5 flex items-center justify-between border-b border-[#DCE2F1] pb-3 text-[12px] font-bold uppercase tracking-wider text-[#475569]">
                <span>{stage.category}</span>
                <span className="text-[#94A3B8]">{stage.stepNumber}</span>
              </div>

              {/* Cards inside column */}
              <div className="flex flex-col gap-3">
                {stage.cards.map((card, cIdx) => (
                  <div
                    key={cIdx}
                    className={`rounded-2xl p-4 transition-all ${
                      card.bordered
                        ? "border-2 border-dashed border-[#8B5CF6] bg-white/70 shadow-sm"
                        : "bg-white shadow-sm"
                    }`}
                  >
                    <h3 className="text-[14px] font-bold tracking-[-0.01em] text-[#1E1B4B]">
                      {card.title}
                    </h3>
                    <p className="mt-1 text-[12px] leading-[1.4] text-[#64748B]">
                      {card.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

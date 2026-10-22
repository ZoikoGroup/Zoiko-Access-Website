const steps = [
  {
    num: "1",
    title: "Initiate a permitted\nhandoff",
    desc: "The sending team starts a\nhandoff that is allowed\nunder local rules.",
  },
  {
    num: "2",
    title: "Send information",
    desc: "Only the information\nneeded for the purpose is\nsent.",
  },
  {
    num: "3",
    title: "Verify receipt and\nacknowledgment",
    desc: "The receiving side\nconfirms it arrived. That is\na technical fact, not a\nclinical one.",
  },
  {
    num: "4",
    title: "Review and accept, as\napplicable",
    desc: "The responsible clinician or\nteam reviews it and\ndecides whether to accept.",
  },
  {
    num: "5",
    title: "Document supported\nfollow-up and\nexceptions",
    desc: "Follow-through, delays and\nproblems are recorded with\ntheir source.",
  },
];

export default function TransitionJourney() {
  return (
    <section
      id="transition-journey"
      className="w-full py-[70px] px-4 md:px-[70px]"
      style={{
        background:
          "linear-gradient(135deg, #02125f 0%, #1b2fb5 55%, #3a4de0 100%)",
      }}
    >
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div>
          {/* Badge */}
          <div className="mb-[16px] inline-flex items-center gap-[14px]">
            <span className="h-[2px] w-[28px] bg-white" aria-hidden="true" />
            <span
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 700,
                fontSize: "13px",
                lineHeight: "21.45px",
                letterSpacing: "0.52px",
                color: "#e6dcff",
              }}
            >
              Transition journey
            </span>
          </div>

          {/* Heading */}
          <h2
            className="mb-[16px] text-white"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontWeight: 600,
              fontSize: "40px",
              lineHeight: "48px",
              letterSpacing: "-1.35px",
            }}
          >
            Five steps from handoff to
            <br />
            follow-through
          </h2>

          {/* Subtitle */}
          <p
            className="mb-[29px] text-[#e6e9ff]"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              fontSize: "18.5px",
              lineHeight: "30.53px",
            }}
          >
            Each step has its own evidence. None of them completes just because the one
            <br className="hidden md:inline" />
            before it did.
          </p>
        </div>

        {/* 5 Step Cards - Exact Figma CT-05: 22px 20px padding, 7.4px gap, rounded-24px, no justify-between */}
        <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-[24px] border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] p-[22px_20px_32px_20px] transition-all hover:bg-[rgba(255,255,255,0.15)]"
            >
              {/* Step Number Circle: 46x46, text 20px Outfit Bold */}
              <div
                className="mb-[7px] flex h-[46px] w-[46px] items-center justify-center rounded-full bg-white text-[#031974] shadow-[0_2px_8px_rgba(0,0,0,0.12)] shrink-0"
                style={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontWeight: 700,
                  fontSize: "20px",
                  lineHeight: "33px",
                }}
              >
                {step.num}
              </div>

              {/* Step Title: pt-[6.6px] */}
              <h3
                className="pt-[6.6px] whitespace-pre-line text-white"
                style={{
                  fontFamily: "var(--font-outfit), sans-serif",
                  fontWeight: 600,
                  fontSize: "19px",
                  lineHeight: "22.8px",
                  letterSpacing: "-0.475px",
                }}
              >
                {step.title}
              </h3>

              {/* Step Description: mt-[7.4px] right below title */}
              <p
                className="mt-[7.4px] whitespace-pre-line text-[#e6e9ff]"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 400,
                  fontSize: "14.5px",
                  lineHeight: "23.93px",
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

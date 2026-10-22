import Image from "next/image";

const scenarios = [
  {
    image: "/care-transitions/ct08-scenario-1.png",
    tag: "HYPOTHETICAL EXAMPLE",
    title: "Hospital to primary care",
    start: "A patient is leaving hospital and needs follow-up in primary care.",
    transition: "The discharging team sends an authorized handoff to the primary care team.",
    accountable: "The discharging team for what it sends. The primary care team for decisions\nonce it accepts.",
    risk: "A delivered notice is mistaken for an accepted follow-up.",
  },
  {
    image: "/care-transitions/ct08-scenario-2.png",
    tag: "HYPOTHETICAL EXAMPLE",
    title: "Specialist handoff",
    start: "A primary care clinician asks a specialist to take on one part of care.",
    transition: "An authorized request goes to the specialist service.",
    accountable: "The specialist service decides whether to accept. The sender stays\nresponsible until it does.",
    risk: "An acknowledgment is read as acceptance.",
  },
  {
    image: "/care-transitions/ct08-scenario-3.png",
    tag: "HYPOTHETICAL EXAMPLE",
    title: "Diagnostics follow-up",
    start: "A test result needs a clinician’s attention.",
    transition: "The testing service sends the result to the ordering team.",
    accountable: "The ordering team reviews it and decides what to do.",
    risk: "Publication is mistaken for review.",
  },
  {
    image: "/care-transitions/ct08-scenario-4.png",
    tag: "HYPOTHETICAL EXAMPLE",
    title: "Home and community care",
    start: "A patient needs community support after a clinic visit.",
    transition: "An authorized request goes to the community team, with permitted updates\nfor the patient or caregiver.",
    accountable: "The community team for its services. The referring team for its own duties.",
    risk: "No response is read as agreement.",
  },
];

export default function TransitionScenarios() {
  return (
    <section className="w-full bg-[#f1eefe] py-[70px] px-4 md:px-[70px]">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mb-[36px]">
          {/* Badge */}
          <div className="mb-[14px] inline-flex items-center gap-[10px]">
            <span className="h-[2px] w-[28px] bg-[#7b3ff2]" aria-hidden="true" />
            <span
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 700,
                fontSize: "13px",
                lineHeight: "21.45px",
                letterSpacing: "0.52px",
                color: "#7b3ff2",
              }}
            >
              Common transition scenarios
            </span>
          </div>

          {/* Heading */}
          <h2
            className="mb-[16px] text-[#031974]"
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 600,
              fontSize: "clamp(32px, 4.5vw, 54px)",
              lineHeight: "clamp(38px, 5vw, 58.32px)",
              letterSpacing: "-1.35px",
            }}
          >
            Four hypothetical examples
          </h2>

          {/* Lead */}
          <p
            className="text-[#273444]"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              fontSize: "18.5px",
              lineHeight: "30.53px",
            }}
          >
            These are conceptual. They name no institution and show no results.
          </p>
        </div>

        {/* 2x2 Grid of Scenarios */}
        <div className="grid grid-cols-1 gap-[24px] lg:grid-cols-2">
          {scenarios.map((sc, idx) => (
            <div
              key={idx}
              className="flex flex-col overflow-hidden rounded-[24px] border border-[#d9d3f5] bg-white shadow-[0_4px_16px_rgba(3,25,116,0.03)] transition-all hover:shadow-[0_8px_24px_rgba(3,25,116,0.06)]"
            >
              {/* Figure Banner */}
              <div className="relative h-[190px] w-full bg-slate-100">
                <Image
                  src={sc.image}
                  alt={sc.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, (max-width: 1300px) 50vw, 638px"
                  className="object-cover"
                />
              </div>

              {/* Content Body */}
              <div className="flex flex-1 flex-col p-[28px]">
                {/* Tag */}
                <span
                  className="mb-[6px] block text-[#7b3ff2]"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 800,
                    fontSize: "11.5px",
                    lineHeight: "18.98px",
                    letterSpacing: "0.805px",
                  }}
                >
                  {sc.tag}
                </span>

                {/* Title */}
                <h3
                  className="mb-[20px] text-[#031974]"
                  style={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontWeight: 600,
                    fontSize: "26px",
                    lineHeight: "28px",
                    letterSpacing: "-0.65px",
                  }}
                >
                  {sc.title}
                </h3>

                {/* 4 Details Blocks */}
                <div className="space-y-[16px]">
                  {/* Starting situation */}
                  <div>
                    <span
                      className="block uppercase text-[#7b3ff2]"
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 800,
                        fontSize: "11.5px",
                        lineHeight: "18.98px",
                        letterSpacing: "0.575px",
                      }}
                    >
                      Starting situation
                    </span>
                    <p
                      className="text-[#273444]"
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 400,
                        fontSize: "15px",
                        lineHeight: "24.75px",
                      }}
                    >
                      {sc.start}
                    </p>
                  </div>

                  {/* Possible authorized transition */}
                  <div>
                    <span
                      className="block uppercase text-[#7b3ff2]"
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 800,
                        fontSize: "11.5px",
                        lineHeight: "18.98px",
                        letterSpacing: "0.575px",
                      }}
                    >
                      Possible authorized transition
                    </span>
                    <p
                      className="text-[#273444]"
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 400,
                        fontSize: "15px",
                        lineHeight: "24.75px",
                      }}
                    >
                      {sc.transition}
                    </p>
                  </div>

                  {/* Who stays accountable */}
                  <div>
                    <span
                      className="block uppercase text-[#7b3ff2]"
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 800,
                        fontSize: "11.5px",
                        lineHeight: "18.98px",
                        letterSpacing: "0.575px",
                      }}
                    >
                      Who stays accountable
                    </span>
                    <p
                      className="whitespace-pre-line text-[#273444]"
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 400,
                        fontSize: "15px",
                        lineHeight: "24.75px",
                      }}
                    >
                      {sc.accountable}
                    </p>
                  </div>

                  {/* Unconfirmed-status risk */}
                  <div>
                    <span
                      className="block uppercase text-[#7b3ff2]"
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 800,
                        fontSize: "11.5px",
                        lineHeight: "18.98px",
                        letterSpacing: "0.575px",
                      }}
                    >
                      Unconfirmed-status risk
                    </span>
                    <p
                      className="text-[#8a4b00]"
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 600,
                        fontSize: "15px",
                        lineHeight: "24.75px",
                      }}
                    >
                      {sc.risk}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

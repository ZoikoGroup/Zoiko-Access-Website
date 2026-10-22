"use client";

const stages = [
  {
    title: "Clinically initiated or ordered",
    description: "A professional decides a referral is needed. That clinical decision is theirs.",
    tag: "REFERRING TEAM",
  },
  {
    title: "Validated for permitted routing",
    description: "The referral is checked against permitted routes and required fields before it can be sent.",
    tag: "REFERRING SIDE · ROUTING RULES",
  },
  {
    title: "Sent and transport acknowledged",
    description: "It left the sender and a technical destination confirmed receipt. Nobody has reviewed it.",
    tag: "TRANSPORT SYSTEM",
  },
  {
    title: "Receiving service acknowledged",
    description: "The receiving service’s system recognized the referral.",
    tag: "RECEIVING ORGANIZATION",
  },
  {
    title: "Awaiting or under review",
    description: "Clinical or administrative review at the receiving service.",
    tag: "RECEIVING TEAM",
  },
  {
    title: "One of four outcomes",
    description: "The receiving team decides. Any of these is a normal result.",
    tag: "RECEIVING TEAM",
  },
  {
    title: "Appointment arranged",
    description: "Shown only when a separate scheduling source confirms it.",
    tag: "SCHEDULING SOURCE",
  },
  {
    title: "Closed or follow-up assigned",
    description: "The responsible team closes it or assigns what happens next.",
    tag: "RESPONSIBLE TEAM",
  },
];

export default function ReferralJourneyStages() {
  return (
    <section
      id="referral-journey"
      className="w-full py-[70px]"
      style={{
        background: "linear-gradient(90deg, #F1EEFE 0%, #DED6FF 100%)",
      }}
    >
      <div className="mx-auto max-w-[1306px] px-6 lg:px-0">
        {/* Section Header */}
        <div className="mb-[44px] max-w-[760px]">
          {/* Kick Badge */}
          <div className="mb-[13px] inline-flex items-center gap-[10px]">
            <span className="h-[2px] w-[28px] bg-[#7B3FF2]" aria-hidden="true" />
            <span
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 700,
                fontSize: "13px",
                lineHeight: "21.45px",
                letterSpacing: "0.03em",
                color: "#7B3FF2",
              }}
            >
              The referral journey
            </span>
          </div>

          {/* Heading */}
          <h2
            className="mb-[16px]"
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontWeight: 600,
              fontSize: "clamp(30px, 3.2vw, 40px)",
              lineHeight: "clamp(36px, 3.6vw, 47.2px)",
              letterSpacing: "-0.02em",
              color: "#031974",
            }}
          >
            Eight stages, each with its own owner
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "29.7px",
              color: "#273444",
            }}
          >
            This is a general map, not a universal sequence. Stages can branch, repeat or end early,
            <br />
            and no stage carries a time commitment.
          </p>
        </div>

        {/* 8 Stages List */}
        <ol className="flex flex-col gap-[20px]">
          {stages.map((stage, idx) => (
            <li
              key={idx}
              className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #D9D3F5",
                borderRadius: "20px",
                padding: "23px 21px",
              }}
            >
              {/* Stage Title */}
              <h3
                className="w-full md:w-[285px] flex-shrink-0"
                style={{
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontWeight: 600,
                  fontSize: "17px",
                  lineHeight: "20px",
                  letterSpacing: "-0.02em",
                  color: "#031974",
                }}
              >
                {stage.title}
              </h3>

              {/* Stage Description */}
              <p
                className="flex-1 md:px-4"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 400,
                  fontSize: "14.5px",
                  lineHeight: "23.93px",
                  color: "#273444",
                }}
              >
                {stage.description}
              </p>

              {/* Owner Tag Badge */}
              <div className="flex-shrink-0 self-start md:self-center">
                <span
                  className="inline-block"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 800,
                    fontSize: "11.5px",
                    lineHeight: "18.98px",
                    letterSpacing: "0.04em",
                    color: "#5A2FC0",
                    backgroundColor: "#F1EEFE",
                    padding: "3px 9px",
                    borderRadius: "6px",
                  }}
                >
                  {stage.tag}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

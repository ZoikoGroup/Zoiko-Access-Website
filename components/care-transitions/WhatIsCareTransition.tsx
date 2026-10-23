import Image from "next/image";

const cards = [
  {
    image: "/care-transitions/ct04-card-1.png",
    tag: "ILLUSTRATIVE",
    title: "Discharge follow-up",
    body: "A patient leaves hospital and needs a follow-up with another team.",
  },
  {
    image: "/care-transitions/ct04-card-2.png",
    tag: "ILLUSTRATIVE",
    title: "Specialist handoff",
    body: "One clinician asks a specialist service to take on part of a patient’s care.",
  },
  {
    image: "/care-transitions/ct04-card-3.png",
    tag: "ILLUSTRATIVE",
    title: "Diagnostic review",
    body: "A result needs a responsible clinician’s attention and decision.",
  },
  {
    image: "/care-transitions/ct04-card-4.png",
    tag: "ILLUSTRATIVE",
    title: "Community-care coordination",
    body: "A clinic visit leads to support from a community or home-care team.",
  },
];

export default function WhatIsCareTransition() {
  return (
    <section className="w-full bg-white py-[70px] px-4 md:px-[70px]">
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mb-[36px] max-w-[1300px]">
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
              What is a care transition?
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
            Responsibility moves.{" "}
            <br />
            So should the clarity.
          </h2>

          {/* Lead */}
          <p
            className="max-w-[1138px] text-[#273444]"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              fontSize: "18.5px",
              lineHeight: "30.53px",
              letterSpacing: "0px",
            }}
          >
            A care transition is the movement of responsibility or coordination for a patient’s care between participating teams.{" "}
            <br className="hidden md:inline" />
            Examples include discharge follow-up, a specialist handoff, a diagnostic review and community-
            <br className="hidden md:inline" />
            care coordination. Zoiko Access is designed to make each step, its owner and its evidence easier to understand.
          </p>
        </div>

        {/* 2x2 Grid of Cards */}
        <div className="grid grid-cols-1 gap-[24px] lg:grid-cols-2">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row overflow-hidden rounded-[16px] border border-[#e6e9ff] bg-white shadow-[0_2px_12px_rgba(3,25,116,0.03)] transition-all hover:shadow-[0_4px_20px_rgba(3,25,116,0.06)]"
            >
              {/* Figure */}
              <div className="relative h-[160px] sm:h-[153px] w-full sm:w-[200px] flex-shrink-0 bg-slate-50">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 200px"
                  className="object-cover"
                />
              </div>

              {/* Text Container */}
              <div className="flex flex-1 flex-col justify-center p-[20px] sm:p-[24px]">
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
                  {card.tag}
                </span>
                <h3
                  className="mb-[6px] text-[#031974]"
                  style={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontWeight: 600,
                    fontSize: "22px",
                    lineHeight: "23.76px",
                    letterSpacing: "-0.55px",
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-[#273444]"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 400,
                    fontSize: "15.5px",
                    lineHeight: "25.58px",
                  }}
                >
                  {card.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

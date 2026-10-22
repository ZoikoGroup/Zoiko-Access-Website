"use client";

import Image from "next/image";

const requirements = [
  {
    bold: "Market activation.",
    text: (
      <>
        The market has a separately approved referral
        <br />
        service.
      </>
    ),
  },
  {
    bold: "Verified professionals.",
    text: (
      <>
        Licensed, qualified users in a verified
        <br />
        organization.
      </>
    ),
  },
  {
    bold: "Integration and privacy review.",
    text: (
      <>
        A tested connection, with privacy
        <br />
        and security sign-off.
      </>
    ),
  },
  {
    bold: "Contract and safety review.",
    text: (
      <>
        Legal terms and clinical-safety review
        <br />
        are complete.
      </>
    ),
  },
];

export default function InstitutionalParticipation() {
  return (
    <section className="w-full bg-[#FFFFFF] py-[70px]">
      <div className="mx-auto max-w-[1306px] px-6 lg:px-0">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:items-center lg:gap-8">
          {/* Left Arch Fig */}
          <div
            className="relative h-[536px] w-full max-w-[582px] flex-shrink-0 overflow-hidden"
            style={{
              borderRadius: "200px 200px 20px 20px",
              background: "linear-gradient(164deg, rgba(233, 227, 255, 1) 0%, rgba(213, 220, 255, 1) 100%)",
            }}
          >
            <Image
              src="/referral-coordination/part-arch.png"
              alt="Qualified medical institution and laboratory staff"
              fill
              sizes="(max-width: 1024px) 100vw, 582px"
              className="object-cover"
            />
          </div>

          {/* Right Column Content */}
          <div className="flex w-full flex-col lg:max-w-[620px]">
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
                How a qualified institution participates
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
              Participation is gated, not open
            </h2>

            {/* Subtitle */}
            <p
              className="mb-[24px]"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 400,
                fontSize: "17.5px",
                lineHeight: "28.88px",
                color: "#273444",
              }}
            >
              A live referral service would need all of these, each with its own approval.
            </p>

            {/* Requirements Cards */}
            <ul className="flex flex-col gap-[12px]">
              {requirements.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-[14px]"
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid #D9D3F5",
                    borderRadius: "14px",
                    padding: "14px 18px",
                  }}
                >
                  {/* Blue Circle with White Checkmark */}
                  <div
                    className="flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: "#4267D5",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 800,
                        fontSize: "13px",
                        lineHeight: "21.45px",
                        color: "#FFFFFF",
                      }}
                    >
                      ✓
                    </span>
                  </div>

                  {/* Text with Bold Highlight and exact <br /> break */}
                  <div
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontSize: "15.5px",
                      lineHeight: "25.58px",
                    }}
                  >
                    <strong
                      style={{
                        fontWeight: 700,
                        color: "#031974",
                      }}
                    >
                      {item.bold}
                    </strong>{" "}
                    <span
                      style={{
                        fontWeight: 400,
                        color: "#273444",
                      }}
                    >
                      {item.text}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

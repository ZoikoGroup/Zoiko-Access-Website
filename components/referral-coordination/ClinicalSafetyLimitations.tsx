"use client";

export default function ClinicalSafetyLimitations() {
  return (
    <section className="w-full bg-[#FFFFFF] py-[70px]">
      <div className="mx-auto max-w-[1306px] px-6 lg:px-0">
        {/* Section Header */}
        <div className="mb-[26px] max-w-[760px]">
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
              Clinical safety and limitations
            </span>
          </div>

          {/* Heading */}
          <h2
            style={{
              fontFamily: "var(--font-poppins), sans-serif",
              fontWeight: 600,
              fontSize: "clamp(30px, 3.2vw, 40px)",
              lineHeight: "clamp(36px, 3.6vw, 47.2px)",
              letterSpacing: "-0.02em",
              color: "#031974",
            }}
          >
            What this never does
          </h2>
        </div>

        {/* Side-by-Side Comparison Container */}
        <div
          className="flex flex-col overflow-hidden rounded-[20px] lg:flex-row"
          style={{
            border: "1px solid #D9D3F5",
          }}
        >
          {/* Left Card: What coordination supports */}
          <div className="flex-1 bg-[#FFFFFF] p-[33px_34px_34px]">
            <h3
              className="mb-[6px]"
              style={{
                fontFamily: "var(--font-poppins), sans-serif",
                fontWeight: 600,
                fontSize: "23px",
                lineHeight: "27.14px",
                letterSpacing: "-0.02em",
                color: "#031974",
              }}
            >
              What coordination supports
            </h3>
            <p
              className="mb-[20px]"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "26.4px",
                color: "#273444",
              }}
            >
              Made easier to see.
            </p>

            <ul className="flex flex-col gap-[12px]">
              {[
                "Showing which stage a referral has reached",
                "Naming the owner of the next step",
                "Keeping each status with its source",
                "Passing permitted information between named parties",
              ].map((text, idx) => (
                <li key={idx} className="flex items-center gap-[12px]">
                  <span
                    className="flex-shrink-0"
                    style={{
                      width: "9px",
                      height: "9px",
                      borderRadius: "4.5px",
                      backgroundColor: "#4267D5",
                    }}
                    aria-hidden="true"
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 400,
                      fontSize: "15.5px",
                      lineHeight: "25.58px",
                      color: "#273444",
                    }}
                  >
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Card: What stays with professionals */}
          <div
            className="flex-1 p-[33px_34px_34px]"
            style={{
              background: "linear-gradient(140deg, rgba(2, 18, 95, 1) 0%, rgba(27, 47, 181, 1) 56%, rgba(58, 77, 224, 1) 100%)",
            }}
          >
            <h3
              className="mb-[6px]"
              style={{
                fontFamily: "var(--font-poppins), sans-serif",
                fontWeight: 600,
                fontSize: "23px",
                lineHeight: "27.14px",
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
              }}
            >
              What stays with professionals
            </h3>
            <p
              className="mb-[20px]"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "26.4px",
                color: "#D6DCFF",
              }}
            >
              Never done by the platform.
            </p>

            <ul className="flex flex-col gap-[12px]">
              {[
                "Triage, diagnosis or urgent response",
                "Accepting, declining or prioritizing a referral",
                "Deciding care or scheduling",
                "Overriding an organization’s own judgment",
              ].map((text, idx) => (
                <li key={idx} className="flex items-center gap-[12px]">
                  <span
                    className="flex-shrink-0"
                    style={{
                      width: "9px",
                      height: "9px",
                      borderRadius: "2px",
                      backgroundColor: "#CDBCFF",
                    }}
                    aria-hidden="true"
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 400,
                      fontSize: "15.5px",
                      lineHeight: "25.58px",
                      color: "#E6E9FF",
                    }}
                  >
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";

export default function LocalAvailability() {
  return (
    <section
      id="availability"
      className="w-full py-[70px]"
      style={{
        background: "linear-gradient(180deg, #F1EEFE 0%, #DED6FF 100%)",
      }}
    >
      <div className="mx-auto max-w-[1306px] px-6 lg:px-0">
        <div className="grid grid-cols-1 items-center gap-[40px] lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Column Content */}
          <div className="flex flex-col">
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
                Local availability
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
              What you see depends on
              <br />
              where you work
            </h2>

            {/* Subtitle */}
            <p
              className="mb-[28px]"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "29.7px",
                color: "#273444",
              }}
            >
              Use the care-location menu above to preview each state. A location
              <br className="hidden md:inline" />
              choice never implies eligibility.
            </p>

            {/* State Preview Card */}
            <div
              className="rounded-[20px]"
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid #D9D3F5",
                padding: "37.89px 26px 26.01px",
              }}
            >
              <div className="mb-[10px]">
                <span
                  className="inline-block"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 800,
                    fontSize: "11.5px",
                    lineHeight: "18.98px",
                    letterSpacing: "0.05em",
                    color: "#1F3FB0",
                    backgroundColor: "#E8EEFF",
                    borderRadius: "6px",
                    padding: "3px 10px",
                  }}
                >
                  GENERAL EDUCATION
                </span>
              </div>
              <h3
                className="mb-[8px]"
                style={{
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontWeight: 600,
                  fontSize: "21px",
                  lineHeight: "24.78px",
                  letterSpacing: "-0.02em",
                  color: "#031974",
                }}
              >
                No care location selected
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "26.4px",
                  color: "#273444",
                }}
              >
                Full education is shown. We explain local differences and do not imply local
                <br className="hidden md:inline" />
                eligibility.
              </p>
            </div>
          </div>

          {/* Right Fig */}
          <div
            className="relative h-[425px] w-full overflow-hidden rounded-[20px]"
            style={{
              background: "linear-gradient(165deg, rgba(233, 227, 255, 1) 0%, rgba(213, 220, 255, 1) 100%)",
            }}
          >
            <Image
              src="/referral-coordination/avail-fig.png"
              alt="Medical facility showing locations and availability"
              fill
              sizes="(max-width: 1024px) 100vw, 567px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

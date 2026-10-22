"use client";

export default function EvidenceStatuses() {
  return (
    <section className="w-full bg-[#F6F9FC] py-[70px]">
      <div className="mx-auto max-w-[1306px] px-6 lg:px-0">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:items-start lg:gap-8">
          {/* Left Column Content */}
          <div className="w-full max-w-[620px]">
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
                Evidence and statuses
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
              Every status shows
              <br />
              who said so
            </h2>

            {/* Lead Subhead */}
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
              Each status names its actor, its source and the kind of evidence
              <br />
              behind it. Receipt alone never earns a “complete” badge.
            </p>

            {/* Bullets List */}
            <ul className="flex flex-col gap-[14px]">
              {[
                "Transport delivered is not the same as receiver acknowledged.",
                "Receiver acknowledged is not the same as clinician reviewed.",
                "Clinician reviewed is not the same as scheduled or completed.",
              ].map((text, idx) => (
                <li key={idx} className="flex items-start gap-[12px]">
                  <span
                    className="mt-[9px] flex-shrink-0"
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
                      fontSize: "16px",
                      lineHeight: "26.4px",
                      color: "#273444",
                    }}
                  >
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Schematic Status Card */}
          <div
            className="w-full max-w-[580px] xl:max-w-[590px] overflow-hidden rounded-[20px]"
            style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #D9D3F5",
              boxShadow: "0px 20px 44px 0px rgba(47, 66, 203, 0.14)",
            }}
          >
            {/* Header Banner */}
            <div
              className="flex items-center justify-between"
              style={{
                backgroundColor: "#F1EEFE",
                padding: "14px 20px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 800,
                  fontSize: "12.5px",
                  lineHeight: "20.63px",
                  letterSpacing: "0.04em",
                  color: "#5A2FC0",
                }}
              >
                EXAMPLE ONLY
              </span>
              <span
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 800,
                  fontSize: "12.5px",
                  lineHeight: "20.63px",
                  letterSpacing: "0.04em",
                  color: "#5A2FC0",
                }}
              >
                SCHEMATIC · NOT LIVE
              </span>
            </div>

            {/* Card Body */}
            <div style={{ padding: "22px 22px 12px" }}>
              {/* Status Pill */}
              <div className="mb-[10px]">
                <span
                  className="inline-block"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 800,
                    fontSize: "12.5px",
                    lineHeight: "20.63px",
                    color: "#1F3FB0",
                    backgroundColor: "#E8EEFF",
                    border: "1px solid #BCCAFF",
                    borderRadius: "999px",
                    padding: "4px 12px",
                  }}
                >
                  Status
                </span>
              </div>

              {/* Status Headline - 1 line only */}
              <h3
                className="whitespace-normal sm:whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(16px, 1.35vw, 19.5px)",
                  lineHeight: "33px",
                  letterSpacing: "-0.015em",
                  color: "#031974",
                }}
              >
                Receipt acknowledged (not yet clinically reviewed)
              </h3>
            </div>

            {/* Definition Rows */}
            <dl className="flex flex-col">
              {[
                { label: "Source owner", value: "Receiving organization" },
                { label: "Event time", value: "Example only" },
                { label: "Next owner", value: "Receiving team" },
                { label: "Evidence class", value: "Receiving-system acknowledgment" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-[12px]"
                  style={{
                    padding: "12px 22px",
                    borderTop: "1px solid #D9D3F5",
                  }}
                >
                  <dt
                    style={{
                      width: "150px",
                      flexShrink: 0,
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 400,
                      fontSize: "14.5px",
                      lineHeight: "23.93px",
                      color: "#4D587E",
                    }}
                  >
                    {item.label}
                  </dt>
                  <dd
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 600,
                      fontSize: "14.5px",
                      lineHeight: "23.93px",
                      color: "#031974",
                    }}
                  >
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Footer Note */}
            <div
              style={{
                padding: "12px 22px 18px",
                borderTop: "1px solid #D9D3F5",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 400,
                  fontSize: "13px",
                  lineHeight: "21.45px",
                  color: "#4D587E",
                }}
              >
                Real statuses and their mappings are set by each source, by permission and by
                <br />
                jurisdiction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

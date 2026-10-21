import Image from "next/image";

const points = [
  {
    icon: "/care-transitions/i-folder.svg",
    title: "Source of truth",
    desc: "Each organization remains\nthe source for its own\nrecords.",
  },
  {
    icon: "/care-transitions/i-chat.svg",
    title: "Clear message\nmeaning",
    desc: "Interoperable messages\ncarry defined meanings for\neach event.",
  },
  {
    icon: "/care-transitions/i-lock.svg",
    title: "Minimum necessary",
    desc: "Only the information the\npurpose needs is shared.",
  },
  {
    icon: "/care-transitions/i-list.svg",
    title: "Residency and audit",
    desc: "Regional rules and audit\nrecords apply where active.",
  },
  {
    icon: "/care-transitions/i-heart.svg",
    title: "Clinical boundary",
    desc: "Decisions stay with\nprofessionals. No “every\nEHR” or central worldwide\nrecord is claimed.",
  },
];

export default function TrustClinicalSafety() {
  return (
    <section className="w-full bg-[#f6f9fc] py-[97px] px-4 md:px-[80px]">
      <div className="mx-auto max-w-[1280px]">
        {/* Section Header */}
        <div className="mb-[40px]">
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
              Trust, clinical safety and interoperability
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-[#031974]"
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 600,
              fontSize: "clamp(32px, 4.5vw, 54px)",
              lineHeight: "clamp(38px, 5vw, 58.32px)",
              letterSpacing: "-1.35px",
            }}
          >
            Careful by design, and conditional
            <br />
            by default
          </h2>
        </div>

        {/* 5 Column Grid - Exact Figma: 234px, rounded-24px, border #d9d3f5, blue circle with white icon */}
        <div className="grid grid-cols-1 gap-[14px] sm:grid-cols-2 lg:grid-cols-5">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-[24px] border border-[#d9d3f5] bg-white p-[20px] pt-[24px] shadow-[0_4px_24px_rgba(3,25,116,0.02)] transition-all hover:shadow-[0_8px_24px_rgba(3,25,116,0.06)]"
            >
              <div>
                {/* Icon Container: Exact Figma 48x48 rounded-full gradient #02125f to #3a4de0 */}
                <div
                  className="mb-[18px] flex h-[48px] w-[48px] items-center justify-center rounded-full"
                  style={{
                    background:
                      "linear-gradient(135deg, #02125f 0%, #1b2fb5 55%, #3a4de0 100%)",
                  }}
                >
                  <Image
                    src={pt.icon}
                    alt={pt.title.replace(/\n/g, " ")}
                    width={22}
                    height={22}
                    className="h-[22px] w-[22px] object-contain"
                  />
                </div>

                {/* Title */}
                <h3
                  className="mb-[10px] whitespace-pre-line text-[#031974]"
                  style={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontWeight: 600,
                    fontSize: "19px",
                    lineHeight: "22.8px",
                    letterSpacing: "-0.475px",
                  }}
                >
                  {pt.title}
                </h3>
              </div>

              {/* Description */}
              <p
                className="whitespace-pre-line text-[#273444]"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontWeight: 400,
                  fontSize: "14.5px",
                  lineHeight: "23.93px",
                }}
              >
                {pt.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

const points = [
  {
    icon: "/care-transitions/icon-folder.svg",
    title: "Source of truth",
    desc: "Each organization remains\nthe source for its own\nrecords.",
  },
  {
    icon: "/care-transitions/icon-chat.svg",
    title: "Clear message\nmeaning",
    desc: "Interoperable messages\ncarry defined meanings for\neach event.",
  },
  {
    icon: "/care-transitions/icon-lock.svg",
    title: "Minimum necessary",
    desc: "Only the information the\npurpose needs is shared.",
  },
  {
    icon: "/care-transitions/icon-list.svg",
    title: "Residency and audit",
    desc: "Regional rules and audit\nrecords apply where active.",
  },
  {
    icon: "/care-transitions/icon-heart.svg",
    title: "Clinical boundary",
    desc: "Decisions stay with\nprofessionals. No “every\nEHR” or central worldwide\nrecord is claimed.",
  },
];

export default function TrustClinicalSafety() {
  return (
    <section className="w-full bg-[#f6f9fc] py-[97px] px-4 md:px-[80px]">
      <div className="mx-auto max-w-[1280px]">
        {/* Section Header */}
        <div className="mb-[24px]">
          {/* Badge */}
          <div className="mb-[16px] inline-flex items-center gap-[18px]">
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

        {/* 5 Column Grid - Exact Figma CT-11: 24px 20px padding, 14px gap, rounded-24px, border #d9d3f5 */}
        <div className="grid grid-cols-1 gap-[14px] pt-[18px] sm:grid-cols-2 lg:grid-cols-5">
          {points.map((pt, idx) => (
            <div
              key={idx}
              className="flex flex-col rounded-[24px] border border-[#d9d3f5] bg-white p-[20px] pt-[24px] pb-[32px] transition-all"
            >
              {/* Icon Container: Exact Figma 48x48 rounded-full gradient #02125f to #3a4de0 */}
              <div
                className="flex h-[48px] w-[48px] items-center justify-center rounded-full shrink-0"
                style={{
                  background:
                    "linear-gradient(120deg, #02125f 0%, #1b2fb5 56%, #3a4de0 100%)",
                }}
              >
                <Image
                  src={pt.icon}
                  alt=""
                  width={22}
                  height={22}
                  className="h-[22px] w-[22px] object-contain"
                />
              </div>

              {/* Title: pt-[8px] right below icon */}
              <h3
                className="pt-[8px] whitespace-pre-line text-[#031974]"
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

              {/* Description: mt-[5.4px] right below title */}
              <p
                className="mt-[5.4px] whitespace-pre-line text-[#273444]"
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

import Image from "next/image";

const boundaries = [
  {
    image: "/care-transitions/ct10-card-1.png",
    title: "Patient",
    desc: "May receive permitted updates about their own\ncare, where the market and service support it.",
  },
  {
    image: "/care-transitions/ct10-card-2.png",
    title: "Caregiver",
    desc: "Acts only within delegated permissions. A\ncaregiver is not a clinician and gets no automatic\naccess across organizations.",
  },
  {
    image: "/care-transitions/ct10-card-3.png",
    title: "Guardian",
    desc: "A separate authority category, verified against its\nown source of authority.",
  },
];

export default function BoundariesSection() {
  return (
    <section
      className="w-full py-[70px] px-4 md:px-[70px]"
      style={{
        background: "linear-gradient(135deg, #02125f 0%, #1b2fb5 55%, #3a4de0 100%)",
      }}
    >
      <div className="mx-auto max-w-[1300px]">
        {/* Section Header */}
        <div className="mb-[36px]">
          {/* Badge */}
          <div className="mb-[14px] inline-flex items-center gap-[10px]">
            <span className="h-[2px] w-[28px] bg-[#e6dcff]" aria-hidden="true" />
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
              Patient and caregiver boundaries
            </span>
          </div>

          {/* Heading */}
          <h2
            className="mb-[16px] text-white"
            style={{
              fontFamily: "var(--font-outfit), sans-serif",
              fontWeight: 600,
              fontSize: "clamp(32px, 4.5vw, 54px)",
              lineHeight: "clamp(38px, 5vw, 58.32px)",
              letterSpacing: "-1.35px",
            }}
          >
            Patients, caregivers and
            <br />
            guardians are different
          </h2>

          {/* Lead */}
          <p
            className="text-[#e6e9ff]"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              fontSize: "18.5px",
              lineHeight: "30.53px",
            }}
          >
            Updates and access depend on verified identity, roles, delegation and the legal
            <br className="hidden md:inline" />
            basis in each market. This page asks for no case details.
          </p>
        </div>

        {/* 3 Column Cards - Exact Figma: flush top image, border rgba(255,255,255,0.3), bg rgba(255,255,255,0.1), rounded-24px */}
        <div className="grid grid-cols-1 gap-[18px] lg:grid-cols-3">
          {boundaries.map((b, idx) => (
            <article
              key={idx}
              className="flex flex-col justify-between overflow-hidden rounded-[24px] border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] backdrop-blur-sm transition-all hover:bg-[rgba(255,255,255,0.14)]"
            >
              {/* Figure: Flush to top, left, right */}
              <div className="relative h-[233px] w-full overflow-hidden bg-[#0c1c7a]">
                <Image
                  src={b.image}
                  alt={b.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Text content: Figma padding 22px */}
              <div className="flex flex-1 flex-col justify-start p-[22px] pt-[21px] pb-[24px]">
                {/* Title */}
                <h3
                  className="mb-[8px] text-white"
                  style={{
                    fontFamily: "var(--font-outfit), sans-serif",
                    fontWeight: 600,
                    fontSize: "23px",
                    lineHeight: "24.84px",
                    letterSpacing: "-0.575px",
                  }}
                >
                  {b.title}
                </h3>

                {/* Description */}
                <p
                  className="whitespace-pre-line text-[#e6e9ff]"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 400,
                    fontSize: "15px",
                    lineHeight: "24.75px",
                  }}
                >
                  {b.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

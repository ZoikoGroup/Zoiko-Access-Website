import Image from "next/image";
import Link from "next/link";

const pathways = [
  {
    image: "/care-transitions/ct13-card-1.png",
    title: "Referral coordination",
    desc: "How a referral moves between\norganizations and what each status\nmeans.",
    href: "/referrals-next-steps",
  },
  {
    image: "/care-transitions/ct13-card-2.png",
    title: "Results and review handoffs",
    desc: "Why a published result is not the\nsame as a clinical review.",
    href: "/appointments-requests",
  },
  {
    image: "/care-transitions/ct13-card-3.png",
    title: "Secure communications",
    desc: "Purpose, recipient and channel for\npermitted clinical messages.",
    href: "/patients-messages",
  },
  {
    image: "/care-transitions/ct13-card-4.png",
    title: "Clinical responsibility",
    desc: "Where clinical decisions stay, and\nhow the platform is limited.",
    href: "/privacy-permissions",
  },
];

export default function RelatedClinicalPathways() {
  return (
    <section
      className="w-full py-[96px] px-4 md:px-[80px]"
      style={{
        background: "linear-gradient(90deg, #f1eefe 0%, #cec1ff 100%)",
      }}
    >
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
              Related clinical pathways
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
            Keep exploring
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
            Each link appears only when its page is published. Otherwise, the card keeps its
            <br className="hidden md:inline" />
            plain explanation.
          </p>
        </div>

        {/* 4 Cards Grid - Exact Figma: 294px, rounded-24px, border #d9d3f5, flush top image, no arrow */}
        <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-4">
          {pathways.map((pw, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between overflow-hidden rounded-[24px] border border-[#d9d3f5] bg-white shadow-[0_4px_24px_rgba(3,25,116,0.03)] transition-all hover:shadow-[0_8px_24px_rgba(3,25,116,0.08)]"
            >
              <div>
                {/* Figure Image: Flush to top, left, right */}
                <div className="relative h-[170px] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={pw.image}
                    alt={pw.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1300px) 25vw, 300px"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Content */}
                <div className="p-[20px] pt-[20px] pb-[10px]">
                  {/* Title */}
                  <h3
                    className="mb-[8px] text-[#031974]"
                    style={{
                      fontFamily: "var(--font-outfit), sans-serif",
                      fontWeight: 600,
                      fontSize: "21px",
                      lineHeight: "22.68px",
                      letterSpacing: "-0.525px",
                    }}
                  >
                    {pw.title}
                  </h3>

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
                    {pw.desc}
                  </p>
                </div>
              </div>

              {/* Link: Exact Figma 'Learn more' (without arrow) */}
              <div className="p-[20px] pt-0 pb-[24px]">
                <Link
                  href={pw.href}
                  className="font-bold text-[#7b3ff2] hover:text-[#6833d4] transition-colors"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 700,
                    fontSize: "14px",
                    lineHeight: "21px",
                  }}
                >
                  Learn more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

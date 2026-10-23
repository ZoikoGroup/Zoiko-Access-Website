"use client";

import Image from "next/image";

const permCards = [
  {
    id: 1,
    title: "Purpose-bound exchange",
    description: (
      <>
        Only the minimum information for the stated
        <br className="hidden md:inline" />
        purpose, under consent or legal authority
        <br className="hidden md:inline" />
        where it applies.
      </>
    ),
    image: "/referral-coordination/perm-1.png",
    icon: "/referral-coordination/perm-icon-1.svg",
  },
  {
    id: 2,
    title: "Provenance and audit",
    description: (
      <>
        Each event keeps its source system, actor
        <br className="hidden md:inline" />
        and evidence, with audit records and region-
        <br className="hidden md:inline" />
        specific retention.
      </>
    ),
    image: "/referral-coordination/perm-2.png",
    icon: "/referral-coordination/perm-icon-2.svg",
  },
  {
    id: 3,
    title: "Independent systems",
    description: (
      <>
        Standards can guide design, but no universal
        <br className="hidden md:inline" />
        connectivity to any record system is claimed.
      </>
    ),
    image: "/referral-coordination/perm-3.png",
    icon: "/referral-coordination/perm-icon-3.svg",
  },
];

export default function PermissionsInteroperability() {
  return (
    <section
      id="permissions"
      className="w-full py-[70px]"
      style={{
        background: "linear-gradient(137deg, rgba(2, 18, 95, 1) 0%, rgba(27, 47, 181, 1) 55%, rgba(58, 77, 224, 1) 100%)",
      }}
    >
      <div className="mx-auto max-w-[1306px] px-6 lg:px-0">
        {/* Section Header */}
        <div className="mb-[44px] max-w-[760px]">
          {/* Kick Badge */}
          <div className="mb-[13px] inline-flex items-center gap-[10px]">
            <span className="h-[2px] w-[28px] bg-[#CDBCFF]" aria-hidden="true" />
            <span
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontWeight: 700,
                fontSize: "13px",
                lineHeight: "21.45px",
                letterSpacing: "0.03em",
                color: "#CDBCFF",
              }}
            >
              Permissions and interoperability
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
              color: "#FFFFFF",
            }}
          >
            Only the information
            <br />
            the purpose needs
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "29.7px",
              color: "#D6DCFF",
            }}
          >
            This public page loads no patient information and makes no private calls. Protected
            <br className="hidden md:inline" />
            context exists only inside authorized systems.
          </p>
        </div>

        {/* 3 Cards Row */}
        <div className="grid grid-cols-1 gap-[18px] lg:grid-cols-3">
          {permCards.map((card) => (
            <article
              key={card.id}
              className="flex flex-col overflow-hidden rounded-[20px]"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.28)",
              }}
            >
              {/* Card Image */}
              <div
                className="relative h-[222px] w-full flex-shrink-0"
                style={{ backgroundColor: "#0C1C7A" }}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 419px"
                  className="object-cover"
                />
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col p-[22px]">
                {/* Header with Icon and Title */}
                <div className="mb-[12px] flex items-center gap-[10px]">
                  <div
                    className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-[12px]"
                    style={{
                      backgroundColor: "rgba(255, 255, 255, 0.16)",
                      border: "1px solid rgba(255, 255, 255, 0.40)",
                    }}
                  >
                    <Image
                      src={card.icon}
                      alt=""
                      width={22}
                      height={22}
                      aria-hidden="true"
                    />
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-poppins), sans-serif",
                      fontWeight: 600,
                      fontSize: "21px",
                      lineHeight: "24.78px",
                      letterSpacing: "-0.02em",
                      color: "#FFFFFF",
                    }}
                  >
                    {card.title}
                  </h3>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 400,
                    fontSize: "15.5px",
                    lineHeight: "25.58px",
                    color: "#E6E9FF",
                  }}
                >
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

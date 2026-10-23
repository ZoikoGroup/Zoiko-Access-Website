"use client";

import Image from "next/image";
import Link from "next/link";

interface RouteCard {
  id: number;
  title: string;
  description: (string | React.ReactNode);
  badge?: string;
  href: string;
  image: string;
}

const routes: RouteCard[] = [
  {
    id: 1,
    title: "Care transitions",
    description: (
      <>
        How a patient’s move between
        <br />
        services is handed off.
      </>
    ),
    href: "/care-transitions",
    image: "/referral-coordination/rel-1.png",
  },
  {
    id: 2,
    title: "Results and handoffs",
    description: (
      <>
        Why a published result is not a clinical
        <br />
        review.
      </>
    ),
    href: "/care-transitions",
    image: "/referral-coordination/rel-2.png",
  },
  {
    id: 3,
    title: "Professional onboarding",
    description: (
      <>
        Offered only when an approved,
        <br />
        working intake exists.
      </>
    ),
    badge: "CONDITIONAL",
    href: "/healthcare-professionals",
    image: "/referral-coordination/rel-3.png",
  },
  {
    id: 4,
    title: "Institutional overview",
    description: (
      <>
        What an organization would need to
        <br />
        understand before connecting.
      </>
    ),
    href: "/healthcare-services",
    image: "/referral-coordination/rel-4.png",
  },
];

export default function RelatedRoutes() {
  return (
    <section className="w-full bg-[#FFFFFF] py-[70px]">
      <div className="mx-auto max-w-[1306px] px-6 lg:px-0">
        {/* Section Header */}
        <div className="mb-[44px] max-w-[760px]">
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
              Related routes
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
            Keep exploring clinician topics
          </h2>
        </div>

        {/* 4 Cards Row */}
        <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-4">
          {routes.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="group relative flex h-[280px] w-full flex-col justify-end overflow-hidden rounded-[20px] transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Background Image */}
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 311px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(2, 18, 95, 0) 10%, rgba(2, 18, 95, 0.88) 100%)",
                }}
              />

              {/* Content Label */}
              <div className="relative z-10 flex flex-col p-[18px]">
                <strong
                  className="mb-[4px]"
                  style={{
                    fontFamily: "var(--font-poppins), sans-serif",
                    fontWeight: 700,
                    fontSize: "18px",
                    lineHeight: "24px",
                    color: "#FFFFFF",
                  }}
                >
                  {card.title}
                </strong>
                <p
                  className="mb-[6px]"
                  style={{
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 400,
                    fontSize: "13.5px",
                    lineHeight: "20px",
                    color: "#E6E9FF",
                  }}
                >
                  {card.description}
                </p>

                {card.badge && (
                  <div className="self-start">
                    <span
                      style={{
                        fontFamily: "var(--font-inter), sans-serif",
                        fontWeight: 800,
                        fontSize: "11.5px",
                        lineHeight: "18.98px",
                        letterSpacing: "0.04em",
                        color: "#031974",
                        backgroundColor: "#FFFFFF",
                        padding: "3px 9px",
                        borderRadius: "6px",
                      }}
                    >
                      {card.badge}
                    </span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

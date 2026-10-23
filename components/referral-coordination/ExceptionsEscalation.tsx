"use client";

import Image from "next/image";

interface ExceptionCard {
  id: number;
  title: string;
  description: (string | React.ReactNode);
  image?: string;
  isSpecial?: boolean;
}

const cards: ExceptionCard[] = [
  {
    id: 1,
    title: "No response",
    description: (
      <>
        Nothing has come back. Follow the
        <br />
        receiving organization’s process,
        <br />
        since the platform cannot see
        <br />
        downstream action.
      </>
    ),
    image: "/referral-coordination/exc-1.png",
  },
  {
    id: 2,
    title: "Technical retry",
    description: (
      <>
        A send did not go through. A
        <br />
        duplicate check comes before any
        <br />
        resend, so nothing is sent twice.
      </>
    ),
    image: "/referral-coordination/exc-2.png",
  },
  {
    id: 3,
    title: "Declined",
    description: (
      <>
        The receiving team declined. This is
        <br />
        a decision, not an error.
      </>
    ),
    image: "/referral-coordination/exc-3.png",
  },
  {
    id: 4,
    title: "Insufficient information",
    description: (
      <>
        The receiving team asked for more.
        <br />
        The referring team supplies it.
      </>
    ),
    image: "/referral-coordination/exc-4.png",
  },
  {
    id: 5,
    title: "Partner outage",
    description: (
      <>
        A connected system is down.
        <br />
        Status may be unknown, and it is
        <br />
        shown as unknown.
      </>
    ),
    image: "/referral-coordination/exc-5.png",
  },
  {
    id: 6,
    title: "Clinician unavailable",
    description: (
      <>
        The expected reviewer is
        <br />
        unavailable. The receiving team
        <br />
        reroutes or reassigns.
      </>
    ),
    image: "/referral-coordination/exc-6.png",
  },
  {
    id: 7,
    title: "Consent expired",
    description: (
      <>
        Authorization has lapsed. Nothing
        <br />
        proceeds until valid authority exists.
      </>
    ),
    image: "/referral-coordination/exc-7.png",
  },
  {
    id: 8,
    title: "What the platform cannot see",
    description: (
      <>
        It cannot verify what a receiving
        <br />
        team does downstream. When it
        <br />
        can’t confirm something, it says
        <br />
        so.
      </>
    ),
    isSpecial: true,
  },
];

export default function ExceptionsEscalation() {
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
              Exceptions and escalation
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
            When a referral doesn’t go as
            <br />
            expected
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              lineHeight: "29.7px",
              color: "#273444",
            }}
          >
            Each problem has a named cause and a named owner. The platform never assumes
            <br />
            success.
          </p>
        </div>

        {/* 8-Card Grid */}
        <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            if (card.isSpecial) {
              return (
                <article
                  key={card.id}
                  className="flex flex-col justify-start rounded-[20px] p-[21px_22px_22px]"
                  style={{
                    backgroundColor: "#F1EEFE",
                    border: "1px dashed #7B3FF2",
                  }}
                >
                  <h3
                    className="mb-[8px]"
                    style={{
                      fontFamily: "var(--font-poppins), sans-serif",
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "18.88px",
                      letterSpacing: "-0.02em",
                      color: "#031974",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 400,
                      fontSize: "14.5px",
                      lineHeight: "23.93px",
                      color: "#273444",
                    }}
                  >
                    {card.description}
                  </p>
                </article>
              );
            }

            return (
              <article
                key={card.id}
                className="flex flex-col overflow-hidden rounded-[20px]"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #D9D3F5",
                }}
              >
                {/* Image Header */}
                <div className="relative h-[120px] w-full flex-shrink-0">
                  <Image
                    src={card.image!}
                    alt={card.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 311px"
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-[15px_18px_20px]">
                  <h3
                    className="mb-[6px]"
                    style={{
                      fontFamily: "var(--font-poppins), sans-serif",
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "18.88px",
                      letterSpacing: "-0.02em",
                      color: "#031974",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      fontWeight: 400,
                      fontSize: "14.5px",
                      lineHeight: "23.93px",
                      color: "#273444",
                    }}
                  >
                    {card.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

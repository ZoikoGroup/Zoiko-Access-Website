import Image from "next/image";

const cardsData = [
  {
    image: "/cli/5.png",
    alt: "Initiating clinician in white coat with arms crossed",
    title: "Initiating clinician",
    description: "Appropriate request and their continued clinical obligations",
  },
  {
    image: "/cli/6.png",
    alt: "Surgical team operating in a medical theater",
    title: "Receiving care organization",
    description: "Acceptance and treatment decisions under its own rules",
  },
  {
    image: "/cli/7.png",
    alt: "Hospital ward with patient beds and medical equipment",
    title: "Authorized care coordinator",
    description: "Assigned administrative follow-through",
  },
  {
    image: "/cli/8.png",
    alt: "Medical professionals in surgical scrubs and masks",
    title: "Technology layer",
    description: "Permitted transmission and an audit trail",
  },
];

export default function WhoIsResponsible() {
  return (
    <section className="relative w-full overflow-hidden bg-[#E3DCFF] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#7C3AED]">
            <span className="h-0.5 w-6 bg-[#7C3AED]" aria-hidden="true" />
            WHO OWNS WHICH DECISION
          </div>
          <h2 className="mt-3 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#031974] sm:text-[44px]">
            Who is responsible?
          </h2>
          <p className="mt-3 text-[16px] leading-[1.7] text-[#475569] sm:text-[17px]">
            A plain responsibility matrix for the four parties involved in a
            handoff.
          </p>
        </div>

        {/* 4-Column Card Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cardsData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all hover:border-[#CBD5E1] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] sm:p-6"
            >
              <div>
                {/* Card Image with Padding and Rounded Corners */}
                <div className="relative h-[160px] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Title & Description */}
                <h3 className="mt-5 text-[18px] font-bold tracking-[-0.02em] text-[#1E1B4B]">
                  {card.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#475569]">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

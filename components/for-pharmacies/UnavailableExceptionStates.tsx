import Image from "next/image";

const exceptionStates = [
  {
    image: "/for/7.png",
    alt: "Aerial view of a bustling market representing market unsupported",
    title: "Market unsupported",
    description: "Pharmacy connections are not offered there.",
  },
  {
    image: "/for/8.png",
    alt: "Two business professionals shaking hands representing partner unverified",
    title: "Partner unverified",
    description: "Not shown as connected.",
  },
  {
    image: "/for/9.png",
    alt: "Prescription clipboard and medication bottle representing prescription rejected",
    title: "Prescription rejected",
    description: "The pharmacy or prescriber explains and resolves it.",
  },
  {
    image: "/for/10.png",
    alt: "Pharmacist checking inventory or tablet representing stock not verified",
    title: "Stock not verified",
    description: "Shown as unknown, not as unavailable or available.",
  },
  {
    image: "/for/11.png",
    alt: "Abstract blue and green patterned design representing channel outage",
    title: "Channel outage",
    description: "Use the responsible organization's own route.",
  },
  {
    image: "/for/12.png",
    alt: "Danger warning tape representing safety concern",
    title: "Safety concern",
    description: "Speak to a pharmacist or clinician directly.",
  },
  {
    image: "/for/13.png",
    alt: "Hands with NO! sign cutout representing disputed status",
    title: "Disputed status",
    description: "The source organization confirms what is true.",
  },
];

export default function UnavailableExceptionStates() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2">
            <span
              className="h-2 w-2 rounded-full bg-[#7C3AED]"
              aria-hidden="true"
            />
            <span className="text-xs font-semibold tracking-wide text-[#7C3AED] sm:text-sm">
              Unavailable and exception states
            </span>
          </div>
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#1E1B4B] sm:text-[44px]">
            When something is unavailable, say so and name who can help.[cite:
            15]
          </h2>
        </div>

        {/* 4-Column Grid Container */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {exceptionStates.map((card, index) => (
            <div
              key={index}
              className="flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-[#CBD5E1] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] sm:p-6"
            >
              <div>
                {/* Image Section - Padded with rounded corners */}
                <div className="relative h-[160px] w-full overflow-hidden rounded-2xl">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
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

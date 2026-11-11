import Image from "next/image";

interface StatusStep {
  number: number;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

const statusSteps: StatusStep[] = [
  {
    number: 1,
    title: "Sent",
    description: "Your request left your device.",
  },
  {
    number: 2,
    title: "Received",
    description: "The provider's system got it.",
  },
  {
    number: 3,
    title: "Reviewed",
    description: "Someone at the provider looked at it.",
  },
  {
    number: 4,
    title: "Accepted",
    description: "The provider agreed to act on it.",
  },
  {
    number: 5,
    title: "Confirmed",
    description: "A specific time or service is confirmed by the provider.",
    isHighlighted: true,
  },
];

export default function StatusTaxonomyGrid() {
  return (
    <section className="relative w-full overflow-hidden py-20 font-sans text-white sm:py-28">
      {/* Background Image Layer using /gradients/grad1.png */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <Image
          src="/gradients/grad1.png"
          alt="Status taxonomy background gradient"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header Section */}
        <div className="max-w-3xl">
          <div className="mb-3">
            <span className="font-mono text-[12px] font-semibold tracking-wider text-[#B7A6FF] uppercase">
              — REQUESTS, REFERRALS AND APPOINTMENTS
            </span>
          </div>

          <h2 className="text-[36px] font-bold leading-[1.12] tracking-[-0.03em] text-white sm:text-[44px]">
            Five words that mean five different things
          </h2>

          <p className="mt-3 text-[15px] leading-[1.65] text-blue-100/90 sm:text-[16px]">
            A request can be sent, received and even reviewed without being
            accepted or confirmed.
          </p>
        </div>

        {/* 5-Column Connected Status Container */}
        <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md">
          <div className="grid grid-cols-1 divide-y divide-white/10 md:grid-cols-5 md:divide-x md:divide-y-0">
            {statusSteps.map((step) => (
              <div
                key={step.number}
                className={`flex flex-col justify-between p-6 transition-colors duration-200 ${
                  step.isHighlighted
                    ? "bg-[#3DBB7F2E]"
                    : "hover:bg-white/[0.04]"
                }`}
              >
                <div>
                  {/* Circle Step Number Badge */}
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white font-mono text-[13px] font-bold text-[#0E1646] shadow-sm">
                    {step.number}
                  </div>

                  {/* Step Title */}
                  <h3 className="mt-6 text-[18px] font-bold text-white">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="mt-2 text-[13px] leading-[1.5] text-blue-100/80">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Defensive Governance Note */}
        <p className="mt-6 font-mono text-[12px] text-blue-200/80">
          Until you see{" "}
          <strong className="font-semibold text-white">Confirmed</strong> from
          the provider, treat a request as pending.
        </p>
      </div>
    </section>
  );
}

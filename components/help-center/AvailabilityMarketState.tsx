import Image from "next/image";

interface MarketStateCard {
  code: string;
  title: string;
  description: string;
  codeBg: string;
  codeTextColor: string;
}

const marketStates: MarketStateCard[] = [
  {
    code: "P0",
    title: "Informational",
    description: "Reading and guidance are available everywhere.",
    codeBg: "bg-white",
    codeTextColor: "text-[#0E1646]",
  },
  {
    code: "P1",
    title: "Approved discovery",
    description: "Discovery features only where approved.",
    codeBg: "bg-white",
    codeTextColor: "text-[#0E1646]",
  },
  {
    code: "P2",
    title: "Authorized transaction",
    description: "Actions only where verified for your market and role.",
    codeBg: "bg-white",
    codeTextColor: "text-[#0E1646]",
  },
  {
    code: "PX",
    title: "Degraded / unavailable",
    description: "Affected actions removed; accurate help stays.",
    codeBg: "bg-[#FEE2E2]",
    codeTextColor: "text-[#991B1B]",
  },
];

export default function AvailabilityMarketState() {
  return (
    <section className="relative w-full overflow-hidden py-20 font-sans text-white sm:py-28">
      {/* Background Image Layer using /gradients/grad1.png */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <Image
          src="/gradients/grad1.png"
          alt="Availability and market state background gradient"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header Section */}
        <div className="max-w-5xl">
          <div className="mb-3">
            <span className="font-mono text-[12px] font-semibold tracking-wider text-[#B7A6FF] uppercase">
              — AVAILABILITY &amp; MARKET STATE
            </span>
          </div>

          <h2 className="mt-2 text-[36px] font-bold leading-[1.12] tracking-[-0.03em] text-white sm:text-[44px]">
            What you can do depends on where you are
          </h2>

          <p className="mt-3 text-[15px] leading-[1.65] max-w-2xl text-blue-100/90 sm:text-[16px]">
            Help never shows appointment, results, account or support
            capabilities unless verified for your market.
          </p>
        </div>

        {/* 4 Market State Cards Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {marketStates.map((state, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-3xl border border-white/10 p-6 sm:p-7 shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-white/10"
              style={{ backgroundColor: "#FFFFFF0E" }}
            >
              <div>
                {/* Code Pill Badge */}
                <div
                  className={`inline-flex items-center justify-center rounded-xl px-3 py-1 font-mono text-[14px] font-bold shadow-sm ${state.codeBg} ${state.codeTextColor}`}
                >
                  {state.code}
                </div>

                {/* Title & Description */}
                <h3 className="mt-6 text-[18px] font-bold text-white">
                  {state.title}
                </h3>
                <p className="mt-2 text-[13px] leading-[1.6] text-blue-100/80">
                  {state.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

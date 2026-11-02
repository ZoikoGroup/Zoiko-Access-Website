const ITEMS = [
  {
    title: "You",
    text: "Make choices about your information, within local law.",
    dot: "bg-[#2E3A9E]",
  },
  {
    title: "Your care providers",
    text: "Hold and keep your clinical records.",
    dot: "bg-[#C9BCFF]",
  },
  {
    title: "People you authorize",
    text: "Act only with verified, scoped authority you can revoke.",
    dot: "bg-[#EDE8FF]",
  },
  {
    title: "Zoiko Access",
    text: "Designed to coordinate — not to hold a universal record.",
    dot: "bg-[#F7F5FF]",
  },
] as const;

export default function YoureAtTheCenter() {
  return (
    <section className="w-full bg-gradient-to-r from-[#D1C5FE] to-[#F2EFFF] font-sans text-[#1B2559]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-6 py-12 sm:px-10 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:px-[44px] lg:py-[40px]">
        <div
          className="relative mx-auto aspect-square w-full max-w-[460px]"
          role="img"
          aria-label="Concentric circles: You, Your care providers, People you authorize, Platform — coordination only"
        >
          <div className="absolute inset-0 rounded-full bg-[#F1EDFF]" />
          <div className="absolute inset-[16%] rounded-full bg-[#E3DBFF]" />
          <div className="absolute inset-[30%] rounded-full bg-[#C9BCFF]" />
          <div className="absolute inset-[42%] rounded-full bg-gradient-to-br from-[#6A4FE0] to-[#4565D8]" />

          <span className="absolute left-1/2 top-[7%] -translate-x-1/2 whitespace-nowrap text-sm font-semibold text-[#6A55C9]">
            Platform — coordination only
          </span>
          <span className="absolute left-1/2 top-[22%] -translate-x-1/2 whitespace-nowrap text-sm font-semibold text-[#5B3FD6]">
            People you authorize
          </span>
          <span className="absolute left-1/2 top-[35%] -translate-x-1/2 whitespace-nowrap text-sm font-semibold text-[#4B30C0]">
            Your care providers
          </span>
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm font-semibold text-white">
            You
          </span>
        </div>

        <div>
          <div className="flex items-center gap-4">
            <p className="whitespace-nowrap font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#1B2559]">
              Who controls information
            </p>
            <span className="h-px flex-1 bg-[#1B2559]/15" aria-hidden="true" />
          </div>

          <h2 className="mt-4 text-[38px] font-semibold tracking-[-0.02em] sm:text-[44px]">
            You&apos;re at the center.
          </h2>

          <ul className="mt-6 flex flex-col gap-5">
            {ITEMS.map((item) => (
              <li key={item.title} className="flex items-start gap-4">
                <span
                  className={`mt-1 block h-4 w-4 shrink-0 rounded-full border border-[#1B2559]/10 ${item.dot}`}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="mt-0.5 text-sm text-[#4B5478]">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";

const buttons = [
  { text: "Learn how communication works", href: "#how-messaging-works", primary: true },
  { text: "Read about caregiver access", href: "/for-caregivers", primary: false },
  { text: "Understand privacy choices", href: "/for-patients#privacy", primary: false },
];

export default function MessagesCta() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#261E5D] via-[#4538A8] to-[#6E5BD9] py-[90px]">
      {/* Decorative circles */}
      <span className="pointer-events-none absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-white/10" aria-hidden="true" />
      <span className="pointer-events-none absolute -right-20 -top-28 h-[360px] w-[360px] rounded-full bg-white/10" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1440px] px-6 text-center sm:px-10">
        <h2 className="text-[32px] font-bold tracking-[-0.02em] text-white [font-family:var(--font-poppins)] sm:text-[40px]">
          Start with understanding.
        </h2>
        <p className="mx-auto mt-3 max-w-[560px] text-[16px] leading-[26px] text-[#DCD8F7]">
          Learn how communication works before deciding whether a connected service is available where you receive care.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5">
          {buttons.map((button) => (
            <Link
              key={button.text}
              href={button.href}
              className={
                button.primary
                  ? "inline-flex min-h-[44px] items-center rounded-md bg-white px-5 text-[15px] font-semibold text-[#5B35D5] transition-opacity hover:opacity-90"
                  : "inline-flex min-h-[44px] items-center rounded-md border border-white/60 px-5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10"
              }
            >
              {button.text}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

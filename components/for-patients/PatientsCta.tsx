import Link from "next/link";

const content = {
  badge: "Your next patient step",
  title: "Start with understanding.",
  description:
    "Choose an educational topic before considering any independently authorized personal service.",
  buttons: [
    { text: "Explore patient options →", href: "#patient-options", primary: true },
    { text: "Read about caregiver access", href: "#caregivers", primary: false },
    { text: "Understand privacy choices", href: "#privacy", primary: false },
  ],
};

export default function PatientsCta() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#261E5D] via-[#4537A6] to-[#6957D7] py-20">
      {/* Decorative circles */}
      <span
        className="pointer-events-none absolute -bottom-36 -left-20 h-72 w-72 rounded-full bg-white/10"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -right-24 -top-24 h-[360px] w-[360px] rounded-full bg-white/10"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 text-center sm:px-10">
        <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase leading-4 tracking-wider text-white">
          <span
            className="block h-1.5 w-1.5 rounded-full bg-[#8B7CF0]"
            aria-hidden="true"
          />
          {content.badge}
        </p>

        <h2 className="mt-5 text-[30px] font-bold leading-[1.2] tracking-[-0.02em] text-white [font-family:var(--font-poppins)] sm:text-[36px] sm:leading-10">
          {content.title}
        </h2>

        <p className="mt-8 text-[16px] leading-7 text-white/90">
          {content.description}
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
          {content.buttons.map((button) => (
            <Link
              key={button.text}
              href={button.href}
              className={
                button.primary
                  ? "inline-flex min-h-12 items-center rounded-md bg-white px-5 text-[13px] font-semibold text-[#211A5A] transition-opacity hover:opacity-90"
                  : "inline-flex min-h-12 items-center rounded-md border border-white/70 px-5 text-[13px] font-semibold text-white transition-colors hover:bg-white/10"
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

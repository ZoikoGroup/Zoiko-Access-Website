import Link from "next/link";

export default function ReferralsCta() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#261E5D] via-[#4538A8] to-[#6E5BD9] py-[90px]">
      {/* Decorative circles */}
      <span className="pointer-events-none absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-white/10" aria-hidden="true" />
      <span className="pointer-events-none absolute -right-20 -top-28 h-[360px] w-[360px] rounded-full bg-white/10" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1440px] px-6 text-center sm:px-10">
        <p className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#DCD8F7]">
          <span className="block h-2 w-2 rounded-full bg-[#B9A6F9]" aria-hidden="true" />
          Your next step
        </p>
        <h2 className="mt-4 text-[32px] font-semibold tracking-[-0.02em] text-white [font-family:var(--font-poppins)] sm:text-[40px]">
          Start with understanding.
        </h2>
        <p className="mx-auto mt-5 max-w-[680px] text-[16px] leading-[26px] text-[#DCD8F7]">
          One clear next step at a time. Appointment and contact options appear only where they are verified for your
          account.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/how-referrals-work"
            className="inline-flex min-h-12 items-center rounded-xl bg-white px-6 text-[16px] font-semibold text-[#1D1A5A] transition-opacity hover:opacity-90"
          >
            Understand how referrals work
          </Link>
          <Link
            href="/talk-to-support"
            className="inline-flex min-h-12 items-center rounded-xl border border-white/70 px-6 text-[16px] font-semibold text-white transition-colors hover:bg-white/10"
          >
            Get help with a question
          </Link>
        </div>
      </div>
    </section>
  );
}

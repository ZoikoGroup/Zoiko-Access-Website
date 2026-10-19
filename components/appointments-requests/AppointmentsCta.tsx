import Link from "next/link";

export default function AppointmentsCta() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#261E5D] via-[#4538A8] to-[#6E5BD9] py-[90px]">
      {/* Decorative circles */}
      <span
        className="pointer-events-none absolute -bottom-32 -left-20 h-64 w-64 rounded-full bg-white/10"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute -right-20 -top-28 h-[360px] w-[360px] rounded-full bg-white/10"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1440px] px-6 text-center sm:px-10">
        <p className="text-[16px] font-semibold uppercase tracking-[0.02em] text-[#D9CFFB]">
          Your next step
        </p>
        <h2 className="mt-6 text-[32px] font-bold tracking-[-0.02em] text-white sm:text-[42px]">
          Start with understanding
        </h2>
        <p className="mx-auto mt-3 max-w-[600px] text-[17px] leading-[27px] text-[#E4E2F7]">
          Learn how requests, holds and confirmations differ before you rely on
          any appointment.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3.5">
          <Link
            href="#three-layers"
            className="inline-flex min-h-12 items-center rounded-2xl bg-white px-7 text-[16px] font-semibold text-[#14122E] transition-opacity hover:opacity-90"
          >
            Learn how appointments work
          </Link>
          <Link
            href="/for-caregivers"
            className="inline-flex min-h-12 items-center rounded-2xl border border-white/70 px-7 text-[16px] font-semibold text-white transition-colors hover:bg-white/10"
          >
            Learn about caregivers and families
          </Link>
        </div>
      </div>
    </section>
  );
}

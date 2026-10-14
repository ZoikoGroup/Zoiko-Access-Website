export default function TheChallenge() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column */}
          <div className="flex flex-col">
            <p className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#5B3FD1]">
              <span
                className="block h-2 w-2 rounded-full bg-[#7C5CE8]"
                aria-hidden="true"
              />
              The Challenge
            </p>

            <h2 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#23327A] sm:text-[44px]">
              Care is connected by people. Systems can still feel
              fragmented.
            </h2>

            <p className="mt-6 text-[16px] leading-[1.8] text-[#4B5563] sm:text-[17px]">
              A healthcare journey rarely belongs to just one organization. A
              patient may need to find a clinician, check eligibility, arrange a
              test, understand where results will be reviewed, contact a
              pharmacy, manage a referral or organize support after a visit.
              Each step may involve different people, systems and rules.
            </p>
          </div>

          {/* Right Column - aligned with the right side after the title */}
          <div className="flex flex-col lg:pt-[58px]">
            <p className="text-[16px] leading-[1.8] text-[#4B5563] sm:text-[17px]">
              When those steps are difficult to navigate, patients face
              uncertainty and repeated effort. Care teams spend valuable time on
              administration and follow- up. Institutions work across
              disconnected technologies. And patients and caregivers can be left
              trying to determine who is responsible for the next action.[cite:
              6]
            </p>

            <p className="mt-6 text-[16px] leading-[1.8] text-[#4B5563] sm:text-[17px]">
              What needs to change: People should be able to understand
              available pathways. Organizations should be able to coordinate
              authorized handoffs. And everyone should be able to distinguish a
              request from a confirmed action, an information transfer from a
              clinical review, and a digital promise from a locally available
              service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

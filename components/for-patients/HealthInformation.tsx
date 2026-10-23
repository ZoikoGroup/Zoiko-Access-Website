import SectionHeading from "./SectionHeading";

const clearPoints = [
  "The responsible information source.",
  "What the view includes and what it does not.",
  "Who may access it and for which purpose.",
  "Relevant source time, currentness, and corrections.",
  "How to use the appropriate rights or assistance route.",
];

export default function HealthInformation() {
  return (
    <section
      id="health-information"
      className="w-full scroll-mt-24 bg-gradient-to-br from-[#F4F2FD] via-[#EEEAFE] to-[#DACEFE] py-20"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-start gap-10 px-6 sm:px-10 lg:grid-cols-[minmax(0,560fr)_minmax(0,640fr)] lg:gap-x-[80px] lg:px-20">
        <div>
          <SectionHeading
            badge="Access to health information"
            title={
              <>
                Source-linked access,
                <br />
                only where authorized.
              </>
            }
          />
          <div className="mt-9 space-y-2.5 text-[16px] leading-[30px] text-[#5E6B85]">
            <p>
              An informational explanation is different from viewing actual
              records. A supported information view requires authorized
              partners, an operational service, identity and permissions, and
              appropriate notices.
            </p>
            <p>
              This public page does not expose test results, health history,
              patient records, source identifiers, or an account dashboard.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-[#E5E7EB] bg-white px-8 pb-10 pt-8 lg:-mt-2">
          <h3 className="text-[20px] font-bold leading-7 tracking-[-0.03em] text-[#23327A] [font-family:var(--font-poppins)]">
            What an authorized view should make clear
          </h3>
          <ul className="mt-3 list-disc space-y-[13px] pl-5 text-[14px] leading-6 text-[#5E6B85]">
            {clearPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <p className="mt-4 text-[12px] leading-5 text-[#5E6B85]">
            No real health information or record connection is represented in
            this preview.
          </p>
        </div>
      </div>
    </section>
  );
}

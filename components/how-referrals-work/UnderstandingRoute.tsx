import SectionHeading from "./SectionHeading";

const routes = [
  {
    tag: "Professional referral",
    title: "A professional initiates the request.",
    paragraphs: [
      "The appropriately qualified professional determines whether to initiate a referral when required. The receiving service independently evaluates its next steps.",
      "Professional assessment is separate from administrative delivery, receiving acceptance, and appointment scheduling.",
    ],
    className: "bg-[#F1F3FD] lg:border-r lg:border-[#E5E7EB]",
  },
  {
    tag: "Locally permitted self-referral",
    title: "A person follows an allowed local process.",
    paragraphs: [
      "Some systems or services permit self-referral. Eligibility, coverage, intake rules, and professional review can still apply.",
      "Do not assume that self-referral is available everywhere. Ask the appropriate local organization which route applies.",
    ],
    className: "bg-[#F4F0FE]",
  },
];

export default function UnderstandingRoute() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <SectionHeading
          badge="Understanding the route"
          title="Do you need a referral to access care?"
          description="Some services require a referring professional. Others permit direct contact or self-referral subject to local requirements."
        />

        <div className="mt-9 grid grid-cols-1 gap-4 overflow-hidden rounded-2xl border border-[#E5E7EB] lg:grid-cols-[minmax(0,601fr)_minmax(0,621fr)] lg:gap-x-[58px]">
          {routes.map((route) => (
            <div
              key={route.tag}
              className={`flex flex-col items-start gap-3 rounded-[20px] px-9 pb-12 pt-10 ${route.className}`}
            >
              <span className="rounded-full border border-[#E1D8FB] bg-white px-2.5 py-[5px] text-[10px] font-bold leading-4 tracking-wide text-[#6A44D4]">
                {route.tag}
              </span>
              <h3 className="pt-2.5 text-[24px] font-bold leading-8 tracking-[-0.02em] text-[#23327A] [font-family:var(--font-poppins)] sm:text-[28px]">
                {route.title}
              </h3>
              {route.paragraphs.map((text) => (
                <p key={text} className="text-[16px] leading-7 text-[#5E6B85]">
                  {text}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

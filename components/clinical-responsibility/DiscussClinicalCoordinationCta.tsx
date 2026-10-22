import Link from "next/link";

const content = {
  badge: "INSTITUTIONS",
  title: "Discuss accountable clinical coordination.",
  description:
    "Explore how a governed healthcare coordination approach could fit your organization's requirements.",
  buttonText: "Explore Clinicians",
  buttonHref: "#",
};

export default function DiscussClinicalCoordinationCta() {
  return (
    <section className="relative w-full overflow-hidden font-sans">
      <div className="relative">
        {/* Banner with CSS Background Image & Gradient Overlay */}
        <div
          className="relative overflow-hidden bg-cover bg-center p-8 sm:p-14 lg:p-20 shadow-[0_20px_50px_rgba(0,0,0,0.15)]"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(23, 37, 84, 0.95) 0%, rgba(30, 64, 175, 0.85) 50%, rgba(29, 78, 216, 0.7) 100%), url('/cli/21.png')`,
          }}
        >
          {/* Content Wrapper */}
          <div className="relative z-10 max-w-5xl text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-[#93C5FD]">
              <span className="h-0.5 w-6 bg-[#3B82F6]" aria-hidden="true" />
              {content.badge}
            </div>

            {/* Title */}
            <h2 className="mt-4 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-white sm:text-[44px] lg:text-[50px]">
              {content.title}
            </h2>

            {/* Description */}
            <p className="mt-4 text-[15px] max-w-xl leading-[1.7] text-[#E6E9FF] sm:text-[16px]">
              {content.description}
            </p>

            {/* Action Button */}
            <div className="mt-8">
              <Link
                href={content.buttonHref}
                className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3.5 text-[14px] font-bold text-[#1E3A8A] shadow-[0_10px_25px_rgba(0,0,0,0.15)] transition-all hover:bg-[#F8FAFC] hover:shadow-[0_14px_30px_rgba(0,0,0,0.2)]"
              >
                {content.buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

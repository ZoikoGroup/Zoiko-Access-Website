import Image from "next/image";
import Link from "next/link";

const pathwaysData = [
  {
    image: "/org/5.png",
    alt: "Colleagues giving high fives at work representing employer pathways",
    title: "Employers",
    description:
      "Help eligible employees navigate supported benefits — without employer access to clinical records.",
    linkText: "Explore employers",
    href: "/employers",
  },
  {
    image: "/org/6.png",
    alt: "Younger person assisting older adult at home representing community and home care",
    title: "Community & home care",
    description:
      "How permitted transitions, safeguarding and assistance are governed.",
    linkText: "Explore community care",
    href: "/community-care",
  },
  {
    image: "/org/7.png",
    alt: "Volunteer in red shirt at an event representing nonprofits and NGOs",
    title: "Nonprofits & NGOs",
    description: "Supported access programs that could be explored.",
    linkText: "Explore nonprofits",
    href: "/nonprofits",
  },
  {
    image: "/org/8.png",
    alt: "Person signing official documents representing government and public health",
    title: "Government & public health",
    description: "The mandate and data authority that precede any program.",
    linkText: "Explore public health",
    href: "/public-health",
  },
  {
    image: "/org/9.png",
    alt: "Exterior view of modern healthcare facility representing health systems and regional networks",
    title: "Health systems & regional networks",
    description:
      "Coordination between independent organizations — no national universal record.",
    linkText: "Explore health networks",
    href: "/health-networks",
  },
  {
    image: "/org/10.png",
    alt: "Laboratory test tubes with pipette representing research institutions",
    title: "Research institutions",
    description: "The ethics, consent and data restrictions that apply.",
    linkText: "Explore research",
    href: "/research",
  },
];

export default function AudiencePathways() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-6xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-0.5 w-4 bg-[#7C3AED]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#7C3AED]">
              Audience pathways
            </span>
          </div>
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-[#1E1B4B] sm:text-[44px]">
            Find the pathway for your organization.
          </h2>
          <p className="mt-3 text-[15px] leading-[1.65] max-w-2xl text-[#475569] sm:text-[16px]">
            Six informational pathways. Each explains possible approaches — none
            enrolls you in a program.
          </p>
        </div>

        {/* 3-Column Grid with edge-to-edge top images */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pathwaysData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-[#CBD5E1] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]"
            >
              <div>
                {/* Full-width Image Container (No padding around the image) */}
                <div className="relative h-[210px] w-full overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Card Body Content */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-[18px] font-bold tracking-[-0.02em] text-[#1E1B4B]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-[#475569]">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="px-6 pb-6 sm:px-7 sm:pb-7">
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#7C3AED] transition-colors hover:text-[#6C4AEC]"
                >
                  <span>{card.linkText}</span>
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

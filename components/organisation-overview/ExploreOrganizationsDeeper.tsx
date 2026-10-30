import Image from "next/image";
import Link from "next/link";

const deepExplorerData = [
  {
    image: "/org/5.png",
    alt: "Colleagues high-fiving at work representing Employers",
    title: "Employers",
    href: "/employers",
  },
  {
    image: "/org/6.png",
    alt: "Younger person assisting older adult at home representing Community & home care",
    title: "Community & home care",
    href: "/community-care",
  },
  {
    image: "/org/7.png",
    alt: "Volunteer in red shirt at an event representing Nonprofits & NGOs",
    title: "Nonprofits & NGOs",
    href: "/nonprofits",
  },
  {
    image: "/org/8.png",
    alt: "Person signing official documents representing Government & public health",
    title: "Government & public health",
    href: "/public-health",
  },
  {
    image: "/org/9.png",
    alt: "Exterior view of modern healthcare facility representing Health systems & regional networks",
    title: "Health systems & regional networks",
    href: "/health-networks",
  },
  {
    image: "/org/26.png",
    alt: "Healthcare worker administering care representing Care programs",
    title: "Care programs",
    href: "/care-programs",
  },
  {
    image: "/org/10.png",
    alt: "Laboratory test tubes representing Research institutions",
    title: "Research institutions",
    href: "/research",
  },
  {
    image: "/org/25.png",
    alt: "Team working on laptops for Program implementation",
    title: "Program implementation",
    href: "/implementation",
  },
];

export default function ExploreOrganizationsDeeper() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#F3EFFE] to-[#E9E3FC] py-20 font-sans sm:py-28">
      {/* Angular gradient sweep angled from top-left toward bottom-right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(22, 1, 114, 0.98) 0%, rgba(162, 132, 255, 0.9) 100%)",
          clipPath: "polygon(0 0, 100% 0, 100% 28%, 0 78%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-0.5 w-4 bg-[#B7A6FF]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B7A6FF]">
              Explore the organizations section
            </span>
          </div>
          <h2 className="text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-white sm:text-[44px]">
            Go deeper.
          </h2>
        </div>

        {/* 8-Card Grid (4 Columns x 2 Rows) */}
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {deepExplorerData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
            >
              <div>
                {/* Edge-to-edge image container */}
                <div className="relative h-[180px] w-full overflow-hidden bg-slate-100 rounded-t-3xl">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-[18px] font-bold tracking-[-0.02em] text-[#1E1B4B]">
                    {card.title}
                  </h3>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="px-6 pb-6">
                <Link
                  href={card.href}
                  className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[#7C3AED] transition-colors hover:text-[#6C4AEC]"
                >
                  <span>Explore</span>
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

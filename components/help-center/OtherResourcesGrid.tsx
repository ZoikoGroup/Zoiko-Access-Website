import Image from "next/image";

interface ResourceCard {
  title: string;
  path: string;
  imageSrc?: string;
  isGradientBg?: boolean;
}

const resourcesData: ResourceCard[] = [
  {
    title: "Frequently asked questions",
    path: "/faq",
    imageSrc: "/help/17.png",
  },
  {
    title: "Healthcare navigation guide",
    path: "/resources/healthcare-navigation",
    imageSrc: "/help/18.png",
  },
  {
    title: "Safety and emergencies",
    path: "/safety",
    isGradientBg: true,
  },
  {
    title: "Accessibility",
    path: "/accessibility",
    imageSrc: "/help/19.png",
  },
  {
    title: "Privacy and your information",
    path: "/privacy",
    imageSrc: "/help/20.png",
  },
  {
    title: "News and insights",
    path: "/news",
    imageSrc: "/help/21.png",
  },
];

export default function OtherResourcesGrid() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header Section */}
        <div className="max-w-3xl">
          <div className="mb-3">
            <span className="font-mono text-[12px] font-semibold tracking-wider text-[#7C3AED] uppercase">
              — MORE RESOURCES
            </span>
          </div>

          <h2 className="text-[36px] font-bold leading-[1.12] tracking-[-0.03em] text-[#0E1646] sm:text-[44px]">
            Other Resources pages
          </h2>

          <p className="mt-3 text-[15px] leading-[1.65] text-[#64748B] sm:text-[16px]">
            These pages are planned. Links appear once each one is published.
          </p>
        </div>

        {/* 2x3 Resource Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {resourcesData.map((resource, index) => (
            <div
              key={index}
              className="flex overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-300 hover:border-[#CBD5E1]"
            >
              {/* Left Aspect-Square Image / Gradient Container */}
              <div className="relative h-full w-28 shrink-0 overflow-hidden bg-slate-100 sm:w-32">
                {resource.isGradientBg ? (
                  <Image
                    src="/gradients/grad1.png"
                    alt="Safety and emergencies background"
                    fill
                    sizes="128px"
                    className="object-cover object-center"
                  />
                ) : (
                  <Image
                    src={resource.imageSrc!}
                    alt={resource.title}
                    fill
                    sizes="128px"
                    className="object-cover object-center"
                  />
                )}
              </div>

              {/* Right Content Details */}
              <div className="flex flex-col justify-between p-5">
                <div>
                  <h3 className="text-[16px] font-bold text-[#0E1646] sm:text-[17px]">
                    {resource.title}
                  </h3>
                  <p className="mt-1 font-mono text-[12px] text-[#94A3B8]">
                    {resource.path}
                  </p>
                </div>

                {/* Defensive Governance Pill */}
                <div className="mt-4">
                  <span className="inline-block rounded-full bg-[#FEF3C7] px-3 py-0.5 font-mono text-[10px] font-bold tracking-wider text-[#92400E]">
                    Not yet published
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

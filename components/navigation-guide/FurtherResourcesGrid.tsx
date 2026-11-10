import Image from "next/image";

interface ResourceCard {
  title: string;
  path: string;
  imageSrc?: string;
  isGradientBg?: boolean;
  statusText: string;
  statusBg: string;
  statusTextColor: string;
}

const resourcesData: ResourceCard[] = [
  {
    title: "Help center",
    path: "/help",
    imageSrc: "/help/16.png",
    statusText: "Page designed · verify route",
    statusBg: "bg-[#DCFCE7]",
    statusTextColor: "text-[#15803D]",
  },
  {
    title: "Frequently asked questions",
    path: "/faq",
    imageSrc: "/help/17.png",
    statusText: "Page designed · verify route",
    statusBg: "bg-[#DCFCE7]",
    statusTextColor: "text-[#15803D]",
  },
  {
    title: "Safety and emergencies",
    path: "/safety",
    isGradientBg: true,
    statusText: "Not yet published",
    statusBg: "bg-[#FEF3C7]",
    statusTextColor: "text-[#92400E]",
  },
  {
    title: "Accessibility",
    path: "/accessibility",
    imageSrc: "/help/19.png",
    statusText: "Not yet published",
    statusBg: "bg-[#FEF3C7]",
    statusTextColor: "text-[#92400E]",
  },
  {
    title: "Privacy and your information",
    path: "/privacy",
    imageSrc: "/help/20.png",
    statusText: "Not yet published",
    statusBg: "bg-[#FEF3C7]",
    statusTextColor: "text-[#92400E]",
  },
  {
    title: "Contact support",
    path: "/support",
    imageSrc: "/help/5.png",
    statusText: "Not yet published",
    statusBg: "bg-[#FEF3C7]",
    statusTextColor: "text-[#92400E]",
  },
];

export default function FurtherResourcesGrid() {
  return (
    <section className="relative w-full overflow-hidden bg-[#F6F9FC] py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header Section */}
        <div className="max-w-3xl">
          <div className="mb-3">
            <span className="font-mono text-[12px] font-semibold tracking-wider text-[#7C3AED] uppercase">
              — FURTHER RESOURCES
            </span>
          </div>

          <h2 className="text-[36px] font-bold leading-[1.12] tracking-[-0.03em] text-[#0E1646] sm:text-[44px]">
            Keep learning
          </h2>

          <p className="mt-3 text-[15px] leading-[1.65] text-[#64748B] sm:text-[16px]">
            Linked pages are designed; links go live once each route is
            verified.
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

                {/* Defensive Governance Status Pill */}
                <div className="mt-4">
                  <span
                    className={`inline-block rounded-full px-3 py-0.5 font-mono text-[10px] font-bold tracking-wider ${resource.statusBg} ${resource.statusTextColor}`}
                  >
                    {resource.statusText}
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

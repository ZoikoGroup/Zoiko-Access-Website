import Image from "next/image";

interface PathwayItem {
  number: string;
  title: string;
  description: string;
  imageSrc: string;
}

const pathways: PathwayItem[] = [
  {
    number: "01",
    title: "Patient",
    description: "Start exploring general healthcare options.",
    imageSrc: "/guide/4.png",
  },
  {
    number: "02",
    title: "Caregiver",
    description: "Help another person, with the right permission.",
    imageSrc: "/guide/5.png",
  },
  {
    number: "03",
    title: "Finding services",
    description: "Understand which type of care fits a need.",
    imageSrc: "/guide/6.png",
  },
  {
    number: "04",
    title: "Existing referral",
    description: "Make sense of where a referral stands.",
    imageSrc: "/guide/7.png",
  },
  {
    number: "05",
    title: "Clinical information",
    description: "Know who holds records and decisions.",
    imageSrc: "/guide/8.png",
  },
];

export default function InformationPathwaySelector() {
  return (
    <section className="relative w-full overflow-hidden py-20 font-sans sm:py-28">
      {/* Background Image Layer using /gradients/grad2.png */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <Image
          src="/gradients/grad2.png"
          alt="Information pathway background gradient"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header Section */}
        <div className="max-w-3xl">
          <div className="mb-3">
            <span className="font-mono text-[12px] font-semibold tracking-wider text-[#7C3AED] uppercase">
              — CHOOSE AN INFORMATION PATHWAY
            </span>
          </div>

          <h2 className="mt-2 text-[36px] font-bold leading-[1.12] tracking-[-0.03em] text-[#0E1646] sm:text-[44px]">
            Where would you like{" "}
            <span className="text-[#7C3AED]">to start?</span>
          </h2>

          <p className="mt-3 text-[15px] leading-[1.65] text-[#475569] sm:text-[16px]">
            Picking a pathway never asks about your health and never infers a
            condition.
          </p>
        </div>

        {/* 5-Card Grid Column Layout */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {pathways.map((pathway, idx) => (
            <div
              key={idx}
              className="group relative flex aspect-[3/4] min-h-[360px] w-full flex-col justify-between overflow-hidden rounded-3xl border border-white/20 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
            >
              {/* Edge-to-Edge Visual Image Layer */}
              <Image
                src={pathway.imageSrc}
                alt={pathway.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E1646]/95 via-[#0E1646]/50 to-black/20" />

              {/* Floating Monospace Step Badge */}
              <div className="relative p-5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white font-mono text-[12px] font-bold text-[#7C3AED] shadow-md">
                  {pathway.number}
                </span>
              </div>

              {/* Card Footer Content */}
              <div className="relative p-5">
                <h3 className="text-[18px] font-bold text-white sm:text-[20px]">
                  {pathway.title}
                </h3>
                <p className="mt-2 text-[13px] leading-[1.5] text-slate-200/90">
                  {pathway.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

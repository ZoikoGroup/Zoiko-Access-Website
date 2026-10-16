import Image from "next/image";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    label: "01 / Read",
    title: "Understand service types",
    description:
      "Browse neutral descriptions, examples, professional roles, and useful questions.",
  },
  {
    label: "02 / Connect ideas",
    title: "Understand care pathways",
    description:
      "See how services, independent organizations, and administrative steps may connect.",
  },
  {
    label: "03 / Check context",
    title: "Review location limits",
    description:
      "Service education is separate from an approved locally operating directory.",
  },
];

export default function HowToUseGuide() {
  return (
    <section className="w-full bg-[#F5F8FC] py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <SectionHeading
          badge="How to use this guide"
          title="Learn first. Keep the next step clear."
        />

        <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.label}
              className="flex flex-col gap-3 rounded-xl border border-[#E5E7EB] bg-white p-6"
            >
              <p className="text-[10px] font-bold uppercase leading-4 text-[#6A44D4]">
                {step.label}
              </p>
              <h3 className="pt-[5px] text-[18px] font-bold leading-6 text-[#23327A]">
                {step.title}
              </h3>
              <p className="max-w-[350px] text-[14px] leading-6 text-[#5E6B85]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="relative mt-9 aspect-[1280/547] w-full">
          <Image
            src="/healthcare-services/guide-steps.webp"
            alt="Illustration: reading about service types, seeing how care steps connect, and checking a location on a map"
            fill
            sizes="(min-width: 1440px) 1280px, 100vw"
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}

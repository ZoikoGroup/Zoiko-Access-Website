import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, Activity } from "lucide-react";

interface WorkflowCard {
  title: string;
  description: string;
  badgeText: string;
  footerText: string;
  imageSrc: string;
  icon: React.ReactNode;
  href: string;
}

const workflowsData: WorkflowCard[] = [
  {
    title: "Scheduling & patient access",
    description:
      "How appointment requests reach the clinic's own scheduling team.",
    badgeText: "INFO",
    footerText: "The clinic scheduling system stays authoritative.",
    imageSrc: "/care/1.png",
    icon: <Calendar className="h-6 w-6 text-white stroke-[1.75]" />,
    href: "/scheduling-and-patient-access",
  },
  {
    title: "Referral intake & routing",
    description:
      "How referrals are sent, received and reviewed by the right team.",
    badgeText: "INFO",
    footerText: "Receipt is not clinical review or acceptance.",
    imageSrc: "/care/2.png",
    icon: <ArrowRight className="h-6 w-6 text-white stroke-[1.75]" />,
    href: "/referral-intake-and-routing",
  },
  {
    title: "Discharge & transition support",
    description: "How care moves safely from one team to the next.",
    badgeText: "INFO",
    footerText: "A handoff happens only when a named care owner accepts.",
    imageSrc: "/care/3.png",
    icon: <Activity className="h-6 w-6 text-white stroke-[1.75]" />,
    href: "/discharge-and-transition-support",
  },
];

export default function ThreeWorkflowPathways() {
  return (
    <section className="relative w-full overflow-hidden bg-white py-20 font-sans sm:py-28">
      <div className="relative mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-3">
              <span className="font-mono text-[12px] font-semibold tracking-wider text-[#7C3AED] uppercase">
                — THREE WORKFLOW PATHWAYS
              </span>
            </div>

            <h2 className="mt-2 text-[36px] font-bold leading-[1.12] tracking-[-0.03em] text-[#0E1646] sm:text-[44px]">
              Three workflows, one rule: the provider decides.
            </h2>
          </div>

          <div className="max-w-md lg:pb-2">
            <p className="text-[15px] leading-[1.65] text-[#64748B] sm:text-[16px]">
              A summary of each topic. The detailed page for each one carries
              the full explanation.
            </p>
          </div>
        </div>

        {/* 3-Card Grid */}
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {workflowsData.map((workflow, index) => (
            <div
              key={index}
              className="flex flex-col justify-between overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-[0_10px_30px_rgba(0,0,0,0.03)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
            >
              <div>
                {/* Edge-to-Edge Image with No Padding */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
                  <Image
                    src={workflow.imageSrc}
                    alt={workflow.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* Content Container with Padding */}
                <div className="p-6 sm:p-8">
                  {/* Floating Icon Box precisely overlapping the image/content boundary (-mt-12 shifts it up halfway) */}
                  <div className="relative -mt-12 mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7C3AED] to-[#5B21B6] shadow-[0_10px_25px_rgba(124,58,237,0.3)] ring-4 ring-white">
                    {workflow.icon}
                  </div>

                  {/* INFO Badge below the icon */}
                  <div>
                    <span className="inline-block rounded-md bg-[#F1F0FE] px-2 py-0.5 font-mono text-[10px] font-bold tracking-wider text-[#16245A]">
                      {workflow.badgeText}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-3 text-[20px] font-bold tracking-tight text-[#0E1646]">
                    {workflow.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-[#475569]">
                    {workflow.description}
                  </p>

                  {/* Light Callout Footer inside Card */}
                  <div className="mt-6 rounded-xl bg-[#F8FAFC] p-4 border border-[#F1F5F9]">
                    <p className="text-[13px] font-medium text-[#475569]">
                      {workflow.footerText}
                    </p>
                  </div>
                </div>
              </div>

              {/* Read the Topic Link */}
              <div className="px-6 pb-6 pt-0 sm:px-8 sm:pb-8">
                <div className="pt-4 border-t border-[#F1F5F9]">
                  <Link
                    href={workflow.href}
                    className="group inline-flex items-center justify-between w-full text-[14px] font-bold text-[#0E1646] transition-colors hover:text-[#7C3AED]"
                  >
                    <span>Read the topic</span>
                    <span className="text-[#7C3AED] transition-transform duration-200 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import SectionHeading from "./SectionHeading";

const tasks = [
  {
    title: "For caregivers & families",
    description:
      "Understand representation, verification, scope, and revocation.",
    href: "/for-caregivers",
  },
  {
    title: "Privacy & permissions",
    description: "Learn why purpose, role, local rules, and source control matter.",
    href: "#privacy",
  },
  {
    title: "Health information access",
    description:
      "Understand source-linked information without a universal-record claim.",
    href: "#health-information",
  },
  {
    title: "Accessible help",
    description:
      "Find inclusive guidance without an invented staffed assistance promise.",
    href: "#accessibility",
  },
];

export default function TaskNavigator() {
  return (
    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-20">
        <SectionHeading
          badge="Your patient task navigator"
          title={
            <>
              What would you like
              <br />
              to understand next?
            </>
          }
          description="These are educational explanations. Sign-up, appointment workspaces, referral tracking, and message composers are not available in this preview."
        />

        <div className="mt-9 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tasks.map((task, index) => (
            <Link
              key={task.title}
              href={task.href}
              className="group flex min-h-[288px] flex-col rounded-xl border border-[#E1E7F0] bg-[#F5F8FC] p-7 transition-colors hover:border-[#C9D3F2] hover:bg-[#EFF3FB]"
            >
              <span className="text-[10px] leading-4 text-[#6A44D4]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-9 text-[20px] font-bold leading-6 tracking-[-0.02em] text-[#23327A] [font-family:var(--font-poppins)]">
                {task.title}
              </h3>
              <p className="mt-4 text-[14px] leading-6 text-[#5E6B85]">
                {task.description}
              </p>
              <div className="min-h-6 flex-1" aria-hidden="true" />
              <span className="text-[12px] font-semibold leading-5 text-[#B9A6F9] group-hover:text-[#6A44D4]">
                Read the explanation →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

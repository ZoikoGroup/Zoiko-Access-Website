import { Eyebrow, heading } from "./shared";

const owners = [
  {
    tag: "Sponsor",
    tagClass: "bg-[#E6EEFF] text-[#2E2A8C]",
    title: "Funding & eligibility policy",
    text: "Sets who qualifies and pays for the program. No participant health data by default.",
  },
  {
    tag: "Licensed provider",
    tagClass: "bg-[#E3F5EC] text-[#1E7A4C]",
    title: "Care",
    text: "Owns clinical decisions and the clinical record.",
  },
  {
    tag: "Platform",
    tagClass: "bg-[#EEEAFE] text-[#5B3FD0]",
    title: "Governed information",
    text: "Displays program information and status — only as contracted.",
  },
];

export default function ResponsibilityOwners() {
  return (
    <section className="bg-[#F6F5FF] px-6 py-16 lg:px-16">
      <div className="mx-auto w-full max-w-[1300px]">
        <Eyebrow>Provider &amp; sponsor responsibility</Eyebrow>
        <h2 className={`${heading} mb-6 text-3xl text-[#16245A] md:text-4xl`}>Three owners, three jobs.</h2>

        {/* 1px gap over a light background draws the dividers between cells */}
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-[#E4E7F2] bg-[#E4E7F2] md:grid-cols-3">
          {owners.map((o) => (
            <div key={o.tag} className="bg-white p-8">
              <span className={`mb-3 inline-block rounded-full px-3 py-1 text-xs font-semibold ${o.tagClass}`}>
                {o.tag}
              </span>
              <h3 className={`${heading} mb-2 text-xl text-[#16245A]`}>{o.title}</h3>
              <p className="text-sm leading-6 text-[#5B6B8C]">{o.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

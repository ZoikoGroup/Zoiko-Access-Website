import { Clock3, FileText, Flag, Link2, UserRound } from "lucide-react";
import SectionHeading from "./SectionHeading";

const fields = [
  { icon: UserRound, title: "Responsible actor", text: "The organization or team that owns the next step." },
  { icon: Flag, title: "Published action", text: "Only what the authorized organization has actually requested." },
  { icon: Clock3, title: "Deadline", text: "Shown only if the source states one." },
  { icon: Link2, title: "Contact", text: "A phone number or link appears only after it is verified." },
];

const example = [
  { icon: UserRound, label: "Responsible actor", value: "Receiving organization" },
  { icon: FileText, label: "Published action", value: "As stated by the organization" },
  { icon: Link2, label: "Source", value: "Attributed to the supplier" },
  { icon: Clock3, label: "Last verified", value: "Date, time and time zone" },
];

export default function ResponsibleNext() {
  return (
    <section className="w-full bg-gradient-to-b from-[#F3F1FE] to-[#D3C8FD] py-[100px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[70px]">
        <SectionHeading
          badge="Next owner and action"
          title="Who is responsible next?"
          description="Every referral names the organization responsible for the next step and any action it has published. We don’t guess, and we don’t promise a response time."
          className="!max-w-[1000px] [&>p:last-child]:max-w-[980px]"
        />

        <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,613fr)_minmax(0,594fr)] lg:gap-x-[69px]">
          <ul className="flex flex-col gap-6">
            {fields.map((field) => {
              const Icon = field.icon;
              return (
                <li
                  key={field.title}
                  className="rounded-2xl border border-[#E4E0F7] bg-white px-6 pb-7 pt-6 shadow-[0_10px_30px_rgba(60,40,140,0.08)] sm:px-[54px]"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-[46px] w-[46px] items-center justify-center rounded-xl bg-[#EEEAFE] text-[#5B3FD1]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <h3 className="text-[17px] font-semibold text-[#1D1A5A] [font-family:var(--font-poppins)]">
                      {field.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-[15px] text-[#5B5880]">{field.text}</p>
                </li>
              );
            })}
          </ul>

          <div className="rounded-[40px] bg-white p-6 sm:p-[46px]">
            <div className="overflow-hidden rounded-[20px] border border-[#E4E0F7]">
              <p className="bg-gradient-to-r from-[#6F52D8] to-[#3B3FD0] px-8 py-5 text-[20px] font-semibold text-white [font-family:var(--font-poppins)]">
                Who is responsible next?
              </p>
              <dl className="flex flex-col gap-5 px-4 pb-5 pt-4">
                {example.map((row) => {
                  const Icon = row.icon;
                  return (
                    <div key={row.label} className="flex items-center gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EEEAFE] text-[#5B3FD1]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <div>
                        <dt className="text-[12px] font-semibold uppercase text-[#5B3FD1]">{row.label}</dt>
                        <dd className="text-[16px] text-[#1D1A5A]">{row.value}</dd>
                      </div>
                    </div>
                  );
                })}
              </dl>
              <p className="mx-7 mb-5 rounded-full bg-[#EEEAFE] py-1.5 text-center text-[13px] font-semibold text-[#3B32B8]">
                No response time or urgency is promised
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

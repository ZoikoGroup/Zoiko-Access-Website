import Image from "next/image";
import SectionHeading from "./SectionHeading";

const outcomes = [
  {
    label: "Submitted",
    pill: "bg-[#FBE3D0] text-[#8A3D0B]",
    dot: "bg-[#8A3D0B]",
    title: "Request sent",
    text: "We have sent it. This is not a booking.",
  },
  {
    label: "Awaiting acknowledgement",
    pill: "bg-[#C9D3FA] text-[#1A2C9C]",
    dot: "bg-[#1A2C9C]",
    title: "Waiting for the organization",
    text: "The organization has not confirmed receipt yet.",
  },
  {
    label: "Held",
    pill: "bg-[#C9D3FA] text-[#3B32B8]",
    dot: "bg-[#3B32B8]",
    title: "Time held",
    text: "Held under the organization’s rules, not confirmed.",
  },
  {
    label: "Confirmed",
    pill: "bg-[#F5DCDC] text-[#11643A]",
    dot: "bg-[#11643A]",
    title: "Confirmed",
    text: "Shown only after the organization confirms it.",
  },
  {
    label: "Denied",
    pill: "bg-[#F5DCDC] text-[#A31919]",
    dot: "bg-[#A31919]",
    title: "Not accepted",
    text: "Contact the organization for other options.",
  },
  {
    label: "Uncertain",
    pill: "bg-[#C9D3FA] text-[#3B4470]",
    dot: "bg-[#3B4470]",
    title: "We can’t tell yet",
    text: "Please don’t resend. Check with the organization if it’s urgent.",
  },
];

export default function AfterYouSubmit() {
  return (
    <section className="w-full bg-[#F5F8FC] py-[90px]">
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-[70px]">
        <SectionHeading
          badge="After you submit"
          title={
            <>
              Honest outcomes, never assumed
              <br className="hidden sm:block" /> success
            </>
          }
        />

        <div className="mt-10 grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,557fr)_minmax(0,718fr)] lg:gap-x-[25px]">
          <ul className="grid grid-cols-1 gap-[17px] sm:grid-cols-2">
            {outcomes.map((item) => (
              <li
                key={item.label}
                className="rounded-xl border border-[#E4DDFB] bg-[#E9E3FE] px-5 pb-8 pt-5"
              >
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[13px] font-semibold ${item.pill}`}
                >
                  <span className={`h-2 w-2 rounded-full ${item.dot}`} aria-hidden="true" />
                  {item.label}
                </span>
                <h3 className="mt-3 text-[17px] font-semibold text-[#14122E]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-6 text-[#4A4F66]">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>

          <div className="relative mx-auto aspect-[718/538] w-full max-w-[718px]">
            <Image
              src="/appointments-requests/outcomes.webp"
              alt="Illustration of a calendar with a sent request, a held slot, a confirmation tick and an uncertain question mark"
              fill
              sizes="(min-width: 1024px) 718px, 100vw"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

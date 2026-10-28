import { fontPoppins } from "./fonts";
import { Eyebrow, Title, inner, sectionPad, sectionY } from "./ui";

const items = [
  { icon: "↺", title: "Wrong plan", text: "The request went to a plan that doesn't apply." },
  { icon: "＋", title: "Missing documentation", text: "The payer needs more before review can continue." },
  { icon: "⧉", title: "Duplicate submission", text: "The same request was sent more than once." },
  { icon: "⟲", title: "Outdated policy", text: "The rules used have since changed." },
  { icon: "⚠", title: "Partner outage", text: "A channel is unavailable; no status is assumed." },
  { icon: "✎", title: "Corrected case", text: "Details were corrected after submission." },
  { icon: "⌛", title: "Expired determination", text: "A previous determination is no longer valid." },
];

export default function ExceptionalPaths() {
  return (
    <section id="exceptions" className={`w-full bg-white ${sectionY} ${sectionPad}`}>
      <div className={`${inner} flex flex-col items-start gap-3`}>
        <Eyebrow>Exceptional paths</Eyebrow>
        <Title>When things don&apos;t go to plan.</Title>
        <ul className="grid w-full gap-3 pt-1 md:grid-cols-2">
          {items.map((item) => (
            <li
              key={item.title}
              className="flex items-start gap-4 rounded-[12px] border border-solid border-[#e3e8f2] bg-white px-[18px] py-4 drop-shadow-[0_10px_10px_rgba(0,0,0,0.1)] lg:h-[79.98px]"
            >
              <span
                aria-hidden="true"
                className="flex size-[36px] shrink-0 items-center justify-center rounded-[10px] bg-[#eee9fd] pb-[5.8px] pt-[4.2px] text-[16px] font-bold leading-[25.6px] text-[#7657e8]"
              >
                {item.icon}
              </span>
              <div className="flex flex-col gap-px">
                <h3 className={`${fontPoppins} text-[16px] font-semibold leading-[21.6px] text-[#16245a]`}>{item.title}</h3>
                <p className="text-[14px] leading-[22.4px] text-[#5b6678]">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="pb-[0.59px] pt-[9px] text-[16px] leading-[25.6px] text-[#16245a]">
          In every case: <strong className="font-bold">check with the responsible payer or provider.</strong>
        </p>
      </div>
    </section>
  );
}

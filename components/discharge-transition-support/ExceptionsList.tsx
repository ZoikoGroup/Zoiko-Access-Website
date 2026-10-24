import { fontPoppins } from "./fonts";
import IconBadge, { type IconName } from "./IconBadge";
import { Eyebrow, Title, inner, sectionPad } from "./ui";

const items: { icon: IconName; title: string; text: string }[] = [
  { icon: "users", title: "Missing receiver", text: "No receiving owner is named." },
  { icon: "clock", title: "Delayed acceptance", text: "The receiver has not yet accepted." },
  { icon: "phone", title: "Invalid contact", text: "The route to the receiver is wrong." },
  { icon: "alert", title: "Undeliverable notice", text: "The message could not be delivered." },
  { icon: "lock", title: "Consent restriction", text: "Sharing is not permitted for this purpose." },
];

export default function ExceptionsList() {
  return (
    <section className={`w-full bg-white py-12 lg:py-[70px] ${sectionPad}`}>
      <div className={`${inner} flex flex-col items-start gap-[13px]`}>
        <Eyebrow>EXCEPTIONS AND SAFETY ESCALATION</Eyebrow>
        <Title>When a handoff stalls</Title>

        <ul className="flex w-full flex-col gap-[10px] pb-[8.99px] pt-[17px]">
          {items.map((item) => (
            <li
              key={item.title}
              className="flex flex-wrap items-center gap-[14px] rounded-[18px] border border-solid border-[#d9d3f5] bg-white pb-[12.8px] pl-[18px] pr-[18px] pt-[11px] shadow-[0_5px_10px_rgba(0,0,0,0.1)]"
            >
              <IconBadge name={item.icon} />
              <div className="flex min-w-[200px] flex-1 flex-col pl-[2px] lg:w-[869.66px] lg:flex-none">
                <h3
                  className={`${fontPoppins} pb-[0.97px] text-[16.5px] font-semibold leading-[18.98px] tracking-[-0.33px] text-[#031974]`}
                >
                  {item.title}
                </h3>
                <p className="text-[16px] font-normal leading-[26.4px] text-[#273444]">
                  {item.text}
                </p>
              </div>
              <em className="whitespace-nowrap rounded-full bg-[#f1eefe] px-[12px] py-[4px] text-[12px] font-bold not-italic leading-[normal] text-[#7b3ff2] lg:w-[174.34px]">
                Owning care organization
              </em>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

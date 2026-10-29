import Copy from "./Copy";
import { fontPoppins } from "./fonts";
import { Eyebrow, Lead, Title, inner, sectionPad } from "./ui";

const statuses = [
  {
    title: "Prepared",
    lines: undefined,
    text: "Assembled by the sender.",
    dark: false,
  },
  {
    title: "Transmitted",
    lines: undefined,
    text: "Released into transport.",
    dark: false,
  },
  {
    title: "Technically received",
    lines: undefined,
    text: "A system logged it.",
    dark: false,
  },
  {
    title: "Reviewed by responsible professional",
    lines: ["Reviewed by responsible", "professional"],
    text: "A person looked at it.",
    dark: true,
  },
  {
    title: "Accepted / completed by provider",
    lines: ["Accepted / completed by", "provider"],
    text: "The provider took it on.",
    dark: true,
  },
];

export default function ReceiptStatuses() {
  return (
    <section
      className={`w-full bg-[linear-gradient(162.89deg,#f1eefe_10.48%,#ccc0ff_73.45%)] py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div className={`${inner} flex flex-col items-start gap-[13px]`}>
        <Eyebrow>CLINICAL GOVERNANCE AND SAFETY</Eyebrow>
        <Title>Receipt is not review</Title>
        <Lead className="pt-[0.99px]">
          <Copy
            text="Five statuses, kept distinct. Escalation belongs to the participating organizations."
            d={[
              "Five statuses, kept distinct. Escalation belongs to the participating organizations.",
            ]}
          />
        </Lead>

        <ol className="grid w-full gap-[10px] pt-[17px] sm:grid-cols-2 lg:grid-cols-5">
          {statuses.map((status) => (
            <li
              key={status.title}
              className={`flex flex-col items-start gap-[5px] rounded-[16px] border border-solid p-[14px] lg:min-h-[94.7px] ${
                status.dark
                  ? "border-[#031974] bg-[#031974]"
                  : "border-[#d9d3f5] bg-white lg:pb-[35px]"
              }`}
            >
              <span
                className={`${fontPoppins} text-[14.5px] font-semibold leading-[normal] ${
                  status.dark ? "text-white" : "text-[#031974]"
                }`}
              >
                <Copy text={status.title} d={status.lines} />
              </span>
              <small
                className={`w-full text-[12.5px] font-normal leading-[normal] ${
                  status.dark ? "text-[#d8dcff]" : "text-[#273444]"
                }`}
              >
                {status.text}
              </small>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

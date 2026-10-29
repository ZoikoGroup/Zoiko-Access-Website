import Copy from "./Copy";
import { Eyebrow, Title, inner, sectionPad } from "./ui";

const technical = [
  "Draft / not submitted",
  "Sent",
  "Transport acknowledged",
  "Schema / identity validated",
  "Received by organization",
  "Rejected / failed",
  "Unknown / stale",
];
const clinical = [
  "Pending professional review",
  "Reviewed",
  "Action recorded",
  "Corrected / superseded",
];

function Chip({
  index,
  label,
  variant,
}: {
  index: number;
  label: string;
  variant: "muted" | "light" | "clinical";
}) {
  const styles = {
    muted: "bg-[rgba(255,255,255,0.4)] text-[#edf1f5]",
    light: "border border-solid border-[#dcd6f2] bg-white text-[#243b73]",
    clinical: "border border-solid border-[#7657e8] bg-[#f6f3fe] text-[#243b73]",
  };
  return (
    <li
      className={`flex h-[42px] items-center gap-[10px] rounded-[10px] px-[14px] text-[13.8px] font-medium leading-[22.7px] ${styles[variant]}`}
    >
      <span className="flex size-[19px] shrink-0 items-center justify-center rounded-[2px] bg-[#4043ff] text-[10px] font-bold leading-none text-white">
        {index}
      </span>
      {label}
    </li>
  );
}

export default function StatusModel() {
  return (
    <section
      id="ownership"
      className={`w-full scroll-mt-[40px] bg-[linear-gradient(-71.96deg,#a508bd_1.74%,#00248f_34.33%,#01003f_99.65%)] py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div className={`${inner} flex flex-col items-start gap-[40px] lg:px-6`}>
        <div className="flex w-full max-w-[1024px] flex-col items-start gap-[12.9px]">
          <Eyebrow tone="violet">Status and evidence model</Eyebrow>
          <Title tone="light" className="lg:pt-[2.11px]">
            <Copy
              text="Technical states are never clinical states."
              d={["Technical states are never ", "clinical states."]}
            />
          </Title>
          <p className="w-full max-w-[822px] pb-[0.56px] text-[16px] font-normal leading-[27px] text-[#fff7e6] lg:text-[16.8px] lg:leading-[27.72px]">
            Each status shows an actor, a source, a timestamp, its evidence and
            the next owner. Conceptual only.
          </p>
        </div>

        <div className="grid w-full gap-[26px] lg:h-[520px] lg:grid-cols-2">
          <div className="flex flex-col gap-[14px] rounded-[20px] bg-[rgba(0,0,0,0.11)] p-[20px] backdrop-blur-[5px]">
            <h3 className="pb-[10px] text-[24px] font-bold leading-[18.82px] tracking-[-0.168px] text-white">
              Technical
            </h3>
            <ul className="flex flex-col gap-[23px]">
              {technical.map((label, i) => (
                <Chip key={label} index={i + 1} label={label} variant={i === 0 ? "muted" : "light"} />
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-[14px] rounded-[20px] bg-[rgba(0,0,0,0.11)] pb-[52.7px] backdrop-blur-[5px]">
            <h3 className="p-[20px] text-[24px] font-bold leading-[18.82px] tracking-[-0.168px] text-white">
              Clinical
            </h3>
            <ul className="flex flex-col gap-[20px] px-[20px]">
              {clinical.map((label, i) => (
                <Chip key={label} index={i + 1} label={label} variant="clinical" />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

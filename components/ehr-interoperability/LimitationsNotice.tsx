import Copy from "./Copy";
import { fontPoppins } from "./fonts";
import { Eyebrow, Lead, Title, sectionPad } from "./ui";

export default function LimitationsNotice() {
  return (
    <section
      className={`w-full bg-[linear-gradient(164.59deg,#f1eefe_10.48%,#ccc0ff_73.45%)] py-12 lg:py-[70px] ${sectionPad}`}
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-[13px]">
        <Eyebrow>LIMITATIONS AND CURRENT AVAILABILITY</Eyebrow>
        <Title>What this page does not say</Title>
        <Lead>
          <Copy
            text="Integration capabilities depend on your location, participating organizations, and release approvals. There is no connector directory and no “Connect EHR” button."
            d={[
              "Integration capabilities depend on your location, participating organizations, and",
              "release approvals. There is no connector directory and no “Connect EHR” button.",
            ]}
          />
        </Lead>
        <p
          id="locbadge"
          className={`${fontPoppins} rounded-full border border-solid border-[#d9d3f5] bg-white px-[16px] py-[9px] text-[14px] font-semibold leading-[normal] text-[#031974]`}
        >
          Country context: none selected (informational coverage only)
        </p>
      </div>
    </section>
  );
}

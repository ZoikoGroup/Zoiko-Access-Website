import Copy from "./Copy";
import { Eyebrow, Title, inner, sectionPad } from "./ui";

export default function MarketsReadiness() {
  return (
    <section id="markets" className="w-full bg-[#c4b5fd]/90 py-12 lg:py-[70px]">
      <div className={`${inner} ${sectionPad} flex flex-col items-center gap-3`}>
        <Eyebrow center>Markets &amp; operating readiness</Eyebrow>
        <Title center>Capabilities vary.</Title>
        <p className="w-full max-w-[720px] pt-[2.8px] text-center text-[16px] leading-[25.6px] text-[#273444] min-[1400px]:max-w-none">
          <Copy
            text="Capabilities vary by plan, participating organization, jurisdiction and verified release. This page explains the approach; it does not verify your own authorization status."
            d={[
              "Capabilities vary by plan, participating organization, jurisdiction and verified release. This page",
              "explains the approach; it does not verify your own authorization status.",
            ]}
          />
        </p>
      </div>
    </section>
  );
}

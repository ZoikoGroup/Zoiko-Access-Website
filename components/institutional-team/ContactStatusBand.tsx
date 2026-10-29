import Copy from "./Copy";
import { sectionPad } from "./ui";

/** Notice strip shown under the hero in the mobile design. */
export default function ContactStatusBand() {
  return (
    <aside
      className={`w-full bg-[linear-gradient(135.07deg,#08176d_0%,#2d2bc9_55%,#6f3fec_100%)] py-4 lg:hidden ${sectionPad}`}
    >
      <div className="mx-auto flex w-full max-w-[1180px] flex-col items-start gap-2 text-[15.2px] leading-[25px] text-[#e6e1ff]">
        <p>
          <strong className="font-bold text-white">Contact status.</strong>{" "}
          <Copy
            text="Institutional inquiries are not currently available through this page for the selected location."
            m={[
              "Institutional inquiries are not",
              "currently available through this page for the",
              "selected location.",
            ]}
          />
        </p>
        <p>
          <strong className="font-bold text-white">Emergency?</strong>{" "}
          <Copy
            text="Use the emergency services appropriate to your location."
            m={["Use the emergency services", "appropriate to your location."]}
          />
        </p>
      </div>
    </aside>
  );
}

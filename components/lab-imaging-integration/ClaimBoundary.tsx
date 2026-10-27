import { fontPoppins } from "./fonts";
import { sectionPad } from "./ui";

export default function ClaimBoundary() {
  return (
    <aside className={`w-full bg-[#243b73] pb-[16px] pt-[15px] ${sectionPad}`}>
      <p className="mx-auto w-full max-w-[1160px] text-[14.9px] font-normal leading-[24.55px] text-[#dbe3ff] lg:px-6">
        <strong className={`${fontPoppins} font-bold text-white`}>
          Claim boundary.
        </strong>{" "}
        This page describes an intended integration approach. It does not
        establish that an interface is available for your organization or
        country.
      </p>
    </aside>
  );
}

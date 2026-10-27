import { fontPoppins } from "./fonts";
import { sectionPad } from "./ui";

export default function TrustBar() {
  return (
    <aside className={`w-full bg-[#7657e8] pb-[15.78px] pt-[15.5px] ${sectionPad}`}>
      <p className="mx-auto w-full max-w-[1160px] text-[14.7px] font-medium leading-[24.29px] text-white lg:px-6">
        <strong className={`${fontPoppins} font-bold`}>Good to know:</strong>{" "}
        Listings and published availability can change. A pharmacy must confirm
        stock, prescription validity and fulfillment options.
      </p>
    </aside>
  );
}

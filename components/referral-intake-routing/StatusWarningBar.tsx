import Image from "next/image";

export default function StatusWarningBar() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side: Delivery Advisory */}
        <div className="flex items-center bg-[#031974] px-6 py-5 sm:px-10 lg:px-12">
          <div className="flex items-center gap-5 sm:gap-6">
            <div className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-[12px] bg-[#F1EEFE] p-2.5">
              <Image
                src="/referral-intake-routing/strip-icon-delivery.svg"
                alt=""
                width={22}
                height={22}
                className="h-5 w-5 object-contain"
              />
            </div>
            <p className="text-[15px] font-normal leading-[1.65] text-white sm:text-[16.5px]">
              A referral being sent or delivered does not mean the receiving
              provider has accepted it.
            </p>
          </div>
        </div>

        {/* Right Side: Emergency & Location Notice */}
        <div className="flex items-center bg-[#FFF7F0] px-6 py-5 sm:px-10 lg:px-12 border-t lg:border-t-0 border-[#F5E6D8]">
          <div className="flex items-center gap-5 sm:gap-6">
            <div className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-[12px] bg-[#6B3A12]/15 p-2.5">
              <Image
                src="/referral-intake-routing/strip-icon-emergency.svg"
                alt=""
                width={22}
                height={22}
                className="h-5 w-5 object-contain"
              />
            </div>
            <p className="text-[15px] font-semibold leading-[1.65] text-[#6B3A12] sm:text-[16.5px]">
              Zoiko Access is not an emergency response service. No care
              location selected. Capabilities vary by location.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

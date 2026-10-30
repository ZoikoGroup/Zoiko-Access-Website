export default function UrgentBanner() {
  return (
    <section className="w-full border-y border-[#F0D49A] bg-[#FFF8EA] py-5 px-6 lg:px-[70px]">
      <div className="mx-auto flex max-w-[1440px] items-center gap-3.5">
        {/* Warning Icon Badge */}
        <div className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-full bg-[#B7791F] text-[16px] font-bold text-white">
          !
        </div>

        {/* Text */}
        <p className="text-[15px] sm:text-[15.5px] leading-[24.8px] text-[#4A3500]">
          <strong className="font-bold text-[#4A3500]">This is not an emergency service.</strong>{" "}
          <span className="font-normal text-[#4A3500]">
            If you need urgent help, contact your local emergency services now.
          </span>
        </p>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function ScopeAvailabilityBanner() {
  return (
    <section className="w-full bg-[#031974] py-[22px] px-4 md:px-[80px]">
      <div className="mx-auto flex max-w-[1280px] items-center gap-[20px]">
        {/* Shield Icon */}
        <div className="flex-shrink-0">
          <Image
            src="/care-transitions/i-shield.svg"
            alt="Safety and regulatory notice shield icon"
            width={24}
            height={28}
            className="h-[28px] w-[24px] object-contain brightness-0 invert"
          />
        </div>

        {/* Notice Text */}
        <p
          className="text-white"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "26.4px",
            letterSpacing: "0px",
          }}
        >
          This page explains a product approach. Actual transition workflows depend on locally approved participants, permissions and integrations. Zoiko Access
          <br className="hidden lg:inline" />
          does not independently assess clinical urgency or replace professional judgment. For urgent medical needs, contact local emergency services.
        </p>
      </div>
    </section>
  );
}

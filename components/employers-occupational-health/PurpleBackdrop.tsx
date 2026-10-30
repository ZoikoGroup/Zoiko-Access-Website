/** Purple section background with the dark diagonal wedge used in the design. */
export default function PurpleBackdrop() {
  return (
    <>
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#6A4FCF] via-[#9A7FF5] to-[#A98BFF]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#1A0B6B] to-[#2A1690]"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 45% 100%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#6A4FCF] to-transparent"
        style={{ clipPath: "polygon(0 35%, 55% 100%, 0 100%)" }}
        aria-hidden="true"
      />
    </>
  );
}

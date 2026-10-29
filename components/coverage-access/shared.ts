export * from "../payer-solutions-team/ui";
export { fontPoppins, inter, poppins, sora, fontInter } from "../payer-solutions-team/fonts";

export const pic = (name: string) => `/coverage-access/${name}.webp`;

/** Status dot colours shared by the chip and card lists. */
export const dot = {
  grey: "bg-[#8a94a6]",
  violet: "bg-[#7657e8]",
  amber: "bg-[#b7791f]",
  blue: "bg-[#4267d5]",
  green: "bg-[#1f8a4c]",
  red: "bg-[#c0392b]",
} as const;

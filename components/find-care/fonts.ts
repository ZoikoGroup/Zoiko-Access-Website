import { Inter, Poppins, Sora } from "next/font/google";

// The Figma design for this page uses three families:
// Inter (body / links), Poppins (headings) and Sora (form label + FAQ).
export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-fc-inter",
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-fc-poppins",
  display: "swap",
});

export const sora = Sora({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-fc-sora",
  display: "swap",
});

export const fontInter = "font-[family-name:var(--font-fc-inter)]";
export const fontPoppins = "font-[family-name:var(--font-fc-poppins)]";
export const fontSora = "font-[family-name:var(--font-fc-sora)]";

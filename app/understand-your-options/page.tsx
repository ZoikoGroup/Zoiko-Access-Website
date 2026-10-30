import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import {
  Hero,
  ChildPaths,
  HowItWorksPreview,
  ServicesSection,
  PathwaysSection,
  LocationSection,
  InformationQuality,
  DecisionResponsibility,
  DecisionHelp,
  ComparisonSection,
  FaqSection,
  CtaSection,
} from "@/components/understand-your-options";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Understand Your Options | Zoiko Access",
  description:
    "Learn how Zoiko Access works, what kinds of healthcare services exist and how care pathways connect organizations before taking any next steps.",
};

export default function UnderstandYourOptionsPage() {
  return (
    <main className={`${inter.className} ${poppins.variable} w-full`}>
      <Hero />
      <ChildPaths />
      <HowItWorksPreview />
      <ServicesSection />
      <PathwaysSection />
      <LocationSection />
      <InformationQuality />
      <DecisionResponsibility />
      <DecisionHelp />
      <ComparisonSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}

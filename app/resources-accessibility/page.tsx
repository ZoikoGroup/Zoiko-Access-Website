import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import {
  AccessibilityHero,
  UseYourWayGrid,
  SupportedAccommodationsSection,
  TaskByTaskExpectations,
  ReportBarrierSafelySection,
  KnownLimitationsSection,
  AlternativeFormatsSection,
  StandardsAndTestingSection,
  FeedbackPrivacyCard,
  AccessibilityFaqSection,
  SafeNextStepsResources,
  AccessForEveryoneCta,
} from "@/components/resources-accessibility";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Accessibility | Resources | Zoiko Access",
  description:
    "Accessibility principles, page controls, keyboard and assistive technology support across Zoiko Access.",
};

export default function ResourcesAccessibilityPage() {
  return (
    <main className={`${inter.className} ${poppins.variable} w-full`}>
      <AccessibilityHero />
      <UseYourWayGrid />
      <SupportedAccommodationsSection />
      <TaskByTaskExpectations />
      <ReportBarrierSafelySection />
      <KnownLimitationsSection />
      <AlternativeFormatsSection />
      <StandardsAndTestingSection />
      <FeedbackPrivacyCard />
      <AccessibilityFaqSection />
      <SafeNextStepsResources />
      <AccessForEveryoneCta />
    </main>
  );
}

import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import {
  FaqHeroSection,
  TopQuestionsGrid,
  BrowseByTopicSection,
  AudienceBehindQuestions,
  AvailabilityGuidanceSection,
  TwoBoundariesToRemember,
  KeepExploringResources,
  StillHaveQuestionCta,
} from "@/components/resources-frequently-asked-questions";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Resources | Zoiko Access",
  description:
    "Clear explanations of healthcare navigation, permissions, coordination and the availability of supported services on Zoiko Access.",
};

export default function ResourcesFrequentlyAskedQuestionsPage() {
  return (
    <main className={`${inter.className} ${poppins.variable} w-full`}>
      <FaqHeroSection />
      <TopQuestionsGrid />
      <BrowseByTopicSection />
      <AudienceBehindQuestions />
      <AvailabilityGuidanceSection />
      <TwoBoundariesToRemember />
      <KeepExploringResources />
      <StillHaveQuestionCta />
    </main>
  );
}

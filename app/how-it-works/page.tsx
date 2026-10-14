import type { Metadata } from "next";
import {
  HowItWorksHero,
  FourStepsOverview,
  Step1Location,
  Step2Information,
  Step3NextStep,
  Step4Status,
  SafetyAndPrivacy,
  OnwardJourney,
  HowItWorksFaq,
  HowItWorksCta,
} from "@/components/how-it-works";

export const metadata: Metadata = {
  title: "How Zoiko Access Works | Healthcare Access & Navigation",
  description:
    "Learn how Zoiko Access helps people understand healthcare options and coordinate supported next steps across four transparent stages.",
};

export default function HowItWorksPage() {
  return (
    <main className="w-full">
      <HowItWorksHero />
      <FourStepsOverview />
      <Step1Location />
      <Step2Information />
      <Step3NextStep />
      <Step4Status />
      <SafetyAndPrivacy />
      <OnwardJourney />
      <HowItWorksFaq />
      <HowItWorksCta />
    </main>
  );
}

import type { Metadata } from "next";
import {
  JourneyHero,
  OneStatusLanguage,
  JourneyParts,
  ThreeLayers,
  StatusVocabulary,
  YouDecideWhoSees,
  RegionalAvailability,
  RisksSafeguards,
  JourneyFaq,
  StartWithUnderstanding,
} from "@/components/manage-your-journey";

export const metadata: Metadata = {
  title: "Manage your journey | Zoiko Access",
  description:
    "See every step of your appointments, referrals and messages, and know who owns each status.",
};

export default function PatientsManageYourJourneyPage() {
  return (
    <main>
      <JourneyHero />
      <OneStatusLanguage />
      <JourneyParts />
      <ThreeLayers />
      <StatusVocabulary />
      <YouDecideWhoSees />
      <RegionalAvailability />
      <RisksSafeguards />
      <JourneyFaq />
      <StartWithUnderstanding />
    </main>
  );
}

import {
  AccessibleHelpHero,
  WaysToGetHelp,
  AccessibilityFeatures,
  KeyboardGuide,
  WhoToAsk,
  EmergencyNoticeBanner,
  CaregiverSupport,
  SupportAvailability,
  CommonQuestionsHelp,
  StartAlwaysAvailable,
} from "@/components/accessible-help";

export default function AccessibleHelpPage() {
  return (
    <main>
      <AccessibleHelpHero />
      <WaysToGetHelp />
      <AccessibilityFeatures />
      <KeyboardGuide />
      <WhoToAsk />
      <EmergencyNoticeBanner />
      <CaregiverSupport />
      <SupportAvailability />
      <CommonQuestionsHelp />
      <StartAlwaysAvailable />
    </main>
  );
}

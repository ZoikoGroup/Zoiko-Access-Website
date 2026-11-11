import {
  HelpCenterHero,
  RoleBasedHelpCenter,
  GuidedPathwaySteps,
  FeaturedAnswersGrid,
  ArticleStructureTemplate,
  AvailabilityMarketState,
  PrivacySafetySupport,
  HelpCenterFAQ,
  OtherResourcesGrid,
  RightAnswerCTA,
} from "@/components/help-center";

export default function HelpCenterPage() {
  return (
    <main>
      <HelpCenterHero />
      <RoleBasedHelpCenter />
      <GuidedPathwaySteps />
      <FeaturedAnswersGrid />
      <ArticleStructureTemplate />
      <AvailabilityMarketState />
      <PrivacySafetySupport />
      <HelpCenterFAQ />
      <OtherResourcesGrid />
      <RightAnswerCTA />
    </main>
  );
}

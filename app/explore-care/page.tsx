import {
  ExploreCareHero,
  ExploreStepCards,
  WhatYouCanExplore,
  NavigationSteps,
  ChooseYourNextPath,
  CareJourneyInvolvement,
  LocalAvailabilityEvidence,
  PerspectiveCards,
  ClarityResponsibleNavigation,
  ExploreFaq,
  EducationBeforeActionCta,
} from "@/components/explore-care";

export default function ExploreCarePage() {
  return (
    <main>
      <ExploreCareHero />
      <ExploreStepCards />
      <WhatYouCanExplore />
      <NavigationSteps />
      <ChooseYourNextPath />
      <CareJourneyInvolvement />
      <LocalAvailabilityEvidence />
      <PerspectiveCards />
      <ClarityResponsibleNavigation />
      <ExploreFaq />
      <EducationBeforeActionCta />
    </main>
  );
}

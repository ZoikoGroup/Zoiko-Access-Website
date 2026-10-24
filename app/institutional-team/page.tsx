import type { Metadata } from "next";
import {
  InstitutionalHero,
  ContactStatusBand,
  DestinationGuide,
  EvaluationSteps,
  CoverageSection,
  DiscussionTopics,
  ResponsibilityCards,
  SafeShare,
  Outcomes,
  StraightAnswers,
  ResourcesGrid,
  InstitutionalCta,
} from "@/components/institutional-team";
import {
  inter,
  poppins,
  sora,
  fontInter,
} from "@/components/institutional-team/fonts";

export const metadata: Metadata = {
  title: "Speak with our institutional team | Zoiko Access",
  description:
    "For hospitals, clinics and qualified organizations exploring participation, Zoiko Access provides information about its approach and, where an institutional contact service is operating, a route to request a conversation.",
};

export default function InstitutionalTeamPage() {
  return (
    <main
      className={`${inter.variable} ${poppins.variable} ${sora.variable} ${fontInter} w-full`}
    >
      <InstitutionalHero />
      <ContactStatusBand />
      <DestinationGuide />
      <EvaluationSteps />
      <CoverageSection />
      <DiscussionTopics />
      <ResponsibilityCards />
      <SafeShare />
      <Outcomes />
      <StraightAnswers />
      <ResourcesGrid />
      <InstitutionalCta />
    </main>
  );
}

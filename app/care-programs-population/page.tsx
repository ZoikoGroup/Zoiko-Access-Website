import type { Metadata } from "next";
import { inter, poppins, fontInter } from "@/components/find-care/fonts";
import {
  ProgramsHero,
  ProgramDefinition,
  AudiencePathways,
  OperatingModel,
  EligibilityStates,
  ParticipantExperience,
  ResponsibilityOwners,
  SponsorPrivacy,
  ReportingMeasures,
  RegionalAvailability,
  ImplementationPreview,
  ProgramFaq,
  ExploreSolutions,
} from "@/components/care-programs-population";

export const metadata: Metadata = {
  title: "Care Programs & Population Access | Zoiko Access",
  description:
    "How organizations can plan, govern and communicate healthcare access programs with explicit roles, lawful permissions and clearly defined next steps.",
};

export default function CareProgramsPopulationPage() {
  return (
    <main className={`${inter.variable} ${poppins.variable} ${fontInter}`}>
      <ProgramsHero />
      <ProgramDefinition />
      <AudiencePathways />
      <OperatingModel />
      <EligibilityStates />
      <ParticipantExperience />
      <ResponsibilityOwners />
      <SponsorPrivacy />
      <ReportingMeasures />
      <RegionalAvailability />
      <ImplementationPreview />
      <ProgramFaq />
      <ExploreSolutions />
    </main>
  );
}

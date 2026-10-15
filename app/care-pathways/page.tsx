import {
  CarePathwaysHero,
  ClearMeanings,
  FourStepModel,
  IllustrativeJourneys,
  StatusLiteracy,
  ParticipantRoles,
  LocationActivation,
  ClinicalAuthority,
  UsefulTerms,
  PathwaysFaq,
  NextStepCta,
} from "@/components/care-pathways";
import { Inter } from "next/font/google";

// The Figma design for this page is set in Inter.
const inter = Inter({ subsets: ["latin"] });

export default function CarePathwaysPage() {
  return (
    <main className={inter.className}>
      <CarePathwaysHero />
      <ClearMeanings />
      <FourStepModel />
      <IllustrativeJourneys />
      <StatusLiteracy />
      <ParticipantRoles />
      <LocationActivation />
      <ClinicalAuthority />
      <UsefulTerms />
      <PathwaysFaq />
      <NextStepCta />
    </main>
  );
}

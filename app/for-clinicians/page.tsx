import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import {
  CliniciansHero,
  CliniciansNoticeBar,
  WholeCareTeam,
  CoordinationAreas,
  CoordinationStepsMatrix,
  StatusGlossary,
  HandoffGuardrails,
  CoordinationVsClinical,
  LocalAvailability,
  ParticipationRequirements,
  TrustAndBoundaries,
  CliniciansFaq,
  CliniciansCta,
} from "@/components/for-clinicians";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "For Clinicians | Clinical Coordination | Zoiko Access",
  description:
    "Clearer care coordination, with clinical responsibility where it belongs. Understand referrals, handoffs and follow-up across participating services.",
};

export default function ForCliniciansPage() {
  return (
    <main className={`${inter.className} ${poppins.variable} w-full`}>
      <CliniciansHero />
      <CliniciansNoticeBar />
      <WholeCareTeam />
      <CoordinationAreas />
      <CoordinationStepsMatrix />
      <StatusGlossary />
      <HandoffGuardrails />
      <CoordinationVsClinical />
      <LocalAvailability />
      <ParticipationRequirements />
      <TrustAndBoundaries />
      <CliniciansFaq />
      <CliniciansCta />
    </main>
  );
}

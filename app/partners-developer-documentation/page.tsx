import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import {
  DeveloperDocumentationHero,
  ChooseIntegrationTopic,
  GettingStartedSteps,
  ApiReferenceIndex,
  NarrowAccessControls,
  TraceableRecordAnatomy,
  SdkEventConcepts,
  NonSensitiveExample,
  SandboxGatedAccess,
  VersionLabelStandards,
  SafeFailureStages,
  QuickDirectAnswersFaq,
  WhereToGoNextSteps,
} from "@/components/partners-developer-documentation";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Developer Documentation | Partners & Developers | Zoiko Access",
  description:
    "Explore how healthcare integrations can be evaluated, secured and governed. Conceptual guides, integration architecture, security, and developer specifications.",
};

export default function PartnersDeveloperDocumentationPage() {
  return (
    <main className={`${inter.className} ${poppins.variable} w-full`}>
      <DeveloperDocumentationHero />
      <ChooseIntegrationTopic />
      <GettingStartedSteps />
      <ApiReferenceIndex />
      <NarrowAccessControls />
      <TraceableRecordAnatomy />
      <SdkEventConcepts />
      <NonSensitiveExample />
      <SandboxGatedAccess />
      <VersionLabelStandards />
      <SafeFailureStages />
      <QuickDirectAnswersFaq />
      <WhereToGoNextSteps />
    </main>
  );
}

import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import {
  WorklistHero,
  WholeCareTeamWorklists,
  TaskLifecycleSteps,
  ConceptualWorklistTable,
  TaskDetailAnatomy,
  DueWindowJudgment,
  ProvenanceConfusion,
  HandoffExceptions,
  TaskAccessPermissions,
  SourceSystemsRecord,
  ClinicianFaqAccordion,
  TaskWorklistCta,
} from "@/components/task-worklist-experience";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Task & Worklist Experience | For Clinicians | Zoiko Access",
  description:
    "Clear tasks. Accountable follow-through. Discover how assigned care coordination work is organized with clear owners, evidence-based progress, and visible next steps.",
};

export default function TaskWorklistExperiencePage() {
  return (
    <main className={`${inter.className} ${poppins.variable} w-full`}>
      <WorklistHero />
      <WholeCareTeamWorklists />
      <TaskLifecycleSteps />
      <ConceptualWorklistTable />
      <TaskDetailAnatomy />
      <DueWindowJudgment />
      <ProvenanceConfusion />
      <HandoffExceptions />
      <TaskAccessPermissions />
      <SourceSystemsRecord />
      <ClinicianFaqAccordion />
      <TaskWorklistCta />
    </main>
  );
}

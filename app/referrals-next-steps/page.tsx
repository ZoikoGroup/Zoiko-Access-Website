import {
  ReferralsHero,
  FiveStatuses,
  StatusTimeline,
  ReferralView,
  ResponsibleNext,
  WhoseInformation,
  HonestAbsence,
  SupportingMaterials,
  Alerts,
  ChangeHistory,
  RightPlace,
  ReferralsFaq,
  ReferralsCta,
} from "@/components/referrals-next-steps";
import { Inter, Poppins } from "next/font/google";

// The Figma design for this page uses Inter for text and Poppins for headings.
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
});

export default function ReferralsNextStepsPage() {
  return (
    <main className={`${inter.className} ${poppins.variable}`}>
      <ReferralsHero />
      <StatusTimeline />
      <FiveStatuses />    
      <ReferralView />
      <ResponsibleNext />
      <HonestAbsence />
      <WhoseInformation />
      <SupportingMaterials />
      <RightPlace />
      <Alerts />
      <ChangeHistory />
      <ReferralsFaq />
      <ReferralsCta />
    </main>
  );
}

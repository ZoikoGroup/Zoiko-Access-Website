import {
  AccountHero,
  BeforeYouStart,
  MayHelpWith,
  DoesNotDo,
  AccountType,
  SecureSetup,
  WhenThingsGoWrong,
  NeedAssistance,
  AccountFaq,
  AccountCta,
} from "@/components/create-patient-account";
import { Plus_Jakarta_Sans, Poppins } from "next/font/google";

// The Figma design for this page uses Plus Jakarta Sans for text and Poppins for headings.
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
});

export default function CreatePatientAccountPage() {
  return (
    <main className={`${jakarta.className} ${poppins.variable}`}>
      <AccountHero />
      <MayHelpWith />
      <BeforeYouStart />
      <DoesNotDo />
      <AccountType />
      
      <WhenThingsGoWrong />
      <SecureSetup />
      <NeedAssistance />
      <AccountFaq />
      <AccountCta />
    </main>
  );
}

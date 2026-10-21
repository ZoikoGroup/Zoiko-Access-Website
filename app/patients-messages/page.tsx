import {
  MessagesHero,
  ThreeThings,
  StatusMeaning,
  ExampleInbox,
  CareLocation,
  NotificationPreferences,
  Caregivers,
  GettingHelp,
  MessagesFaq,
  MessagesCta,
} from "@/components/patients-messages";
import { Inter, Poppins } from "next/font/google";

// The Figma design for this page uses Inter for text and Poppins for headings.
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
});

export default function PatientsMessagesPage() {
  return (
    <main className={`${inter.className} ${poppins.variable}`}>
      <MessagesHero />
      <ThreeThings />
      <StatusMeaning />
      <ExampleInbox />
      <CareLocation />
      <NotificationPreferences />
      <Caregivers />
      <GettingHelp />
      <MessagesFaq />
      <MessagesCta />
    </main>
  );
}

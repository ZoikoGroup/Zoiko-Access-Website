import {
  AppointmentsHero,
  StatusLegend,
  AppointmentList,
  ThreeLayers,
  Actions,
  AfterYouSubmit,
  RemindersCaregivers,
  WhenThingsGoWrong,
  ContactProvider,
  AppointmentsFaq,
  AppointmentsCta,
} from "@/components/appointments-requests";
import { Plus_Jakarta_Sans, Poppins } from "next/font/google";

// The Figma design for this page uses Plus Jakarta Sans for text and Poppins for headings.
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
});

export default function AppointmentsRequestsPage() {
  return (
    <main className={`${jakarta.className} ${poppins.variable}`}>
      <AppointmentsHero />
      <StatusLegend />
      <AppointmentList />
      <ThreeLayers />
      <Actions />
      <AfterYouSubmit />
      <RemindersCaregivers />
      <WhenThingsGoWrong />
      <ContactProvider />
      <AppointmentsFaq />
      <AppointmentsCta />
    </main>
  );
}

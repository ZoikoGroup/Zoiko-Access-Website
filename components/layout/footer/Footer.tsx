import FooterBottom from "./FooterBottom";
import FooterInfo from "./FooterInfo";
import FooterLinkGrid from "./FooterLinkGrid";
import FooterPreferences from "./FooterPreferences";

export default function Footer() {
  return (
    <footer className="w-full font-sans">
      <FooterLinkGrid />
      <FooterInfo />
      <FooterPreferences />
      <FooterBottom />
    </footer>
  );
}

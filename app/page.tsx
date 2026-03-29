import { AboutSection, ContactSection, ExperienceSection, HeroSection, SkillsSection } from "../components/sections";
import "./globals.css";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}

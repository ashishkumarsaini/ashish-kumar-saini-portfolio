'use client';
import { useSearchParams } from "next/navigation";
import { AboutSection, ContactSection, ExperienceSection, HeroSection, SkillsSection } from "../components/sections";
import "./globals.css";
import HomepageV2 from "./components/homepage";

export default function Home() {
  const searchParams = useSearchParams();

  if (searchParams.get('v2') === 'true') {
    return <HomepageV2 />
  }

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

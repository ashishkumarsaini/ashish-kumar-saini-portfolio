import { Header } from "@/components/header";
import { AboutSection, ContactSection, ExperienceSection, HeroSection, SkillsSection } from "../components/sections";
import { Footer } from "@/components/footer";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ['400', '700']
});

export default function Home() {
  return (
    <body
      className={`${roboto.className} antialiased dark`}
    >
      <Header />
      <main className="max-w-[1480px] mx-auto">
        <div>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </body>
  );
}

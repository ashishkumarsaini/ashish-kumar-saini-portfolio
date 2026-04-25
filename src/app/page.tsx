import { AboutSection } from "./components/about-section";
import { HeroSection } from "./components/hero-section";

const HomePage = () => {
  return (
    <div>
      <section className="pt-5 pb-25">
        <HeroSection />
      </section>
      <section className="pt-5 pb-25">
        <AboutSection />
      </section>
    </div>
  );
}

export default HomePage;
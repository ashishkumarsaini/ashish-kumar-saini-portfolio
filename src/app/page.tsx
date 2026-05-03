import { AboutSection } from "./components/about-section";
import { HeroSection } from "./components/hero-section";
import { TestimonialsSection } from "./components/testimonials-section";

const HomePage = () => {
  return (
    <div>
      <section className="pt-5 pb-25">
        <HeroSection />
      </section>
      <section className="pt-5 pb-25">
        <AboutSection />
      </section>
      <section className="pt-5 pb-25">
        <TestimonialsSection />
      </section>
    </div>
  );
}

export default HomePage;

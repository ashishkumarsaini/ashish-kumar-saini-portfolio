import { AboutSection } from "./components/about-section/about-section";
import { HeroSection } from "./components/hero-section/hero-section";
import { TestimonialSection } from "./components/testimonial-section/testimonial-section";

const Page = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <TestimonialSection />
    </div>
  )
};

export default Page;

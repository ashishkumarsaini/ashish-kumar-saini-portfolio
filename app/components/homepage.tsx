'use client';
import { useSearchParams } from "next/navigation";
import { AboutSection } from "./about-section/about-section";
import { HeroSection } from "./hero-section/hero-section";
import { TestimonialSection } from "./testimonial-section/testimonial-section";
import { CurrentHomePage } from "./current-homepage";

const Homepage = () => {
  const searchParams = useSearchParams();

  if (searchParams.get('v2') === 'true') {
    return <div>
      <HeroSection />
      <AboutSection />
      <TestimonialSection />
    </div>
  }

  return (
    <CurrentHomePage />
  );
};

export default Homepage;

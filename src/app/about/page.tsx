import { Certifications, ExperiencesSection } from "./components";
import { AboutHeroSection } from "./components/hero-section";
import { AboutDetailsSection } from "./components/details-section";


const AboutPage = () => {
  return (
    <div>
      {/* hero */}
      <section className="pt-5 pb-25">
        <AboutHeroSection />
      </section>
      <section className="pt-10 pb-25">
        <AboutDetailsSection />
      </section>
      <section className="pt-10 pb-25">
        <ExperiencesSection />
      </section>
      <section className="pt-10 pb-25">
        <Certifications />
      </section>
    </div>
  )
}

export default AboutPage;

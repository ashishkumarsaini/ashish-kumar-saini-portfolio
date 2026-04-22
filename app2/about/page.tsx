import { AboutSectionMain } from "./components/about-section";
import { ExploreProjectsSection } from "./components/explore-projects-section";
import { CertificationSection } from "./components/certification-section";

const AboutMePage = () => {
  return (
    <div>
      <section className="pt-8 md:pt-10 lg:pt-12">
        <AboutSectionMain />
        <ExploreProjectsSection />
        <CertificationSection />
      </section>
    </div>
  )
}

export default AboutMePage;
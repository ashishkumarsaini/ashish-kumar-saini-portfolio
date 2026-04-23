import { FooterContactSection } from "./footer-contact-section"
import { FooterNavSection } from "./footer-nav-section"

export const Footer = () => {
  return (
    <div className="mx-auto max-w-[1250px] p-4">
      <FooterContactSection />
      <FooterNavSection />
    </div>
  )
}
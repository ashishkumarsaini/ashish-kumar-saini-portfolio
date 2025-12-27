import { Icons, SectionId } from "./contants";

export const homeSectionData = {
  sectionHeading: "Home",
  sectionId: SectionId.hero,
  name: "Ashish Kumar Saini",
  title: "Full Stack Developer",
  description: "I craft seamless digital experiences from frontend to backend, specializing in React, Node.js, and modern web technologies.",
  cta: [
    {title: "View My Work", sectionId: SectionId.projects, isMainCTA: true},
    {title: "Get In Touch", sectionId: SectionId.contact, isMainCTA: false}
  ],
  links: [
    {iconName: Icons.github, href: "https://github.com/ashishkumarsaini"},
    {iconName: Icons.linkedIn, href: "https://www.linkedin.com/in/devaksaini/"},
    {iconName: Icons.mail, href: "mailto:mashish2608@gmail.com"},
  ]
}
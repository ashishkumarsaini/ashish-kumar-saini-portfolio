import { Icons, SectionId } from "./contants";

export const aboutSectionData = {
  sectionHeading: "About Me",
  sectionId: SectionId.about,
  sectionDescription: "A passionate developer with 5+ years of experience building modern web applications",
  cards: [
    {
      iconName: Icons.laptop,
      title: "Frontend Expert",
      description: "Building responsive, accessible UIs with React, TypeScript, and modern CSS frameworks"
    },
    {
      iconName: Icons.database,
      title: "Backend Proficient",
      description: "Designing scalable APIs and databases with Node.js, and MongoDB"
    },
    {
      iconName: Icons.code,
      title: "Full Stack Mindset",
      description: "Bridging the gap between design and implementation with end-to-end solutions"
    }
  ],
  aboutMeDescription: [
    `Hey!`,
    `I’m Ashish — a Full-Stack Developer passionate about crafting digital products that blend performance, accessibility, and great design. Over the last 5+ years, I’ve worked with teams to ship web and mobile applications for retail, music, and consumer platforms — from eCommerce storefronts like Tory Burch & 1800Flowers to mobile apps built with React Native.`,
    `I love solving complex UI challenges, optimizing performance, and writing code that scales. I believe great software isn’t just about features — it’s about how it feels in a user’s hands.`,
    `Outside of work, you’ll find me experimenting with new frameworks, learning better product patterns, or building side projects just for fun.`
  ]
}
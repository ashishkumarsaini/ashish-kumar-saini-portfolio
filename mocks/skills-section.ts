import { Icons } from "./contants";

export const skillSectionData = {
  skillsCards: [
    {
      title: "Frontend Development",
      icon: Icons.code,
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Shadcn", level: 90 },
        { name: "Redux", level: 95 },
        { name: "Storybook", level: 85 },
        { name: "React Native", level: 80}
      ]
    },
    {
      title: "Backend & API's",
      icon: Icons.server,
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express.js", level: 85 },
        { name: "GraphQL", level: 75 },
        { name: "REST APIs", level: 95 },
        { name: "WebSockets", level: 70 },
        { name: "OAuth & JWT", level: 85 }
      ]
    },
    {
      title: "Databases",
      icon: Icons.database,
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 80 }
      ]
    },
    {
      title: "Tools",
      icon: Icons.cloud,
      skills: [
        { name: "Git", level: 90 },
        { name: "Vercel", level: 90 },
        { name: "CI/CD", level: 80 },
        { name: "Sentry", level: 85 },
        { name: "Lighthouse", level: 85}
      ]
    }
  ]
};
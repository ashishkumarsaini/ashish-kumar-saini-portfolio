import { Icons } from "./contants";

export const skillSectionData = {
  skillsCards: [
    {
      title: "Frontend",
      icon: Icons.code,
      skills: [
        { name: "React", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Vue.js", level: 75 },
        { name: "Redux", level: 90 }
      ]
    },
    {
      title: "Backend",
      icon: Icons.server,
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Express", level: 85 },
        { name: "GraphQL", level: 75 },
        { name: "REST APIs", level: 95 },
        { name: "WebSockets", level: 70 }
      ]
    },
    {
      title: "Database & Tools",
      icon: Icons.database,
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 80 }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: Icons.cloud,
      skills: [
        { name: "Git", level: 95 },
        { name: "Vercel", level: 90 },
        { name: "CI/CD", level: 80 }
      ]
    }
  ]
};
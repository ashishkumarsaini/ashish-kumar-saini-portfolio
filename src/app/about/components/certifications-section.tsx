import { Heading, HeadingLevel, HeadingSize, Text, TextSize } from "@/components/typography";
import { cn } from "@/lib/utils";

enum CourseStatus {
  inProgress = 'In Progress',
  completed = 'Completed',
  upcomming = "Upcomming"
}

export const Certifications = () => {
  const certifications = [
    {
      title: "Web Dev Cohort 2026",
      org: "ChaiCode.com",
      status: CourseStatus.inProgress,
      desc: "Focused on full-stack development with modern tools and real-world projects.",
      gridClass: 'col-span-4 row-span-6'
    },
    {
      title: "Mobile Dev Cohort 2026",
      org: "ChaiCode.com",
      status: CourseStatus.inProgress,
      desc: "Focused on full-stack development with modern tools and real-world projects.",
      gridClass: 'col-span-4 row-span-3 col-start-5'
    },
    {
      title: "React Native Development",
      org: "LearnCodeOnline.in",
      status: CourseStatus.completed,
      desc: "Built cross-platform mobile apps using React Native and modern UI patterns.",
      gridClass: 'col-span-4 row-span-3 col-start-9'
    },
    {
      title: "Full Stack MERN Bootcamp",
      org: "LearnCodeOnline.in",
      status: CourseStatus.completed,
      desc: "Hands-on experience with MongoDB, Express, React, and Node.js.",
      gridClass: 'col-span-8 row-span-3 col-start-5 row-start-4'
    }
  ];

  return (
    <div>
      <div className="max-w-6xl mx-auto">

        <Heading level={HeadingLevel.h2} size={HeadingSize.lg} className="font-semibold text-center">
          Certifications
        </Heading>

        <div className="max-w-5xl mx-auto space-y-6 mt-10">
          <div className="grid grid-cols-12 grid-rows-6 gap-6">
            {certifications.map((item, index) => (
              <div
                key={index}
                className={cn(`min-h-[250px] rounded-lg p-4 h-full flex flex-col justify-between shadow-sm border bg-secondary`, item.gridClass, { 'bg-primary text-secondary': item.status !== CourseStatus.completed })}
              >
                <div className="flex flex-col gap-1">
                  <Text size={TextSize.sm}>{item.status}</Text>
                  <Heading>{item.title}</Heading>
                  <Text size={TextSize.sm}>{item.desc}</Text>
                </div>
                <div className="mt-6">
                  <Text size={TextSize.sm}>{item.org}</Text>
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}
import { Badge, BadgeVariants } from "@/components/ui/badge";
import { Card } from "@/components/ui/card"
import { motion } from "motion/react";
import { FC } from "react";

const cardVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

type ExperienceSectionCardProps = {
  experience: {
    title: string;
    organization: string;
    period: string;
    description: string;
    achievements: string[];
    technologies: string[];
  }
}

export const ExperienceSectionCard: FC<ExperienceSectionCardProps> = ({experience}) => {
  return (
    <motion.div initial="hidden"
          animate="visible" variants={cardVariants}>
      <Card.CardContainer className="bg-card hover:shadow-lg transition-shadow">
        <Card.CardHeader>
          <div className="flex justify-between items-start gap-4">
            <div>
              <Card.CardTitle>{experience.title}</Card.CardTitle>
              <Card.CardDescription>{experience.organization}</Card.CardDescription>
            </div>
            <Badge variant={BadgeVariants.SECONDARY}>{experience.period}</Badge>
          </div>
        </Card.CardHeader>
        <Card.CardContent className="space-y-4">
          <p className="text-muted-foreground">
            {experience.description}
          </p>
          <div>
            <h4 className="mb-2">Key Achievements:</h4>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {experience.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <Badge key={tech} variant={BadgeVariants.OUTLINE}>
                {tech}
              </Badge>
            ))}
          </div>
        </Card.CardContent>
      </Card.CardContainer>
    </motion.div>
  )
}
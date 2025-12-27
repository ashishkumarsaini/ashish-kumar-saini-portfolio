import { Card } from "@/components/ui/card";
import { Icons } from "@/mocks/contants";
import { FC } from "react";
import { motion } from "motion/react";
import { getIcon } from "@/components/icons";

type SkillsSectionCardProps = {
  title: string,
  icon: Icons,
  skills: {name: string, level: number}[]
};
export const SkillsSectionCard: FC<SkillsSectionCardProps> = ({title, icon, skills})=>{

  if(!skills.length){
    return;
  }

  return (
    <Card.CardContainer className="bg-card hover:shadow-xl transition-all duration-300 h-full group">
      <Card.CardHeader>
        <Card.CardTitle className="flex items-center gap-3">
          <div className={`h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center`}>
            {getIcon(icon, {className: "h-6 w-6"})}
          </div>
          {title}
        </Card.CardTitle>
      </Card.CardHeader>
      <Card.CardContent className="space-y-4">
        {skills.map((skill, skillIndex) => (
          <motion.div
            key={skillIndex}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ delay: skillIndex * 0.1 }}
            className="space-y-2"
          >
            <div className="flex justify-between items-center">
              <span className="text-sm">{skill.name}</span>
              <span className="text-xs text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: false }}
                transition={{ duration: 1, delay: skillIndex * 0.1, ease: "easeOut" }}
                className="h-full bg-primary rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </Card.CardContent>
    </Card.CardContainer>
  )
}
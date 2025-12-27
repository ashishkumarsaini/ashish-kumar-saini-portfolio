'use client';

import { skillSectionData } from "@/mocks/skills-section";
import { motion } from "motion/react";
import { SkillsSectionCard } from "./skills-section-cards";

export const SkillsSection = () => {
  const {skillsCards} = skillSectionData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-4 py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground">
            Tools and technologies I work with
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {skillsCards.map(({title, icon, skills}, index) => (
            <motion.div key={index} variants={cardVariants}>
              <SkillsSectionCard title={title} icon={icon} skills={skills}/>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
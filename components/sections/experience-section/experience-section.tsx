'use client';

import { motion } from "motion/react";

import { ExperienceSectionTabs } from "./experience-section-tabs";
import { useExperienceSectionTabs } from "./use-experience-section-tabs";
import { ExperienceSectionTimeline } from "./experience-section-timeline";
import { ExperienceSectionCard } from "./experience-section-card";
import { experienceSectionData } from "@/mocks/experience-section";

export const ExperienceSection = ()=>{
  const {activeTab, handleTabChange} = useExperienceSectionTabs();

  const {experiences, education} = experienceSectionData;

  const experienceItems = experiences.map((experience)=> <ExperienceSectionCard key={experience.title} experience={experience} />);
  const educationItems = education.map((experience)=> <ExperienceSectionCard key={experience.title} experience={experience} />);

  return (
    <section
      id="timeline"
      className="flex items-center justify-center px-4 py-20 bg-muted/30"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl">Experience & Education</h2>
          <p className="text-xl text-muted-foreground">
            My professional journey and academic background
          </p>
        </motion.div>
        <ExperienceSectionTabs activeTab={activeTab} handleTabChange={handleTabChange} />
        {
          activeTab === 'experience'
          ? <ExperienceSectionTimeline>{experienceItems}</ExperienceSectionTimeline>
          : <ExperienceSectionTimeline>{educationItems}</ExperienceSectionTimeline>
        }
      </div>
    </section>
  );
}
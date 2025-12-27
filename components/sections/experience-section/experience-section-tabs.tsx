'use client';

import { getIcon } from "@/components/icons";
import { Icons } from "@/mocks/contants";
import { motion } from "motion/react"
import { FC } from "react"
import { ExperienceTabsTitle } from "./use-experience-section-tabs";



type ExperienceSectionTabsProps = {
  activeTab: ExperienceTabsTitle;
  handleTabChange: (tabName: ExperienceTabsTitle) => void;
}

export const ExperienceSectionTabs: FC<ExperienceSectionTabsProps> = ({activeTab, handleTabChange}) => {
  return (
    <div className="flex justify-center gap-4 mb-12">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleTabChange(ExperienceTabsTitle.experience)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
              activeTab === 'experience'
                ? 'bg-primary text-primary-foreground'
                : 'bg-card text-foreground hover:bg-accent'
            }`}
          >
            {getIcon(Icons.briefcase, {className: "h-5 w-5"})}
            Work Experience
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleTabChange(ExperienceTabsTitle.education)}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
              activeTab === 'education'
                ? 'bg-primary text-primary-foreground'
                : 'bg-card text-foreground hover:bg-accent'
            }`}
          >
            {getIcon(Icons.graduationCap, {className: "h-5 w-5"})}
            Education
          </motion.button>
        </div>
  )
}
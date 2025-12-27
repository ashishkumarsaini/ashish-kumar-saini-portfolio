import { useState } from "react";

export enum ExperienceTabsTitle  {
  experience='experience',
  education='education'
}

export const useExperienceSectionTabs = () => {
    const [activeTab, setActiveTab] = useState<ExperienceTabsTitle>(
    ExperienceTabsTitle.experience
  );

  const handleTabChange = (tabName:ExperienceTabsTitle)=>{
    setActiveTab(tabName)
  }

  return {
    activeTab,
    handleTabChange
  }
}
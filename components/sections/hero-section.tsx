"use client";

import { motion } from "motion/react";
import { Button, ButtonSizes, ButtonVariants } from "../ui/button";
import {homeSectionData} from '../../mocks/home-section';
import { getIcon } from "../icons";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  element?.scrollIntoView({ behavior: "smooth" });
};

export const HeroSection = ()=>{
  return (
    <section className="min-h-screen flex items-center justify-center" id="hero">
      <div className="text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block"
          >
            <span className="text-muted-foreground text-2xl">{`Hi, I'm`}</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold"
          >
            {homeSectionData.name}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold text-primary/80"
          >
            {homeSectionData.title}
          </motion.h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
        >
          {homeSectionData.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex gap-4 justify-center flex-wrap"
        >
           {homeSectionData.cta.map(({title, sectionId}) => (
              <motion.div key={title} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size={ButtonSizes.LARGE} onClick={() => scrollToSection(sectionId)}>
                  {title}
                </Button>
              </motion.div>
            ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex gap-4 justify-center pt-4"
        >
          {homeSectionData.links.map(({iconName, href}, index) => {
            const Icon = getIcon(iconName);

            if(!Icon){
              return;
            };

            return (
              <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Button variant={ButtonVariants.GHOST} size="icon" asChild>
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      <Icon className="h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 0.8, duration: 0.6 },
          y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
        }}
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </motion.button> */}
    </section>
  );
}
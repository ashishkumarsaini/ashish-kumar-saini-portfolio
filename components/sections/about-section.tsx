"use client";

import { motion } from "motion/react";
import { Card } from "../ui/card";
import { aboutSectionData } from "@/mocks/about-section";
import { getIcon } from "../icons";

export const AboutSection = () => {
  const {sectionHeading, sectionDescription, cards, aboutMeDescription} = aboutSectionData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold">{sectionHeading}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {sectionDescription}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {cards.map(({title, description, iconName}, index) => {
            const Icon = getIcon(iconName);
            if(!Icon){
              return;
            }

            return (
              <motion.div key={index} variants={cardVariants}>
                <Card.CardContainer className="bg-dark hover:bg-accent transition-colors h-full group">
                  <Card.CardContent className="p-6 space-y-4">
                    <div

                      className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center"
                    >
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl">{title}</h3>
                    <p className="text-muted-foreground">
                      {description}
                    </p>
                  </Card.CardContent>
                </Card.CardContainer>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card.CardContainer className="hover:shadow-lg transition-shadow">
            <Card.CardContent className="p-8">
              {aboutMeDescription.map((description, index)=>(
                <p key={index} className="text-lg leading-relaxed text-muted-foreground pb-5">
                  {description}
                </p>
              ))}
            </Card.CardContent>
          </Card.CardContainer>
        </motion.div>
      </div>
    </section>
  );
}
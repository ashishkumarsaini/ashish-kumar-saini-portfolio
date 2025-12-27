"use client";

import { contactSectionData } from "@/mocks/contact-section";
import { Card } from "../../ui/card";

import { motion } from "motion/react";
import { getIcon } from "@/components/icons";

export const ContactSection = () => {
  const {infoItems} = contactSectionData;

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-4 py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl">Get In Touch</h2>
          <p className="text-xl text-muted-foreground">
            {`Have a project in mind? Let's work together`}
          </p>
        </motion.div>
        <div className="max-w-xl w-full mx-auto">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <Card.CardContainer className="bg-card hover:shadow-xl transition-shadow">
              <Card.CardHeader className="text-center">
                <Card.CardTitle>Contact Information</Card.CardTitle>
                <Card.CardDescription>
                  Feel free to reach out through any of these channels
                </Card.CardDescription>
              </Card.CardHeader>
              <Card.CardContent className="space-y-4">
                {infoItems.map(({infoLabel, infoValue, href, icon}, index) => {
                  const content = (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-accent transition-colors cursor-pointer"
                    >
                      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        {getIcon(icon, {className: "h-5 w-5 text-primary"})}
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{infoLabel}</p>
                        <p>{infoValue}</p>
                      </div>
                    </motion.div>
                  );

                  return href ? (
                    <a key={index} href={href}>
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </Card.CardContent>
            </Card.CardContainer>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
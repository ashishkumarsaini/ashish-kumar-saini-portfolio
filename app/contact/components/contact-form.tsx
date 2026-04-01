"use client";

import { useState } from "react";
import { Button, ButtonSizes } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Send, SendHorizonal } from "lucide-react";

const inputClassName = "w-full border-b bg-transparent px-3 py-2 text-[18px] outline-none placeholder:text-muted-foreground ";

const TOPIC_OPTIONS = [
  { value: "Frontend" },
  { value: "Backend" },
  { value: "Full stack" },
  { value: "Assistance" },
  { value: "Others" },
] as const;

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    topic: TOPIC_OPTIONS[0].value,
    message: '',
  });

  const handleChangeData = (fieldName: keyof typeof formData, fieldValue: string) => {
    setFormData((prev) => ({ ...prev, [fieldName]: fieldValue }));
  };

  const handleSubmit = () => {

  }

  const messageMax = 750;

  return (
    <form className="mt-12 mx-auto max-w-xl space-y-8 text-left" aria-label="Contact form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="contact-name" className="text-[18px] font-medium">
          Name <span className="text-destructive" aria-hidden="true">*</span>
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-required="true"
          value={formData.name}
          onChange={(e) => handleChangeData("name", e.target.value)}
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="text-[18px] font-medium">
          Email <span className="text-destructive" aria-hidden="true">*</span>
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          required
          aria-required="true"
          value={formData.email}
          onChange={(e) => handleChangeData("email", e.target.value)}
          className={inputClassName}
        />
      </div>

      <div>
        <label htmlFor="contact-company" className="text-[18px] font-medium">
          Company name
        </label>
        <input
          id="contact-company"
          name="company"
          type="text"
          autoComplete="organization"
          value={formData.company}
          onChange={(e) => handleChangeData("company", e.target.value)}
          className={inputClassName}
        />
      </div>

      <fieldset>
        <legend className="text-[18px] font-medium mb-1 px-0">
          What&apos;s on your mind?
        </legend>
        <div
          className="flex flex-row flex-wrap gap-x-2 gap-y-5 pt-4"
          role="presentation"
        >
          {TOPIC_OPTIONS.map(({ value }) => {
            const inputId = `contact-topic-${value}`;
            const checked = formData.topic === value;
            return (
              <div key={value}>
                <input
                  id={inputId}
                  name="topic"
                  type="radio"
                  value={value}
                  className={"sr-only"}
                  aria-describedby="topic-hint"
                  checked={checked}
                />
                <label
                  htmlFor={inputId}
                  className={cn("w-max py-2 px-4 rounded-full text-[18px] font-normal cursor-pointer bg-muted ", { 'border border-muted-foreground': checked })}
                  onClick={() => handleChangeData('topic', value)}>
                  {value}
                </label>
              </div>
            );
          })}
        </div>
      </fieldset>

      <div>
        <label htmlFor="contact-message" className="text-[18px] font-medium">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          maxLength={messageMax}
          value={formData.message}
          onChange={(e) => handleChangeData("message", e.target.value)}
          aria-describedby="message-hint message-count"
          className={`${inputClassName} min-h-[120px] resize-y`}
        />
        <div className="flex flex-wrap justify-between gap-2 text-sm text-muted-foreground">
          <span id="message-hint">Maximum {messageMax} characters.</span>
          <span id="message-count" aria-live="polite">
            {formData.message.length} / {messageMax}
          </span>
        </div>
      </div>

      <div>
        <Button type="submit" size={ButtonSizes.XLARGE} className="text-[18px]">
          Send message
          <SendHorizonal />
        </Button>
      </div>
    </form>
  )
}
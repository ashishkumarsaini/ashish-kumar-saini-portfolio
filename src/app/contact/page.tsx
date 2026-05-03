'use client';
import { Button, ButtonVariant } from "@/components/button";
import { Heading, HeadingLevel, HeadingSize, Text } from "@/components/typography";
import { cn } from "@/lib/utils";
import { Send } from "lucide-react";
import { useState } from "react";

const TOPIC_OPTIONS = [
  { value: "Frontend" },
  { value: "Backend" },
  { value: "Full stack" },
  { value: "Assistance" },
  { value: "Others" },
] as const;

export default function ContactPage() {
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

  const handleSubmit = () => { }

  const messageMax = 750;

  return (
    <section className="min-h-screen px-3 py-10 text-gray-900 sm:px-6 sm:py-16" onSubmit={handleSubmit}>
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <Heading size={HeadingSize.xxl} level={HeadingLevel.h1} className="mt-6 text-4xl leading-tight sm:mt-10 sm:text-6xl">
            <span className="text-gray-400">Say Hi!</span>{" "}
            and tell me about <br className="hidden sm:block" /> your idea
          </Heading>

          <Text className="mt-6">
            Have a nice works? reach out and let’s chat.
          </Text>
        </div>

        {/* Form */}
        <form className="space-y-8 sm:space-y-10">

          {/* Row */}
          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            {/* Name */}
            <div>
              <label className="block mb-2">
                Name:<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Hello..."
                required
                className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2"
                onChange={(e) => handleChangeData("name", e.target.value)}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2">
                Email:<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                placeholder="Where can i reply"
                className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2"
                onChange={(e) => handleChangeData("email", e.target.value)}
              />
            </div>
          </div>

          {/* Company */}
          <div>
            <label className="block mb-2">Company name</label>
            <input
              type="text"
              placeholder="Your company or website?"
              className="w-full bg-transparent border-b border-gray-400 focus:outline-none py-2"
              onChange={(e) => handleChangeData("company", e.target.value)}
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block mb-4">
              What’s in your mind?<span className="text-red-500">*</span>
            </label>

            <div className="flex flex-wrap gap-3">
              {TOPIC_OPTIONS.map(({ value }) => (
                <Button
                  key={value}
                  type="button"
                  className={cn("px-5 py-2 text-sm sm:text-base", { "bg-primary text-white": formData.topic === value })}
                  variant={ButtonVariant.secondary}
                  onClick={() => handleChangeData("topic", value)}
                >
                  {value}
                </Button>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="contact-message" className="text-[18px] font-medium">
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={4}
              required
              maxLength={messageMax}
              value={formData.message}
              onChange={(e) => handleChangeData("message", e.target.value)}
              aria-describedby="message-hint message-count"
              className={`w-full border-b bg-transparent px-3 py-2 text-[18px] outline-none placeholder:text-muted-foreground min-h-[120px] resize-y`}
            />
            <div className="flex flex-wrap justify-between gap-2 text-sm text-muted-foreground">
              <span id="message-hint">Maximum {messageMax} characters.</span>
              <span id="message-count" aria-live="polite">
                {formData.message.length} / {messageMax}
              </span>
            </div>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="px-5 py-2 flex items-center gap-2"
          >
            Send Me
            <Send size={15} />
          </Button>
        </form>
      </div>
    </section>
  );
}

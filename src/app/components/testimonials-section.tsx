import { Heading, HeadingLevel, HeadingSize, Text, TextSize, TextType } from "@/components/typography";
import { Linkedin, Quote, Sparkles } from "lucide-react";
import Image from "next/image";

const featuredTestimonial = {
  name: "Niharika Sharma",
  role: "Frontend Developer",
  quote:
    'I worked with Ashish on several web development projects and found him to be highly reliable and dedicated. He consistently delivers quality work and takes strong ownership of his tasks. He communicates effectively, adapts quickly, and collaborates well with the team. I would highly recommend him as a skilled and dependable professional.',
};

const testimonials = [
  {
    name: "Karan Malhotra",
    role: "Design Partner, Studio Collective",
    quote:
      "Collaborating with Ashish was smooth from the first handoff. He translated design details with care, asked thoughtful questions when something needed refinement, and delivered a crisp frontend implementation that stayed true to the visual direction without compromising performance.",
  },
  {
    name: "Tanu Sharma",
    role: "Sr. QA Engineer",
    quote:
      "Working with Ashish has been a great experience. As a developer, he bring strong technical expertise along with a clear focus on quality. He write clean, efficient code and are always proactive in addressing issues early in the cycle. From a QA perspective, his attention to detail and openness to feedback significantly improved overall product quality. I would highly recommend Ashish for any challenging development role.",
  },
  {
    name: "Ananya Verma",
    role: "Founder, Early-stage Startup",
    quote:
      "Ashish helped us move from rough product ideas to a polished, usable interface with impressive clarity. He understood the business goals quickly, suggested practical improvements, and built the experience in a way that felt stable, scalable, and ready for real customers.",
  },
];

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("");

export const TestimonialsSection = () => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-muted px-3 py-10 sm:px-6 lg:px-10">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:96px_96px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(247,247,247,0.5)_62%,rgba(247,247,247,0.9)_100%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-background/90 px-3 py-2 text-sm font-medium text-muted-foreground shadow-sm">
              <Sparkles size={16} className="text-foreground" />
              Trusted by peoples
            </div>
            <Heading level={HeadingLevel.h2} size={HeadingSize.lg} className="max-w-3xl">
              <Text type={TextType.span} size={TextSize.xl}>
                What people say about&nbsp;
              </Text>
              <Text type={TextType.span} size={TextSize.xl} className="text-muted-foreground">
                working together.
              </Text>
            </Heading>
          </div>
          <Text size={TextSize.xs} className="max-w-sm text-muted-foreground md:text-right">
            Feedback from teams where the work needed product sense, clean execution, and steady communication.
          </Text>
        </div>

        <div className="grid gap-5 lg:grid-cols-12">
          <div className="relative min-h-[300px] overflow-hidden rounded-lg border bg-foreground shadow-sm sm:min-h-[380px] lg:col-span-4">
            <Image
              fill
              src="/about-2.png"
              alt="Ashish Kumar Saini portrait"
              className="object-cover grayscale"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          </div>

          <article className="flex min-h-[320px] flex-col justify-between rounded-lg border bg-background p-5 shadow-sm sm:min-h-[380px] sm:p-7 lg:col-span-8 lg:p-9">
            <Quote size={40} className="text-muted-foreground" strokeWidth={1.5} />
            <Heading level={HeadingLevel.h3} size={HeadingSize.sm} className="max-w-3xl text-2xl leading-tight sm:text-3xl">
              {featuredTestimonial.quote}
            </Heading>
            <div className="flex items-end justify-between gap-4 mt-4">
              <div>
                <Heading level={HeadingLevel.h4} size={HeadingSize.xs}>
                  {featuredTestimonial.name}
                </Heading>
                <Text size={TextSize.xs} className="mt-1 text-muted-foreground">
                  {featuredTestimonial.role}
                </Text>
              </div>
              <div className="grid h-10 w-10 place-items-center rounded-md bg-muted text-foreground">
                <Linkedin size={20} />
              </div>
            </div>
          </article>

          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="flex min-h-[250px] flex-col justify-between rounded-lg border bg-background p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-foreground/5 sm:p-6 lg:col-span-4"
            >
              <Text size={TextSize.xs} className="font-mono leading-relaxed tracking-wide">
                {testimonial.quote}
              </Text>

              <div className="mt-10 flex items-end justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-muted text-xs font-bold">
                    {getInitials(testimonial.name)}
                  </div>
                  <div className="min-w-0">
                    <Heading level={HeadingLevel.h4} size={HeadingSize.xxs} className="truncate">
                      {testimonial.name}
                    </Heading>
                    <Text size={TextSize.xs} className="truncate text-muted-foreground">
                      {testimonial.role}
                    </Text>
                  </div>
                </div>
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-muted text-foreground">
                  <Linkedin size={18} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

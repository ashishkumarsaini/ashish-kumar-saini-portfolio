import { Button, ButtonSize } from "@/components/button";
import { Heading, HeadingLevel, HeadingSize, Text, TextSize, TextType } from "@/components/typography";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div>
      {/* hero */}
      <section className="pt-5 pb-25">
        <div className="flex items-center justify-end px-4">
          <Text size={TextSize.lg}>About Me</Text>
        </div>
        <div className="bg-cover rounded-lg h-100 relative mt-4" style={{ backgroundImage: `url('../bg-two.png')` }}>
          <div className="absolute bg-white p-4 rounded-br-lg">
            <Heading size={HeadingSize.xxl} level={HeadingLevel.h2} className="flex flex-col">
              Full Stack
              <Text type={TextType.span} size={TextSize.xxxxl} className="text-muted-foreground">Developer</Text>
            </Heading>
          </div>
          <div className="absolute bottom-0 p-4">
            <Text className="text-white">
              I’m a full-stack developer focused on building fast, scalable, and user-friendly web applications. With 5+ years of experience, I work across the entire product lifecycle—from concept to deployment.
            </Text>
          </div>
        </div>
      </section>

      {/* details */}
      <section className="pt-5 pb-25">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-4 justify-between">
            <Text>
              My core expertise lies in JavaScript ecosystems, particularly React on the frontend and Node.js on the backend.
            </Text>
            <Text>
              I enjoy working on complex user interfaces, optimizing performance, and designing APIs that are efficient and easy to maintain.
            </Text>
            <Text>
              Outside of work, I spend time exploring new technologies, building side projects, and continuously refining my skills. I believe in learning by building and constantly pushing my limits to grow as a developer.
            </Text>
            <div className="mt-4">
              <Link href="/contact">
                <Button size={ButtonSize.xl} className="flex items-center gap-2">
                  <span>Skills and Experiences</span>
                  <ArrowRight size={15} />
                </Button>
              </Link>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 aspect-video relative rounded-[10px] overflow-hidden">
            <Image fill src='/about.png' alt="About Cover Image" className="absolute" style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* details 2 */}
      <section className="pt-5 pb-25">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-6 flex flex-row lg:flex-col gap-10">
            <div>
              <Text>
                <Text type={TextType.span} size={TextSize.xxxxl} className="font-bold">5</Text>
                <Text type={TextType.span} size={TextSize.xxxxl} className="font-bold text-muted-foreground">+</Text>
              </Text>
              <Text>years of experience</Text>
            </div>
            <div>
              <Text>
                <Text type={TextType.span} size={TextSize.xxxxl} className="font-bold">13</Text>
                <Text type={TextType.span} size={TextSize.xxxxl} className="font-bold text-muted-foreground">+</Text>
              </Text>
              <Text>projects worked on</Text>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-4">
            <Text>
              I build scalable, high-performance applications with a strong focus on user experience, clean code, and real-world problem solving.
            </Text>
            <Text>
              Currently exploring advanced frontend patterns, system design, and performance engineering.
            </Text>
            <div className="mt-4">
              <Link href="/projects">
                <Button size={ButtonSize.xl} className="flex items-center gap-2">
                  <span>Explore Projects</span>
                  <ArrowRight size={15} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* experience */}
      <section className="pt-5 pb-25">
        <Text size={TextSize.lg} className="text-center">Experiences</Text>

        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex items-center justify-between bg-black text-white p-6 border">
            <div className="flex items-center gap-6">
              <div className="bg-gray-800 px-4 py-2 font-bold">1</div>
              <div>
                <Heading level={HeadingLevel.h3} className="font-semibold text-lg">Micro-interactions Awwwards Team</Heading>
                <Text size={TextSize.xs}>Focus Lab Agency - United State</Text>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="w-px h-8 bg-gray-600"></div>
              <Text size={TextSize.xs}>JOB DURATION - 2 YEARS</Text>
            </div>
          </div>


          <div className="flex items-center justify-between bg-white p-6 border">
            <div className="flex items-center gap-6">
              <div className="bg-black text-white px-4 py-2 font-bold">2</div>
              <div>
                <Heading level={HeadingLevel.h3} className="font-semibold text-lg">Senior UI Designer</Heading>
                <p className="text-sm text-gray-500">User-Hub - Bangladesh</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="w-px h-8 bg-gray-300"></div>
              <span>JOB DURATION - 1 YEAR</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default AboutPage;
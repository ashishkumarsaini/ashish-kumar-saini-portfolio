import { Button, ButtonSize } from "@/components/button"
import { Text, TextSize, TextType } from "@/components/typography"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const AboutDetailsSection = () => {
  return (
    <div>
      <div className="pb-25">
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
      </div>

      {/* details 2 */}
      <div className="pt-5">
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
      </div>
    </div>
  )
}
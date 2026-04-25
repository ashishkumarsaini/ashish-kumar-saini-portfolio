import { Button } from "@/components/button"
import { Heading, HeadingLevel, Text, TextSize, TextType } from "@/components/typography"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const AboutSection = () => {
  return (
    <div>
      <Heading level={HeadingLevel.h2} className="w-fit">
        <Text type={TextType.span} size={TextSize.lg}>
          About&nbsp;
        </Text>
        <Text type={TextType.span} size={TextSize.lg} className="text-muted-foreground">
          Me.
        </Text>
      </Heading>
      <div className="mt-7 grid grid-cols-12 gap-5">
        <div className="col-span-6">
          <div className="aspect-video relative rounded-[10px] overflow-hidden">
            <Image fill src='/about.png' alt="About Cover Image" className="absolute" style={{ objectFit: 'cover' }} />
          </div>
        </div>
        <div className="col-span-6 col-start-7">
          <div className="relative flex items-center">
            <Heading level={HeadingLevel.h3}>
              Building web from concept to <span className="text-muted-foreground">code.</span>
            </Heading>
          </div>
          <div className="rounded-lg relative mt-4">
            <Text>
              Full-stack developer focused on building fast, scalable, and user-centric web applications.
              I specialize in creating seamless digital experiences across the entire stack—from crafting
              intuitive user interfaces to architecting robust backend systems.
            </Text>
            <div className="text-primary right-0 rounded-tl-md mt-8">
              <Link href="/about" className="flex items-center gap-2">
                <Button className="flex items-center justify-center">
                  <span>Know More</span>
                  <div className="rounded-full p-0 h-6 w-6 flex items-center justify-center">
                    <ArrowRight size={15} />
                  </div>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
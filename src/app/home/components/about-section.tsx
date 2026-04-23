import { Button } from "@/components/button"
import { Heading, HeadingLevel, HeadingSize, Text, TextSize, TextType } from "@/components/typography"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const AboutSection = () => {
  return (
    <section className="pt-5 pb-25">
      <Heading level={HeadingLevel.h2} className="w-fit">
        <Text type={TextType.span} size={TextSize.lg}>
          About&nbsp;
        </Text>
        <Text type={TextType.span} size={TextSize.lg} className="text-muted-foreground">
          Me.
        </Text>
      </Heading>
      <div className="mt-7 grid grid-cols-12 grid-rows-12 gap-5">
        <div className="col-span-6 row-span-12">
          <div className="aspect-video relative rounded-[10px] overflow-hidden">
            <Image fill src='/about.png' alt="About Cover Image" className="absolute" style={{ objectFit: 'cover' }} />
          </div>
        </div>
        <div className="col-span-6 col-start-7 row-span-4">
          <div className="bg-muted p-4 rounded-lg relative h-full flex items-center">
            <Heading level={HeadingLevel.h3}>
              Building web from concept to <span className="text-muted-foreground">code.</span>
            </Heading>
          </div>
        </div>
        <div className="col-span-6 row-span-8">
          <div className="bg-primary text-secondary p-4 rounded-lg relative h-full">
            <Text className="mt-4">
              Full-stack developer focused on building fast, scalable, and user-centric web applications.
              I specialize in creating seamless digital experiences across the entire stack—from crafting
              intuitive user interfaces to architecting robust backend systems.
            </Text>
            <div className="absolute bottom-0 bg-white text-primary p-2 right-0 rounded-tl-md">
              <Link href="/about" className="flex items-center gap-2">
                <span>Know More</span>
                <Button className="rounded-full p-0 h-8 w-8 flex items-center justify-center">
                  <ArrowRight size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
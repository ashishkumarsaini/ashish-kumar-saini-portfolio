import { Button, ButtonSize, ButtonVariant } from "@/components/button"
import { RotateWords } from "@/components/motion"
import { Heading, HeadingLevel, HeadingSize, Text } from "@/components/typography"
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export const HeroSection = () => {
  return (
    <div>
      <div className="bg-muted w-full rounded-lg p-4 py-10 md:py-30 relative">
        <Text>
          Hello! I’m Ashish.
        </Text>
        <Heading size={HeadingSize.xxl} level={HeadingLevel.h1} className="mt-10">
          <span>Full-stack developer with a passion for crafting </span>
          <RotateWords words={[
            'digital tools that people enjoy using.',
            'apps that make life a little easier.',
            'simple solutions to complex problems.'
          ]} />
        </Heading>
        <div className="mt-15">
          <p>
            A passionate full-stack developer with 5+ years of experience building modern, scalable web applications.
          </p>
        </div>
        <div className="absolute bg-white p-4 rounded-bl-md top-0 right-0 flex gap-4">
          <Link href="https://www.linkedin.com/in/devaksaini/" className="flex items-center gap-2 border p-2 rounded-md">
            <Linkedin size={20} />
          </Link>
          <Link href="https://x.com/devaksaini" className="flex items-center gap-2 border p-2 rounded-md">
            <Twitter size={20} />
          </Link>
          <Link href="https://github.com/ashishkumarsaini" className="flex items-center gap-2 border p-2 rounded-md">
            <Github size={20} />
          </Link>
        </div>
        <div className="absolute bg-white p-4 rounded-tl-md bottom-0 right-0 flex gap-4">
          <Link href="/contact">
            <Button size={ButtonSize.xl} className="flex items-center gap-2">
              <span>{`Let's Connect`}</span>
              <ArrowRight size={15} />
            </Button>
          </Link>
          <Link href="/contact">
            <Button size={ButtonSize.xl} variant={ButtonVariant.secondary} className="flex items-center gap-2">
              <span>Get Resume</span>
              <Download size={15} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
import { Button, ButtonSize, ButtonVariant } from "@/components/button"
import { RotateWords } from "@/components/motion"
import { Heading, HeadingLevel, HeadingSize, Text } from "@/components/typography"
import { ArrowRight, Download, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export const HeroSection = () => {
  return (
    <div>
      <div className="bg-muted w-full rounded-lg p-4 py-8 sm:py-10 md:py-30 md:px-8 relative">
        <Text>
          Hello! I’m Ashish.
        </Text>
        <Heading size={HeadingSize.xxl} level={HeadingLevel.h1} className="mt-8 max-w-5xl text-4xl leading-tight sm:text-5xl md:mt-10 md:text-6xl">
          <span>Full-stack developer with a passion for crafting </span>
          <RotateWords words={[
            'digital tools that people enjoy using.',
            'apps that make life a little easier.',
            'simple solutions to complex problems.'
          ]} />
        </Heading>
        <div className="mt-8 max-w-2xl md:mt-15">
          <p className="text-base sm:text-lg">
            A passionate full-stack developer with 5+ years of experience building modern, scalable web applications.
          </p>
        </div>
        <div className="mt-8 flex w-fit gap-3 rounded-md bg-white p-3 sm:absolute sm:top-0 sm:right-0 sm:mt-0 sm:gap-4 sm:rounded-bl-md sm:rounded-tr-lg sm:p-4">
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
        <div className="mt-8 flex flex-col gap-3 rounded-md bg-white p-3 sm:absolute sm:right-0 sm:bottom-0 sm:mt-0 sm:flex-row sm:gap-4 sm:rounded-tl-md sm:rounded-br-lg sm:p-4">
          <Link href="/contact">
            <Button size={ButtonSize.xl} className="flex w-full items-center justify-center gap-2 sm:w-auto">
              <span>{`Let's Connect`}</span>
              <ArrowRight size={15} />
            </Button>
          </Link>
          <Link href="/contact">
            <Button size={ButtonSize.xl} variant={ButtonVariant.secondary} className="flex w-full items-center justify-center gap-2 sm:w-auto">
              <span>Get Resume</span>
              <Download size={15} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

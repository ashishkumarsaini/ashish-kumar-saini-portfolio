import Link from "next/link"
import { RotateWords } from "@/components/motion";
import { ArrowRight, ArrowUpRight, Github, Linkedin } from "lucide-react"
import { Button, ButtonSizes, ButtonVariants } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div className="mt-15 mb-15 md:mt-20 md:mb-20 lg:mt-25 lg:mb-30">
      <div>
        <p className="text-[25px]">Hello! I’m Ashish.</p>
        <p className="text-[50px] md:text-[75px] lg:text-[95px] font-bold leading-[60px] md:leading-[100px]">
          <span>Full-stack developer with a passion for crafting </span>
          <RotateWords words={[
            'digital tools that people enjoy using.',
            'apps that make life a little easier.',
            'simple solutions to complex problems.'
          ]} />
        </p>
        <div className="grid grid-cols-12 mt-15 items-center gap-7">
          <div className="col-span-4 h-px bg-muted-foreground hidden sm:block"></div>
          <div className="col-span-8 max-sm:col-span-12">
            <p className="text-[22px] w-full max-sm:text-right">
              A passionate full-stack developer with 5+ years of experience building modern, scalable web applications.
            </p>
          </div>
        </div>
      </div>
      <div className="flex mt-10 max-sm:flex-col-reverse items-end sm:items-center justify-between gap-5">
        <div className="flex items-center gap-4">
          <Link href="https://www.linkedin.com/in/devaksaini/" target="_blank">
            <Button variant={ButtonVariants.OUTLINE}>
              <Linkedin />
              LinkedIn
              <ArrowUpRight />
            </Button>
          </Link>
          <Link href="https://github.com/ashishkumarsaini" target="_blank">
            <Button variant={ButtonVariants.OUTLINE}>
              <Github />
              Github
              <ArrowUpRight />
            </Button>
          </Link>
        </div>
        <Link href='/contact'>
          <Button size={ButtonSizes.XLARGE} className="text-[18px]">
            {`Let's Connect`}
            <ArrowRight />
          </Button>
        </Link>
      </div>
    </div>
  )
}
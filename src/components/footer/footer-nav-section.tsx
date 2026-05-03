import Link from "next/link"
import { Heading, HeadingSize, Text, TextSize, TextType } from "../typography"
import { ArrowRight, Github, Linkedin, Mail, Moon, Phone, Sun, Twitter } from "lucide-react"
import { Button } from "../button";

export const FooterNavSection = () => {
  const currentDate = new Date();
  const currentTime = currentDate.toLocaleTimeString('hi-IN', { hour: 'numeric', minute: 'numeric', hour12: true })
  const hours = currentDate.getHours();

  const isDayTime = hours >= 6 && hours < 18;

  return (
    <div className="bg-muted rounded-lg flex flex-col px-3 py-3">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-6">
        <div className="md:col-span-4 md:row-span-5">
          <div className="h-full flex flex-col gap-2">
            <div className="rounded-md bg-neutral-200 p-4 grow flex flex-col justify-between">
              <div>
                <Text className="break-words font-bold text-[1.4rem] sm:text-[1.75rem]" size={TextSize.xl}>
                  <span>ashishkumarsaini</span>
                  <span className="text-muted-foreground">.dev</span>
                </Text>
                <Text className="mt-4" size={TextSize.sm}>
                  Full Stack Developer crafting digital experiences with passion and precision.
                </Text>
              </div>
              <Link href="/contact">
                <Button className="max-w-fit flex items-center gap-2">
                  <span>{`Let's Chat`}</span>
                  <ArrowRight size={15} />
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-end gap-2">
              <Text size={TextSize.xs} type={TextType.span}>Time in India -</Text>
              <div className="flex items-center justify-end gap-1 ">
                <Text size={TextSize.xs} type={TextType.span}>{currentTime}</Text>
                {!isDayTime ? <Moon size={15} className="text-black" /> : <Sun size={15} className="text-orange-500" />}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:col-span-4 md:row-span-2 md:col-start-5">
          <div className="rounded-md bg-neutral-200 h-full p-4">
            <Heading size={HeadingSize.xxs} className="mb-4">Contact</Heading>
            <div className="flex flex-col gap-4">
              <Link href="mailto:works.ashishsaini@gmail.com" className="flex items-center gap-2">
                <Mail size={20} />
                <Text size={TextSize.sm}>Email</Text>
              </Link>
              <Link href="tel:+917302672750" className="flex items-center gap-2">
                <Phone size={20} />
                <Text size={TextSize.sm}>Mobile</Text>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:col-span-4 md:row-span-5 md:col-start-9">
          <div className="rounded-md bg-neutral-200 h-full p-4">
            <Heading size={HeadingSize.xxs} className="mb-4">Quick Links</Heading>
            <div className="flex flex-col gap-2">
              <Link href="#about">About</Link>
              <Link href="#skills">Skills</Link>
              <Link href="#projects">Projects</Link>
              <Link href="#contact">Contact</Link>
            </div>
          </div>
        </div>
        <div className="md:col-span-4 md:row-span-3 md:col-start-5 md:row-start-3">
          <div className="rounded-md bg-neutral-200 h-full p-4">
            <Heading size={HeadingSize.xxs} className="mb-4">Socials</Heading>
            <div className="flex flex-col gap-4">
              <Link target="_blank" href="https://www.linkedin.com/in/devaksaini/" className="flex items-center gap-2">
                <Linkedin size={20} />
                <Text size={TextSize.sm}>LinkedIn</Text>
              </Link>
              <Link target="_blank" href="https://x.com/devaksaini" className="flex items-center gap-2">
                <Twitter size={20} />
                <Text size={TextSize.sm}>X</Text>
              </Link>
              <Link target="_blank" href="https://github.com/ashishkumarsaini" className="flex items-center gap-2">
                <Github size={20} />
                <Text size={TextSize.sm}>Github</Text>
              </Link>
            </div>
          </div>
        </div>
        <div className="h-full md:col-span-12 md:row-start-6 md:row-span-1">
          <div className="flex items-center justify-center py-5 bg-neutral-200 rounded-md overflow-hidden">
            <Text size={TextSize.xs}>© 2026 Ashish Kumar Saini.</Text>
          </div>
        </div>
      </div>
    </div>
  )
}

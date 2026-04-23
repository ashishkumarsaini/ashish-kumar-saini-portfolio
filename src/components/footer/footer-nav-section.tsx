import Link from "next/link"
import { Heading, HeadingSize, Text, TextSize, TextType } from "../typography"
import { Github, Linkedin, Mail, Moon, Phone, Sun, Twitter } from "lucide-react"

export const FooterNavSection = () => {
  const currentDate = new Date();
  const currentTime = currentDate.toLocaleTimeString('hi-IN', { hour: 'numeric', minute: 'numeric', hour12: true })
  const hours = currentDate.getHours();
  const isPM = hours >= 12;

  return (
    <div className="bg-muted rounded-lg flex flex-col px-3 py-3">
      <div className="grid grid-cols-12 grid-rows-6 gap-4">
        <div className="col-span-4 row-span-5">
          <div className="h-full flex flex-col gap-2">
            <div className="rounded-md bg-neutral-200 p-4 grow">
              <Text className="font-bold" size={TextSize.xl}>
                <span>ashishkumarsaini</span>
                <span className="text-muted-foreground">.dev</span>
              </Text>
              <Text className="mt-4" size={TextSize.sm}>
                Full Stack Developer crafting digital experiences with passion and precision.
              </Text>
              {/* <div className="flex items-center gap-4 mt-4">
              <Link target="_blank" href="https://www.linkedin.com/in/devaksaini/">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
              <Link target="_blank" href="https://github.com/ashishkumarsaini">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-github" aria-hidden="true">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </Link>
            </div> */}
            </div>
            <div className="flex items-center justify-end gap-2">
              <Text size={TextSize.xs} type={TextType.span}>Time in India -</Text>
              <div className="flex items-center justify-end gap-1 ">
                <Text size={TextSize.xs} type={TextType.span}>{currentTime}</Text>
                {isPM ? <Moon size={15} className="text-black" /> : <Sun size={15} className="text-orange-500" />}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 row-span-2 col-start-5 flex flex-col">
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
        <div className="col-span-4 row-span-5 col-start-9">
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
        <div className="col-span-4 row-span-3 col-start-5 row-start-3">
          <div className="rounded-md bg-neutral-200 h-full p-4">
            <Heading size={HeadingSize.xxs} className="mb-4">Socials</Heading>
            <div className="flex flex-col gap-4">
              <Link href="https://www.linkedin.com/in/devaksaini/" className="flex items-center gap-2">
                <Linkedin size={20} />
                <Text size={TextSize.sm}>LinkedIn</Text>
              </Link>
              <Link href="https://x.com/devaksaini" className="flex items-center gap-2">
                <Twitter size={20} />
                <Text size={TextSize.sm}>X</Text>
              </Link>
              <Link href="https://github.com/ashishkumarsaini" className="flex items-center gap-2">
                <Github size={20} />
                <Text size={TextSize.sm}>Github</Text>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-12 row-start-6 row-span-1 h-full">
          <div className="flex items-center justify-center py-5 bg-neutral-200 rounded-md overflow-hidden">
            <Text size={TextSize.xs}>© 2026 Ashish Kumar Saini.</Text>
          </div>
        </div>
      </div>
    </div>
  )
}
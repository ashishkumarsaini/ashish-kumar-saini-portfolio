import Link from "next/link"
import { Text, TextSize } from "../typography"
import { Button, ButtonSize, ButtonVariant } from "../button"

export const Footer = () => {
  return (
    <div className="mx-auto max-w-[1250px] py-5">
      <div className="px-3 mb-10">
        <div className="bg-primary text-secondary rounded-lg p-5 py-20">
          <div className="flex flex-col gap-10 items-center justify-center">
            <div>
              <Text size={TextSize.xxxl} className="font-bold">
                Got any ideas?
              </Text>
            </div>
            <div>
              <Text size={TextSize.base}>
                Let’s build something impactful.
              </Text>
            </div>
            <div>
              <Link href="/contact">
                <Button size={ButtonSize.lg} variant={ButtonVariant.secondary}>
                  Contact Me
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-muted rounded-lg flex flex-col">
          <div className="border-b border-b-muted-foreground p-5 py-20 flex flex-col items-center lg:flex-row gap-5 justify-between">
            <div>
              <Text className="font-bold" size={TextSize.xl}>
                <span>ashishkumarsaini</span>
                <span className="text-muted-foreground">.dev</span>
              </Text>
              <Text className="mt-4">
                Full Stack Developer crafting digital experiences with passion and precision.
              </Text>
              <div className="flex items-center gap-4 mt-4">
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
              </div>
            </div>
            <div className="lg:mr-20">
              <h4 className="mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <Link href="#about">About</Link>
                <Link href="#skills">Skills</Link>
                <Link href="#projects">Projects</Link>
                <Link href="#contact">Contact</Link>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center py-5">
            <Text size={TextSize.xs}>© 2026 Ashish Kumar Saini.</Text>
          </div>
        </div>
      </div>
    </div>
  )
}
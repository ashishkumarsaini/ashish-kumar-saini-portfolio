import { Github, Linkedin, ArrowRight } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="px-1 sm:px-4">
      <div className="bg-accent-foreground text-secondary rounded-t-[20px]">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-8 py-20 flex flex-col">
          <div className="text-[50px] md:text-[75px] lg:text-[95px] font-bold leading-[60px] md:leading-[100px]">
            <span>{`Let’s build something `}</span>
            <span className="text-muted-foreground">impactful.</span>
          </div>
          <Link href='/contact' className="mt-6 text-[20px] md:text-[35px] lg:text-[55px] font-bold flex items-center gap-2 md:gap-4">
            <span>works.ashishsaini<span className="text-muted-foreground">@gmail.com</span></span>
            <span className="md:bg-muted-foreground p-1 md:p-2 rounded-full hover:translate-x-0.5 transition-all duration-300">
              <ArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <footer className="bg-accent-foreground text-secondary border-t border-muted-foreground">
        <div className="max-w-[1500px] mx-auto px-4 sm:px-8 py-20">
          <div className="flex flex-col lg:flex-row gap-5 justify-between">
            <div>
              <div className="text-4xl font-bold">
                <span>ashishkumarsaini</span>
                <span className="text-muted-foreground">.dev</span>
              </div>
              <p className="mt-4">
                Full Stack Developer crafting digital experiences with passion and precision.
              </p>
              <div className="flex items-center gap-4 mt-4">
                <Link href="https://www.linkedin.com/in/devaksaini/" target="_blank">
                  <Linkedin />
                </Link>
                <Link href="https://github.com/ashishkumarsaini" target="_blank">
                  <Github />
                </Link>
              </div>
            </div>
            <div className="lg:mr-20">
              <h4 className="mb-4">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <a href="#about">
                  About
                </a>
                <a href="#skills">
                  Skills
                </a>
                <a href="#projects">
                  Projects
                </a>
                <a href="#contact">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="py-8 text-center border-t border-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Ashish Kumar Saini.
          </p>
        </div>
      </footer>
    </div>
  );
}

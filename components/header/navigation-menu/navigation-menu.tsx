'use client';
import { getIcon } from "@/components/icons";
import { Button, ButtonSizes, ButtonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Icons } from "@/mocks/contants";
import { ArrowRight, ArrowUpRight, Github, Linkedin, X } from "lucide-react";
import Link from "next/link";
import { FC, useEffect } from "react";

export const NavigationMenu: FC<{
  shouldShowNavigation: boolean, onClose: () => void
}> = ({ shouldShowNavigation, onClose }) => {
  useEffect(() => {
    if (shouldShowNavigation) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [shouldShowNavigation]);

  return (
    <div>
      <div className={cn("bg-muted-foreground opacity-50 fixed top-0 left-0 right-0 h-screen w-full hidden", { "block": shouldShowNavigation })} onClick={onClose} />
      <div className={cn("fixed bg-accent-foreground text-secondary z-50 w-full l-0 r-0 -translate-y-full transition-all duration-300", { "translate-y-0": shouldShowNavigation })}>
        <div className="max-w-[1500px] mx-auto">
          <div className="h-20 w-full px-4 sm:px-8 flex items-center justify-between">

          </div>
          <div className="max-h-[calc(100vh-80px)] overflow-auto no-scrollbar">
            <div className="py-6 px-4 sm:px-8 border-b border-muted-foreground">
              <nav>
                <ul>
                  <li>
                    <Link href="/" className="flex items-center justify-between" onClick={onClose}>
                      <p className="text-[35px] md:text-[55px] font-bold">
                        <span className="hover:underline decoration-3">Home.</span>
                        <span className="text-muted-foreground text-[15px]"> (01)</span>
                      </p>
                      <ArrowRight />
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="flex items-center justify-between" onClick={onClose}>
                      <p className="text-[35px] md:text-[55px] font-bold">
                        <span className="hover:underline decoration-3">About Me.</span>
                        <span className="text-muted-foreground text-[15px]"> (02)</span>
                      </p>
                      <ArrowRight />
                    </Link>
                  </li>
                  <li>
                    <Link href="/skills-and-experience" className="flex items-center justify-between" onClick={onClose}>
                      <p className="text-[35px] md:text-[55px] font-bold">
                        <span className="hover:underline decoration-3">Skills & Exprience.</span>
                        <span className="text-muted-foreground text-[15px]"> (03)</span>
                      </p>
                      <ArrowRight />
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" className="flex items-center justify-between" onClick={onClose}>
                      <p className="text-[35px] md:text-[55px] font-bold">
                        <span className="hover:underline decoration-3">Projects.</span>
                        <span className="text-muted-foreground text-[15px]"> (04)</span>
                      </p>
                      <ArrowRight />
                    </Link>
                  </li>
                  <li>
                    <Link href="/blogs" className="flex items-center justify-between" onClick={onClose}>
                      <p className="text-[35px] md:text-[55px] font-bold">
                        <span className="hover:underline decoration-3">Blogs.</span>
                        <span className="text-muted-foreground text-[15px]"> (05)</span>
                      </p>
                      <ArrowRight />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="py-7 px-4 sm:px-8 border-b border-muted-foreground">
              <div className="text-xl font-bold">
                <span className="text-muted-foreground">Follow</span>
                <span>.</span>
              </div>
              <div className="text-xl font-bold">
                <div className="flex mt-7 max-sm:flex-col-reverse items-end sm:items-center justify-between gap-5">
                  <div className="flex items-center gap-4">
                    <Link href="https://www.linkedin.com/in/devaksaini/" target="_blank">
                      <Button variant={ButtonVariants.OUTLINE} className="bg-accent-foreground">
                        <Linkedin />
                        LinkedIn
                        <ArrowUpRight />
                      </Button>
                    </Link>
                    <Link href="https://github.com/ashishkumarsaini" target="_blank">
                      <Button variant={ButtonVariants.OUTLINE} className="bg-accent-foreground">
                        <Github />
                        Github
                        <ArrowUpRight />
                      </Button>
                    </Link>
                  </div>
                  <Link href='/contact'>
                    <Button size={ButtonSizes.XLARGE} className="text-[18px] bg-secondary text-primary hover:bg-secondary">
                      {`Let's Connect`}
                      <ArrowRight />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
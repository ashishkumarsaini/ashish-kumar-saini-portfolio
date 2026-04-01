'use client';
import Link from "next/link"
import { Button, ButtonVariants } from "../ui/button"
import { getIcon } from "../icons"
import { Icons } from "@/mocks/contants"
import { NavigationMenu } from "./navigation-menu/navigation-menu"
import { useState } from "react";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

export const Header = () => {
  const [shouldShowNavigation, setShouldShowNavigation] = useState(false);

  const toggleNavigation = () => {
    setShouldShowNavigation(!shouldShowNavigation);
  }

  return (
    <>
      <header className={cn("w-full fixed top-0 left-0 right-0 z-51 duration-300 bg-background/80 backdrop-blur-xs border-b border-border", { 'bg-primary backdrop-blur-none border-b-muted-foreground': shouldShowNavigation })}>
        <div className="h-20 max-w-[1500px] mx-auto px-4 sm:px-8 flex items-center justify-between">
          <Link href="/">
            <div className="text-xl font-bold">
              <span className={cn({ 'text-secondary': shouldShowNavigation })}>ashishkumarsaini</span>
              <span className="text-muted-foreground">.dev</span>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <Link href='/contact' className="block max-sm:hidden">
              <Button>
                <span className="text-[15px]">{`Let's Connect`}</span>
                {getIcon(Icons.arrowRight, { className: "h-6 w-6" })}
              </Button>
            </Link>
            <Button variant={ButtonVariants.OUTLINE} onClick={toggleNavigation} className={cn({ 'bg-accent-foreground text-secondary': shouldShowNavigation })}>
              {shouldShowNavigation ? <X /> : getIcon(Icons.hamburger, { className: "h-6 w-6" })}
            </Button>
          </div>
        </div>
      </header>
      <NavigationMenu shouldShowNavigation={shouldShowNavigation} onClose={toggleNavigation} />
      <div className="h-20 w-full" />
    </>
  )
}

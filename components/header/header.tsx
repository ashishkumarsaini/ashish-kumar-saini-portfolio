'use client';
import Link from "next/link"
import { Button, ButtonVariants } from "../ui/button"
import { getIcon } from "../icons"
import { Icons } from "@/mocks/contants"
import { NavigationMenu } from "./navigation-menu/navigation-menu"
import { useState } from "react";

export const Header = () => {
  const [shouldShowNavigation, setShouldShowNavigation] = useState(false);

  const toggleNavigation = () => {
    setShouldShowNavigation(!shouldShowNavigation);
  }

  return (
    <>
      <header className="w-full fixed top-0 left-0 right-0 z-50 duration-300 bg-background/80 backdrop-blur-xs border-b border-border">
        <div className="h-20 max-w-[1500px] mx-auto px-4 sm:px-8 flex items-center justify-between">
          <Link href="/">
            <div className="text-xl font-bold">
              <span>ashishkumarsaini</span>
              <span className="text-muted-foreground">.dev</span>
            </div>
          </Link>
          <div className="flex items-center gap-2">
            <Link href='/contact' className="block max-sm:hidden">
              <Button>
                {`Let's Connect`}
                {getIcon(Icons.arrowRight, { className: "h-6 w-6 text-muted-foreground" })}
              </Button>
            </Link>
            <Button variant={ButtonVariants.OUTLINE} onClick={toggleNavigation}>
              {getIcon(Icons.hamburger, { className: "h-6 w-6 text-muted-foreground" })}
            </Button>
          </div>
        </div>
      </header>
      <NavigationMenu shouldShowNavigation={shouldShowNavigation} onClose={toggleNavigation} />
      <div className="h-20 w-full" />
    </>
  )
}

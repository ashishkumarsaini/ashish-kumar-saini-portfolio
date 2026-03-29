import Link from "next/link"
import { Button, ButtonVariants } from "../ui/button"
import { getIcon } from "../icons"
import { Icons } from "@/mocks/contants"

export const Header = () => {
  return (
    <>
      <header className="w-full fixed top-0 left-0 right-0 z-50 duration-300 bg-background/80 backdrop-blur-xs border-b border-border">
        <div className="h-20 max-w-[1500px] mx-auto px-4 sm:px-8 flex items-center justify-between">
          <div className="text-xl font-bold">
            <span>ashishkumarsaini</span>
            <span className="text-muted-foreground">.dev</span>
          </div>
          <div className="flex items-center gap-2">
            <Link href='/contacts' className="block max-sm:hidden">
              <Button>
                {`Let's Connect`}
                {getIcon(Icons.arrowRight, { className: "h-6 w-6 text-muted-foreground" })}
              </Button>
            </Link>
            <Button variant={ButtonVariants.OUTLINE}>
              {getIcon(Icons.hamburger, { className: "h-6 w-6 text-muted-foreground" })}
            </Button>
          </div>
        </div>
      </header>
      <div className="h-20 w-full" />
    </>
  )
}

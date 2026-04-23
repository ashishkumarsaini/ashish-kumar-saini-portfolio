'use client';
import { Footer } from "@/components/footer";
import { Header } from "@/components/header/header"
import { cn } from "@/lib/utils"
import { FC, ReactNode, useState } from "react"
import { NavigationMenu } from "./navigation-menu";

export const AppLayoutWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpened, setIsOpened] = useState(false);
  const handleToggle = () => {
    setIsOpened(!isOpened);
  };

  return (
    <>
      <NavigationMenu isOpened={isOpened} onToggle={handleToggle} />
      <div className={cn(
        "relative h-full bg-white transition-all duration-300 no-scrollbar overflow-y-scroll max-w-full",
        { "translate-x-[-300px] 2xl:translate-x-0 scale-[0.95] rounded-lg max-w-[1250px]": isOpened }
      )}>
        <Header onToggle={handleToggle} />
        <main className="mx-auto max-w-[1250px] p-2 md:p-4">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
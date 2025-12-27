import { NavigationMenu } from "./navigation-menu/navigation-menu"

export const Header = ()=>{
  return (
  <header className="w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-xs border-b border-border">
    <div className="h-[65px] max-w-[1480px] mx-auto px-[15px] flex items-center justify-between">
      <div className="text-xl font-bold"><span>AS</span></div>
      <NavigationMenu />
    </div>
  </header>
  )
}

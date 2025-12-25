import { NavigationMenu } from "./navigation-menu/navigation-menu"

export const Header = ()=>{
  return (
  <header className="fixed top-0 w-full bg-transparent">
    <div className="h-[65px] max-w-[1480px] mx-auto px-[15px] flex items-center justify-between">
      <div className="text-xl font-bold"><span>AS</span></div>
      <NavigationMenu />
    </div>
  </header>
  )
}

import { navigationItems } from "@/mocks/navigation-item-list";
import { NavigationMenuItem } from "./navigation-menu-item";



export const NavigationMenu = ()=>{
  return (
    <ul className="flex items-center justify-between gap-2">
      {navigationItems.map(({title, id})=>(
        <NavigationMenuItem key={title} title={title} idToScroll={id}/>
      ))}
    </ul>
  )
}
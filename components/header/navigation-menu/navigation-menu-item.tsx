"use client";

import { Button, ButtonVariants } from "@/components/ui/button"
import { scrollToId } from "@/lib/window";
import { FC } from "react";
import {motion} from 'motion/react'

const onNavItemClick = (idToScroll: string)=>{
  scrollToId(idToScroll);
};

type NavigationMenuItemProps = {
  title: string;
  idToScroll: string;
}

export const NavigationMenuItem:FC<NavigationMenuItemProps> = ({title, idToScroll})=>{
  return (
    <motion.div>
      <Button onClick={()=>onNavItemClick(idToScroll)} variant={ButtonVariants.LINK}>
        <span className="">{title}</span>
      </Button>
    </motion.div>
  )
}
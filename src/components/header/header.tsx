'use client';

import Link from "next/link";
import { ArrowRight, HamburgerIcon } from "lucide-react";

import { Text, TextType } from "../typography";
import { Button, ButtonSize, ButtonVariant } from "../button";
import { cn } from "@/lib/utils";

export function Header({ onToggle, isNavOpened }: { onToggle: () => void, isNavOpened: boolean }) {
  return (
    <header className={cn("w-full fixed top-0 left-0 right-0 z-51 duration-300 bg-background/80 backdrop-blur-xs border-b border-border", { "sticky": isNavOpened })}>
      <div className="h-20 mx-auto max-w-[1250px] px-4 sm:px-8 flex items-center justify-between">
        <Link
          href="/"
          className="inline-flex items-center gap-2"
        >
          <Text type={TextType.span} className="h-8 w-8 grid place-items-center rounded-md bg-foreground text-background">
            AS
          </Text>
          <div className="text-xl font-bold">
            <Text type={TextType.span}>ashishkumarsaini</Text>
            <Text type={TextType.span} className="text-muted-foreground">.dev</Text>
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <Button size={ButtonSize.sm} variant={ButtonVariant.secondary} onClick={onToggle}>
            <HamburgerIcon size={20} />
          </Button>
          <Link href="/contact" className="block max-sm:hidden">
            <Button size={ButtonSize.sm} variant={ButtonVariant.primary} className="flex items-center gap-2">
              <span>Contact Me</span>
              <ArrowRight size={15} />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronRight, Menu } from "lucide-react";

import { TopDrawer } from "../top-drawer";

type NavLink = { label: string; href: string };

const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About me", href: "/#about" },
  { label: "Skills and projects", href: "/#skills-projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact me", href: "/#contact" },
];

export function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg px-2 py-1 text-sm font-semibold tracking-tight text-foreground hover:bg-accent"
            aria-label="Go to homepage"
          >
            <span className="grid h-8 w-8 place-items-center rounded-md bg-foreground text-background">
              AK
            </span>
            <span className="hidden sm:inline">Ashish</span>
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="/#contact"
              className="inline-flex h-10 items-center justify-center rounded-lg border border-border bg-background px-4 text-sm font-semibold text-foreground shadow-sm hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              Contact me
            </Link>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex h-10 items-center justify-center rounded-lg border border-border bg-background px-3 text-foreground shadow-sm hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Open menu"
              aria-haspopup="dialog"
              aria-expanded={open}
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      <TopDrawer open={open} onOpenChange={setOpen} title="Menu">
        <nav className="grid gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold text-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span>{l.label}</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
            </a>
          ))}
        </nav>
      </TopDrawer>
    </>
  );
}

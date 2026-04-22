"use client";
 
 import * as React from "react";
 import { X } from "lucide-react";
 
 type TopDrawerProps = {
   open: boolean;
   onOpenChange: (open: boolean) => void;
   title?: string;
   children: React.ReactNode;
 };
 
 export function TopDrawer({ open, onOpenChange, title = "Navigation", children }: TopDrawerProps) {
   const panelRef = React.useRef<HTMLDivElement | null>(null);
 
   React.useEffect(() => {
     if (!open) return;
 
     const prevOverflow = document.body.style.overflow;
     document.body.style.overflow = "hidden";
 
     const onKeyDown = (e: KeyboardEvent) => {
       if (e.key === "Escape") onOpenChange(false);
     };
 
     window.addEventListener("keydown", onKeyDown);
 
     // Best-effort focus to the panel for keyboard users.
     queueMicrotask(() => panelRef.current?.focus());
 
     return () => {
       document.body.style.overflow = prevOverflow;
       window.removeEventListener("keydown", onKeyDown);
     };
   }, [open, onOpenChange]);
 
   return (
     <div
       className={[
         "fixed inset-0 z-50",
         open ? "pointer-events-auto" : "pointer-events-none",
       ].join(" ")}
       aria-hidden={!open}
     >
       <button
         type="button"
         onClick={() => onOpenChange(false)}
         className={[
           "absolute inset-0 bg-foreground/40 transition-opacity",
           open ? "opacity-100" : "opacity-0",
         ].join(" ")}
         aria-label="Close menu"
         tabIndex={open ? 0 : -1}
       />
 
       <div
         role="dialog"
         aria-modal="true"
         aria-label={title}
         ref={panelRef}
         tabIndex={-1}
         className={[
           "absolute left-0 right-0 top-0",
           "border-b border-border bg-background shadow-lg",
           "transition-transform duration-300 ease-out",
           open ? "translate-y-0" : "-translate-y-full",
         ].join(" ")}
       >
         <div className="mx-auto w-full max-w-6xl px-4 pb-6 pt-4 sm:px-6">
           <div className="flex items-center justify-between gap-3">
             <div className="text-sm font-semibold text-foreground">{title}</div>
             <button
               type="button"
               onClick={() => onOpenChange(false)}
               className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-foreground shadow-sm hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
               aria-label="Close menu"
             >
               <X className="h-5 w-5" aria-hidden="true" />
             </button>
           </div>
 
           <div className="mt-4">{children}</div>
         </div>
       </div>
     </div>
   );
 }

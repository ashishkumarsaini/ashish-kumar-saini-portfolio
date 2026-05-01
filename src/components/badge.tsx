'use client';
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

export enum BadgeSize {
  sm = 'sm',
  base = 'base',
  lg = 'lg',
}

export enum BadgeVariant {
  primary = "primary",
  secondary = "secondary"
}

const badgeVariants = cva('block rounded-lg w-fit', {
  variants: {
    size: {
      [BadgeSize.sm]: "px-5 text-sm",
      [BadgeSize.base]: "px-6 text-xs",
      [BadgeSize.lg]: "px-7 text-lg",
    },
    variant: {
      [BadgeVariant.primary]: "bg-primary text-secondary",
      [BadgeVariant.secondary]: "bg-secondary text-primary border border-primary"
    }
  },
  defaultVariants: {
    size: BadgeSize.base,
    variant: BadgeVariant.secondary
  }
});

type BadgeProps = {
  className?: string,
  children: React.ReactNode,
  onClick?: () => void
} & React.ComponentPropsWithRef<typeof badgeVariants> & VariantProps<typeof badgeVariants>;

export const Badge: React.FC<BadgeProps> = ({ size, variant, className, children, ...restProps }) => {
  return (
    <div {...restProps} className={cn(badgeVariants({ size, variant, className }))}>
      {children}
    </div>
  );
};
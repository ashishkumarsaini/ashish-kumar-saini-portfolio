import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

export enum ButtonSize {
  xs = 'xs',
  sm = 'sm',
  base = 'base',
  lg = 'lg'
}

export enum ButtonVariant {
  primary = "bg-primary",
  secondary = "bg-secondary",
  muted = "muted"
}

const buttonVariants = cva('tracking-wide block rounded-sm cursor-pointer', {
  variants: {
    size: {
      [ButtonSize.xs]: "h-9 px-4 text-sm",
      [ButtonSize.sm]: "h-10 px-5 text-sm",
      [ButtonSize.base]: "h-11 px-6 text-base",
      [ButtonSize.lg]: "h-12 px-7 text-base"
    },
    variant: {
      [ButtonVariant.primary]: "bg-primary text-secondary",
      [ButtonVariant.secondary]: "bg-secondary text-primary border border-primary",
      [ButtonVariant.muted]: "bg-muted border border-primary",
    }
  },
  defaultVariants: {
    size: ButtonSize.base,
    variant: ButtonVariant.primary
  }
});

type ButtonProps = {
  className?: string,
  children: React.ReactNode,
} & React.ComponentPropsWithRef<typeof buttonVariants> & VariantProps<typeof buttonVariants>;

export const Button: React.FC<ButtonProps> = ({ size, variant, className, children, ...restProps }) => {
  return (
    <button {...restProps} className={cn(buttonVariants({ size, variant, className }))}>
      {children}
    </button>
  );
};
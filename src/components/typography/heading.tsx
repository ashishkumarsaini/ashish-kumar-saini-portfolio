import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

export enum HeadingSize {
  xs = 'xs',
  sm = 'sm',
  base = 'base',
  lg = 'lg',
  xl = 'xl',
  xxl = 'xxl',
  xxxl = 'xxxl',
  xxxxl = 'xxxxl',
}

export enum HeadingLevel {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
}

const headingVariants = cva('font-medium tracking-wide', {
  variants: {
    size: {
      [HeadingSize.xs]: "text-xl",
      [HeadingSize.sm]: "text-2xl",
      [HeadingSize.base]: "text-3xl",
      [HeadingSize.lg]: "text-4xl",
      [HeadingSize.xl]: "text-5xl",
      [HeadingSize.xxl]: "text-6xl",
      [HeadingSize.xxxl]: "text-7xl",
      [HeadingSize.xxxxl]: "text-8xl",
    }
  },
  defaultVariants: {
    size: HeadingSize.base
  }
});

type HeadingProps = {
  className?: string,
  children: React.ReactNode,
  level?: HeadingLevel
} & React.ComponentPropsWithRef<typeof headingVariants> & VariantProps<typeof headingVariants>;

export const Heading: React.FC<HeadingProps> = ({ level, size, className, children, ...restProps }) => {
  const Comp = level ?? HeadingLevel.h1;

  return (
    <Comp {...restProps} className={cn(headingVariants({ size, className }))}>
      {children}
    </Comp>
  );
};
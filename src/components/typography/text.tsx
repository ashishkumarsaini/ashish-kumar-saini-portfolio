import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

export enum TextType {
  paragraph = 'p',
  span = 'span'
}

export enum TextSize {
  xxs = "xxs",
  xs = "xs",
  sm = "sm",
  base = "base",
  lg = "lg",
  xl = "xl",
  xxl = "xxl",
  xxxl = 'xxxl',
  xxxxl = 'xxxxl',
}

const textVariants = cva("antialiased", {
  variants: {
    size: {
      [TextSize.xxs]: "text-xs",
      [TextSize.xs]: "text-sm",
      [TextSize.sm]: "text-base",
      [TextSize.base]: "text-lg",
      [TextSize.lg]: "text-2xl",
      [TextSize.xl]: "text-3xl",
      [TextSize.xxl]: "text-4xl",
      [TextSize.xxxl]: "text-5xl",
      [TextSize.xxxxl]: "text-6xl",
    },
  },
  defaultVariants: {
    size: TextSize.base,
  },
})


type TextProps = {
  className?: string,
  children: React.ReactNode,
  type?: TextType
}
  & React.ComponentPropsWithoutRef<typeof textVariants>
  & VariantProps<typeof textVariants>;

export const Text: React.FC<TextProps> = ({ size, type, className, children, ...restProps }) => {
  const Comp = type ?? TextType.paragraph;

  return (
    <Comp {...restProps} className={cn(textVariants({ size, className }))}>
      {children}
    </Comp>
  );
};

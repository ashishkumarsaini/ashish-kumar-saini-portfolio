import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

export enum TextType {
  paragraph = 'p',
  span = 'span'
}

export enum TextSize {
  xs = "xs",
  sm = "sm",
  base = "base",
  lg = "lg",
  xl = "xl",
  xxl = "xxl",
  xxxl = 'xxxl',
  xxxxl = 'xxxxl',
}

const textVariants = cva("", {
  variants: {
    size: {
      [TextSize.xs]: "text-sm",
      [TextSize.sm]: "text-base",
      [TextSize.base]: "text-lg",
      [TextSize.lg]: "text-xl",
      [TextSize.xl]: "text-2xl",
      [TextSize.xxl]: "text-3xl",
      [TextSize.xxxl]: "text-4xl",
      [TextSize.xxxxl]: "text-5xl",
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

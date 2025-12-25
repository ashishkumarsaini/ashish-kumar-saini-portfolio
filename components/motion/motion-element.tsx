import { ReactElement, ReactNode } from "react";
import { motion } from "motion/react";

type MotionElement = keyof typeof motion;


type MotionElementProps= {
  as: MotionElement;   // "div" | "button" | "span" | ...
  children: ReactElement | ReactNode;
  [key: string]: unknown;
}


export const MotionElement = ({ as, children, ...rest }: MotionElementProps) => {

  if(typeof window === 'undefined'){
    return <div>{children}</div>
  }

  const Component = motion[as]; // dynamically accessing motion.<element>

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return <Component {...rest}>{children}</Component>;
};;


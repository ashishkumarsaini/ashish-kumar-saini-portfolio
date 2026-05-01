import { useEffect } from "react";

export const useScroll = (onScroll: (scrollY: number) => void)=>{
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
  
      requestAnimationFrame(() => {
        onScroll(scrollY)
      });
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onScroll]);
}
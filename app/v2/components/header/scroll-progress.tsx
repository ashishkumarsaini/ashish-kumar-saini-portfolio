'use client';
import { useScroll } from "@/hooks/use-scroll";

export const ScrollProgress = () => {
  useScroll((scrollY: number) => {
    const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    const scrollPercent = (scrollY / documentHeight) * 100;

    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
      progressBar.style.width = `${scrollPercent}%`
    }
  });

  return (
    <div id="progress-bar" className="bg-text fixed top-0 right-0 left-0 h-2 z-99 transtion-all" />
  )
}
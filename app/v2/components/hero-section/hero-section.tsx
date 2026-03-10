'use client';
import { useScroll } from "@/hooks/use-scroll";

export const HeroSection = () => {
  useScroll((scrollY: number) => {
    const heading = document.getElementById('heading');
    const description = document.getElementById('description-copy')

    if (heading) {
      heading.style.left = `-${Math.min(scrollY, heading.clientWidth) / 20}vw`;
      heading.style.top = `${scrollY}px`;
    }

    if (description) {
      description.style.top = `${scrollY}px`;
    }
  });

  return (
    <div className="p-10 pt-30 h-[1500px] z-1 overflow-clip">
      <h1 id="heading" className="relative text-[15vw] uppercase font-semibold whitespace-nowrap">
        Ashish Kumar Saini
      </h1>
      <div id="description-copy" className="relative">
        <p>I build modern web applications that are fast, scalable, and built for real users.</p>
        <p>From clean frontend experiences to reliable backend systems, I turn ideas into production-ready products.</p>
        <p>Available for freelance & collaboration.</p>
      </div>
    </div>
  )
}
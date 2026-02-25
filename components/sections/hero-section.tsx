"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import img from '../../public/hero-img.png'

export const HeroSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {

  }, []);

  return (
    <section ref={ref} className="min-h-screen" id="hero">
      <div className="grid grid-cols-12">
        <div className="col-start-1 col-end-6 flex items-center justify-center">
          <h1 className="text-7xl font-bold">Ashish Kumar Saini</h1>
        </div>
        <div className="col-start-6 col-end-13 flex items-center justify-center">
          <div className="relative mask-b-from-80% mask-radial-[50%_90%] mask-radial-from-70%">
            <Image src={img} alt="hero" height={500} width={500} />
          </div>
        </div>
      </div>
    </section>
  );
}
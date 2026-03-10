import { Header, ScrollProgress } from "./components/header";
import { HeroSection } from './components/hero-section/hero-section'
import { WhatIDo } from "./components/what-i-do-section";
import "./globals.css";
import { Mukta } from "next/font/google";

const roboto = Mukta({
  subsets: ["latin"],
  weight: ['400', '700']
});

export default function PageV2() {
  return (
    <body
      className={`${roboto.className} antialiased bg-light`}
    >
      <ScrollProgress />
      <Header />
      <main>
        <div>
          <HeroSection />
          <WhatIDo />
        </div>
      </main>
    </body>
  );
}

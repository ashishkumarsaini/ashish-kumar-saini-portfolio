import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

import { AppLayoutWrapper } from "./components/app-layout-wrapper";

const roboto = Inter_Tight({
  subsets: ["latin"],
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title: "Ashish Kumar Saini",
  description: "Full Stack Developer (Next.js | React | Node.js | TypeScript) | 5+ Yrs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased relative h-screen bg-black`}
      >
        <AppLayoutWrapper>
          {children}
        </AppLayoutWrapper>
      </body>
    </html>
  );
}

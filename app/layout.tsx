import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const roboto = Roboto({
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
        className={`${roboto.className} antialiased dark`}
      >
        <Header />
        <main className="max-w-[1480px] mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}

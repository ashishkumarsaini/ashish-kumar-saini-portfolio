import type { Metadata } from "next";

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
    <html lang="en" className="no-scrollbar scroll-smooth">
      {children}
    </html>
  );
}

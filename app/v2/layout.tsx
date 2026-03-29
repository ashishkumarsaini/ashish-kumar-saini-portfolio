import { Header } from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="max-w-[1500px] mx-auto px-4 sm:px-8">
        {children}
      </main>
    </>
  );
}
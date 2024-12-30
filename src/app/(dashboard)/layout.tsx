import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <main className="relative flex flex-row h-screen">
          <Layout />
          <div className="flex-grow flex-1 overflow-auto bg-gray-100">{children}</div>
        </main>
      </body>
    </html>
  );
}

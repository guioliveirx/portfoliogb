import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils"
import "./globals.css";
import { SideBar } from "@/components/base/SideBar";
import Footer from "@/components/base/Footer";

const inter = Inter({ subsets: ["latin"] })


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="scroll-smooth" lang="pt-BR">
      <body className={"font-[inter] antialiased"}>
        <div className="bg-gradient-to-b from-sky-800 to-sky-100 w-screen h-screen flex xl:flex-row flex-col xl:justify-center xl:items-center xl:gap-[10px]">
          <SideBar/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  );
}

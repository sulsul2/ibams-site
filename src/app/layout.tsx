import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import Title from "@/components/Title";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "I-Bams",
  description: "Integrated Building Automation Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} antialiased`}>
        <div className="flex">
          <SideBar />
          <div className="w-full relative px-10 pb-4">
            <Title />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import Navbar from '@/components/navbar'
import "./globals.css";
import Footer from "@/components/footer";

const font = Roboto_Flex({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Lucas Kissmann",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import '@/app/globals.css'
import Header from "@/components/Header";

const interSans = Inter({
  variable: "--font-heading",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TechMart - Product Detail",
  description: "Best E-Commerce Website Ever",
};

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

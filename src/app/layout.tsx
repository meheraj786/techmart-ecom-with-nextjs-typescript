import type { Metadata } from "next";
import { Poppins, Inter, Montserrat_Underline } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const interSans = Inter({
  variable: "--font-heading",
  subsets: ["latin"],
});
const montserrat = Montserrat_Underline({
  variable: "--font-logo",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TechMart",
  description: "Best E-Commerce Website Ever",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans.variable} ${poppins.variable} ${montserrat.variable}  antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

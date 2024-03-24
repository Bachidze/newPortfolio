import type { Metadata } from "next";
import {  Public_Sans, Ibarra_Real_Nova } from "next/font/google";
import "./globals.css";
import 'swiper/css';
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor/Cursor";
import Footer from "./components/Footer/Footer";
import Transition from "./components/transtionEffect/Transition";


const publicSans = Public_Sans({ subsets:['latin'],weight:['400','500','600','700']})
const ibra = Ibarra_Real_Nova({subsets:['latin'],weight:['400','500','600','700']})

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
    <html lang="en">
      <body className={` ${publicSans.className} ${ibra.className}`}>
        <Navbar />
        <Transition />
        <Cursor />
        {children}
        <Footer />
      </body>
    </html>
  );
}

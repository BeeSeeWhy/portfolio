import "@/styles/globals.css";
import { Montserrat } from "next/font/google";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export const metadata: Metadata = {
  title: "BeeSeeWhy's Portfolio",
  description: "Brandon Cruz-Youll's Portfolio.",
  icons: {
    icon: "/profilealt.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Analytics />
      <body className={`${montserrat.variable} font-mont bg-light w-full min-h-screen`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

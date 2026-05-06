import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechnoFit",
  description: "AI-powered fitness coaching platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-black text-white min-h-screen">

        {/* FOYER AI */}
        <Script
  src="https://api.foyer.ink/static/widget.js"
  strategy="afterInteractive"
  data-agent-id="tl_260f4c5b16c9"
  data-server="https://api.foyer.ink"
/>

        <Navbar />
<main className="pt-16">
  {children}
</main>

      </body>
    </html>
  );
}
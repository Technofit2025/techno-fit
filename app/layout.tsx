import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Analytics from "./components/Analytics";
import CookieConsent from "./components/CookieConsent";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const SITE_URL = "https://techno-fit.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TechnoFit — AI-Powered Fitness Coaching",
    template: "%s | TechnoFit",
  },
  description:
    "TechnoFit turns your phone into an intelligent AI coach that sees your form, corrects you in real time, and adapts to your goals.",
  applicationName: "TechnoFit",
  keywords: [
    "AI fitness app", "AI personal trainer", "pose correction", "real-time form correction",
    "AI workout coach", "voice fitness coaching", "AI physiotherapy", "smart nutrition", "TechnoFit",
  ],
  authors: [{ name: "TechnoFit" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "TechnoFit",
    url: SITE_URL,
    title: "TechnoFit — AI-Powered Fitness. Real Results.",
    description:
      "Your phone becomes an intelligent coach that sees your form, corrects you in real time, and adapts to you.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "TechnoFit — AI-Powered Fitness" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechnoFit — AI-Powered Fitness. Real Results.",
    description: "Your phone becomes an intelligent coach that sees, corrects and adapts to you.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}
    >
      <body className="bg-black text-white min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TechnoFit",
              url: "https://techno-fit.com",
              logo: "https://techno-fit.com/apple-touch-icon.png",
              description: "AI-powered fitness coaching platform.",
              sameAs: ["https://share.google/VQYndz4eCqSHAnJ6W"],
            }),
          }}
        />

        {/* FOYER AI */}
        <Script
  src="https://api.foyer.ink/static/widget.js"
  strategy="afterInteractive"
  data-agent-id="tl_260f4c5b16c9"
  data-server="https://api.foyer.ink"
/>

        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />

        <Analytics />
        <CookieConsent />
      </body>
    </html>
  );
}
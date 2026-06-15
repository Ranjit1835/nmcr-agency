import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NMCR AI Agency | AI Receptionists for Home Services | Never Miss a Call",
  description:
    "Your AI receptionist answers every call 24/7, books appointments, and recovers lost revenue for HVAC, plumbing, electrical, and roofing businesses. Free missed-call audit.",
  keywords:
    "AI receptionist, home services AI, HVAC answering service, plumbing AI, missed call recovery, AI voice agent, appointment booking AI",
  authors: [{ name: "NMCR AI Agency" }],
  openGraph: {
    type: "website",
    siteName: "NMCR AI Agency",
    title: "NMCR AI Agency | AI Receptionists for Home Services",
    description:
      "Stop losing $3,500 jobs to voicemail. Your AI receptionist answers every call 24/7 and books the appointment before your competitor can.",
    url: "https://nmcragency.com",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NMCR AI Agency | AI Receptionists for Home Services",
    description:
      "Stop losing $3,500 jobs to voicemail. Your AI receptionist answers every call 24/7.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SignupPopup } from "@/components/signup-popup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ConvoFlow - AI-Powered Lead Qualification & Booking",
  description:
    "The ConvoFlow Growth Engine builds and runs your entire acquisition system, engineered to double the number of qualified conversations you get from the leads you already generate.",
  keywords: [
    "AI sales",
    "lead qualification",
    "booking automation",
    "AI caller",
    "sales automation",
    "lead nurturing",
  ],
  openGraph: {
    title: "ConvoFlow - AI-Powered Lead Qualification & Booking",
    description:
      "Double your qualified conversations without increasing ad spend.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <SignupPopup />
      </body>
    </html>
  );
}

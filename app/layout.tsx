import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { draftMode } from "next/headers";
import { VisualEditing } from "next-sanity/visual-editing";
import "./globals.css";
import { SignupPopup } from "@/components/signup-popup";
import { SignupPopupProvider } from "@/lib/signup-popup-context";
import { DisableDraftMode } from "@/components/disable-draft-mode";
import { SanityLive } from "@/lib/sanity/live";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDraftMode = (await draftMode()).isEnabled;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SignupPopupProvider>
          {children}
          <SignupPopup />
        </SignupPopupProvider>
        <SanityLive />
        {isDraftMode && (
          <>
            <DisableDraftMode />
            <VisualEditing />
          </>
        )}
      </body>
    </html>
  );
}

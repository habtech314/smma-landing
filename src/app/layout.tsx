import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zebrihan Venture | Social Media Marketing Course",
  description: "Master Social Media Marketing with Zebrihan Venture. Learn to create professional images and videos. Online or in-person training in Ethiopia.",
  keywords: ["SMMA", "Social Media Marketing", "Ethiopia", "Digital Marketing", "Online Course", "Video Editing", "Image Creation"],
  openGraph: {
    title: "Zebrihan Venture | Social Media Marketing Course",
    description: "Master Social Media Marketing with Zebrihan Venture. Learn to create professional images and videos.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col relative">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
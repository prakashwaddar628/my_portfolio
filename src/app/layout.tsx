import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import PageWrapper from "@/components/PageWrapper";
import Link from "next/link";
import ParticlesBackground from "@/components/ParticlesBackground";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prakash Waddar | Portfolio",
  description: "Full-Stack Developer | AI & Data Science Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="animated-gradient text-white transition-all duration-300">
        {/* Navbar */}
        <Navbar />

        {/* Page Content Wrapper */}
        <PageWrapper>
          <main className="pt-16 p-6">{children}</main>
        </PageWrapper>
        <ParticlesBackground />
      </body>
    </html>
  );
}

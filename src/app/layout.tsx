import type { Metadata } from "next";
import "./globals.css";
import PageWrapper from "@/components/PageWrapper";
import Navbar from "@/components/Navbar";


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
      </body>
    </html>
  );
}

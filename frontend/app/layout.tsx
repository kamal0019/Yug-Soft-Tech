import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals_v2.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Yug Soft-Tech | delivers premium SaaS solutions ",
  description: "All-in-One ERP, Website & Admission Growth Solution for Schools.Boost admissions.",
};



import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { Toaster } from "sonner";

import { BookingProvider } from "@/context/BookingContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-background text-foreground`}>
        <ScrollProgress />
        <BookingProvider>
          <Navbar />
          {children}
          <Footer />
          <StickyCTA />
          <Toaster />
        </BookingProvider>
      </body>
    </html>
  );
}

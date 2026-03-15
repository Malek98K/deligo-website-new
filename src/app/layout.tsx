import type { Metadata } from "next";
import { Inter, Pacifico } from "next/font/google";
import "./globals.css";
import { Navbar, Footer, AnimatedBackground } from "@/components";
import { TranslationProvider } from "@/i18n";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const pacifico = Pacifico({ weight: "400", subsets: ["latin"], variable: "--font-pacifico", display: "swap" });

export const metadata: Metadata = {
  title: "Déligo - Move anything, anytime",
  description: "Fast, secure, and professional moving service platform. Built for trust and scale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${pacifico.variable} font-sans antialiased min-h-screen flex flex-col bg-transparent relative`}>
        <TranslationProvider>
          <AnimatedBackground />
          <Navbar />
          <main className="flex-1 pt-24 relative z-10">{children}</main>
          <Footer />
        </TranslationProvider>
      </body>
    </html>
  );
}

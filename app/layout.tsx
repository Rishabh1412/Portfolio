import type { Metadata } from "next";
import "./globals.css";
import LenisProvider from "./providers/lenis-providers";

// Import the Google Font
import { Plus_Jakarta_Sans } from "next/font/google";

// Configure it to use the exact same CSS variable you were already using
const primaryFont = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-plusjakarta-sans", 
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rishabh Kartik - Portfolio",
  description: "Welcome to my portfolio! I'm Rishabh Kartik, a passionate software developer specializing in web development. Explore my projects, skills, and experience as you navigate through my work. Feel free to connect with me for collaborations or opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        suppressHydrationWarning={true}
        className={`${primaryFont.className} antialiased`}
      >
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}